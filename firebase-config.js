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
    }
    
    // Initialize services
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    // Set persistence
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => console.log('✅ Auth persistence enabled'))
        .catch(error => console.warn('⚠️ Auth persistence failed:', error));
    
    // Export services
    window.firebaseAuth = auth;
    window.firebaseDb = db;
    window.firebaseReady = true;
    
    console.log('🎯 Firebase fully initialized');
    
} catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    window.firebaseReady = false;
}

// Utility function to check Firebase status
window.checkFirebaseStatus = function() {
    return {
        ready: window.firebaseReady,
        auth: !!window.firebaseAuth,
        firestore: !!window.firebaseDb,
        config: firebaseConfig
    };
};