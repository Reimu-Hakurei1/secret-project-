// dashboard.js - Complete Bilingual Dashboard with Authentication
console.log('🚀 Dashboard script loaded');

const dashboardTranslations = {
  th: {
    "dashboard_title": "แดชบอร์ด",
    "welcome": "ภาพรวมระบบจัดการนักศึกษา",
    "total_users": "ผู้ใช้ทั้งหมด",
    "software_engineers": "วิศวกรรมซอฟต์แวร์",
    "ecommerce_technology": "เทคโนโลยีอีคอมเมิร์ซ",
    "data_science": "วิทยาศาสตร์ข้อมูล", 
    "network_security": "เครือข่ายและความปลอดภัย",
    "track_distribution": "การกระจายตัวตามสาขาวิชา",
    "country_distribution": "การกระจายตัวตามประเทศ",
    "recent_registrations": "ผู้ใช้ที่ลงทะเบียนล่าสุด",
    "refresh": "รีเฟรช",
    "profile_settings": "ตั้งค่าโปรไฟล์",
    "my_curriculum": "หลักสูตรของฉัน",
    "logout": "ออกจากระบบ",
    "name": "ชื่อ-นามสกุล",
    "student_id": "รหัสนักศึกษา",
    "track": "สาขาวิชา",
    "country": "ประเทศ",
    "registration_date": "วันที่ลงทะเบียน",
    "loading": "กำลังโหลด...",
    "portal_name": "STIU Student Portal",
    "user": "ผู้ใช้",
    "from_last_month": "จากเดือนที่แล้ว",
    "of_total": "ของทั้งหมด",
    "all_rights_reserved": "สงวนลิขสิทธิ์",
    "version": "เวอร์ชัน 1.0.0",
    "loading_dashboard": "กำลังโหลดแดชบอร์ด...",
    "please_wait": "กรุณารอสักครู่",
    "no_data": "ไม่มีข้อมูล",
    "try_again": "ลองอีกครั้ง",
    "error": "เกิดข้อผิดพลาด",
    "number_of_users": "จำนวนผู้ใช้"
  },
  en: {
    "dashboard_title": "Dashboard",
    "welcome": "Student Management System Overview",
    "total_users": "Total Users",
    "software_engineers": "Software Engineering",
    "ecommerce_technology": "E-Commerce Technology",
    "data_science": "Data Science",
    "network_security": "Network and Security", 
    "track_distribution": "Track Distribution",
    "country_distribution": "Country Distribution",
    "recent_registrations": "Recent Registrations",
    "refresh": "Refresh",
    "profile_settings": "Profile Settings",
    "my_curriculum": "My Curriculum",
    "logout": "Logout",
    "name": "Name",
    "student_id": "Student ID",
    "track": "Track",
    "country": "Country",
    "registration_date": "Registration Date",
    "loading": "Loading...",
    "portal_name": "STIU Student Portal",
    "user": "User",
    "from_last_month": "from last month",
    "of_total": "of total",
    "all_rights_reserved": "All rights reserved",
    "version": "Version 1.0.0",
    "loading_dashboard": "Loading dashboard...",
    "please_wait": "Please wait a moment",
    "no_data": "No data available",
    "try_again": "Try Again",
    "error": "Error",
    "number_of_users": "Number of Users"
  }
};

let currentLang = 'th';
let currentUser = null;
let trackChart, countryChart;

// Main initialization function
async function initializeDashboard() {
  try {
    console.log('🔐 Checking authentication...');
    await checkAuthentication();
    
    console.log('🌐 Initializing language...');
    initializeLanguage();
    
    console.log('🕒 Setting up real-time clock...');
    initializeClock();
    
    console.log('🎯 Setting up event listeners...');
    setupEventListeners();
    
    console.log('📊 Loading dashboard data...');
    await loadDashboardData();
    
    console.log('✅ Hiding loading spinner...');
    hideLoadingSpinner();
    
    console.log('🎉 Dashboard initialized successfully');
  } catch (error) {
    console.error('❌ Dashboard initialization failed:', error);
    showError('Failed to load dashboard: ' + error.message);
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
  
  // Update all text content
  updateAllText();
  
  // Refresh charts with new language
  if (window.firebaseDb) {
    refreshData();
  }
}

function updateAllText() {
  const translations = dashboardTranslations[currentLang];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
  
  console.log('✅ Language updated to:', currentLang);
}

function initializeClock() {
  function updateClock() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    const timeString = now.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', options);
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
      timeElement.textContent = timeString;
    }
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

function setupEventListeners() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
  
  const refreshBtn = document.getElementById('refreshUsers');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', refreshData);
  }
  
  // Add real-time listener for user updates
  setupRealtimeUpdates();
}

function setupRealtimeUpdates() {
  if (!window.firebaseDb) return;
  
  // Listen for new registrations in real-time
  window.firebaseDb.collection('registrations')
    .orderBy('registrationDate', 'desc')
    .limit(50)
    .onSnapshot((snapshot) => {
      console.log('🔄 Real-time update received');
      const users = [];
      snapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      updateDashboardWithData(users);
    }, (error) => {
      console.error('❌ Real-time update error:', error);
    });
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
        
        // Update user name in navbar immediately
        const userNameElement = document.getElementById('userName');
        if (userNameElement && user.displayName) {
          userNameElement.textContent = user.displayName;
        } else if (userNameElement) {
          userNameElement.textContent = dashboardTranslations[currentLang].user;
        }
        
        resolve();
      }
    });
  });
}

async function loadDashboardData() {
  try {
    await waitForFirebase();
    
    const querySnapshot = await window.firebaseDb.collection('registrations')
      .orderBy('registrationDate', 'desc')
      .get();
    
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    
    console.log(`✅ Loaded ${users.length} users from database`);
    
    updateDashboardWithData(users);
    
  } catch (error) {
    console.error('❌ Error loading dashboard data:', error);
    throw error;
  }
}

function updateDashboardWithData(users) {
  updateCurrentUserName(users);
  updateStatistics(users);
  updateCharts(users);
  updateRecentUsersTable(users);
}

function updateCurrentUserName(users) {
  const currentUserData = users.find(user => user.email === currentUser?.email);
  const userNameElement = document.getElementById('userName');
  
  if (userNameElement && currentUserData) {
    userNameElement.textContent = `${currentUserData.firstName} ${currentUserData.lastName}`;
  } else if (userNameElement && currentUser?.displayName) {
    userNameElement.textContent = currentUser.displayName;
  } else if (userNameElement) {
    userNameElement.textContent = dashboardTranslations[currentLang].user;
  }
}

function updateStatistics(users) {
  const totalUsers = users.length;
  const softwareCount = users.filter(user => user.track === 'software').length;
  const ecommerceCount = users.filter(user => user.track === 'ecommerce').length;
  const dataCount = users.filter(user => user.track === 'data').length;
  const networkCount = users.filter(user => user.track === 'network').length;
  
  // Calculate percentages
  const softwarePercent = totalUsers > 0 ? ((softwareCount / totalUsers) * 100).toFixed(1) : 0;
  const ecommercePercent = totalUsers > 0 ? ((ecommerceCount / totalUsers) * 100).toFixed(1) : 0;
  const dataPercent = totalUsers > 0 ? ((dataCount / totalUsers) * 100).toFixed(1) : 0;
  const networkPercent = totalUsers > 0 ? ((networkCount / totalUsers) * 100).toFixed(1) : 0;
  
  // Simulate user growth (in a real app, this would come from historical data)
  const userGrowth = Math.floor(Math.random() * 20) + 5;
  
  safeUpdateElement('totalUsers', totalUsers.toLocaleString());
  safeUpdateElement('ecommerceCount', ecommerceCount.toLocaleString());
  safeUpdateElement('softwareCount', softwareCount.toLocaleString());
  safeUpdateElement('dataCount', dataCount.toLocaleString());
  safeUpdateElement('networkCount', networkCount.toLocaleString());
  
  safeUpdateElement('userGrowth', userGrowth.toLocaleString());
  safeUpdateElement('ecommercePercent', ecommercePercent + '%');
  safeUpdateElement('softwarePercent', softwarePercent + '%');
  safeUpdateElement('dataPercent', dataPercent + '%');
  safeUpdateElement('networkPercent', networkPercent + '%');
}

function updateCharts(users) {
  updateTrackChart(users);
  updateCountryChart(users);
}

function updateTrackChart(users) {
  const ctx = document.getElementById('trackChart');
  if (!ctx) return;
  
  const trackCounts = {
    'software': users.filter(user => user.track === 'software').length,
    'ecommerce': users.filter(user => user.track === 'ecommerce').length,
    'data': users.filter(user => user.track === 'data').length,
    'network': users.filter(user => user.track === 'network').length
  };
  
  const trackLabels = currentLang === 'th' 
  ? ['เทคโนโลยีอีคอมเมิร์ซ', 'วิศวกรรมซอฟต์แวร์', 'วิทยาศาสตร์ข้อมูล', 'เครือข่ายและความปลอดภัย']
  : ['E-Commerce Technology', 'Software Engineering', 'Data Science', 'Network and Security'];
  
  const backgroundColors = ['#36b9cc', '#4e73df', '#1cc88a', '#f6c23e'];
  
  if (trackChart) trackChart.destroy();
  
  trackChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: trackLabels,
      datasets: [{
        data: [trackCounts.ecommerce, trackCounts.software, trackCounts.data, trackCounts.network],
        backgroundColor: backgroundColors,
        borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { 
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function updateCountryChart(users) {
  const ctx = document.getElementById('countryChart');
  if (!ctx) return;
  
  const countryCounts = {};
  users.forEach(user => {
    let country = user.country;
    if (country === 'other' && user.otherCountry) {
      country = user.otherCountry;
    } else if (country === 'thailand') {
      country = currentLang === 'th' ? 'ไทย' : 'Thailand';
    } else if (country === 'myanmar') {
      country = currentLang === 'th' ? 'เมียนมา' : 'Myanmar';
    } else if (country === 'china') {
      country = currentLang === 'th' ? 'จีน' : 'China';
    } else if (country === 'vietnam') {
      country = currentLang === 'th' ? 'เวียดนาม' : 'Vietnam';
    } else {
      country = currentLang === 'th' ? 'อื่นๆ' : 'Other';
    }
    countryCounts[country] = (countryCounts[country] || 0) + 1;
  });
  
  const sortedCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  
  const countries = sortedCountries.map(item => item[0]);
  const counts = sortedCountries.map(item => item[1]);
  
  if (countryChart) countryChart.destroy();
  
  countryChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: countries,
      datasets: [{
        label: dashboardTranslations[currentLang].number_of_users,
        data: counts,
        backgroundColor: '#4e73df',
        borderColor: '#2e59d9',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false
          },
          ticks: {
            precision: 0
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function updateRecentUsersTable(users) {
  const tbody = document.getElementById('recentUsersTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  const recentUsers = users.slice(0, 5);
  
  if (recentUsers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">
          <i class="fas fa-users me-2"></i>
          ${dashboardTranslations[currentLang].no_data}
        </td>
      </tr>
    `;
    return;
  }
  
  recentUsers.forEach(user => {
    const row = document.createElement('tr');
    row.className = 'fade-in';
    
    let trackDisplay = '';
    let trackBadgeClass = 'bg-primary';
    
    if (user.track === 'software') {
      trackDisplay = currentLang === 'th' ? 'วิศวกรรมซอฟต์แวร์' : 'Software Engineering';
      trackBadgeClass = 'bg-primary';
    } else if (user.track === 'ecommerce') {
      trackDisplay = currentLang === 'th' ? 'เทคโนโลยีอีคอมเมิร์ซ' : 'E-Commerce Technology';
      trackBadgeClass = 'bg-info';
    } else if (user.track === 'data') {
      trackDisplay = currentLang === 'th' ? 'วิทยาศาสตร์ข้อมูล' : 'Data Science';
      trackBadgeClass = 'bg-success';
    } else if (user.track === 'network') {
      trackDisplay = currentLang === 'th' ? 'เครือข่ายและความปลอดภัย' : 'Network and Security';
      trackBadgeClass = 'bg-warning';
    }
    
    let countryDisplay = user.country;
    if (user.country === 'thailand') {
      countryDisplay = currentLang === 'th' ? 'ไทย' : 'Thailand';
    } else if (user.country === 'myanmar') {
      countryDisplay = currentLang === 'th' ? 'เมียนมา' : 'Myanmar';
    } else if (user.country === 'other' && user.otherCountry) {
      countryDisplay = user.otherCountry;
    }
    
    const regDate = new Date(user.registrationDate);
    const formattedDate = regDate.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US');
    
    row.innerHTML = `
      <td>${user.firstName} ${user.lastName}</td>
      <td><strong>${user.studentId}</strong></td>
      <td><span class="badge ${trackBadgeClass}">${trackDisplay}</span></td>
      <td>${countryDisplay}</td>
      <td><small class="text-muted">${formattedDate}</small></td>
    `;
    
    tbody.appendChild(row);
  });
}

function safeUpdateElement(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
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
        <h5 class="text-danger">${dashboardTranslations[currentLang].error}</h5>
        <p class="text-muted">${message}</p>
        <button class="btn btn-primary mt-2" onclick="location.reload()">
          ${dashboardTranslations[currentLang].try_again}
        </button>
      </div>
    `;
  }
}

async function refreshData() {
  try {
    console.log('🔄 Refreshing dashboard data...');
    await loadDashboardData();
  } catch (error) {
    console.error('❌ Error refreshing data:', error);
  }
}

async function handleLogout() {
  try {
    await firebase.auth().signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('❌ Logout failed:', error);
  }
}

function waitForFirebase() {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = 50;
    
    const checkFirebase = () => {
      attempts++;
      
      if (window.firebaseDb && typeof window.firebaseDb.collection === 'function') {
        resolve();
      } else if (attempts >= maxAttempts) {
        console.warn('⚠️ Firebase not available after maximum attempts');
        resolve();
      } else {
        setTimeout(checkFirebase, 100);
      }
    };
    
    checkFirebase();
  });
}

// Export functions for global access
window.switchLanguage = switchLanguage;
window.refreshData = refreshData;
window.handleLogout = handleLogout;
window.initializeDashboard = initializeDashboard;