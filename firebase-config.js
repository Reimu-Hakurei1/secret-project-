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
    
    // Initialize Firestore only (no auth needed)
    const db = firebase.firestore();
    
    // Disable persistence to avoid multi-tab issues
    const dbSettings = {
        experimentalForceLongPolling: true // Helps with some network issues
    };
    
    // Export services immediately
    window.firebaseDb = db;
    window.firebaseReady = true;
    
    console.log('🎯 Firebase Firestore initialized successfully');
    
} catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    window.firebaseReady = false;
    window.firebaseError = error;
}

// Utility function to check Firebase status
window.checkFirebaseStatus = function() {
    return {
        ready: window.firebaseReady,
        firestore: !!window.firebaseDb,
        config: firebaseConfig,
        error: window.firebaseError
    };
};