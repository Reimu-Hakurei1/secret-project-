// profile.js - Fixed with proper error handling
console.log('🚀 Profile script loaded');

const profileTranslations = {
  th: {
    "profile_title": "ตั้งค่าโปรไฟล์",
    "profile_settings": "การตั้งค่าโปรไฟล์",
    "dashboard": "แดชบอร์ด",
    "my_curriculum": "หลักสูตรของฉัน",
    "logout": "ออกจากระบบ",
    "personal_info": "ข้อมูลส่วนตัว",
    "first_name": "ชื่อ",
    "last_name": "นามสกุล",
    "student_id": "รหัสนักศึกษา",
    "contact_info": "ข้อมูลการติดต่อ",
    "email": "อีเมล",
    "email_readonly": "ไม่สามารถเปลี่ยนอีเมลได้",
    "country": "ประเทศ",
    "select_country": "เลือกประเทศ",
    "thailand": "ไทย",
    "myanmar": "เมียนมา",
    "other": "อื่นๆ",
    "other_country": "ระบุประเทศ",
    "academic_info": "ข้อมูลการศึกษา",
    "track": "สาขาวิชา",
    "select_track": "เลือกสาขาวิชา",
    "track_software": "วิศวกรรมซอฟต์แวร์",
    "track_data": "วิทยาศาสตร์ข้อมูล",
    "track_network": "เครือข่ายและความปลอดภัย",
    "year": "ชั้นปี",
    "select_year": "เลือกชั้นปี",
    "year1": "ปี 1",
    "year2": "ปี 2",
    "year3": "ปี 3",
    "year4": "ปี 4",
    "term": "ภาคเรียน",
    "select_term": "เลือกภาคเรียน",
    "term1": "ภาคเรียนที่ 1",
    "term2": "ภาคเรียนที่ 2",
    "term3": "ภาคเรียนที่ 3",
    "save_profile": "บันทึกการเปลี่ยนแปลง",
    "save_success": "บันทึกข้อมูลสำเร็จแล้ว!",
    "loading_profile": "กำลังโหลดโปรไฟล์...",
    "please_wait": "กรุณารอสักครู่"
  },
  en: {
    "profile_title": "Profile Settings",
    "profile_settings": "Profile Settings",
    "dashboard": "Dashboard",
    "my_curriculum": "My Curriculum",
    "logout": "Logout",
    "personal_info": "Personal Information",
    "first_name": "First Name",
    "last_name": "Last Name",
    "student_id": "Student ID",
    "contact_info": "Contact Information",
    "email": "Email",
    "email_readonly": "Email cannot be changed",
    "country": "Country",
    "select_country": "Select country",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "other": "Other",
    "other_country": "Specify Country",
    "academic_info": "Academic Information",
    "track": "Track",
    "select_track": "Select track",
    "track_software": "Software Engineering",
    "track_data": "Data Science",
    "track_network": "Network and Security",
    "year": "Year",
    "select_year": "Select year",
    "year1": "Year 1",
    "year2": "Year 2",
    "year3": "Year 3",
    "year4": "Year 4",
    "term": "Term",
    "select_term": "Select term",
    "term1": "Term 1",
    "term2": "Term 2",
    "term3": "Term 3",
    "save_profile": "Save Changes",
    "save_success": "Profile saved successfully!",
    "loading_profile": "Loading Profile...",
    "please_wait": "Please wait a moment"
  }
};

let currentLang = 'th';
let currentUser = null;
let userData = {};

document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 Profile page loaded');
  initializeProfile();
});

async function initializeProfile() {
  try {
    console.log('🔐 Checking authentication...');
    await checkAuthentication();
    
    console.log('🌐 Initializing language...');
    initializeLanguage();
    
    console.log('🎯 Setting up event listeners...');
    setupEventListeners();
    
    console.log('📥 Loading user data...');
    await loadUserData();
    
    console.log('📝 Populating form...');
    populateProfileForm();
    
    console.log('✅ Hiding loading spinner...');
    hideLoadingSpinner();
    
    console.log('🎉 Profile initialized successfully');
  } catch (error) {
    console.error('❌ Profile initialization failed:', error);
    showError('Failed to load profile: ' + error.message);
  }
}

function initializeLanguage() {
  const savedLang = localStorage.getItem('preferredLang') || 'th';
  currentLang = savedLang;
  
  const langButtons = document.querySelectorAll('.lang-btn');
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
  console.log('🔄 Switching language to:', lang);
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
  
  updateProfileText();
}

function updateProfileText() {
  const translations = profileTranslations[currentLang];
  
  // Update page title
  document.title = `${translations.profile_title} - STIU Student Portal`;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
  
  console.log('✅ Profile language updated to:', currentLang);
}

function setupEventListeners() {
  const logoutBtn = document.getElementById('logoutBtn');
  const profileForm = document.getElementById('profileForm');
  const countrySelect = document.getElementById('profileCountry');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
    console.log('🎯 Logout button event listener added');
  }
  
  if (profileForm) {
    profileForm.addEventListener('submit', handleProfileSave);
    console.log('🎯 Profile form event listener added');
  }
  
  if (countrySelect) {
    countrySelect.addEventListener('change', handleCountryChange);
    console.log('🎯 Country select event listener added');
  }
}

async function checkAuthentication() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log('❌ No user signed in, redirecting to login...');
        window.location.href = 'login.html';
        reject(new Error('User not authenticated'));
      } else {
        console.log('✅ User authenticated:', user.email);
        currentUser = user;
        
        // Safely update user name in navigation
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
          userNameElement.textContent = user.email; // Temporary until we load user data
        }
        
        resolve();
      }
    });
  });
}

async function loadUserData() {
  try {
    console.log('🔥 Waiting for Firebase...');
    await waitForFirebase();
    
    console.log('📥 Fetching user data from Firestore...');
    const querySnapshot = await window.firebaseDb.collection('registrations')
      .where('email', '==', currentUser.email)
      .get();
    
    if (!querySnapshot.empty) {
      console.log('✅ User data found in registrations');
      querySnapshot.forEach((doc) => {
        userData = { id: doc.id, ...doc.data() };
      });
    } else {
      console.log('⚠️ No user data found, creating default...');
      userData = {
        firstName: '',
        lastName: '',
        studentId: '',
        email: currentUser.email,
        country: '',
        track: '',
        year: '',
        term: ''
      };
    }
    
    console.log('📋 User data loaded:', userData);
    
  } catch (error) {
    console.error('❌ Error loading user data:', error);
    userData = {
      firstName: '',
      lastName: '',
      studentId: '',
      email: currentUser.email,
      country: '',
      track: '',
      year: '',
      term: ''
    };
  }
}

function populateProfileForm() {
  console.log('📝 Populating profile form with user data...');
  
  // Safely update all form elements
  safeUpdateElement('profileUserName', 
    userData.firstName && userData.lastName 
      ? `${userData.firstName} ${userData.lastName}`
      : (currentLang === 'th' ? 'ผู้ใช้' : 'User')
  );
  
  safeUpdateElement('profileUserEmail', userData.email || currentUser.email);
  safeSetValue('profileFirstName', userData.firstName || '');
  safeSetValue('profileLastName', userData.lastName || '');
  safeSetValue('profileStudentId', userData.studentId || '');
  safeSetValue('profileEmail', userData.email || currentUser.email);
  safeSetValue('profileCountry', userData.country || '');
  safeSetValue('profileTrack', userData.track || '');
  safeSetValue('profileYear', userData.year || '');
  safeSetValue('profileTerm', userData.term || '');
  
  // Handle other country field
  const otherCountryContainer = document.getElementById('profileOtherCountryContainer');
  if (otherCountryContainer) {
    if (userData.country === 'other') {
      otherCountryContainer.style.display = 'block';
      safeSetValue('profileOtherCountry', userData.otherCountry || '');
    } else {
      otherCountryContainer.style.display = 'none';
    }
  }
  
  // Update navigation user name
  safeUpdateElement('userName',
    userData.firstName && userData.lastName 
      ? `${userData.firstName} ${userData.lastName}`
      : (currentLang === 'th' ? 'ผู้ใช้' : 'User')
  );
  
  console.log('✅ Profile form populated successfully');
}

function handleCountryChange() {
  const countrySelect = document.getElementById('profileCountry');
  const otherCountryContainer = document.getElementById('profileOtherCountryContainer');
  
  if (countrySelect && otherCountryContainer) {
    if (countrySelect.value === 'other') {
      otherCountryContainer.style.display = 'block';
    } else {
      otherCountryContainer.style.display = 'none';
    }
  }
}

async function handleProfileSave(e) {
  e.preventDefault();
  console.log('💾 Saving profile data...');
  
  const saveBtn = document.getElementById('saveProfileBtn');
  const saveSuccess = document.getElementById('saveSuccess');
  
  try {
    // Show loading state
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + 
                         (currentLang === 'th' ? 'กำลังบันทึก...' : 'Saving...');
    }
    
    // Get form data
    const formData = {
      firstName: getValue('profileFirstName'),
      lastName: getValue('profileLastName'),
      studentId: getValue('profileStudentId'),
      email: getValue('profileEmail'),
      country: getValue('profileCountry'),
      track: getValue('profileTrack'),
      year: getValue('profileYear'),
      term: getValue('profileTerm'),
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Add other country if applicable
    if (formData.country === 'other') {
      formData.otherCountry = getValue('profileOtherCountry');
    }
    
    console.log('📦 Form data to save:', formData);
    
    // Save to Firestore
    if (userData.id) {
      console.log('🔄 Updating existing user record...');
      await window.firebaseDb.collection('registrations')
        .doc(userData.id)
        .update(formData);
    } else {
      console.log('🆕 Creating new user record...');
      formData.uid = currentUser.uid;
      formData.registrationDate = new Date().toISOString();
      formData.agreedToTerms = true;
      formData.language = currentLang;
      
      const docRef = await window.firebaseDb.collection('registrations').add(formData);
      userData.id = docRef.id;
      console.log('✅ New user record created with ID:', docRef.id);
    }
    
    // Update local user data
    userData = { ...userData, ...formData };
    console.log('✅ User data updated locally');
    
    // Update UI
    safeUpdateElement('profileUserName', `${userData.firstName} ${userData.lastName}`);
    safeUpdateElement('userName', `${userData.firstName} ${userData.lastName}`);
    
    // Show success message
    if (saveSuccess) {
      saveSuccess.style.display = 'block';
      setTimeout(() => {
        saveSuccess.style.display = 'none';
      }, 3000);
    }
    
    console.log('✅ Profile saved successfully');
    
  } catch (error) {
    console.error('❌ Error saving profile:', error);
    alert(currentLang === 'th' ? 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' : 'Error saving profile');
  } finally {
    // Reset button state
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i class="fas fa-save me-2"></i>' + 
                         profileTranslations[currentLang].save_profile;
    }
  }
}

async function handleLogout() {
  try {
    console.log('🚪 Logging out...');
    await firebase.auth().signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('❌ Logout failed:', error);
  }
}

// Utility functions
function safeUpdateElement(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  } else {
    console.log(`⚠️ Element #${elementId} not found`);
  }
}

function safeSetValue(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) {
    element.value = value;
  } else {
    console.log(`⚠️ Element #${elementId} not found`);
  }
}

function getValue(elementId) {
  const element = document.getElementById(elementId);
  return element ? element.value.trim() : '';
}

function hideLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

function showError(message) {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.innerHTML = `
      <div class="text-center">
        <i class="fas fa-exclamation-triangle fa-3x text-danger mb-3"></i>
        <h5 class="text-danger">${currentLang === 'th' ? 'เกิดข้อผิดพลาด' : 'Error'}</h5>
        <p class="text-muted">${message}</p>
        <button class="btn btn-primary mt-2" onclick="location.reload()">
          ${currentLang === 'th' ? 'ลองอีกครั้ง' : 'Try Again'}
        </button>
      </div>
    `;
  }
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