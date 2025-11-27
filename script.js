// Language translations
const translations = {
  th: {
    // Form titles
    "form_title": "สมัครสมาชิก",
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
    
    "submit_btn": "สมัครสมาชิก",
    "reset_btn": "ล้างแบบฟอร์ม",
    
    "success_title": "สมัครสมาชิกสำเร็จ!",
    "success_message": "เราได้ส่งอีเมลยืนยันไปยังที่อยู่อีเมลของคุณแล้ว กรุณาตรวจสอบอีเมลเพื่อยืนยันบัญชี"
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
    "success_message": "We've sent a confirmation email to your address. Please check your email to verify your account."
  }
};

// Current language
let currentLang = 'th';

// DOM elements
let form, resetBtn, successMessage, submitBtn;

document.addEventListener('DOMContentLoaded', function() {
  // Initialize DOM elements
  form = document.getElementById('signupForm');
  resetBtn = document.getElementById('resetBtn');
  successMessage = document.getElementById('successMessage');
  submitBtn = document.getElementById('submitBtn');
  
  // Initialize language
  initializeLanguage();
  
  // Set up event listeners
  setupEventListeners();
});

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
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder texts
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
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
    ? 'แบบฟอร์มสมัครสมาชิก' 
    : 'Registration Form';
}

function updateSelectOptions(selectId, lang) {
  const select = document.getElementById(selectId);
  if (!select) return;
  
  Array.from(select.options).forEach(option => {
    const key = option.getAttribute('data-i18n');
    if (key && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });
}

function setupEventListeners() {
  // Terms and Privacy links
  document.getElementById('terms-link').addEventListener('click', function(e) {
    e.preventDefault();
    const message = currentLang === 'th' 
      ? 'นี่คือข้อกำหนดและเงื่อนไขของเว็บไซต์' 
      : 'This is the website Terms and Conditions';
    alert(message);
  });
  
  document.getElementById('privacy-link').addEventListener('click', function(e) {
    e.preventDefault();
    const message = currentLang === 'th' 
      ? 'นี่คือนโยบายความเป็นส่วนตัวของเว็บไซต์' 
      : 'This is the website Privacy Policy';
    alert(message);
  });
  
  // Form validation
  form.addEventListener('submit', handleFormSubmit);
  
  // Reset form
  resetBtn.addEventListener('click', handleFormReset);
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  // Reset all error messages
  const errorMessages = document.querySelectorAll('.field-error');
  errorMessages.forEach(msg => msg.style.display = 'none');
  
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
  
  if (isValid) {
    // Show loading state
    submitBtn.textContent = currentLang === 'th' ? 'กำลังสมัครสมาชิก...' : 'Registering...';
    submitBtn.disabled = true;
    
    // Get form data for success message
    const formData = new FormData(form);
    const year = formData.get('year');
    const term = formData.get('term');
    
    // Simulate API call
    setTimeout(function() {
      form.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Add term info to success message
      const yearText = currentLang === 'th' ? `ปี ${year}` : `Year ${year}`;
      const termText = currentLang === 'th' ? `ภาคเรียนที่ ${term}` : `Term ${term}`;
      const termMessage = currentLang === 'th' 
        ? `คุณได้สมัครสำหรับ${yearText} ${termText}`
        : `You have registered for ${yearText}, ${termText}`;
      
      const infoDiv = document.createElement('div');
      infoDiv.className = 'mt-3 p-3 bg-light rounded';
      infoDiv.innerHTML = `<strong class="text-dark">${termMessage}</strong>`;
      successMessage.appendChild(infoDiv);
    }, 1500);
  }
}

function handleFormReset() {
  form.reset();
  const errorMessages = document.querySelectorAll('.field-error');
  errorMessages.forEach(msg => msg.style.display = 'none');
  successMessage.style.display = 'none';
  form.style.display = 'block';
  submitBtn.textContent = currentLang === 'th' ? 'สมัครสมาชิก' : 'Register';
  submitBtn.disabled = false;
  
  // Remove any added term info from success message
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