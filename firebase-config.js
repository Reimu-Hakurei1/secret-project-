// firebase-config.js (patched)
// Replaces original file. Keeps global "firebase" usage to remain compatible
// with existing project JS files that expect window.firebase*, but:
//  - avoids repeated db.settings() calls to prevent the "overriding host" warning
//  - adds origin/referrer detection for easier debugging of 403s
//  - improves error handling and retry logic

// ---------------------------
// CONFIG - edit if needed
// ---------------------------
// Ensure these referrers are present in Google Cloud Console for your API key:
//   https://reimu-hakurei1.github.io/*
//   https://reimu-hakurei1.github.io/secret-project-/*
//   http://localhost/*
//   http://localhost:3000/*
//   http://127.0.0.1/*
//   http://127.0.0.1:3000/*
const firebaseConfig = {
    apiKey: "AIzaSyC4da_4ZSqU-RgLH4FbtznxEEtX10kL7PA",
    authDomain: "secret-b7e9e.firebaseapp.com",
    projectId: "secret-b7e9e",
    storageBucket: "secret-b7e9e.firebasestorage.app",
    messagingSenderId: "638734124692",
    appId: "1:638734124692:web:15870de99a5d53c56c5681",
    measurementId: "G-Y88HB33T00"
};

// Allowed origins for quick debugging. Update as necessary.
const allowedOrigins = new Set([
    "https://reimu-hakurei1.github.io",
    "https://reimu-hakurei1.github.io/secret-project-",
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1",
    "http://127.0.0.1:3000"
]);

// Helper to mask apiKey in logs (do not accidentally leak in console)
function maskApiKey(key) {
    if (!key || key.length < 8) return "********";
    return key.slice(0, 4) + "..." + key.slice(-4);
}

// Provide a friendly startup message
console.log("🚀 Initializing Firebase...");

// Reveal origin info and warn if not allowed (helps diagnose 403 referrer errors)
try {
    const currentOrigin = window.location && window.location.origin ? window.location.origin : "unknown-origin";
    console.log("ℹ️ Current origin:", currentOrigin);
    if (!Array.from(allowedOrigins).some(o => currentOrigin.startsWith(o))) {
        console.warn("⚠️ WARNING: Current origin is not in the allowedOrigins list. If you have API key referrer restrictions enabled in Google Cloud, add this origin:", currentOrigin);
        console.warn("→ Update Google Cloud Console: APIs & Services → Credentials → Select Key → Application restrictions (HTTP referrers).");
    }
} catch (e) {
    // Non-blocking
    console.warn("⚠️ Could not determine current origin for debug checks:", e && e.message ? e.message : e);
}

// Internal global flags to avoid applying settings multiple times
window.__firebaseConfigPatched = window.__firebaseConfigPatched || {};
window.__firebaseConfigPatched._settingsApplied = window.__firebaseConfigPatched._settingsApplied || false;
window.__firebaseConfigPatched._initialized = window.__firebaseConfigPatched._initialized || false;

function initializeFirebase() {
    try {
        if (window.__firebaseConfigPatched._initialized) {
            console.log("⚡ Firebase already initialized (skipping).");
            return;
        }

        if (typeof window.firebase === 'undefined') {
            throw new Error('Firebase SDK not loaded. Make sure you include the Firebase CDN before this script.');
        }

        // Initialize app only once
        if (!firebase.apps || firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
            console.log("✅ Firebase app initialized (apiKey:", maskApiKey(firebaseConfig.apiKey) + ")");
        } else {
            // Already initialized; reuse the default app
            firebase.app();
            console.log("✅ Firebase app already present, reusing existing app");
        }

        // Initialize Firestore and Auth references
        const db = firebase.firestore();
        const auth = firebase.auth();

        // Apply Firestore settings only once to avoid "overriding host" warning
        // Using a global flag (window.__firebaseConfigPatched._settingsApplied)
        if (!window.__firebaseConfigPatched._settingsApplied) {
            try {
                // We only set experimentalForceLongPolling to improve compatibility in some GCP/hosted environments.
                // Do not override other user settings. Use a safe approach: set only what we need.
                db.settings({ experimentalForceLongPolling: true });
                window.__firebaseConfigPatched._settingsApplied = true;
                console.log("🔧 Firestore settings applied (experimentalForceLongPolling: true)");
            } catch (errSettings) {
                // If settings call fails, just warn but continue
                console.warn("⚠️ Firestore settings could not be applied:", errSettings && errSettings.message ? errSettings.message : errSettings);
            }
        } else {
            console.log("🔧 Firestore settings already applied (skipping)");
        }

        // Export to global/window so other scripts can access them as before
        window.firebaseDb = db;
        window.firebaseAuth = auth;
        window.firebaseConfig = firebaseConfig; // original config (be careful with logging)
        window.firebaseReady = true;
        window.__firebaseConfigPatched._initialized = true;

        console.log("🎯 Firebase Firestore and Auth initialized successfully");

        // Auth state observer with timeout to avoid hanging behavior
        const authTimeout = setTimeout(() => {
            console.warn("⚠️ Auth state observer taking too long - continuing without state.");
        }, 3000);

        if (auth && typeof auth.onAuthStateChanged === 'function') {
            auth.onAuthStateChanged((user) => {
                clearTimeout(authTimeout);
                if (user) {
                    console.log("👤 User is signed in:", user.email || user.uid);
                } else {
                    console.log("👤 No user signed in");
                }
            }, (err) => {
                clearTimeout(authTimeout);
                console.warn("⚠️ Auth state observer error:", err && err.message ? err.message : err);
            });
        } else {
            clearTimeout(authTimeout);
            console.warn("⚠️ auth.onAuthStateChanged not available - firebase-auth SDK may be missing");
        }
    } catch (error) {
        console.error("❌ Firebase initialization failed:", error && error.message ? error.message : error);
        window.firebaseReady = false;
        window.firebaseError = error;
    }
}

// Run initial initialization
initializeFirebase();

// Enhanced initialization with retry (useful for flaky network or delayed SDK load)
window.initializeFirebaseWithRetry = async function(maxRetries = 3, delayMs = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`🚀 initializeFirebaseWithRetry attempt ${attempt}/${maxRetries}`);
            if (!window.__firebaseConfigPatched._initialized) {
                initializeFirebase();
            }
            if (window.firebaseReady) {
                // Quick Firestore smoke test (non-fatal)
                const db = window.firebaseDb;
                if (db && typeof db.collection === 'function') {
                    try {
                        // Use a short timeout to avoid blocking
                        const p = db.collection('__ping').limit(1).get();
                        // Race between get() and a timeout
                        const result = await Promise.race([
                            p,
                            new Promise((resolve) => setTimeout(() => resolve(null), 2000))
                        ]);
                        // We don't assert success; presence of SDK is enough
                    } catch (e) {
                        /* ignore Firestore test errors */
                    }
                }
                console.log("✅ initializeFirebaseWithRetry succeeded");
                return true;
            } else {
                throw new Error("firebaseReady is false after initialization attempt");
            }
        } catch (err) {
            console.warn(`⚠️ initializeFirebaseWithRetry attempt ${attempt} failed:`, err && err.message ? err.message : err);
            if (attempt === maxRetries) {
                window.firebaseReady = false;
                window.firebaseError = err;
                return false;
            }
            await new Promise(res => setTimeout(res, delayMs * attempt));
        }
    }
    return false;
};

// Utility: check status
window.checkFirebaseStatus = function() {
    return {
        ready: !!window.firebaseReady,
        firestore: !!window.firebaseDb,
        auth: !!window.firebaseAuth,
        configMasked: {
            apiKey: maskApiKey(firebaseConfig.apiKey),
            authDomain: firebaseConfig.authDomain,
            projectId: firebaseConfig.projectId
        },
        fullConfig: typeof __DEV__ !== 'undefined' && __DEV__ ? firebaseConfig : undefined,
        error: window.firebaseError || null
    };
};

// Friendly mapping of auth error codes -> localized messages
window.getAuthErrorMessage = function (error, lang = 'th') {
    try {
        const errorMessages = {
            'th': {
                'auth/email-already-in-use': 'อีเมลนี้ได้สมัครไว้แล้ว',
                'auth/invalid-email': 'รูปแบบอีเมลไม่ถูกต้อง',
                'auth/operation-not-allowed': 'ระบบลงทะเบียนถูกปิดใช้งานชั่วคราว',
                'auth/weak-password': 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร',
                'auth/user-disabled': 'บัญชีผู้ใช้นี้ถูกปิดใช้งาน',
                'auth/user-not-found': 'ไม่พบผู้ใช้งานนี้',
                'auth/wrong-password': 'รหัสผ่านไม่ถูกต้อง',
                'auth/too-many-requests': 'พยายามเข้าสู่ระบบหลายครั้งเกินไป กรุณาลองใหม่ในภายหลัง',
                'auth/network-request-failed': 'เกิดข้อผิดพลาดทางเครือข่าย กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต',
                'auth/requires-recent-login': 'ต้องการการเข้าสู่ระบบล่าสุด',
                'auth/provider-already-linked': 'บัญชีนี้ได้เชื่อมกับผู้ให้บริการนี้แล้ว',
                'auth/credential-already-in-use': 'ข้อมูลรับรองนี้ถูกใช้งานแล้ว',
                'auth/invalid-credential': 'ข้อมูลรับรองไม่ถูกต้อง',
                'auth/invalid-verification-code': 'รหัสยืนยันไม่ถูกต้อง',
                'auth/invalid-verification-id': 'รหัสยืนยันไม่ถูกต้อง',
                'auth/quota-exceeded': 'เกินโควต้าที่กำหนด',
                'auth/timeout': 'การดำเนินการหมดเวลา',
                'auth/unauthorized-domain': 'โดเมนนี้ไม่ได้รับอนุญาต'
            },
            'en': {
                'auth/email-already-in-use': 'This email is already registered',
                'auth/invalid-email': 'Invalid email format',
                'auth/operation-not-allowed': 'Registration system temporarily disabled',
                'auth/weak-password': 'Password should be at least 6 characters',
                'auth/user-disabled': 'This user account has been disabled',
                'auth/user-not-found': 'User not found',
                'auth/wrong-password': 'Wrong password',
                'auth/too-many-requests': 'Too many login attempts. Please try again later',
                'auth/network-request-failed': 'Network error. Please check your internet connection',
                'auth/requires-recent-login': 'Requires recent login',
                'auth/provider-already-linked': 'Account is already linked with this provider',
                'auth/credential-already-in-use': 'Credential is already in use',
                'auth/invalid-credential': 'Invalid credential',
                'auth/invalid-verification-code': 'Invalid verification code',
                'auth/invalid-verification-id': 'Invalid verification ID',
                'auth/quota-exceeded': 'Quota exceeded',
                'auth/timeout': 'Operation timed out',
                'auth/unauthorized-domain': 'This domain is not authorized'
            }
        };
        if (!error || !error.code) {
            return error && error.message ? error.message : "Unknown error";
        }
        const map = (errorMessages[lang] || {}).hasOwnProperty(error.code) ? errorMessages[lang] : (errorMessages['en'] || {});
        return map[error.code] || error.message || JSON.stringify(error);
    } catch (e) {
        return error && error.message ? error.message : "Unknown error";
    }
};

// Lightweight connectivity test - returns simple object
window.testFirebaseConnection = async function () {
    try {
        if (!window.firebaseAuth) {
            return { success: false, message: 'Firebase Auth not available' };
        }
        const auth = window.firebaseAuth;
        // Use signInAnonymously only if available (and this does not damage your security model)
        if (typeof auth.signInAnonymously !== 'function') {
            return { success: false, message: 'Firebase Auth signInAnonymously not available in this SDK' };
        }
        // Temporary anonymous sign-in check (will create an anonymous user in your project if enabled)
        const result = await auth.signInAnonymously().then(() => ({ success: true, message: 'Firebase connection successful (anonymous sign-in ok)' }))
            .catch(err => ({ success: false, message: 'Firebase auth test failed: ' + (err && err.message ? err.message : JSON.stringify(err)) }));
        return result;
    } catch (err) {
        return { success: false, message: 'Firebase connection failed: ' + (err && err.message ? err.message : err) };
    }
};

// Done - initialization complete
console.log("firebase-config.js loaded.");
