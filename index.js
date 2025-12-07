const languageNames = {
  en: "English 🇺🇸",
  zh: "中文 🇨🇳",
  ja: "日本語 🇯🇵",
  ko: "한국어 🇰🇷",
  ar: "العربية 🇸🇦",
  hi: "हिन्दी 🇮🇳",
  th: "ไทย 🇹🇭",
  vi: "Tiếng Việt 🇻🇳",
  id: "Bahasa Indonesia 🇮🇩",
  ms: "Bahasa Malaysia 🇲🇾",
  ru: "Русский 🇷🇺",
  ur: "اردو 🇵🇰",
  tr: "Türkçe 🇹🇷",
  fa: "فارسی 🇮🇷",
  ta: "தமிழ் 🇮🇳",
  te: "తెలుగు 🇮🇳",
  bn: "বাংলা 🇧🇩",
  lo: "ລາວ 🇱🇦",
  km: "ខ្មែរ 🇰🇭",
  my: "မြန်မာ 🇲🇲",
  ne: "नेपाली 🇳🇵",
  pa: "ਪੰਜਾਬੀ 🇮🇳",
  si: "සිංහල 🇱🇰"
};

// Set English as default
let currentLang = 'en';
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
  // Get saved language or default to English
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  currentLang = savedLang;
  
  console.log('🌐 Initializing language:', currentLang);
  
  // Initialize language dropdown - USING THE SAME APPROACH AS LOGIN PAGE
  initializeLanguageDropdown();
  
  // Apply initial language
  updateAllText();
}

function initializeLanguageDropdown() {
  const languageMenu = document.getElementById('languageMenu');
  const currentLanguageElement = document.getElementById('currentLanguage');
  
  if (!languageMenu) return;
  
  // Clear existing options
  languageMenu.innerHTML = '';
  
  // Add all language options in the same order as login page
  const languageOrder = ['en', 'zh', 'ja', 'ko', 'ar', 'hi', 'th', 'vi', 'id', 'ms', 'ru', 'ur', 'tr', 'fa', 'ta', 'te', 'bn', 'lo', 'km', 'my', 'ne', 'pa', 'si'];
  
  languageOrder.forEach(code => {
    const name = languageNames[code];
    if (!name) return;
    
    // Create button element for better styling (matching login page)
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dropdown-item language-dropdown-item';
    button.dataset.lang = code;
    button.textContent = name;
    
    // Add active class if this is the current language
    if (code === currentLang) {
      button.classList.add('active');
      if (currentLanguageElement) {
        currentLanguageElement.textContent = name.split(' ')[0]; // Get language name without flag
      }
    }
    
    // Add click event - MATCHING LOGIN PAGE BEHAVIOR
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      console.log('🔄 Language dropdown clicked:', lang);
      switchLanguage(lang);
      
      // Close the dropdown after selection (matching login page)
      const dropdownButton = document.getElementById('languageDropdown');
      if (dropdownButton) {
        const dropdown = bootstrap.Dropdown.getInstance(dropdownButton);
        if (dropdown) {
          dropdown.hide();
        }
      }
    });
    
    languageMenu.appendChild(button);
  });
}

function switchLanguage(lang) {
  console.log('🔄 Switching language to:', lang);
  
  if (lang === currentLang) return;
  
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update dropdown selection
  updateLanguageDropdown();
  
  // Update all text content
  updateAllText();
  
  console.log('✅ Language switched to:', lang);
}

function updateLanguageDropdown() {
  const languageItems = document.querySelectorAll('#languageMenu .dropdown-item');
  const currentLanguageElement = document.getElementById('currentLanguage');
  
  languageItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.lang === currentLang) {
      item.classList.add('active');
      if (currentLanguageElement) {
        currentLanguageElement.textContent = item.textContent.split(' ')[0];
      }
    }
  });
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

// Password visibility toggle function
function setupPasswordToggle() {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPassword');
  
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Toggle eye icon
      const eyeIcon = this.querySelector('i');
      if (type === 'text') {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        this.setAttribute('title', 'Hide password');
      } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        this.setAttribute('title', 'Show password');
      }
    });
  }
  
  if (toggleConfirmPasswordBtn && confirmPasswordInput) {
    toggleConfirmPasswordBtn.addEventListener('click', function() {
      const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      confirmPasswordInput.setAttribute('type', type);
      
      // Toggle eye icon
      const eyeIcon = this.querySelector('i');
      if (type === 'text') {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        this.setAttribute('title', 'Hide password');
      } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        this.setAttribute('title', 'Show password');
      }
    });
  }
}

function setupEventListeners() {
  // Country change handler
  const countrySelect = document.getElementById('country');
  if (countrySelect) {
    countrySelect.addEventListener('change', function() {
      const otherCountryContainer = document.getElementById('otherCountryContainer');
      if (this.value === 'other') {
        otherCountryContainer.style.display = 'block';
      } else {
        otherCountryContainer.style.display = 'none';
      }
    });
  }
  
  // Password visibility toggle
  setupPasswordToggle();
  
  // Password validation
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('input', validatePassword);
  }
  
  // Confirm password validation
  const confirmPasswordInput = document.getElementById('confirmPassword');
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
  }
  
  // Form submission
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Back button
  const backToStep1 = document.getElementById('backToStep1');
  if (backToStep1) {
    backToStep1.addEventListener('click', function() {
      goToStep(1);
    });
  }
  
  // Save courses button
  const saveCoursesBtn = document.getElementById('saveCoursesBtn');
  if (saveCoursesBtn) {
    saveCoursesBtn.addEventListener('click', handleSaveCourses);
  }
}

function validatePassword() {
  const password = this.value;
  const uppercase = /[A-Z]/.test(password);
  const lowercase = /[a-z]/.test(password);
  const number = /\d/.test(password);
  const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const length = password.length >= 8;
  
  // Update checkboxes
  document.getElementById('req-uppercase').checked = uppercase;
  document.getElementById('req-lowercase').checked = lowercase;
  document.getElementById('req-number').checked = number;
  document.getElementById('req-special').checked = special;
  document.getElementById('req-length').checked = length;
}

function validateConfirmPassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = this.value;
  const matchElement = document.getElementById('password-match');
  
  if (confirmPassword === '') {
    matchElement.style.display = 'none';
    return;
  }
  
  matchElement.style.display = 'block';
  if (password === confirmPassword) {
    matchElement.textContent = translations[currentLang].passwords_match;
    matchElement.style.color = 'green';
  } else {
    matchElement.textContent = translations[currentLang].passwords_not_match;
    matchElement.style.color = 'red';
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  
  // Validate form
  if (!validateForm()) {
    return;
  }
  
  // Collect form data
  const formData = {
    firstName: document.getElementById('fname').value.trim(),
    lastName: document.getElementById('lname').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value,
    studentId: document.getElementById('studentId').value.trim(),
    country: document.getElementById('country').value,
    track: document.getElementById('track').value,
    year: document.getElementById('year').value,
    term: document.getElementById('term').value,
    agree: document.getElementById('agree').checked
  };
  
  // Handle other country
  if (formData.country === 'other') {
    const otherCountry = document.getElementById('otherCountry').value.trim();
    if (!otherCountry) {
      showFieldError('otherCountry', translations[currentLang].other_country_error);
      return;
    }
    formData.country = otherCountry;
  }
  
  // Store user data
  userData = formData;
  
  // Show loading
  showLoading(translations[currentLang].loading_register);
  
  try {
    // Register user with Firebase
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(
      formData.email,
      formData.password
    );
    
    // Save user data to Firestore
    await saveUserDataToFirestore(userCredential.user.uid, formData);
    
    // Hide loading
    hideLoading();
    
    // Go to step 2
    goToStep(2);
    
  } catch (error) {
    hideLoading();
    console.error('Registration error:', error);
    showError(error.message);
  }
}

function validateForm() {
  let isValid = true;
  
  // Reset all errors
  document.querySelectorAll('.field-error').forEach(el => el.style.display = 'none');
  
  // Validate first name
  const fname = document.getElementById('fname').value.trim();
  if (!fname) {
    showFieldError('fname', translations[currentLang].first_name_error);
    isValid = false;
  }
  
  // Validate last name
  const lname = document.getElementById('lname').value.trim();
  if (!lname) {
    showFieldError('lname', translations[currentLang].last_name_error);
    isValid = false;
  }
  
  // Validate email
  const email = document.getElementById('email').value.trim();
  if (!email || !email.endsWith('@students.stamford.edu')) {
    showFieldError('email', translations[currentLang].email_error);
    isValid = false;
  }
  
  // Validate password
  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  if (!passwordRegex.test(password)) {
    showFieldError('password', translations[currentLang].password_error);
    isValid = false;
  }
  
  // Validate confirm password
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    showFieldError('confirmPassword', translations[currentLang].confirm_password_error);
    isValid = false;
  }
  
  // Validate student ID
  const studentId = document.getElementById('studentId').value.trim();
  if (!studentId) {
    showFieldError('studentId', translations[currentLang].student_id_error);
    isValid = false;
  }
  
  // Validate country
  const country = document.getElementById('country').value;
  if (!country) {
    showFieldError('country', translations[currentLang].country_error);
    isValid = false;
  }
  
  // Validate track
  const track = document.getElementById('track').value;
  if (!track) {
    showFieldError('track', translations[currentLang].track_error);
    isValid = false;
  }
  
  // Validate year
  const year = document.getElementById('year').value;
  if (!year) {
    showFieldError('year', translations[currentLang].year_error);
    isValid = false;
  }
  
  // Validate term
  const term = document.getElementById('term').value;
  if (!term) {
    showFieldError('term', translations[currentLang].term_error);
    isValid = false;
  }
  
  // Validate agreement
  const agree = document.getElementById('agree').checked;
  if (!agree) {
    showFieldError('agree', translations[currentLang].agree_error);
    isValid = false;
  }
  
  return isValid;
}

function showFieldError(fieldId, message) {
  const errorElement = document.getElementById(`${fieldId}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function showLoading(message) {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const loadingText = document.getElementById('loading-text');
  
  if (loadingText) {
    loadingText.textContent = message || translations[currentLang].loading_register;
  }
  
  if (loadingSpinner) {
    loadingSpinner.style.display = 'flex';
  }
}

function hideLoading() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.style.display = 'none';
  }
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  const errorText = document.getElementById('error-text');
  
  if (errorText) {
    errorText.textContent = message;
  }
  
  if (errorMessage) {
    errorMessage.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 5000);
  }
}

async function saveUserDataToFirestore(userId, userData) {
  try {
    await firebase.firestore().collection('users').doc(userId).set({
      uid: userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      studentId: userData.studentId,
      country: userData.country,
      track: userData.track,
      year: userData.year,
      term: userData.term,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      courses: []
    });
    
    console.log('✅ User data saved to Firestore');
  } catch (error) {
    console.error('❌ Error saving user data:', error);
    throw error;
  }
}

function goToStep(step) {
  currentStep = step;
  
  // Hide all step contents
  document.getElementById('step1-content').style.display = 'none';
  document.getElementById('step2-content').style.display = 'none';
  document.getElementById('step3-content').style.display = 'none';
  
  // Update steps
  document.querySelectorAll('.step').forEach((stepEl, index) => {
    if (index + 1 <= step) {
      stepEl.classList.add('active');
    } else {
      stepEl.classList.remove('active');
    }
  });
  
  // Show current step content
  document.getElementById(`step${step}-content`).style.display = 'block';
  
  // Load courses if going to step 2
  if (step === 2) {
    loadCoursesForTrack(userData.track);
  }
  
  // Update success info if going to step 3
  if (step === 3) {
    updateSuccessInfo();
  }
}

function loadCoursesForTrack(track) {
  const courseSelection = document.getElementById('course-selection');
  
  // Clear existing courses
  courseSelection.innerHTML = '';
  
  // Sample course data - in a real app, this would come from a database
  const courses = getCoursesByTrack(track);
  
  if (courses.length === 0) {
    courseSelection.innerHTML = `
      <div class="alert alert-info">
        <i class="fas fa-info-circle me-2"></i>
        ${translations[currentLang].no_courses_found}
      </div>
    `;
    return;
  }
  
  // Create course cards
  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card card mb-3';
    courseCard.innerHTML = `
      <div class="card-body">
        <div class="form-check">
          <input class="form-check-input course-checkbox" type="checkbox" value="${course.id}" id="course-${course.id}">
          <label class="form-check-label w-100" for="course-${course.id}">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <h6 class="mb-1">${course.code}: ${course.name}</h6>
              </div>
              <span class="badge bg-primary">${course.credits} ${translations[currentLang].credits}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="course-year small text-muted">
                <i class="fas fa-calendar me-1"></i>${translations[currentLang].year} ${course.year}
              </span>
              ${course.prerequisite ? 
                `<span class="text-warning small">
                  <i class="fas fa-exclamation-circle me-1"></i>
                  <strong>${translations[currentLang].prerequisite}:</strong> ${course.prerequisite}
                </span>` : ''
              }
            </div>
          </label>
        </div>
      </div>
    `;
    
    courseSelection.appendChild(courseCard);
    
    // Add event listener to checkbox
    const checkbox = courseCard.querySelector('.course-checkbox');
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        selectedCourses[course.id] = course;
      } else {
        delete selectedCourses[course.id];
      }
    });
  });
  
  // Update track title
  const trackTitle = document.getElementById('track-title');
  if (trackTitle) {
    trackTitle.textContent = getTrackName(currentLang, track);
  }
}

function getTrackName(lang, track) {
  const trackNames = {
    software: {
      en: "Software Engineering",
      zh: "软件工程",
      ja: "ソフトウェア工学",
      ko: "소프트웨어 공학",
      ar: "هندسة البرمجيات",
      hi: "सॉफ्टवेयर इंजीनियरिंग",
      th: "วิศวกรรมซอฟต์แวร์",
      vi: "Kỹ thuật phần mềm",
      id: "Rekayasa Perangkat Lunak",
      ms: "Kejuruteraan Perisian",
      ru: "Программная инженерия",
      ur: "سافٹ ویئر انجینئرنگ",
      tr: "Yazılım Mühendisliği",
      fa: "مهندسی نرم افزار",
      ta: "மென்பொருள் பொறியியல்",
      te: "సాఫ్ట్వేర్ ఇంజనీరింగ్",
      bn: "সফটওয়্যার ইঞ্জিনিয়ারিং",
      lo: "ວິສະວະກຳຊອບແວ",
      km: "វិស្វកម្មសូហ្វវែរ",
      my: "ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာပညာ",
      ne: "सफ्टवेयर इन्जिनियरिङ",
      pa: "ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ",
      si: "මෘදුකාංග ඉංජිනේරු විද්‍යාව"
    },
    ecommerce: {
      en: "E-Commerce Technology",
      zh: "电子商务技术",
      ja: "Eコマース技術",
      ko: "전자상거래 기술",
      ar: "تكنولوجيا التجارة الإلكترونية",
      hi: "ई-कॉमर्स प्रौद्योगिकी",
      th: "เทคโนโลยีอีคอมเมิร์ซ",
      vi: "Công nghệ thương mại điện tử",
      id: "Teknologi E-Commerce",
      ms: "Teknologi E-Dagang",
      ru: "Технологии электронной коммерции",
      ur: "ای کامرس ٹیکنالوجی",
      tr: "E-Ticaret Teknolojisi",
      fa: "فناوری تجارت الکترونیک",
      ta: "மின்வணிக தொழில்நுட்பம்",
      te: "ఇ-కామర్స్ టెక్నాలజీ",
      bn: "ই-কমার্স টেকনোলজি",
      lo: "ເຕັກໂນໂລຊີອີຄອມເມີຊ",
      km: "បច្ចេកវិទ្យាពាណិជ្ជកម្មអេឡិចត្រូនិក",
      my: "အီလက်ထရွန်းနစ်စီးပွားရေးနည်းပညာ",
      ne: "ई-कमर्स प्रविधि",
      pa: "ਈ-ਕਾਮਰਸ ਟੈਕਨਾਲੋਜੀ",
      si: "ඊ-වාණිජ්‍ය තාක්ෂණය"
    },
    data: {
      en: "Data Science",
      zh: "数据科学",
      ja: "データサイエンス",
      ko: "데이터 과학",
      ar: "علوم البيانات",
      hi: "डेटा विज्ञान",
      th: "วิทยาศาสตร์ข้อมูล",
      vi: "Khoa học dữ liệu",
      id: "Ilmu Data",
      ms: "Sains Data",
      ru: "Наука о данных",
      ur: "ڈیٹا سائنس",
      tr: "Veri Bilimi",
      fa: "علم داده",
      ta: "தரவு அறிவியல்",
      te: "డేటా సైన్స్",
      bn: "ডেটা সাইন্স",
      lo: "ວິທະຍາສາດຂໍ້ມູນ",
      km: "វិទ្យាសាស្ត្រទិន្នន័យ",
      my: "ဒေတာသိပ္ပံ",
      ne: "डाटा विज्ञान",
      pa: "ਡੇਟਾ ਸਾਇੰਸ",
      si: "දත්ත විද්‍යාව"
    },
    network: {
      en: "Network and Security",
      zh: "网络与安全",
      ja: "ネットワークとセキュリティ",
      ko: "네트워크 및 보안",
      ar: "الشبكات والأمن",
      hi: "नेटवर्क और सुरक्षा",
      th: "เครือข่ายและความปลอดภัย",
      vi: "Mạng và bảo mật",
      id: "Jaringan dan Keamanan",
      ms: "Rangkaian dan Keselamatan",
      ru: "Сети и безопасность",
      ur: "نیٹ ورک اور سیکورٹی",
      tr: "Ağ ve Güvenlik",
      fa: "شبکه و امنیت",
      ta: "பிணையம் மற்றும் பாதுகாப்பு",
      te: "నెట్వర్క్ మరియు భద్రత",
      bn: "নেটওয়ার্ক এবং নিরাপত্তা",
      lo: "ເຄືອຂ່າຍ ແລະ ຄວາມປອດໄພ",
      km: "បណ្តាញ និងសុវត្ថិភាព",
      my: "ကွန်ယက်နှင့်လုံခြုံရေး",
      ne: "नेटवर्क र सुरक्षा",
      pa: "ਨੈੱਟਵਰਕ ਅਤੇ ਸੁਰੱਖਿਆ",
      si: "ජාලය සහ ආරක්ෂාව"
    }
  };
  
  return trackNames[track]?.[lang] || trackNames[track]?.en || track;
}

function getCoursesByTrack(track) {
  // Sample course data - in a real app, this would come from a database
  const allCourses = {
    software: [
      { id: 'ITE220', code: 'ITE220', name: 'Web Development II', credits: 4, year: 3, prerequisite: 'ITE222' },
      { id: 'ITE343', code: 'ITE343', name: 'Mobile Application Development', credits: 4, year: 3, prerequisite: 'ITE222' },
      { id: 'ITE365', code: 'ITE365', name: 'Software Quality Management', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE367', code: 'ITE367', name: 'Software Architecture and Modelling', credits: 4, year: 3, prerequisite: 'ITE321' },
      { id: 'ITE368', code: 'ITE368', name: 'Software Testing and Maintenance', credits: 4, year: 3, prerequisite: 'ITE222' }
    ],
    ecommerce: [
      { id: 'MKT231', code: 'MKT231', name: 'Principles of Marketing', credits: 4, year: 3, prerequisite: '' },
      { id: 'MKT333', code: 'MKT333', name: 'Digital Marketing', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE340', code: 'ITE340', name: 'E-Commerce Systems and Infrastructure', credits: 4, year: 3, prerequisite: 'ITE220' },
      { id: 'MKT345', code: 'MKT345', name: 'Gamification', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE362', code: 'ITE362', name: 'Digital Advertising Technology', credits: 4, year: 3, prerequisite: '' }
    ],
    data: [
      { id: 'ITE351', code: 'ITE351', name: 'Programming for Data Science', credits: 4, year: 3, prerequisite: 'ITE224' },
      { id: 'ITE352', code: 'ITE352', name: 'Artificial Intelligence and Machine Learning', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE353', code: 'ITE353', name: 'Machine Learning Foundation', credits: 4, year: 3, prerequisite: 'ITE224' },
      { id: 'ITE354', code: 'ITE354', name: 'Business Intelligence and Decision Modeling', credits: 4, year: 3, prerequisite: 'ITE224' },
      { id: 'ITE355', code: 'ITE355', name: 'Data Warehousing and Data Mining', credits: 4, year: 3, prerequisite: 'ITE224' }
    ],
    network: [
      { id: 'ITE201', code: 'ITE201', name: 'IT Service Desk & Incident Management', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE421', code: 'ITE421', name: 'Information Assurance and Security II', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE451', code: 'ITE451', name: 'AWS Cloud Foundations', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE476', code: 'ITE476', name: 'Network II', credits: 4, year: 3, prerequisite: '' },
      { id: 'ITE477', code: 'ITE477', name: 'Window Server', credits: 4, year: 3, prerequisite: '' }
    ]
  };
  
  return allCourses[track] || [];
}

async function handleSaveCourses() {
  if (Object.keys(selectedCourses).length === 0) {
    alert(translations[currentLang].select_courses_instruction);
    return;
  }
  
  showLoading(translations[currentLang].loading_courses);
  
  try {
    // Get current user
    const user = firebase.auth().currentUser;
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    // Save selected courses to Firestore
    await firebase.firestore().collection('users').doc(user.uid).update({
      courses: Object.values(selectedCourses).map(course => course.id),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    hideLoading();
    registrationCompleted = true;
    goToStep(3);
    
  } catch (error) {
    hideLoading();
    console.error('Error saving courses:', error);
    showError(error.message);
  }
}

function updateSuccessInfo() {
  document.getElementById('success-track').textContent = 
    `${translations[currentLang].track_label_success}: ${getTrackName(currentLang, userData.track)}`;
  document.getElementById('success-name').textContent = 
    `${translations[currentLang].name_label}: ${userData.firstName} ${userData.lastName}`;
  document.getElementById('success-email').textContent = 
    `${translations[currentLang].email_label}: ${userData.email}`;
  document.getElementById('success-studentid').textContent = 
    `${translations[currentLang].studentid_label}: ${userData.studentId}`;
}

// Firebase initialization wait function
function waitForFirebase() {
  return new Promise((resolve, reject) => {
    const checkFirebase = setInterval(() => {
      if (firebase.apps.length > 0 && firebase.auth && firebase.firestore) {
        clearInterval(checkFirebase);
        resolve();
      }
    }, 100);
    
    setTimeout(() => {
      clearInterval(checkFirebase);
      reject(new Error('Firebase initialization timeout'));
    }, 5000);
  });
}

console.log('🎉 Combined Registration and Curriculum application loaded');