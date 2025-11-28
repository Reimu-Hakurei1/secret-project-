// Combined Registration and Curriculum Script
console.log('🚀 Combined Registration and Curriculum script loaded');

// Language translations
const translations = {
  th: {
    // Page titles
    "page_title": "สมัครสมาชิกและเลือกหลักสูตร - STIU Student Portal",
    "step1_label": "ข้อมูลส่วนตัว",
    "step2_label": "เลือกหลักสูตร",
    "step3_label": "สำเร็จ",
    
    // Form titles
    "form_title": "สมัครสมาชิก",
    "form_subtitle": "กรอกข้อมูลให้ถูกต้องเพื่อยืนยันตัวตน",
    
    // Form fields
    "first_name": "ชื่อ",
    "first_name_placeholder": "กรุณากรอกชื่อ",
    "first_name_error": "กรุณากรอกชื่อ",
    
    "last_name": "นามสกุล",
    "last_name_placeholder": "กรุณากรอกนามสกุล",
    "last_name_error": "กรุณากรอกนามสกุล",
    
    "email": "อีเมล",
    "email_placeholder": "กรุณากรอกอีเมล",
    "email_error": "กรุณากรอกอีเมลที่ถูกต้อง",
    
    "password": "รหัสผ่าน",
    "password_placeholder": "กรุณากรอกรหัสผ่าน",
    "password_error": "กรุณากรอกรหัสผ่านให้ตรงตามข้อกำหนด",
    "password_requirements": "รหัสผ่านต้องมี: ตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข, และอักขระพิเศษ",
    "req_uppercase": "ตัวพิมพ์ใหญ่",
    "req_lowercase": "ตัวพิมพ์เล็ก",
    "req_number": "ตัวเลข",
    "req_special": "อักขระพิเศษ",
    "req_length": "อย่างน้อย 8 ตัวอักษร",
    
    "confirm_password": "ยืนยันรหัสผ่าน",
    "confirm_password_placeholder": "กรุณากรอกรหัสผ่านอีกครั้ง",
    "confirm_password_error": "รหัสผ่านไม่ตรงกัน",
    "passwords_match": "รหัสผ่านตรงกัน",
    "passwords_not_match": "รหัสผ่านไม่ตรงกัน",
    
    "student_id": "รหัสนักศึกษา",
    "student_id_placeholder": "กรุณากรอกรหัสนักศึกษา",
    "student_id_error": "กรุณากรอกรหัสนักศึกษา",
    
    "country": "ประเทศ",
    "select_country": "เลือกประเทศ",
    "thailand": "ไทย",
    "myanmar": "เมียนมา",
    "other": "อื่นๆ",
    "country_error": "กรุณาเลือกประเทศ",
    
    "other_country": "ระบุประเทศ",
    "other_country_placeholder": "กรุณาระบุประเทศ",
    "other_country_error": "กรุณาระบุประเทศ",
    
    "track_label": "เลือกสาขาวิชา",
    "select_track": "เลือกสาขาวิชา",
    "track_software": "วิศวกรรมซอฟต์แวร์",
    "track_ecommerce": "เทคโนโลยีอีคอมเมิร์ซ",
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
    
    "submit_btn": "สมัครสมาชิกและเลือกหลักสูตร",
    "back_btn": "ย้อนกลับ",
    "save_courses_btn": "บันทึกและเสร็จสิ้น",
    "login_btn": "เข้าสู่ระบบ",
    
    // Course selection
    "course_selection_title": "เลือกหลักสูตรสาขาเฉพาะ",
    "course_selection_subtitle": "เลือกวิชาที่คุณต้องการศึกษาในสาขานี้",
    "select_courses_instruction": "เลือกวิชาที่คุณต้องการศึกษา (เลือกได้ทั้งหมดหรือบางส่วน):",
    "credits": "หน่วยกิต",
    "year": "ปี",
    "prerequisite": "วิชาบังคับก่อน",
    
    // Success page
    "success_title": "สมัครสมาชิกสำเร็จ!",
    "success_message": "การสมัครสมาชิกเสร็จสมบูรณ์",
    "success_description": "บัญชีและหลักสูตรของคุณถูกบันทึกเรียบร้อยแล้ว",
    "track_label_success": "สาขา",
    "name_label": "ชื่อ",
    "email_label": "อีเมล",
    "studentid_label": "รหัสนักศึกษา",
    
    // Loading messages
    "loading_register": "กำลังสมัครสมาชิก...",
    "loading_courses": "กำลังบันทึกหลักสูตร...",
    "please_wait": "กรุณารอสักครู่",
    
    // Error messages
    "error_title": "เกิดข้อผิดพลาด!",
    
    // Login link
    "have_account": "มีบัญชีอยู่แล้ว?",
    "login_link": "เข้าสู่ระบบ",

    // Avatar icons
    "avatar_user": "ผู้ใช้",
    "avatar_book": "หนังสือ",

    // Course messages
    "no_courses_found": "ไม่พบข้อมูลหลักสูตรสำหรับสาขานี้"
  },
  en: {
    // Page titles
    "page_title": "Registration and Course Selection - STIU Student Portal",
    "step1_label": "Personal Information",
    "step2_label": "Course Selection",
    "step3_label": "Success",
    
    // Form titles
    "form_title": "Registration",
    "form_subtitle": "Fill in the information correctly to verify your identity",
    
    // Form fields
    "first_name": "First Name",
    "first_name_placeholder": "Please enter your first name",
    "first_name_error": "Please enter your first name",
    
    "last_name": "Last Name",
    "last_name_placeholder": "Please enter your last name",
    "last_name_error": "Please enter your last name",
    
    "email": "Email",
    "email_placeholder": "Please enter your email",
    "email_error": "Please enter a valid email",
    
    "password": "Password",
    "password_placeholder": "Please enter your password",
    "password_error": "Please enter a valid password",
    "password_requirements": "Password must contain: uppercase, lowercase, number, and special character",
    "req_uppercase": "Uppercase",
    "req_lowercase": "Lowercase",
    "req_number": "Number",
    "req_special": "Special character",
    "req_length": "At least 8 characters",
    
    "confirm_password": "Confirm Password",
    "confirm_password_placeholder": "Please enter your password again",
    "confirm_password_error": "Passwords do not match",
    "passwords_match": "Passwords match",
    "passwords_not_match": "Passwords do not match",
    
    "student_id": "Student ID",
    "student_id_placeholder": "Please enter your student ID",
    "student_id_error": "Please enter your student ID",
    
    "country": "Country",
    "select_country": "Select country",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "other": "Other",
    "country_error": "Please select country",
    
    "other_country": "Specify Country",
    "other_country_placeholder": "Please specify your country",
    "other_country_error": "Please specify your country",
    
    "track_label": "Choose Track",
    "select_track": "Select track",
    "track_software": "Software Engineering",
    "track_ecommerce": "E-Commerce Technology",
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
    
    "submit_btn": "Register and Select Courses",
    "back_btn": "Go Back",
    "save_courses_btn": "Save and Complete",
    "login_btn": "Login",
    
    // Course selection
    "course_selection_title": "Select Specialization Track Courses",
    "course_selection_subtitle": "Select the courses you want to study in this track",
    "select_courses_instruction": "Select the courses you want to study (you can select all or some):",
    "credits": "credits",
    "year": "Year",
    "prerequisite": "Prerequisite",
    
    // Success page
    "success_title": "Registration Successful!",
    "success_message": "Registration completed successfully",
    "success_description": "Your account and courses have been saved successfully",
    "track_label_success": "Track",
    "name_label": "Name",
    "email_label": "Email",
    "studentid_label": "Student ID",
    
    // Loading messages
    "loading_register": "Registering...",
    "loading_courses": "Saving courses...",
    "please_wait": "Please wait a moment",
    
    // Error messages
    "error_title": "Error!",
    
    // Login link
    "have_account": "Already have an account?",
    "login_link": "Login",

    // Avatar icons
    "avatar_user": "User",
    "avatar_book": "Book",

    // Course messages
    "no_courses_found": "No courses found for this track"
  }
};

// Track course data - Updated with correct credits and year numbers from PDF
const trackData = {
  software: [
    { code: "ITE220", name: "Web Development II", credits: 4, year: 3, prerequisite: "ITE222" },
    { code: "ITE343", name: "Mobile Application Development", credits: 4, year: 3, prerequisite: "ITE222" },
    { code: "ITE365", name: "Software Quality Management", credits: 4, year: 3, prerequisite: "" },
    { code: "ITE367", name: "Software Architecture and Modelling", credits: 4, year: 3, prerequisite: "ITE321" },
    { code: "ITE368", name: "Software Testing and Maintenance", credits: 4, year: 3, prerequisite: "ITE222" }
  ],
  ecommerce: [
    { code: "MKT213", name: "Principles of Marketing", credits: 4, year: 3, prerequisite: "" },
    { code: "MKT333", name: "Digital Marketing", credits: 4, year: 3, prerequisite: "" },
    { code: "ITE340", name: "E-Commerce Systems and Infrastructure", credits: 4, year: 3, prerequisite: "ITE220" },
    { code: "MKT345", name: "Gamification", credits: 4, year: 3, prerequisite: "" },
    { code: "ITE362", name: "Digital Advertising Technology", credits: 4, year: 3, prerequisite: "" }
  ],
  data: [
    { code: "ITE351", name: "Programming for Data Science", credits: 4, year: 3, prerequisite: "ITE224" },
    { code: "ITE352", name: "Artificial Intelligence and Machine Learning", credits: 4, year: 3, prerequisite: "ITE224" },
    { code: "ITE353", name: "Machine Learning Foundation", credits: 4, year: 3, prerequisite: "ITE224" },
    { code: "ITE354", name: "Business Intelligence and Decision Modeling", credits: 4, year: 3, prerequisite: "ITE224" },
    { code: "ITE355", name: "Data Warehousing and Data Mining", credits: 4, year: 3, prerequisite: "ITE224" }
  ],
  network: [
    { code: "ITE201", name: "IT Service Desk & Incident Management", credits: 4, year: 3, prerequisite: "" },
    { code: "ITE421", name: "Information Assurance and Security II", credits: 4, year: 3, prerequisite: "ITE420" },
    { code: "ITE451", name: "AWS Cloud Foundations", credits: 4, year: 3, prerequisite: "" },
    { code: "ITE476", name: "Network II", credits: 4, year: 3, prerequisite: "ITE475" },
    { code: "ITE477", name: "Window Server", credits: 4, year: 3, prerequisite: "" }
  ]
};

// Track names
const trackNames = {
  th: {
    software: "วิศวกรรมซอฟต์แวร์",
    ecommerce: "เทคโนโลยีอีคอมเมิร์ซ", 
    data: "วิทยาศาสตร์ข้อมูล",
    network: "เครือข่ายและความปลอดภัย"
  },
  en: {
    software: "Software Engineering",
    ecommerce: "E-Commerce Technology", 
    data: "Data Science",
    network: "Network and Security"
  }
};

let currentLang = 'th';
let currentStep = 1;
let userData = {};
let selectedCourses = {};
let registrationCompleted = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

async function initializeApp() {
  console.log('🚀 Initializing combined registration and curriculum...');
  
  // Initialize language system FIRST
  initializeLanguage();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize Firebase
  try {
    await waitForFirebase();
    console.log('🎯 Firebase initialized successfully');
  } catch (error) {
    console.error('❌ Firebase initialization failed:', error);
    showError(currentLang === 'th' ? 'ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้' : 'Cannot connect to database');
  }
}

function initializeLanguage() {
  // Get saved language or default to Thai
  const savedLang = localStorage.getItem('preferredLang') || 'th';
  currentLang = savedLang;
  
  console.log('🌐 Initializing language:', currentLang);
  
  // Set up language button click handlers
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      console.log('🔄 Language button clicked:', lang);
      switchLanguage(lang);
    });
    
    // Set initial active state
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Apply initial language
  updateAllText();
}

function switchLanguage(lang) {
  console.log('🔄 Switching language to:', lang);
  
  if (lang === currentLang) return;
  
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
  
  // Update all text content
  updateAllText();
  
  console.log('✅ Language switched to:', lang);
}

function updateAllText() {
  const langData = translations[currentLang];
  
  if (!langData) {
    console.error('❌ No translation data for language:', currentLang);
    return;
  }
  
  console.log('📝 Updating text for language:', currentLang);
  
  // Update page title
  document.title = langData.page_title;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {
      element.textContent = langData[key];
    }
  });
  
  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (langData[key]) {
      element.placeholder = langData[key];
    }
  });
  
  // Update all elements with data-i18n-title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (langData[key]) {
      element.title = langData[key];
    }
  });
  
  // Update select options
  updateAllSelectOptions(langData);
  
  // Update dynamic content if on step 2 or 3
  if (currentStep === 2) {
    updateCourseSelectionText(langData);
  } else if (currentStep === 3) {
    updateSuccessText(langData);
  }
  
  console.log('✅ All text updated for language:', currentLang);
}

function updateAllSelectOptions(langData) {
  // Update all select dropdowns
  const selects = ['country', 'track', 'year', 'term'];
  
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    const options = select.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && langData[key]) {
        option.textContent = langData[key];
      }
    });
  });
}

function updateCourseSelectionText(langData) {
  // Update track title
  const track = userData.track;
  const trackTitle = document.getElementById('track-title');
  if (trackTitle && trackNames[currentLang][track]) {
    trackTitle.textContent = trackNames[currentLang][track];
  }
  
  // Update course instruction text
  const courseInstruction = document.querySelector('#course-selection .text-muted');
  if (courseInstruction) {
    courseInstruction.textContent = langData.select_courses_instruction;
  }
  
  // Update course cards if they exist
  document.querySelectorAll('.course-card').forEach(card => {
    const creditsElement = card.querySelector('.course-credits');
    const yearElement = card.querySelector('.course-year');
    const prerequisiteElement = card.querySelector('.text-warning');
    
    if (creditsElement) {
      const credits = creditsElement.textContent.split(' ')[0];
      creditsElement.innerHTML = `<i class="fas fa-credit-card me-1"></i>${credits} ${langData.credits}`;
    }
    
    if (yearElement) {
      const year = yearElement.textContent.split(' ')[1];
      yearElement.innerHTML = `<i class="fas fa-calendar me-1"></i>${langData.year} ${year}`;
    }
    
    if (prerequisiteElement) {
      const prerequisiteText = prerequisiteElement.textContent.split(':')[1]?.trim();
      if (prerequisiteText) {
        prerequisiteElement.innerHTML = `<i class="fas fa-exclamation-circle me-1"></i><strong>${langData.prerequisite}:</strong> ${prerequisiteText}`;
      }
    }
  });
}

function updateSuccessText(langData) {
  // Update user info
  const successTrack = document.getElementById('success-track');
  const successName = document.getElementById('success-name');
  const successEmail = document.getElementById('success-email');
  const successStudentId = document.getElementById('success-studentid');
  
  if (successTrack && userData.track) {
    successTrack.textContent = `${langData.track_label_success}: ${trackNames[currentLang][userData.track] || userData.track}`;
  }
  if (successName) {
    successName.textContent = `${langData.name_label}: ${userData.firstName} ${userData.lastName}`;
  }
  if (successEmail) {
    successEmail.textContent = `${langData.email_label}: ${userData.email}`;
  }
  if (successStudentId) {
    successStudentId.textContent = `${langData.studentid_label}: ${userData.studentId}`;
  }
}

function handleCountryChange() {
  const countrySelect = document.getElementById('country');
  const otherCountryContainer = document.getElementById('otherCountryContainer');
  const otherCountryInput = document.getElementById('otherCountry');
  
  if (countrySelect.value === 'other') {
    otherCountryContainer.style.display = 'block';
    otherCountryInput.setAttribute('required', 'required');
  } else {
    otherCountryContainer.style.display = 'none';
    otherCountryInput.removeAttribute('required');
    document.getElementById('otherCountry-error').style.display = 'none';
  }
}

function validatePasswordStrength() {
  const password = document.getElementById('password').value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasLength = password.length >= 8;

  // Update checkboxes
  document.getElementById('req-uppercase').checked = hasUppercase;
  document.getElementById('req-lowercase').checked = hasLowercase;
  document.getElementById('req-number').checked = hasNumber;
  document.getElementById('req-special').checked = hasSpecial;
  document.getElementById('req-length').checked = hasLength;

  // Update checkbox colors
  updateCheckboxColor('req-uppercase', hasUppercase);
  updateCheckboxColor('req-lowercase', hasLowercase);
  updateCheckboxColor('req-number', hasNumber);
  updateCheckboxColor('req-special', hasSpecial);
  updateCheckboxColor('req-length', hasLength);
}

function updateCheckboxColor(checkboxId, isValid) {
  const checkbox = document.getElementById(checkboxId);
  const label = checkbox.nextElementSibling;
  
  if (isValid) {
    checkbox.style.color = '#198754';
    label.style.color = '#198754';
  } else {
    checkbox.style.color = '#dc3545';
    label.style.color = '#dc3545';
  }
}

function validatePasswordMatch() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const matchElement = document.getElementById('password-match');
  const confirmPasswordField = document.getElementById('confirmPassword');
  
  if (confirmPassword === '') {
    matchElement.style.display = 'none';
    confirmPasswordField.classList.remove('is-invalid', 'is-valid');
    return;
  }
  
  const passwordsMatch = password === confirmPassword && password !== '';
  const matchText = passwordsMatch ? translations[currentLang].passwords_match : translations[currentLang].passwords_not_match;
  const matchClass = passwordsMatch ? 'text-success' : 'text-danger';
  
  matchElement.textContent = matchText;
  matchElement.className = `small mt-1 ${matchClass}`;
  matchElement.style.display = 'block';
  
  if (passwordsMatch) {
    confirmPasswordField.classList.add('is-valid');
    confirmPasswordField.classList.remove('is-invalid');
  } else {
    confirmPasswordField.classList.add('is-invalid');
    confirmPasswordField.classList.remove('is-valid');
  }
}

function showTermsAndConditions() {
  const content = currentLang === 'th' ? 
    `ข้อกำหนดและเงื่อนไขการใช้งาน\n\n1. การยอมรับข้อกำหนด\n   ผู้ใช้ตกลงปฏิบัติตามข้อกำหนดทั้งหมดเมื่อใช้งานระบบ\n\n2. บัญชีผู้ใช้\n   - ต้องให้ข้อมูลที่ถูกต้องและเป็นความจริง\n   - รับผิดชอบในการรักษาความปลอดภัยของบัญชี\n   - ห้ามแชร์บัญชีกับผู้อื่น` :
    `Terms and Conditions\n\n1. Acceptance of Terms\n   Users agree to comply with all terms when using the system\n\n2. User Accounts\n   - Must provide accurate and truthful information\n   - Responsible for account security\n   - Do not share accounts with others`;
  alert(content);
}

function showPrivacyPolicy() {
  const content = currentLang === 'th' ? 
    `นโยบายความเป็นส่วนตัว\n\n1. การเก็บข้อมูล\n   เราเก็บข้อมูลส่วนตัวเพื่อวัตถุประสงค์ทางการศึกษาเท่านั้น\n\n2. การใช้ข้อมูล\n   - ใช้สำหรับการจัดการหลักสูตรและการศึกษา\n   - ใช้สำหรับการติดต่อสื่อสาร\n   - ไม่เปิดเผยข้อมูลแก่บุคคลที่สาม` :
    `Privacy Policy\n\n1. Data Collection\n   We collect personal data for educational purposes only\n\n2. Data Usage\n   - For course management and education\n   - For communication purposes\n   - Not disclosed to third parties`;
  alert(content);
}

function setupEventListeners() {
  console.log('🎯 Setting up event listeners...');
  
  // Registration form submission
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('📝 Form submitted');
      handleFormSubmit(e);
    });
  } else {
    console.error('❌ Form not found');
  }

  // Country selection change handler
  const countrySelect = document.getElementById('country');
  if (countrySelect) {
    countrySelect.addEventListener('change', handleCountryChange);
  }

  // Password validation listeners
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  
  if (passwordField) {
    passwordField.addEventListener('input', validatePasswordStrength);
  }
  
  if (confirmPasswordField) {
    confirmPasswordField.addEventListener('input', validatePasswordMatch);
  }

  // Terms and Privacy links
  document.addEventListener('click', function(e) {
    if (e.target.id === 'terms-link') {
      e.preventDefault();
      showTermsAndConditions();
    } else if (e.target.id === 'privacy-link') {
      e.preventDefault();
      showPrivacyPolicy();
    }
  });

  // Step navigation
  const backToStep1 = document.getElementById('backToStep1');
  const saveCoursesBtn = document.getElementById('saveCoursesBtn');
  
  if (backToStep1) {
    backToStep1.addEventListener('click', function() {
      console.log('🔙 Back button clicked');
      // Only allow going back if registration is not completed
      if (!registrationCompleted) {
        goToStep(1);
      }
    });
  }
  
  if (saveCoursesBtn) {
    saveCoursesBtn.addEventListener('click', function() {
      console.log('💾 Save courses button clicked');
      saveCoursesAndComplete();
    });
  }
  
  console.log('✅ Event listeners setup complete');
}

async function handleFormSubmit(e) {
  console.log('🚀 Starting form submission...');
  
  // Reset all error messages
  resetErrorMessages();
  hideError();
  
  // Validate form
  if (!validateForm()) {
    console.log('❌ Form validation failed');
    return;
  }
  
  console.log('✅ Form validation passed');
  
  // Prepare and submit data
  await submitRegistration();
}

function resetErrorMessages() {
  const errorMessages = document.querySelectorAll('.field-error');
  errorMessages.forEach(msg => {
    msg.style.display = 'none';
  });
  
  // Reset field validation states
  const formControls = document.querySelectorAll('.form-control, .form-select');
  formControls.forEach(control => {
    control.classList.remove('is-invalid', 'is-valid');
  });
}

function validateForm() {
  let isValid = true;
  
  // Check required fields
  const requiredFields = document.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      const errorId = field.id + '-error';
      const errorElement = document.getElementById(errorId);
      if (errorElement) {
        errorElement.style.display = 'block';
        field.classList.add('is-invalid');
      }
      isValid = false;
    } else {
      field.classList.add('is-valid');
    }
  });
  
  // Validate email format
  const emailField = document.getElementById('email');
  if (emailField.value && !isValidEmail(emailField.value)) {
    document.getElementById('email-error').style.display = 'block';
    emailField.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate password strength
  const passwordField = document.getElementById('password');
  if (passwordField.value && !isStrongPassword(passwordField.value)) {
    document.getElementById('password-error').style.display = 'block';
    passwordField.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate password match
  const confirmPasswordField = document.getElementById('confirmPassword');
  if (passwordField.value && confirmPasswordField.value && 
      passwordField.value !== confirmPasswordField.value) {
    document.getElementById('confirmPassword-error').style.display = 'block';
    confirmPasswordField.classList.add('is-invalid');
    isValid = false;
  }
  
  // Validate student ID format
  const studentIdField = document.getElementById('studentId');
  if (studentIdField.value && !isValidStudentId(studentIdField.value)) {
    document.getElementById('studentId-error').style.display = 'block';
    studentIdField.classList.add('is-invalid');
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

async function submitRegistration() {
  // Show loading state
  setButtonLoading(true);
  showLoadingSpinner(translations[currentLang].loading_register);
  
  try {
    // Get form data
    const formData = new FormData(document.getElementById('signupForm'));
    const email = formData.get('email').trim();
    const password = formData.get('password');
    
    console.log('📧 Email being used:', email);
    
    // Validate email format again
    if (!isValidEmail(email)) {
      throw new Error(translations[currentLang].email_error);
    }
    
    // Validate password strength again
    if (!isStrongPassword(password)) {
      throw new Error(translations[currentLang].password_error);
    }
    
    // Store user data for next steps
    userData = {
      firstName: formData.get('firstname').trim(),
      lastName: formData.get('lastname').trim(),
      email: email,
      studentId: formData.get('studentId').trim(),
      country: formData.get('country'),
      track: formData.get('track'),
      year: formData.get('year'),
      term: formData.get('term'),
      agreedToTerms: true,
      registrationDate: new Date().toISOString(),
      language: currentLang
    };
    
    // If country is "other", get the otherCountry value
    if (userData.country === 'other') {
      userData.otherCountry = formData.get('otherCountry')?.trim() || '';
    }
    
    console.log('🔥 Attempting to create user with email:', userData.email);
    
    // Create Firebase Auth user
    let userCredential;
    try {
      if (!window.firebaseAuth) {
        throw new Error('Firebase Auth not available');
      }
      
      userCredential = await window.firebaseAuth.createUserWithEmailAndPassword(
        userData.email, 
        password
      );
    } catch (authError) {
      console.error('❌ Firebase Auth Error:', authError);
      
      if (authError.code === 'auth/invalid-email') {
        throw new Error(translations[currentLang].email_error);
      } else if (authError.code === 'auth/operation-not-allowed') {
        throw new Error(currentLang === 'th' ? 'ระบบลงทะเบียนด้วยอีเมลถูกปิดใช้งานชั่วคราว' : 'Email registration is temporarily disabled');
      } else {
        throw authError;
      }
    }
    
    if (!userCredential || !userCredential.user) {
      throw new Error(currentLang === 'th' ? 'ไม่สามารถสร้างบัญชีผู้ใช้ได้' : 'Could not create user account');
    }
    
    // Get the Firebase Auth UID
    const uid = userCredential.user.uid;
    userData.uid = uid;
    
    console.log('✅ User created with UID:', uid);
    
    // Save to Firebase Firestore
    await saveToFirestore(userData);
    
    // Mark registration as completed
    registrationCompleted = true;
    
    // Hide loading spinner
    hideLoadingSpinner();
    
    // Move to step 2 (course selection)
    goToStep(2);
    
  } catch (error) {
    console.error('❌ Registration failed:', error);
    
    let errorMessage = error.message;
    
    // Use enhanced error message handling
    if (error.code && window.getAuthErrorMessage) {
      errorMessage = window.getAuthErrorMessage(error, currentLang);
    } else {
      // Fallback error handling
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = currentLang === 'th' ? 'อีเมลนี้ได้สมัครไว้แล้ว' : 'This email is already registered';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = currentLang === 'th' ? 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร' : 'Password should be at least 6 characters';
      }
    }
    
    // Hide loading spinner and show error
    hideLoadingSpinner();
    showError(errorMessage);
    
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
      throw new Error(translations[currentLang].student_id_error);
    }
    
    // Check if email already exists in registrations
    const emailQuery = await window.firebaseDb.collection('registrations')
      .where('email', '==', userData.email)
      .get();
    
    if (!emailQuery.empty) {
      throw new Error(currentLang === 'th' ? 'อีเมลนี้ได้สมัครไว้แล้ว' : 'This email is already registered');
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

function goToStep(step) {
  console.log('🔄 Moving to step:', step);
  currentStep = step;
  
  // Update step indicators
  document.querySelectorAll('.step').forEach((stepEl, index) => {
    if (index + 1 <= step) {
      stepEl.classList.add('active');
    } else {
      stepEl.classList.remove('active');
    }
  });
  
  // Show/hide step content
  document.getElementById('step1-content').style.display = step === 1 ? 'block' : 'none';
  document.getElementById('step2-content').style.display = step === 2 ? 'block' : 'none';
  document.getElementById('step3-content').style.display = step === 3 ? 'block' : 'none';
  
  // Hide back button if registration is completed
  const backButton = document.getElementById('backToStep1');
  if (backButton) {
    if (registrationCompleted && step === 2) {
      backButton.style.display = 'none';
    } else {
      backButton.style.display = 'block';
    }
  }
  
  // If going to step 2, render course selection
  if (step === 2) {
    renderCourseSelection();
  }
  
  // If going to step 3, show success info
  if (step === 3) {
    showSuccessInfo();
  }
}

function renderCourseSelection() {
  const track = userData.track;
  const courses = trackData[track];
  const trackTitle = document.getElementById('track-title');
  const courseSelection = document.getElementById('course-selection');
  
  if (!courses) {
    const noCoursesText = translations[currentLang].no_courses_found;
    courseSelection.innerHTML = `<div class="alert alert-danger">${noCoursesText}</div>`;
    return;
  }
  
  // Set track title
  trackTitle.textContent = trackNames[currentLang][track] || track;
  
  // Render courses
  let coursesHTML = `
    <div class="row g-3">
      <div class="col-12">
        <p class="text-muted mb-3 text-center" data-i18n="select_courses_instruction">${translations[currentLang].select_courses_instruction}</p>
      </div>
  `;
  
  courses.forEach(course => {
    coursesHTML += `
      <div class="col-md-6">
        <div class="course-card card h-100 border-light shadow-sm">
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input course-checkbox" type="checkbox" 
                     id="course-${course.code}" data-course="${course.code}">
              <label class="form-check-label w-100" for="course-${course.code}">
                <div class="course-code fw-bold text-primary mb-2">${course.code}</div>
                <div class="course-name mb-3">${course.name}</div>
                <div class="course-meta d-flex justify-content-between text-muted small">
                  <span class="course-credits">
                    <i class="fas fa-credit-card me-1"></i>
                    ${course.credits} ${translations[currentLang].credits}
                  </span>
                  <span class="course-year">
                    <i class="fas fa-calendar me-1"></i>
                    ${translations[currentLang].year} ${course.year}
                  </span>
                </div>
                ${course.prerequisite ? `
                  <div class="mt-2">
                    <small class="text-warning">
                      <i class="fas fa-exclamation-circle me-1"></i>
                      <strong>${translations[currentLang].prerequisite}:</strong> ${course.prerequisite}
                    </small>
                  </div>
                ` : ''}
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  coursesHTML += '</div>';
  courseSelection.innerHTML = coursesHTML;
  
  // Add event listeners to course checkboxes
  document.querySelectorAll('.course-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        selectedCourses[this.dataset.course] = true;
      } else {
        delete selectedCourses[this.dataset.course];
      }
    });
  });
}

async function saveCoursesAndComplete() {
  const saveBtn = document.getElementById('saveCoursesBtn');
  
  try {
    // Show loading state
    saveBtn.disabled = true;
    saveBtn.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${translations[currentLang].loading_courses}`;
    showLoadingSpinner(translations[currentLang].loading_courses);
    
    console.log('💾 Saving course selection...');
    
    // Save course selection to Firestore
    await window.firebaseDb.collection('userProgress')
      .doc(userData.uid)
      .set({
        progress: selectedCourses,
        track: userData.track,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        email: userData.email,
        userName: `${userData.firstName} ${userData.lastName}`,
        studentId: userData.studentId,
        language: currentLang
      });
    
    console.log('✅ Course selection saved successfully');
    
    // Hide loading spinner
    hideLoadingSpinner();
    
    // Move to success step
    goToStep(3);
    
  } catch (error) {
    console.error('❌ Error saving course selection:', error);
    
    // Hide loading spinner and show error
    hideLoadingSpinner();
    showError((currentLang === 'th' ? 'เกิดข้อผิดพลาดในการบันทึกหลักสูตร: ' : 'Error saving courses: ') + error.message);
    
    // Reset button state
    saveBtn.disabled = false;
    saveBtn.innerHTML = `<i class="fas fa-save me-2"></i>${translations[currentLang].save_courses_btn}`;
  }
}

function showSuccessInfo() {
  document.getElementById('success-track').textContent = `${translations[currentLang].track_label_success}: ${trackNames[currentLang][userData.track] || userData.track}`;
  document.getElementById('success-name').textContent = `${translations[currentLang].name_label}: ${userData.firstName} ${userData.lastName}`;
  document.getElementById('success-email').textContent = `${translations[currentLang].email_label}: ${userData.email}`;
  document.getElementById('success-studentid').textContent = `${translations[currentLang].studentid_label}: ${userData.studentId}`;
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  const errorText = document.getElementById('error-text');
  
  if (errorMessage && errorText) {
    errorText.textContent = message;
    errorMessage.style.display = 'block';
  }
}

function hideError() {
  const errorMessage = document.getElementById('errorMessage');
  if (errorMessage) {
    errorMessage.style.display = 'none';
  }
}

function setButtonLoading(loading) {
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    if (loading) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${translations[currentLang].loading_register}`;
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fas fa-user-plus me-2"></i>${translations[currentLang].submit_btn}`;
    }
  }
}

function showLoadingSpinner(text) {
  const spinner = document.getElementById('loadingSpinner');
  const loadingText = document.getElementById('loading-text');
  const pleaseWait = document.querySelector('#loadingSpinner .text-muted');
  
  if (spinner && loadingText && pleaseWait) {
    loadingText.textContent = text;
    pleaseWait.textContent = translations[currentLang].please_wait;
    spinner.style.display = 'flex';
  }
}

function hideLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

// Helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const hasLength = password.length >= 8;
  
  return hasUppercase && hasLowercase && hasNumber && hasSpecial && hasLength;
}

function isValidStudentId(studentId) {
  const studentIdRegex = /^[0-9]{10}$/;
  return studentIdRegex.test(studentId);
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

// Add CSS for steps and center the login button
const style = document.createElement('style');
style.textContent = `
  .steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .steps::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #dee2e6;
    z-index: 1;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #dee2e6;
    color: #6c757d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 8px;
    transition: all 0.3s ease;
  }
  
  .step.active .step-number {
    background-color: #0d6efd;
    color: white;
  }
  
  .step-label {
    font-size: 0.875rem;
    color: #6c757d;
    text-align: center;
  }
  
  .step.active .step-label {
    color: #0d6efd;
    font-weight: 500;
  }
  
  .course-card {
    transition: all 0.3s ease;
  }
  
  .course-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important;
  }
  
  .success-icon {
    animation: bounce 0.6s ease;
  }
  
  /* Center the login button in step 3 */
  #step3-content .d-grid {
    display: flex !important;
    justify-content: center !important;
  }
  
  #step3-content .btn {
    width: auto !important;
    min-width: 200px;
  }
  
  .avatar-lg {
    font-size: 4rem;
  }
  
  .loading-spinner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .spinner-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  @keyframes bounce {
    0%, 20%, 60%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(-5px);
    }
  }
`;
document.head.appendChild(style);

console.log('🎉 Combined Registration and Curriculum application loaded');