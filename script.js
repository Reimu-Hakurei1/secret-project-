// Language translations
const translations = {
  th: {
    // Form titles
    "form_title": "ส่งแล้ว!",
    "form_subtitle": "กรอกข้อมูลให้ถูกต้องเพื่อยืนยันตัวตน",
    
    // Form fields
    "first_name": "ชื่อ",
    "first_name_placeholder": "เช่น สดาวรรณ",
    "first_name_error": "กรุณากรอกชื่อ",
    
    "last_name": "นามสกุล",
    "last_name_placeholder": "เช่น ศรีสุข",
    "last_name_error": "กรุณากรอกนามสกุล",
    
    "email": "อีเมล",
    "email_placeholder": "เช่น example@domain.com",
    "email_error": "กรุณากรอกอีเมลที่ถูกต้อง",
    
    "student_id": "รหัสนักศึกษา",
    "student_id_placeholder": "เช่น 6512345678",
    "student_id_error": "กรุณากรอกรหัสนักศึกษา",
    
    "country": "ประเทศ",
    "select_country": "เลือกประเทศ",
    "thailand": "ไทย",
    "myanmar": "เมียนมา",
    "other": "อื่นๆ",
    "country_error": "กรุณาเลือกประเทศ",
    
    "track_label": "เลือกสาขาวิชา",
    "select_track": "เลือกสาขาวิชา",
    "track_software": "วิศวกรรมซอฟต์แวร์",
    "track_data": "วิทยาศาสตร์ข้อมูล",
    "track_network": "เครือข่ายและความปลอดภัย",
    "track_error": "กรุณาเลือกสาขาวิชา",
    
    // Year fields
    "year_label": "ชั้นปี",
    "select_year": "เลือกชั้นปี",
    "year1": "ปี 1",
    "year2": "ปี 2", 
    "year3": "ปี 3",
    "year4": "ปี 4",
    "year_error": "กรุณาเลือกชั้นปี",
    
    // Term fields
    "term_label": "ภาคเรียน",
    "select_term": "เลือกภาคเรียน",
    "term1": "ภาคเรียนที่ 1",
    "term2": "ภาคเรียนที่ 2", 
    "term3": "ภาคเรียนที่ 3",
    "term_error": "กรุณาเลือกภาคเรียน",
    
    "agree_text": "ฉันยอมรับ",
    "terms_link": "ข้อกำหนดและเงื่อนไข",
    "and_text": "และ",
    "privacy_link": "นโยบายความเป็นส่วนตัว",
    "agree_error": "กรุณายอมรับข้อกำหนดและเงื่อนไข",
    
    "submit_btn": "ส่งแล้ว!",
    "reset_btn": "ล้างแบบฟอร์ม",
    
    "success_title": "ส่งแล้ว!สำเร็จ!",
    "success_message": "เราได้ส่งอีเมลยืนยันไปยังที่อยู่อีเมลของคุณแล้ว กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี",
    "error_title": "เกิดข้อผิดพลาด!",
    "db_success": "ข้อมูลถูกบันทึกลงฐานข้อมูลเรียบร้อย",
    "loading": "กำลังส่งแล้ว!..."
  },
  en: {
    // Form titles
    "form_title": "Registration",
    "form_subtitle": "Fill in the information correctly to verify your identity",
    
    // Form fields
    "first_name": "First Name",
    "first_name_placeholder": "e.g. John",
    "first_name_error": "Please enter your first name",
    
    "last_name": "Last Name",
    "last_name_placeholder": "e.g. Smith",
    "last_name_error": "Please enter your last name",
    
    "email": "Email",
    "email_placeholder": "e.g. example@domain.com",
    "email_error": "Please enter a valid email",
    
    "student_id": "Student ID",
    "student_id_placeholder": "e.g. 6512345678",
    "student_id_error": "Please enter your student ID",
    
    "country": "Country",
    "select_country": "Select country",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "other": "Other",
    "country_error": "Please select country",
    
    "track_label": "Choose Track",
    "select_track": "Select track",
    "track_software": "Software Engineering",
    "track_data": "Data Science",
    "track_network": "Network and Security",
    "track_error": "Please select a track",
    
    // Year fields
    "year_label": "Year",
    "select_year": "Select year",
    "year1": "Year 1",
    "year2": "Year 2",
    "year3": "Year 3", 
    "year4": "Year 4",
    "year_error": "Please select year",
    
    // Term fields
    "term_label": "Term",
    "select_term": "Select term",
    "term1": "Term 1",
    "term2": "Term 2",
    "term3": "Term 3",
    "term_error": "Please select term",
    
    "agree_text": "I agree to the",
    "terms_link": "Terms and Conditions",
    "and_text": "and",
    "privacy_link": "Privacy Policy",
    "agree_error": "Please accept the terms and conditions",
    
    "submit_btn": "Register",
    "reset_btn": "Reset Form",
    
    "success_title": "Registration Successful!",
    "success_message": "We've sent a confirmation email to your address. Please check your email to verify your account.",
    "error_title": "Error!",
    "db_success": "Data saved to database successfully",
    "loading": "Registering..."
  }
};

// Current language
let currentLang = 'th';

// DOM elements
let form, resetBtn, successMessage, submitBtn, errorMessage;

// Firebase status
let firebaseInitialized = false;

// Wait for Firebase to be ready
function waitForFirebase() {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const maxAttempts = 20; // 2 seconds timeout
    
    const checkFirebase = () => {
      attempts++;
      
      // Check if Firestore is available
      if (window.firebaseDb && typeof window.firebaseDb.collection === 'function') {
        console.log('✅ Firebase Firestore is ready');
        resolve();
      } else if (attempts >= maxAttempts) {
        // If Firebase takes too long, continue anyway
        console.warn('⚠️ Firebase initialization slow, but continuing...');
        resolve();
      } else {
        setTimeout(checkFirebase, 100);
      }
    };
    
    checkFirebase();
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

async function initializeApp() {
  // Initialize DOM elements
  initializeDOMElements();
  
  // Initialize language system
  initializeLanguage();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize Firebase
  try {
    await waitForFirebase();
    console.log('🎯 Application fully initialized with Firebase');
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    showError(currentLang === 'th' ? 
      'ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้' : 
      'Cannot connect to database');
  }
}

function initializeDOMElements() {
  form = document.getElementById('signupForm');
  resetBtn = document.getElementById('resetBtn');
  successMessage = document.getElementById('successMessage');
  errorMessage = document.getElementById('errorMessage');
  submitBtn = document.getElementById('submitBtn');
  
  if (!form || !resetBtn || !successMessage || !errorMessage || !submitBtn) {
    console.error('❌ Required DOM elements not found');
    return;
  }
}

function initializeLanguage() {
  // Set up language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
      
      // Update active state
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Load saved language preference or default to Thai
  const savedLang = localStorage.getItem('preferredLang') || 'th';
  switchLanguage(savedLang);
  
  // Update active button
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === savedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder texts
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Update select options for country, track, year, and term
  updateSelectOptions('country', lang);
  updateSelectOptions('track', lang);
  updateSelectOptions('year', lang);
  updateSelectOptions('term', lang);
  
  // Update page title
  document.title = lang === 'th' 
    ? 'แบบฟอร์มส่งแล้ว!' 
    : 'Registration Form';
}

function updateSelectOptions(selectId, lang) {
  const select = document.getElementById(selectId);
  if (!select) return;
  
  Array.from(select.options).forEach(option => {
    const key = option.getAttribute('data-i18n');
    if (key && translations[lang] && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });
}

function setupEventListeners() {
  // Terms and Privacy links
  const termsLink = document.getElementById('terms-link');
  const privacyLink = document.getElementById('privacy-link');
  
  if (termsLink) {
    termsLink.addEventListener('click', function(e) {
      e.preventDefault();
      const message = currentLang === 'th' 
        ? 'นี่คือข้อกำหนดและเงื่อนไขของเว็บไซต์' 
        : 'This is the website Terms and Conditions';
      alert(message);
    });
  }
  
  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.preventDefault();
      const message = currentLang === 'th' 
        ? 'นี่คือนโยบายความเป็นส่วนตัวของเว็บไซต์' 
        : 'This is the website Privacy Policy';
      alert(message);
    });
  }
  
  // Form validation and submission
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
  
  // Reset form
  if (resetBtn) {
    resetBtn.addEventListener('click', handleFormReset);
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  // Reset all error messages
  resetErrorMessages();
  hideError();
  
  // Validate form
  if (!validateForm()) {
    return;
  }
  
  // Prepare and submit data
  await submitFormData();
}

function resetErrorMessages() {
  const errorMessages = document.querySelectorAll('.field-error');
  errorMessages.forEach(msg => {
    msg.style.display = 'none';
  });
}

function validateForm() {
  let isValid = true;
  
  // Check required fields
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      const errorId = field.id + '-error';
      const errorElement = document.getElementById(errorId);
      if (errorElement) {
        errorElement.style.display = 'block';
      }
      isValid = false;
    }
  });
  
  // Validate email format
  const emailField = document.getElementById('email');
  if (emailField.value && !isValidEmail(emailField.value)) {
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
  }
  
  // Validate student ID format (simple validation for 10 digits)
  const studentIdField = document.getElementById('studentId');
  if (studentIdField.value && !isValidStudentId(studentIdField.value)) {
    document.getElementById('studentId-error').style.display = 'block';
    isValid = false;
  }
  
  // Check agreement
  const agreeCheckbox = document.getElementById('agree');
  if (!agreeCheckbox.checked) {
    document.getElementById('agree-error').style.display = 'block';
    isValid = false;
  }
  
  return isValid;
}

async function submitFormData() {
  // Show loading state
  setButtonLoading(true);
  
  try {
    // Get form data
    const formData = new FormData(form);
    const userData = {
      firstName: formData.get('firstname').trim(),
      lastName: formData.get('lastname').trim(),
      email: formData.get('email').trim(),
      studentId: formData.get('studentId').trim(),
      country: formData.get('country'),
      track: formData.get('track'),
      year: formData.get('year'),
      term: formData.get('term'),
      agreedToTerms: true,
      registrationDate: new Date().toISOString(),
      language: currentLang,
      ipAddress: await getIPAddress()
    };
    
    // Save to Firebase Firestore
    const docId = await saveToFirestore(userData);
    
    // Show success message
    showSuccess(userData, docId);
    
  } catch (error) {
    console.error('❌ Registration failed:', error);
    showError(currentLang === 'th' ? 
      'การส่งแล้ว!ล้มเหลว: ' + error.message : 
      'Registration failed: ' + error.message);
    
    // Reset button state
    setButtonLoading(false);
  }
}

async function saveToFirestore(userData) {
  if (!window.firebaseDb) {
    throw new Error('Database not available');
  }
  
  try {
    // Check if student ID already exists
    const existingQuery = await window.firebaseDb.collection('registrations')
      .where('studentId', '==', userData.studentId)
      .get();
    
    if (!existingQuery.empty) {
      throw new Error(currentLang === 'th' ? 
        'รหัสนักศึกษานี้ได้สมัครไว้แล้ว' : 
        'This student ID is already registered');
    }
    
    // Check if email already exists
    const emailQuery = await window.firebaseDb.collection('registrations')
      .where('email', '==', userData.email)
      .get();
    
    if (!emailQuery.empty) {
      throw new Error(currentLang === 'th' ? 
        'อีเมลนี้ได้สมัครไว้แล้ว' : 
        'This email is already registered');
    }
    
    // Add document to 'registrations' collection
    const docRef = await window.firebaseDb.collection('registrations').add({
      ...userData,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'active'
    });
    
    console.log('✅ Document written with ID: ', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('❌ Error adding document: ', error);
    throw error;
  }
}

function showSuccess(userData, docId) {
  // Hide form and show success message
  form.style.display = 'none';
  successMessage.style.display = 'block';
  
  // Create success details
  const yearText = currentLang === 'th' ? `ปี ${userData.year}` : `Year ${userData.year}`;
  const termText = currentLang === 'th' ? `ภาคเรียนที่ ${userData.term}` : `Term ${userData.term}`;
  const trackText = currentLang === 'th' ? 
    getTrackNameThai(userData.track) : 
    getTrackNameEnglish(userData.track);
  
  const detailsMessage = currentLang === 'th' 
    ? `คุณได้สมัครสำหรับ${yearText} ${termText} สาขา${trackText}`
    : `You have registered for ${yearText}, ${termText}, ${trackText}`;
  
  const dbMessage = currentLang === 'th' 
    ? 'ข้อมูลถูกบันทึกลงฐานข้อมูลเรียบร้อย' 
    : 'Data saved to database successfully';
  
  const registrationId = currentLang === 'th' 
    ? `รหัสการสมัคร: ${docId}` 
    : `Registration ID: ${docId}`;
  
  // Add details to success message
  const infoDiv = document.createElement('div');
  infoDiv.className = 'mt-3 p-3 bg-light rounded';
  infoDiv.innerHTML = `
    <div class="mb-2">
      <strong class="text-dark">${detailsMessage}</strong>
    </div>
    <div class="mb-1 text-success">
      <i class="fas fa-check-circle"></i> ${dbMessage}
    </div>
    <div class="text-muted small">
      ${registrationId}
    </div>
  `;
  successMessage.appendChild(infoDiv);
}

function showError(message) {
  errorMessage.style.display = 'block';
  const errorText = document.getElementById('error-text');
  if (errorText) {
    errorText.textContent = message;
  }
}

function hideError() {
  errorMessage.style.display = 'none';
}

function setButtonLoading(loading) {
  if (loading) {
    submitBtn.textContent = translations[currentLang]?.loading || 'Loading...';
    submitBtn.disabled = true;
  } else {
    submitBtn.textContent = currentLang === 'th' ? 'ส่งแล้ว!' : 'Register';
    submitBtn.disabled = false;
  }
}

function handleFormReset() {
  // Reset form values
  form.reset();
  
  // Reset error messages
  resetErrorMessages();
  hideError();
  
  // Show form and hide messages
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  form.style.display = 'block';
  
  // Reset button state
  setButtonLoading(false);
  
  // Remove any added info from success message
  const existingInfo = successMessage.querySelector('.bg-light');
  if (existingInfo) {
    existingInfo.remove();
  }
}

// Helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidStudentId(studentId) {
  // Simple validation for student ID (10 digits)
  const studentIdRegex = /^[0-9]{10}$/;
  return studentIdRegex.test(studentId);
}

function getTrackNameThai(track) {
  const tracks = {
    'software': 'วิศวกรรมซอฟต์แวร์',
    'data': 'วิทยาศาสตร์ข้อมูล',
    'network': 'เครือข่ายและความปลอดภัย'
  };
  return tracks[track] || track;
}

function getTrackNameEnglish(track) {
  const tracks = {
    'software': 'Software Engineering',
    'data': 'Data Science',
    'network': 'Network and Security'
  };
  return tracks[track] || track;
}

async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('Could not fetch IP address:', error);
    return 'unknown';
  }
}

// Utility function to check application status
window.getAppStatus = function() {
  return {
    firebaseReady: firebaseInitialized,
    currentLanguage: currentLang,
    formElements: {
      form: !!form,
      buttons: !!submitBtn && !!resetBtn,
      messages: !!successMessage && !!errorMessage
    },
    translations: Object.keys(translations[currentLang] || {}).length
  };
};

// Export for debugging
console.log('🚀 Registration Form Application Loaded');