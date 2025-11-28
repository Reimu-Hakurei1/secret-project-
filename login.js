// login.js
const loginTranslations = {
  th: {
    "login_title": "เข้าสู่ระบบ",
    "login_subtitle": "กรุณากรอกอีเมลและรหัสผ่าน",
    "email": "อีเมล",
    "email_placeholder": "เช่น example@domain.com",
    "email_error": "กรุณากรอกอีเมลที่ถูกต้อง",
    "password": "รหัสผ่าน",
    "password_placeholder": "กรอกรหัสผ่าน",
    "password_error": "กรุณากรอกรหัสผ่าน",
    "login_btn": "เข้าสู่ระบบ",
    "no_account": "ยังไม่มีบัญชี?",
    "register_link": "สมัครสมาชิก",
    "error_title": "เกิดข้อผิดพลาด!",
    "loading": "กำลังเข้าสู่ระบบ...",
    "please_wait": "กรุณารอสักครู่"
  },
  en: {
    "login_title": "Login",
    "login_subtitle": "Please enter your email and password",
    "email": "Email",
    "email_placeholder": "e.g. example@domain.com",
    "email_error": "Please enter a valid email",
    "password": "Password",
    "password_placeholder": "Enter your password",
    "password_error": "Please enter your password",
    "login_btn": "Login",
    "no_account": "Don't have an account?",
    "register_link": "Register",
    "error_title": "Error!",
    "loading": "Logging in...",
    "please_wait": "Please wait a moment"
  }
};

let currentLang = 'th';

document.addEventListener('DOMContentLoaded', function() {
  initializeLoginApp();
});

async function initializeLoginApp() {
  // Initialize language
  initializeLanguage();
  
  // Set up event listeners
  setupEventListeners();
  
  // Check if user is already logged in
  checkExistingAuth();
}

function initializeLanguage() {
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('preferredLang') || 'th';
  currentLang = savedLang;
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
    
    if (btn.getAttribute('data-lang') === savedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  switchLanguage(savedLang);
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update button active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update page title
  updatePageTitle(lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (loginTranslations[lang] && loginTranslations[lang][key]) {
      element.textContent = loginTranslations[lang][key];
    }
  });
  
  // Update placeholder texts
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (loginTranslations[lang] && loginTranslations[lang][key]) {
      element.setAttribute('placeholder', loginTranslations[lang][key]);
    }
  });
}

function updatePageTitle(lang) {
  const titleElement = document.querySelector('title');
  const key = 'login_title';
  if (loginTranslations[lang] && loginTranslations[lang][key]) {
    titleElement.textContent = loginTranslations[lang][key] + ' - STIU Student Portal';
  }
}

function setupEventListeners() {
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
}

async function handleLogin(e) {
  e.preventDefault();
  
  resetErrorMessages();
  hideError();
  
  if (!validateLoginForm()) {
    return;
  }
  
  await performLogin();
}

function validateLoginForm() {
  let isValid = true;
  
  const emailField = document.getElementById('loginEmail');
  const passwordField = document.getElementById('loginPassword');
  
  // Validate email
  if (!emailField.value.trim()) {
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
  } else if (!isValidEmail(emailField.value)) {
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
  }
  
  // Validate password
  if (!passwordField.value.trim()) {
    document.getElementById('password-error').style.display = 'block';
    isValid = false;
  }
  
  return isValid;
}

async function performLogin() {
  const loginBtn = document.getElementById('loginBtn');
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Show loading state
  setLoginButtonLoading(true);
  showLoadingSpinner();
  
  try {
    // Wait for Firebase to be ready
    await waitForFirebase();
    
    // Sign in with email and password
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    console.log('✅ Login successful:', user.email);
    
    // Hide loading spinner
    hideLoadingSpinner();
    
    // Redirect to dashboard
    window.location.href = 'index.html';
    
  } catch (error) {
    console.error('❌ Login failed:', error);
    
    let errorMessage = currentLang === 'th' 
      ? 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' 
      : 'Invalid email or password';
    
    if (error.code === 'auth/user-not-found') {
      errorMessage = currentLang === 'th' 
        ? 'ไม่พบผู้ใช้งานนี้' 
        : 'User not found';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = currentLang === 'th' 
        ? 'รหัสผ่านไม่ถูกต้อง' 
        : 'Wrong password';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = currentLang === 'th' 
        ? 'รูปแบบอีเมลไม่ถูกต้อง' 
        : 'Invalid email format';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = currentLang === 'th' 
        ? 'พยายามเข้าสู่ระบบหลายครั้งเกินไป กรุณารอสักครู่' 
        : 'Too many login attempts. Please try again later.';
    }
    
    // Hide loading spinner and show error
    hideLoadingSpinner();
    showError(errorMessage);
    setLoginButtonLoading(false);
  }
}

function checkExistingAuth() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, redirect to dashboard
      window.location.href = 'index.html';
    }
  });
}

function resetErrorMessages() {
  const errorMessages = document.querySelectorAll('.field-error');
  errorMessages.forEach(msg => {
    msg.style.display = 'none';
  });
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  const errorText = document.getElementById('error-text');
  
  if (errorMessage && errorText) {
    errorMessage.style.display = 'block';
    errorText.textContent = message;
  }
}

function hideError() {
  const errorMessage = document.getElementById('errorMessage');
  if (errorMessage) {
    errorMessage.style.display = 'none';
  }
}

function setLoginButtonLoading(loading) {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    if (loading) {
      loginBtn.disabled = true;
      loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + 
                          loginTranslations[currentLang].loading;
    } else {
      loginBtn.disabled = false;
      loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>' + 
                          loginTranslations[currentLang].login_btn;
    }
  }
}

function showLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.style.display = 'flex';
  }
}

function hideLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function waitForFirebase() {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = 50;
    
    const checkFirebase = () => {
      attempts++;
      
      if (window.firebaseDb && typeof window.firebaseDb.collection === 'function') {
        console.log('✅ Firebase is ready');
        resolve();
      } else if (attempts >= maxAttempts) {
        console.log('⚠️ Firebase timeout, continuing anyway...');
        resolve();
      } else {
        setTimeout(checkFirebase, 100);
      }
    };
    
    checkFirebase();
  });
}