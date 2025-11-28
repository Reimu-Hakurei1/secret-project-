// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4da_4ZSqU-RgLH4FbtznxEEtX10kL7PA",
    authDomain: "secret-b7e9e.firebaseapp.com",
    projectId: "secret-b7e9e",
    storageBucket: "secret-b7e9e.firebasestorage.app",
    messagingSenderId: "638734124692",
    appId: "1:638734124692:web:15870de99a5d53c56c5681",
    measurementId: "G-Y88HB33T00"
};

console.log('🚀 Initializing Firebase...');

// Initialize Firebase
function initializeFirebase() {
    try {
        if (typeof firebase === 'undefined') {
            throw new Error('Firebase SDK not loaded');
        }
        
        // Initialize Firebase app
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('✅ Firebase app initialized');
        } else {
            firebase.app();
        }
        
        // Initialize Firestore
        const db = firebase.firestore();
        
        // Initialize Auth
        const auth = firebase.auth();
        
        // Firestore settings for better compatibility
        db.settings({
            experimentalForceLongPolling: true
        });
        
        // Export services immediately
        window.firebaseDb = db;
        window.firebaseAuth = auth;
        window.firebaseReady = true;
        
        console.log('🎯 Firebase Firestore and Auth initialized successfully');
        
        // Set up auth state observer with timeout protection
        const authTimeout = setTimeout(() => {
            console.log('⚠️ Auth state observer taking too long, continuing...');
        }, 3000);
        
        auth.onAuthStateChanged((user) => {
            clearTimeout(authTimeout);
            if (user) {
                console.log('👤 User is signed in:', user.email);
            } else {
                console.log('👤 No user signed in');
            }
        }, (error) => {
            clearTimeout(authTimeout);
            console.warn('⚠️ Auth state observer error:', error);
        });
        
    } catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        window.firebaseReady = false;
        window.firebaseError = error;
    }
}

// Initialize immediately
initializeFirebase();

// Enhanced Firebase initialization with retry logic
window.initializeFirebaseWithRetry = async function(maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`🚀 Initializing Firebase (Attempt ${attempt}/${maxRetries})...`);
            
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase SDK not loaded');
            }
            
            // Re-initialize if needed
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            // Test Firestore connection
            const db = firebase.firestore();
            const testQuery = db.collection('test').limit(1);
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(() => resolve(), 2000);
                testQuery.get().then(() => {
                    clearTimeout(timeout);
                    resolve();
                }).catch(() => {
                    clearTimeout(timeout);
                    resolve(); // Continue even if Firestore fails
                });
            });
            
            window.firebaseDb = db;
            window.firebaseAuth = firebase.auth();
            window.firebaseReady = true;
            
            console.log('✅ Firebase initialized successfully on attempt', attempt);
            return true;
            
        } catch (error) {
            console.error(`❌ Firebase initialization attempt ${attempt} failed:`, error);
            
            if (attempt === maxRetries) {
                window.firebaseReady = false;
                window.firebaseError = error;
                return false;
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
};

// Utility function to check Firebase status
window.checkFirebaseStatus = function() {
    return {
        ready: window.firebaseReady,
        firestore: !!window.firebaseDb,
        auth: !!window.firebaseAuth,
        config: firebaseConfig,
        error: window.firebaseError
    };
};

// Enhanced Firebase Auth error code translations
window.getAuthErrorMessage = function(error, lang = 'th') {
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
    
    return errorMessages[lang][error.code] || error.message;
};

// Test Firebase connection
window.testFirebaseConnection = async function() {
    try {
        if (!window.firebaseAuth) {
            throw new Error('Firebase Auth not available');
        }
        
        // Simple test to check if Firebase is working
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                resolve({ success: false, message: 'Firebase connection timeout' });
            }, 5000);
            
            window.firebaseAuth.signInAnonymously().then(() => {
                clearTimeout(timeout);
                resolve({ success: true, message: 'Firebase connection successful' });
            }).catch((error) => {
                clearTimeout(timeout);
                // Even if auth fails, we might still have Firestore
                resolve({ 
                    success: false, 
                    message: 'Firebase auth test failed: ' + error.message 
                });
            });
        });
        
    } catch (error) {
        return { success: false, message: 'Firebase connection failed: ' + error.message };
    }
};