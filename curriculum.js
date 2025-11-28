// curriculum.js - Updated with proper course data from PDF and user profile fix
console.log('🚀 Curriculum script loaded');

const curriculumTranslations = {
  th: {
    "curriculum_title": "หลักสูตรของฉัน",
    "profile_settings": "ตั้งค่าโปรไฟล์",
    "dashboard": "แดชบอร์ด",
    "logout": "ออกจากระบบ",
    "progress_summary": "สรุปความคืบหน้าหลักสูตร",
    "total_credits": "หน่วยกิตทั้งหมด",
    "completed_credits": "หน่วยกิตที่สำเร็จ",
    "remaining_credits": "หน่วยกิตที่เหลือ",
    "completion_rate": "อัตราความสำเร็จ",
    "general_education": "การศึกษาทั่วไป",
    "humanities": "มนุษยศาสตร์",
    "social_sciences": "สังคมศาสตร์",
    "languages": "ภาษา",
    "science_math": "วิทยาศาสตร์และคณิตศาสตร์",
    "professional_courses": "วิชาชีพ",
    "core_courses": "วิชาพื้นฐาน",
    "major_requirements": "วิชาบังคับสาขา",
    "major_electives": "วิชาเลือกสาขา",
    "specialization_tracks": "สาขาเฉพาะ",
    "software_track": "วิศวกรรมซอฟต์แวร์",
    "ecommerce_track": "เทคโนโลยีอีคอมเมิร์ซ",
    "data_science_track": "วิทยาศาสตร์ข้อมูล",
    "network_track": "เครือข่ายและความปลอดภัย",
    "other_requirements": "ข้อกำหนดอื่นๆ",
    "free_electives": "วิชาเลือกเสรี",
    "internship": "การฝึกงาน",
    "save_progress": "บันทึกความคืบหน้า",
    "save_success": "บันทึกข้อมูลสำเร็จแล้ว!",
    "loading_curriculum": "กำลังโหลดหลักสูตร...",
    "course_completed": "สำเร็จแล้ว",
    "course_in_progress": "กำลังศึกษา",
    "course_not_started": "ยังไม่เริ่มศึกษา",
    "credits": "หน่วยกิต",
    "year": "ปี",
    "choose_subjects": "เลือกวิชา",
    "required_subjects": "วิชาบังคับ",
    "select_subjects": "เลือกวิชา",
    "credits_unit": "หน่วยกิต",
    "prerequisite": "วิชาบังคับก่อน",
    "please_wait": "กรุณารอสักครู่",
    
    // Description translations (single language per element)
    "general_education_desc": "<strong>การศึกษาทั่วไป (40 หน่วยกิต)</strong> - วิชาการศึกษาทั่วไปทำหน้าที่เป็นพื้นฐานสำหรับสาขาวิชาหลักของคุณและช่วยให้คุณพัฒนาความรู้และทักษะที่รอบด้าน คุณต้องเลือกเรียน 10 วิชาในหมวดหมู่ต่อไปนี้ เราได้แนะนำปีการศึกษาที่เหมาะสมเพื่อช่วยคุณตัดสินใจว่าเมื่อใดควรเรียนวิชาใดวิชาหนึ่ง",
    "professional_courses_desc": "<strong>วิชาชีพ (100 หน่วยกิต)</strong> - วิชาชีพทำหน้าที่เป็นแกนหลักของความรู้และทักษะสำหรับปริญญาของคุณและประกอบด้วยทั้งหมด 25 วิชา (100 หน่วยกิต) วิชาพื้นฐานหลักของคุณจะช่วยให้คุณพัฒนาความสามารถทางธุรกิจที่สำคัญร่วมกับนักศึกษา IT คนอื่นๆ และวิชาบังคับสาขาของคุณโดยทั่วไปจะเกี่ยวข้องกับหัวข้อขั้นสูงที่เกี่ยวข้องกับความรู้พื้นฐานด้าน IT วิชาเลือกสาขาจำนวน 5 วิชาของคุณจะช่วยให้คุณมุ่งเน้นการศึกษาของคุณในสาขาธุรกิจเฉพาะด้านและให้คุณมีตัวเลือกในการเลือกวิชาโท",
    "major_electives_desc": "<strong>วิชาเลือกสาขา – โปรดเลือก 5 วิชา (20 หน่วยกิต) จากรายการต่อไปนี้</strong> - นักศึกษาที่สำเร็จ 20 หน่วยกิตจากภายในสาขาเฉพาะเดียวกันจะได้รับใบรับรองการเรียนเฉพาะทางในสาขานั้น หากนักศึกษาไม่เลือกที่จะติดตามสาขาเฉพาะเหล่านี้ จะไม่ได้รับใบรับรอง",
    "free_electives_desc": "<strong>วิชาเลือกเสรี (8 หน่วยกิต)</strong> - วิชาเลือกเสรีช่วยให้คุณสามารถศึกษาในสาขาที่สนใจส่วนบุคคลได้ คุณต้องเรียนให้สำเร็จ 2 วิชาในหมวดหมู่นี้และคุณสามารถเลือกวิชาใดก็ได้ที่คุณมีสิทธิ์เรียนที่เปิดสอนในมหาวิทยาลัย",
    "internship_desc": "<strong>การฝึกงาน (12 หน่วยกิต)</strong> - การฝึกงานช่วยให้คุณได้นำความรู้และทักษะที่ได้รับระหว่างการเรียนมาประยุกต์ใช้และสะท้อนว่าคุณสามารถใช้ทักษะเหล่านี้ได้ดีเพียงใด การฝึกงานของคุณจะต้องดำเนินการในภาคการศึกษาสุดท้ายหลังจากเรียนวิชาต่างๆ ครบทั้งหมดแล้วและจะให้หน่วยกิตสุดท้าย 12 หน่วยกิตเพื่อสำเร็จการศึกษา"
  },
  en: {
    "curriculum_title": "My Curriculum",
    "profile_settings": "Profile Settings",
    "dashboard": "Dashboard",
    "logout": "Logout",
    "progress_summary": "Curriculum Progress Summary",
    "total_credits": "Total Credits",
    "completed_credits": "Completed Credits",
    "remaining_credits": "Remaining Credits",
    "completion_rate": "Completion Rate",
    "general_education": "General Education",
    "humanities": "Humanities",
    "social_sciences": "Social Sciences",
    "languages": "Languages",
    "science_math": "Science & Mathematics",
    "professional_courses": "Professional Courses",
    "core_courses": "Core Courses",
    "major_requirements": "Major Requirements",
    "major_electives": "Major Electives",
    "specialization_tracks": "Specialization Tracks",
    "software_track": "Software Engineering",
    "ecommerce_track": "E-Commerce Technology",
    "data_science_track": "Data Science",
    "network_track": "Network and Security",
    "other_requirements": "Other Requirements",
    "free_electives": "Free Electives",
    "internship": "Internship",
    "save_progress": "Save Progress",
    "save_success": "Progress saved successfully!",
    "loading_curriculum": "Loading Curriculum...",
    "course_completed": "Completed",
    "course_in_progress": "In Progress",
    "course_not_started": "Not Started",
    "credits": "credits",
    "year": "Year",
    "choose_subjects": "Choose Subjects",
    "required_subjects": "Required Subjects",
    "select_subjects": "Select Subjects",
    "credits_unit": "credits",
    "prerequisite": "Prerequisite",
    "please_wait": "Please wait a moment",
    
    // Description translations (single language per element)
    "general_education_desc": "<strong>General Education Courses (40 Credits)</strong> - General Education courses serve as a foundation for your major and helps you develop a well-rounded body of knowledge and skills. You must choose 10 subjects in the following categories. We've recommended a year to help you decide when to take any given subject.",
    "professional_courses_desc": "<strong>Professional Courses (100 Credits)</strong> - Professional courses serve as the main body of knowledge and skills of your degree and make up 25 subjects (100 credits) in total. Your basic core courses will help you develop essential business abilities alongside other IT students, and your Major Requirements will generally involve more advanced topics relating to fundamental knowledge of IT. Your 5 Major Elective courses will then allow you to focus your studies in a specific branch of business and give you the option to select a minor.",
    "major_electives_desc": "<strong>Major Electives – Please choose 5 subjects (20 credits) from the following list</strong> - Students who successfully complete 20 credits from within the same track will be awarded a certificate of Specialized Study in that track. If students do not choose to follow these tracks, they will not be awarded a certificate.",
    "free_electives_desc": "<strong>Free Electives (8 Credits)</strong> - Free electives allow you to study in an area of personal interest. You must complete 2 subjects in this category and you may choose any subject you are eligible for offered at the university.",
    "internship_desc": "<strong>Internship (12 Credits)</strong> - Your Internship allows you to put into practice the knowledge and skills you acquired during your coursework and reflect on how well you can apply these skills. Your Internship is to be taken in your last term, after completing all your coursework and will provide you with your final 12 credits to graduate."
  }
};

let currentLang = 'th';
let currentUser = null;
let userProgress = {};

// Complete curriculum data from the PDF with prerequisites - Updated to total 160 credits
const curriculumData = {
  generalEducation: {
    humanities: [
      { code: "ART101", name: "Art Appreciation", credits: 4, year: 1, prerequisite: "" },
      { code: "ART102", name: "Film Appreciation", credits: 4, year: 1, prerequisite: "" },
      { code: "ATH101", name: "Introduction to Cultural Anthropology", credits: 4, year: 1, prerequisite: "" },
      { code: "ATH102", name: "Mythology and Folklore", credits: 4, year: 1, prerequisite: "" },
      { code: "ECO101", name: "Sufficiency Economy", credits: 4, year: 1, prerequisite: "" },
      { code: "LIB155", name: "Creative Writing", credits: 4, year: 2, prerequisite: "ENG102" },
      { code: "LIB215", name: "Popular Fiction", credits: 4, year: 2, prerequisite: "" },
      { code: "LIB223", name: "Presentation Skills", credits: 4, year: 2, prerequisite: "ENG101" },
      { code: "HIS101", name: "Thai History and Culture", credits: 4, year: 1, prerequisite: "" },
      { code: "HIS103", name: "Asia in a Global Perspective", credits: 4, year: 1, prerequisite: "" },
      { code: "HIS104", name: "Foundation of Western Civilization", credits: 4, year: 1, prerequisite: "" },
      { code: "HIS105", name: "Foundation of Eastern Civilization", credits: 4, year: 1, prerequisite: "" }
    ],
    socialSciences: [
      { code: "GEO101", name: "World Geography", credits: 4, year: 1, prerequisite: "" },
      { code: "GEO102", name: "Cultural (Human) Geography", credits: 4, year: 1, prerequisite: "" },
      { code: "PSY101", name: "General Psychology", credits: 4, year: 1, prerequisite: "" },
      { code: "PSY102", name: "Personality Development", credits: 4, year: 1, prerequisite: "" },
      { code: "PSY201", name: "Business Psychology", credits: 4, year: 2, prerequisite: "" },
      { code: "PSY202", name: "Developmental Psychology", credits: 4, year: 2, prerequisite: "" },
      { code: "SOC101", name: "Introduction to Sociology", credits: 4, year: 1, prerequisite: "" }
    ],
    languages: [
      { code: "ENG101", name: "Introduction to Academic Writing", credits: 4, year: 1, prerequisite: "" },
      { code: "ENG102", name: "Academic Writing", credits: 4, year: 1, prerequisite: "ENG101" },
      { code: "ENG103", name: "College English III", credits: 4, year: 2, prerequisite: "ENG102" }
    ],
    scienceMath: [
      { code: "MAT100", name: "Fundamental Mathematics", credits: 4, year: 1, prerequisite: "" },
      { code: "MAT101", name: "College Algebra I", credits: 4, year: 1, prerequisite: "MAT100" },
      { code: "MAT102", name: "Quantitative Methods for Business", credits: 4, year: 1, prerequisite: "MAT101" },
      { code: "MIS101", name: "Computer Applications", credits: 4, year: 1, prerequisite: "" },
      { code: "STA101", name: "Introduction to Statistics", credits: 4, year: 1, prerequisite: "MAT101" }
    ]
  },
  professionalCourses: {
    core: [
      { code: "ITE101", name: "Information Technology Fundamentals", credits: 4, year: 1, prerequisite: "" },
      { code: "ITE102", name: "Discrete Mathematics Structure", credits: 4, year: 1, prerequisite: "MAT101" },
      { code: "ITE103", name: "Introduction to Data Structure and Algorithms Analysis", credits: 4, year: 2, prerequisite: "" },
      { code: "ITE104", name: "Computer Organization", credits: 4, year: 2, prerequisite: "" }
    ],
    majorRequirements: [
      { code: "ITE210", name: "Social and Professional Issues in Information Technology", credits: 4, year: 1, prerequisite: "" },
      { code: "ITE321", name: "System Analysis, Design, and Implementation", credits: 4, year: 2, prerequisite: "" },
      { code: "ITE120", name: "Web Development I", credits: 4, year: 2, prerequisite: "ITE254 and ITE221" },
      { code: "ITE224", name: "Introduction to Data Science", credits: 4, year: 2, prerequisite: "ITE102 and STA101" },
      { code: "ITE233", name: "Introduction to Internet of Things", credits: 4, year: 3, prerequisite: "ITE221" },
      { code: "ITE221", name: "Programming I", credits: 4, year: 1, prerequisite: "ITE103" },
      { code: "ITE231", name: "System Administration and Maintenance", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE240", name: "Operating Systems", credits: 4, year: 2, prerequisite: "" },
      { code: "ITE479", name: "IT Planning and Project Management", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE331", name: "Introduction to 3D Modeling and Virtual Reality", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE441", name: "Database Management Systems I", credits: 4, year: 2, prerequisite: "" },
      { code: "ITE442", name: "Database Management Systems II", credits: 4, year: 2, prerequisite: "ITE441" },
      { code: "ITE222", name: "Programming II", credits: 4, year: 2, prerequisite: "ITE221" },
      { code: "ITE254", name: "Human Computer Interaction", credits: 4, year: 2, prerequisite: "" },
      { code: "ITE420", name: "Information Assurance and Security I", credits: 4, year: 3, prerequisite: "ITE475" },
      { code: "ITE475", name: "Network I", credits: 4, year: 2, prerequisite: "" }
    ],
    majorElectives: [
      { code: "ITE220", name: "Web Development II", credits: 4, year: 3, prerequisite: "ITE222" },
      { code: "ITE343", name: "Mobile Application Development", credits: 4, year: 3, prerequisite: "ITE222" },
      { code: "ITE365", name: "Software Quality Management", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE367", name: "Software Architecture and Modelling", credits: 4, year: 3, prerequisite: "ITE321" },
      { code: "ITE368", name: "Software Testing and Maintenance", credits: 4, year: 3, prerequisite: "ITE222" }
    ],
    softwareTrack: [
      { code: "ITE220", name: "Web Development II", credits: 4, year: 3, prerequisite: "ITE222" },
      { code: "ITE343", name: "Mobile Application Development", credits: 4, year: 3, prerequisite: "ITE222" },
      { code: "ITE367", name: "Software Architecture and Modelling", credits: 4, year: 3, prerequisite: "ITE321" },
      { code: "ITE368", name: "Software Testing and Maintenance", credits: 4, year: 3, prerequisite: "ITE222" }
    ],
    ecommerceTrack: [
      { code: "MKT213", name: "Principles of Marketing", credits: 4, year: 3, prerequisite: "" },
      { code: "MKT333", name: "Digital Marketing", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE340", name: "E-Commerce Systems and Infrastructure", credits: 4, year: 3, prerequisite: "ITE220" },
      { code: "MKT345", name: "Gamification", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE362", name: "Digital Advertising Technology", credits: 4, year: 3, prerequisite: "" }
    ],
    dataScienceTrack: [
      { code: "ITE351", name: "Programming for Data Science", credits: 4, year: 3, prerequisite: "ITE224" },
      { code: "ITE352", name: "Artificial Intelligence and Machine Learning", credits: 4, year: 3, prerequisite: "ITE224" },
      { code: "ITE353", name: "Machine Learning Foundation", credits: 4, year: 3, prerequisite: "ITE224" },
      { code: "ITE354", name: "Business Intelligence and Decision Modeling", credits: 4, year: 3, prerequisite: "ITE224" },
      { code: "ITE355", name: "Data Warehousing and Data Mining", credits: 4, year: 3, prerequisite: "ITE224" }
    ],
    networkTrack: [
      { code: "ITE201", name: "IT Service Desk & Incident Management", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE421", name: "Information Assurance and Security II", credits: 4, year: 3, prerequisite: "ITE420" },
      { code: "ITE451", name: "AWS Cloud Foundations", credits: 4, year: 3, prerequisite: "" },
      { code: "ITE476", name: "Network II", credits: 4, year: 3, prerequisite: "ITE475" },
      { code: "ITE477", name: "Window Server", credits: 4, year: 3, prerequisite: "" }
    ]
  },
  otherRequirements: {
    freeElectives: [
      { code: "FREE1", name: "Free Elective I", credits: 4, year: 3, prerequisite: "" },
      { code: "FREE2", name: "Free Elective II", credits: 4, year: 3, prerequisite: "" }
    ],
    internship: [
      { code: "INTERN", name: "Internship", credits: 12, year: 4, prerequisite: "" }
    ]
  }
};

// Function to calculate total credits from curriculum data
function calculateTotalCredits() {
  let total = 0;
  
  // General Education: 40 credits (students choose 10 courses from available options)
  total += 40;
  
  // Professional Courses: 100 credits
  // - Core: 4 courses × 4 credits = 16
  // - Major Requirements: 16 courses × 4 credits = 64  
  // - Major Electives: 5 courses × 4 credits = 20
  total += 100;
  
  // Other Requirements: 20 credits
  // - Free Electives: 2 courses × 4 credits = 8
  // - Internship: 12 credits
  total += 20;
  
  return total; // Total should be 160
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 Curriculum page loaded');
  initializeCurriculum();
});

async function initializeCurriculum() {
  try {
    console.log('🔐 Checking authentication...');
    await checkAuthentication();
    
    console.log('🌐 Initializing language...');
    initializeLanguage();
    
    console.log('🎯 Setting up event listeners...');
    setupEventListeners();
    
    console.log('📥 Loading user progress...');
    await loadUserProgress();
    
    console.log('📚 Rendering curriculum...');
    renderCurriculum();
    
    console.log('📊 Updating progress summary...');
    updateProgressSummary();
    
    console.log('✅ Hiding loading spinner...');
    hideLoadingSpinner();
    
    console.log('🎉 Curriculum initialized successfully');
  } catch (error) {
    console.error('❌ Curriculum initialization failed:', error);
    showError('Failed to load curriculum: ' + error.message);
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
  
  updateCurriculumText();
}

function updateCurriculumText() {
  const translations = curriculumTranslations[currentLang];
  
  // Update page title
  document.title = `${translations.curriculum_title} - STIU Student Portal`;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      // For description elements, preserve HTML
      if (key.includes('_desc')) {
        element.innerHTML = translations[key];
      } else {
        element.textContent = translations[key];
      }
    }
  });
  
  // Update course cards dynamically
  updateCourseCardsLanguage();
  
  console.log('✅ Curriculum language updated to:', currentLang);
}

function updateCourseCardsLanguage() {
  // Update all course cards with current language
  document.querySelectorAll('.course-card').forEach(card => {
    const creditsElement = card.querySelector('.course-credits');
    const yearElement = card.querySelector('.course-year');
    const statusElement = card.querySelector('.course-status');
    const prerequisiteElement = card.querySelector('.course-prerequisite');
    
    if (creditsElement) {
      const credits = creditsElement.textContent.split(' ')[0];
      creditsElement.textContent = `${credits} ${curriculumTranslations[currentLang].credits}`;
    }
    
    if (yearElement) {
      const year = yearElement.textContent.split(' ')[1];
      yearElement.textContent = `${curriculumTranslations[currentLang].year} ${year}`;
    }
    
    if (statusElement) {
      const checkbox = card.querySelector('.course-checkbox');
      if (checkbox) {
        const isCompleted = checkbox.checked;
        const statusText = isCompleted ? 
          curriculumTranslations[currentLang].course_completed : 
          curriculumTranslations[currentLang].course_not_started;
        
        const statusClass = isCompleted ? 'text-success' : 'text-warning';
        const icon = isCompleted ? 'fa-check-circle' : 'fa-clock';
        
        statusElement.className = `course-status ${statusClass}`;
        statusElement.innerHTML = `<i class="fas ${icon} me-1"></i>${statusText}`;
      }
    }
    
    if (prerequisiteElement) {
      const prerequisiteText = prerequisiteElement.getAttribute('data-prerequisite');
      if (prerequisiteText) {
        prerequisiteElement.innerHTML = `<i class="fas fa-exclamation-circle me-1"></i><strong>${curriculumTranslations[currentLang].prerequisite}:</strong> ${prerequisiteText}`;
      }
    }
  });
}

function setupEventListeners() {
  const logoutBtn = document.getElementById('logoutBtn');
  const saveBtn = document.getElementById('saveProgressBtn');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
    console.log('🎯 Logout button event listener added');
  }
  
  if (saveBtn) {
    saveBtn.addEventListener('click', saveUserProgress);
    console.log('🎯 Save progress button event listener added');
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
        
        // Load user profile data to display name
        loadUserProfile();
        
        resolve();
      }
    });
  });
}

async function loadUserProfile() {
  try {
    console.log('👤 Loading user profile from registrations...');
    
    // Wait for Firebase to be ready
    await waitForFirebase();
    
    // Query the registrations collection for user data
    const querySnapshot = await window.firebaseDb.collection('registrations')
      .where('email', '==', currentUser.email)
      .get();
    
    if (!querySnapshot.empty) {
      let userData = {};
      querySnapshot.forEach((doc) => {
        userData = { id: doc.id, ...doc.data() };
      });
      
      const userNameElement = document.getElementById('userName');
      
      if (userNameElement) {
        // Display first and last name if available (like in profile.html)
        if (userData.firstName && userData.lastName) {
          const displayName = `${userData.firstName} ${userData.lastName}`;
          userNameElement.textContent = displayName;
          console.log('✅ User name displayed:', displayName);
        } else {
          // Fallback to email
          userNameElement.textContent = currentUser.email;
          console.log('⚠️ No user name found, using email');
        }
      }
      
      console.log('✅ User profile loaded successfully from registrations');
    } else {
      console.log('⚠️ No user profile found in registrations');
      // Set default to email
      const userNameElement = document.getElementById('userName');
      if (userNameElement) {
        userNameElement.textContent = currentUser.email;
      }
    }
  } catch (error) {
    console.error('❌ Error loading user profile:', error);
    // Set default to email on error
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
      userNameElement.textContent = currentUser.email;
    }
  }
}

async function loadUserProgress() {
  try {
    console.log('🔥 Waiting for Firebase...');
    await waitForFirebase();
    
    console.log('📥 Loading user progress from Firestore...');
    const doc = await window.firebaseDb.collection('userProgress')
      .doc(currentUser.uid)
      .get();
    
    if (doc.exists) {
      userProgress = doc.data().progress || {};
      console.log('✅ User progress loaded:', Object.keys(userProgress).length, 'courses');
    } else {
      userProgress = {};
      console.log('⚠️ No user progress found, starting fresh');
    }
    
  } catch (error) {
    console.error('❌ Error loading user progress:', error);
    userProgress = {};
  }
}

function renderCurriculum() {
  console.log('📚 Rendering curriculum sections...');
  renderGeneralEducation();
  renderProfessionalCourses();
  renderSpecializationTracks();
  renderOtherRequirements();
  console.log('✅ Curriculum rendered successfully');
}

function renderGeneralEducation() {
  renderCourseSection('humanities-courses', curriculumData.generalEducation.humanities, 'choose_subjects');
  renderCourseSection('social-sciences-courses', curriculumData.generalEducation.socialSciences, 'choose_subjects');
  renderCourseSection('language-courses', curriculumData.generalEducation.languages, 'required_subjects');
  renderCourseSection('science-math-courses', curriculumData.generalEducation.scienceMath, 'choose_subjects');
}

function renderProfessionalCourses() {
  renderCourseSection('core-courses', curriculumData.professionalCourses.core, 'required_subjects');
  renderCourseSection('major-requirements-courses', curriculumData.professionalCourses.majorRequirements, 'required_subjects');
  renderCourseSection('major-electives-courses', curriculumData.professionalCourses.majorElectives, 'select_subjects');
}

function renderSpecializationTracks() {
  // Render each track in its own full-width container
  renderTrackSection('software-track-courses', curriculumData.professionalCourses.softwareTrack);
  renderTrackSection('ecommerce-track-courses', curriculumData.professionalCourses.ecommerceTrack);
  renderTrackSection('data-science-track-courses', curriculumData.professionalCourses.dataScienceTrack);
  renderTrackSection('network-track-courses', curriculumData.professionalCourses.networkTrack);
}

function renderOtherRequirements() {
  renderCourseSection('free-electives-courses', curriculumData.otherRequirements.freeElectives, 'select_subjects');
  renderCourseSection('internship-courses', curriculumData.otherRequirements.internship, 'required_subjects');
}

function renderCourseSection(containerId, courses, subjectType) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`⚠️ Container #${containerId} not found`);
    return;
  }
  
  container.innerHTML = '';
  
  courses.forEach(course => {
    const isCompleted = userProgress[course.code] === true;
    const courseElement = createCourseElement(course, isCompleted, subjectType);
    container.appendChild(courseElement);
  });
  
  console.log(`✅ Rendered ${courses.length} courses in ${containerId}`);
}

function renderTrackSection(containerId, courses) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`⚠️ Container #${containerId} not found`);
    return;
  }
  
  container.innerHTML = '';
  
  courses.forEach(course => {
    const isCompleted = userProgress[course.code] === true;
    const courseElement = createCourseElement(course, isCompleted, 'select_subjects');
    container.appendChild(courseElement);
  });
  
  console.log(`✅ Rendered ${courses.length} courses in track ${containerId}`);
}

function createCourseElement(course, isCompleted, subjectType) {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 col-xl-3';
  
  const statusText = isCompleted ? 
    curriculumTranslations[currentLang].course_completed : 
    curriculumTranslations[currentLang].course_not_started;
  
  const statusClass = isCompleted ? 'text-success' : 'text-warning';
  const icon = isCompleted ? 'fa-check-circle' : 'fa-clock';
  
  col.innerHTML = `
    <div class="course-card card h-100 ${isCompleted ? 'border-success' : 'border-light'} shadow-sm">
      <div class="card-body">
        <div class="form-check">
          <input class="form-check-input course-checkbox" type="checkbox" 
                 id="course-${course.code}" data-course="${course.code}"
                 ${isCompleted ? 'checked' : ''}>
          <label class="form-check-label w-100" for="course-${course.code}">
            <div class="course-code fw-bold text-primary">${course.code}</div>
            <div class="course-name mt-1">${course.name}${course.prerequisite ? ` (${curriculumTranslations[currentLang].prerequisite}: ${course.prerequisite})` : ''}</div>
            <div class="course-meta mt-2 d-flex justify-content-between text-muted small">
              <span class="course-credits">${course.credits} ${curriculumTranslations[currentLang].credits}</span>
              <span class="course-year">${curriculumTranslations[currentLang].year} ${course.year}</span>
            </div>
            <div class="mt-2">
              <small class="course-status ${statusClass}">
                <i class="fas ${icon} me-1"></i>
                ${statusText}
              </small>
            </div>
            ${subjectType ? `<div class="mt-1"><small class="text-info"><i class="fas fa-info-circle me-1"></i>${curriculumTranslations[currentLang][subjectType]}</small></div>` : ''}
            ${course.prerequisite ? `<div class="mt-1"><small class="course-prerequisite text-warning" data-prerequisite="${course.prerequisite}"></small></div>` : ''}
          </label>
        </div>
      </div>
    </div>
  `;
  
  // Add event listener to checkbox
  const checkbox = col.querySelector('.course-checkbox');
  checkbox.addEventListener('change', function() {
    userProgress[this.dataset.course] = this.checked;
    updateProgressSummary();
    
    // Update card appearance
    const card = this.closest('.course-card');
    const statusElement = card.querySelector('.course-status');
    const iconElement = card.querySelector('.course-status i');
    
    if (this.checked) {
      card.classList.remove('border-light');
      card.classList.add('border-success');
      statusElement.className = 'course-status text-success';
      statusElement.innerHTML = `<i class="fas fa-check-circle me-1"></i>${curriculumTranslations[currentLang].course_completed}`;
    } else {
      card.classList.remove('border-success');
      card.classList.add('border-light');
      statusElement.className = 'course-status text-warning';
      statusElement.innerHTML = `<i class="fas fa-clock me-1"></i>${curriculumTranslations[currentLang].course_not_started}`;
    }
  });
  
  return col;
}

function updateProgressSummary() {
  // Use the fixed total of 160 credits for graduation
  const totalCredits = 160;
  let completedCredits = 0;
  
  // Calculate completed credits from user progress
  Object.values(curriculumData).forEach(category => {
    Object.values(category).forEach(courses => {
      courses.forEach(course => {
        if (userProgress[course.code]) {
          completedCredits += course.credits;
        }
      });
    });
  });
  
  const remainingCredits = totalCredits - completedCredits;
  const completionPercentage = totalCredits > 0 ? Math.round((completedCredits / totalCredits) * 100) : 0;
  
  // Update DOM safely
  safeUpdateElement('totalCredits', totalCredits);
  safeUpdateElement('completedCredits', completedCredits);
  safeUpdateElement('remainingCredits', remainingCredits);
  safeUpdateElement('completionPercentage', `${completionPercentage}%`);
  
  // Update progress bar
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = `${completionPercentage}%`;
    progressBar.textContent = `${completionPercentage}%`;
    
    // Update progress bar color based on completion
    if (completionPercentage >= 80) {
      progressBar.className = 'progress-bar progress-bar-striped progress-bar-animated bg-success';
    } else if (completionPercentage >= 50) {
      progressBar.className = 'progress-bar progress-bar-striped progress-bar-animated bg-warning';
    } else {
      progressBar.className = 'progress-bar progress-bar-striped progress-bar-animated bg-danger';
    }
  }
  
  console.log(`📊 Progress updated: ${completedCredits}/${totalCredits} credits (${completionPercentage}%)`);
}

async function saveUserProgress() {
  const saveBtn = document.getElementById('saveProgressBtn');
  const saveSuccess = document.getElementById('saveSuccess');
  
  try {
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + 
                         (currentLang === 'th' ? 'กำลังบันทึก...' : 'Saving...');
    }
    
    console.log('💾 Saving user progress to Firestore...');
    
    // Save to Firestore
    await window.firebaseDb.collection('userProgress')
      .doc(currentUser.uid)
      .set({
        progress: userProgress,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        email: currentUser.email,
        userName: document.getElementById('userName').textContent
      });
    
    console.log('✅ User progress saved successfully');
    
    // Show success message
    if (saveSuccess) {
      saveSuccess.style.display = 'block';
      setTimeout(() => {
        saveSuccess.style.display = 'none';
      }, 3000);
    }
    
  } catch (error) {
    console.error('❌ Error saving progress:', error);
    alert(currentLang === 'th' ? 
      'เกิดข้อผิดพลาดในการบันทึกข้อมูล' : 
      'Error saving progress');
  } finally {
    // Reset button state
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<i class="fas fa-save me-2"></i>' + 
                         curriculumTranslations[currentLang].save_progress;
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