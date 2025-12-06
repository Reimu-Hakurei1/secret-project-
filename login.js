// login.js
const loginTranslations = {
  en: {
    "login_title": "Login",
    "login_subtitle": "Please enter your email and password",
    "email": "Email",
    "email_placeholder": "e.g. 1234567890@students.stamford.edu",
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
  },
  zh: {
    "login_title": "登录",
    "login_subtitle": "请输入您的电子邮件和密码",
    "email": "电子邮件",
    "email_placeholder": "例如：1234567890@students.stamford.edu",
    "email_error": "请输入有效的电子邮件",
    "password": "密码",
    "password_placeholder": "输入密码",
    "password_error": "请输入密码",
    "login_btn": "登录",
    "no_account": "没有账户？",
    "register_link": "注册",
    "error_title": "错误！",
    "loading": "正在登录...",
    "please_wait": "请稍候"
  },
  ja: {
    "login_title": "ログイン",
    "login_subtitle": "メールアドレスとパスワードを入力してください",
    "email": "メールアドレス",
    "email_placeholder": "例: 1234567890@students.stamford.edu",
    "email_error": "有効なメールアドレスを入力してください",
    "password": "パスワード",
    "password_placeholder": "パスワードを入力",
    "password_error": "パスワードを入力してください",
    "login_btn": "ログイン",
    "no_account": "アカウントをお持ちでない方",
    "register_link": "登録",
    "error_title": "エラー！",
    "loading": "ログイン中...",
    "please_wait": "しばらくお待ちください"
  },
  ko: {
    "login_title": "로그인",
    "login_subtitle": "이메일과 비밀번호를 입력해 주세요",
    "email": "이메일",
    "email_placeholder": "예: 1234567890@students.stamford.edu",
    "email_error": "유효한 이메일을 입력해 주세요",
    "password": "비밀번호",
    "password_placeholder": "비밀번호 입력",
    "password_error": "비밀번호를 입력해 주세요",
    "login_btn": "로그인",
    "no_account": "계정이 없으신가요?",
    "register_link": "회원가입",
    "error_title": "오류!",
    "loading": "로그인 중...",
    "please_wait": "잠시만 기다려 주세요"
  },
  ar: {
    "login_title": "تسجيل الدخول",
    "login_subtitle": "الرجاء إدخال البريد الإلكتروني وكلمة المرور",
    "email": "البريد الإلكتروني",
    "email_placeholder": "مثال: 1234567890@students.stamford.edu",
    "email_error": "الرجاء إدخال بريد إلكتروني صالح",
    "password": "كلمة المرور",
    "password_placeholder": "أدخل كلمة المرور",
    "password_error": "الرجاء إدخال كلمة المرور",
    "login_btn": "تسجيل الدخول",
    "no_account": "ليس لديك حساب؟",
    "register_link": "التسجيل",
    "error_title": "خطأ!",
    "loading": "جاري تسجيل الدخول...",
    "please_wait": "الرجاء الانتظار لحظة"
  },
  hi: {
    "login_title": "लॉगिन",
    "login_subtitle": "कृपया अपना ईमेल और पासवर्ड दर्ज करें",
    "email": "ईमेल",
    "email_placeholder": "जैसे: 1234567890@students.stamford.edu",
    "email_error": "कृपया एक वैध ईमेल दर्ज करें",
    "password": "पासवर्ड",
    "password_placeholder": "अपना पासवर्ड दर्ज करें",
    "password_error": "कृपया अपना पासवर्ड दर्ज करें",
    "login_btn": "लॉगिन",
    "no_account": "खाता नहीं है?",
    "register_link": "पंजीकरण",
    "error_title": "त्रुटि!",
    "loading": "लॉगिन हो रहा है...",
    "please_wait": "कृपया प्रतीक्षा करें"
  },
  th: {
    "login_title": "เข้าสู่ระบบ",
    "login_subtitle": "กรุณากรอกอีเมลและรหัสผ่าน",
    "email": "อีเมล",
    "email_placeholder": "เช่น 1234567890@students.stamford.edu",
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
  vi: {
    "login_title": "Đăng nhập",
    "login_subtitle": "Vui lòng nhập email và mật khẩu",
    "email": "Email",
    "email_placeholder": "ví dụ: 1234567890@students.stamford.edu",
    "email_error": "Vui lòng nhập email hợp lệ",
    "password": "Mật khẩu",
    "password_placeholder": "Nhập mật khẩu",
    "password_error": "Vui lòng nhập mật khẩu",
    "login_btn": "Đăng nhập",
    "no_account": "Chưa có tài khoản?",
    "register_link": "Đăng ký",
    "error_title": "Lỗi!",
    "loading": "Đang đăng nhập...",
    "please_wait": "Vui lòng đợi trong giây lát"
  },
  id: {
    "login_title": "Masuk",
    "login_subtitle": "Silakan masukkan email dan kata sandi",
    "email": "Email",
    "email_placeholder": "contoh: 1234567890@students.stamford.edu",
    "email_error": "Silakan masukkan email yang valid",
    "password": "Kata Sandi",
    "password_placeholder": "Masukkan kata sandi",
    "password_error": "Silakan masukkan kata sandi",
    "login_btn": "Masuk",
    "no_account": "Tidak punya akun?",
    "register_link": "Daftar",
    "error_title": "Kesalahan!",
    "loading": "Sedang masuk...",
    "please_wait": "Harap tunggu sebentar"
  },
  ms: {
    "login_title": "Log Masuk",
    "login_subtitle": "Sila masukkan e-mel dan kata laluan",
    "email": "E-mel",
    "email_placeholder": "contoh: 1234567890@students.stamford.edu",
    "email_error": "Sila masukkan e-mel yang sah",
    "password": "Kata Laluan",
    "password_placeholder": "Masukkan kata laluan",
    "password_error": "Sila masukkan kata laluan",
    "login_btn": "Log Masuk",
    "no_account": "Tiada akaun?",
    "register_link": "Daftar",
    "error_title": "Ralat!",
    "loading": "Sedang log masuk...",
    "please_wait": "Sila tunggu sebentar"
  },
  ru: {
    "login_title": "Вход",
    "login_subtitle": "Пожалуйста, введите вашу электронную почту и пароль",
    "email": "Электронная почта",
    "email_placeholder": "например: 1234567890@students.stamford.edu",
    "email_error": "Пожалуйста, введите действительный адрес электронной почты",
    "password": "Пароль",
    "password_placeholder": "Введите пароль",
    "password_error": "Пожалуйста, введите пароль",
    "login_btn": "Войти",
    "no_account": "Нет учетной записи?",
    "register_link": "Регистрация",
    "error_title": "Ошибка!",
    "loading": "Вход в систему...",
    "please_wait": "Пожалуйста, подождите"
  },
  ur: {
    "login_title": "لاگ ان",
    "login_subtitle": "براہ کرم اپنا ای میل اور پاس ورڈ درج کریں",
    "email": "ای میل",
    "email_placeholder": "مثال: 1234567890@students.stamford.edu",
    "email_error": "براہ کرم ایک درست ای میل درج کریں",
    "password": "پاس ورڈ",
    "password_placeholder": "پاس ورڈ درج کریں",
    "password_error": "براہ کرم پاس ورڈ درج کریں",
    "login_btn": "لاگ ان",
    "no_account": "اکاؤنٹ نہیں ہے؟",
    "register_link": "رجسٹر",
    "error_title": "خرابی!",
    "loading": "لاگ ان ہو رہا ہے...",
    "please_wait": "براہ کرم انتظار کریں"
  },
  tr: {
    "login_title": "Giriş Yap",
    "login_subtitle": "Lütfen e-postanızı ve şifrenizi girin",
    "email": "E-posta",
    "email_placeholder": "örnek: 1234567890@students.stamford.edu",
    "email_error": "Lütfen geçerli bir e-posta girin",
    "password": "Şifre",
    "password_placeholder": "Şifrenizi girin",
    "password_error": "Lütfen şifrenizi girin",
    "login_btn": "Giriş Yap",
    "no_account": "Hesabınız yok mu?",
    "register_link": "Kayıt Ol",
    "error_title": "Hata!",
    "loading": "Giriş yapılıyor...",
    "please_wait": "Lütfen bekleyin"
  },
  fa: {
    "login_title": "ورود",
    "login_subtitle": "لطفاً ایمیل و رمز عبور خود را وارد کنید",
    "email": "ایمیل",
    "email_placeholder": "مثال: 1234567890@students.stamford.edu",
    "email_error": "لطفاً یک ایمیل معتبر وارد کنید",
    "password": "رمز عبور",
    "password_placeholder": "رمز عبور را وارد کنید",
    "password_error": "لطفاً رمز عبور را وارد کنید",
    "login_btn": "ورود",
    "no_account": "حساب کاربری ندارید؟",
    "register_link": "ثبت نام",
    "error_title": "خطا!",
    "loading": "در حال ورود...",
    "please_wait": "لطفاً منتظر بمانید"
  },
  ta: {
    "login_title": "உள்நுழைக",
    "login_subtitle": "தயவு செய்து உங்கள் மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்",
    "email": "மின்னஞ்சல்",
    "email_placeholder": "எ.கா: 1234567890@students.stamford.edu",
    "email_error": "சரியான மின்னஞ்சலை உள்ளிடவும்",
    "password": "கடவுச்சொல்",
    "password_placeholder": "கடவுச்சொல்லை உள்ளிடவும்",
    "password_error": "கடவுச்சொல்லை உள்ளிடவும்",
    "login_btn": "உள்நுழைக",
    "no_account": "கணக்கு இல்லையா?",
    "register_link": "பதிவு",
    "error_title": "பிழை!",
    "loading": "உள்நுழைகிறது...",
    "please_wait": "தயவு செய்து காத்திருக்கவும்"
  },
  te: {
    "login_title": "లాగిన్",
    "login_subtitle": "దయచేసి మీ ఇమెయిల్ మరియు పాస్వర్డ్ నమోదు చేయండి",
    "email": "ఇమెయిల్",
    "email_placeholder": "ఉదా: 1234567890@students.stamford.edu",
    "email_error": "దయచేసి సరైన ఇమెయిల్ నమోదు చేయండి",
    "password": "పాస్వర్డ్",
    "password_placeholder": "పాస్వర్డ్ నమోదు చేయండి",
    "password_error": "దయచేసి పాస్వర్డ్ నమోదు చేయండి",
    "login_btn": "లాగిన్",
    "no_account": "ఖాతా లేదా?",
    "register_link": "నమోదు",
    "error_title": "లోపం!",
    "loading": "లాగిన్ అవుతోంది...",
    "please_wait": "దయచేసి కాసేపు వేచి ఉండండి"
  },
  bn: {
    "login_title": "লগইন",
    "login_subtitle": "আপনার ইমেইল এবং পাসওয়ার্ড দিন",
    "email": "ইমেইল",
    "email_placeholder": "যেমন: 1234567890@students.stamford.edu",
    "email_error": "সঠিক ইমেইল দিন",
    "password": "পাসওয়ার্ড",
    "password_placeholder": "পাসওয়ার্ড দিন",
    "password_error": "পাসওয়ার্ড দিন",
    "login_btn": "লগইন",
    "no_account": "অ্যাকাউন্ট নেই?",
    "register_link": "নিবন্ধন",
    "error_title": "ত্রুটি!",
    "loading": "লগইন হচ্ছে...",
    "please_wait": "অনুগ্রহ করে অপেক্ষা করুন"
  },
  lo: {
    "login_title": "ເຂົ້າສູ່ລະບົບ",
    "login_subtitle": "ກະລຸນາປ້ອນອີເມວແລະລະຫັດຜ່ານ",
    "email": "ອີເມວ",
    "email_placeholder": "ຕົວຢ່າງ: 1234567890@students.stamford.edu",
    "email_error": "ກະລຸນາປ້ອນອີເມວທີ່ຖືກຕ້ອງ",
    "password": "ລະຫັດຜ່ານ",
    "password_placeholder": "ປ້ອນລະຫັດຜ່ານ",
    "password_error": "ກະລຸນາປ້ອນລະຫັດຜ່ານ",
    "login_btn": "ເຂົ້າສູ່ລະບົບ",
    "no_account": "ຍັງບໍ່ມີບັນຊີ?",
    "register_link": "ລົງທະບຽນ",
    "error_title": "ຂໍ້ຜິດພາດ!",
    "loading": "ກຳລັງເຂົ້າສູ່ລະບົບ...",
    "please_wait": "ກະລຸນາລໍຖ້າ"
  },
  km: {
    "login_title": "ចូលគណនី",
    "login_subtitle": "សូមបញ្ចូលអ៊ីមែល និងពាក្យសម្ងាត់របស់អ្នក",
    "email": "អ៊ីមែល",
    "email_placeholder": "ឧទាហរណ៍: 1234567890@students.stamford.edu",
    "email_error": "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ",
    "password": "ពាក្យសម្ងាត់",
    "password_placeholder": "បញ្ចូលពាក្យសម្ងាត់",
    "password_error": "សូមបញ្ចូលពាក្យសម្ងាត់",
    "login_btn": "ចូលគណនី",
    "no_account": "មិនទាន់មានគណនីទេ?",
    "register_link": "ចុះឈ្មោះ",
    "error_title": "កំហុស!",
    "loading": "កំពុងចូលគណនី...",
    "please_wait": "សូមរង់ចាំមួយភ្លែត"
  },
  my: {
    "login_title": "ဝင်ရန်",
    "login_subtitle": "ကျေးဇူးပြု၍ သင့်အီးမေးလ်နှင့် စကားဝှက်ကို ထည့်ပါ",
    "email": "အီးမေးလ်",
    "email_placeholder": "ဥပမာ: 1234567890@students.stamford.edu",
    "email_error": "ကျေးဇူးပြု၍ မှန်ကန်သောအီးမေးလ်ကို ထည့်ပါ",
    "password": "စကားဝှက်",
    "password_placeholder": "စကားဝှက်ထည့်ပါ",
    "password_error": "စကားဝှက်ထည့်ပါ",
    "login_btn": "ဝင်ရန်",
    "no_account": "အကောင့်မရှိပါသလား?",
    "register_link": "မှတ်ပုံတင်ရန်",
    "error_title": "အမှား!",
    "loading": "ဝင်နေသည်...",
    "please_wait": "ကျေးဇူးပြု၍ ခဏစောင့်ပါ"
  },
  ne: {
    "login_title": "लगइन",
    "login_subtitle": "कृपया आफ्नो इमेल र पासवर्ड प्रविष्ट गर्नुहोस्",
    "email": "इमेल",
    "email_placeholder": "जस्तै: 1234567890@students.stamford.edu",
    "email_error": "कृपया एक वैध इमेल प्रविष्ट गर्नुहोस्",
    "password": "पासवर्ड",
    "password_placeholder": "पासवर्ड प्रविष्ट गर्नुहोस्",
    "password_error": "कृपया पासवर्ड प्रविष्ट गर्नुहोस्",
    "login_btn": "लगइन",
    "no_account": "खाता छैन?",
    "register_link": "दर्ता",
    "error_title": "त्रुटि!",
    "loading": "लगइन हुदैछ...",
    "please_wait": "कृपया पर्खनुहोस्"
  },
  pa: {
    "login_title": "ਲੌਗਇਨ",
    "login_subtitle": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਈਮੇਲ ਅਤੇ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    "email": "ਈਮੇਲ",
    "email_placeholder": "ਜਿਵੇਂ: 1234567890@students.stamford.edu",
    "email_error": "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "password": "ਪਾਸਵਰਡ",
    "password_placeholder": "ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    "password_error": "ਕਿਰਪਾ ਕਰਕੇ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    "login_btn": "ਲੌਗਇਨ",
    "no_account": "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    "register_link": "ਰਜਿਸਟਰ",
    "error_title": "ਗਲਤੀ!",
    "loading": "ਲੌਗਇਨ ਹੋ ਰਿਹਾ ਹੈ...",
    "please_wait": "ਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜ਼ਾਰ ਕਰੋ"
  },
  si: {
    "login_title": "ලොග් වන්න",
    "login_subtitle": "කරුණාකර ඔබගේ ඊමේල් සහ මුරපදය ඇතුලත් කරන්න",
    "email": "ඊමේල්",
    "email_placeholder": "උදා: 1234567890@students.stamford.edu",
    "email_error": "කරුණාකර වලංගු ඊමේල් ලිපිනයක් ඇතුලත් කරන්න",
    "password": "මුරපදය",
    "password_placeholder": "මුරපදය ඇතුලත් කරන්න",
    "password_error": "කරුණාකර මුරපදය ඇතුලත් කරන්න",
    "login_btn": "ලොග් වන්න",
    "no_account": "ගිණුමක් නැද්ද?",
    "register_link": "ලියාපදිංචි වන්න",
    "error_title": "දෝෂයක්!",
    "loading": "ලොග් වෙමින්...",
    "please_wait": "කරුණාකර ඉවසීමෙන් රැඳී සිටින්න"
  }
};

// Language names for dropdown with flags
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

let currentLang = 'en'; // Set English as default

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
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  currentLang = savedLang;
  
  console.log('🌐 Initializing language:', currentLang);
  
  // Initialize language dropdown
  initializeLanguageDropdown();
  
  // Apply initial language
  updateAllText();
}

function initializeLanguageDropdown() {
  const languageMenu = document.getElementById('languageMenu');
  const currentLanguageElement = document.getElementById('currentLanguage');
  
  if (!languageMenu) return;
  
  // Clear existing options and add all languages
  languageMenu.innerHTML = '';
  
  // Add all language options in the specified order
  const languageOrder = ['en', 'zh', 'ja', 'ko', 'ar', 'hi', 'th', 'vi', 'id', 'ms', 'ru', 'ur', 'tr', 'fa', 'ta', 'te', 'bn', 'lo', 'km', 'my', 'ne', 'pa', 'si'];
  
  languageOrder.forEach(code => {
    const name = languageNames[code];
    if (!name) return;
    
    // Create button element for better styling
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
    
    // Add click event
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      console.log('🔄 Language dropdown clicked:', lang);
      switchLanguage(lang);
      
      // Close the dropdown after selection
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
  const langData = loginTranslations[currentLang];
  
  if (!langData) {
    console.error('❌ No translation data for language:', currentLang);
    return;
  }
  
  console.log('📝 Updating text for language:', currentLang);
  
  // Update page title
  updatePageTitle();
  
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
  
  // Update error messages
  updateErrorMessages();
  
  console.log('✅ All text updated for language:', currentLang);
}

function updatePageTitle() {
  const titleElement = document.querySelector('title');
  const key = 'login_title';
  if (loginTranslations[currentLang] && loginTranslations[currentLang][key]) {
    titleElement.textContent = loginTranslations[currentLang][key] + ' - STIU Student Portal';
  }
}

function updateErrorMessages() {
  // Update error message placeholders
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  
  if (emailError && loginTranslations[currentLang]?.email_error) {
    emailError.setAttribute('data-i18n', 'email_error');
  }
  
  if (passwordError && loginTranslations[currentLang]?.password_error) {
    passwordError.setAttribute('data-i18n', 'password_error');
  }
}

function setupEventListeners() {
  const loginForm = document.getElementById('loginForm');
  
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
    document.getElementById('email-error').textContent = loginTranslations[currentLang].email_error;
    isValid = false;
  } else if (!isValidEmail(emailField.value)) {
    document.getElementById('email-error').style.display = 'block';
    document.getElementById('email-error').textContent = loginTranslations[currentLang].email_error;
    isValid = false;
  }
  
  // Validate password
  if (!passwordField.value.trim()) {
    document.getElementById('password-error').style.display = 'block';
    document.getElementById('password-error').textContent = loginTranslations[currentLang].password_error;
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
    
    let errorMessage = loginTranslations[currentLang]?.email_error || 'Invalid email or password';
    
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
                          (loginTranslations[currentLang]?.loading || 'Logging in...');
    } else {
      loginBtn.disabled = false;
      loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>' + 
                          (loginTranslations[currentLang]?.login_btn || 'Login');
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