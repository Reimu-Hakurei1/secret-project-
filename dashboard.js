// dashboard.js - Complete Bilingual Dashboard with Authentication
console.log('🚀 Dashboard script loaded');

// Language names for dropdown with flags (matching login.js)
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

const dashboardTranslations = {
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
    "version": "Version 4.0.0",
    "loading_dashboard": "Loading dashboard...",
    "please_wait": "Please wait a moment",
    "no_data": "No data available",
    "try_again": "Try Again",
    "error": "Error",
    "number_of_users": "Number of Users",
    "saving": "Saving...",
    "loading_data": "Loading data...",
    "no_users_found": "No users found",
    "view_profile": "View Profile",
    "other": "Other",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "china": "China",
    "vietnam": "Vietnam",
    "software": "Software",
    "ecommerce": "E-commerce",
    "data": "Data",
    "network": "Network"
  },
  zh: {
    "dashboard_title": "仪表板",
    "welcome": "学生管理系统概览",
    "total_users": "总用户数",
    "software_engineers": "软件工程",
    "ecommerce_technology": "电子商务技术",
    "data_science": "数据科学",
    "network_security": "网络与安全",
    "track_distribution": "专业分布",
    "country_distribution": "国家分布",
    "recent_registrations": "最近注册",
    "refresh": "刷新",
    "profile_settings": "个人资料设置",
    "my_curriculum": "我的课程",
    "logout": "退出登录",
    "name": "姓名",
    "student_id": "学号",
    "track": "专业",
    "country": "国家",
    "registration_date": "注册日期",
    "loading": "加载中...",
    "portal_name": "STIU学生门户",
    "user": "用户",
    "from_last_month": "比上月",
    "of_total": "占总数的",
    "all_rights_reserved": "保留所有权利",
    "version": "版本 4.0.0",
    "loading_dashboard": "正在加载仪表板...",
    "please_wait": "请稍候",
    "no_data": "无可用数据",
    "try_again": "重试",
    "error": "错误",
    "number_of_users": "用户数量",
    "saving": "保存中...",
    "loading_data": "正在加载数据...",
    "no_users_found": "未找到用户",
    "view_profile": "查看个人资料",
    "other": "其他",
    "thailand": "泰国",
    "myanmar": "缅甸",
    "china": "中国",
    "vietnam": "越南",
    "software": "软件",
    "ecommerce": "电子商务",
    "data": "数据",
    "network": "网络"
  },
  ja: {
    "dashboard_title": "ダッシュボード",
    "welcome": "学生管理システム概要",
    "total_users": "総ユーザー数",
    "software_engineers": "ソフトウェアエンジニアリング",
    "ecommerce_technology": "Eコマース技術",
    "data_science": "データサイエンス",
    "network_security": "ネットワークとセキュリティ",
    "track_distribution": "トラック分布",
    "country_distribution": "国別分布",
    "recent_registrations": "最近の登録",
    "refresh": "更新",
    "profile_settings": "プロフィール設定",
    "my_curriculum": "私のカリキュラム",
    "logout": "ログアウト",
    "name": "名前",
    "student_id": "学生ID",
    "track": "トラック",
    "country": "国",
    "registration_date": "登録日",
    "loading": "読み込み中...",
    "portal_name": "STIU学生ポータル",
    "user": "ユーザー",
    "from_last_month": "先月比",
    "of_total": "合計の",
    "all_rights_reserved": "全著作権所有",
    "version": "バージョン 4.0.0",
    "loading_dashboard": "ダッシュボードを読み込んでいます...",
    "please_wait": "しばらくお待ちください",
    "no_data": "データがありません",
    "try_again": "再試行",
    "error": "エラー",
    "number_of_users": "ユーザー数",
    "saving": "保存中...",
    "loading_data": "データを読み込んでいます...",
    "no_users_found": "ユーザーが見つかりません",
    "view_profile": "プロフィールを表示",
    "other": "その他",
    "thailand": "タイ",
    "myanmar": "ミャンマー",
    "china": "中国",
    "vietnam": "ベトナム",
    "software": "ソフトウェア",
    "ecommerce": "Eコマース",
    "data": "データ",
    "network": "ネットワーク"
  },
  ko: {
    "dashboard_title": "대시보드",
    "welcome": "학생 관리 시스템 개요",
    "total_users": "총 사용자 수",
    "software_engineers": "소프트웨어 공학",
    "ecommerce_technology": "이커머스 기술",
    "data_science": "데이터 과학",
    "network_security": "네트워크 및 보안",
    "track_distribution": "트랙 분포",
    "country_distribution": "국가별 분포",
    "recent_registrations": "최근 등록",
    "refresh": "새로고침",
    "profile_settings": "프로필 설정",
    "my_curriculum": "내 커리큘럼",
    "logout": "로그아웃",
    "name": "이름",
    "student_id": "학번",
    "track": "트랙",
    "country": "국가",
    "registration_date": "등록 날짜",
    "loading": "로딩 중...",
    "portal_name": "STIU 학생 포털",
    "user": "사용자",
    "from_last_month": "지난달 대비",
    "of_total": "전체의",
    "all_rights_reserved": "저작권 소유",
    "version": "버전 4.0.0",
    "loading_dashboard": "대시보드를 로딩 중입니다...",
    "please_wait": "잠시만 기다려 주세요",
    "no_data": "데이터 없음",
    "try_again": "다시 시도",
    "error": "오류",
    "number_of_users": "사용자 수",
    "saving": "저장 중...",
    "loading_data": "데이터를 로딩 중입니다...",
    "no_users_found": "사용자를 찾을 수 없습니다",
    "view_profile": "프로필 보기",
    "other": "기타",
    "thailand": "태국",
    "myanmar": "미얀마",
    "china": "중국",
    "vietnam": "베트남",
    "software": "소프트웨어",
    "ecommerce": "이커머스",
    "data": "데이터",
    "network": "네트워크"
  },
  ar: {
    "dashboard_title": "لوحة التحكم",
    "welcome": "نظرة عامة على نظام إدارة الطلاب",
    "total_users": "إجمالي المستخدمين",
    "software_engineers": "هندسة البرمجيات",
    "ecommerce_technology": "تكنولوجيا التجارة الإلكترونية",
    "data_science": "علم البيانات",
    "network_security": "الشبكة والأمان",
    "track_distribution": "توزيع المسارات",
    "country_distribution": "التوزيع حسب البلد",
    "recent_registrations": "التسجيلات الأخيرة",
    "refresh": "تحديث",
    "profile_settings": "إعدادات الملف الشخصي",
    "my_curriculum": "منهجي الدراسي",
    "logout": "تسجيل الخروج",
    "name": "الاسم",
    "student_id": "رقم الطالب",
    "track": "المسار",
    "country": "البلد",
    "registration_date": "تاريخ التسجيل",
    "loading": "جاري التحميل...",
    "portal_name": "بوابة طلاب STIU",
    "user": "المستخدم",
    "from_last_month": "من الشهر الماضي",
    "of_total": "من الإجمالي",
    "all_rights_reserved": "جميع الحقوق محفوظة",
    "version": "الإصدار 4.0.0",
    "loading_dashboard": "جاري تحميل لوحة التحكم...",
    "please_wait": "يرجى الانتظار لحظة",
    "no_data": "لا توجد بيانات",
    "try_again": "حاول مرة أخرى",
    "error": "خطأ",
    "number_of_users": "عدد المستخدمين",
    "saving": "جاري الحفظ...",
    "loading_data": "جاري تحميل البيانات...",
    "no_users_found": "لم يتم العثور على مستخدمين",
    "view_profile": "عرض الملف الشخصي",
    "other": "أخرى",
    "thailand": "تايلاند",
    "myanmar": "ميانمار",
    "china": "الصين",
    "vietnam": "فيتنام",
    "software": "برمجيات",
    "ecommerce": "التجارة الإلكترونية",
    "data": "بيانات",
    "network": "شبكة"
  },
  hi: {
    "dashboard_title": "डैशबोर्ड",
    "welcome": "छात्र प्रबंधन प्रणाली अवलोकन",
    "total_users": "कुल उपयोगकर्ता",
    "software_engineers": "सॉफ़्टवेयर इंजीनियरिंग",
    "ecommerce_technology": "ई-कॉमर्स प्रौद्योगिकी",
    "data_science": "डेटा साइंस",
    "network_security": "नेटवर्क और सुरक्षा",
    "track_distribution": "ट्रैक वितरण",
    "country_distribution": "देश वितरण",
    "recent_registrations": "हालिया पंजीकरण",
    "refresh": "ताज़ा करें",
    "profile_settings": "प्रोफ़ाइल सेटिंग्स",
    "my_curriculum": "मेरा पाठ्यक्रम",
    "logout": "लॉगआउट",
    "name": "नाम",
    "student_id": "छात्र आईडी",
    "track": "ट्रैक",
    "country": "देश",
    "registration_date": "पंजीकरण तिथि",
    "loading": "लोड हो रहा है...",
    "portal_name": "STIU छात्र पोर्टल",
    "user": "उपयोगकर्ता",
    "from_last_month": "पिछले महीने से",
    "of_total": "कुल का",
    "all_rights_reserved": "सर्वाधिकार सुरक्षित",
    "version": "संस्करण 4.0.0",
    "loading_dashboard": "डैशबोर्ड लोड हो रहा है...",
    "please_wait": "कृपया प्रतीक्षा करें",
    "no_data": "कोई डेटा उपलब्ध नहीं",
    "try_again": "पुनः प्रयास करें",
    "error": "त्रुटि",
    "number_of_users": "उपयोगकर्ताओं की संख्या",
    "saving": "सहेजा जा रहा है...",
    "loading_data": "डेटा लोड हो रहा है...",
    "no_users_found": "कोई उपयोगकर्ता नहीं मिला",
    "view_profile": "प्रोफ़ाइल देखें",
    "other": "अन्य",
    "thailand": "थाईलैंड",
    "myanmar": "म्यांमार",
    "china": "चीन",
    "vietnam": "वियतनाम",
    "software": "सॉफ्टवेयर",
    "ecommerce": "ई-कॉमर्स",
    "data": "डेटा",
    "network": "नेटवर्क"
  },
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
    "version": "เวอร์ชัน 4.0.0",
    "loading_dashboard": "กำลังโหลดแดชบอร์ด...",
    "please_wait": "กรุณารอสักครู่",
    "no_data": "ไม่มีข้อมูล",
    "try_again": "ลองอีกครั้ง",
    "error": "เกิดข้อผิดพลาด",
    "number_of_users": "จำนวนผู้ใช้",
    "saving": "กำลังบันทึก...",
    "loading_data": "กำลังโหลดข้อมูล...",
    "no_users_found": "ไม่พบข้อมูลผู้ใช้",
    "view_profile": "ดูโปรไฟล์",
    "other": "อื่นๆ",
    "thailand": "ไทย",
    "myanmar": "เมียนมา",
    "china": "จีน",
    "vietnam": "เวียดนาม",
    "software": "ซอฟต์แวร์",
    "ecommerce": "อีคอมเมิร์ซ",
    "data": "ข้อมูล",
    "network": "เครือข่าย"
  },
  vi: {
    "dashboard_title": "Bảng điều khiển",
    "welcome": "Tổng quan hệ thống quản lý sinh viên",
    "total_users": "Tổng số người dùng",
    "software_engineers": "Kỹ thuật phần mềm",
    "ecommerce_technology": "Công nghệ Thương mại điện tử",
    "data_science": "Khoa học dữ liệu",
    "network_security": "Mạng và Bảo mật",
    "track_distribution": "Phân bổ theo ngành",
    "country_distribution": "Phân bổ theo quốc gia",
    "recent_registrations": "Đăng ký gần đây",
    "refresh": "Làm mới",
    "profile_settings": "Cài đặt hồ sơ",
    "my_curriculum": "Chương trình học của tôi",
    "logout": "Đăng xuất",
    "name": "Họ tên",
    "student_id": "Mã sinh viên",
    "track": "Ngành",
    "country": "Quốc gia",
    "registration_date": "Ngày đăng ký",
    "loading": "Đang tải...",
    "portal_name": "Cổng thông tin sinh viên STIU",
    "user": "Người dùng",
    "from_last_month": "so với tháng trước",
    "of_total": "trên tổng số",
    "all_rights_reserved": "Đã đăng ký bản quyền",
    "version": "Phiên bản 4.0.0",
    "loading_dashboard": "Đang tải bảng điều khiển...",
    "please_wait": "Vui lòng đợi một chút",
    "no_data": "Không có dữ liệu",
    "try_again": "Thử lại",
    "error": "Lỗi",
    "number_of_users": "Số lượng người dùng",
    "saving": "Đang lưu...",
    "loading_data": "Đang tải dữ liệu...",
    "no_users_found": "Không tìm thấy người dùng",
    "view_profile": "Xem hồ sơ",
    "other": "Khác",
    "thailand": "Thái Lan",
    "myanmar": "Myanmar",
    "china": "Trung Quốc",
    "vietnam": "Việt Nam",
    "software": "Phần mềm",
    "ecommerce": "Thương mại điện tử",
    "data": "Dữ liệu",
    "network": "Mạng"
  },
  id: {
    "dashboard_title": "Dasbor",
    "welcome": "Ikhtisar Sistem Manajemen Siswa",
    "total_users": "Total Pengguna",
    "software_engineers": "Rekayasa Perangkat Lunak",
    "ecommerce_technology": "Teknologi E-Commerce",
    "data_science": "Ilmu Data",
    "network_security": "Jaringan dan Keamanan",
    "track_distribution": "Distribusi Jalur",
    "country_distribution": "Distribusi Negara",
    "recent_registrations": "Pendaftaran Terbaru",
    "refresh": "Segarkan",
    "profile_settings": "Pengaturan Profil",
    "my_curriculum": "Kurikulum Saya",
    "logout": "Keluar",
    "name": "Nama",
    "student_id": "ID Siswa",
    "track": "Jalur",
    "country": "Negara",
    "registration_date": "Tanggal Pendaftaran",
    "loading": "Memuat...",
    "portal_name": "Portal Siswa STIU",
    "user": "Pengguna",
    "from_last_month": "dari bulan lalu",
    "of_total": "dari total",
    "all_rights_reserved": "Hak Cipta Dilindungi",
    "version": "Versi 4.0.0",
    "loading_dashboard": "Memuat dasbor...",
    "please_wait": "Harap tunggu sebentar",
    "no_data": "Tidak ada data",
    "try_again": "Coba Lagi",
    "error": "Kesalahan",
    "number_of_users": "Jumlah Pengguna",
    "saving": "Menyimpan...",
    "loading_data": "Memuat data...",
    "no_users_found": "Tidak ada pengguna ditemukan",
    "view_profile": "Lihat Profil",
    "other": "Lainnya",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "china": "Cina",
    "vietnam": "Vietnam",
    "software": "Perangkat Lunak",
    "ecommerce": "E-Commerce",
    "data": "Data",
    "network": "Jaringan"
  },
  ms: {
    "dashboard_title": "Papan Pemuka",
    "welcome": "Gambaran Keseluruhan Sistem Pengurusan Pelajar",
    "total_users": "Jumlah Pengguna",
    "software_engineers": "Kejuruteraan Perisian",
    "ecommerce_technology": "Teknologi E-Dagang",
    "data_science": "Sains Data",
    "network_security": "Rangkaian dan Keselamatan",
    "track_distribution": "Taburan Trek",
    "country_distribution": "Taburan Negara",
    "recent_registrations": "Pendaftaran Terkini",
    "refresh": "Muat Semula",
    "profile_settings": "Tetapan Profil",
    "my_curriculum": "Kurikulum Saya",
    "logout": "Log Keluar",
    "name": "Nama",
    "student_id": "ID Pelajar",
    "track": "Trek",
    "country": "Negara",
    "registration_date": "Tarikh Pendaftaran",
    "loading": "Memuatkan...",
    "portal_name": "Portal Pelajar STIU",
    "user": "Pengguna",
    "from_last_month": "dari bulan lepas",
    "of_total": "daripada jumlah",
    "all_rights_reserved": "Hak Cipta Terpelihara",
    "version": "Versi 4.0.0",
    "loading_dashboard": "Memuatkan papan pemuka...",
    "please_wait": "Sila tunggu sebentar",
    "no_data": "Tiada data",
    "try_again": "Cuba Lagi",
    "error": "Ralat",
    "number_of_users": "Bilangan Pengguna",
    "saving": "Menyimpan...",
    "loading_data": "Memuatkan data...",
    "no_users_found": "Tiada pengguna ditemui",
    "view_profile": "Lihat Profil",
    "other": "Lain",
    "thailand": "Thailand",
    "myanmar": "Myanmar",
    "china": "China",
    "vietnam": "Vietnam",
    "software": "Perisian",
    "ecommerce": "E-Dagang",
    "data": "Data",
    "network": "Rangkaian"
  },
  ru: {
    "dashboard_title": "Панель управления",
    "welcome": "Обзор системы управления студентами",
    "total_users": "Всего пользователей",
    "software_engineers": "Программная инженерия",
    "ecommerce_technology": "Технологии электронной коммерции",
    "data_science": "Наука о данных",
    "network_security": "Сеть и безопасность",
    "track_distribution": "Распределение по направлениям",
    "country_distribution": "Распределение по странам",
    "recent_registrations": "Недавние регистрации",
    "refresh": "Обновить",
    "profile_settings": "Настройки профиля",
    "my_curriculum": "Мой учебный план",
    "logout": "Выйти",
    "name": "Имя",
    "student_id": "Студенческий ID",
    "track": "Направление",
    "country": "Страна",
    "registration_date": "Дата регистрации",
    "loading": "Загрузка...",
    "portal_name": "Студенческий портал STIU",
    "user": "Пользователь",
    "from_last_month": "с прошлого месяца",
    "of_total": "от общего числа",
    "all_rights_reserved": "Все права защищены",
    "version": "Версия 4.0.0",
    "loading_dashboard": "Загрузка панели управления...",
    "please_wait": "Пожалуйста, подождите",
    "no_data": "Нет данных",
    "try_again": "Попробовать снова",
    "error": "Ошибка",
    "number_of_users": "Количество пользователей",
    "saving": "Сохранение...",
    "loading_data": "Загрузка данных...",
    "no_users_found": "Пользователи не найдены",
    "view_profile": "Просмотреть профиль",
    "other": "Другое",
    "thailand": "Таиланд",
    "myanmar": "Мьянма",
    "china": "Китай",
    "vietnam": "Вьетнам",
    "software": "Программное обеспечение",
    "ecommerce": "Электронная коммерция",
    "data": "Данные",
    "network": "Сеть"
  },
  ur: {
    "dashboard_title": "ڈیش بورڈ",
    "welcome": "طالب علم مینجمنٹ سسٹم کا جائزہ",
    "total_users": "کل صارفین",
    "software_engineers": "سافٹ ویئر انجینئرنگ",
    "ecommerce_technology": "ای کامرس ٹیکنالوجی",
    "data_science": "ڈیٹا سائنس",
    "network_security": "نیٹ ورک اور سیکورٹی",
    "track_distribution": "ٹریک تقسیم",
    "country_distribution": "ملک تقسیم",
    "recent_registrations": "حالیہ رجسٹریشنز",
    "refresh": "ریفریش",
    "profile_settings": "پروفائل سیٹنگز",
    "my_curriculum": "میرا نصاب",
    "logout": "لاگ آؤٹ",
    "name": "نام",
    "student_id": "طالب علم آئی ڈی",
    "track": "ٹریک",
    "country": "ملک",
    "registration_date": "رجس्टریشن تاریخ",
    "loading": "لوڈ ہو رہا ہے...",
    "portal_name": "STIU طالب علم پورٹل",
    "user": "صارف",
    "from_last_month": "پچھلے مہینے سے",
    "of_total": "کل کا",
    "all_rights_reserved": "جملہ حقوق محفوظ ہیں",
    "version": "ورژن 4.0.0",
    "loading_dashboard": "ڈیش بورڈ لوڈ ہو رہا ہے...",
    "please_wait": "براہ کرم انتظار کریں",
    "no_data": "ڈیٹا دستیاب نہیں",
    "try_again": "دوبارہ کوشش کریں",
    "error": "خرابی",
    "number_of_users": "صارفین کی تعداد",
    "saving": "سیو ہو رہا ہے...",
    "loading_data": "ڈیٹا لوڈ ہو رہا ہے...",
    "no_users_found": "کوئی صارف نہیں ملا",
    "view_profile": "پروفائل دیکھیں",
    "other": "دیگر",
    "thailand": "تھائی لینڈ",
    "myanmar": "میانمار",
    "china": "چین",
    "vietnam": "ویتنام",
    "software": "سافٹ ویئر",
    "ecommerce": "ای کامرس",
    "data": "ڈیٹا",
    "network": "نیٹ ورک"
  },
  tr: {
    "dashboard_title": "Kontrol Paneli",
    "welcome": "Öğrenci Yönetim Sistemi Genel Bakış",
    "total_users": "Toplam Kullanıcı",
    "software_engineers": "Yazılım Mühendisliği",
    "ecommerce_technology": "E-Ticaret Teknolojisi",
    "data_science": "Veri Bilimi",
    "network_security": "Ağ ve Güvenlik",
    "track_distribution": "Alan Dağılımı",
    "country_distribution": "Ülke Dağılımı",
    "recent_registrations": "Son Kayıtlar",
    "refresh": "Yenile",
    "profile_settings": "Profil Ayarları",
    "my_curriculum": "Müfredatım",
    "logout": "Çıkış Yap",
    "name": "İsim",
    "student_id": "Öğrenci No",
    "track": "Alan",
    "country": "Ülke",
    "registration_date": "Kayıt Tarihi",
    "loading": "Yükleniyor...",
    "portal_name": "STIU Öğrenci Portalı",
    "user": "Kullanıcı",
    "from_last_month": "geçen aydan",
    "of_total": "toplamın",
    "all_rights_reserved": "Tüm hakları saklıdır",
    "version": "Sürüm 4.0.0",
    "loading_dashboard": "Kontrol paneli yükleniyor...",
    "please_wait": "Lütfen bekleyin",
    "no_data": "Veri yok",
    "try_again": "Tekrar Deneyin",
    "error": "Hata",
    "number_of_users": "Kullanıcı Sayısı",
    "saving": "Kaydediliyor...",
    "loading_data": "Veri yükleniyor...",
    "no_users_found": "Kullanıcı bulunamadı",
    "view_profile": "Profili Görüntüle",
    "other": "Diğer",
    "thailand": "Tayland",
    "myanmar": "Myanmar",
    "china": "Çin",
    "vietnam": "Vietnam",
    "software": "Yazılım",
    "ecommerce": "E-Ticaret",
    "data": "Veri",
    "network": "Ağ"
  },
  fa: {
    "dashboard_title": "داشبورد",
    "welcome": "مرور سیستم مدیریت دانشجویان",
    "total_users": "کل کاربران",
    "software_engineers": "مهندسی نرم‌افزار",
    "ecommerce_technology": "فناوری تجارت الکترونیک",
    "data_science": "علم داده",
    "network_security": "شبکه و امنیت",
    "track_distribution": "توزیع رشته",
    "country_distribution": "توزیع کشور",
    "recent_registrations": "ثبت‌نام‌های اخیر",
    "refresh": "به‌روزرسانی",
    "profile_settings": "تنظیمات پروفایل",
    "my_curriculum": "برنامه درسی من",
    "logout": "خروج",
    "name": "نام",
    "student_id": "شماره دانشجویی",
    "track": "رشته",
    "country": "کشور",
    "registration_date": "تاریخ ثبت‌نام",
    "loading": "در حال بارگذاری...",
    "portal_name": "پورتال دانشجویی STIU",
    "user": "کاربر",
    "from_last_month": "از ماه گذشته",
    "of_total": "از کل",
    "all_rights_reserved": "تمامی حقوق محفوظ است",
    "version": "نسخه 4.0.0",
    "loading_dashboard": "در حال بارگذاری داشبورد...",
    "please_wait": "لطفاً منتظر بمانید",
    "no_data": "داده‌ای موجود نیست",
    "try_again": "دوباره تلاش کنید",
    "error": "خطا",
    "number_of_users": "تعداد کاربران",
    "saving": "در حال ذخیره...",
    "loading_data": "در حال بارگذاری داده...",
    "no_users_found": "کاربری یافت نشد",
    "view_profile": "مشاهده پروفایل",
    "other": "سایر",
    "thailand": "تایلند",
    "myanmar": "میانمار",
    "china": "چین",
    "vietnam": "ویتنام",
    "software": "نرم‌افزار",
    "ecommerce": "تجارت الکترونیک",
    "data": "داده",
    "network": "شبکه"
  },
  ta: {
    "dashboard_title": "டாஷ்போர்டு",
    "welcome": "மாணவர் மேலாண்மை அமைப்பு கண்ணோட்டம்",
    "total_users": "மொத்த பயனர்கள்",
    "software_engineers": "மென்பொருள் பொறியியல்",
    "ecommerce_technology": "இ-கமர்ஸ் தொழில்நுட்பம்",
    "data_science": "டேட்டா சயின்ஸ்",
    "network_security": "நெட்வொர்க் மற்றும் பாதுகாப்பு",
    "track_distribution": "பாடப்பிரிவு விநியோகம்",
    "country_distribution": "நாடு விநியோகம்",
    "recent_registrations": "சமீபத்திய பதிவுகள்",
    "refresh": "புதுப்பிக்க",
    "profile_settings": "சுயவிவர அமைப்புகள்",
    "my_curriculum": "எனது பாடத்திட்டம்",
    "logout": "வெளியேறு",
    "name": "பெயர்",
    "student_id": "மாணவர் அடையாள எண்",
    "track": "பாடப்பிரிவு",
    "country": "நாடு",
    "registration_date": "பதிவு தேதி",
    "loading": "ஏற்றுகிறது...",
    "portal_name": "STIU மாணவர் போர்ட்டல்",
    "user": "பயனர்",
    "from_last_month": "கடந்த மாதத்திலிருந்து",
    "of_total": "மொத்தத்தில்",
    "all_rights_reserved": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    "version": "பதிப்பு 4.0.0",
    "loading_dashboard": "டாஷ்போர்டு ஏற்றுகிறது...",
    "please_wait": "தயவு செய்து காத்திருக்கவும்",
    "no_data": "தரவு இல்லை",
    "try_again": "மீண்டும் முயற்சிக்கவும்",
    "error": "பிழை",
    "number_of_users": "பயனர்களின் எண்ணிக்கை",
    "saving": "சேமிக்கிறது...",
    "loading_data": "தரவு ஏற்றுகிறது...",
    "no_users_found": "பயனர்கள் கிடைக்கவில்லை",
    "view_profile": "சுயவிவரத்தைக் காண்க",
    "other": "மற்றவை",
    "thailand": "தாய்லாந்து",
    "myanmar": "மியான்மர்",
    "china": "சீனா",
    "vietnam": "வியட்நாம்",
    "software": "மென்பொருள்",
    "ecommerce": "இ-கமர்ஸ்",
    "data": "தரவு",
    "network": "பிணையம்"
  },
  te: {
    "dashboard_title": "డాష్బోర్డ్",
    "welcome": "విద్యార్థి నిర్వహణ వ్యవస్థ అవలోకనం",
    "total_users": "మొత్తం వినియోగదారులు",
    "software_engineers": "సాఫ్ట్‌వేర్ ఇంజనీరింగ్",
    "ecommerce_technology": "ఇ-కామర్స్ టెక్నాలజీ",
    "data_science": "డేటా సైన్స్",
    "network_security": "నెట్‌వర్క్ మరియు సెక్యూరిటీ",
    "track_distribution": "ట్రాక్ పంపిణీ",
    "country_distribution": "దేశ పంపిణీ",
    "recent_registrations": "ఇటీవలి నమోదులు",
    "refresh": "రీఫ్రెష్",
    "profile_settings": "ప్రొఫైల్ సెట్టింగ్‌లు",
    "my_curriculum": "నా పాఠ్యప్రణాళిక",
    "logout": "లాగ్అవుట్",
    "name": "పేరు",
    "student_id": "విద్యార్థి ఐడి",
    "track": "ట్రాక్",
    "country": "దేశం",
    "registration_date": "నమోదు తేదీ",
    "loading": "లోడ్ అవుతోంది...",
    "portal_name": "STIU విద్యార్థి పోర్టల్",
    "user": "వినియోగదారు",
    "from_last_month": "గత నెల నుండి",
    "of_total": "మొత్తం నుండి",
    "all_rights_reserved": "అన్ని హక్కులు ప్రత్యేకించబడినవి",
    "version": "వెర్షన్ 4.0.0",
    "loading_dashboard": "డాష్బోర్డ్ లోడ్ అవుతోంది...",
    "please_wait": "దయచేసి కాసేపు వేచి ఉండండి",
    "no_data": "డేటా లేదు",
    "try_again": "మళ్లీ ప్రయత్నించండి",
    "error": "లోపం",
    "number_of_users": "వినియోగదారుల సంఖ్య",
    "saving": "సేవ్ అవుతోంది...",
    "loading_data": "డేటా లోడ్ అవుతోంది...",
    "no_users_found": "వినియోగదారులు లభించలేదు",
    "view_profile": "ప్రొఫైల్ చూడండి",
    "other": "ఇతర",
    "thailand": "థాయిలాండ్",
    "myanmar": "మయన్మార్",
    "china": "చైనా",
    "vietnam": "వియత్నాం",
    "software": "సాఫ్ట్‌వేర్",
    "ecommerce": "ఇ-కామర్స్",
    "data": "డేటా",
    "network": "నెట్‌వర్క్"
  },
  bn: {
    "dashboard_title": "ড্যাশবোর্ড",
    "welcome": "ছাত্র ব্যবস্থাপনা সিস্টেম ওভারভিউ",
    "total_users": "মোট ব্যবহারকারী",
    "software_engineers": "সফটওয়্যার ইঞ্জিনিয়ারিং",
    "ecommerce_technology": "ই-কমার্স প্রযুক্তি",
    "data_science": "ডেটা সায়েন্স",
    "network_security": "নেটওয়ার্ক এবং নিরাপত্তা",
    "track_distribution": "ট্র্যাক বিতরণ",
    "country_distribution": "দেশ বিতরণ",
    "recent_registrations": "সাম্প্রতিক নিবন্ধন",
    "refresh": "রিফ্রেশ",
    "profile_settings": "প্রোফাইল সেটিংস",
    "my_curriculum": "আমার পাঠ্যক্রম",
    "logout": "লগআউট",
    "name": "নাম",
    "student_id": "ছাত্র আইডি",
    "track": "ট্র্যাক",
    "country": "দেশ",
    "registration_date": "নিবন্ধনের তারিখ",
    "loading": "লোড হচ্ছে...",
    "portal_name": "STIU ছাত্র পোর্টাল",
    "user": "ব্যবহারকারী",
    "from_last_month": "গত মাস থেকে",
    "of_total": "মোট এর",
    "all_rights_reserved": "সমস্ত অধিকার সংরক্ষিত",
    "version": "সংস্করণ 4.0.0",
    "loading_dashboard": "ড্যাশবোর্ড লোড হচ্ছে...",
    "please_wait": "অনুগ্রহ করে অপেক্ষা করুন",
    "no_data": "কোনও ডেটা নেই",
    "try_again": "আবার চেষ্টা করুন",
    "error": "ত্রুটি",
    "number_of_users": "ব্যবহারকারীর সংখ্যা",
    "saving": "সেভ হচ্ছে...",
    "loading_data": "ডেটা লোড হচ্ছে...",
    "no_users_found": "কোনও ব্যবহারকারী পাওয়া যায়নি",
    "view_profile": "প্রোফাইল দেখুন",
    "other": "অন্যান্য",
    "thailand": "থাইল্যান্ড",
    "myanmar": "মায়ানমার",
    "china": "চীন",
    "vietnam": "ভিয়েতনাম",
    "software": "সফটওয়্যার",
    "ecommerce": "ই-কমার্স",
    "data": "ডেটা",
    "network": "নেটওয়ার্ক"
  },
  lo: {
    "dashboard_title": "ແຜງໜ້າຈໍ",
    "welcome": "ພາບລວມຂອງລະບົບຈັດການນັກຮຽນ",
    "total_users": "ຜູ້ໃຊ້ທັງໝົດ",
    "software_engineers": "ວິສະວະກຳຊອບແວ",
    "ecommerce_technology": "ເຕັກໂນໂລຢີອີຄອມເມີຊ",
    "data_science": "ວິທະຍາສາດຂໍ້ມູນ",
    "network_security": "ເຄືອຂ່າຍ ແລະ ຄວາມປອດໄພ",
    "track_distribution": "ການແຈກຢາຍຕາມສາຂາ",
    "country_distribution": "ການແຈກຢາຍຕາມປະເທດ",
    "recent_registrations": "ການລົງທະບຽນລ່າສຸດ",
    "refresh": "ຟຣິດ",
    "profile_settings": "ການຕັ້ງຄ່າໂປຣໄຟລ໌",
    "my_curriculum": "ຫຼັກສູດຂອງຂ້ອຍ",
    "logout": "ອອກຈາກລະບົບ",
    "name": "ຊື່-ນາມສະກຸນ",
    "student_id": "ລະຫັດນັກຮຽນ",
    "track": "ສາຂາ",
    "country": "ປະເທດ",
    "registration_date": "ວັນທີລົງທະບຽນ",
    "loading": "ກຳລັງໂຫຼດ...",
    "portal_name": "ພອດຕານິັດ STIU",
    "user": "ຜູ້ໃຊ້",
    "from_last_month": "ຈາກເດືອນກ່ອນ",
    "of_total": "ຂອງທັງໝົດ",
    "all_rights_reserved": "ລິຂະສິດທັງໝົດຖືກຮັກສາໄວ້",
    "version": "ເວີຊັນ 4.0.0",
    "loading_dashboard": "ກຳລັງໂຫຼດແຜງໜ້າຈໍ...",
    "please_wait": "ກະລຸນາລໍຖ້າ",
    "no_data": "ບໍ່ມີຂໍ້ມູນ",
    "try_again": "ລອງໃໝ່",
    "error": "ຂໍ້ຜິດພາດ",
    "number_of_users": "ຈຳນວນຜູ້ໃຊ້",
    "saving": "ກຳລັງບັນທຶກ...",
    "loading_data": "ກຳລັງໂຫຼດຂໍ້ມູນ...",
    "no_users_found": "ບໍ່ພົບຜູ້ໃຊ້",
    "view_profile": "ເບິ່ງໂປຣໄຟລ໌",
    "other": "ອື່ນໆ",
    "thailand": "ປະເທດໄທ",
    "myanmar": "ມຽນມາ",
    "china": "ຈີນ",
    "vietnam": "ຫວຽດນາມ",
    "software": "ຊອບແວ",
    "ecommerce": "ອີຄອມເມີຊ",
    "data": "ຂໍ້ມູນ",
    "network": "ເຄືອຂ່າຍ"
  },
  km: {
    "dashboard_title": "ផ្ទាំងគ្រប់គ្រង",
    "welcome": "ទិដ្ឋភាពទូទៅនៃប្រព័ន្ធគ្រប់គ្រងសិស្ស",
    "total_users": "អ្នកប្រើប្រាស់សរុប",
    "software_engineers": "វិស្វកម្មសូហ្វវែរ",
    "ecommerce_technology": "បច្ចេកវិទ្យាពាណិជ្ជកម្មអេឡិចត្រូនិក",
    "data_science": "វិទ្យាសាស្ត្រទិន្នន័យ",
    "network_security": "បណ្តាញ និងសុវត្ថិភាព",
    "track_distribution": "ការចែកចាយតាមជំនាញ",
    "country_distribution": "ការចែកចាយតាមប្រទេស",
    "recent_registrations": "ការចុះឈ្មោះថ្មីៗ",
    "refresh": "ធ្វើឲ្យស្រស់",
    "profile_settings": "ការកំណត់ប្រវត្តិរូប",
    "my_curriculum": "កម្មវិធីសិក្សារបស់ខ្ញុំ",
    "logout": "ចាកចេញ",
    "name": "ឈ្មោះ",
    "student_id": "លេខសម្គាល់សិស្ស",
    "track": "ជំនាញ",
    "country": "ប្រទេស",
    "registration_date": "កាលបរិច្ឆេទចុះឈ្មោះ",
    "loading": "កំពុងផ្ទុក...",
    "portal_name": "ផោដាលសិស្ស STIU",
    "user": "អ្នកប្រើប្រាស់",
    "from_last_month": "ពីខែមុន",
    "of_total": "នៃសរុប",
    "all_rights_reserved": "រក្សាសិទ្ធិគ្រប់យ៉ាង",
    "version": "កំណែ 4.0.0",
    "loading_dashboard": "កំពុងផ្ទុកផ្ទាំងគ្រប់គ្រង...",
    "please_wait": "សូមរង់ចាំមួយភ្លែត",
    "no_data": "គ្មានទិន្នន័យ",
    "try_again": "ព្យាយាមម្តងទៀត",
    "error": "កំហុស",
    "number_of_users": "ចំនួនអ្នកប្រើប្រាស់",
    "saving": "កំពុងរក្សាទុក...",
    "loading_data": "កំពុងផ្ទុកទិន្នន័យ...",
    "no_users_found": "រកមិនឃើញអ្នកប្រើប្រាស់ទេ",
    "view_profile": "មើលប្រវត្តិរូប",
    "other": "ផ្សេងៗ",
    "thailand": "ថៃ",
    "myanmar": "មីយ៉ាន់ម៉ា",
    "china": "ចិន",
    "vietnam": "វៀតណាម",
    "software": "សូហ្វវែរ",
    "ecommerce": "ពាណិជ្ជកម្មអេឡិចត្រូនិក",
    "data": "ទិន្នន័យ",
    "network": "បណ្តាញ"
  },
  my: {
    "dashboard_title": "ဒိုင်ခွက်",
    "welcome": "ကျောင်းသားစီမံခန့်ခွဲမှုစနစ် အကျဉ်းချုပ်",
    "total_users": "စုစုပေါင်းအသုံးပြုသူများ",
    "software_engineers": "ဆော့ဖ်ဝဲအင်ဂျင်နီယာ",
    "ecommerce_technology": "အီလက်ထရွန်းနစ်စီးပွားရေးနည်းပညာ",
    "data_science": "ဒေတာသိပ္ပံ",
    "network_security": "နက်ဝပ်နှင့် လုံခြုံရေး",
    "track_distribution": "သင်တန်းအလိုက်ဖြန့်ဝေမှု",
    "country_distribution": "နိုင်ငံအလိုက်ဖြန့်ဝေမှု",
    "recent_registrations": "နောက်ဆုံးမှတ်ပုံတင်ထားသူများ",
    "refresh": "ပြန်လည်စတင်ပါ",
    "profile_settings": "ကိုယ်ရေးအချက်အလက်ဆက်တင်များ",
    "my_curriculum": "ကျွန်ုပ်၏သင်ရိုးညွှန်းတမ်း",
    "logout": "ထွက်ရန်",
    "name": "အမည်",
    "student_id": "ကျောင်းသားနံပါတ်",
    "track": "သင်တန်း",
    "country": "နိုင်ငံ",
    "registration_date": "မှတ်ပုံတင်သည့်ရက်စွဲ",
    "loading": "တင်နေသည်...",
    "portal_name": "STIU ကျောင်းသားပေါ်တယ်",
    "user": "အသုံးပြုသူ",
    "from_last_month": "ပြီးခဲ့သည့်လမှ",
    "of_total": "စုစုပေါင်း၏",
    "all_rights_reserved": "အခွင့်အရေးအားလုံးရယူထားသည်",
    "version": "ဗားရှင်း 4.0.0",
    "loading_dashboard": "ဒိုင်ခွက်တင်နေသည်...",
    "please_wait": "ကျေးဇူးပြု၍ စောင့်ပါ",
    "no_data": "ဒေတာမရှိပါ",
    "try_again": "ထပ်ကြိုးစားပါ",
    "error": "အမှား",
    "number_of_users": "အသုံးပြုသူအရေအတွက်",
    "saving": "သိမ်းဆည်းနေသည်...",
    "loading_data": "ဒေတာတင်နေသည်...",
    "no_users_found": "အသုံးပြုသူမတွေ့ပါ",
    "view_profile": "ကိုယ်ရေးအချက်အလက်ကြည့်ရန်",
    "other": "အခြား",
    "thailand": "ထိုင်း",
    "myanmar": "မြန်မာ",
    "china": "တရုတ်",
    "vietnam": "ဗီယက်နမ်",
    "software": "ဆော့ဖ်ဝဲ",
    "ecommerce": "အီလက်ထရွန်းနစ်စီးပွားရေး",
    "data": "ဒေတာ",
    "network": "နက်ဝပ်"
  },
  ne: {
    "dashboard_title": "ड्यासबोर्ड",
    "welcome": "विद्यार्थी व्यवस्थापन प्रणाली अवलोकन",
    "total_users": "कुल प्रयोगकर्ताहरू",
    "software_engineers": "सफ्टवेयर इन्जिनियरिङ",
    "ecommerce_technology": "ई-कमर्स प्रविधि",
    "data_science": "डाटा साइन्स",
    "network_security": "नेटवर्क र सुरक्षा",
    "track_distribution": "ट्र्याक वितरण",
    "country_distribution": "देश वितरण",
    "recent_registrations": "हालैका दर्ताहरू",
    "refresh": "रिफ्रेस",
    "profile_settings": "प्रोफाइल सेटिङहरू",
    "my_curriculum": "मेरो पाठ्यक्रम",
    "logout": "लगआउट",
    "name": "नाम",
    "student_id": "विद्यार्थी आईडी",
    "track": "ट्र्याक",
    "country": "देश",
    "registration_date": "दर्ता मिति",
    "loading": "लोड हुँदैछ...",
    "portal_name": "STIU विद्यार्थी पोर्टल",
    "user": "प्रयोगकर्ता",
    "from_last_month": "गत महिना देखि",
    "of_total": "कुल को",
    "all_rights_reserved": "सर्वाधिकार सुरक्षित",
    "version": "संस्करण 4.0.0",
    "loading_dashboard": "ड्यासबोर्ड लोड हुँदैछ...",
    "please_wait": "कृपया प्रतीक्षा गर्नुहोस्",
    "no_data": "डाटा उपलब्ध छैन",
    "try_again": "फेरि प्रयास गर्नुहोस्",
    "error": "त्रुटि",
    "number_of_users": "प्रयोगकर्ताहरूको संख्या",
    "saving": "सेभ हुँदैछ...",
    "loading_data": "डाटा लोड हुँदैछ...",
    "no_users_found": "प्रयोगकर्ता भेटिएन",
    "view_profile": "प्रोफाइल हेर्नुहोस्",
    "other": "अन्य",
    "thailand": "थाइल्यान्ड",
    "myanmar": "म्यान्मार",
    "china": "चीन",
    "vietnam": "भियतनाम",
    "software": "सफ्टवेयर",
    "ecommerce": "ई-कमर्स",
    "data": "डाटा",
    "network": "नेटवर्क"
  },
  pa: {
    "dashboard_title": "ਡੈਸ਼ਬੋਰਡ",
    "welcome": "ਵਿਦਿਆਰਥੀ ਪ੍ਰਬੰਧਨ ਪ੍ਰਣਾਲੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ",
    "total_users": "ਕੁੱਲ ਯੂਜ਼ਰ",
    "software_engineers": "ਸਾੱਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ",
    "ecommerce_technology": "ਈ-ਕਾਮਰਸ ਟੈਕਨੋਲੋਜੀ",
    "data_science": "ਡਾਟਾ ਸਾਇੰਸ",
    "network_security": "ਨੈੱਟਵਰਕ ਅਤੇ ਸੁਰੱਖਿਆ",
    "track_distribution": "ਟ੍ਰੈਕ ਵੰਡ",
    "country_distribution": "ਦੇਸ਼ ਵੰਡ",
    "recent_registrations": "ਤਾਜ਼ਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨਾਂ",
    "refresh": "ਰਿਫਰੈਸ਼",
    "profile_settings": "ਪ੍ਰੋਫਾਈਲ ਸੈਟਿੰਗਜ਼",
    "my_curriculum": "ਮੇਰਾ ਕਰਿਕੂਲਮ",
    "logout": "ਲੌਗਆਉਟ",
    "name": "ਨਾਮ",
    "student_id": "ਵਿਦਿਆਰਥੀ ਆਈਡੀ",
    "track": "ਟ੍ਰੈਕ",
    "country": "ਦੇਸ਼",
    "registration_date": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮਿਤੀ",
    "loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    "portal_name": "STIU ਵਿਦਿਆਰਥੀ ਪੋਰਟਲ",
    "user": "ਯੂਜ਼ਰ",
    "from_last_month": "ਪਿਛਲੇ ਮਹੀਨੇ ਤੋਂ",
    "of_total": "ਕੁੱਲ ਦਾ",
    "all_rights_reserved": "ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ",
    "version": "ਵਰਜਨ 4.0.0",
    "loading_dashboard": "ਡੈਸ਼ਬੋਰਡ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    "please_wait": "ਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜ਼ਾਰ ਕਰੋ",
    "no_data": "ਕੋਈ ਡਾਟਾ ਨਹੀਂ",
    "try_again": "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    "error": "ਗਲਤੀ",
    "number_of_users": "ਯੂਜ਼ਰਾਂ ਦੀ ਗਿਣਤੀ",
    "saving": "ਸੇਵ ਹੋ ਰਿਹਾ ਹੈ...",
    "loading_data": "ਡਾਟਾ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    "no_users_found": "ਕੋਈ ਯੂਜ਼ਰ ਨਹੀਂ ਮਿਲੇ",
    "view_profile": "ਪ੍ਰੋਫਾਈਲ ਦੇਖੋ",
    "other": "ਹੋਰ",
    "thailand": "ਥਾਈਲੈਂਡ",
    "myanmar": "ਮਿਆਂਮਾਰ",
    "china": "ਚੀਨ",
    "vietnam": "ਵੀਅਤਨਾਮ",
    "software": "ਸਾੱਫਟਵੇਅਰ",
    "ecommerce": "ਈ-ਕਾਮਰਸ",
    "data": "ਡਾਟਾ",
    "network": "ਨੈੱਟਵਰਕ"
  },
  si: {
    "dashboard_title": "ඩෂ්බෝඩ්",
    "welcome": "ශිෂ්‍ය කළමනාකරණ පද්ධති දළ විෂ්ලේෂණය",
    "total_users": "මුළු භාවිත කරන්නන්",
    "software_engineers": "මෘදුකාංග ඉංජිනේරු විද්‍යාව",
    "ecommerce_technology": "ඊ-වාණිජ තාක්ෂණය",
    "data_science": "දත්ත විද්‍යාව",
    "network_security": "ජාල හා ආරක්ෂාව",
    "track_distribution": "විෂය මාර්ග බෙදාහැරීම",
    "country_distribution": "රට අනුව බෙදාහැරීම",
    "recent_registrations": "මෑතකදී ලියාපදිංචි වූවන්",
    "refresh": "නැවුම් කරන්න",
    "profile_settings": "පැතිකඩ සැකසුම්",
    "my_curriculum": "මගේ විෂය මාලාව",
    "logout": "පිටවීම",
    "name": "නම",
    "student_id": "ශිෂ්‍ය අංකය",
    "track": "විෂය මාර්ගය",
    "country": "රට",
    "registration_date": "ලියාපදිංචි දිනය",
    "loading": "යොමු වෙමින්...",
    "portal_name": "STIU ශිෂ්‍ය ද්වාරය",
    "user": "භාවිත කරන්නා",
    "from_last_month": "පසුගිය මාසයේ සිට",
    "of_total": "මුළු ගණනෙන්",
    "all_rights_reserved": "සියලු හිමිකම් ඇවිරිණි",
    "version": "ප්‍රභේදනය 4.0.0",
    "loading_dashboard": "ඩෂ්බෝඩ් යොමු වෙමින්...",
    "please_wait": "කරුණාකර තත්පර කිහිපයක් රැඳී සිටින්න",
    "no_data": "දත්ත නොමැත",
    "try_again": "නැවත උත්සාහ කරන්න",
    "error": "දෝෂය",
    "number_of_users": "භාවිත කරන්නන්ගේ සංඛ්‍යාව",
    "saving": "සුරැකෙමින්...",
    "loading_data": "දත්ත යොමු වෙමින්...",
    "no_users_found": "කිසිදු භාවිත කරන්නෙකු සොයාගත නොහැකි විය",
    "view_profile": "පැතිකඩ බලන්න",
    "other": "වෙනත්",
    "thailand": "තායිලන්තය",
    "myanmar": "මියන්මාරය",
    "china": "චීනය",
    "vietnam": "වියට්නාමය",
    "software": "මෘදුකාංග",
    "ecommerce": "ඊ-වාණිජ",
    "data": "දත්ත",
    "network": "ජාලය"
  }
};

let currentLang = 'en';
let currentUser = null;
let trackChart, countryChart;

// Main initialization function
async function initializeDashboard() {
  try {
    console.log('🔐 Checking authentication...');
    await checkAuthentication();
    
    console.log('🌐 Initializing language...');
    initializeLanguage();
    
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
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  currentLang = savedLang;
  
  // Initialize language dropdown
  initializeLanguageDropdown();
  
  // Apply language - this will override any pre-applied translations
  switchLanguage(savedLang, true);
}

function initializeLanguageDropdown() {
  const languageMenu = document.getElementById('languageMenu');
  const currentLanguageElement = document.getElementById('currentLanguage');
  
  if (!languageMenu) return;
  
  // Clear existing options and add all languages
  languageMenu.innerHTML = '';
  
  // Add all language options in the specified order (matching login.html)
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
        const languageNameOnly = name.split(' ')[0]; // Get language name without flag
        currentLanguageElement.textContent = languageNameOnly;
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

function switchLanguage(lang, initialLoad = false) {
  console.log('🔄 Switching language to:', lang, 'initialLoad:', initialLoad);
  
  if (lang === currentLang && !initialLoad) return;
  
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update dropdown selection
  updateLanguageDropdown();
  
  // Update all text content
  updateAllText();
  
  // Refresh charts with new language
  if (window.firebaseDb) {
    refreshData();
  }
  
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
        const name = languageNames[currentLang] || 'English';
        const languageNameOnly = name.split(' ')[0]; // Get language name without flag
        currentLanguageElement.textContent = languageNameOnly;
      }
    }
  });
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
  
  // Use translations for track labels
  const trackLabels = [
    dashboardTranslations[currentLang].ecommerce_technology || 'E-Commerce Technology',
    dashboardTranslations[currentLang].software_engineers || 'Software Engineering',
    dashboardTranslations[currentLang].data_science || 'Data Science',
    dashboardTranslations[currentLang].network_security || 'Network and Security'
  ];
  
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
    
    // Map country codes to localized names
    if (country === 'other' && user.otherCountry) {
      country = user.otherCountry;
    } else if (country === 'thailand') {
      country = dashboardTranslations[currentLang].thailand || 'Thailand';
    } else if (country === 'myanmar') {
      country = dashboardTranslations[currentLang].myanmar || 'Myanmar';
    } else if (country === 'china') {
      country = dashboardTranslations[currentLang].china || 'China';
    } else if (country === 'vietnam') {
      country = dashboardTranslations[currentLang].vietnam || 'Vietnam';
    } else if (country === 'other') {
      country = dashboardTranslations[currentLang].other || 'Other';
    } else {
      // For any other country, use the original name
      country = country.charAt(0).toUpperCase() + country.slice(1);
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
    const translations = dashboardTranslations[currentLang];
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">
          <i class="fas fa-users"></i>
          <h6 class="text-muted">${translations.no_users_found}</h6>
          <small class="text-muted">${translations.no_data}</small>
        </td>
      </tr>
    `;
    return;
  }
  
  recentUsers.forEach(user => {
    const row = document.createElement('tr');
    row.className = 'user-row';
    row.style.cursor = 'pointer';
    
    // Add click event to view user profile
    row.addEventListener('click', function() {
      console.log('👤 Viewing user profile:', user.id);
      alert(`${dashboardTranslations[currentLang].view_profile}: ${user.firstName} ${user.lastName}`);
    });
    
    let trackDisplay = '';
    let trackBadgeClass = 'bg-primary';
    
    // Map track codes to localized names
    if (user.track === 'software') {
      trackDisplay = dashboardTranslations[currentLang].software_engineers || 'Software Engineering';
      trackBadgeClass = 'bg-primary';
    } else if (user.track === 'ecommerce') {
      trackDisplay = dashboardTranslations[currentLang].ecommerce_technology || 'E-Commerce Technology';
      trackBadgeClass = 'bg-info';
    } else if (user.track === 'data') {
      trackDisplay = dashboardTranslations[currentLang].data_science || 'Data Science';
      trackBadgeClass = 'bg-success';
    } else if (user.track === 'network') {
      trackDisplay = dashboardTranslations[currentLang].network_security || 'Network and Security';
      trackBadgeClass = 'bg-warning';
    }
    
    let countryDisplay = user.country;
    // Map country codes to localized names
    if (user.country === 'thailand') {
      countryDisplay = dashboardTranslations[currentLang].thailand || 'Thailand';
    } else if (user.country === 'myanmar') {
      countryDisplay = dashboardTranslations[currentLang].myanmar || 'Myanmar';
    } else if (user.country === 'china') {
      countryDisplay = dashboardTranslations[currentLang].china || 'China';
    } else if (user.country === 'vietnam') {
      countryDisplay = dashboardTranslations[currentLang].vietnam || 'Vietnam';
    } else if (user.country === 'other' && user.otherCountry) {
      countryDisplay = user.otherCountry;
    } else if (user.country === 'other') {
      countryDisplay = dashboardTranslations[currentLang].other || 'Other';
    }
    
    const regDate = new Date(user.registrationDate);
    const formattedDate = regDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    // Get user initials for avatar
    const initials = (user.firstName?.charAt(0) || '') + (user.lastName?.charAt(0) || '');
    
    row.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <div class="user-avatar">
            ${initials || '<i class="fas fa-user"></i>'}
          </div>
          <div>
            <div class="user-name">${user.firstName} ${user.lastName}</div>
            <div class="user-email">${user.email}</div>
          </div>
        </div>
      </td>
      <td>
        <strong class="text-primary">${user.studentId || 'N/A'}</strong>
      </td>
      <td>
        <span class="badge track-badge ${trackBadgeClass}">${trackDisplay}</span>
      </td>
      <td>
        <div class="d-flex align-items-center">
          <span>${countryDisplay}</span>
        </div>
      </td>
      <td>
        <div class="registration-date">${formattedDate}</div>
        <small class="text-muted">${regDate.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}</small>
      </td>
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
    const translations = dashboardTranslations[currentLang];
    spinner.innerHTML = `
      <div class="text-center">
        <i class="fas fa-exclamation-triangle fa-3x text-danger mb-3"></i>
        <h5 class="text-danger">${translations.error}</h5>
        <p class="text-muted">${message}</p>
        <button class="btn btn-primary mt-2" onclick="location.reload()">
          ${translations.try_again}
        </button>
      </div>
    `;
  }
}

async function refreshData() {
  try {
    console.log('🔄 Refreshing dashboard data...');
    
    // Show loading state in refresh button
    const refreshBtn = document.getElementById('refreshUsers');
    if (refreshBtn) {
      const originalHtml = refreshBtn.innerHTML;
      refreshBtn.disabled = true;
      refreshBtn.innerHTML = `<i class="fas fa-spinner fa-spin me-1"></i>${dashboardTranslations[currentLang].loading}`;
      
      await loadDashboardData();
      
      // Restore button state
      refreshBtn.disabled = false;
      refreshBtn.innerHTML = originalHtml;
    } else {
      await loadDashboardData();
    }
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