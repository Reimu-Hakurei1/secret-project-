// profile.js - Complete with 23-language support matching register-curriculum.js
console.log('🚀 Profile script loaded');

// Language translations for profile page - ALL 23 LANGUAGES
const profileTranslations = {
  en: {
    "profile_title": "Profile Settings - STIU Student Portal",
    "profile_settings": "Profile Settings",
    "dashboard": "Dashboard",
    "my_curriculum": "My Curriculum",
    "logout": "Logout",
    "personal_info": "Personal Information",
    "first_name": "First Name",
    "first_name_placeholder": "Please enter your first name",
    "first_name_error": "Please enter your first name",
    "last_name": "Last Name",
    "last_name_placeholder": "Please enter your last name",
    "last_name_error": "Please enter your last name",
    "student_id": "Student ID",
    "student_id_placeholder": "Please enter your student ID",
    "student_id_error": "Please enter your student ID",
    "contact_info": "Contact Information",
    "email": "Email",
    "email_placeholder": "Please enter your email",
    "email_error": "Please enter a valid email",
    "email_readonly": "Email cannot be changed",
    "country": "Country",
    "select_country": "Select country",
    "bangladesh": "Bangladesh",
    "cambodia": "Cambodia",
    "china": "China",
    "hong_kong": "Hong Kong",
    "india": "India",
    "indonesia": "Indonesia",
    "iran": "Iran",
    "japan": "Japan",
    "korea": "Korea",
    "laos": "Laos",
    "malaysia": "Malaysia",
    "myanmar": "Myanmar",
    "nepal": "Nepal",
    "pakistan": "Pakistan",
    "philippines": "Philippines",
    "russia": "Russia",
    "singapore": "Singapore",
    "sri_lanka": "Sri Lanka",
    "taiwan": "Taiwan",
    "thailand": "Thailand",
    "turkey": "Turkey",
    "vietnam": "Vietnam",
    "other": "Other",
    "country_error": "Please select country",
    "other_country": "Specify Country",
    "other_country_placeholder": "Please specify your country",
    "other_country_error": "Please specify your country",
    "academic_info": "Academic Information",
    "track_label": "Track",
    "select_track": "Select track",
    "track_software": "Software Engineering",
    "track_ecommerce": "E-Commerce Technology",
    "track_data": "Data Science",
    "track_network": "Network and Security",
    "track_error": "Please select a track",
    "year_label": "Year",
    "select_year": "Select year",
    "year1": "Year 1",
    "year2": "Year 2",
    "year3": "Year 3",
    "year4": "Year 4",
    "year_error": "Please select year",
    "term_label": "Term",
    "select_term": "Select term",
    "term1": "Term 1",
    "term2": "Term 2",
    "term3": "Term 3",
    "term_error": "Please select term",
    "save_profile": "Save Changes",
    "save_success": "Profile saved successfully!",
    "loading_profile": "Loading Profile...",
    "please_wait": "Please wait a moment",
    "error_title": "Error!",
    "have_account": "Already have an account?",
    "login_link": "Login",
    "avatar_user": "User",
    "avatar_book": "Book",
    "no_courses_found": "No courses found for this track",
    "saving": "Saving...",
    "try_again": "Try Again"
  },
  zh: {
    "profile_title": "个人资料设置 - STIU学生门户",
    "profile_settings": "个人资料设置",
    "dashboard": "仪表板",
    "my_curriculum": "我的课程",
    "logout": "退出登录",
    "personal_info": "个人信息",
    "first_name": "名字",
    "first_name_placeholder": "请输入您的名字",
    "first_name_error": "请输入您的名字",
    "last_name": "姓氏",
    "last_name_placeholder": "请输入您的姓氏",
    "last_name_error": "请输入您的姓氏",
    "student_id": "学号",
    "student_id_placeholder": "请输入您的学号",
    "student_id_error": "请输入您的学号",
    "contact_info": "联系信息",
    "email": "电子邮件",
    "email_placeholder": "请输入您的电子邮件",
    "email_error": "请输入有效的电子邮件",
    "email_readonly": "无法更改电子邮件",
    "country": "国家",
    "select_country": "选择国家",
    "bangladesh": "孟加拉国",
    "cambodia": "柬埔寨",
    "china": "中国",
    "hong_kong": "香港",
    "india": "印度",
    "indonesia": "印度尼西亚",
    "iran": "伊朗",
    "japan": "日本",
    "korea": "韩国",
    "laos": "老挝",
    "malaysia": "马来西亚",
    "myanmar": "缅甸",
    "nepal": "尼泊尔",
    "pakistan": "巴基斯坦",
    "philippines": "菲律宾",
    "russia": "俄罗斯",
    "singapore": "新加坡",
    "sri_lanka": "斯里兰卡",
    "taiwan": "台湾",
    "thailand": "泰国",
    "turkey": "土耳其",
    "vietnam": "越南",
    "other": "其他",
    "country_error": "请选择国家",
    "other_country": "指定国家",
    "other_country_placeholder": "请指定您的国家",
    "other_country_error": "请指定您的国家",
    "academic_info": "学术信息",
    "track_label": "专业",
    "select_track": "选择专业",
    "track_software": "软件工程",
    "track_ecommerce": "电子商务技术",
    "track_data": "数据科学",
    "track_network": "网络与安全",
    "track_error": "请选择专业",
    "year_label": "年级",
    "select_year": "选择年级",
    "year1": "一年级",
    "year2": "二年级",
    "year3": "三年级",
    "year4": "四年级",
    "year_error": "请选择年级",
    "term_label": "学期",
    "select_term": "选择学期",
    "term1": "第一学期",
    "term2": "第二学期",
    "term3": "第三学期",
    "term_error": "请选择学期",
    "save_profile": "保存更改",
    "save_success": "个人资料保存成功！",
    "loading_profile": "正在加载个人资料...",
    "please_wait": "请稍候",
    "saving": "保存中..."
  },
  ja: {
    "profile_title": "プロフィール設定 - STIU学生ポータル",
    "profile_settings": "プロフィール設定",
    "dashboard": "ダッシュボード",
    "my_curriculum": "私のカリキュラム",
    "logout": "ログアウト",
    "personal_info": "個人情報",
    "first_name": "名",
    "first_name_placeholder": "名を入力してください",
    "first_name_error": "名を入力してください",
    "last_name": "姓",
    "last_name_placeholder": "姓を入力してください",
    "last_name_error": "姓を入力してください",
    "student_id": "学生ID",
    "student_id_placeholder": "学生IDを入力してください",
    "student_id_error": "学生IDを入力してください",
    "contact_info": "連絡先情報",
    "email": "メール",
    "email_placeholder": "メールアドレスを入力してください",
    "email_error": "有効なメールアドレスを入力してください",
    "email_readonly": "メールアドレスは変更できません",
    "country": "国",
    "select_country": "国を選択",
    "bangladesh": "バングラデシュ",
    "cambodia": "カンボジア",
    "china": "中国",
    "hong_kong": "香港",
    "india": "インド",
    "indonesia": "インドネシア",
    "iran": "イラン",
    "japan": "日本",
    "korea": "韓国",
    "laos": "ラオス",
    "malaysia": "マレーシア",
    "myanmar": "ミャンマー",
    "nepal": "ネパール",
    "pakistan": "パキスタン",
    "philippines": "フィリピン",
    "russia": "ロシア",
    "singapore": "シンガポール",
    "sri_lanka": "スリランカ",
    "taiwan": "台湾",
    "thailand": "タイ",
    "turkey": "トルコ",
    "vietnam": "ベトナム",
    "other": "その他",
    "country_error": "国を選択してください",
    "other_country": "国を指定",
    "other_country_placeholder": "国を指定してください",
    "other_country_error": "国を指定してください",
    "academic_info": "学業情報",
    "track_label": "トラック",
    "select_track": "トラックを選択",
    "track_software": "ソフトウェア工学",
    "track_ecommerce": "Eコマース技術",
    "track_data": "データサイエンス",
    "track_network": "ネットワークとセキュリティ",
    "track_error": "トラックを選択してください",
    "year_label": "学年",
    "select_year": "学年を選択",
    "year1": "1年",
    "year2": "2年",
    "year3": "3年",
    "year4": "4年",
    "year_error": "学年を選択してください",
    "term_label": "学期",
    "select_term": "学期を選択",
    "term1": "第1学期",
    "term2": "第2学期",
    "term3": "第3学期",
    "term_error": "学期を選択してください",
    "save_profile": "変更を保存",
    "save_success": "プロフィールを保存しました！",
    "loading_profile": "プロフィールを読み込んでいます...",
    "please_wait": "しばらくお待ちください",
    "saving": "保存中..."
  },
  ko: {
    "profile_title": "프로필 설정 - STIU 학생 포털",
    "profile_settings": "프로필 설정",
    "dashboard": "대시보드",
    "my_curriculum": "내 커리큘럼",
    "logout": "로그아웃",
    "personal_info": "개인 정보",
    "first_name": "이름",
    "first_name_placeholder": "이름을 입력하세요",
    "first_name_error": "이름을 입력하세요",
    "last_name": "성",
    "last_name_placeholder": "성을 입력하세요",
    "last_name_error": "성을 입력하세요",
    "student_id": "학생 ID",
    "student_id_placeholder": "학생 ID를 입력하세요",
    "student_id_error": "학생 ID를 입력하세요",
    "contact_info": "연락처 정보",
    "email": "이메일",
    "email_placeholder": "이메일을 입력하세요",
    "email_error": "유효한 이메일을 입력하세요",
    "email_readonly": "이메일은 변경할 수 없습니다",
    "country": "국가",
    "select_country": "국가 선택",
    "bangladesh": "방글라데시",
    "cambodia": "캄보디아",
    "china": "중국",
    "hong_kong": "홍콩",
    "india": "인도",
    "indonesia": "인도네시아",
    "iran": "이란",
    "japan": "일본",
    "korea": "한국",
    "laos": "라오스",
    "malaysia": "말레이시아",
    "myanmar": "미얀마",
    "nepal": "네팔",
    "pakistan": "파키스탄",
    "philippines": "필리핀",
    "russia": "러시아",
    "singapore": "싱가포르",
    "sri_lanka": "스리랑카",
    "taiwan": "대만",
    "thailand": "태국",
    "turkey": "터키",
    "vietnam": "베트남",
    "other": "기타",
    "country_error": "국가를 선택하세요",
    "other_country": "국가 지정",
    "other_country_placeholder": "국가를 지정하세요",
    "other_country_error": "국가를 지정하세요",
    "academic_info": "학업 정보",
    "track_label": "트랙",
    "select_track": "트랙 선택",
    "track_software": "소프트웨어 공학",
    "track_ecommerce": "전자상거래 기술",
    "track_data": "데이터 과학",
    "track_network": "네트워크 및 보안",
    "track_error": "트랙을 선택하세요",
    "year_label": "학년",
    "select_year": "학년 선택",
    "year1": "1학년",
    "year2": "2학년",
    "year3": "3학년",
    "year4": "4학년",
    "year_error": "학년을 선택하세요",
    "term_label": "학기",
    "select_term": "학기 선택",
    "term1": "1학기",
    "term2": "2학기",
    "term3": "3학기",
    "term_error": "학기를 선택하세요",
    "save_profile": "변경 사항 저장",
    "save_success": "프로필이 저장되었습니다!",
    "loading_profile": "프로필을 불러오는 중...",
    "please_wait": "잠시만 기다려 주세요",
    "saving": "저장 중..."
  },
  ar: {
    "profile_title": "إعدادات الملف الشخصي - بوابة طلاب STIU",
    "profile_settings": "إعدادات الملف الشخصي",
    "dashboard": "لوحة التحكم",
    "my_curriculum": "منهجي الدراسي",
    "logout": "تسجيل الخروج",
    "personal_info": "المعلومات الشخصية",
    "first_name": "الاسم الأول",
    "first_name_placeholder": "الرجاء إدخال اسمك الأول",
    "first_name_error": "الرجاء إدخال اسمك الأول",
    "last_name": "اسم العائلة",
    "last_name_placeholder": "الرجاء إدخال اسم عائلتك",
    "last_name_error": "الرجاء إدخال اسم عائلتك",
    "student_id": "رقم الطالب",
    "student_id_placeholder": "الرجاء إدخال رقم الطالب الخاص بك",
    "student_id_error": "الرجاء إدخال رقم الطالب الخاص بك",
    "contact_info": "معلومات الاتصال",
    "email": "البريد الإلكتروني",
    "email_placeholder": "الرجاء إدخال بريدك الإلكتروني",
    "email_error": "الرجاء إدخال بريد إلكتروني صالح",
    "email_readonly": "لا يمكن تغيير البريد الإلكتروني",
    "country": "البلد",
    "select_country": "اختر البلد",
    "bangladesh": "بنغلاديش",
    "cambodia": "كمبوديا",
    "china": "الصين",
    "hong_kong": "هونغ كونغ",
    "india": "الهند",
    "indonesia": "إندونيسيا",
    "iran": "إيران",
    "japan": "اليابان",
    "korea": "كوريا",
    "laos": "لاوس",
    "malaysia": "ماليزيا",
    "myanmar": "ميانمار",
    "nepal": "نيبال",
    "pakistan": "باكستان",
    "philippines": "الفلبين",
    "russia": "روسيا",
    "singapore": "سنغافورة",
    "sri_lanka": "سريلانكا",
    "taiwan": "تايوان",
    "thailand": "تايلاند",
    "turkey": "تركيا",
    "vietnam": "فيتنام",
    "other": "أخرى",
    "country_error": "الرجاء اختيار البلد",
    "other_country": "تحديد البلد",
    "other_country_placeholder": "الرجاء تحديد بلدك",
    "other_country_error": "الرجاء تحديد بلدك",
    "academic_info": "المعلومات الأكاديمية",
    "track_label": "المسار",
    "select_track": "اختر المسار",
    "track_software": "هندسة البرمجيات",
    "track_ecommerce": "تكنولوجيا التجارة الإلكترونية",
    "track_data": "علوم البيانات",
    "track_network": "الشبكات والأمن",
    "track_error": "الرجاء اختيار مسار",
    "year_label": "السنة",
    "select_year": "اختر السنة",
    "year1": "السنة الأولى",
    "year2": "السنة الثانية",
    "year3": "السنة الثالثة",
    "year4": "السنة الرابعة",
    "year_error": "الرجاء اختيار السنة",
    "term_label": "الفصل الدراسي",
    "select_term": "اختر الفصل الدراسي",
    "term1": "الفصل الأول",
    "term2": "الفصل الثاني",
    "term3": "الفصل الثالث",
    "term_error": "الرجاء اختيار الفصل الدراسي",
    "save_profile": "حفظ التغييرات",
    "save_success": "تم حفظ الملف الشخصي بنجاح!",
    "loading_profile": "جاري تحميل الملف الشخصي...",
    "please_wait": "الرجاء الانتظار لحظة",
    "saving": "جاري الحفظ..."
  },
  hi: {
    "profile_title": "प्रोफाइल सेटिंग - STIU छात्र पोर्टल",
    "profile_settings": "प्रोफाइल सेटिंग",
    "dashboard": "डैशबोर्ड",
    "my_curriculum": "मेरा पाठ्यक्रम",
    "logout": "लॉगआउट",
    "personal_info": "व्यक्तिगत जानकारी",
    "first_name": "पहला नाम",
    "first_name_placeholder": "कृपया अपना पहला नाम दर्ज करें",
    "first_name_error": "कृपया अपना पहला नाम दर्ज करें",
    "last_name": "उपनाम",
    "last_name_placeholder": "कृपया अपना उपनाम दर्ज करें",
    "last_name_error": "कृपया अपना उपनाम दर्ज करें",
    "student_id": "छात्र आईडी",
    "student_id_placeholder": "कृपया अपनी छात्र आईडी दर्ज करें",
    "student_id_error": "कृपया अपनी छात्र आईडी दर्ज करें",
    "contact_info": "संपर्क जानकारी",
    "email": "ईमेल",
    "email_placeholder": "कृपया अपना ईमेल दर्ज करें",
    "email_error": "कृपया एक वैध ईमेल दर्ज करें",
    "email_readonly": "ईमेल बदला नहीं जा सकता",
    "country": "देश",
    "select_country": "देश चुनें",
    "bangladesh": "बांग्लादेश",
    "cambodia": "कंबोडिया",
    "china": "चीन",
    "hong_kong": "हांगकांग",
    "india": "भारत",
    "indonesia": "इंडोनेशिया",
    "iran": "ईरान",
    "japan": "जापान",
    "korea": "कोरिया",
    "laos": "लाओस",
    "malaysia": "मलेशिया",
    "myanmar": "म्यांमार",
    "nepal": "नेपाल",
    "pakistan": "पाकिस्तान",
    "philippines": "फिलिपींस",
    "russia": "रूस",
    "singapore": "सिंगापुर",
    "sri_lanka": "श्रीलंका",
    "taiwan": "ताइवान",
    "thailand": "थाईलैंड",
    "turkey": "तुर्की",
    "vietnam": "वियतनाम",
    "other": "अन्य",
    "country_error": "कृपया देश चुनें",
    "other_country": "देश निर्दिष्ट करें",
    "other_country_placeholder": "कृपया अपना देश निर्दिष्ट करें",
    "other_country_error": "कृपया अपना देश निर्दिष्ट करें",
    "academic_info": "शैक्षिक जानकारी",
    "track_label": "ट्रैक",
    "select_track": "ट्रैक चुनें",
    "track_software": "सॉफ्टवेयर इंजीनियरिंग",
    "track_ecommerce": "ई-कॉमर्स प्रौद्योगिकी",
    "track_data": "डेटा विज्ञान",
    "track_network": "नेटवर्क और सुरक्षा",
    "track_error": "कृपया एक ट्रैक चुनें",
    "year_label": "वर्ष",
    "select_year": "वर्ष चुनें",
    "year1": "वर्ष 1",
    "year2": "वर्ष 2",
    "year3": "वर्ष 3",
    "year4": "वर्ष 4",
    "year_error": "कृपया वर्ष चुनें",
    "term_label": "सेमेस्टर",
    "select_term": "सेमेस्टर चुनें",
    "term1": "सेमेस्टर 1",
    "term2": "सेमेस्टर 2",
    "term3": "सेमेस्टर 3",
    "term_error": "कृपया सेमेस्टर चुनें",
    "save_profile": "परिवर्तन सहेजें",
    "save_success": "प्रोफाइल सफलतापूर्वक सहेजा गया!",
    "loading_profile": "प्रोफाइल लोड हो रहा है...",
    "please_wait": "कृपया प्रतीक्षा करें",
    "saving": "सहेजा जा रहा है..."
  },
  th: {
    "profile_title": "ตั้งค่าโปรไฟล์ - STIU Student Portal",
    "profile_settings": "การตั้งค่าโปรไฟล์",
    "dashboard": "แดชบอร์ด",
    "my_curriculum": "หลักสูตรของฉัน",
    "logout": "ออกจากระบบ",
    "personal_info": "ข้อมูลส่วนตัว",
    "first_name": "ชื่อ",
    "first_name_placeholder": "กรุณากรอกชื่อ",
    "first_name_error": "กรุณากรอกชื่อ",
    "last_name": "นามสกุล",
    "last_name_placeholder": "กรุณากรอกนามสกุล",
    "last_name_error": "กรุณากรอกนามสกุล",
    "student_id": "รหัสนักศึกษา",
    "student_id_placeholder": "กรุณากรอกรหัสนักศึกษา",
    "student_id_error": "กรุณากรอกรหัสนักศึกษา",
    "contact_info": "ข้อมูลการติดต่อ",
    "email": "อีเมล",
    "email_placeholder": "กรุณากรอกอีเมล",
    "email_error": "กรุณากรอกอีเมลที่ถูกต้อง",
    "email_readonly": "ไม่สามารถเปลี่ยนอีเมลได้",
    "country": "ประเทศ",
    "select_country": "เลือกประเทศ",
    "bangladesh": "บังกลาเทศ",
    "cambodia": "กัมพูชา",
    "china": "จีน",
    "hong_kong": "ฮ่องกง",
    "india": "อินเดีย",
    "indonesia": "อินโดนีเซีย",
    "iran": "อิหร่าน",
    "japan": "ญี่ปุ่น",
    "korea": "เกาหลี",
    "laos": "ลาว",
    "malaysia": "มาเลเซีย",
    "myanmar": "เมียนมา",
    "nepal": "เนปาล",
    "pakistan": "ปากีสถาน",
    "philippines": "ฟิลิปปินส์",
    "russia": "รัสเซีย",
    "singapore": "สิงคโปร์",
    "sri_lanka": "ศรีลังกา",
    "taiwan": "ไต้หวัน",
    "thailand": "ไทย",
    "turkey": "ตุรกี",
    "vietnam": "เวียดนาม",
    "other": "อื่นๆ",
    "country_error": "กรุณาเลือกประเทศ",
    "other_country": "ระบุประเทศ",
    "other_country_placeholder": "กรุณาระบุประเทศ",
    "other_country_error": "กรุณาระบุประเทศ",
    "academic_info": "ข้อมูลการศึกษา",
    "track_label": "สาขาวิชา",
    "select_track": "เลือกสาขาวิชา",
    "track_software": "วิศวกรรมซอฟต์แวร์",
    "track_ecommerce": "เทคโนโลยีอีคอมเมิร์ซ",
    "track_data": "วิทยาศาสตร์ข้อมูล",
    "track_network": "เครือข่ายและความปลอดภัย",
    "track_error": "กรุณาเลือกสาขาวิชา",
    "year_label": "ชั้นปี",
    "select_year": "เลือกชั้นปี",
    "year1": "ปี 1",
    "year2": "ปี 2",
    "year3": "ปี 3",
    "year4": "ปี 4",
    "year_error": "กรุณาเลือกชั้นปี",
    "term_label": "ภาคเรียน",
    "select_term": "เลือกภาคเรียน",
    "term1": "ภาคเรียนที่ 1",
    "term2": "ภาคเรียนที่ 2",
    "term3": "ภาคเรียนที่ 3",
    "term_error": "กรุณาเลือกภาคเรียน",
    "save_profile": "บันทึกการเปลี่ยนแปลง",
    "save_success": "บันทึกข้อมูลสำเร็จแล้ว!",
    "loading_profile": "กำลังโหลดโปรไฟล์...",
    "please_wait": "กรุณารอสักครู่",
    "saving": "กำลังบันทึก..."
  },
  vi: {
    "profile_title": "Cài đặt hồ sơ - Cổng thông tin sinh viên STIU",
    "profile_settings": "Cài đặt hồ sơ",
    "dashboard": "Bảng điều khiển",
    "my_curriculum": "Chương trình học của tôi",
    "logout": "Đăng xuất",
    "personal_info": "Thông tin cá nhân",
    "first_name": "Tên",
    "first_name_placeholder": "Vui lòng nhập tên của bạn",
    "first_name_error": "Vui lòng nhập tên của bạn",
    "last_name": "Họ",
    "last_name_placeholder": "Vui lòng nhập họ của bạn",
    "last_name_error": "Vui lòng nhập họ của bạn",
    "student_id": "Mã sinh viên",
    "student_id_placeholder": "Vui lòng nhập mã sinh viên của bạn",
    "student_id_error": "Vui lòng nhập mã sinh viên của bạn",
    "contact_info": "Thông tin liên hệ",
    "email": "Email",
    "email_placeholder": "Vui lòng nhập email của bạn",
    "email_error": "Vui lòng nhập email hợp lệ",
    "email_readonly": "Không thể thay đổi email",
    "country": "Quốc gia",
    "select_country": "Chọn quốc gia",
    "bangladesh": "Bangladesh",
    "cambodia": "Campuchia",
    "china": "Trung Quốc",
    "hong_kong": "Hồng Kông",
    "india": "Ấn Độ",
    "indonesia": "Indonesia",
    "iran": "Iran",
    "japan": "Nhật Bản",
    "korea": "Hàn Quốc",
    "laos": "Lào",
    "malaysia": "Malaysia",
    "myanmar": "Myanmar",
    "nepal": "Nepal",
    "pakistan": "Pakistan",
    "philippines": "Philippines",
    "russia": "Nga",
    "singapore": "Singapore",
    "sri_lanka": "Sri Lanka",
    "taiwan": "Đài Loan",
    "thailand": "Thái Lan",
    "turkey": "Thổ Nhĩ Kỳ",
    "vietnam": "Việt Nam",
    "other": "Khác",
    "country_error": "Vui lòng chọn quốc gia",
    "other_country": "Chỉ định quốc gia",
    "other_country_placeholder": "Vui lòng chỉ định quốc gia của bạn",
    "other_country_error": "Vui lòng chỉ định quốc gia của bạn",
    "academic_info": "Thông tin học vấn",
    "track_label": "Chuyên ngành",
    "select_track": "Chọn chuyên ngành",
    "track_software": "Kỹ thuật phần mềm",
    "track_ecommerce": "Công nghệ thương mại điện tử",
    "track_data": "Khoa học dữ liệu",
    "track_network": "Mạng và bảo mật",
    "track_error": "Vui lòng chọn chuyên ngành",
    "year_label": "Năm học",
    "select_year": "Chọn năm",
    "year1": "Năm 1",
    "year2": "Năm 2",
    "year3": "Năm 3",
    "year4": "Năm 4",
    "year_error": "Vui lòng chọn năm",
    "term_label": "Học kỳ",
    "select_term": "Chọn học kỳ",
    "term1": "Học kỳ 1",
    "term2": "Học kỳ 2",
    "term3": "Học kỳ 3",
    "term_error": "Vui lòng chọn học kỳ",
    "save_profile": "Lưu thay đổi",
    "save_success": "Đã lưu hồ sơ thành công!",
    "loading_profile": "Đang tải hồ sơ...",
    "please_wait": "Vui lòng đợi một chút",
    "saving": "Đang lưu..."
  },
  id: {
    "profile_title": "Pengaturan Profil - Portal Mahasiswa STIU",
    "profile_settings": "Pengaturan Profil",
    "dashboard": "Dasbor",
    "my_curriculum": "Kurikulum Saya",
    "logout": "Keluar",
    "personal_info": "Informasi Pribadi",
    "first_name": "Nama Depan",
    "first_name_placeholder": "Masukkan nama depan Anda",
    "first_name_error": "Masukkan nama depan Anda",
    "last_name": "Nama Belakang",
    "last_name_placeholder": "Masukkan nama belakang Anda",
    "last_name_error": "Masukkan nama belakang Anda",
    "student_id": "ID Mahasiswa",
    "student_id_placeholder": "Masukkan ID mahasiswa Anda",
    "student_id_error": "Masukkan ID mahasiswa Anda",
    "contact_info": "Informasi Kontak",
    "email": "Email",
    "email_placeholder": "Masukkan email Anda",
    "email_error": "Masukkan email yang valid",
    "email_readonly": "Email tidak dapat diubah",
    "country": "Negara",
    "select_country": "Pilih negara",
    "bangladesh": "Bangladesh",
    "cambodia": "Kamboja",
    "china": "Tiongkok",
    "hong_kong": "Hong Kong",
    "india": "India",
    "indonesia": "Indonesia",
    "iran": "Iran",
    "japan": "Jepang",
    "korea": "Korea",
    "laos": "Laos",
    "malaysia": "Malaysia",
    "myanmar": "Myanmar",
    "nepal": "Nepal",
    "pakistan": "Pakistan",
    "philippines": "Filipina",
    "russia": "Rusia",
    "singapore": "Singapura",
    "sri_lanka": "Sri Lanka",
    "taiwan": "Taiwan",
    "thailand": "Thailand",
    "turkey": "Turki",
    "vietnam": "Vietnam",
    "other": "Lainnya",
    "country_error": "Pilih negara",
    "other_country": "Tentukan Negara",
    "other_country_placeholder": "Tentukan negara Anda",
    "other_country_error": "Tentukan negara Anda",
    "academic_info": "Informasi Akademik",
    "track_label": "Jalur",
    "select_track": "Pilih jalur",
    "track_software": "Rekayasa Perangkat Lunak",
    "track_ecommerce": "Teknologi E-Commerce",
    "track_data": "Ilmu Data",
    "track_network": "Jaringan dan Keamanan",
    "track_error": "Pilih jalur",
    "year_label": "Tahun",
    "select_year": "Pilih tahun",
    "year1": "Tahun 1",
    "year2": "Tahun 2",
    "year3": "Tahun 3",
    "year4": "Tahun 4",
    "year_error": "Pilih tahun",
    "term_label": "Semester",
    "select_term": "Pilih semester",
    "term1": "Semester 1",
    "term2": "Semester 2",
    "term3": "Semester 3",
    "term_error": "Pilih semester",
    "save_profile": "Simpan Perubahan",
    "save_success": "Profil berhasil disimpan!",
    "loading_profile": "Memuat Profil...",
    "please_wait": "Harap tunggu sebentar",
    "saving": "Menyimpan..."
  },
  ms: {
    "profile_title": "Tetapan Profil - Portal Pelajar STIU",
    "profile_settings": "Tetapan Profil",
    "dashboard": "Papan Pemuka",
    "my_curriculum": "Kurikulum Saya",
    "logout": "Log Keluar",
    "personal_info": "Maklumat Peribadi",
    "first_name": "Nama Pertama",
    "first_name_placeholder": "Sila masukkan nama pertama anda",
    "first_name_error": "Sila masukkan nama pertama anda",
    "last_name": "Nama Akhir",
    "last_name_placeholder": "Sila masukkan nama akhir anda",
    "last_name_error": "Sila masukkan nama akhir anda",
    "student_id": "ID Pelajar",
    "student_id_placeholder": "Sila masukkan ID pelajar anda",
    "student_id_error": "Sila masukkan ID pelajar anda",
    "contact_info": "Maklumat Hubungan",
    "email": "E-mel",
    "email_placeholder": "Sila masukkan e-mel anda",
    "email_error": "Sila masukkan e-mel yang sah",
    "email_readonly": "E-mel tidak boleh diubah",
    "country": "Negara",
    "select_country": "Pilih negara",
    "bangladesh": "Bangladesh",
    "cambodia": "Kemboja",
    "china": "China",
    "hong_kong": "Hong Kong",
    "india": "India",
    "indonesia": "Indonesia",
    "iran": "Iran",
    "japan": "Jepun",
    "korea": "Korea",
    "laos": "Laos",
    "malaysia": "Malaysia",
    "myanmar": "Myanmar",
    "nepal": "Nepal",
    "pakistan": "Pakistan",
    "philippines": "Filipina",
    "russia": "Rusia",
    "singapore": "Singapura",
    "sri_lanka": "Sri Lanka",
    "taiwan": "Taiwan",
    "thailand": "Thailand",
    "turkey": "Turki",
    "vietnam": "Vietnam",
    "other": "Lain-lain",
    "country_error": "Sila pilih negara",
    "other_country": "Nyatakan Negara",
    "other_country_placeholder": "Sila nyatakan negara anda",
    "other_country_error": "Sila nyatakan negara anda",
    "academic_info": "Maklumat Akademik",
    "track_label": "Trek",
    "select_track": "Pilih trek",
    "track_software": "Kejuruteraan Perisian",
    "track_ecommerce": "Teknologi E-Dagang",
    "track_data": "Sains Data",
    "track_network": "Rangkaian dan Keselamatan",
    "track_error": "Sila pilih trek",
    "year_label": "Tahun",
    "select_year": "Pilih tahun",
    "year1": "Tahun 1",
    "year2": "Tahun 2",
    "year3": "Tahun 3",
    "year4": "Tahun 4",
    "year_error": "Sila pilih tahun",
    "term_label": "Semester",
    "select_term": "Pilih semester",
    "term1": "Semester 1",
    "term2": "Semester 2",
    "term3": "Semester 3",
    "term_error": "Sila pilih semester",
    "save_profile": "Simpan Perubahan",
    "save_success": "Profil berjaya disimpan!",
    "loading_profile": "Memuatkan Profil...",
    "please_wait": "Sila tunggu sebentar",
    "saving": "Menyimpan..."
  },
  ru: {
    "profile_title": "Настройки профиля - Студенческий портал STIU",
    "profile_settings": "Настройки профиля",
    "dashboard": "Панель управления",
    "my_curriculum": "Мой учебный план",
    "logout": "Выйти",
    "personal_info": "Личная информация",
    "first_name": "Имя",
    "first_name_placeholder": "Пожалуйста, введите ваше имя",
    "first_name_error": "Пожалуйста, введите ваше имя",
    "last_name": "Фамилия",
    "last_name_placeholder": "Пожалуйста, введите вашу фамилию",
    "last_name_error": "Пожалуйста, введите вашу фамилию",
    "student_id": "Студенческий ID",
    "student_id_placeholder": "Пожалуйста, введите ваш студенческий ID",
    "student_id_error": "Пожалуйста, введите ваш студенческий ID",
    "contact_info": "Контактная информация",
    "email": "Электронная почта",
    "email_placeholder": "Пожалуйста, введите вашу электронную почту",
    "email_error": "Пожалуйста, введите действительный адрес электронной почты",
    "email_readonly": "Электронную почту нельзя изменить",
    "country": "Страна",
    "select_country": "Выберите страну",
    "bangladesh": "Бангладеш",
    "cambodia": "Камбоджа",
    "china": "Китай",
    "hong_kong": "Гонконг",
    "india": "Индия",
    "indonesia": "Индонезия",
    "iran": "Иран",
    "japan": "Япония",
    "korea": "Корея",
    "laos": "Лаос",
    "malaysia": "Малайзия",
    "myanmar": "Мьянма",
    "nepal": "Непал",
    "pakistan": "Пакистан",
    "philippines": "Филиппины",
    "russia": "Россия",
    "singapore": "Сингапур",
    "sri_lanka": "Шри-Ланка",
    "taiwan": "Тайвань",
    "thailand": "Таиланд",
    "turkey": "Турция",
    "vietnam": "Вьетнам",
    "other": "Другая",
    "country_error": "Пожалуйста, выберите страну",
    "other_country": "Укажите страну",
    "other_country_placeholder": "Пожалуйста, укажите вашу страну",
    "other_country_error": "Пожалуйста, укажите вашу страну",
    "academic_info": "Учебная информация",
    "track_label": "Направление",
    "select_track": "Выберите направление",
    "track_software": "Программная инженерия",
    "track_ecommerce": "Технологии электронной коммерции",
    "track_data": "Наука о данных",
    "track_network": "Сети и безопасность",
    "track_error": "Пожалуйста, выберите направление",
    "year_label": "Курс",
    "select_year": "Выберите курс",
    "year1": "1 курс",
    "year2": "2 курс",
    "year3": "3 курс",
    "year4": "4 курс",
    "year_error": "Пожалуйста, выберите курс",
    "term_label": "Семестр",
    "select_term": "Выберите семестр",
    "term1": "Семестр 1",
    "term2": "Семестр 2",
    "term3": "Семестр 3",
    "term_error": "Пожалуйста, выберите семестр",
    "save_profile": "Сохранить изменения",
    "save_success": "Профиль успешно сохранен!",
    "loading_profile": "Загрузка профиля...",
    "please_wait": "Пожалуйста, подождите",
    "saving": "Сохранение..."
  },
  ur: {
    "profile_title": "پروفائل سیٹنگز - STIU سٹوڈنٹ پورٹل",
    "profile_settings": "پروفائل سیٹنگز",
    "dashboard": "ڈیش بورڈ",
    "my_curriculum": "میرا نصاب",
    "logout": "لاگ آؤٹ",
    "personal_info": "ذاتی معلومات",
    "first_name": "پہلا نام",
    "first_name_placeholder": "براہ کرم اپنا پہلا نام درج کریں",
    "first_name_error": "براہ کرم اپنا پہلا نام درج کریں",
    "last_name": "آخری نام",
    "last_name_placeholder": "براہ کرم اپنا آخری نام درج کریں",
    "last_name_error": "براہ کرم اپنا آخری نام درج کریں",
    "student_id": "طالب علم آئی ڈی",
    "student_id_placeholder": "براہ کرم اپنا طالب علم آئی ڈی درج کریں",
    "student_id_error": "براہ کرم اپنا طالب علم آئی ڈی درج کریں",
    "contact_info": "رابطے کی معلومات",
    "email": "ای میل",
    "email_placeholder": "براہ کرم اپنا ای میل درج کریں",
    "email_error": "براہ کرم ایک درست ای میل درج کریں",
    "email_readonly": "ای میل تبدیل نہیں کی جا سکتی",
    "country": "ملک",
    "select_country": "ملک منتخب کریں",
    "bangladesh": "بنگلہ دیش",
    "cambodia": "کمبوڈیا",
    "china": "چین",
    "hong_kong": "ہانگ کانگ",
    "india": "بھارت",
    "indonesia": "انڈونیشیا",
    "iran": "ایران",
    "japan": "جاپان",
    "korea": "کوریا",
    "laos": "لاؤس",
    "malaysia": "ملائیشیا",
    "myanmar": "میانمار",
    "nepal": "نیپال",
    "pakistan": "پاکستان",
    "philippines": "فلپائن",
    "russia": "روس",
    "singapore": "سنگاپور",
    "sri_lanka": "سری لنکا",
    "taiwan": "تائیوان",
    "thailand": "تھائی لینڈ",
    "turkey": "ترکی",
    "vietnam": "ویتنام",
    "other": "دیگر",
    "country_error": "براہ کرم ملک منتخب کریں",
    "other_country": "ملک بتائیں",
    "other_country_placeholder": "براہ کرم اپنا ملک بتائیں",
    "other_country_error": "براہ کرم اپنا ملک بتائیں",
    "academic_info": "تعلیمی معلومات",
    "track_label": "ٹریک",
    "select_track": "ٹریک منتخب کریں",
    "track_software": "سافٹ ویئر انجینئرنگ",
    "track_ecommerce": "ای کامرس ٹیکنالوجی",
    "track_data": "ڈیٹا سائنس",
    "track_network": "نیٹ ورک اور سیکورٹی",
    "track_error": "براہ کرم ایک ٹریک منتخب کریں",
    "year_label": "سال",
    "select_year": "سال منتخب کریں",
    "year1": "سال 1",
    "year2": "سال 2",
    "year3": "سال 3",
    "year4": "سال 4",
    "year_error": "براہ کرم سال منتخب کریں",
    "term_label": "ٹرم",
    "select_term": "ٹرم منتخب کریں",
    "term1": "ٹرم 1",
    "term2": "ٹرم 2",
    "term3": "ٹرم 3",
    "term_error": "براہ کرم ٹرم منتخب کریں",
    "save_profile": "تبدیلیاں محفوظ کریں",
    "save_success": "پروفائل کامیابی سے محفوظ ہوگیا!",
    "loading_profile": "پروفائل لوڈ ہو رہا ہے...",
    "please_wait": "براہ کرم انتظار کریں",
    "saving": "محفوظ ہو رہا ہے..."
  },
  tr: {
    "profile_title": "Profil Ayarları - STIU Öğrenci Portalı",
    "profile_settings": "Profil Ayarları",
    "dashboard": "Kontrol Paneli",
    "my_curriculum": "Müfredatım",
    "logout": "Çıkış Yap",
    "personal_info": "Kişisel Bilgiler",
    "first_name": "Ad",
    "first_name_placeholder": "Lütfen adınızı girin",
    "first_name_error": "Lütfen adınızı girin",
    "last_name": "Soyad",
    "last_name_placeholder": "Lütfen soyadınızı girin",
    "last_name_error": "Lütfen soyadınızı girin",
    "student_id": "Öğrenci Numarası",
    "student_id_placeholder": "Lütfen öğrenci numaranızı girin",
    "student_id_error": "Lütfen öğrenci numaranızı girin",
    "contact_info": "İletişim Bilgileri",
    "email": "E-posta",
    "email_placeholder": "Lütfen e-posta adresinizi girin",
    "email_error": "Lütfen geçerli bir e-posta adresi girin",
    "email_readonly": "E-posta değiştirilemez",
    "country": "Ülke",
    "select_country": "Ülke seçin",
    "bangladesh": "Bangladeş",
    "cambodia": "Kamboçya",
    "china": "Çin",
    "hong_kong": "Hong Kong",
    "india": "Hindistan",
    "indonesia": "Endonezya",
    "iran": "İran",
    "japan": "Japonya",
    "korea": "Kore",
    "laos": "Laos",
    "malaysia": "Malezya",
    "myanmar": "Myanmar",
    "nepal": "Nepal",
    "pakistan": "Pakistan",
    "philippines": "Filipinler",
    "russia": "Rusya",
    "singapore": "Singapur",
    "sri_lanka": "Sri Lanka",
    "taiwan": "Tayvan",
    "thailand": "Tayland",
    "turkey": "Türkiye",
    "vietnam": "Vietnam",
    "other": "Diğer",
    "country_error": "Lütfen ülke seçin",
    "other_country": "Ülke Belirt",
    "other_country_placeholder": "Lütfen ülkenizi belirtin",
    "other_country_error": "Lütfen ülkenizi belirtin",
    "academic_info": "Akademik Bilgiler",
    "track_label": "Bölüm",
    "select_track": "Bölüm seçin",
    "track_software": "Yazılım Mühendisliği",
    "track_ecommerce": "E-Ticaret Teknolojisi",
    "track_data": "Veri Bilimi",
    "track_network": "Ağ ve Güvenlik",
    "track_error": "Lütfen bir bölüm seçin",
    "year_label": "Yıl",
    "select_year": "Yıl seçin",
    "year1": "1. Yıl",
    "year2": "2. Yıl",
    "year3": "3. Yıl",
    "year4": "4. Yıl",
    "year_error": "Lütfen yıl seçin",
    "term_label": "Dönem",
    "select_term": "Dönem seçin",
    "term1": "1. Dönem",
    "term2": "2. Dönem",
    "term3": "3. Dönem",
    "term_error": "Lütfen dönem seçin",
    "save_profile": "Değişiklikleri Kaydet",
    "save_success": "Profil başarıyla kaydedildi!",
    "loading_profile": "Profil Yükleniyor...",
    "please_wait": "Lütfen bekleyin",
    "saving": "Kaydediliyor..."
  },
  fa: {
    "profile_title": "تنظیمات پروفایل - پورتال دانشجویی STIU",
    "profile_settings": "تنظیمات پروفایل",
    "dashboard": "داشبورد",
    "my_curriculum": "برنامه درسی من",
    "logout": "خروج",
    "personal_info": "اطلاعات شخصی",
    "first_name": "نام",
    "first_name_placeholder": "لطفا نام خود را وارد کنید",
    "first_name_error": "لطفا نام خود را وارد کنید",
    "last_name": "نام خانوادگی",
    "last_name_placeholder": "لطفا نام خانوادگی خود را وارد کنید",
    "last_name_error": "لطفا نام خانوادگی خود را وارد کنید",
    "student_id": "شماره دانشجویی",
    "student_id_placeholder": "لطفا شماره دانشجویی خود را وارد کنید",
    "student_id_error": "لطفا شماره دانشجویی خود را وارد کنید",
    "contact_info": "اطلاعات تماس",
    "email": "ایمیل",
    "email_placeholder": "لطفا ایمیل خود را وارد کنید",
    "email_error": "لطفا یک ایمیل معتبر وارد کنید",
    "email_readonly": "ایمیل قابل تغییر نیست",
    "country": "کشور",
    "select_country": "کشور را انتخاب کنید",
    "bangladesh": "بنگلادش",
    "cambodia": "کامبوج",
    "china": "چین",
    "hong_kong": "هنگ کنگ",
    "india": "هند",
    "indonesia": "اندونزی",
    "iran": "ایران",
    "japan": "ژاپن",
    "korea": "کره",
    "laos": "لائوس",
    "malaysia": "مالزی",
    "myanmar": "میانمار",
    "nepal": "نپال",
    "pakistan": "پاکستان",
    "philippines": "فیلیپین",
    "russia": "روسیه",
    "singapore": "سنگاپور",
    "sri_lanka": "سریلانکا",
    "taiwan": "تایوان",
    "thailand": "تایلند",
    "turkey": "ترکیه",
    "vietnam": "ویتنام",
    "other": "سایر",
    "country_error": "لطفا کشور را انتخاب کنید",
    "other_country": "مشخص کردن کشور",
    "other_country_placeholder": "لطفا کشور خود را مشخص کنید",
    "other_country_error": "لطفا کشور خود را مشخص کنید",
    "academic_info": "اطلاعات تحصیلی",
    "track_label": "رشته",
    "select_track": "رشته را انتخاب کنید",
    "track_software": "مهندسی نرم افزار",
    "track_ecommerce": "فناوری تجارت الکترونیک",
    "track_data": "علم داده",
    "track_network": "شبکه و امنیت",
    "track_error": "لطفا یک رشته انتخاب کنید",
    "year_label": "سال",
    "select_year": "سال را انتخاب کنید",
    "year1": "سال 1",
    "year2": "سال 2",
    "year3": "سال 3",
    "year4": "سال 4",
    "year_error": "لطفا سال را انتخاب کنید",
    "term_label": "ترم",
    "select_term": "ترم را انتخاب کنید",
    "term1": "ترم 1",
    "term2": "ترم 2",
    "term3": "ترم 3",
    "term_error": "لطفا ترم را انتخاب کنید",
    "save_profile": "ذخیره تغییرات",
    "save_success": "پروفایل با موفقیت ذخیره شد!",
    "loading_profile": "در حال بارگذاری پروفایل...",
    "please_wait": "لطفاً منتظر بمانید",
    "saving": "در حال ذخیره..."
  },
  ta: {
    "profile_title": "சுயவிவர அமைப்புகள் - STIU மாணவர் போர்டல்",
    "profile_settings": "சுயவிவர அமைப்புகள்",
    "dashboard": "டாஷ்போர்டு",
    "my_curriculum": "எனது பாடத்திட்டம்",
    "logout": "வெளியேறு",
    "personal_info": "தனிப்பட்ட தகவல்",
    "first_name": "முதல் பெயர்",
    "first_name_placeholder": "உங்கள் முதல் பெயரை உள்ளிடவும்",
    "first_name_error": "உங்கள் முதல் பெயரை உள்ளிடவும்",
    "last_name": "கடைசி பெயர்",
    "last_name_placeholder": "உங்கள் கடைசி பெயரை உள்ளிடவும்",
    "last_name_error": "உங்கள் கடைசி பெயரை உள்ளிடவும்",
    "student_id": "மாணவர் ஐடி",
    "student_id_placeholder": "உங்கள் மாணவர் ஐடியை உள்ளிடவும்",
    "student_id_error": "உங்கள் மாணவர் ஐடியை உள்ளிடவும்",
    "contact_info": "தொடர்பு தகவல்",
    "email": "மின்னஞ்சல்",
    "email_placeholder": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    "email_error": "சரியான மின்னஞ்சலை உள்ளிடவும்",
    "email_readonly": "மின்னஞ்சலை மாற்ற முடியாது",
    "country": "நாடு",
    "select_country": "நாட்டைத் தேர்ந்தெடுக்கவும்",
    "bangladesh": "பங்களாதேஷ்",
    "cambodia": "கம்போடியா",
    "china": "சீனா",
    "hong_kong": "ஹாங்காங்",
    "india": "இந்தியா",
    "indonesia": "இந்தோனேசியா",
    "iran": "ஈரான்",
    "japan": "ஜப்பான்",
    "korea": "கொரியா",
    "laos": "லாவோஸ்",
    "malaysia": "மலேசியா",
    "myanmar": "மியான்மர்",
    "nepal": "நேபாளம்",
    "pakistan": "பாகிஸ்தான்",
    "philippines": "பிலிப்பைன்ஸ்",
    "russia": "ரஷ்யா",
    "singapore": "சிங்கப்பூர்",
    "sri_lanka": "இலங்கை",
    "taiwan": "தைவான்",
    "thailand": "தாய்லாந்து",
    "turkey": "துருக்கி",
    "vietnam": "வியட்நாம்",
    "other": "மற்றவை",
    "country_error": "நாட்டைத் தேர்ந்தெடுக்கவும்",
    "other_country": "நாட்டைக் குறிப்பிடவும்",
    "other_country_placeholder": "உங்கள் நாட்டைக் குறிப்பிடவும்",
    "other_country_error": "உங்கள் நாட்டைக் குறிப்பிடவும்",
    "academic_info": "கல்வி தகவல்",
    "track_label": "பாடப்பிரிவு",
    "select_track": "பாடப்பிரிவைத் தேர்ந்தெடுக்கவும்",
    "track_software": "மென்பொருள் பொறியியல்",
    "track_ecommerce": "மின்வணிக தொழில்நுட்பம்",
    "track_data": "தரவு அறிவியல்",
    "track_network": "பிணையம் மற்றும் பாதுகாப்பு",
    "track_error": "பாடப்பிரிவைத் தேர்ந்தெடுக்கவும்",
    "year_label": "ஆண்டு",
    "select_year": "ஆண்டைத் தேர்ந்தெடுக்கவும்",
    "year1": "ஆண்டு 1",
    "year2": "ஆண்டு 2",
    "year3": "ஆண்டு 3",
    "year4": "ஆண்டு 4",
    "year_error": "ஆண்டைத் தேர்ந்தெடுக்கவும்",
    "term_label": "சொல்",
    "select_term": "சொல்லைத் தேர்ந்தெடுக்கவும்",
    "term1": "சொல் 1",
    "term2": "சொல் 2",
    "term3": "சொல் 3",
    "term_error": "சொல்லைத் தேர்ந்தெடுக்கவும்",
    "save_profile": "மாற்றங்களைச் சேமிக்கவும்",
    "save_success": "சுயவிவரம் வெற்றிகரமாக சேமிக்கப்பட்டது!",
    "loading_profile": "சுயவிவரம் ஏற்றுகிறது...",
    "please_wait": "தயவு செய்து காத்திருக்கவும்",
    "saving": "சேமிக்கப்படுகிறது..."
  },
  te: {
    "profile_title": "ప్రొఫైల్ సెట్టింగ్‌లు - STIU విద్యార్థి పోర్టల్",
    "profile_settings": "ప్రొఫైల్ సెట్టింగ్‌లు",
    "dashboard": "డాష్బోర్డ్",
    "my_curriculum": "నా పాఠ్యప్రణాళిక",
    "logout": "లాగ్అవుట్",
    "personal_info": "వ్యక్తిగత సమాచారం",
    "first_name": "మొదటి పేరు",
    "first_name_placeholder": "దయచేసి మీ మొదటి పేరు నమోదు చేయండి",
    "first_name_error": "దయచేసి మీ మొదటి పేరు నమోదు చేయండి",
    "last_name": "చివరి పేరు",
    "last_name_placeholder": "దయచేసి మీ చివరి పేరు నమోదు చేయండి",
    "last_name_error": "దయచేసి మీ చివరి పేరు నమోదు చేయండి",
    "student_id": "విద్యార్థి ఐడి",
    "student_id_placeholder": "దయచేసి మీ విద్యార్థి ఐడి నమోదు చేయండి",
    "student_id_error": "దయచేసి మీ విద్యార్థి ఐడి నమోదు చేయండి",
    "contact_info": "సంప్రదింపు సమాచారం",
    "email": "ఇమెయిల్",
    "email_placeholder": "దయచేసి మీ ఇమెయిల్ నమోదు చేయండి",
    "email_error": "దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ నమోదు చేయండి",
    "email_readonly": "ఇమెయిల్ మార్చలేరు",
    "country": "దేశం",
    "select_country": "దేశాన్ని ఎంచుకోండి",
    "bangladesh": "బంగ్లాదేశ్",
    "cambodia": "కంబోడియా",
    "china": "చైనా",
    "hong_kong": "హాంగ్ కాంగ్",
    "india": "భారతదేశం",
    "indonesia": "ఇండోనేషియా",
    "iran": "ఇరాన్",
    "japan": "జపాన్",
    "korea": "కొరియా",
    "laos": "లావోస్",
    "malaysia": "మలేషియా",
    "myanmar": "మయన్మార్",
    "nepal": "నేపాల్",
    "pakistan": "పాకిస్తాన్",
    "philippines": "ఫిలిప్పీన్స్",
    "russia": "రష్యా",
    "singapore": "సింగపూర్",
    "sri_lanka": "శ్రీలంక",
    "taiwan": "తైవాన్",
    "thailand": "థాయిలాండ్",
    "turkey": "టర్కీ",
    "vietnam": "వియత్నాం",
    "other": "ఇతర",
    "country_error": "దయచేసి దేశాన్ని ఎంచుకోండి",
    "other_country": "దేశాన్ని నిర్దిష్టం చేయండి",
    "other_country_placeholder": "దయచేసి మీ దేశాన్ని నిర్దిష్టం చేయండి",
    "other_country_error": "దయచేసి మీ దేశాన్ని నిర్దిష్టం చేయండి",
    "academic_info": "అకడమిక్ సమాచారం",
    "track_label": "ట్రాక్",
    "select_track": "ట్రాక్ ఎంచుకోండి",
    "track_software": "సాఫ్ట్‌వేర్ ఇంజనీరింగ్",
    "track_ecommerce": "ఇ-కామర్స్ టెక్నాలజీ",
    "track_data": "డేటా సైన్స్",
    "track_network": "నెట్‌వర్క్ మరియు సెక్యూరిటీ",
    "track_error": "దయచేసి ట్రాక్ ఎంచుకోండి",
    "year_label": "సంవత్సరం",
    "select_year": "సంవత్సరం ఎంచుకోండి",
    "year1": "సంవత్సరం 1",
    "year2": "సంవత్సరం 2",
    "year3": "సంవత్సరం 3",
    "year4": "సంవత్సరం 4",
    "year_error": "దయచేసి సంవత్సరం ఎంచుకోండి",
    "term_label": "టెర్మ్",
    "select_term": "టెర్మ్ ఎంచుకోండి",
    "term1": "టెర్మ్ 1",
    "term2": "టెర్మ్ 2",
    "term3": "టెర్మ్ 3",
    "term_error": "దయచేసి టెర్మ్ ఎంచుకోండి",
    "save_profile": "మార్పులను సేవ్ చేయండి",
    "save_success": "ప్రొఫైల్ విజయవంతంగా సేవ్ చేయబడింది!",
    "loading_profile": "ప్రొఫైల్ లోడ్ అవుతోంది...",
    "please_wait": "దయచేసి కాసేపు వేచి ఉండండి",
    "saving": "సేవ్ చేయబడుతోంది..."
  },
  bn: {
    "profile_title": "প্রোফাইল সেটিংস - STIU শিক্ষার্থী পোর্টাল",
    "profile_settings": "প্রোফাইল সেটিংস",
    "dashboard": "ড্যাশবোর্ড",
    "my_curriculum": "আমার পাঠ্যক্রম",
    "logout": "লগআউট",
    "personal_info": "ব্যক্তিগত তথ্য",
    "first_name": "নামের প্রথম অংশ",
    "first_name_placeholder": "দয়া করে আপনার নামের প্রথম অংশ লিখুন",
    "first_name_error": "দয়া করে আপনার নামের প্রথম অংশ লিখুন",
    "last_name": "নামের শেষাংশ",
    "last_name_placeholder": "দয়া করে আপনার নামের শেষাংশ লিখুন",
    "last_name_error": "দয়া করে আপনার নামের শেষাংশ লিখুন",
    "student_id": "ছাত্র আইডি",
    "student_id_placeholder": "দয়া করে আপনার ছাত্র আইডি লিখুন",
    "student_id_error": "দয়া করে আপনার ছাত্র আইডি লিখুন",
    "contact_info": "যোগাযোগের তথ্য",
    "email": "ইমেইল",
    "email_placeholder": "দয়া করে আপনার ইমেইল লিখুন",
    "email_error": "দয়া করে একটি বৈধ ইমেইল লিখুন",
    "email_readonly": "ইমেইল পরিবর্তন করা যাবে না",
    "country": "দেশ",
    "select_country": "দেশ নির্বাচন করুন",
    "bangladesh": "বাংলাদেশ",
    "cambodia": "কম্বোডিয়া",
    "china": "চীন",
    "hong_kong": "হংকং",
    "india": "ভারত",
    "indonesia": "ইন্দোনেশিয়া",
    "iran": "ইরান",
    "japan": "জাপান",
    "korea": "কোরিয়া",
    "laos": "লাওস",
    "malaysia": "মালয়েশিয়া",
    "myanmar": "মিয়ানমার",
    "nepal": "নেপাল",
    "pakistan": "পাকিস্তান",
    "philippines": "ফিলিপাইন",
    "russia": "রাশিয়া",
    "singapore": "সিঙ্গাপুর",
    "sri_lanka": "শ্রীলঙ্কা",
    "taiwan": "তাইওয়ান",
    "thailand": "থাইল্যান্ড",
    "turkey": "তুরস্ক",
    "vietnam": "ভিয়েতনাম",
    "other": "অন্যান্য",
    "country_error": "দয়া করে দেশ নির্বাচন করুন",
    "other_country": "দেশ উল্লেখ করুন",
    "other_country_placeholder": "দয়া করে আপনার দেশ উল্লেখ করুন",
    "other_country_error": "দয়া করে আপনার দেশ উল্লেখ করুন",
    "academic_info": "একাডেমিক তথ্য",
    "track_label": "ট্র্যাক",
    "select_track": "ট্র্যাক নির্বাচন করুন",
    "track_software": "সফটওয়্যার ইঞ্জিনিয়ারিং",
    "track_ecommerce": "ই-কমার্স টেকনোলজি",
    "track_data": "ডেটা সাইন্স",
    "track_network": "নেটওয়ার্ক এবং নিরাপত্তা",
    "track_error": "দয়া করে একটি ট্র্যাক নির্বাচন করুন",
    "year_label": "বছর",
    "select_year": "বছর নির্বাচন করুন",
    "year1": "বছর 1",
    "year2": "বছর 2",
    "year3": "বছর 3",
    "year4": "বছর 4",
    "year_error": "দয়া করে বছর নির্বাচন করুন",
    "term_label": "টার্ম",
    "select_term": "টার্ম নির্বাচন করুন",
    "term1": "টার্ম 1",
    "term2": "টার্ম 2",
    "term3": "টার্ম 3",
    "term_error": "দয়া করে টার্ম নির্বাচন করুন",
    "save_profile": "পরিবর্তনগুলি সংরক্ষণ করুন",
    "save_success": "প্রোফাইল সফলভাবে সংরক্ষিত হয়েছে!",
    "loading_profile": "প্রোফাইল লোড হচ্ছে...",
    "please_wait": "অনুগ্রহ করে অপেক্ষা করুন",
    "saving": "সংরক্ষণ করা হচ্ছে..."
  },
  lo: {
    "profile_title": "ການຕັ້ງຄ່າໂປຣໄຟລ໌ - STIU ພອດທານີມະຫາວິທະຍາໄລ",
    "profile_settings": "ການຕັ້ງຄ່າໂປຣໄຟລ໌",
    "dashboard": "ແຜງໜ້າຈໍ",
    "my_curriculum": "ຫຼັກສູດຂອງຂ້ອຍ",
    "logout": "ອອກຈາກລະບົບ",
    "personal_info": "ຂໍ້ມູນສ່ວນຕົວ",
    "first_name": "ຊື່",
    "first_name_placeholder": "ກະລຸນາປ້ອນຊື່ຂອງທ່ານ",
    "first_name_error": "ກະລຸນາປ້ອນຊື່ຂອງທ່ານ",
    "last_name": "ນາມສະກຸນ",
    "last_name_placeholder": "ກະລຸນາປ້ອນນາມສະກຸນຂອງທ່ານ",
    "last_name_error": "ກະລຸນາປ້ອນນາມສະກຸນຂອງທ່ານ",
    "student_id": "ລະຫັດນັກຮຽນ",
    "student_id_placeholder": "ກະລຸນາປ້ອນລະຫັດນັກຮຽນຂອງທ່ານ",
    "student_id_error": "ກະລຸນາປ້ອນລະຫັດນັກຮຽນຂອງທ່ານ",
    "contact_info": "ຂໍ້ມູນຕິດຕໍ່",
    "email": "ອີເມວ",
    "email_placeholder": "ກະລຸນາປ້ອນອີເມວຂອງທ່ານ",
    "email_error": "ກະລຸນາປ້ອນອີເມວທີ່ຖືກຕ້ອງ",
    "email_readonly": "ບໍ່ສາມາດປ່ຽນອີເມວໄດ້",
    "country": "ປະເທດ",
    "select_country": "ເລືອກປະເທດ",
    "bangladesh": "ບັງຄະລາເທດ",
    "cambodia": "ກຳປູເຈຍ",
    "china": "ຈີນ",
    "hong_kong": "ຮ່ອງກົງ",
    "india": "ອິນເດຍ",
    "indonesia": "ອິນໂດເນເຊຍ",
    "iran": "ອີລານ",
    "japan": "ຍີ່ປຸ່ນ",
    "korea": "ເກົາຫຼີ",
    "laos": "ລາວ",
    "malaysia": "ມາເລເຊຍ",
    "myanmar": "ມຽນມາ",
    "nepal": "ເນປານ",
    "pakistan": "ປາກິສຖານ",
    "philippines": "ຟິລິບປິນ",
    "russia": "ລັດເຊຍ",
    "singapore": "ສິງກະໂປ",
    "sri_lanka": "ສີລັງກາ",
    "taiwan": "ໄຕ້ຫວັນ",
    "thailand": "ໄທ",
    "turkey": "ຕວກກີ",
    "vietnam": "ຫວຽດນາມ",
    "other": "ອື່ນໆ",
    "country_error": "ກະລຸນາເລືອກປະເທດ",
    "other_country": "ກຳນົດປະເທດ",
    "other_country_placeholder": "ກະລຸນາກຳນົດປະເທດຂອງທ່ານ",
    "other_country_error": "ກະລຸນາກຳນົດປະເທດຂອງທ່ານ",
    "academic_info": "ຂໍ້ມູນການສຶກສາ",
    "track_label": "ສາຂາ",
    "select_track": "ເລືອກສາຂາ",
    "track_software": "ວິສະວະກຳຊອບແວ",
    "track_ecommerce": "ເຕັກໂນໂລຊີອີຄອມເມີຊ",
    "track_data": "ວິທະຍາສາດຂໍ້ມູນ",
    "track_network": "ເຄືອຂ່າຍ ແລະ ຄວາມປອດໄພ",
    "track_error": "ກະລຸນາເລືອກສາຂາ",
    "year_label": "ປີ",
    "select_year": "ເລືອກປີ",
    "year1": "ປີ 1",
    "year2": "ປີ 2",
    "year3": "ປີ 3",
    "year4": "ປີ 4",
    "year_error": "ກະລຸນາເລືອກປີ",
    "term_label": "ພາກຮຽນ",
    "select_term": "ເລືອກພາກຮຽນ",
    "term1": "ພາກຮຽນ 1",
    "term2": "ພາກຮຽນ 2",
    "term3": "ພາກຮຽນ 3",
    "term_error": "ກະລຸນາເລືອກພາກຮຽນ",
    "save_profile": "ບັນທຶກການປ່ຽນແປງ",
    "save_success": "ບັນທຶກໂປຣໄຟລ໌ສຳເລັດແລ້ວ!",
    "loading_profile": "ກຳລັງໂຫຼດໂປຣໄຟລ໌...",
    "please_wait": "ກະລຸນາລໍຖ້າ",
    "saving": "ກຳລັງບັນທຶກ..."
  },
  km: {
    "profile_title": "ការកំណត់ប្រវត្តិរូប - វិបផតថលសិស្ស STIU",
    "profile_settings": "ការកំណត់ប្រវត្តិរូប",
    "dashboard": "ផ្ទាំងគ្រប់គ្រង",
    "my_curriculum": "កម្មវិធីសិក្សារបស់ខ្ញុំ",
    "logout": "ចាកចេញ",
    "personal_info": "ព័ត៌មានផ្ទាល់ខ្លួន",
    "first_name": "នាមខ្លួន",
    "first_name_placeholder": "សូមបញ្ចូលនាមខ្លួនរបស់អ្នក",
    "first_name_error": "សូមបញ្ចូលនាមខ្លួនរបស់អ្នក",
    "last_name": "នាមត្រកូល",
    "last_name_placeholder": "សូមបញ្ចូលនាមត្រកូលរបស់អ្នក",
    "last_name_error": "សូមបញ្ចូលនាមត្រកូលរបស់អ្នក",
    "student_id": "លេខសម្គាល់សិស្ស",
    "student_id_placeholder": "សូមបញ្ចូលលេខសម្គាល់សិស្សរបស់អ្នក",
    "student_id_error": "សូមបញ្ចូលលេខសម្គាល់សិស្សរបស់អ្នក",
    "contact_info": "ព័ត៌មានទំនាក់ទំនង",
    "email": "អ៊ីមែល",
    "email_placeholder": "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក",
    "email_error": "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ",
    "email_readonly": "មិនអាចប្តូរអ៊ីមែលបានទេ",
    "country": "ប្រទេស",
    "select_country": "ជ្រើសរើសប្រទេស",
    "bangladesh": "បង់ក្លាដែស",
    "cambodia": "កម្ពុជា",
    "china": "ចិន",
    "hong_kong": "ហុងកុង",
    "india": "ឥណ្ឌា",
    "indonesia": "ឥណ្ឌូនេស៊ី",
    "iran": "អ៊ីរ៉ង់",
    "japan": "ជប៉ុន",
    "korea": "កូរ៉េ",
    "laos": "ឡាវ",
    "malaysia": "ម៉ាឡេស៊ី",
    "myanmar": "មីយ៉ាន់ម៉ា",
    "nepal": "នេប៉ាល់",
    "pakistan": "ប៉ាគីស្ថាន",
    "philippines": "ហ្វ៊ីលីពីន",
    "russia": "រុស្ស៊ី",
    "singapore": "សិង្ហបុរី",
    "sri_lanka": "ស្រីលង្កា",
    "taiwan": "តៃវ៉ាន់",
    "thailand": "ថៃ",
    "turkey": "ទួរគី",
    "vietnam": "វៀតណាម",
    "other": "ផ្សេងៗ",
    "country_error": "សូមជ្រើសរើសប្រទេស",
    "other_country": "បញ្ជាក់ប្រទេស",
    "other_country_placeholder": "សូមបញ្ជាក់ប្រទេសរបស់អ្នក",
    "other_country_error": "សូមបញ្ជាក់ប្រទេសរបស់អ្នក",
    "academic_info": "ព័ត៌មានអក្សរសិល្ប៍",
    "track_label": "ជំនាញ",
    "select_track": "ជ្រើសរើសជំនាញ",
    "track_software": "វិស្វកម្មសូហ្វវែរ",
    "track_ecommerce": "បច្ចេកវិទ្យាពាណិជ្ជកម្មអេឡិចត្រូនិក",
    "track_data": "វិទ្យាសាស្ត្រទិន្នន័យ",
    "track_network": "បណ្តាញ និងសុវត្ថិភាព",
    "track_error": "សូមជ្រើសរើសជំនាញ",
    "year_label": "ឆ្នាំ",
    "select_year": "ជ្រើសរើសឆ្នាំ",
    "year1": "ឆ្នាំ ១",
    "year2": "ឆ្នាំ ២",
    "year3": "ឆ្នាំ ៣",
    "year4": "ឆ្នាំ ៤",
    "year_error": "សូមជ្រើសរើសឆ្នាំ",
    "term_label": "វគ្គ",
    "select_term": "ជ្រើសរើសវគ្គ",
    "term1": "វគ្គ ១",
    "term2": "វគ្គ ២",
    "term3": "វគ្គ ៣",
    "term_error": "សូមជ្រើសរើសវគ្គ",
    "save_profile": "រក្សាទុកការផ្លាស់ប្តូរ",
    "save_success": "បានរក្សាទុកប្រវត្តិរូបដោយជោគជ័យ!",
    "loading_profile": "កំពុងផ្ទុកប្រវត្តិរូប...",
    "please_wait": "សូមរង់ចាំមួយភ្លែត",
    "saving": "កំពុងរក្សាទុក..."
  },
  my: {
    "profile_title": "ကိုယ်ရေးအချက်အလက် ဆက်တင်များ - STIU ကျောင်းသားပေါ်တယ်",
    "profile_settings": "ကိုယ်ရေးအချက်အလက် ဆက်တင်များ",
    "dashboard": "ဒိုင်ခွက်",
    "my_curriculum": "ကျွန်ုပ်၏သင်ရိုးညွှန်းတမ်း",
    "logout": "ထွက်ရန်",
    "personal_info": "ကိုယ်ရေးအချက်အလက်",
    "first_name": "အမည်ရင်း",
    "first_name_placeholder": "ကျေးဇူးပြု၍ သင့်အမည်ရင်းကို ထည့်ပါ",
    "first_name_error": "ကျေးဇူးပြု၍ သင့်အမည်ရင်းကို ထည့်ပါ",
    "last_name": "အမည်ရင်းနောက်ဆက်",
    "last_name_placeholder": "ကျေးဇူးပြု၍ သင့်အမည်ရင်းနောက်ဆက်ကို ထည့်ပါ",
    "last_name_error": "ကျေးဇူးပြု၍ သင့်အမည်ရင်းနောက်ဆက်ကို ထည့်ပါ",
    "student_id": "ကျောင်းသားနံပါတ်",
    "student_id_placeholder": "ကျေးဇူးပြု၍ သင့်ကျောင်းသားနံပါတ်ကို ထည့်ပါ",
    "student_id_error": "ကျေးဇူးပြု၍ သင့်ကျောင်းသားနံပါတ်ကို ထည့်ပါ",
    "contact_info": "ဆက်သွယ်ရန်အချက်အလက်",
    "email": "အီးမေးလ်",
    "email_placeholder": "ကျေးဇူးပြု၍ သင့်အီးမေးလ်ကို ထည့်ပါ",
    "email_error": "ကျေးဇူးပြု၍ အီးမေးလ်မှန်ကန်စွာထည့်ပါ",
    "email_readonly": "အီးမေးလ်ကို မပြောင်းလဲနိုင်ပါ",
    "country": "နိုင်ငံ",
    "select_country": "နိုင်ငံရွေးချယ်ပါ",
    "bangladesh": "ဘင်္ဂလားဒေ့ရှ်",
    "cambodia": "ကမ္ဘောဒီးယား",
    "china": "တရုတ်",
    "hong_kong": "ဟောင်ကောင်",
    "india": "အိန္ဒိယ",
    "indonesia": "အင်ဒိုနီးရှား",
    "iran": "အီရန်",
    "japan": "ဂျပန်",
    "korea": "ကိုရီးယား",
    "laos": "လာအို",
    "malaysia": "မလေးရှား",
    "myanmar": "မြန်မာ",
    "nepal": "နီပေါ",
    "pakistan": "ပါကစ္စတန်",
    "philippines": "ဖိလစ်ပိုင်",
    "russia": "ရုရှား",
    "singapore": "စင်္ကာပူ",
    "sri_lanka": "သီရိလင်္ကာ",
    "taiwan": "ထိုင်ဝမ်",
    "thailand": "ထိုင်း",
    "turkey": "တူရကီ",
    "vietnam": "ဗီယက်နမ်",
    "other": "အခြား",
    "country_error": "ကျေးဇူးပြု၍ နိုင်ငံရွေးချယ်ပါ",
    "other_country": "နိုင်ငံသတ်မှတ်ပါ",
    "other_country_placeholder": "ကျေးဇူးပြု၍ သင့်နိုင်ငံကို ဖော်ပြပါ",
    "other_country_error": "ကျေးဇူးပြု၍ သင့်နိုင်ငံကို ဖော်ပြပါ",
    "academic_info": "ပညာရေးဆိုင်ရာ အချက်အလက်",
    "track_label": "သင်တန်း",
    "select_track": "သင်တန်းရွေးချယ်ပါ",
    "track_software": "ဆော့ဖ်ဝဲအင်ဂျင်နီယာ",
    "track_ecommerce": "အီလက်ထရွန်းနစ်စီးပွားရေးနည်းပညာ",
    "track_data": "ဒေတာသိပ္ပံ",
    "track_network": "ကွန်ယက်နှင့်လုံခြုံရေး",
    "track_error": "ကျေးဇူးပြု၍ သင်တန်းရွေးချယ်ပါ",
    "year_label": "နှစ်",
    "select_year": "နှစ်ရွေးချယ်ပါ",
    "year1": "နှစ် 1",
    "year2": "နှစ် 2",
    "year3": "နှစ် 3",
    "year4": "နှစ် 4",
    "year_error": "ကျေးဇူးပြု၍ နှစ်ရွေးချယ်ပါ",
    "term_label": "ပိုင်း",
    "select_term": "ပိုင်းရွေးချယ်ပါ",
    "term1": "ပိုင်း 1",
    "term2": "ပိုင်း 2",
    "term3": "ပိုင်း 3",
    "term_error": "ကျေးဇူးပြု၍ ပိုင်းရွေးချယ်ပါ",
    "save_profile": "ပြောင်းလဲမှုများကို သိမ်းဆည်းပါ",
    "save_success": "ကိုယ်ရေးအချက်အလက်ကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ!",
    "loading_profile": "ကိုယ်ရေးအချက်အလက် တင်နေသည်...",
    "please_wait": "ကျေးဇူးပြု၍ စောင့်ပါ",
    "saving": "သိမ်းဆည်းနေသည်..."
  },
  ne: {
    "profile_title": "प्रोफाइल सेटिङहरू - STIU विद्यार्थी पोर्टल",
    "profile_settings": "प्रोफाइल सेटिङहरू",
    "dashboard": "ड्यासबोर्ड",
    "my_curriculum": "मेरो पाठ्यक्रम",
    "logout": "लगआउट",
    "personal_info": "व्यक्तिगत जानकारी",
    "first_name": "पहिलो नाम",
    "first_name_placeholder": "कृपया आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्",
    "first_name_error": "कृपया आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्",
    "last_name": "थर",
    "last_name_placeholder": "कृपया आफ्नो थर प्रविष्ट गर्नुहोस्",
    "last_name_error": "कृपया आफ्नो थर प्रविष्ट गर्नुहोस्",
    "student_id": "विद्यार्थी आईडी",
    "student_id_placeholder": "कृपया आफ्नो विद्यार्थी आईडी प्रविष्ट गर्नुहोस्",
    "student_id_error": "कृपया आफ्नो विद्यार्थी आईडी प्रविष्ट गर्नुहोस्",
    "contact_info": "सम्पर्क जानकारी",
    "email": "इमेल",
    "email_placeholder": "कृपया आफ्नो इमेल प्रविष्ट गर्नुहोस्",
    "email_error": "कृपया मान्य इमेल प्रविष्ट गर्नुहोस्",
    "email_readonly": "इमेल परिवर्तन गर्न सकिँदैन",
    "country": "देश",
    "select_country": "देश चयन गर्नुहोस्",
    "bangladesh": "बंगलादेश",
    "cambodia": "कम्बोडिया",
    "china": "चीन",
    "hong_kong": "हङकङ",
    "india": "भारत",
    "indonesia": "इन्डोनेसिया",
    "iran": "इरान",
    "japan": "जापान",
    "korea": "कोरिया",
    "laos": "लाओस",
    "malaysia": "मलेसिया",
    "myanmar": "म्यान्मार",
    "nepal": "नेपाल",
    "pakistan": "पाकिस्तान",
    "philippines": "फिलिपिन्स",
    "russia": "रुस",
    "singapore": "सिङ्गापुर",
    "sri_lanka": "श्रीलङ्का",
    "taiwan": "ताइवान",
    "thailand": "थाइल्याण्ड",
    "turkey": "टर्की",
    "vietnam": "भियतनाम",
    "other": "अन्य",
    "country_error": "कृपया देश चयन गर्नुहोस्",
    "other_country": "देश निर्दिष्ट गर्नुहोस्",
    "other_country_placeholder": "कृपया आफ्नो देश निर्दिष्ट गर्नुहोस्",
    "other_country_error": "कृपया आफ्नो देश निर्दिष्ट गर्नुहोस्",
    "academic_info": "शैक्षिक जानकारी",
    "track_label": "ट्र्याक",
    "select_track": "ट्र्याक चयन गर्नुहोस्",
    "track_software": "सफ्टवेयर इन्जिनियरिङ",
    "track_ecommerce": "ई-कमर्स प्रविधि",
    "track_data": "डाटा विज्ञान",
    "track_network": "नेटवर्क र सुरक्षा",
    "track_error": "कृपया ट्र्याक चयन गर्नुहोस्",
    "year_label": "वर्ष",
    "select_year": "वर्ष चयन गर्नुहोस्",
    "year1": "वर्ष १",
    "year2": "वर्ष २",
    "year3": "वर्ष ३",
    "year4": "वर्ष ४",
    "year_error": "कृपया वर्ष चयन गर्नुहोस्",
    "term_label": "सेमेस्टर",
    "select_term": "सेमेस्टर चयन गर्नुहोस्",
    "term1": "सेमेस्टर १",
    "term2": "सेमेस्टर २",
    "term3": "सेमेस्टर ३",
    "term_error": "कृपया सेमेस्टर चयन गर्नुहोस्",
    "save_profile": "परिवर्तनहरू बचत गर्नुहोस्",
    "save_success": "प्रोफाइल सफलतापूर्वक बचत भयो!",
    "loading_profile": "प्रोफाइल लोड हुँदैछ...",
    "please_wait": "कृपया प्रतीक्षा गर्नुहोस्",
    "saving": "बचत हुँदैछ..."
  },
  pa: {
    "profile_title": "ਪ੍ਰੋਫਾਈਲ ਸੈਟਿੰਗਜ਼ - STIU ਵਿਦਿਆਰਥੀ ਪੋਰਟਲ",
    "profile_settings": "ਪ੍ਰੋਫਾਈਲ ਸੈਟਿੰਗਜ਼",
    "dashboard": "ਡੈਸ਼ਬੋਰਡ",
    "my_curriculum": "ਮੇਰਾ ਕਰਿਕੂਲਮ",
    "logout": "ਲੌਗਆਉਟ",
    "personal_info": "ਨਿੱਜੀ ਜਾਣਕਾਰੀ",
    "first_name": "ਪਹਿਲਾ ਨਾਮ",
    "first_name_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "first_name_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "last_name": "ਆਖਰੀ ਨਾਮ",
    "last_name_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਰਜ ਕਰੋ",
    "last_name_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਰਜ ਕਰੋ",
    "student_id": "ਵਿਦਿਆਰਥੀ ਆਈਡੀ",
    "student_id_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਵਿਦਿਆਰਥੀ ਆਈਡੀ ਦਰਜ ਕਰੋ",
    "student_id_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਵਿਦਿਆਰਥੀ ਆਈਡੀ ਦਰਜ ਕਰੋ",
    "contact_info": "ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
    "email": "ਈਮੇਲ",
    "email_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "email_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "email_readonly": "ਈਮੇਲ ਬਦਲੀ ਨਹੀਂ ਜਾ ਸਕਦੀ",
    "country": "ਦੇਸ਼",
    "select_country": "ਦੇਸ਼ ਚੁਣੋ",
    "bangladesh": "ਬੰਗਲਾਦੇਸ਼",
    "cambodia": "ਕੰਬੋਡੀਆ",
    "china": "ਚੀਨ",
    "hong_kong": "ਹਾਂਗਕਾਂਗ",
    "india": "ਭਾਰਤ",
    "indonesia": "ਇੰਡੋਨੇਸ਼ੀਆ",
    "iran": "ਈਰਾਨ",
    "japan": "ਜਪਾਨ",
    "korea": "ਕੋਰੀਆ",
    "laos": "ਲਾਓਸ",
    "malaysia": "ਮਲੇਸ਼ੀਆ",
    "myanmar": "ਮਿਆਂਮਾਰ",
    "nepal": "ਨੇਪਾਲ",
    "pakistan": "ਪਾਕਿਸਤਾਨ",
    "philippines": "ਫਿਲੀਪੀਨਜ਼",
    "russia": "ਰੂਸ",
    "singapore": "ਸਿੰਗਾਪੁਰ",
    "sri_lanka": "ਸ੍ਰੀ ਲੰਕਾ",
    "taiwan": "ਤਾਈਵਾਨ",
    "thailand": "ਥਾਈਲੈਂਡ",
    "turkey": "ਤੁਰਕੀ",
    "vietnam": "ਵੀਅਤਨਾਮ",
    "other": "ਹੋਰ",
    "country_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਦੇਸ਼ ਚੁਣੋ",
    "other_country": "ਦੇਸ਼ ਦੱਸੋ",
    "other_country_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਦੇਸ਼ ਦੱਸੋ",
    "other_country_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਦੇਸ਼ ਦੱਸੋ",
    "academic_info": "ਵਿਦਿਆਈ ਜਾਣਕਾਰੀ",
    "track_label": "ਟਰੈਕ",
    "select_track": "ਟਰੈਕ ਚੁਣੋ",
    "track_software": "ਸਾੱਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ",
    "track_ecommerce": "ਈ-ਕਾਮਰਸ ਟੈਕਨਾਲੋਜੀ",
    "track_data": "ਡਾਟਾ ਸਾਇੰਸ",
    "track_network": "ਨੈੱਟਵਰਕ ਅਤੇ ਸੁਰੱਖਿਆ",
    "track_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਟਰੈਕ ਚੁਣੋ",
    "year_label": "ਸਾਲ",
    "select_year": "ਸਾਲ ਚੁਣੋ",
    "year1": "ਸਾਲ 1",
    "year2": "ਸਾਲ 2",
    "year3": "ਸਾਲ 3",
    "year4": "ਸਾਲ 4",
    "year_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਸਾਲ ਚੁਣੋ",
    "term_label": "ਸਮੈਸਟਰ",
    "select_term": "ਸਮੈਸਟਰ ਚੁਣੋ",
    "term1": "ਸਮੈਸਟਰ 1",
    "term2": "ਸਮੈਸਟਰ 2",
    "term3": "ਸਮੈਸਟਰ 3",
    "term_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਸਮੈਸਟਰ ਚੁਣੋ",
    "save_profile": "ਬਦਲਾਅ ਸੰਭਾਲੋ",
    "save_success": "ਪ੍ਰੋਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਸੰਭਾਲੀ ਗਈ!",
    "loading_profile": "ਪ੍ਰੋਫਾਈਲ ਲੋਡ ਹੋ ਰਹੀ ਹੈ...",
    "please_wait": "ਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜ਼ਾਰ ਕਰੋ",
    "saving": "ਸੰਭਾਲਿਆ ਜਾ ਰਿਹਾ ਹੈ..."
  },
  si: {
    "profile_title": "පැතිකඩ සැකසුම් - STIU ශිෂ්ය පෝටලය",
    "profile_settings": "පැතිකඩ සැකසුම්",
    "dashboard": "ඩෂ්බෝඩ්",
    "my_curriculum": "මගේ විෂය මාලාව",
    "logout": "පිටවීම",
    "personal_info": "පුද්ගලික තොරතුරු",
    "first_name": "මුල් නම",
    "first_name_placeholder": "කරුණාකර ඔබගේ මුල් නම ඇතුල් කරන්න",
    "first_name_error": "කරුණාකර ඔබගේ මුල් නම ඇතුල් කරන්න",
    "last_name": "අවසන් නම",
    "last_name_placeholder": "කරුණාකර ඔබගේ අවසන් නම ඇතුල් කරන්න",
    "last_name_error": "කරුණාකර ඔබගේ අවසන් නම ඇතුල් කරන්න",
    "student_id": "ශිෂ්‍ය අංකය",
    "student_id_placeholder": "කරුණාකර ඔබගේ ශිෂ්‍ය අංකය ඇතුල් කරන්න",
    "student_id_error": "කරුණාකර ඔබගේ ශිෂ්‍ය අංකය ඇතුල් කරන්න",
    "contact_info": "සම්බන්ධතා තොරතුරු",
    "email": "විද්‍යුත් තැපෑල",
    "email_placeholder": "කරුණාකර ඔබගේ විද්‍යුත් තැපෑල ඇතුල් කරන්න",
    "email_error": "කරුණාකර වලංගු විද්‍යුත් තැපෑලක් ඇතුල් කරන්න",
    "email_readonly": "විද්‍යුත් තැපෑල වෙනස් කළ නොහැක",
    "country": "රට",
    "select_country": "රට තෝරන්න",
    "bangladesh": "බංග්ලාදේශය",
    "cambodia": "කාම්බෝජය",
    "china": "චීනය",
    "hong_kong": "හොංකොං",
    "india": "ඉන්දියාව",
    "indonesia": "ඉන්දුනීසියාව",
    "iran": "ඉරානය",
    "japan": "ජපානය",
    "korea": "කොරියාව",
    "laos": "ලාඕසය",
    "malaysia": "මැලේසියාව",
    "myanmar": "මියන්මාරය",
    "nepal": "නේපාලය",
    "pakistan": "පාකිස්තානය",
    "philippines": "පිලිපීනය",
    "russia": "රුසියාව",
    "singapore": "සිංගප්පූරුව",
    "sri_lanka": "ශ්‍රී ලංකාව",
    "taiwan": "තායිවානය",
    "thailand": "තායිලන්තය",
    "turkey": "තුර්කිය",
    "vietnam": "වියට්නාමය",
    "other": "වෙනත්",
    "country_error": "කරුණාකර රට තෝරන්න",
    "other_country": "රට සඳහන් කරන්න",
    "other_country_placeholder": "කරුණාකර ඔබගේ රට සඳහන් කරන්න",
    "other_country_error": "කරුණාකර ඔබගේ රට සඳහන් කරන්න",
    "academic_info": "ගුරුකුල තොරතුරු",
    "track_label": "විෂය මාර්ගය",
    "select_track": "විෂය මාර්ගය තෝරන්න",
    "track_software": "මෘදුකාංග ඉංජිනේරු විද්‍යාව",
    "track_ecommerce": "ඊ-වාණිජ්‍ය තාක්ෂණය",
    "track_data": "දත්ත විද්‍යාව",
    "track_network": "ජාල හා ආරක්ෂාව",
    "track_error": "කරුණාකර විෂය මාර්ගයක් තෝරන්න",
    "year_label": "වසර",
    "select_year": "වසර තෝරන්න",
    "year1": "වසර 1",
    "year2": "වසර 2",
    "year3": "වසර 3",
    "year4": "වසර 4",
    "year_error": "කරුණාකර වසර තෝරන්න",
    "term_label": "වාරය",
    "select_term": "වාරය තෝරන්න",
    "term1": "වාරය 1",
    "term2": "වාරය 2",
    "term3": "වාරය 3",
    "term_error": "කරුණාකර වාරය තෝරන්න",
    "save_profile": "වෙනස්කම් සුරකින්න",
    "save_success": "පැතිකඩ සාර්ථකව සුරක්ෂිත කරන ලදි!",
    "loading_profile": "පැතිකඩ යොමු වෙමින්...",
    "please_wait": "කරුණාකර තත්පර කිහිපයක් රැඳී සිටින්න",
    "saving": "සුරක්ෂිත වෙමින්..."
  }
};

// Language names for dropdown with flags (matching register-curriculum.js)
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

let currentLang = 'en';
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
    
    console.log('🌐 Initializing language FIRST...');
    // Initialize language BEFORE anything else
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
  // Get saved language from localStorage FIRST
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  currentLang = savedLang;
  
  console.log('🌐 Setting language to:', savedLang);
  
  // Apply the saved language immediately
  switchLanguage(savedLang, true);
  
  // Initialize language dropdown AFTER setting the language
  initializeLanguageDropdown();
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

function switchLanguage(lang, isInitialLoad = false) {
  console.log('🔄 Switching language to:', lang, 'isInitialLoad:', isInitialLoad);
  
  if (lang === currentLang && !isInitialLoad) return;
  
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update dropdown selection
  updateLanguageDropdown();
  
  // Update all text content
  updateProfileText();
  
  // Update form options with new language
  updateFormOptions();
  
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
        currentLanguageElement.textContent = name.split(' ')[0];
      }
    }
  });
}

function updateFormOptions() {
  // Update select options with current language translations
  const translations = profileTranslations[currentLang];
  
  // Update country select options
  const countrySelect = document.getElementById('profileCountry');
  if (countrySelect) {
    const options = countrySelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && translations[key]) {
        option.textContent = translations[key];
      }
    });
  }
  
  // Update track select options
  const trackSelect = document.getElementById('profileTrack');
  if (trackSelect) {
    const options = trackSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && translations[key]) {
        option.textContent = translations[key];
      }
    });
  }
  
  // Update year select options
  const yearSelect = document.getElementById('profileYear');
  if (yearSelect) {
    const options = yearSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && translations[key]) {
        option.textContent = translations[key];
      }
    });
  }
  
  // Update term select options
  const termSelect = document.getElementById('profileTerm');
  if (termSelect) {
    const options = termSelect.querySelectorAll('option');
    options.forEach(option => {
      const key = option.getAttribute('data-i18n');
      if (key && translations[key]) {
        option.textContent = translations[key];
      }
    });
  }
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
  
  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      element.placeholder = translations[key];
    }
  });
  
  // Update loading spinner text
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    const spinnerTitle = spinner.querySelector('[data-i18n="loading_profile"]');
    const spinnerText = spinner.querySelector('[data-i18n="please_wait"]');
    if (spinnerTitle && translations.loading_profile) {
      spinnerTitle.textContent = translations.loading_profile;
    }
    if (spinnerText && translations.please_wait) {
      spinnerText.textContent = translations.please_wait;
    }
  }
  
  // Update save button text
  const saveBtn = document.getElementById('saveProfileBtn');
  if (saveBtn) {
    saveBtn.innerHTML = '<i class="fas fa-save me-2"></i>' + translations.save_profile;
  }
  
  // Update success message
  const successMsg = document.getElementById('saveSuccess');
  if (successMsg) {
    const successSpan = successMsg.querySelector('span[data-i18n="save_success"]');
    if (successSpan && translations.save_success) {
      successSpan.textContent = translations.save_success;
    }
  }
  
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
    
    // Try to get user data from users collection first
    const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
    
    if (userDoc.exists) {
      console.log('✅ User data found in users collection');
      userData = { id: userDoc.id, ...userDoc.data() };
    } else {
      // Fallback to registrations collection
      console.log('⚠️ No user data in users collection, checking registrations...');
      const querySnapshot = await firebase.firestore().collection('registrations')
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
      : profileTranslations[currentLang].avatar_user || 'User'
  );
  
  safeUpdateElement('profileUserEmail', userData.email || currentUser.email);
  safeSetValue('profileFirstName', userData.firstName || '');
  safeSetValue('profileLastName', userData.lastName || '');
  safeSetValue('profileStudentId', userData.studentId || '');
  safeSetValue('profileEmail', userData.email || currentUser.email);
  
  // Handle country selection
  let countryValue = userData.country || '';
  // If country is not in the list, set it to 'other'
  const countrySelect = document.getElementById('profileCountry');
  if (countrySelect) {
    const validCountries = Array.from(countrySelect.options).map(opt => opt.value);
    if (countryValue && !validCountries.includes(countryValue)) {
      countryValue = 'other';
    }
    safeSetValue('profileCountry', countryValue);
  }
  
  safeSetValue('profileTrack', userData.track || '');
  safeSetValue('profileYear', userData.year || '');
  safeSetValue('profileTerm', userData.term || '');
  
  // Handle other country field
  const otherCountryContainer = document.getElementById('profileOtherCountryContainer');
  if (otherCountryContainer) {
    if (countryValue === 'other') {
      otherCountryContainer.style.display = 'block';
      safeSetValue('profileOtherCountry', userData.country || '');
    } else {
      otherCountryContainer.style.display = 'none';
    }
  }
  
  // Update navigation user name
  safeUpdateElement('userName',
    userData.firstName && userData.lastName 
      ? `${userData.firstName} ${userData.lastName}`
      : profileTranslations[currentLang].avatar_user || 'User'
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
                         (profileTranslations[currentLang]?.saving || 'Saving...');
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
      language: currentLang,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Add other country if applicable
    if (formData.country === 'other') {
      formData.otherCountry = getValue('profileOtherCountry');
      formData.country = formData.otherCountry || 'Other';
    }
    
    console.log('📦 Form data to save:', formData);
    
    // Save to Firestore in both collections for compatibility
    const db = firebase.firestore();
    
    // Save to users collection (primary)
    console.log('💾 Saving to users collection...');
    await db.collection('users')
      .doc(currentUser.uid)
      .set(formData, { merge: true });
    
    // Also save to registrations collection for compatibility
    console.log('💾 Saving to registrations collection...');
    const registrationsQuery = await db.collection('registrations')
      .where('email', '==', formData.email)
      .get();
    
    if (registrationsQuery.empty) {
      await db.collection('registrations').add({
        ...formData,
        uid: currentUser.uid,
        registrationDate: new Date().toISOString()
      });
    } else {
      registrationsQuery.forEach(async (doc) => {
        await doc.ref.update(formData);
      });
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
      saveSuccess.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <span data-i18n="save_success">${profileTranslations[currentLang].save_success}</span>
      `;
      setTimeout(() => {
        saveSuccess.style.display = 'none';
      }, 3000);
    }
    
    console.log('✅ Profile saved successfully');
    
  } catch (error) {
    console.error('❌ Error saving profile:', error);
    alert(profileTranslations[currentLang]?.save_error || 'Error saving profile');
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
        <h5 class="text-danger">${profileTranslations[currentLang]?.error_title || 'Error'}</h5>
        <p class="text-muted">${message}</p>
        <button class="btn btn-primary mt-2" onclick="location.reload()">
          ${profileTranslations[currentLang]?.try_again || 'Try Again'}
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
      
      if (window.firebase && firebase.apps.length > 0 && firebase.firestore) {
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

// Export functions for global access
window.switchLanguage = switchLanguage;
window.handleLogout = handleLogout;