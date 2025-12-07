// Combined Registration and Curriculum Script
console.log('🚀 Combined Registration and Curriculum script loaded');

// Language translations - ALL ASIAN LANGUAGES INCLUDED
const translations = {
  en: {
    "page_title": "Registration and Course Selection - STIU Student Portal",
    "step1_label": "Personal Information",
    "step2_label": "Course Selection",
    "step3_label": "Success",
    "form_title": "Registration",
    "form_subtitle": "Fill in the information correctly to verify your identity",
    "first_name": "First Name",
    "first_name_placeholder": "Please enter your first name",
    "first_name_error": "Please enter your first name",
    "last_name": "Last Name",
    "last_name_placeholder": "Please enter your last name",
    "last_name_error": "Please enter your last name",
    "email": "Email",
    "email_placeholder": "Please enter your email",
    "email_error": "Please enter a valid @students.stamford.edu email",
    "email_requirements": "Only @students.stamford.edu emails are allowed",
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
    "track_label": "Choose Track",
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
    "agree_text": "I agree to the",
    "terms_link": "Terms and Conditions",
    "and_text": "and",
    "privacy_link": "Privacy Policy",
    "agree_error": "Please accept the terms and conditions",
    "submit_btn": "Register and Select Courses",
    "back_btn": "Go Back",
    "save_courses_btn": "Save and Complete",
    "login_btn": "Login",
    "course_selection_title": "Select Specialized Program",
    "course_selection_subtitle": "Select the courses you have previously taken in this program",
    "select_courses_instruction": "Select the courses you have already taken",
    "credits": "credits",
    "year": "Year",
    "prerequisite": "Prerequisite",
    "success_title": "Registration Successful!",
    "success_message": "Registration completed successfully",
    "success_description": "Your account and courses have been saved successfully",
    "track_label_success": "Track",
    "name_label": "Name",
    "email_label": "Email",
    "studentid_label": "Student ID",
    "loading_register": "Registering...",
    "loading_courses": "Saving courses...",
    "please_wait": "Please wait a moment",
    "error_title": "Error!",
    "have_account": "Already have an account?",
    "login_link": "Login",
    "avatar_user": "User",
    "avatar_book": "Book",
    "no_courses_found": "No courses found for this track"
  },
  zh: { // Chinese
    "page_title": "注册与课程选择 - STIU学生门户",
    "step1_label": "个人信息",
    "step2_label": "课程选择",
    "step3_label": "成功",
    "form_title": "注册",
    "form_subtitle": "正确填写信息以验证身份",
    "first_name": "名字",
    "first_name_placeholder": "请输入您的名字",
    "first_name_error": "请输入您的名字",
    "last_name": "姓氏",
    "last_name_placeholder": "请输入您的姓氏",
    "last_name_error": "请输入您的姓氏",
    "email": "电子邮件",
    "email_placeholder": "请输入您的电子邮件",
    "email_error": "请输入有效的@students.stamford.edu电子邮件",
    "email_requirements": "仅允许@students.stamford.edu电子邮件",
    "password": "密码",
    "password_placeholder": "请输入您的密码",
    "password_error": "请输入有效的密码",
    "password_requirements": "密码必须包含：大写字母、小写字母、数字和特殊字符",
    "req_uppercase": "大写字母",
    "req_lowercase": "小写字母",
    "req_number": "数字",
    "req_special": "特殊字符",
    "req_length": "至少8个字符",
    "confirm_password": "确认密码",
    "confirm_password_placeholder": "请再次输入您的密码",
    "confirm_password_error": "密码不匹配",
    "passwords_match": "密码匹配",
    "passwords_not_match": "密码不匹配",
    "student_id": "学生证号码",
    "student_id_placeholder": "请输入您的学生证号码",
    "student_id_error": "请输入您的学生证号码",
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
    "track_label": "选择专业方向",
    "select_track": "选择专业方向",
    "track_software": "软件工程",
    "track_ecommerce": "电子商务技术",
    "track_data": "数据科学",
    "track_network": "网络与安全",
    "track_error": "请选择专业方向",
    "year_label": "年级",
    "select_year": "选择年级",
    "year1": "第一年",
    "year2": "第二年",
    "year3": "第三年",
    "year4": "第四年",
    "year_error": "请选择年级",
    "term_label": "学期",
    "select_term": "选择学期",
    "term1": "第一学期",
    "term2": "第二学期",
    "term3": "第三学期",
    "term_error": "请选择学期",
    "agree_text": "我同意",
    "terms_link": "条款与条件",
    "and_text": "和",
    "privacy_link": "隐私政策",
    "agree_error": "请接受条款与条件",
    "submit_btn": "注册并选择课程",
    "back_btn": "返回",
    "save_courses_btn": "保存并完成",
    "login_btn": "登录",
    "course_selection_title": "选择专业课程",
    "course_selection_subtitle": "选择您已在此专业中修读的课程",
    "select_courses_instruction": "选择您已修读的课程",
    "credits": "学分",
    "year": "年级",
    "prerequisite": "先修课程",
    "success_title": "注册成功！",
    "success_message": "注册成功完成",
    "success_description": "您的帐户和课程已成功保存",
    "track_label_success": "专业方向",
    "name_label": "姓名",
    "email_label": "电子邮件",
    "studentid_label": "学生证号码",
    "loading_register": "正在注册...",
    "loading_courses": "正在保存课程...",
    "please_wait": "请稍候",
    "error_title": "错误！",
    "have_account": "已有帐户？",
    "login_link": "登录",
    "avatar_user": "用户",
    "avatar_book": "书籍",
    "no_courses_found": "未找到此专业的课程"
  },
  ja: { // Japanese
    "page_title": "登録とコース選択 - STIU学生ポータル",
    "step1_label": "個人情報",
    "step2_label": "コース選択",
    "step3_label": "成功",
    "form_title": "登録",
    "form_subtitle": "正しく情報を入力して本人確認を行います",
    "first_name": "名",
    "first_name_placeholder": "名を入力してください",
    "first_name_error": "名を入力してください",
    "last_name": "姓",
    "last_name_placeholder": "姓を入力してください",
    "last_name_error": "姓を入力してください",
    "email": "メール",
    "email_placeholder": "メールアドレスを入力してください",
    "email_error": "有効な@students.stamford.eduメールアドレスを入力してください",
    "email_requirements": "@students.stamford.eduメールアドレスのみ許可されています",
    "password": "パスワード",
    "password_placeholder": "パスワードを入力してください",
    "password_error": "有効なパスワードを入力してください",
    "password_requirements": "パスワードには次のものが含まれている必要があります：大文字、小文字、数字、特殊文字",
    "req_uppercase": "大文字",
    "req_lowercase": "小文字",
    "req_number": "数字",
    "req_special": "特殊文字",
    "req_length": "最低8文字",
    "confirm_password": "パスワード確認",
    "confirm_password_placeholder": "パスワードを再入力してください",
    "confirm_password_error": "パスワードが一致しません",
    "passwords_match": "パスワードが一致しています",
    "passwords_not_match": "パスワードが一致しません",
    "student_id": "学生ID",
    "student_id_placeholder": "学生IDを入力してください",
    "student_id_error": "学生IDを入力してください",
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
    "track_label": "トラックを選択",
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
    "agree_text": "私は同意します",
    "terms_link": "利用規約",
    "and_text": "および",
    "privacy_link": "プライバシーポリシー",
    "agree_error": "利用規約に同意してください",
    "submit_btn": "登録してコースを選択",
    "back_btn": "戻る",
    "save_courses_btn": "保存して完了",
    "login_btn": "ログイン",
    "course_selection_title": "専門プログラムを選択",
    "course_selection_subtitle": "このプログラムですでに受講したコースを選択してください",
    "select_courses_instruction": "すでに受講したコースを選択してください",
    "credits": "単位",
    "year": "学年",
    "prerequisite": "前提条件",
    "success_title": "登録成功！",
    "success_message": "登録が正常に完了しました",
    "success_description": "アカウントとコースが正常に保存されました",
    "track_label_success": "トラック",
    "name_label": "名前",
    "email_label": "メール",
    "studentid_label": "学生ID",
    "loading_register": "登録中...",
    "loading_courses": "コースを保存中...",
    "please_wait": "しばらくお待ちください",
    "error_title": "エラー！",
    "have_account": "すでにアカウントをお持ちですか？",
    "login_link": "ログイン",
    "avatar_user": "ユーザー",
    "avatar_book": "本",
    "no_courses_found": "このトラックのコースが見つかりません"
  },
  ko: { // Korean
    "page_title": "등록 및 과정 선택 - STIU 학생 포털",
    "step1_label": "개인 정보",
    "step2_label": "과정 선택",
    "step3_label": "성공",
    "form_title": "등록",
    "form_subtitle": "정확한 정보를 입력하여 신원을 확인합니다",
    "first_name": "이름",
    "first_name_placeholder": "이름을 입력하세요",
    "first_name_error": "이름을 입력하세요",
    "last_name": "성",
    "last_name_placeholder": "성을 입력하세요",
    "last_name_error": "성을 입력하세요",
    "email": "이메일",
    "email_placeholder": "이메일을 입력하세요",
    "email_error": "유효한 @students.stamford.edu 이메일을 입력하세요",
    "email_requirements": "@students.stamford.edu 이메일만 허용됩니다",
    "password": "비밀번호",
    "password_placeholder": "비밀번호를 입력하세요",
    "password_error": "유효한 비밀번호를 입력하세요",
    "password_requirements": "비밀번호는 다음을 포함해야 합니다: 대문자, 소문자, 숫자 및 특수 문자",
    "req_uppercase": "대문자",
    "req_lowercase": "소문자",
    "req_number": "숫자",
    "req_special": "특수 문자",
    "req_length": "최소 8자 이상",
    "confirm_password": "비밀번호 확인",
    "confirm_password_placeholder": "비밀번호를 다시 입력하세요",
    "confirm_password_error": "비밀번호가 일치하지 않습니다",
    "passwords_match": "비밀번호가 일치합니다",
    "passwords_not_match": "비밀번호가 일치하지 않습니다",
    "student_id": "학생 ID",
    "student_id_placeholder": "학생 ID를 입력하세요",
    "student_id_error": "학생 ID를 입력하세요",
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
    "track_label": "트랙 선택",
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
    "agree_text": "동의합니다",
    "terms_link": "이용 약관",
    "and_text": "및",
    "privacy_link": "개인정보 처리방침",
    "agree_error": "이용 약관에 동의해 주세요",
    "submit_btn": "등록 및 과정 선택",
    "back_btn": "돌아가기",
    "save_courses_btn": "저장 및 완료",
    "login_btn": "로그인",
    "course_selection_title": "전문 프로그램 선택",
    "course_selection_subtitle": "이 프로그램에서 이전에 수강한 과목을 선택하세요",
    "select_courses_instruction": "이미 수강한 과목을 선택하세요",
    "credits": "학점",
    "year": "학년",
    "prerequisite": "선수 과목",
    "success_title": "등록 성공!",
    "success_message": "등록이 성공적으로 완료되었습니다",
    "success_description": "계정과 과정이 성공적으로 저장되었습니다",
    "track_label_success": "트랙",
    "name_label": "이름",
    "email_label": "이메일",
    "studentid_label": "학생 ID",
    "loading_register": "등록 중...",
    "loading_courses": "과정 저장 중...",
    "please_wait": "잠시 기다려 주세요",
    "error_title": "오류!",
    "have_account": "이미 계정이 있으신가요?",
    "login_link": "로그인",
    "avatar_user": "사용자",
    "avatar_book": "책",
    "no_courses_found": "이 트랙에 대한 과정을 찾을 수 없습니다"
  },
  ar: { // Arabic
    "page_title": "التسجيل واختيار المقررات - بوابة طلاب STIU",
    "step1_label": "المعلومات الشخصية",
    "step2_label": "اختيار المقررات",
    "step3_label": "نجاح",
    "form_title": "التسجيل",
    "form_subtitle": "املأ المعلومات بشكل صحيح للتحقق من هويتك",
    "first_name": "الاسم الأول",
    "first_name_placeholder": "الرجاء إدخال اسمك الأول",
    "first_name_error": "الرجاء إدخال اسمك الأول",
    "last_name": "اسم العائلة",
    "last_name_placeholder": "الرجاء إدخال اسم عائلتك",
    "last_name_error": "الرجاء إدخال اسم عائلتك",
    "email": "البريد الإلكتروني",
    "email_placeholder": "الرجاء إدخال بريدك الإلكتروني",
    "email_error": "الرجاء إدخال بريد إلكتروني صالح @students.stamford.edu",
    "email_requirements": "يُسمح فقط ببريد @students.stamford.edu الإلكتروني",
    "password": "كلمة المرور",
    "password_placeholder": "الرجاء إدخال كلمة المرور الخاصة بك",
    "password_error": "الرجاء إدخال كلمة مرور صالحة",
    "password_requirements": "يجب أن تحتوي كلمة المرور على: أحرف كبيرة، أحرف صغيرة، أرقام، ورموز خاصة",
    "req_uppercase": "أحرف كبيرة",
    "req_lowercase": "أحرف صغيرة",
    "req_number": "أرقام",
    "req_special": "رموز خاصة",
    "req_length": "8 أحرف على الأقل",
    "confirm_password": "تأكيد كلمة المرور",
    "confirm_password_placeholder": "الرجاء إدخال كلمة المرور مرة أخرى",
    "confirm_password_error": "كلمات المرور غير متطابقة",
    "passwords_match": "كلمات المرور متطابقة",
    "passwords_not_match": "كلمات المرور غير متطابقة",
    "student_id": "رقم الطالب",
    "student_id_placeholder": "الرجاء إدخال رقم الطالب الخاص بك",
    "student_id_error": "الرجاء إدخال رقم الطالب الخاص بك",
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
    "track_label": "اختر المسار",
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
    "agree_text": "أوافق على",
    "terms_link": "الشروط والأحكام",
    "and_text": "و",
    "privacy_link": "سياسة الخصوصية",
    "agree_error": "الرجاء قبول الشروط والأحكام",
    "submit_btn": "سجل واختر المقررات",
    "back_btn": "العودة",
    "save_courses_btn": "حفظ وإنهاء",
    "login_btn": "تسجيل الدخول",
    "course_selection_title": "اختر البرنامج المتخصص",
    "course_selection_subtitle": "اختر المقررات التي درستها سابقًا في هذا البرنامج",
    "select_courses_instruction": "اختر المقررات التي درستها بالفعل",
    "credits": "ساعات معتمدة",
    "year": "السنة",
    "prerequisite": "المتطلب السابق",
    "success_title": "التسجيل ناجح!",
    "success_message": "تم إكمال التسجيل بنجاح",
    "success_description": "تم حفظ حسابك والمقررات بنجاح",
    "track_label_success": "المسار",
    "name_label": "الاسم",
    "email_label": "البريد الإلكتروني",
    "studentid_label": "رقم الطالب",
    "loading_register": "جاري التسجيل...",
    "loading_courses": "جاري حفظ المقررات...",
    "please_wait": "الرجاء الانتظار قليلاً",
    "error_title": "خطأ!",
    "have_account": "هل لديك حساب بالفعل؟",
    "login_link": "تسجيل الدخول",
    "avatar_user": "المستخدم",
    "avatar_book": "كتاب",
    "no_courses_found": "لم يتم العثور على مقررات لهذا المسار"
  },
  hi: { // Hindi
    "page_title": "पंजीकरण और पाठ्यक्रम चयन - STIU छात्र पोर्टल",
    "step1_label": "व्यक्तिगत जानकारी",
    "step2_label": "पाठ्यक्रम चयन",
    "step3_label": "सफलता",
    "form_title": "पंजीकरण",
    "form_subtitle": "अपनी पहचान सत्यापित करने के लिए सही जानकारी भरें",
    "first_name": "पहला नाम",
    "first_name_placeholder": "कृपया अपना पहला नाम दर्ज करें",
    "first_name_error": "कृपया अपना पहला नाम दर्ज करें",
    "last_name": "उपनाम",
    "last_name_placeholder": "कृपया अपना उपनाम दर्ज करें",
    "last_name_error": "कृपया अपना उपनाम दर्ज करें",
    "email": "ईमेल",
    "email_placeholder": "कृपया अपना ईमेल दर्ज करें",
    "email_error": "कृपया एक वैध @students.stamford.edu ईमेल दर्ज करें",
    "email_requirements": "केवल @students.stamford.edu ईमेल अनुमति हैं",
    "password": "पासवर्ड",
    "password_placeholder": "कृपया अपना पासवर्ड दर्ज करें",
    "password_error": "कृपया एक वैध पासवर्ड दर्ज करें",
    "password_requirements": "पासवर्ड में होना चाहिए: बड़े अक्षर, छोटे अक्षर, संख्या और विशेष वर्ण",
    "req_uppercase": "बड़े अक्षर",
    "req_lowercase": "छोटे अक्षर",
    "req_number": "संख्या",
    "req_special": "विशेष वर्ण",
    "req_length": "कम से कम 8 अक्षर",
    "confirm_password": "पासवर्ड की पुष्टि करें",
    "confirm_password_placeholder": "कृपया अपना पासवर्ड फिर से दर्ज करें",
    "confirm_password_error": "पासवर्ड मेल नहीं खाते",
    "passwords_match": "पासवर्ड मेल खाते हैं",
    "passwords_not_match": "पासवर्ड मेल नहीं खाते",
    "student_id": "छात्र आईडी",
    "student_id_placeholder": "कृपया अपनी छात्र आईडी दर्ज करें",
    "student_id_error": "कृपया अपनी छात्र आईडी दर्ज करें",
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
    "philippines": "फिलीपींस",
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
    "track_label": "ट्रैक चुनें",
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
    "agree_text": "मैं सहमत हूं",
    "terms_link": "नियम और शर्तें",
    "and_text": "और",
    "privacy_link": "गोपनीयता नीति",
    "agree_error": "कृपया नियम और शर्तें स्वीकार करें",
    "submit_btn": "पंजीकरण करें और पाठ्यक्रम चुनें",
    "back_btn": "वापस जाएं",
    "save_courses_btn": "सहेजें और पूरा करें",
    "login_btn": "लॉगिन",
    "course_selection_title": "विशेष कार्यक्रम चुनें",
    "course_selection_subtitle": "इस कार्यक्रम में पहले लिए गए पाठ्यक्रमों का चयन करें",
    "select_courses_instruction": "आपके द्वारा पहले से लिए गए पाठ्यक्रमों का चयन करें",
    "credits": "क्रेडिट",
    "year": "वर्ष",
    "prerequisite": "पूर्वापेक्षा",
    "success_title": "पंजीकरण सफल!",
    "success_message": "पंजीकरण सफलतापूर्वक पूरा हुआ",
    "success_description": "आपका खाता और पाठ्यक्रम सफलतापूर्वक सहेजे गए",
    "track_label_success": "ट्रैक",
    "name_label": "नाम",
    "email_label": "ईमेल",
    "studentid_label": "छात्र आईडी",
    "loading_register": "पंजीकरण हो रहा है...",
    "loading_courses": "पाठ्यक्रम सहेजे जा रहे हैं...",
    "please_wait": "कृपया कुछ क्षण प्रतीक्षा करें",
    "error_title": "त्रुटि!",
    "have_account": "क्या आपके पास पहले से ही एक खाता है?",
    "login_link": "लॉगिन",
    "avatar_user": "उपयोगकर्ता",
    "avatar_book": "किताब",
    "no_courses_found": "इस ट्रैक के लिए कोई पाठ्यक्रम नहीं मिला"
  },
  th: { // Thai
    "page_title": "สมัครสมาชิกและเลือกหลักสูตร - STIU Student Portal",
    "step1_label": "ข้อมูลส่วนตัว",
    "step2_label": "เลือกหลักสูตร",
    "step3_label": "สำเร็จ",
    "form_title": "สมัครสมาชิก",
    "form_subtitle": "กรอกข้อมูลให้ถูกต้องเพื่อยืนยันตัวตน",
    "first_name": "ชื่อ",
    "first_name_placeholder": "กรุณากรอกชื่อ",
    "first_name_error": "กรุณากรอกชื่อ",
    "last_name": "นามสกุล",
    "last_name_placeholder": "กรุณากรอกนามสกุล",
    "last_name_error": "กรุณากรอกนามสกุล",
    "email": "อีเมล",
    "email_placeholder": "กรุณากรอกอีเมล",
    "email_error": "กรุณากรอกอีเมล @students.stamford.edu ที่ถูกต้อง",
    "email_requirements": "ต้องใช้อีเมล @students.stamford.edu เท่านั้น",
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
    "track_label": "เลือกสาขาวิชา",
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
    "agree_text": "ฉันยอมรับ",
    "terms_link": "ข้อกำหนดและเงื่อนไข",
    "and_text": "และ",
    "privacy_link": "นโยบายความเป็นส่วนตัว",
    "agree_error": "กรุณายอมรับข้อกำหนดและเงื่อนไข",
    "submit_btn": "สมัครสมาชิกและเลือกหลักสูตร",
    "back_btn": "ย้อนกลับ",
    "save_courses_btn": "บันทึกและเสร็จสิ้น",
    "login_btn": "เข้าสู่ระบบ",
    "course_selection_title": "เลือกหลักสูตรสาขาเฉพาะ",
    "course_selection_subtitle": "เลือกวิชาที่คุณเคยเรียนมาแล้วในสาขานี้",
    "select_courses_instruction": "เลือกวิชาที่เคยเรียนมาแล้ว",
    "credits": "หน่วยกิต",
    "year": "ปี",
    "prerequisite": "วิชาบังคับก่อน",
    "success_title": "สมัครสมาชิกสำเร็จ!",
    "success_message": "การสมัครสมาชิกเสร็จสมบูรณ์",
    "success_description": "บัญชีและหลักสูตรของคุณถูกบันทึกเรียบร้อยแล้ว",
    "track_label_success": "สาขา",
    "name_label": "ชื่อ",
    "email_label": "อีเมล",
    "studentid_label": "รหัสนักศึกษา",
    "loading_register": "กำลังสมัครสมาชิก...",
    "loading_courses": "กำลังบันทึกหลักสูตร...",
    "please_wait": "กรุณารอสักครู่",
    "error_title": "เกิดข้อผิดพลาด!",
    "have_account": "มีบัญชีอยู่แล้ว?",
    "login_link": "เข้าสู่ระบบ",
    "avatar_user": "ผู้ใช้",
    "avatar_book": "หนังสือ",
    "no_courses_found": "ไม่พบข้อมูลหลักสูตรสำหรับสาขานี้"
  },
  vi: { // Vietnamese
    "page_title": "Đăng ký và Chọn khóa học - Cổng thông tin sinh viên STIU",
    "step1_label": "Thông tin cá nhân",
    "step2_label": "Chọn khóa học",
    "step3_label": "Thành công",
    "form_title": "Đăng ký",
    "form_subtitle": "Điền thông tin chính xác để xác minh danh tính",
    "first_name": "Tên",
    "first_name_placeholder": "Vui lòng nhập tên của bạn",
    "first_name_error": "Vui lòng nhập tên của bạn",
    "last_name": "Họ",
    "last_name_placeholder": "Vui lòng nhập họ của bạn",
    "last_name_error": "Vui lòng nhập họ của bạn",
    "email": "Email",
    "email_placeholder": "Vui lòng nhập email của bạn",
    "email_error": "Vui lòng nhập email @students.stamford.edu hợp lệ",
    "email_requirements": "Chỉ cho phép email @students.stamford.edu",
    "password": "Mật khẩu",
    "password_placeholder": "Vui lòng nhập mật khẩu của bạn",
    "password_error": "Vui lòng nhập mật khẩu hợp lệ",
    "password_requirements": "Mật khẩu phải chứa: chữ hoa, chữ thường, số và ký tự đặc biệt",
    "req_uppercase": "Chữ hoa",
    "req_lowercase": "Chữ thường",
    "req_number": "Số",
    "req_special": "Ký tự đặc biệt",
    "req_length": "Ít nhất 8 ký tự",
    "confirm_password": "Xác nhận mật khẩu",
    "confirm_password_placeholder": "Vui lòng nhập lại mật khẩu của bạn",
    "confirm_password_error": "Mật khẩu không khớp",
    "passwords_match": "Mật khẩu khớp",
    "passwords_not_match": "Mật khẩu không khớp",
    "student_id": "Mã sinh viên",
    "student_id_placeholder": "Vui lòng nhập mã sinh viên của bạn",
    "student_id_error": "Vui lòng nhập mã sinh viên của bạn",
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
    "track_label": "Chọn chuyên ngành",
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
    "agree_text": "Tôi đồng ý với",
    "terms_link": "Điều khoản và Điều kiện",
    "and_text": "và",
    "privacy_link": "Chính sách Bảo mật",
    "agree_error": "Vui lòng chấp nhận điều khoản và điều kiện",
    "submit_btn": "Đăng ký và Chọn khóa học",
    "back_btn": "Quay lại",
    "save_courses_btn": "Lưu và Hoàn thành",
    "login_btn": "Đăng nhập",
    "course_selection_title": "Chọn chương trình chuyên ngành",
    "course_selection_subtitle": "Chọn các khóa học bạn đã học trước đây trong chương trình này",
    "select_courses_instruction": "Chọn các khóa học bạn đã học",
    "credits": "tín chỉ",
    "year": "Năm",
    "prerequisite": "Điều kiện tiên quyết",
    "success_title": "Đăng ký thành công!",
    "success_message": "Đăng ký hoàn tất thành công",
    "success_description": "Tài khoản và khóa học của bạn đã được lưu thành công",
    "track_label_success": "Chuyên ngành",
    "name_label": "Tên",
    "email_label": "Email",
    "studentid_label": "Mã sinh viên",
    "loading_register": "Đang đăng ký...",
    "loading_courses": "Đang lưu khóa học...",
    "please_wait": "Vui lòng đợi một chút",
    "error_title": "Lỗi!",
    "have_account": "Đã có tài khoản?",
    "login_link": "Đăng nhập",
    "avatar_user": "Người dùng",
    "avatar_book": "Sách",
    "no_courses_found": "Không tìm thấy khóa học cho chuyên ngành này"
  },
  id: { // Indonesian
    "page_title": "Pendaftaran dan Pemilihan Kursus - Portal Mahasiswa STIU",
    "step1_label": "Informasi Pribadi",
    "step2_label": "Pemilihan Kursus",
    "step3_label": "Berhasil",
    "form_title": "Pendaftaran",
    "form_subtitle": "Isi informasi dengan benar untuk memverifikasi identitas Anda",
    "first_name": "Nama Depan",
    "first_name_placeholder": "Masukkan nama depan Anda",
    "first_name_error": "Masukkan nama depan Anda",
    "last_name": "Nama Belakang",
    "last_name_placeholder": "Masukkan nama belakang Anda",
    "last_name_error": "Masukkan nama belakang Anda",
    "email": "Email",
    "email_placeholder": "Masukkan email Anda",
    "email_error": "Masukkan email @students.stamford.edu yang valid",
    "email_requirements": "Hanya email @students.stamford.edu yang diizinkan",
    "password": "Kata Sandi",
    "password_placeholder": "Masukkan kata sandi Anda",
    "password_error": "Masukkan kata sandi yang valid",
    "password_requirements": "Kata sandi harus mengandung: huruf besar, huruf kecil, angka, dan karakter khusus",
    "req_uppercase": "Huruf besar",
    "req_lowercase": "Huruf kecil",
    "req_number": "Angka",
    "req_special": "Karakter khusus",
    "req_length": "Minimal 8 karakter",
    "confirm_password": "Konfirmasi Kata Sandi",
    "confirm_password_placeholder": "Masukkan kata sandi Anda lagi",
    "confirm_password_error": "Kata sandi tidak cocok",
    "passwords_match": "Kata sandi cocok",
    "passwords_not_match": "Kata sandi tidak cocok",
    "student_id": "ID Mahasiswa",
    "student_id_placeholder": "Masukkan ID mahasiswa Anda",
    "student_id_error": "Masukkan ID mahasiswa Anda",
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
    "track_label": "Pilih Jalur",
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
    "agree_text": "Saya setuju dengan",
    "terms_link": "Syarat dan Ketentuan",
    "and_text": "dan",
    "privacy_link": "Kebijakan Privasi",
    "agree_error": "Terima syarat dan ketentuan",
    "submit_btn": "Daftar dan Pilih Kursus",
    "back_btn": "Kembali",
    "save_courses_btn": "Simpan dan Selesaikan",
    "login_btn": "Masuk",
    "course_selection_title": "Pilih Program Spesialisasi",
    "course_selection_subtitle": "Pilih kursus yang pernah Anda ambil sebelumnya dalam program ini",
    "select_courses_instruction": "Pilih kursus yang sudah Anda ambil",
    "credits": "kredit",
    "year": "Tahun",
    "prerequisite": "Prasyarat",
    "success_title": "Pendaftaran Berhasil!",
    "success_message": "Pendaftaran berhasil diselesaikan",
    "success_description": "Akun dan kursus Anda berhasil disimpan",
    "track_label_success": "Jalur",
    "name_label": "Nama",
    "email_label": "Email",
    "studentid_label": "ID Mahasiswa",
    "loading_register": "Mendaftar...",
    "loading_courses": "Menyimpan kursus...",
    "please_wait": "Harap tunggu sebentar",
    "error_title": "Kesalahan!",
    "have_account": "Sudah punya akun?",
    "login_link": "Masuk",
    "avatar_user": "Pengguna",
    "avatar_book": "Buku",
    "no_courses_found": "Tidak ditemukan kursus untuk jalur ini"
  },
  ms: { // Malay
    "page_title": "Pendaftaran dan Pemilihan Kursus - Portal Pelajar STIU",
    "step1_label": "Maklumat Peribadi",
    "step2_label": "Pemilihan Kursus",
    "step3_label": "Berjaya",
    "form_title": "Pendaftaran",
    "form_subtitle": "Isi maklumat dengan betul untuk mengesahkan identiti anda",
    "first_name": "Nama Pertama",
    "first_name_placeholder": "Sila masukkan nama pertama anda",
    "first_name_error": "Sila masukkan nama pertama anda",
    "last_name": "Nama Akhir",
    "last_name_placeholder": "Sila masukkan nama akhir anda",
    "last_name_error": "Sila masukkan nama akhir anda",
    "email": "E-mel",
    "email_placeholder": "Sila masukkan e-mel anda",
    "email_error": "Sila masukkan e-mel @students.stamford.edu yang sah",
    "email_requirements": "Hanya e-mel @students.stamford.edu dibenarkan",
    "password": "Kata Laluan",
    "password_placeholder": "Sila masukkan kata laluan anda",
    "password_error": "Sila masukkan kata laluan yang sah",
    "password_requirements": "Kata laluan mesti mengandungi: huruf besar, huruf kecil, nombor, dan aksara khas",
    "req_uppercase": "Huruf besar",
    "req_lowercase": "Huruf kecil",
    "req_number": "Nombor",
    "req_special": "Aksara khas",
    "req_length": "Sekurang-kurangnya 8 aksara",
    "confirm_password": "Sahkan Kata Laluan",
    "confirm_password_placeholder": "Sila masukkan kata laluan anda sekali lagi",
    "confirm_password_error": "Kata laluan tidak sepadan",
    "passwords_match": "Kata laluan sepadan",
    "passwords_not_match": "Kata laluan tidak sepadan",
    "student_id": "ID Pelajar",
    "student_id_placeholder": "Sila masukkan ID pelajar anda",
    "student_id_error": "Sila masukkan ID pelajar anda",
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
    "track_label": "Pilih Trek",
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
    "agree_text": "Saya bersetuju dengan",
    "terms_link": "Terma dan Syarat",
    "and_text": "dan",
    "privacy_link": "Dasar Privasi",
    "agree_error": "Sila terima terma dan syarat",
    "submit_btn": "Daftar dan Pilih Kursus",
    "back_btn": "Kembali",
    "save_courses_btn": "Simpan dan Selesaikan",
    "login_btn": "Log Masuk",
    "course_selection_title": "Pilih Program Pengkhususan",
    "course_selection_subtitle": "Pilih kursus yang telah anda ambil sebelum ini dalam program ini",
    "select_courses_instruction": "Pilih kursus yang telah anda ambil",
    "credits": "kredit",
    "year": "Tahun",
    "prerequisite": "Prasyarat",
    "success_title": "Pendaftaran Berjaya!",
    "success_message": "Pendaftaran berjaya diselesaikan",
    "success_description": "Akaun dan kursus anda telah disimpan dengan jayanya",
    "track_label_success": "Trek",
    "name_label": "Nama",
    "email_label": "E-mel",
    "studentid_label": "ID Pelajar",
    "loading_register": "Mendaftar...",
    "loading_courses": "Menyimpan kursus...",
    "please_wait": "Sila tunggu sebentar",
    "error_title": "Ralat!",
    "have_account": "Sudah ada akaun?",
    "login_link": "Log Masuk",
    "avatar_user": "Pengguna",
    "avatar_book": "Buku",
    "no_courses_found": "Tiada kursus ditemui untuk trek ini"
  },
  ru: { // Russian
    "page_title": "Регистрация и выбор курсов - Студенческий портал STIU",
    "step1_label": "Личная информация",
    "step2_label": "Выбор курсов",
    "step3_label": "Успех",
    "form_title": "Регистрация",
    "form_subtitle": "Заполните информацию правильно для подтверждения личности",
    "first_name": "Имя",
    "first_name_placeholder": "Пожалуйста, введите ваше имя",
    "first_name_error": "Пожалуйста, введите ваше имя",
    "last_name": "Фамилия",
    "last_name_placeholder": "Пожалуйста, введите вашу фамилию",
    "last_name_error": "Пожалуйста, введите вашу фамилию",
    "email": "Электронная почта",
    "email_placeholder": "Пожалуйста, введите вашу электронную почту",
    "email_error": "Пожалуйста, введите действительный адрес электронной почты @students.stamford.edu",
    "email_requirements": "Разрешены только адреса электронной почты @students.stamford.edu",
    "password": "Пароль",
    "password_placeholder": "Пожалуйста, введите ваш пароль",
    "password_error": "Пожалуйста, введите действительный пароль",
    "password_requirements": "Пароль должен содержать: заглавные буквы, строчные буквы, цифры и специальные символы",
    "req_uppercase": "Заглавные буквы",
    "req_lowercase": "Строчные буквы",
    "req_number": "Цифры",
    "req_special": "Специальные символы",
    "req_length": "Не менее 8 символов",
    "confirm_password": "Подтвердите пароль",
    "confirm_password_placeholder": "Пожалуйста, введите ваш пароль еще раз",
    "confirm_password_error": "Пароли не совпадают",
    "passwords_match": "Пароли совпадают",
    "passwords_not_match": "Пароли не совпадают",
    "student_id": "Студенческий билет",
    "student_id_placeholder": "Пожалуйста, введите ваш студенческий билет",
    "student_id_error": "Пожалуйста, введите ваш студенческий билет",
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
    "track_label": "Выберите направление",
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
    "agree_text": "Я согласен с",
    "terms_link": "Условиями и положениями",
    "and_text": "и",
    "privacy_link": "Политикой конфиденциальности",
    "agree_error": "Пожалуйста, примите условия и положения",
    "submit_btn": "Зарегистрироваться и выбрать курсы",
    "back_btn": "Назад",
    "save_courses_btn": "Сохранить и завершить",
    "login_btn": "Войти",
    "course_selection_title": "Выберите специализированную программу",
    "course_selection_subtitle": "Выберите курсы, которые вы ранее изучали по этой программе",
    "select_courses_instruction": "Выберите курсы, которые вы уже прошли",
    "credits": "кредиты",
    "year": "Курс",
    "prerequisite": "Предварительное требование",
    "success_title": "Регистрация прошла успешно!",
    "success_message": "Регистрация успешно завершена",
    "success_description": "Ваша учетная запись и курсы успешно сохранены",
    "track_label_success": "Направление",
    "name_label": "Имя",
    "email_label": "Электронная почта",
    "studentid_label": "Студенческий билет",
    "loading_register": "Регистрация...",
    "loading_courses": "Сохранение курсов...",
    "please_wait": "Пожалуйста, подождите",
    "error_title": "Ошибка!",
    "have_account": "Уже есть аккаунт?",
    "login_link": "Войти",
    "avatar_user": "Пользователь",
    "avatar_book": "Книга",
    "no_courses_found": "Курсы для этого направления не найдены"
  },
  ur: { // Urdu
    "page_title": "رجسٹریشن اور کورس کا انتخاب - STIU سٹوڈنٹ پورٹل",
    "step1_label": "ذاتی معلومات",
    "step2_label": "کورس کا انتخاب",
    "step3_label": "کامیابی",
    "form_title": "رجسٹریشن",
    "form_subtitle": "اپنی شناخت کی تصدیق کے لیے معلومات کو صحیح طریقے سے درج کریں",
    "first_name": "پہلا نام",
    "first_name_placeholder": "براہ کرم اپنا پہلا نام درج کریں",
    "first_name_error": "براہ کرم اپنا پہلا نام درج کریں",
    "last_name": "آخری نام",
    "last_name_placeholder": "براہ کرم اپنا آخری نام درج کریں",
    "last_name_error": "براہ کرم اپنا آخری نام درج کریں",
    "email": "ای میل",
    "email_placeholder": "براہ کرم اپنا ای میل درج کریں",
    "email_error": "براہ کرم ایک درست @students.stamford.edu ای میل درج کریں",
    "email_requirements": "صرف @students.stamford.edu ای میلز کی اجازت ہے",
    "password": "پاس ورڈ",
    "password_placeholder": "براہ کرم اپنا پاس ورڈ درج کریں",
    "password_error": "براہ کرم ایک درست پاس ورڈ درج کریں",
    "password_requirements": "پاس ورڈ میں ہونا چاہیے: بڑے حروف، چھوٹے حروف، نمبر، اور خصوصی حروف",
    "req_uppercase": "بڑے حروف",
    "req_lowercase": "چھوٹے حروف",
    "req_number": "نمبر",
    "req_special": "خصوصی حروف",
    "req_length": "کم از کم 8 حروف",
    "confirm_password": "پاس ورڈ کی تصدیق کریں",
    "confirm_password_placeholder": "براہ کرم اپنا پاس ورڈ دوبارہ درج کریں",
    "confirm_password_error": "پاس ورڈ مماثل نہیں ہیں",
    "passwords_match": "پاس ورڈ مماثل ہیں",
    "passwords_not_match": "پاس ورڈ مماثل نہیں ہیں",
    "student_id": "طالب علم ID",
    "student_id_placeholder": "براہ کرم اپنا طالب علم ID درج کریں",
    "student_id_error": "براہ کرم اپنا طالب علم ID درج کریں",
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
    "track_label": "ٹریک منتخب کریں",
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
    "agree_text": "میں اس سے متفق ہوں",
    "terms_link": "شرائط و ضوابط",
    "and_text": "اور",
    "privacy_link": "رازداری کی پالیسی",
    "agree_error": "براہ کرم شرائط و ضوابط قبول کریں",
    "submit_btn": "رجسٹر کریں اور کورسز منتخب کریں",
    "back_btn": "واپس جائیں",
    "save_courses_btn": "محفوظ کریں اور مکمل کریں",
    "login_btn": "لاگ ان",
    "course_selection_title": "خصوصی پروگرام منتخب کریں",
    "course_selection_subtitle": "اس پروگرام میں آپ نے پہلے لیے ہوئے کورسز منتخب کریں",
    "select_courses_instruction": "آپ نے پہلے سے لیے ہوئے کورسز منتخب کریں",
    "credits": "کریڈٹس",
    "year": "سال",
    "prerequisite": "پیشگی ضرورت",
    "success_title": "رجسٹریشن کامیاب!",
    "success_message": "رجسٹریشن کامیابی سے مکمل ہو گئی",
    "success_description": "آپ کا اکاؤنٹ اور کورسز کامیابی سے محفوظ ہو گئے",
    "track_label_success": "ٹریک",
    "name_label": "نام",
    "email_label": "ای میل",
    "studentid_label": "طالب علم ID",
    "loading_register": "رجسٹر ہو رہا ہے...",
    "loading_courses": "کورسز محفوظ ہو رہے ہیں...",
    "please_wait": "براہ کرم تھوڑی دیر انتظار کریں",
    "error_title": "خرابی!",
    "have_account": "پہلے سے اکاؤنٹ ہے؟",
    "login_link": "لاگ ان",
    "avatar_user": "صارف",
    "avatar_book": "کتاب",
    "no_courses_found": "اس ٹریک کے لیے کوئی کورس نہیں ملا"
  },
  tr: { // Turkish
    "page_title": "Kayıt ve Ders Seçimi - STIU Öğrenci Portalı",
    "step1_label": "Kişisel Bilgiler",
    "step2_label": "Ders Seçimi",
    "step3_label": "Başarı",
    "form_title": "Kayıt",
    "form_subtitle": "Kimliğinizi doğrulamak için bilgileri doğru doldurun",
    "first_name": "Ad",
    "first_name_placeholder": "Lütfen adınızı girin",
    "first_name_error": "Lütfen adınızı girin",
    "last_name": "Soyad",
    "last_name_placeholder": "Lütfen soyadınızı girin",
    "last_name_error": "Lütfen soyadınızı girin",
    "email": "E-posta",
    "email_placeholder": "Lütfen e-posta adresinizi girin",
    "email_error": "Lütfen geçerli bir @students.stamford.edu e-posta adresi girin",
    "email_requirements": "Sadece @students.stamford.edu e-posta adreslerine izin verilir",
    "password": "Şifre",
    "password_placeholder": "Lütfen şifrenizi girin",
    "password_error": "Lütfen geçerli bir şifre girin",
    "password_requirements": "Şifre şunları içermelidir: büyük harf, küçük harf, sayı ve özel karakter",
    "req_uppercase": "Büyük harf",
    "req_lowercase": "Küçük harf",
    "req_number": "Sayı",
    "req_special": "Özel karakter",
    "req_length": "En az 8 karakter",
    "confirm_password": "Şifreyi Onayla",
    "confirm_password_placeholder": "Lütfen şifrenizi tekrar girin",
    "confirm_password_error": "Şifreler eşleşmiyor",
    "passwords_match": "Şifreler eşleşiyor",
    "passwords_not_match": "Şifreler eşleşmiyor",
    "student_id": "Öğrenci Numarası",
    "student_id_placeholder": "Lütfen öğrenci numaranızı girin",
    "student_id_error": "Lütfen öğrenci numaranızı girin",
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
    "track_label": "Bölüm Seçin",
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
    "agree_text": "Kabul ediyorum",
    "terms_link": "Şartlar ve Koşullar",
    "and_text": "ve",
    "privacy_link": "Gizlilik Politikası",
    "agree_error": "Lütfen şartlar ve koşulları kabul edin",
    "submit_btn": "Kayıt Ol ve Ders Seç",
    "back_btn": "Geri Dön",
    "save_courses_btn": "Kaydet ve Tamamla",
    "login_btn": "Giriş Yap",
    "course_selection_title": "Özel Program Seç",
    "course_selection_subtitle": "Bu programda daha önce aldığınız dersleri seçin",
    "select_courses_instruction": "Daha önce aldığınız dersleri seçin",
    "credits": "kredi",
    "year": "Yıl",
    "prerequisite": "Önkoşul",
    "success_title": "Kayıt Başarılı!",
    "success_message": "Kayıt başarıyla tamamlandı",
    "success_description": "Hesabınız ve dersleriniz başarıyla kaydedildi",
    "track_label_success": "Bölüm",
    "name_label": "Ad",
    "email_label": "E-posta",
    "studentid_label": "Öğrenci Numarası",
    "loading_register": "Kayıt yapılıyor...",
    "loading_courses": "Dersler kaydediliyor...",
    "please_wait": "Lütfen biraz bekleyin",
    "error_title": "Hata!",
    "have_account": "Zaten bir hesabınız var mı?",
    "login_link": "Giriş Yap",
    "avatar_user": "Kullanıcı",
    "avatar_book": "Kitap",
    "no_courses_found": "Bu bölüm için ders bulunamadı"
  },
  fa: { // Persian (Farsi)
    "page_title": "ثبت نام و انتخاب دوره - پورتال دانشجویی STIU",
    "step1_label": "اطلاعات شخصی",
    "step2_label": "انتخاب دوره",
    "step3_label": "موفقیت",
    "form_title": "ثبت نام",
    "form_subtitle": "اطلاعات را به درستی پر کنید تا هویت شما تأیید شود",
    "first_name": "نام",
    "first_name_placeholder": "لطفا نام خود را وارد کنید",
    "first_name_error": "لطفا نام خود را وارد کنید",
    "last_name": "نام خانوادگی",
    "last_name_placeholder": "لطفا نام خانوادگی خود را وارد کنید",
    "last_name_error": "لطفا نام خانوادگی خود را وارد کنید",
    "email": "ایمیل",
    "email_placeholder": "لطفا ایمیل خود را وارد کنید",
    "email_error": "لطفا یک ایمیل معتبر @students.stamford.edu وارد کنید",
    "email_requirements": "فقط ایمیل های @students.stamford.edu مجاز هستند",
    "password": "رمز عبور",
    "password_placeholder": "لطفا رمز عبور خود را وارد کنید",
    "password_error": "لطفا یک رمز عبور معتبر وارد کنید",
    "password_requirements": "رمز عبور باید شامل: حروف بزرگ، حروف کوچک، اعداد و کاراکترهای خاص باشد",
    "req_uppercase": "حروف بزرگ",
    "req_lowercase": "حروف کوچک",
    "req_number": "اعداد",
    "req_special": "کاراکترهای خاص",
    "req_length": "حداقل 8 کاراکتر",
    "confirm_password": "تأیید رمز عبور",
    "confirm_password_placeholder": "لطفا رمز عبور خود را دوباره وارد کنید",
    "confirm_password_error": "رمزهای عبور مطابقت ندارند",
    "passwords_match": "رمزهای عبور مطابقت دارند",
    "passwords_not_match": "رمزهای عبور مطابقت ندارند",
    "student_id": "شماره دانشجویی",
    "student_id_placeholder": "لطفا شماره دانشجویی خود را وارد کنید",
    "student_id_error": "لطفا شماره دانشجویی خود را وارد کنید",
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
    "track_label": "انتخاب رشته",
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
    "agree_text": "من موافقم با",
    "terms_link": "شرایط و ضوابط",
    "and_text": "و",
    "privacy_link": "سیاست حفظ حریم خصوصی",
    "agree_error": "لطفا شرایط و ضوابط را بپذیرید",
    "submit_btn": "ثبت نام و انتخاب دوره ها",
    "back_btn": "بازگشت",
    "save_courses_btn": "ذخیره و تکمیل",
    "login_btn": "ورود",
    "course_selection_title": "انتخاب برنامه تخصصی",
    "course_selection_subtitle": "دوره هایی را که قبلاً در این برنامه گذرانده اید انتخاب کنید",
    "select_courses_instruction": "دوره هایی را که قبلاً گذرانده اید انتخاب کنید",
    "credits": "واحد",
    "year": "سال",
    "prerequisite": "پیش نیاز",
    "success_title": "ثبت نام موفق!",
    "success_message": "ثبت نام با موفقیت تکمیل شد",
    "success_description": "حساب کاربری و دوره های شما با موفقیت ذخیره شد",
    "track_label_success": "رشته",
    "name_label": "نام",
    "email_label": "ایمیل",
    "studentid_label": "شماره دانشجویی",
    "loading_register": "در حال ثبت نام...",
    "loading_courses": "در حال ذخیره دوره ها...",
    "please_wait": "لطفا کمی صبر کنید",
    "error_title": "خطا!",
    "have_account": "قبلاً حساب کاربری دارید؟",
    "login_link": "ورود",
    "avatar_user": "کاربر",
    "avatar_book": "کتاب",
    "no_courses_found": "هیچ دوره ای برای این رشته یافت نشد"
  },
  ta: { // Tamil
    "page_title": "பதிவு மற்றும் பாடநெறி தேர்வு - STIU மாணவர் போர்ட்டல்",
    "step1_label": "தனிப்பட்ட தகவல்",
    "step2_label": "பாடநெறி தேர்வு",
    "step3_label": "வெற்றி",
    "form_title": "பதிவு",
    "form_subtitle": "உங்கள் அடையாளத்தை சரிபார்க்க தகவல்களை சரியாக நிரப்பவும்",
    "first_name": "முதல் பெயர்",
    "first_name_placeholder": "உங்கள் முதல் பெயரை உள்ளிடவும்",
    "first_name_error": "உங்கள் முதல் பெயரை உள்ளிடவும்",
    "last_name": "கடைசி பெயர்",
    "last_name_placeholder": "உங்கள் கடைசி பெயரை உள்ளிடவும்",
    "last_name_error": "உங்கள் கடைசி பெயரை உள்ளிடவும்",
    "email": "மின்னஞ்சல்",
    "email_placeholder": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    "email_error": "சரியான @students.stamford.edu மின்னஞ்சலை உள்ளிடவும்",
    "email_requirements": "@students.stamford.edu மின்னஞ்சல்கள் மட்டுமே அனுமதிக்கப்படுகின்றன",
    "password": "கடவுச்சொல்",
    "password_placeholder": "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
    "password_error": "சரியான கடவுச்சொல்லை உள்ளிடவும்",
    "password_requirements": "கடவுச்சொல் கொண்டிருக்க வேண்டும்: பெரிய எழுத்து, சிறிய எழுத்து, எண் மற்றும் சிறப்பு எழுத்து",
    "req_uppercase": "பெரிய எழுத்து",
    "req_lowercase": "சிறிய எழுத்து",
    "req_number": "எண்",
    "req_special": "சிறப்பு எழுத்து",
    "req_length": "குறைந்தது 8 எழுத்துகள்",
    "confirm_password": "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    "confirm_password_placeholder": "உங்கள் கடவுச்சொல்லை மீண்டும் உள்ளிடவும்",
    "confirm_password_error": "கடவுச்சொற்கள் பொருந்தவில்லை",
    "passwords_match": "கடவுச்சொற்கள் பொருந்துகின்றன",
    "passwords_not_match": "கடவுச்சொற்கள் பொருந்தவில்லை",
    "student_id": "மாணவர் ஐடி",
    "student_id_placeholder": "உங்கள் மாணவர் ஐடியை உள்ளிடவும்",
    "student_id_error": "உங்கள் மாணவர் ஐடியை உள்ளிடவும்",
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
    "track_label": "பாடத்தைத் தேர்ந்தெடுக்கவும்",
    "select_track": "பாடத்தைத் தேர்ந்தெடுக்கவும்",
    "track_software": "மென்பொருள் பொறியியல்",
    "track_ecommerce": "மின்வணிக தொழில்நுட்பம்",
    "track_data": "தரவு அறிவியல்",
    "track_network": "பிணையம் மற்றும் பாதுகாப்பு",
    "track_error": "பாடத்தைத் தேர்ந்தெடுக்கவும்",
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
    "agree_text": "நான் ஒப்புக்கொள்கிறேன்",
    "terms_link": "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    "and_text": "மற்றும்",
    "privacy_link": "தனியுரிமைக் கொள்கை",
    "agree_error": "விதிமுறைகள் மற்றும் நிபந்தனைகளை ஏற்கவும்",
    "submit_btn": "பதிவு செய்யவும் மற்றும் பாடநெறிகளைத் தேர்ந்தெடுக்கவும்",
    "back_btn": "திரும்பிச் செல்லவும்",
    "save_courses_btn": "சேமித்து முடிக்கவும்",
    "login_btn": "உள்நுழையவும்",
    "course_selection_title": "சிறப்பு நிரலைத் தேர்ந்தெடுக்கவும்",
    "course_selection_subtitle": "இந்த நிரலில் நீங்கள் முன்பு படித்த பாடநெறிகளைத் தேர்ந்தெடுக்கவும்",
    "select_courses_instruction": "நீங்கள் ஏற்கனவே படித்த பாடநெறிகளைத் தேர்ந்தெடுக்கவும்",
    "credits": "கடன் புள்ளிகள்",
    "year": "ஆண்டு",
    "prerequisite": "முன்நிபந்தனை",
    "success_title": "பதிவு வெற்றிகரமாக!",
    "success_message": "பதிவு வெற்றிகரமாக முடிக்கப்பட்டது",
    "success_description": "உங்கள் கணக்கு மற்றும் பாடநெறிகள் வெற்றிகரமாக சேமிக்கப்பட்டன",
    "track_label_success": "பாடம்",
    "name_label": "பெயர்",
    "email_label": "மின்னஞ்சல்",
    "studentid_label": "மாணவர் ஐடி",
    "loading_register": "பதிவு செய்யப்படுகிறது...",
    "loading_courses": "பாடநெறிகள் சேமிக்கப்படுகின்றன...",
    "please_wait": "கொஞ்சம் காத்திருக்கவும்",
    "error_title": "பிழை!",
    "have_account": "ஏற்கனவே கணக்கு உள்ளதா?",
    "login_link": "உள்நுழையவும்",
    "avatar_user": "பயனர்",
    "avatar_book": "புத்தகம்",
    "no_courses_found": "இந்த பாடத்திற்கு பாடநெறிகள் கிடைக்கவில்லை"
  },
  te: { // Telugu
    "page_title": "నమోదు మరియు కోర్సు ఎంపిక - STIU విద్యార్థి పోర్టల్",
    "step1_label": "వ్యక్తిగత సమాచారం",
    "step2_label": "కోర్సు ఎంపిక",
    "step3_label": "విజయం",
    "form_title": "నమోదు",
    "form_subtitle": "మీ గుర్తింపును ధృవీకరించడానికి సమాచారాన్ని సరిగ్గా నింపండి",
    "first_name": "మొదటి పేరు",
    "first_name_placeholder": "దయచేసి మీ మొదటి పేరు నమోదు చేయండి",
    "first_name_error": "దయచేసి మీ మొదటి పేరు నమోదు చేయండి",
    "last_name": "చివరి పేరు",
    "last_name_placeholder": "దయచేసి మీ చివరి పేరు నమోదు చేయండి",
    "last_name_error": "దయచేసి మీ చివరి పేరు నమోదు చేయండి",
    "email": "ఇమెయిల్",
    "email_placeholder": "దయచేసి మీ ఇమెయిల్ నమోదు చేయండి",
    "email_error": "దయచేసి చెల్లుబాటు అయ్యే @students.stamford.edu ఇమెయిల్ నమోదు చేయండి",
    "email_requirements": "@students.stamford.edu ఇమెయిల్స్ మాత్రమే అనుమతించబడతాయి",
    "password": "పాస్వర్డ్",
    "password_placeholder": "దయచేసి మీ పాస్వర్డ్ నమోదు చేయండి",
    "password_error": "దయచేసి చెల్లుబాటు అయ్యే పాస్వర్డ్ నమోదు చేయండి",
    "password_requirements": "పాస్వర్డ్ కలిగి ఉండాలి: పెద్ద అక్షరాలు, చిన్న అక్షరాలు, సంఖ్య మరియు ప్రత్యేక అక్షరాలు",
    "req_uppercase": "పెద్ద అక్షరాలు",
    "req_lowercase": "చిన్న అక్షరాలు",
    "req_number": "సంఖ్య",
    "req_special": "ప్రత్యేక అక్షరాలు",
    "req_length": "కనీసం 8 అక్షరాలు",
    "confirm_password": "పాస్వర్డ్ని నిర్ధారించండి",
    "confirm_password_placeholder": "దయచేసి మీ పాస్వర్డ్ మళ్లీ నమోదు చేయండి",
    "confirm_password_error": "పాస్వర్డ్లు సరిపోలడం లేదు",
    "passwords_match": "పాస్వర్డ్లు సరిపోలాయి",
    "passwords_not_match": "పాస్వర్డ్లు సరిపోలడం లేదు",
    "student_id": "విద్యార్థి ఐడి",
    "student_id_placeholder": "దయచేసి మీ విద్యార్థి ఐడి నమోదు చేయండి",
    "student_id_error": "దయచేసి మీ విద్యార్థి ఐడి నమోదు చేయండి",
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
    "track_label": "ట్రాక్ ఎంచుకోండి",
    "select_track": "ట్రాక్ ఎంచుకోండి",
    "track_software": "సాఫ్ట్వేర్ ఇంజనీరింగ్",
    "track_ecommerce": "ఇ-కామర్స్ టెక్నాలజీ",
    "track_data": "డేటా సైన్స్",
    "track_network": "నెట్వర్క్ మరియు భద్రత",
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
    "agree_text": "నేను అంగీకరిస్తున్నాను",
    "terms_link": "నిబంధనలు మరియు షరతులు",
    "and_text": "మరియు",
    "privacy_link": "గోప్యతా విధానం",
    "agree_error": "దయచేసి నిబంధనలు మరియు షరతులను అంగీకరించండి",
    "submit_btn": "నమోదు చేయండి మరియు కోర్సులను ఎంచుకోండి",
    "back_btn": "తిరిగి వెళ్ళండి",
    "save_courses_btn": "సేవ్ చేసి పూర్తి చేయండి",
    "login_btn": "లాగిన్",
    "course_selection_title": "ప్రత్యేక ప్రోగ్రామ్ ఎంచుకోండి",
    "course_selection_subtitle": "ఈ ప్రోగ్రామ్లో మీరు ఇంతకు ముందు చదివిన కోర్సులను ఎంచుకోండి",
    "select_courses_instruction": "మీరు ఇప్పటికే చదివిన కోర్సులను ఎంచుకోండి",
    "credits": "క్రెడిట్లు",
    "year": "సంవత్సరం",
    "prerequisite": "ముందస్తు అవసరం",
    "success_title": "నమోదు విజయవంతం!",
    "success_message": "నమోదు విజయవంతంగా పూర్తయింది",
    "success_description": "మీ ఖాతా మరియు కోర్సులు విజయవంతంగా సేవ్ చేయబడ్డాయి",
    "track_label_success": "ట్రాక్",
    "name_label": "పేరు",
    "email_label": "ఇమెయిల్",
    "studentid_label": "విద్యార్థి ఐడి",
    "loading_register": "నమోదు చేస్తోంది...",
    "loading_courses": "కోర్సులు సేవ్ చేయబడుతున్నాయి...",
    "please_wait": "దయచేసి కొద్దిసేపు వేచి ఉండండి",
    "error_title": "లోపం!",
    "have_account": "ఇప్పటికే ఖాతా ఉందా?",
    "login_link": "లాగిన్",
    "avatar_user": "వినియోగదారు",
    "avatar_book": "పుస్తకం",
    "no_courses_found": "ఈ ట్రాక్ కోసం కోర్సులు కనబడలేదు"
  },
  bn: { // Bengali
    "page_title": "নিবন্ধন এবং কোর্স নির্বাচন - STIU শিক্ষার্থী পোর্টাল",
    "step1_label": "ব্যক্তিগত তথ্য",
    "step2_label": "কোর্স নির্বাচন",
    "step3_label": "সাফল্য",
    "form_title": "নিবন্ধন",
    "form_subtitle": "আপনার পরিচয় যাচাই করতে সঠিকভাবে তথ্য পূরণ করুন",
    "first_name": "নামের প্রথম অংশ",
    "first_name_placeholder": "দয়া করে আপনার নামের প্রথম অংশ লিখুন",
    "first_name_error": "দয়া করে আপনার নামের প্রথম অংশ লিখুন",
    "last_name": "নামের শেষাংশ",
    "last_name_placeholder": "দয়া করে আপনার নামের শেষাংশ লিখুন",
    "last_name_error": "দয়া করে আপনার নামের শেষাংশ লিখুন",
    "email": "ইমেল",
    "email_placeholder": "দয়া করে আপনার ইমেল লিখুন",
    "email_error": "দয়া করে একটি বৈধ @students.stamford.edu ইমেল লিখুন",
    "email_requirements": "শুধুমাত্র @students.stamford.edu ইমেল অনুমোদিত",
    "password": "পাসওয়ার্ড",
    "password_placeholder": "দয়া করে আপনার পাসওয়ার্ড লিখুন",
    "password_error": "দয়া করে একটি বৈধ পাসওয়ার্ড লিখুন",
    "password_requirements": "পাসওয়ার্ডে অবশ্যই থাকতে হবে: বড় হাতের অক্ষর, ছোট হাতের অক্ষর, সংখ্যা এবং বিশেষ অক্ষর",
    "req_uppercase": "বড় হাতের অক্ষর",
    "req_lowercase": "ছোট হাতের অক্ষর",
    "req_number": "সংখ্যা",
    "req_special": "বিশেষ অক্ষর",
    "req_length": "সর্বনিম্ন ৮টি অক্ষর",
    "confirm_password": "পাসওয়ার্ড নিশ্চিত করুন",
    "confirm_password_placeholder": "দয়া করে আপনার পাসওয়ার্ড আবার লিখুন",
    "confirm_password_error": "পাসওয়ার্ড মিলছে না",
    "passwords_match": "পাসওয়ার্ড মিলেছে",
    "passwords_not_match": "পাসওয়ার্ড মিলছে না",
    "student_id": "ছাত্র আইডি",
    "student_id_placeholder": "দয়া করে আপনার ছাত্র আইডি লিখুন",
    "student_id_error": "দয়া করে আপনার ছাত্র আইডি লিখুন",
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
    "other_country": "দেশ নির্দিষ্ট করুন",
    "other_country_placeholder": "দয়া করে আপনার দেশ নির্দিষ্ট করুন",
    "other_country_error": "দয়া করে আপনার দেশ নির্দিষ্ট করুন",
    "track_label": "ট্র্যাক নির্বাচন করুন",
    "select_track": "ট্র্যাক নির্বাচন করুন",
    "track_software": "সফটওয়্যার ইঞ্জিনিয়ারিং",
    "track_ecommerce": "ই-কমার্স টেকনোলজি",
    "track_data": "ডেটা সাইন্স",
    "track_network": "নেটওয়ার্ক এবং নিরাপত্তা",
    "track_error": "দয়া করে একটি ট্র্যাক নির্বাচন করুন",
    "year_label": "বছর",
    "select_year": "বছর নির্বাচন করুন",
    "year1": "বছর ১",
    "year2": "বছর ২",
    "year3": "বছর ৩",
    "year4": "বছর ৪",
    "year_error": "দয়া করে বছর নির্বাচন করুন",
    "term_label": "টার্ম",
    "select_term": "টার্ম নির্বাচন করুন",
    "term1": "টার্ম ১",
    "term2": "টার্ম ২",
    "term3": "টার্ম ৩",
    "term_error": "দয়া করে টার্ম নির্বাচন করুন",
    "agree_text": "আমি সম্মত",
    "terms_link": "শর্তাবলী এবং নিয়ম",
    "and_text": "এবং",
    "privacy_link": "গোপনীয়তা নীতি",
    "agree_error": "দয়া করে শর্তাবলী এবং নিয়ম গ্রহণ করুন",
    "submit_btn": "নিবন্ধন করুন এবং কোর্স নির্বাচন করুন",
    "back_btn": "ফিরে যান",
    "save_courses_btn": "সংরক্ষণ করুন এবং সম্পূর্ণ করুন",
    "login_btn": "লগইন",
    "course_selection_title": "বিশেষ প্রোগ্রাম নির্বাচন করুন",
    "course_selection_subtitle": "এই প্রোগ্রামে আপনি পূর্বে নেওয়া কোর্স নির্বাচন করুন",
    "select_courses_instruction": "আপনি ইতিমধ্যে নেওয়া কোর্স নির্বাচন করুন",
    "credits": "ক্রেডিট",
    "year": "বছর",
    "prerequisite": "পূর্বশর্ত",
    "success_title": "নিবন্ধন সফল!",
    "success_message": "নিবন্ধন সফলভাবে সম্পন্ন হয়েছে",
    "success_description": "আপনার অ্যাকাউন্ট এবং কোর্স সফলভাবে সংরক্ষণ করা হয়েছে",
    "track_label_success": "ট্র্যাক",
    "name_label": "নাম",
    "email_label": "ইমেল",
    "studentid_label": "ছাত্র আইডি",
    "loading_register": "নিবন্ধন করা হচ্ছে...",
    "loading_courses": "কোর্স সংরক্ষণ করা হচ্ছে...",
    "please_wait": "দয়া করে কিছুক্ষণ অপেক্ষা করুন",
    "error_title": "ত্রুটি!",
    "have_account": "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    "login_link": "লগইন",
    "avatar_user": "ব্যবহারকারী",
    "avatar_book": "বই",
    "no_courses_found": "এই ট্র্যাকের জন্য কোন কোর্স পাওয়া যায়নি"
  },
  lo: { // Lao
    "page_title": "ການລົງທະບຽນ ແລະ ການເລືອກຫຼັກສູດ - STIU ພອດທານີມະຫາວິທະຍາໄລ",
    "step1_label": "ຂໍ້ມູນສ່ວນບຸກຄົນ",
    "step2_label": "ການເລືອກຫຼັກສູດ",
    "step3_label": "ສຳເລັດ",
    "form_title": "ການລົງທະບຽນ",
    "form_subtitle": "ຕື່ມຂໍ້ມູນໃຫ້ຖືກຕ້ອງເພື່ອຢືນຢັນຕົວຕົນ",
    "first_name": "ຊື່",
    "first_name_placeholder": "ກະລຸນາປ້ອນຊື່ຂອງທ່ານ",
    "first_name_error": "ກະລຸນາປ້ອນຊື່ຂອງທ່ານ",
    "last_name": "ນາມສະກຸນ",
    "last_name_placeholder": "ກະລຸນາປ້ອນນາມສະກຸນຂອງທ່ານ",
    "last_name_error": "ກະລຸນາປ້ອນນາມສະກຸນຂອງທ່ານ",
    "email": "ອີເມວ",
    "email_placeholder": "ກະລຸນາປ້ອນອີເມວຂອງທ່ານ",
    "email_error": "ກະລຸນາປ້ອນອີເມວ @students.stamford.edu ທີ່ຖືກຕ້ອງ",
    "email_requirements": "ອະນຸຍາດໃຫ້ພຽງແຕ່ອີເມວ @students.stamford.edu",
    "password": "ລະຫັດຜ່ານ",
    "password_placeholder": "ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານ",
    "password_error": "ກະລຸນາປ້ອນລະຫັດຜ່ານທີ່ຖືກຕ້ອງ",
    "password_requirements": "ລະຫັດຜ່ານຕ້ອງມີ: ຕົວພິມໃຫຍ່, ຕົວພິມນ້ອຍ, ຕົວເລກ, ແລະ ສັນຍາລັກພິເສດ",
    "req_uppercase": "ຕົວພິມໃຫຍ່",
    "req_lowercase": "ຕົວພິມນ້ອຍ",
    "req_number": "ຕົວເລກ",
    "req_special": "ສັນຍາລັກພິເສດ",
    "req_length": "ຢ່າງໜ້ອຍ 8 ຕົວອັກສອນ",
    "confirm_password": "ຢືນຢັນລະຫັດຜ່ານ",
    "confirm_password_placeholder": "ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານອີກຄັ້ງ",
    "confirm_password_error": "ລະຫັດຜ່ານບໍ່ກົງກັນ",
    "passwords_match": "ລະຫັດຜ່ານກົງກັນ",
    "passwords_not_match": "ລະຫັດຜ່ານບໍ່ກົງກັນ",
    "student_id": "ລະຫັດນັກສຶກສາ",
    "student_id_placeholder": "ກະລຸນາປ້ອນລະຫັດນັກສຶກສາຂອງທ່ານ",
    "student_id_error": "ກະລຸນາປ້ອນລະຫັດນັກສຶກສາຂອງທ່ານ",
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
    "track_label": "ເລືອກສາຂາ",
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
    "agree_text": "ຂ້າພະເຈົ້າຍອມຮັບ",
    "terms_link": "ເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ",
    "and_text": "ແລະ",
    "privacy_link": "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    "agree_error": "ກະລຸນາຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ",
    "submit_btn": "ລົງທະບຽນ ແລະ ເລືອກຫຼັກສູດ",
    "back_btn": "ກັບຄືນ",
    "save_courses_btn": "ບັນທຶກ ແລະ ສຳເລັດ",
    "login_btn": "ເຂົ້າສູ່ລະບົບ",
    "course_selection_title": "ເລືອກໂຄງການພິເສດ",
    "course_selection_subtitle": "ເລືອກຫຼັກສູດທີ່ທ່ານໄດ້ຮຽນມາແລ້ວໃນໂຄງການນີ້",
    "select_courses_instruction": "ເລືອກຫຼັກສູດທີ່ທ່ານໄດ້ຮຽນແລ້ວ",
    "credits": "ໜ່ວຍກິດ",
    "year": "ປີ",
    "prerequisite": "ພື້ນຖານກ່ອນ",
    "success_title": "ການລົງທະບຽນສຳເລັດ!",
    "success_message": "ການລົງທະບຽນສຳເລັດແລ້ວ",
    "success_description": "ບັນຊີ ແລະ ຫຼັກສູດຂອງທ່ານໄດ້ຖືກບັນທຶກແລ້ວ",
    "track_label_success": "ສາຂາ",
    "name_label": "ຊື່",
    "email_label": "ອີເມວ",
    "studentid_label": "ລະຫັດນັກສຶກສາ",
    "loading_register": "ກຳລັງລົງທະບຽນ...",
    "loading_courses": "ກຳລັງບັນທຶກຫຼັກສູດ...",
    "please_wait": "ກະລຸນາລໍຖ້າບໍ່ເທົ່າໃດ",
    "error_title": "ຜິດພາດ!",
    "have_account": "ມີບັນຊີແລ້ວບໍ?",
    "login_link": "ເຂົ້າສູ່ລະບົບ",
    "avatar_user": "ຜູ້ໃຊ້",
    "avatar_book": "ປຶ້ມ",
    "no_courses_found": "ບໍ່ພົບຫຼັກສູດສຳຫຼັບສາຂານີ້"
  },
  km: { // Khmer (Cambodian)
    "page_title": "ការចុះឈ្មោះ និងការជ្រើសរើសវគ្គសិក្សា - វិបផតថលសិស្ស STIU",
    "step1_label": "ព័ត៌មានផ្ទាល់ខ្លួន",
    "step2_label": "ការជ្រើសរើសវគ្គសិក្សា",
    "step3_label": "ជោគជ័យ",
    "form_title": "ការចុះឈ្មោះ",
    "form_subtitle": "បំពេញព័ត៌មានឱ្យបានត្រឹមត្រូវដើម្បីផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នក",
    "first_name": "នាមខ្លួន",
    "first_name_placeholder": "សូមបញ្ចូលនាមខ្លួនរបស់អ្នក",
    "first_name_error": "សូមបញ្ចូលនាមខ្លួនរបស់អ្នក",
    "last_name": "នាមត្រកូល",
    "last_name_placeholder": "សូមបញ្ចូលនាមត្រកូលរបស់អ្នក",
    "last_name_error": "សូមបញ្ចូលនាមត្រកូលរបស់អ្នក",
    "email": "អ៊ីមែល",
    "email_placeholder": "សូមបញ្ចូលអ៊ីមែលរបស់អ្នក",
    "email_error": "សូមបញ្ចូលអ៊ីមែល @students.stamford.edu ត្រឹមត្រូវ",
    "email_requirements": "អនុញ្ញាតតែអ៊ីមែល @students.stamford.edu ប៉ុណ្ណោះ",
    "password": "ពាក្យសម្ងាត់",
    "password_placeholder": "សូមបញ្ចូលពាក្យសម្ងាត់របស់អ្នក",
    "password_error": "សូមបញ្ចូលពាក្យសម្ងាត់ត្រឹមត្រូវ",
    "password_requirements": "ពាក្យសម្ងាត់ត្រូវតែមាន៖ អក្សរធំ អក្សរតូច លេខ និងតួអក្សរពិសេស",
    "req_uppercase": "អក្សរធំ",
    "req_lowercase": "អក្សរតូច",
    "req_number": "លេខ",
    "req_special": "តួអក្សរពិសេស",
    "req_length": "យ៉ាងហោចណាស់ ៨ តួអក្សរ",
    "confirm_password": "បញ្ជាក់ពាក្យសម្ងាត់",
    "confirm_password_placeholder": "សូមបញ្ចូលពាក្យសម្ងាត់របស់អ្នកម្តងទៀត",
    "confirm_password_error": "ពាក្យសម្ងាត់មិនដូចគ្នា",
    "passwords_match": "ពាក្យសម្ងាត់ដូចគ្នា",
    "passwords_not_match": "ពាក្យសម្ងាត់មិនដូចគ្នា",
    "student_id": "លេខសម្គាល់សិស្ស",
    "student_id_placeholder": "សូមបញ្ចូលលេខសម្គាល់សិស្សរបស់អ្នក",
    "student_id_error": "សូមបញ្ចូលលេខសម្គាល់សិស្សរបស់អ្នក",
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
    "track_label": "ជ្រើសរើសជំនាញ",
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
    "agree_text": "ខ្ញុំយល់ព្រម",
    "terms_link": "លក្ខខណ្ឌ និងបទប្បញ្ញត្តិ",
    "and_text": "និង",
    "privacy_link": "គោលការណ៍ឯកជនភាព",
    "agree_error": "សូមទទួលយកលក្ខខណ្ឌ និងបទប្បញ្ញត្តិ",
    "submit_btn": "ចុះឈ្មោះ និងជ្រើសរើសវគ្គសិក្សា",
    "back_btn": "ត្រឡប់ក្រោយ",
    "save_courses_btn": "រក្សាទុក និងបញ្ចប់",
    "login_btn": "ចូល",
    "course_selection_title": "ជ្រើសរើសកម្មវិធីឯកទេស",
    "course_selection_subtitle": "ជ្រើសរើសវគ្គសិក្សាដែលអ្នកបានរៀនពីមុននៅក្នុងកម្មវិធីនេះ",
    "select_courses_instruction": "ជ្រើសរើសវគ្គសិក្សាដែលអ្នកបានរៀនរួចហើយ",
    "credits": "ពិន្ទុ",
    "year": "ឆ្នាំ",
    "prerequisite": "លក្ខខណ្ឌមុន",
    "success_title": "ការចុះឈ្មោះជោគជ័យ!",
    "success_message": "ការចុះឈ្មោះបានបញ្ចប់ដោយជោគជ័យ",
    "success_description": "គណនី និងវគ្គសិក្សារបស់អ្នកត្រូវបានរក្សាទុកដោយជោគជ័យ",
    "track_label_success": "ជំនាញ",
    "name_label": "ឈ្មោះ",
    "email_label": "អ៊ីមែល",
    "studentid_label": "លេខសម្គាល់សិស្ស",
    "loading_register": "កំពុងចុះឈ្មោះ...",
    "loading_courses": "កំពុងរក្សាទុកវគ្គសិក្សា...",
    "please_wait": "សូមរង់ចាំមួយភ្លែត",
    "error_title": "កំហុស!",
    "have_account": "មានគណនីរួចហើយ?",
    "login_link": "ចូល",
    "avatar_user": "អ្នកប្រើប្រាស់",
    "avatar_book": "សៀវភៅ",
    "no_courses_found": "រកមិនឃើញវគ្គសិក្សាសម្រាប់ជំនាញនេះទេ"
  },
  my: { // Burmese (Myanmar)
    "page_title": "မှတ်ပုံတင်ခြင်းနှင့် သင်တန်းရွေးချယ်ခြင်း - STIU ကျောင်းသားပေါ်တယ်",
    "step1_label": "ကိုယ်ရေးကိုယ်တာအချက်အလက်",
    "step2_label": "သင်တန်းရွေးချယ်ခြင်း",
    "step3_label": "အောင်မြင်",
    "form_title": "မှတ်ပုံတင်ခြင်း",
    "form_subtitle": "သင့်အထောက်အထားအတည်ပြုရန် အချက်အလက်များကို မှန်ကန်စွာဖြည့်ပါ",
    "first_name": "နာမည်",
    "first_name_placeholder": "ကျေးဇူးပြု၍ သင့်နာမည်ကို ထည့်ပါ",
    "first_name_error": "ကျေးဇူးပြု၍ သင့်နာမည်ကို ထည့်ပါ",
    "last_name": "မိသားစုအမည်",
    "last_name_placeholder": "ကျေးဇူးပြု၍ သင့်မိသားစုအမည်ကို ထည့်ပါ",
    "last_name_error": "ကျေးဇူးပြု၍ သင့်မိသားစုအမည်ကို ထည့်ပါ",
    "email": "အီးမေးလ်",
    "email_placeholder": "ကျေးဇူးပြု၍ သင့်အီးမေးလ်ကို ထည့်ပါ",
    "email_error": "ကျေးဇူးပြု၍ @students.stamford.edu အီးမေးလ်မှန်ကန်စွာထည့်ပါ",
    "email_requirements": "@students.stamford.edu အီးမေးလ်များသာခွင့်ပြုသည်",
    "password": "စကားဝှက်",
    "password_placeholder": "ကျေးဇူးပြု၍ သင့်စကားဝှက်ကို ထည့်ပါ",
    "password_error": "ကျေးဇူးပြု၍ စကားဝှက်မှန်ကန်စွာထည့်ပါ",
    "password_requirements": "စကားဝှက်တွင် ပါဝင်ရမည်: အကြီးအက္ခရာ၊ အသေးအက္ခရာ၊ နံပါတ်နှင့် အထူးသင်္ကေတ",
    "req_uppercase": "အကြီးအက္ခရာ",
    "req_lowercase": "အသေးအက္ခရာ",
    "req_number": "နံပါတ်",
    "req_special": "အထူးသင်္ကေတ",
    "req_length": "အနည်းဆုံး စာလုံး ၈ လုံး",
    "confirm_password": "စကားဝှက်အတည်ပြုပါ",
    "confirm_password_placeholder": "ကျေးဇူးပြု၍ သင့်စကားဝှက်ကို နောက်တစ်ကြိမ်ထည့်ပါ",
    "confirm_password_error": "စကားဝှက်များ မကိုက်ညီပါ",
    "passwords_match": "စကားဝှက်များ ကိုက်ညီသည်",
    "passwords_not_match": "စကားဝှက်များ မကိုက်ညီပါ",
    "student_id": "ကျောင်းသားအိုင်ဒီ",
    "student_id_placeholder": "ကျေးဇူးပြု၍ သင့်ကျောင်းသားအိုင်ဒီကို ထည့်ပါ",
    "student_id_error": "ကျေးဇူးပြု၍ သင့်ကျောင်းသားအိုင်ဒီကို ထည့်ပါ",
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
    "other_country": "နိုင်ငံဖော်ပြပါ",
    "other_country_placeholder": "ကျေးဇူးပြု၍ သင့်နိုင်ငံကို ဖော်ပြပါ",
    "other_country_error": "ကျေးဇူးပြု၍ သင့်နိုင်ငံကို ဖော်ပြပါ",
    "track_label": "လမ်းကြောင်းရွေးချယ်ပါ",
    "select_track": "လမ်းကြောင်းရွေးချယ်ပါ",
    "track_software": "ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာပညာ",
    "track_ecommerce": "အီလက်ထရွန်းနစ်စီးပွားရေးနည်းပညာ",
    "track_data": "ဒေတာသိပ္ပံ",
    "track_network": "ကွန်ယက်နှင့်လုံခြုံရေး",
    "track_error": "ကျေးဇူးပြု၍ လမ်းကြောင်းရွေးချယ်ပါ",
    "year_label": "နှစ်",
    "select_year": "နှစ်ရွေးချယ်ပါ",
    "year1": "နှစ် ၁",
    "year2": "နှစ် ၂",
    "year3": "နှစ် ၃",
    "year4": "နှစ် ၄",
    "year_error": "ကျေးဇူးပြု၍ နှစ်ရွေးချယ်ပါ",
    "term_label": "ပိုင်း",
    "select_term": "ပိုင်းရွေးချယ်ပါ",
    "term1": "ပိုင်း ၁",
    "term2": "ပိုင်း ၂",
    "term3": "ပိုင်း ၃",
    "term_error": "ကျေးဇူးပြု၍ ပိုင်းရွေးချယ်ပါ",
    "agree_text": "ကျွန်ုပ်သဘောတူပါသည်",
    "terms_link": "စည်းမျဉ်းစည်းကမ်းများ",
    "and_text": "နှင့်",
    "privacy_link": "ကိုယ်ရေးကိုယ်တာမူဝါဒ",
    "agree_error": "ကျေးဇူးပြု၍ စည်းမျဉ်းစည်းကမ်းများကို လက်ခံပါ",
    "submit_btn": "မှတ်ပုံတင်ပြီး သင်တန်းများရွေးချယ်ပါ",
    "back_btn": "နောက်သို့ပြန်သွားပါ",
    "save_courses_btn": "သိမ်းဆည်းပြီး ပြီးအောင်လုပ်ပါ",
    "login_btn": "ဝင်ရန်",
    "course_selection_title": "အထူးပြုအစီအစဉ်ရွေးချယ်ပါ",
    "course_selection_subtitle": "ဤအစီအစဉ်တွင် သင်ယခင်ကတက်ခဲ့သော သင်တန်းများကို ရွေးချယ်ပါ",
    "select_courses_instruction": "သင်တက်ပြီးသား သင်တန်းများကို ရွေးချယ်ပါ",
    "credits": "ခရက်ဒစ်",
    "year": "နှစ်",
    "prerequisite": "ကြိုတင်သင်တန်း",
    "success_title": "မှတ်ပုံတင်ခြင်းအောင်မြင်ပါသည်!",
    "success_message": "မှတ်ပုံတင်ခြင်းအောင်မြင်စွာပြီးစီးသည်",
    "success_description": "သင့်အကောင့်နှင့် သင်တန်းများကို အောင်မြင်စွာသိမ်းဆည်းထားသည်",
    "track_label_success": "လမ်းကြောင်း",
    "name_label": "နာမည်",
    "email_label": "အီးမေးလ်",
    "studentid_label": "ကျောင်းသားအိုင်ဒီ",
    "loading_register": "မှတ်ပုံတင်နေသည်...",
    "loading_courses": "သင်တန်းများသိမ်းဆည်းနေသည်...",
    "please_wait": "ကျေးဇူးပြု၍ ခဏစောင့်ပါ",
    "error_title": "အမှား!",
    "have_account": "အကောင့်ရှိပြီးသားလား?",
    "login_link": "ဝင်ရန်",
    "avatar_user": "အသုံးပြုသူ",
    "avatar_book": "စာအုပ်",
    "no_courses_found": "ဤလမ်းကြောင်းအတွက် သင်တန်းများမတွေ့ပါ"
  },
  ne: { // Nepali
    "page_title": "दर्ता र पाठ्यक्रम चयन - STIU विद्यार्थी पोर्टल",
    "step1_label": "व्यक्तिगत जानकारी",
    "step2_label": "पाठ्यक्रम चयन",
    "step3_label": "सफलता",
    "form_title": "दर्ता",
    "form_subtitle": "आफ्नो पहिचान प्रमाणित गर्न सही जानकारी भर्नुहोस्",
    "first_name": "पहिलो नाम",
    "first_name_placeholder": "कृपया आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्",
    "first_name_error": "कृपया आफ्नो पहिलो नाम प्रविष्ट गर्नुहोस्",
    "last_name": "थर",
    "last_name_placeholder": "कृपया आफ्नो थर प्रविष्ट गर्नुहोस्",
    "last_name_error": "कृपया आफ्नो थर प्रविष्ट गर्नुहोस्",
    "email": "इमेल",
    "email_placeholder": "कृपया आफ्नो इमेल प्रविष्ट गर्नुहोस्",
    "email_error": "कृपया मान्य @students.stamford.edu इमेल प्रविष्ट गर्नुहोस्",
    "email_requirements": "केवल @students.stamford.edu इमेलहरू अनुमति छन्",
    "password": "पासवर्ड",
    "password_placeholder": "कृपया आफ्नो पासवर्ड प्रविष्ट गर्नुहोस्",
    "password_error": "कृपया मान्य पासवर्ड प्रविष्ट गर्नुहोस्",
    "password_requirements": "पासवर्डमा हुनुपर्छ: ठूलो अक्षर, सानो अक्षर, संख्या, र विशेष अक्षर",
    "req_uppercase": "ठूलो अक्षर",
    "req_lowercase": "सानो अक्षर",
    "req_number": "संख्या",
    "req_special": "विशेष अक्षर",
    "req_length": "कम्तिमा ८ अक्षर",
    "confirm_password": "पासवर्ड पुष्टि गर्नुहोस्",
    "confirm_password_placeholder": "कृपया आफ्नो पासवर्ड फेरी प्रविष्ट गर्नुहोस्",
    "confirm_password_error": "पासवर्डहरू मेल खाँदैनन्",
    "passwords_match": "पासवर्डहरू मेल खान्छन्",
    "passwords_not_match": "पासवर्डहरू मेल खाँदैनन्",
    "student_id": "विद्यार्थी आईडी",
    "student_id_placeholder": "कृपया आफ्नो विद्यार्थी आईडी प्रविष्ट गर्नुहोस्",
    "student_id_error": "कृपया आफ्नो विद्यार्थी आईडी प्रविष्ट गर्नुहोस्",
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
    "track_label": "ट्र्याक चयन गर्नुहोस्",
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
    "agree_text": "म सहमत छु",
    "terms_link": "सर्त र शर्तहरू",
    "and_text": "र",
    "privacy_link": "गोपनीयता नीति",
    "agree_error": "कृपया सर्त र शर्तहरू स्वीकार गर्नुहोस्",
    "submit_btn": "दर्ता गर्नुहोस् र पाठ्यक्रम चयन गर्नुहोस्",
    "back_btn": "पछाडि जानुहोस्",
    "save_courses_btn": "सुरक्षित गर्नुहोस् र पूरा गर्नुहोस्",
    "login_btn": "लग इन",
    "course_selection_title": "विशेष कार्यक्रम चयन गर्नुहोस्",
    "course_selection_subtitle": "यस कार्यक्रममा तपाईंले पहिले लिएको पाठ्यक्रम चयन गर्नुहोस्",
    "select_courses_instruction": "तपाईंले पहिले नै लिएको पाठ्यक्रम चयन गर्नुहोस्",
    "credits": "क्रेडिट",
    "year": "वर्ष",
    "prerequisite": "पूर्वापेक्षा",
    "success_title": "दर्ता सफल भयो!",
    "success_message": "दर्ता सफलतापूर्वक पूरा भयो",
    "success_description": "तपाईंको खाता र पाठ्यक्रम सफलतापूर्वक सुरक्षित गरियो",
    "track_label_success": "ट्र्याक",
    "name_label": "नाम",
    "email_label": "इमेल",
    "studentid_label": "विद्यार्थी आईडी",
    "loading_register": "दर्ता हुदैछ...",
    "loading_courses": "पाठ्यक्रम सुरक्षित गर्दै...",
    "please_wait": "कृपया केही पर्खनुहोस्",
    "error_title": "त्रुटि!",
    "have_account": "पहिले नै खाता छ?",
    "login_link": "लग इन",
    "avatar_user": "प्रयोगकर्ता",
    "avatar_book": "पुस्तक",
    "no_courses_found": "यस ट्र्याकको लागि कुनै पाठ्यक्रम फेला परेन"
  },
  pa: { // Punjabi
    "page_title": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਕੋਰਸ ਚੋਣ - STIU ਵਿਦਿਆਰਥੀ ਪੋਰਟਲ",
    "step1_label": "ਨਿੱਜੀ ਜਾਣਕਾਰੀ",
    "step2_label": "ਕੋਰਸ ਚੋਣ",
    "step3_label": "ਸਫਲਤਾ",
    "form_title": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "form_subtitle": "ਆਪਣੀ ਪਛਾਣ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰਨ ਲਈ ਜਾਣਕਾਰੀ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਭਰੋ",
    "first_name": "ਪਹਿਲਾ ਨਾਮ",
    "first_name_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "first_name_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    "last_name": "ਆਖਰੀ ਨਾਮ",
    "last_name_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਰਜ ਕਰੋ",
    "last_name_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਰਜ ਕਰੋ",
    "email": "ਈਮੇਲ",
    "email_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "email_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ @students.stamford.edu ਈਮੇਲ ਦਰਜ ਕਰੋ",
    "email_requirements": "ਕੇਵਲ @students.stamford.edu ਈਮੇਲਾਂ ਦੀ ਇਜਾਜ਼ਤ ਹੈ",
    "password": "ਪਾਸਵਰਡ",
    "password_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    "password_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
    "password_requirements": "ਪਾਸਵਰਡ ਵਿੱਚ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ: ਵੱਡੇ ਅੱਖਰ, ਛੋਟੇ ਅੱਖਰ, ਨੰਬਰ, ਅਤੇ ਵਿਸ਼ੇਸ਼ ਅੱਖਰ",
    "req_uppercase": "ਵੱਡੇ ਅੱਖਰ",
    "req_lowercase": "ਛੋਟੇ ਅੱਖਰ",
    "req_number": "ਨੰਬਰ",
    "req_special": "ਵਿਸ਼ੇਸ਼ ਅੱਖਰ",
    "req_length": "ਕਮ ਤੋਂ ਕਮ 8 ਅੱਖਰ",
    "confirm_password": "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    "confirm_password_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਦੁਬਾਰਾ ਦਰਜ ਕਰੋ",
    "confirm_password_error": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
    "passwords_match": "ਪਾਸਵਰਡ ਮੇਲ ਖਾਂਦੇ ਹਨ",
    "passwords_not_match": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
    "student_id": "ਵਿਦਿਆਰਥੀ ਆਈਡੀ",
    "student_id_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਵਿਦਿਆਰਥੀ ਆਈਡੀ ਦਰਜ ਕਰੋ",
    "student_id_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣੀ ਵਿਦਿਆਰਥੀ ਆਈਡੀ ਦਰਜ ਕਰੋ",
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
    "other_country": "ਦੇਸ਼ ਨਿਰਧਾਰਤ ਕਰੋ",
    "other_country_placeholder": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਦੇਸ਼ ਨਿਰਧਾਰਤ ਕਰੋ",
    "other_country_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਆਪਣਾ ਦੇਸ਼ ਨਿਰਧਾਰਤ ਕਰੋ",
    "track_label": "ਟਰੈਕ ਚੁਣੋ",
    "select_track": "ਟਰੈਕ ਚੁਣੋ",
    "track_software": "ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ",
    "track_ecommerce": "ਈ-ਕਾਮਰਸ ਟੈਕਨਾਲੋਜੀ",
    "track_data": "ਡੇਟਾ ਸਾਇੰਸ",
    "track_network": "ਨੈੱਟਵਰਕ ਅਤੇ ਸੁਰੱਖਿਆ",
    "track_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਇੱਕ ਟਰੈਕ ਚੁਣੋ",
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
    "agree_text": "ਮੈਂ ਸਹਿਮਤ ਹਾਂ",
    "terms_link": "ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ",
    "and_text": "ਅਤੇ",
    "privacy_link": "ਪਰਾਈਵੇਸੀ ਨੀਤੀ",
    "agree_error": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ ਸਵੀਕਾਰ ਕਰੋ",
    "submit_btn": "ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਕੋਰਸ ਚੁਣੋ",
    "back_btn": "ਪਿੱਛੇ ਜਾਓ",
    "save_courses_btn": "ਸੇਵ ਕਰੋ ਅਤੇ ਪੂਰਾ ਕਰੋ",
    "login_btn": "ਲਾਗਇਨ",
    "course_selection_title": "ਵਿਸ਼ੇਸ਼ ਪ੍ਰੋਗਰਾਮ ਚੁਣੋ",
    "course_selection_subtitle": "ਇਸ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਤੁਸੀਂ ਪਹਿਲਾਂ ਲਏ ਗਏ ਕੋਰਸ ਚੁਣੋ",
    "select_courses_instruction": "ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਲਏ ਗਏ ਕੋਰਸ ਚੁਣੋ",
    "credits": "ਕਰੈਡਿਟ",
    "year": "ਸਾਲ",
    "prerequisite": "ਪੂਰਵ-ਲੋੜ",
    "success_title": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਫਲ!",
    "success_message": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਫਲਤਾਪੂਰਵਕ ਪੂਰੀ ਹੋਈ",
    "success_description": "ਤੁਹਾਡਾ ਖਾਤਾ ਅਤੇ ਕੋਰਸ ਸਫਲਤਾਪੂਰਵਕ ਸੇਵ ਹੋ ਗਏ ਹਨ",
    "track_label_success": "ਟਰੈਕ",
    "name_label": "ਨਾਮ",
    "email_label": "ਈਮੇਲ",
    "studentid_label": "ਵਿਦਿਆਰਥੀ ਆਈਡੀ",
    "loading_register": "ਰਜਿਸਟਰ ਹੋ ਰਿਹਾ ਹੈ...",
    "loading_courses": "ਕੋਰਸ ਸੇਵ ਹੋ ਰਹੇ ਹਨ...",
    "please_wait": "ਕ੍ਰਿਪਾ ਕਰਕੇ ਥੋੜ੍ਹੀ ਉਡੀਕ ਕਰੋ",
    "error_title": "ਗਲਤੀ!",
    "have_account": "ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਖਾਤਾ ਹੈ?",
    "login_link": "ਲਾਗਇਨ",
    "avatar_user": "ਉਪਭੋਗਤਾ",
    "avatar_book": "ਕਿਤਾਬ",
    "no_courses_found": "ਇਸ ਟਰੈਕ ਲਈ ਕੋਈ ਕੋਰਸ ਨਹੀਂ ਮਿਲੇ"
  },
  si: { // Sinhala
    "page_title": "ලියාපදිංචි කිරීම සහ පාඨමාලා තෝරාගැනීම - STIU ශිෂ්ය පෝටලය",
    "step1_label": "පුද්ගලික තොරතුරු",
    "step2_label": "පාඨමාලා තෝරාගැනීම",
    "step3_label": "සාර්ථකත්වය",
    "form_title": "ලියාපදිංචි කිරීම",
    "form_subtitle": "ඔබගේ අනන්යතාවය සත්‍යාපනය කිරීම සඳහා තොරතුරු නිවැරදිව පුරවන්න",
    "first_name": "මුල් නම",
    "first_name_placeholder": "කරුණාකර ඔබගේ මුල් නම ඇතුල් කරන්න",
    "first_name_error": "කරුණාකර ඔබගේ මුල් නම ඇතුල් කරන්න",
    "last_name": "අවසන් නම",
    "last_name_placeholder": "කරුණාකර ඔබගේ අවසන් නම ඇතුල් කරන්න",
    "last_name_error": "කරුණාකර ඔබගේ අවසන් නම ඇතුල් කරන්න",
    "email": "විද්‍යුත් තැපෑල",
    "email_placeholder": "කරුණාකර ඔබගේ විද්‍යුත් තැපෑල ඇතුල් කරන්න",
    "email_error": "කරුණාකර වලංගු @students.stamford.edu විද්‍යුත් තැපෑලක් ඇතුල් කරන්න",
    "email_requirements": "@students.stamford.edu විද්‍යුත් තැපෑල පමණක් අවසර ඇත",
    "password": "මුරපදය",
    "password_placeholder": "කරුණාකර ඔබගේ මුරපදය ඇතුල් කරන්න",
    "password_error": "කරුණාකර වලංගු මුරපදයක් ඇතුල් කරන්න",
    "password_requirements": "මුරපදයේ අඩංගු විය යුතුය: ලොකු අකුරු, පොඩි අකුරු, අංක, සහ විශේෂ අක්ෂර",
    "req_uppercase": "ලොකු අකුරු",
    "req_lowercase": "පොඩි අකුරු",
    "req_number": "අංක",
    "req_special": "විශේෂ අක්ෂර",
    "req_length": "අවම වශයෙන් අක්ෂර 8",
    "confirm_password": "මුරපදය තහවුරු කරන්න",
    "confirm_password_placeholder": "කරුණාකර ඔබගේ මුරපදය නැවත ඇතුල් කරන්න",
    "confirm_password_error": "මුරපද ගැලපෙන්නේ නැත",
    "passwords_match": "මුරපද ගැලපේ",
    "passwords_not_match": "මුරපද ගැලපෙන්නේ නැත",
    "student_id": "ශිෂ්‍ය අංකය",
    "student_id_placeholder": "කරුණාකර ඔබගේ ශිෂ්‍ය අංකය ඇතුල් කරන්න",
    "student_id_error": "කරුණාකර ඔබගේ ශිෂ්‍ය අංකය ඇතුල් කරන්න",
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
    "track_label": "මාර්ගය තෝරන්න",
    "select_track": "මාර්ගය තෝරන්න",
    "track_software": "මෘදුකාංග ඉංජිනේරු විද්‍යාව",
    "track_ecommerce": "ඊ-වාණිජ්‍ය තාක්ෂණය",
    "track_data": "දත්ත විද්‍යාව",
    "track_network": "ජාලය සහ ආරක්ෂාව",
    "track_error": "කරුණාකර මාර්ගයක් තෝරන්න",
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
    "agree_text": "මම එකඟ වෙමි",
    "terms_link": "නියම සහ කොන්දේසි",
    "and_text": "සහ",
    "privacy_link": "රහස්‍යතා ප්‍රතිපත්තිය",
    "agree_error": "කරුණාකර නියම සහ කොන්දේසි පිළිගන්න",
    "submit_btn": "ලියාපදිංචි වන්න සහ පාඨමාලා තෝරන්න",
    "back_btn": "ආපසු යන්න",
    "save_courses_btn": "සුරකින්න සහ පුරවන්න",
    "login_btn": "පිවිසෙන්න",
    "course_selection_title": "විශේෂිත වැඩසටහන තෝරන්න",
    "course_selection_subtitle": "මෙම වැඩසටහනෙහි ඔබ කලින් ගත් පාඨමාලා තෝරන්න",
    "select_courses_instruction": "ඔබ දැනටමත් ගත් පාඨමාලා තෝරන්න",
    "credits": "ක්‍රෙඩිට්",
    "year": "වසර",
    "prerequisite": "පූර්ව අවශ්‍යතාව",
    "success_title": "ලියාපදිංචි කිරීම සාර්ථකයි!",
    "success_message": "ලියාපදිංචි කිරීම සාර්ථකව සම්පූර්ණ විය",
    "success_description": "ඔබගේ ගිණුම සහ පාඨමාලා සාර්ථකව සුරක්ෂිත විය",
    "track_label_success": "මාර්ගය",
    "name_label": "නම",
    "email_label": "විද්‍යුත් තැපෑල",
    "studentid_label": "ශිෂ්‍ය අංකය",
    "loading_register": "ලියාපදිංචි වෙමින්...",
    "loading_courses": "පාඨමාලා සුරකිමින්...",
    "please_wait": "කරුණාකර මොහොතක් රැඳී සිටින්න",
    "error_title": "දෝෂයක්!",
    "have_account": "දැනටමත් ගිණුමක් තිබේද?",
    "login_link": "පිවිසෙන්න",
    "avatar_user": "පරිශීලක",
    "avatar_book": "පොත",
    "no_courses_found": "මෙම මාර්ගය සඳහා පාඨමාලා හමු නොවීය"
  }
};

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

// Terms and conditions content for all languages
const termsAndConditionsContent = {
  en: `
    <h4>Terms and Conditions</h4>
    <p><strong>Last Updated:</strong> December 7, 2025</p>
    
    <h5>1. Acceptance of Terms</h5>
    <p>By registering with Stamford University's curriculum system, you agree to be bound by these Terms and Conditions.</p>
    
    <h5>2. Student Responsibilities</h5>
    <p>Students are responsible for:</p>
    <ul>
      <li>Providing accurate and complete registration information</li>
      <li>Maintaining the confidentiality of their account credentials</li>
      <li>Following the university's academic policies and procedures</li>
      <li>Completing selected courses according to the academic calendar</li>
    </ul>
    
    <h5>3. Course Selection</h5>
    <p>Course selection is subject to:</p>
    <ul>
      <li>Prerequisite requirements</li>
      <li>Course availability</li>
      <li>Academic standing</li>
      <li>Department approval</li>
    </ul>
    
    <h5>4. Data Privacy</h5>
    <p>Your personal data will be handled in accordance with our Privacy Policy.</p>
    
    <h5>5. Modification of Terms</h5>
    <p>The university reserves the right to modify these terms at any time.</p>
  `,
  zh: `
    <h4>条款和条件</h4>
    <p><strong>最后更新：</strong> 2025年12月7日</p>
    
    <h5>1. 接受条款</h5>
    <p>注册斯坦福大学课程系统即表示您同意受本条款和条件的约束。</p>
    
    <h5>2. 学生责任</h5>
    <p>学生负责：</p>
    <ul>
      <li>提供准确完整的注册信息</li>
      <li>维护账户凭证的机密性</li>
      <li>遵守大学的学术政策和程序</li>
      <li>根据校历完成所选课程</li>
    </ul>
    
    <h5>3. 课程选择</h5>
    <p>课程选择受以下因素限制：</p>
    <ul>
      <li>先修课程要求</li>
      <li>课程可用性</li>
      <li>学术地位</li>
      <li>院系批准</li>
    </ul>
    
    <h5>4. 数据隐私</h5>
    <p>您的个人数据将根据我们的隐私政策进行处理。</p>
    
    <h5>5. 条款修改</h5>
    <p>大学保留随时修改这些条款的权利。</p>
  `,
  ja: `
    <h4>利用規約</h4>
    <p><strong>最終更新：</strong> 2025年12月7日</p>
    
    <h5>1. 規約の承諾</h5>
    <p>スタンフォード大学のカリキュラムシステムに登録することにより、本利用規約に拘束されることに同意したものとみなされます。</p>
    
    <h5>2. 学生の責任</h5>
    <p>学生は以下の責任を負います：</p>
    <ul>
      <li>正確かつ完全な登録情報の提供</li>
      <li>アカウント認証情報の機密保持</li>
      <li>大学の学術方針と手順の遵守</li>
      <li>学術カレンダーに従った選択科目の修了</li>
    </ul>
    
    <h5>3. 科目選択</h5>
    <p>科目選択は以下の条件に従います：</p>
    <ul>
      <li>前提科目の要件</li>
      <li>科目の空き状況</li>
      <li>学業成績</li>
      <li>学部の承認</li>
    </ul>
    
    <h5>4. データプライバシー</h5>
    <p>個人データは当社のプライバシーポリシーに従って取り扱われます。</p>
    
    <h5>5. 規約の変更</h5>
    <p>大学はいつでも本規約を変更する権利を留保します。</p>
  `,
  ko: `
    <h4>이용 약관</h4>
    <p><strong>최종 업데이트:</strong> 2025년 12월 7일</p>
    
    <h5>1. 약관 동의</h5>
    <p>스탠퍼드 대학교 커리큘럼 시스템에 등록함으로써 귀하는 본 이용 약관에 구속되는 데 동의한 것으로 간주됩니다.</p>
    
    <h5>2. 학생 책임</h5>
    <p>학생은 다음에 대한 책임이 있습니다:</p>
    <ul>
      <li>정확하고 완전한 등록 정보 제공</li>
      <li>계정 자격 증명의 기밀 유지</li>
      <li>대학의 학문적 정책과 절차 준수</li>
      <li>학술 일정에 따른 선택 강좌 이수</li>
    </ul>
    
    <h5>3. 강좌 선택</h5>
    <p>강좌 선택은 다음 조건에 따릅니다:</p>
    <ul>
      <li>선수 과목 요구 사항</li>
      <li>강좌 가용성</li>
      <li>학업 성적</li>
      <li>학과 승인</li>
    </ul>
    
    <h5>4. 데이터 개인정보 보호</h5>
    <p>귀하의 개인 데이터는 당사의 개인정보 보호 정책에 따라 처리됩니다.</p>
    
    <h5>5. 약관 수정</h5>
    <p>대학은 언제든지 본 약관을 수정할 권리를 보유합니다.</p>
  `,
  ar: `
    <h4>الشروط والأحكام</h4>
    <p><strong>آخر تحديث:</strong>٧ ديسمبر ٢٠٢٥</p>
    
    <h5>1. قبول الشروط</h5>
    <p>من خلال التسجيل في نظام المناهج الدراسية بجامعة ستانفورد، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p>
    
    <h5>2. مسؤوليات الطالب</h5>
    <p>الطلاب مسؤولون عن:</p>
    <ul>
      <li>تقديم معلومات تسجيل دقيقة وكاملة</li>
      <li>الحفاظ على سرية بيانات اعتماد الحساب</li>
      <li>اتباع السياسات والإجراءات الأكاديمية للجامعة</li>
      <li>إكمال المقررات المختارة وفقًا للتقويم الأكاديمي</li>
    </ul>
    
    <h5>3. اختيار المقررات</h5>
    <p>اختيار المقررات يخضع لـ:</p>
    <ul>
      <li>متطلبات المقررات الأساسية</li>
      <li>توفر المقرر</li>
      <li>المستوى الأكاديمي</li>
      <li>موافقة القسم</li>
    </ul>
    
    <h5>4. خصوصية البيانات</h5>
    <p>سيتم التعامل مع بياناتك الشخصية وفقًا لسياسة الخصوصية الخاصة بنا.</p>
    
    <h5>5. تعديل الشروط</h5>
    <p>تحتفظ الجامعة بالحق في تعديل هذه الشروط في أي وقت.</p>
  `,
  hi: `
    <h4>नियम और शर्तें</h4>
    <p><strong>अंतिम अद्यतन:</strong>7 दिसंबर 2025</p>
    
    <h5>1. नियमों की स्वीकृति</h5>
    <p>स्टैनफोर्ड विश्वविद्यालय के पाठ्यक्रम प्रणाली में पंजीकरण करके, आप इन नियमों और शर्तों से बंधने के लिए सहमत होते हैं।</p>
    
    <h5>2. छात्र जिम्मेदारियाँ</h5>
    <p>छात्रों की जिम्मेदारियाँ हैं:</p>
    <ul>
      <li>सटीक और पूर्ण पंजीकरण जानकारी प्रदान करना</li>
      <li>अपने खाता क्रेडेंशियल्स की गोपनीयता बनाए रखना</li>
      <li>विश्वविद्यालय की शैक्षणिक नीतियों और प्रक्रियाओं का पालन करना</li>
      <li>शैक्षणिक कैलेंडर के अनुसार चयनित पाठ्यक्रम पूरा करना</li>
    </ul>
    
    <h5>3. पाठ्यक्रम चयन</h5>
    <p>पाठ्यक्रम चयन निम्नलिखित के अधीन है:</p>
    <ul>
      <li>पूर्वापेक्षा आवश्यकताएँ</li>
      <li>पाठ्यक्रम की उपलब्धता</li>
      <li>शैक्षणिक स्थिति</li>
      <li>विभागीय अनुमोदन</li>
    </ul>
    
    <h5>4. डेटा गोपनीयता</h5>
    <p>आपके व्यक्तिगत डेटा का उपयोग हमारी गोपनीयता नीति के अनुसार किया जाएगा।</p>
    
    <h5>5. नियमों में संशोधन</h5>
    <p>विश्वविद्यालय किसी भी समय इन नियमों में संशोधन का अधिकार सुरक्षित रखता है।</p>
  `,
  th: `
    <h4>ข้อกำหนดและเงื่อนไข</h4>
    <p><strong>อัปเดตล่าสุด:</strong>7 ธันวาคม 2025</p>
    
    <h5>1. การยอมรับข้อกำหนด</h5>
    <p>การลงทะเบียนกับระบบหลักสูตรของมหาวิทยาลัยสแตนฟอร์ดถือว่าคุณยอมรับที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขเหล่านี้</p>
    
    <h5>2. ความรับผิดชอบของนักศึกษา</h5>
    <p>นักศึกษามีความรับผิดชอบในการ:</p>
    <ul>
      <li>ให้ข้อมูลการลงทะเบียนที่ถูกต้องและครบถ้วน</li>
      <li>รักษาความลับของข้อมูลเข้าสู่ระบบบัญชี</li>
      <li>ปฏิบัติตามนโยบายและขั้นตอนทางวิชาการของมหาวิทยาลัย</li>
      <li>เรียนรายวิชาที่เลือกให้ครบตามปฏิทินการศึกษา</li>
    </ul>
    
    <h5>3. การเลือกรายวิชา</h5>
    <p>การเลือกรายวิชาจะต้องเป็นไปตาม:</p>
    <ul>
      <li>ข้อกำหนดรายวิชาบังคับก่อน</li>
      <li>ความพร้อมของรายวิชา</li>
      <li>สถานภาพทางวิชาการ</li>
      <li>การอนุมัติจากภาควิชา</li>
    </ul>
    
    <h5>4. ความเป็นส่วนตัวของข้อมูล</h5>
    <p>ข้อมูลส่วนบุคคลของคุณจะถูกจัดการตามนโยบายความเป็นส่วนตัวของเรา</p>
    
    <h5>5. การแก้ไขข้อกำหนด</h5>
    <p>มหาวิทยาลัยขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ทุกเวลา</p>
  `,
  vi: `
    <h4>Điều khoản và Điều kiện</h4>
    <p><strong>Cập nhật lần cuối:</strong>7 tháng 12 năm 2025</p>
    
    <h5>1. Chấp nhận Điều khoản</h5>
    <p>Bằng cách đăng ký vào hệ thống chương trình giảng dạy của Đại học Stamford, bạn đồng ý bị ràng buộc bởi các Điều khoản và Điều kiện này.</p>
    
    <h5>2. Trách nhiệm của Sinh viên</h5>
    <p>Sinh viên có trách nhiệm:</p>
    <ul>
      <li>Cung cấp thông tin đăng ký chính xác và đầy đủ</li>
      <li>Bảo mật thông tin đăng nhập tài khoản</li>
      <li>Tuân thủ các chính sách và quy trình học thuật của trường đại học</li>
      <li>Hoàn thành các khóa học đã chọn theo lịch học</li>
    </ul>
    
    <h5>3. Lựa chọn Khóa học</h5>
    <p>Việc lựa chọn khóa học phụ thuộc vào:</p>
    <ul>
      <li>Yêu cầu môn học tiên quyết</li>
      <li>Tính sẵn có của khóa học</li>
      <li>Trình độ học vấn</li>
      <li>Sự chấp thuận của khoa</li>
    </ul>
    
    <h5>4. Quyền riêng tư Dữ liệu</h5>
    <p>Dữ liệu cá nhân của bạn sẽ được xử lý theo Chính sách Quyền riêng tư của chúng tôi.</p>
    
    <h5>5. Sửa đổi Điều khoản</h5>
    <p>Trường đại học bảo lưu quyền sửa đổi các điều khoản này bất cứ lúc nào.</p>
  `,
  id: `
    <h4>Syarat dan Ketentuan</h4>
    <p><strong>Terakhir Diperbarui:</strong>7 Desember 2025</p>
    
    <h5>1. Penerimaan Syarat</h5>
    <p>Dengan mendaftar di sistem kurikulum Universitas Stamford, Anda setuju untuk terikat dengan Syarat dan Ketentuan ini.</p>
    
    <h5>2. Tanggung Jawab Mahasiswa</h5>
    <p>Mahasiswa bertanggung jawab untuk:</p>
    <ul>
      <li>Memberikan informasi pendaftaran yang akurat dan lengkap</li>
      <li>Menjaga kerahasiaan kredensial akun</li>
      <li>Mengikuti kebijakan dan prosedur akademik universitas</li>
      <li>Menyelesaikan mata kuliah yang dipilih sesuai kalender akademik</li>
    </ul>
    
    <h5>3. Pemilihan Mata Kuliah</h5>
    <p>Pemilihan mata kuliah tunduk pada:</p>
    <ul>
      <li>Persyaratan prasyarat</li>
      <li>Ketersediaan mata kuliah</li>
      <li>Status akademik</li>
      <li>Persetujuan departemen</li>
    </ul>
    
    <h5>4. Privasi Data</h5>
    <p>Data pribadi Anda akan ditangani sesuai dengan Kebijakan Privasi kami.</p>
    
    <h5>5. Modifikasi Syarat</h5>
    <p>Universitas berhak memodifikasi syarat ini kapan saja.</p>
  `,
  ms: `
    <h4>Terma dan Syarat</h4>
    <p><strong>Kemaskini Terakhir:</strong>7 Disember 2025</p>
    
    <h5>1. Penerimaan Terma</h5>
    <p>Dengan mendaftar dalam sistem kurikulum Universiti Stamford, anda bersetuju untuk terikat dengan Terma dan Syarat ini.</p>
    
    <h5>2. Tanggungjawab Pelajar</h5>
    <p>Pelajar bertanggungjawab untuk:</p>
    <ul>
      <li>Memberi maklumat pendaftaran yang tepat dan lengkap</li>
      <li>Menjaga kerahsiaan kelayakan akaun</li>
      <li>Mengikuti polisi dan prosedur akademik universiti</li>
      <li>Menyelesaikan kursus yang dipilih mengikut kalendar akademik</li>
    </ul>
    
    <h5>3. Pemilihan Kursus</h5>
    <p>Pemilihan kursus tertakluk kepada:</p>
    <ul>
      <li>Keperluan prasyarat</li>
      <li>Ketersediaan kursus</li>
      <li>Kedudukan akademik</li>
      <li>Kelulusan jabatan</li>
    </ul>
    
    <h5>4> Privasi Data</h5>
    <p>Data peribadi anda akan diuruskan mengikut Dasar Privasi kami.</p>
    
    <h5>5> Pengubahsuaian Terma</h5>
    <p>Universiti berhak mengubah suai terma ini pada bila-bila masa.</p>
  `,
  ru: `
    <h4>Правила и условия</h4>
    <p><strong>Последнее обновление:</strong>7 декабря 2025 г</p>
    
    <h5>1. Принятие правил</h5>
    <p>Регистрируясь в системе учебного плана Стэнфордского университета, вы соглашаетесь соблюдать эти Правила и условия.</p>
    
    <h5>2. Обязанности студентов</h5>
    <p>Студенты обязаны:</p>
    <ul>
      <li>Предоставлять точную и полную регистрационную информацию</li>
      <li>Сохранять конфиденциальность учетных данных</li>
      <li>Соблюдать академическую политику и процедуры университета</li>
      <li>Завершать выбранные курсы в соответствии с академическим календарем</li>
    </ul>
    
    <h5>3. Выбор курсов</h5>
    <p>Выбор курсов зависит от:</p>
    <ul>
      <li>Требований к предварительным курсам</li>
      <li>Доступности курсов</li>
      <li>Академической успеваемости</li>
      <li>Утверждения кафедрой</li>
    </ul>
    
    <h5>4. Конфиденциальность данных</h5>
    <p>Ваши личные данные будут обрабатываться в соответствии с нашей Политикой конфиденциальности.</p>
    
    <h5>5. Изменение правил</h5>
    <p>Университет оставляет за собой право изменять эти правила в любое время.</p>
  `,
  ur: `
    <h4>شرائط و ضوابط</h4>
    <p><strong>آخری تازہ کاری:</strong>۷ دسمبر ۲۰۲۵</p>
    
    <h5>1. شرائط کی قبولیت</h5>
    <p>سٹینفورڈ یونیورسٹی کے نصابی نظام میں رجسٹر کر کے، آپ ان شرائط و ضوابط پر عمل کرنے سے اتفاق کرتے ہیں۔</p>
    
    <h5>2. طلبہ کی ذمہ داریاں</h5>
    <p>طلبہ کی ذمہ داریاں ہیں:</p>
    <ul>
      <li>درست اور مکمل رجسٹریشن معلومات فراہم کرنا</li>
      <li>اکاؤنٹ کی سندوں کی رازداری برقرار رکھنا</li>
      <li>یونیورسٹی کی تعلیمی پالیسیوں اور طریقہ کار پر عمل کرنا</li>
      <li>تعلیمی کیلنڈر کے مطابق منتخب کردہ کورسز مکمل کرنا</li>
    </ul>
    
    <h5>3. کورس کا انتخاب</h5>
    <p>کورس کا انتخاب مندرجہ ذیل پر منحصر ہے:</p>
    <ul>
      <li>پیشگی شرائط</li>
      <li>کورس کی دستیابی</li>
      <li>تعلیمی حیثیت</li>
      <li>محکمہ کی منظوری</li>
    </ul>
    
    <h5>4. ڈیٹا کی رازداری</h5>
    <p>آپ کے ذاتی ڈیٹا کو ہماری رازداری کی پالیسی کے مطابق سنبھالا جائے گا۔</p>
    
    <h5>5. شرائط میں ترمیم</h5>
    <p>یونیورسٹی کسی بھی وقت ان شرائط میں ترمیم کرنے کا حق محفوظ رکھتی ہے۔</p>
  `,
  tr: `
    <h4>Şartlar ve Koşullar</h4>
    <p><strong>Son Güncelleme:</strong>7 Aralık 2025</p>
    
    <h5>1. Şartları Kabul</h5>
    <p>Stamford Üniversitesi müfredat sistemine kaydolarak, bu Şartlar ve Koşullar'a bağlı kalmayı kabul etmiş olursunuz.</p>
    
    <h5>2. Öğrenci Sorumlulukları</h5>
    <p>Öğrencilerin sorumlulukları şunlardır:</p>
    <ul>
      <li>Doğru ve eksiksiz kayıt bilgileri sağlamak</li>
      <li>Hesap kimlik bilgilerinin gizliliğini korumak</li>
      <li>Üniversitenin akademik politikalarına ve prosedürlerine uymak</li>
      <li>Akademik takvime göre seçilen dersleri tamamlamak</li>
    </ul>
    
    <h5>3. Ders Seçimi</h5>
    <p>Ders seçimi aşağıdakilere tabidir:</p>
    <ul>
      <li>Önkoşul gereksinimleri</li>
      <li>Dersin mevcudiyeti</li>
      <li>Akademik durum</li>
      <li>Bölüm onayı</li>
    </ul>
    
    <h5>4. Veri Gizliliği</h5>
    <p>Kişisel verileriniz Gizlilik Politikamıza göre işlenecektir.</p>
    
    <h5>5. Şartlarda Değişiklik</h5>
    <p>Üniversite bu şartları istediği zaman değiştirme hakkını saklı tutar.</p>
  `,
  fa: `
    <h4>شرایط و ضوابط</h4>
    <p><strong>آخرین بروزرسانی:</strong>۷ دسامبر ۲۰۲۵</p>
    
    <h5>1. پذیرش شرایط</h5>
    <p>با ثبت‌نام در سیستم برنامه درسی دانشگاه استنفورد، شما موافقت می‌کنید که توسط این شرایط و ضوابط مقید شوید.</p>
    
    <h5>2. مسئولیت‌های دانشجویی</h5>
    <p>دانشجویان مسئول:</p>
    <ul>
      <li>ارائه اطلاعات ثبت‌نام دقیق و کامل</li>
      <li>حفظ محرمانگی مدارک حساب</li>
      <li>رعایت سیاست‌ها و رویه‌های آکادمیک دانشگاه</li>
      <li>تکمیل دوره‌های انتخاب شده مطابق تقویم آکادمیک</li>
    </ul>
    
    <h5>3. انتخاب دوره</h5>
    <p>انتخاب دوره مشروط بر:</p>
    <ul>
      <li>پیش‌نیازهای درسی</li>
      <li>دسترسی به دوره</li>
      <li>وضعیت آکادمیک</li>
      <li>تأیید دپارتمان</li>
    </ul>
    
    <h5>4. حریم خصوصی داده‌ها</h5>
    <p>داده‌های شخصی شما مطابق با سیاست حفظ حریم خصوصی ما پردازش خواهند شد.</p>
    
    <h5>5. تغییر شرایط</h5>
    <p>دانشگاه حق تغییر این شرایط را در هر زمان محفوظ می‌دارد.</p>
  `,
  ta: `
    <h4>விதிமுறைகள் மற்றும் நிபந்தனைகள்</h4>
    <p><strong>கடைசியாக புதுப்பிக்கப்பட்டது:</strong>7 டிசம்பர் 2025</p>
    
    <h5>1. விதிமுறைகளை ஏற்றல்</h5>
    <p>ஸ்டான்போர்ட் பல்கலைக்கழகத்தின் பாடத்திட்ட முறையில் பதிவு செய்வதன் மூலம், இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு உட்பட்டதாக நீங்கள் ஒப்புக்கொள்கிறீர்கள்.</p>
    
    <h5>2. மாணவர் பொறுப்புகள்</h5>
    <p>மாணவர்கள் பொறுப்பு:</p>
    <ul>
      <li>சரியான மற்றும் முழுமையான பதிவு தகவலை வழங்குதல்</li>
      <li>கணக்கு அங்கீகாரங்களின் இரகசியத்தைப் பேணுதல்</li>
      <li>பல்கலைக்கழகத்தின் கல்விக் கொள்கைகள் மற்றும் நடைமுறைகளைப் பின்பற்றுதல்</li>
      <li>கல்வி நாட்காட்டியின் படி தேர்ந்தெடுக்கப்பட்ட பாடங்களை முடித்தல்</li>
    </ul>
    
    <h5>3. பாடம் தேர்வு</h5>
    <p>பாடம் தேர்வு பின்வருவனவற்றுக்கு உட்பட்டது:</p>
    <ul>
      <li>முன்நிபந்தனை தேவைகள்</li>
      <li>பாடத்தின் கிடைக்கும் தன்மை</li>
      <li>கல்வி நிலை</li>
      <li>துறை ஒப்புதல்</li>
    </ul>
    
    <h5>4. தரவு தனியுரிமை</h5>
    <p>உங்கள் தனிப்பட்ட தரவு எங்கள் தனியுரிமைக் கொள்கையின் படி கையாளப்படும்.</p>
    
    <h5>5. விதிமுறைகளை மாற்றுதல்</h5>
    <p>பல்கலைக்கழகம் எந்த நேரத்திலும் இந்த விதிமுறைகளை மாற்றும் உரிமையைக் கொண்டுள்ளது.</p>
  `,
  te: `
    <h4>నియమాలు మరియు షరతులు</h4>
    <p><strong>చివరిగా నవీకరించబడింది:</strong>7 డిసెంబర్ 2025</p>
    
    <h5>1. నియమాలను అంగీకరించడం</h5>
    <p>స్టాన్ఫోర్డ్ విశ్వవిద్యాలయం యొక్క పాఠ్య ప్రణాళిక వ్యవస్థలో నమోదు చేసుకోవడం ద్వారా, మీరు ఈ నియమాలు మరియు షరతులకు కట్టుబడి ఉండటానికి అంగీకరిస్తున్నారు.</p>
    
    <h5>2. విద్యార్థి బాధ్యతలు</h5>
    <p>విద్యార్థులు బాధ్యత:</p>
    <ul>
      <li>ఖచ్చితమైన మరియు పూర్తి నమోదు సమాచారాన్ని అందించడం</li>
      <li>ఖాతా ఆధారాల గోప్యతను కాపాడటం</li>
      <li>విశ్వవిద్యాలయం యొక్క విద్యా విధానాలు మరియు ప్రక్రియలను పాటించడం</li>
      <li>విద్యా క్యాలెండర్ ప్రకారం ఎంచుకున్న కోర్సులను పూర్తి చేయడం</li>
    </ul>
    
    <h5>3. కోర్సు ఎంపిక</h5>
    <p>కోర్సు ఎంపిక కింది వాటికి లోబడి ఉంటుంది:</p>
    <ul>
      <li>ముందస్తు అవసరాలు</li>
      <li>కోర్సు లభ్యత</li>
      <li>విద్యా స్థితి</li>
      <li>విభాగం ఆమోదం</li>
    </ul>
    
    <h5>4. డేటా గోప్యత</h5>
    <p>మీ వ్యక్తిగత డేటా మా గోప్యతా విధానం ప్రకారం నిర్వహించబడుతుంది.</p>
    
    <h5>5. నియమాలను సవరించడం</h5>
    <p>విశ్వవిద్యాలయం ఎప్పుడైనా ఈ నియమాలను సవరించే హక్కును కలిగి ఉంది.</p>
  `,
  bn: `
    <h4>শর্তাবলী এবং নিয়মাবলী</h4>
    <p><strong>সর্বশেষ আপডেট:</strong> ৭ ডিসেম্বর, ২০২৫</p>
    
    <h5>১. শর্তাবলী গ্রহণ</h5>
    <p>স্ট্যানফোর্ড বিশ্ববিদ্যালয়ের পাঠ্যক্রম সিস্টেমে নিবন্ধন করার মাধ্যমে, আপনি এই শর্তাবলী এবং নিয়মাবলী মেনে চলতে সম্মত হচ্ছেন।</p>
    
    <h5>২. শিক্ষার্থীদের দায়িত্ব</h5>
    <p>শিক্ষার্থীদের দায়িত্ব:</p>
    <ul>
      <li>সঠিক এবং সম্পূর্ণ নিবন্ধন তথ্য প্রদান করা</li>
      <li>অ্যাকাউন্ট ক্রেডেনশিয়ালের গোপনীয়তা বজায় রাখা</li>
      <li>বিশ্ববিদ্যালয়ের একাডেমিক নীতিমালা এবং পদ্ধতি অনুসরণ করা</li>
      <li>একাডেমিক ক্যালেন্ডার অনুযায়ী নির্বাচিত কোর্স সম্পূর্ণ করা</li>
    </ul>
    
    <h5>৩. কোর্স নির্বাচন</h5>
    <p>কোর্স নির্বাচন নিম্নলিখিত বিষয়ের উপর নির্ভর করে:</p>
    <ul>
      <li>পূর্বশর্ত প্রয়োজনীয়তা</li>
      <li>কোর্সের প্রাপ্যতা</li>
      <li>একাডেমিক অবস্থা</li>
      <li>বিভাগীয় অনুমোদন</li>
    </ul>
    
    <h5>৪. ডেটা গোপনীয়তা</h5>
    <p>আপনার ব্যক্তিগত ডেটা আমাদের গোপনীয়তা নীতিমালা অনুযায়ী পরিচালিত হবে।</p>
    
    <h5>৫. শর্তাবলী সংশোধন</h5>
    <p>বিশ্ববিদ্যালয় যেকোনো সময় এই শর্তাবলী সংশোধন করার অধিকার সংরক্ষণ করে।</p>
  `,
  lo: `
    <h4>ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂ</h4>
    <p><strong>ອັບເດດລ່າສຸດ:</strong> 7 ທັນວາ 2025</p>
    
    <h5>1. ການຍອມຮັບຂໍ້ກຳນົດ</h5>
    <p>ໂດຍການລົງທະບຽນໃນລະບົບຫຼັກສູດຂອງມະຫາວິທະຍາໄລ Stanford, ທ່ານຕົກລົງທີ່ຈະຖືກຜູກມັດໂດຍຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂເຫຼົ່ານີ້.</p>
    
    <h5>2. ຄວາມຮັບຜິດຊອບຂອງນັກສຶກສາ</h5>
    <p>ນັກສຶກສາມີຄວາມຮັບຜິດຊອບໃນ:</p>
    <ul>
      <li>ການໃຫ້ຂໍ້ມູນລົງທະບຽນທີ່ຖືກຕ້ອງ ແລະ ຄົບຖ້ວນ</li>
      <li>ການຮັກສາຄວາມລັບຂອງຂໍ້ມູນການເຂົ້າລະບົບບັນຊີ</li>
      <li>ການປະຕິບັດຕາມນະໂຍບາຍ ແລະ ຂັ້ນຕອນວິຊາການຂອງມະຫາວິທະຍາໄລ</li>
      <li>ການສຳເລັດວິຊາທີ່ເລືອກຕາມປະຕິທິນວິຊາການ</li>
    </ul>
    
    <h5>3. ການເລືອກວິຊາ</h5>
    <p>ການເລືອກວິຊາຂຶ້ນກັບ:</p>
    <ul>
      <li>ເງື່ອນໄຂກ່ອນໜ້າ</li>
      <li>ຄວາມພ້ອມຂອງວິຊາ</li>
      <li>ສະຖານະການຮຽນ</li>
      <li>ການອະນຸມັດຈາກພະແນກ</li>
    </ul>
    
    <h5>4. ຄວາມເປັນສ່ວນຕົວຂອງຂໍ້ມູນ</h5>
    <p>ຂໍ້ມູນສ່ວນຕົວຂອງທ່ານຈະຖືກຈັດການຕາມນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງພວກເຮົາ.</p>
    
    <h5>5. ການແກ້ໄຂຂໍ້ກຳນົດ</h5>
    <p>ມະຫາວິທະຍາໄລຮັກສາສິດໃນການແກ້ໄຂຂໍ້ກຳນົດເຫຼົ່ານີ້ໄດ້ທຸກເວລາ.</p>
  `,
  km: `
    <h4>លក្ខខណ្ឌ និងតម្រូវការ</h4>
    <p><strong>ការអាប់ដេតចុងក្រោយ:</strong> ៧ ខែធ្នូ ២០២៥</p>
    
    <h5>1. ការទទួលយកលក្ខខណ្ឌ</h5>
    <p>តាមរយៈការចុះឈ្មោះក្នុងប្រព័ន្ធអក្ខរកម្មរបស់សាកលវិទ្យាល័យ Stanford អ្នកយល់ព្រមឱ្យបានចងក្រងដោយលក្ខខណ្ឌ និងតម្រូវការទាំងនេះ។</p>
    
    <h5>2. កាតព្វកិច្ចរបស់និស្សិត</h5>
    <p>និស្សិតមានកាតព្វកិច្ចក្នុងការ:</p>
    <ul>
      <li>ផ្តល់ព័ត៌មានចុះឈ្មោះត្រឹមត្រូវ និងពេញលេញ</li>
      <li>ថែរក្សាភាពសម្ងាត់នៃព័ត៌មានគណនី</li>
      <li>អនុវត្តតាមគោលនយោបាយ និងនីតិវិធីសិក្សារបស់សាកលវិទ្យាល័យ</li>
      <li>បញ្ចប់វគ្គសិក្សាដែលបានជ្រើសរើសតាមតារាងពេលវេលាសិក្សា</li>
    </ul>
    
    <h5>3. ការជ្រើសរើសវគ្គសិក្សា</h5>
    <p>ការជ្រើសរើសវគ្គសិក្សាស្ថិតក្រោម:</p>
    <ul>
      <li>តម្រូវការមុនពេលចូលរៀន</li>
      <li>ភាពអាចប្រើបាននៃវគ្គសិក្សា</li>
      <li>ស្ថានភាពសិក្សា</li>
      <li>ការអនុម័តពីនាយកដ្ឋាន</li>
    </ul>
    
    <h5>4. ភាពឯកជនទិន្នន័យ</h5>
    <p>ទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នកនឹងត្រូវបានគ្រប់គ្រងដោយអនុលោមតាមគោលនយោបាយភាពឯកជនរបស់យើង។</p>
    
    <h5>5. ការកែប្រែលក្ខខណ្ឌ</h5>
    <p>សាកលវិទ្យាល័យការពារសិទ្ធិក្នុងការកែប្រែលក្ខខណ្ឌទាំងនេះនៅពេលណាក៏បាន។</p>
  `,
  my: `
    <h4>စည်းမျဥ်းနှင့် သတ်မှတ်ချက်များ</h4>
    <p><strong>နောက်ဆုံးအပ်ဒိတ်:</strong> ၇ ဒီဇင်ဘာ ၂၀၂၅</p>
    
    <h5>၁. စည်းမျဥ်းများကို လက်ခံခြင်း</h5>
    <p>Stanford တက္ကသိုလ်၏ သင်ရိုးညွှန်းတမ်း စနစ်တွင် မှတ်ပုံတင်ခြင်းဖြင့် သင်သည် ဤစည်းမျဥ်းနှင့် သတ်မှတ်ချက်များကို လိုက်နာရန် သဘောတူပါသည်။</p>
    
    <h5>၂. ကျောင်းသား တာဝန်ဝတ္တရားများ</h5>
    <p>ကျောင်းသားများ၏ တာဝန်များမှာ:</p>
    <ul>
      <li>တိကျပြည့်စုံသော မှတ်ပုံတင်ချက်များ ပေးခြင်း</li>
      <li>အကောင့်အထောက်အထားများ၏ လျှို့ဝှက်ချက်ကို ထိန်းသိမ်းခြင်း</li>
      <li>တက္ကသိုလ်၏ ပညာရေးဆိုင်ရာ မူဝါဒများနှင့် လုပ်ထုံးလုပ်နည်းများကို လိုက်နာခြင်း</li>
      <li>ပညာသင်နှစ်အလိုက် ရွေးချယ်ထားသော သင်တန်းများကို ပြီးမြောက်အောင် ဆောင်ရွက်ခြင်း</li>
    </ul>
    
    <h5>၃. သင်တန်းရွေးချယ်ခြင်း</h5>
    <p>သင်တန်းရွေးချယ်ခြင်းသည် အောက်ပါတို့အပေါ် မူတည်သည်:</p>
    <ul>
      <li>လိုအပ်ချက်များ</li>
      <li>သင်တန်း ရရှိနိုင်မှု</li>
      <li>ပညာရေး အဆင့်အတန်း</li>
      <li>ဌာန အတည်ပြုချက်</li>
    </ul>
    
    <h5>၄. အချက်အလက် ကိုယ်ရေးကိုယ်တာ</h5>
    <p>သင့်ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို ကျွန်ုပ်တို့၏ ကိုယ်ရေးကိုယ်တာမူဝါဒအရ ကိုင်တွယ်ပါလိမ့်မည်။</p>
    
    <h5>၅. စည်းမျဥ်းများ ပြုပြင်ခြင်း</h5>
    <p>တက္ကသိုလ်သည် မည်သည့်အချိန်တွင်မဆို ဤစည်းမျဥ်းများကို ပြုပြင်ခွင့်ကို လက်ဝယ်ထားရှိပါသည်။</p>
  `,
  ne: `
    <h4>सर्तहरू र शर्तहरू</h4>
    <p><strong>अन्तिम अपडेट:</strong> ७ डिसेम्बर २०२५</p>
    
    <h5>१. सर्तहरू स्वीकार गर्दै</h5>
    <p>स्ट्यानफोर्ड विश्वविद्यालयको पाठ्यक्रम प्रणालीमा दर्ता गरेर, तपाईं यी सर्तहरू र शर्तहरूबाट बाँधिएको मानिनुहुनेछ।</p>
    
    <h5>२. विद्यार्थीहरूको जिम्मेवारी</h5>
    <p>विद्यार्थीहरू जिम्मेवार छन्:</p>
    <ul>
      <li>सही र पूर्ण दर्ता जानकारी प्रदान गर्न</li>
      <li>खाता प्रमाणपत्रहरूको गोपनीयता कायम राख्न</li>
      <li>विश्वविद्यालयको शैक्षिक नीतिहरू र प्रक्रियाहरू पालना गर्न</li>
      <li>शैक्षिक पात्रो अनुसार छनौट गरिएका पाठ्यक्रमहरू पूरा गर्न</li>
    </ul>
    
    <h5>३. पाठ्यक्रम छनौट</h5>
    <p>पाठ्यक्रम छनौट निम्न कुराहरूमा निर्भर गर्दछ:</p>
    <ul>
      <li>पूर्वशर्त आवश्यकताहरू</li>
      <li>पाठ्यक्रम उपलब्धता</li>
      <li>शैक्षिक स्थिति</li>
      <li>विभागीय स्वीकृति</li>
    </ul>
    
    <h5>४. डाटा गोपनीयता</h5>
    <p>तपाईंको व्यक्तिगत डाटा हाम्रो गोपनीयता नीति अनुसार संचालन हुनेछ।</p>
    
    <h5>५. सर्तहरू परिवर्तन गर्दै</h5>
    <p>विश्वविद्यालयले कुनै पनि समयमा यी सर्तहरू परिवर्तन गर्ने अधिकार राख्छ।</p>
  `,
  pa: `
    <h4>ਸ਼ਰਤਾਂ ਅਤੇ ਨਿਯਮ</h4>
    <p><strong>ਆਖਰੀ ਅੱਪਡੇਟ:</strong> 7 ਦਿਸੰਬਰ 2025</p>
    
    <h5>1. ਸ਼ਰਤਾਂ ਸਵੀਕਾਰ ਕਰਨਾ</h5>
    <p>ਸਟੈਨਫੋਰਡ ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਪਾਠਕ੍ਰਮ ਸਿਸਟਮ ਵਿੱਚ ਰਜਿਸਟਰ ਕਰਕੇ, ਤੁਸੀਂ ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਅਤੇ ਨਿਯਮਾਂ ਦਾ ਪਾਲਣ ਕਰਨ ਲਈ ਸਹਿਮਤ ਹੋ ਜਾਂਦੇ ਹੋ।</p>
    
    <h5>2. ਵਿਦਿਆਰਥੀਆਂ ਦੀਆਂ ਜਿੰਮੇਵਾਰੀਆਂ</h5>
    <p>ਵਿਦਿਆਰਥੀ ਜਿੰਮੇਵਾਰ ਹਨ:</p>
    <ul>
      <li>ਸਹੀ ਅਤੇ ਪੂਰੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ</li>
      <li>ਖਾਤਾ ਪ੍ਰਮਾਣਿਤਤਾਵਾਂ ਦੀ ਗੋਪਨੀਯਤਾ ਬਣਾਈ ਰੱਖਣ ਲਈ</li>
      <li>ਯੂਨੀਵਰਸਿਟੀ ਦੀਆਂ ਅਕਾਦਮਿਕ ਨੀਤੀਆਂ ਅਤੇ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨ ਲਈ</li>
      <li>ਅਕਾਦਮਿਕ ਕੈਲੰਡਰ ਅਨੁਸਾਰ ਚੁਣੇ ਗਏ ਕੋਰਸ ਪੂਰੇ ਕਰਨ ਲਈ</li>
    </ul>
    
    <h5>3. ਕੋਰਸ ਚੋਣ</h5>
    <p>ਕੋਰਸ ਚੋਣ ਇਹਨਾਂ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ:</p>
    <ul>
      <li>ਪ੍ਰੀ-ਰਿਕਵਾਈਜ਼ਮੈਂਟ ਲੋੜਾਂ</li>
      <li>ਕੋਰਸ ਦੀ ਉਪਲਬਧਤਾ</li>
      <li>ਅਕਾਦਮਿਕ ਸਥਿਤੀ</li>
      <li>ਵਿਭਾਗੀ ਮਨਜ਼ੂਰੀ</li>
    </ul>
    
    <h5>4. ਡੇਟਾ ਪਰਾਈਵੇਸੀ</h5>
    <p>ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਸਾਡੀ ਪਰਾਈਵੇਸੀ ਨੀਤੀ ਅਨੁਸਾਰ ਸੰਭਾਲਿਆ ਜਾਵੇਗਾ।</p>
    
    <h5>5. ਸ਼ਰਤਾਂ ਵਿੱਚ ਸੋਧ</h5>
    <p>ਯੂਨੀਵਰਸਿਟੀ ਕਿਸੇ ਵੀ ਸਮੇਂ ਇਨ੍ਹਾਂ ਸ਼ਰਤਾਂ ਨੂੰ ਸੋਧਣ ਦਾ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ ਰੱਖਦੀ ਹੈ।</p>
  `,
  si: `
    <h4>නියමයන් සහ කොන්දේසි</h4>
    <p><strong>අවසන් යාවත්කාලීන කිරීම:</strong> 7 දෙසැම්බර් 2025</p>
    
    <h5>1. නියමයන් පිළිගැනීම</h5>
    <p>ස්ටැන්ෆර්ඩ් විශ්වවිද්‍යාලයේ පාඨමාලා පද්ධතියට ලියාපදිංචි වීමෙන්, ඔබ මෙම නියමයන් සහ කොන්දේසිවලට බැඳී සිටීමට එකඟ වේ.</p>
    
    <h5>2. ශිෂ්‍ය වගකීම්</h5>
    <p>ශිෂ්‍යයන් වගකීම් ඇත්තේ:</p>
    <ul>
      <li>නිවැරදි සහ සම්පූර්ණ ලියාපදිංචි තොරතුරු සැපයීමට</li>
      <li>ගිණුම් සහතිකවල රහස්‍යතාව රැකීමට</li>
      <li>විශ්වවිද්‍යාලයේ ශාස්ත්‍රීය ප්‍රතිපත්ති සහ ක්‍රියා පටිපාටි අනුගමනය කිරීමට</li>
      <li>ශාස්ත්‍රීය දින දර්ශනයට අනුව තෝරාගත් පාඨමාලා සම්පූර්ණ කිරීමට</li>
    </ul>
    
    <h5>3. පාඨමාලා තේරීම</h5>
    <p>පාඨමාලා තේරීම යටපත් වන්නේ:</p>
    <ul>
      <li>පූර්ව අවශ්‍යතා</li>
      <li>පාඨමාලා ලබා ගත හැකියාව</li>
      <li>ශාස්ත්‍රීය තත්ත්වය</li>
      <li>විධායක අනුමැතිය</li>
    </ul>
    
    <h5>4. දත්ත රහස්‍යතාව</h5>
    <p>ඔබේ පුද්ගලික දත්ත අපගේ රහස්‍යතා ප්‍රතිපත්තියට අනුව හැසිරවෙනු ඇත.</p>
    
    <h5>5. නියමයන් වෙනස් කිරීම</h5>
    <p>විශ්වවිද්‍යාලය ඕනෑම අවස්ථාවක මෙම නියමයන් වෙනස් කිරීමේ අයිතිය රඳවා තබා ගනී.</p>
  `
};

// Privacy policy content for all languages
const privacyPolicyContent = {
  en: `
    <h4>Privacy Policy</h4>
    <p><strong>Last Updated:</strong>December 7, 2025</p>
    
    <h5>1. Information We Collect</h5>
    <p>We collect the following information from students:</p>
    <ul>
      <li>Personal identification information (name, email address)</li>
      <li>Academic information (student ID, track, year, term)</li>
      <li>Course selection data</li>
      <li>Technical information (IP address, browser type)</li>
    </ul>
    
    <h5>2. How We Use Your Information</h5>
    <p>Your information is used to:</p>
    <ul>
      <li>Process your registration and course enrollment</li>
      <li>Manage your academic progress</li>
      <li>Communicate important academic updates</li>
      <li>Improve our services</li>
    </ul>
    
    <h5>3. Data Security</h5>
    <p>We implement appropriate security measures to protect your personal information:</p>
    <ul>
      <li>Encrypted data transmission</li>
      <li>Secure database storage</li>
      <li>Regular security audits</li>
      <li>Access control measures</li>
    </ul>
    
    <h5>4. Data Retention</h5>
    <p>We retain your personal data only for as long as necessary:</p>
    <ul>
      <li>Active student records: Until graduation</li>
      <li>Inactive accounts: Up to 5 years</li>
      <li>Course data: For academic tracking purposes</li>
    </ul>
    
    <h5>5. Your Rights</h5>
    <p>You have the right to:</p>
    <ul>
      <li>Access your personal data</li>
      <li>Correct inaccurate information</li>
      <li>Request data deletion</li>
      <li>Opt-out of non-essential communications</li>
    </ul>
  `,
  zh: `
    <h4>隐私政策</h4>
    <p><strong>最后更新：</strong>2025年12月7日</p>
    
    <h5>1. 我们收集的信息</h5>
    <p>我们从学生那里收集以下信息：</p>
    <ul>
      <li>个人身份信息（姓名、电子邮件地址）</li>
      <li>学术信息（学号、专业方向、年级、学期）</li>
      <li>课程选择数据</li>
      <li>技术信息（IP地址、浏览器类型）</li>
    </ul>
    
    <h5>2. 我们如何使用您的信息</h5>
    <p>您的信息用于：</p>
    <ul>
      <li>处理您的注册和课程注册</li>
      <li>管理您的学术进展</li>
      <li>传达重要的学术更新</li>
      <li>改进我们的服务</li>
    </ul>
    
    <h5>3. 数据安全</h5>
    <p>我们实施适当的安全措施来保护您的个人信息：</p>
    <ul>
      <li>加密数据传输</li>
      <li>安全的数据库存储</li>
      <li>定期安全审计</li>
      <li>访问控制措施</li>
    </ul>
    
    <h5>4. 数据保留</h5>
    <p>我们仅在必要时间内保留您的个人数据：</p>
    <ul>
      <li>活跃学生记录：直到毕业</li>
      <li>非活跃账户：最多5年</li>
      <li>课程数据：用于学术跟踪目的</li>
    </ul>
    
    <h5>5. 您的权利</h5>
    <p>您有权：</p>
    <ul>
      <li>访问您的个人数据</li>
      <li>更正不准确的信息</li>
      <li>请求删除数据</li>
      <li>选择退出非必要通信</li>
    </ul>
  `,
  ja: `
    <h4>プライバシーポリシー</h4>
    <p><strong>最終更新：</strong>2025年12月7日</p>
    
    <h5>1. 収集する情報</h5>
    <p>学生から以下の情報を収集します：</p>
    <ul>
      <li>個人識別情報（氏名、メールアドレス）</li>
      <li>学術情報（学生証番号、トラック、学年、学期）</li>
      <li>科目選択データ</li>
      <li>技術情報（IPアドレス、ブラウザの種類）</li>
    </ul>
    
    <h5>2. 情報の使用目的</h5>
    <p>お客様の情報は以下の目的で使用されます：</p>
    <ul>
      <li>登録と科目登録の処理</li>
      <li>学業の進捗管理</li>
      <li>重要な学術的更新の通知</li>
      <li>サービスの改善</li>
    </ul>
    
    <h5>3. データセキュリティ</h5>
    <p>個人情報を保護するために適切なセキュリティ対策を実施しています：</p>
    <ul>
      <li>暗号化されたデータ転送</li>
      <li>安全なデータベース保存</li>
      <li>定期的なセキュリティ監査</li>
      <li>アクセス制御対策</li>
    </ul>
    
    <h5>4. データ保持</h5>
    <p>個人データは必要な期間のみ保持されます：</p>
    <ul>
      <li>アクティブな学生記録：卒業まで</li>
      <li>非アクティブなアカウント：最大5年間</li>
      <li>科目データ：学術追跡目的</li>
    </ul>
    
    <h5>5. お客様の権利</h5>
    <p>お客様には以下の権利があります：</p>
    <ul>
      <li>個人データへのアクセス</li>
      <li>不正確な情報の訂正</li>
      <li>データ削除の要求</li>
      <li>不要な通信のオプトアウト</li>
    </ul>
  `,
  ko: `
    <h4>개인정보 보호정책</h4>
    <p><strong>최종 업데이트:</strong>2025년 12월 7일</p>
    
    <h5>1. 수집하는 정보</h5>
    <p>학생으로부터 다음 정보를 수집합니다:</p>
    <ul>
      <li>개인 식별 정보(이름, 이메일 주소)</li>
      <li>학업 정보(학번, 전공 트랙, 학년, 학기)</li>
      <li>강좌 선택 데이터</li>
      <li>기술 정보(IP 주소, 브라우저 유형)</li>
    </ul>
    
    <h5>2. 정보 사용 방법</h5>
    <p>귀하의 정보는 다음 목적으로 사용됩니다:</p>
    <ul>
      <li>등록 및 강좌 수강 신청 처리</li>
      <li>학업 진행 상황 관리</li>
      <li>중요한 학업 업데이트 전달</li>
      <li>서비스 개선</li>
    </ul>
    
    <h5>3. 데이터 보안</h5>
    <p>개인 정보를 보호하기 위해 적절한 보안 조치를 시행합니다:</p>
    <ul>
      <li>암호화된 데이터 전송</li>
      <li>안전한 데이터베이스 저장</li>
      <li>정기적인 보안 감사</li>
      <li>접근 제어 조치</li>
    </ul>
    
    <h5>4. 데이터 보존</h5>
    <p>개인 데이터는 필요한 기간 동안만 보존됩니다:</p>
    <ul>
      <li>활성 학생 기록: 졸업 시까지</li>
      <li>비활성 계정: 최대 5년</li>
      <li>강좌 데이터: 학업 추적 목적</li>
    </ul>
    
    <h5>5. 귀하의 권리</h5>
    <p>귀하에게는 다음과 같은 권리가 있습니다:</p>
    <ul>
      <li>개인 데이터에 대한 접근</li>
      <li>부정확한 정보 수정</li>
      <li>데이터 삭제 요청</li>
      <li>비필수 커뮤니케이션 옵트아웃</li>
    </ul>
  `,
  ar: `
    <h4>سياسة الخصوصية</h4>
    <p><strong>آخر تحديث:</strong>٧ ديسمبر ٢٠٢٥</p>
    
    <h5>1. المعلومات التي نجمعها</h5>
    <p>نجمع المعلومات التالية من الطلاب:</p>
    <ul>
      <li>معلومات التعريف الشخصية (الاسم، عنوان البريد الإلكتروني)</li>
      <li>المعلومات الأكاديمية (رقم الطالب، المسار، السنة، الفصل الدراسي)</li>
      <li>بيانات اختيار المقررات</li>
      <li>المعلومات الفنية (عنوان IP، نوع المتصفح)</li>
    </ul>
    
    <h5>2. كيفية استخدام معلوماتك</h5>
    <p>تُستخدم معلوماتك من أجل:</p>
    <ul>
      <li>معالجة تسجيلك وتسجيل المقررات</li>
      <li>إدارة تقدمك الأكاديمي</li>
      <li>التواصل بشأن التحديثات الأكاديمية المهمة</li>
      <li>تحسين خدماتنا</li>
    </ul>
    
    <h5>3. أمن البيانات</h5>
    <p>ننفذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية:</p>
    <ul>
      <li>نقل البيانات المشفرة</li>
      <li>تخزين قاعدة بيانات آمن</li>
      <li>تدقيقات أمنية منتظمة</li>
      <li>تدابير التحكم في الوصول</li>
    </ul>
    
    <h5>4. احتفاظ البيانات</h5>
    <p>نحتفظ ببياناتك الشخصية فقط لأطول فترة ضرورية:</p>
    <ul>
      <li>سجلات الطلاب النشطين: حتى التخرج</li>
      <li>الحسابات غير النشطة: حتى 5 سنوات</li>
      <li>بيانات المقررات: لأغراض تتبع أكاديمي</li>
    </ul>
    
    <h5>5. حقوقك</h5>
    <p>لديك الحق في:</p>
    <ul>
      <li>الوصول إلى بياناتك الشخصية</li>
      <li>تصحيح المعلومات غير الدقيقة</li>
      <li>طلب حذف البيانات</li>
      <li>الانسحاب من الاتصالات غير الأساسية</li>
    </ul>
  `,
  hi: `
    <h4>गोपनीयता नीति</h4>
    <p><strong>अंतिम अद्यतन:</strong>7 दिसंबर 2025</p>
    
    <h5>1. हम कौन सी जानकारी एकत्र करते हैं</h5>
    <p>हम छात्रों से निम्नलिखित जानकारी एकत्र करते हैं:</p>
    <ul>
      <li>व्यक्तिगत पहचान जानकारी (नाम, ईमेल पता)</li>
      <li>शैक्षणिक जानकारी (छात्र आईडी, ट्रैक, वर्ष, टर्म)</li>
      <li>पाठ्यक्रम चयन डेटा</li>
      <li>तकनीकी जानकारी (आईपी पता, ब्राउज़र प्रकार)</li>
    </ul>
    
    <h5>2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h5>
    <p>आपकी जानकारी का उपयोग किया जाता है:</p>
    <ul>
      <li>आपके पंजीकरण और पाठ्यक्रम नामांकन को संसाधित करने के लिए</li>
      <li>आपकी शैक्षणिक प्रगति का प्रबंधन करने के लिए</li>
      <li>महत्वपूर्ण शैक्षणिक अपडेट संचारित करने के लिए</li>
      <li>हमारी सेवाओं में सुधार करने के लिए</li>
    </ul>
    
    <h5>3. डेटा सुरक्षा</h5>
    <p>हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं:</p>
    <ul>
      <li>एन्क्रिप्टेड डेटा संचरण</li>
      <li>सुरक्षित डेटाबेस भंडारण</li>
      <li>नियमित सुरक्षा लेखा परीक्षा</li>
      <li>पहुंच नियंत्रण उपाय</li>
    </ul>
    
    <h5>4. डेटा प्रतिधारण</h5>
    <p>हम आपके व्यक्तिगत डेटा को केवल आवश्यक समय तक रखते हैं:</p>
    <ul>
      <li>सक्रिय छात्र रिकॉर्ड: स्नातक तक</li>
      <li>निष्क्रिय खाते: 5 वर्ष तक</li>
      <li>पाठ्यक्रम डेटा: शैक्षणिक ट्रैकिंग उद्देश्यों के लिए</li>
    </ul>
    
    <h5>5. आपके अधिकार</h5>
    <p>आपको अधिकार है:</p>
    <ul>
      <li>अपने व्यक्तिगत डेटा तक पहुंचने का</li>
      <li>गलत जानकारी सुधारने का</li>
      <li>डेटा हटाने का अनुरोध करने का</li>
      <li>गैर-आवश्यक संचार से बाहर निकलने का</li>
    </ul>
  `,
  th: `
    <h4>นโยบายความเป็นส่วนตัว</h4>
    <p><strong>อัปเดตล่าสุด:</strong>7 ธันวาคม 2025</p>
    
    <h5>1. ข้อมูลที่เรารวบรวม</h5>
    <p>เรารวบรวมข้อมูลต่อไปนี้จากนักศึกษา:</p>
    <ul>
      <li>ข้อมูลระบุตัวตนส่วนบุคคล (ชื่อ นามสกุล อีเมล)</li>
      <li>ข้อมูลทางวิชาการ (รหัสนักศึกษา แทร็ค ปีการศึกษา ภาคเรียน)</li>
      <li>ข้อมูลการเลือกรายวิชา</li>
      <li>ข้อมูลทางเทคนิค (ที่อยู่ IP ประเภทเบราว์เซอร์)</li>
    </ul>
    
    <h5>2. วิธีที่เราใช้ข้อมูลของคุณ</h5>
    <p>ข้อมูลของคุณถูกใช้เพื่อ:</p>
    <ul>
      <li>ประมวลผลการลงทะเบียนและการลงทะเบียนรายวิชาของคุณ</li>
      <li>จัดการความก้าวหน้าทางวิชาการของคุณ</li>
      <li>สื่อสารการอัปเดตทางวิชาการที่สำคัญ</li>
      <li>ปรับปรุงบริการของเรา</li>
    </ul>
    
    <h5>3. ความปลอดภัยของข้อมูล</h5>
    <p>เราดำเนินมาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณ:</p>
    <ul>
      <li>การส่งผ่านข้อมูลแบบเข้ารหัส</li>
      <li>ที่จัดเก็บฐานข้อมูลที่ปลอดภัย</li>
      <li>การตรวจสอบความปลอดภัยเป็นประจำ</li>
      <li>มาตรการควบคุมการเข้าถึง</li>
    </ul>
    
    <h5>4. การเก็บรักษาข้อมูล</h5>
    <p>เราจะเก็บข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นเท่านั้น:</p>
    <ul>
      <li>บันทึกนักศึกษาที่ใช้งานอยู่: จนกว่าจะสำเร็จการศึกษา</li>
      <li>บัญชีที่ไม่ใช้งาน: สูงสุด 5 ปี</li>
      <li>ข้อมูลรายวิชา: เพื่อวัตถุประสงค์ในการติดตามทางวิชาการ</li>
    </ul>
    
    <h5>5. สิทธิ์ของคุณ</h5>
    <p>คุณมีสิทธิ์ที่จะ:</p>
    <ul>
      <li>เข้าถึงข้อมูลส่วนบุคคลของคุณ</li>
      <li>แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
      <li>ขอให้ลบข้อมูล</li>
      <li>ปฏิเสธการสื่อสารที่ไม่จำเป็น</li>
    </ul>
  `,
  vi: `
    <h4>Chính sách Bảo mật</h4>
    <p><strong>Cập nhật lần cuối:</strong>7 tháng 12 năm 2025</p>
    
    <h5>1. Thông tin Chúng tôi Thu thập</h5>
    <p>Chúng tôi thu thập thông tin sau từ sinh viên:</p>
    <ul>
      <li>Thông tin nhận dạng cá nhân (tên, địa chỉ email)</li>
      <li>Thông tin học thuật (mã sinh viên, chuyên ngành, năm học, học kỳ)</li>
      <li>Dữ liệu lựa chọn khóa học</li>
      <li>Thông tin kỹ thuật (địa chỉ IP, loại trình duyệt)</li>
    </ul>
    
    <h5>2. Cách Chúng tôi Sử dụng Thông tin của Bạn</h5>
    <p>Thông tin của bạn được sử dụng để:</p>
    <ul>
      <li>Xử lý đăng ký và ghi danh khóa học của bạn</li>
      <li>Quản lý tiến trình học tập của bạn</li>
      <li>Thông báo các cập nhật học thuật quan trọng</li>
      <li>Cải thiện dịch vụ của chúng tôi</li>
    </ul>
    
    <h5>3. Bảo mật Dữ liệu</h5>
    <p>Chúng tôi thực hiện các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn:</p>
    <ul>
      <li>Truyền dữ liệu được mã hóa</li>
      <li>Lưu trữ cơ sở dữ liệu an toàn</li>
      <li>Kiểm tra bảo mật định kỳ</li>
      <li>Biện pháp kiểm soát truy cập</li>
    </ul>
    
    <h5>4. Lưu giữ Dữ liệu</h5>
    <p>Chúng tôi chỉ lưu giữ dữ liệu cá nhân của bạn trong thời gian cần thiết:</p>
    <ul>
      <li>Hồ sơ sinh viên đang hoạt động: Cho đến khi tốt nghiệp</li>
      <li>Tài khoản không hoạt động: Lên đến 5 năm</li>
      <li>Dữ liệu khóa học: Cho mục đích theo dõi học thuật</li>
    </ul>
    
    <h5>5. Quyền của Bạn</h5>
    <p>Bạn có quyền:</p>
    <ul>
      <li>Truy cập dữ liệu cá nhân của bạn</li>
      <li>Sửa thông tin không chính xác</li>
      <li>Yêu cầu xóa dữ liệu</li>
      <li>Từ chối thông tin liên lạc không cần thiết</li>
    </ul>
  `,
  id: `
    <h4>Kebijakan Privasi</h4>
    <p><strong>Terakhir Diperbarui:</strong>7 Desember 2025</p>
    
    <h5>1. Informasi yang Kami Kumpulkan</h5>
    <p>Kami mengumpulkan informasi berikut dari mahasiswa:</p>
    <ul>
      <li>Informasi identifikasi pribadi (nama, alamat email)</li>
      <li>Informasi akademik (ID mahasiswa, jalur, tahun, semester)</li>
      <li>Data pemilihan mata kuliah</li>
      <li>Informasi teknis (alamat IP, jenis browser)</li>
    </ul>
    
    <h5>2. Cara Kami Menggunakan Informasi Anda</h5>
    <p>Informasi Anda digunakan untuk:</p>
    <ul>
      <li>Memproses pendaftaran dan pendaftaran mata kuliah Anda</li>
      <li>Mengelola kemajuan akademik Anda</li>
      <li>Mengomunikasikan pembaruan akademik penting</li>
      <li>Meningkatkan layanan kami</li>
    </ul>
    
    <h5>3. Keamanan Data</h5>
    <p>Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi informasi pribadi Anda:</p>
    <ul>
      <li>Transmisi data terenkripsi</li>
      <li>Penyimpanan database yang aman</li>
      <li>Audit keamanan rutin</li>
      <li>Tindakan kontrol akses</li>
    </ul>
    
    <h5>4. Penyimpanan Data</h5>
    <p>Kami menyimpan data pribadi Anda hanya selama diperlukan:</p>
    <ul>
      <li>Catatan mahasiswa aktif: Hingga kelulusan</li>
      <li>Akun tidak aktif: Hingga 5 tahun</li>
      <li>Data mata kuliah: Untuk tujuan pelacakan akademik</li>
    </ul>
    
    <h5>5. Hak Anda</h5>
    <p>Anda berhak untuk:</p>
    <ul>
      <li>Mengakses data pribadi Anda</li>
      <li>Memperbaiki informasi yang tidak akurat</li>
      <li>Meminta penghapusan data</li>
      <li>Memilih keluar dari komunikasi non-esensial</li>
    </ul>
  `,
  ms: `
    <h4>Dasar Privasi</h4>
    <p><strong>Kemaskini Terakhir:</strong>7 Disember 2025</p>
    
    <h5>1. Maklumat yang Kami Kumpulkan</h5>
    <p>Kami mengumpul maklumat berikut dari pelajar:</p>
    <ul>
      <li>Maklumat pengenalan peribadi (nama, alamat emel)</li>
      <li>Maklumat akademik (ID pelajar, trek, tahun, penggal)</li>
      <li>Data pemilihan kursus</li>
      <li>Maklumat teknikal (alamat IP, jenis pelayar)</li>
    </ul>
    
    <h5>2. Cara Kami Menggunakan Maklumat Anda</h5>
    <p>Maklumat anda digunakan untuk:</p>
    <ul>
      <li>Memproses pendaftaran dan pendaftaran kursus anda</li>
      <li>Menguruskan kemajuan akademik anda</li>
      <li>Menyampaikan kemas kini akademik penting</li>
      <li>Memperbaiki perkhidmatan kami</li>
    </ul>
    
    <h5>3. Keselamatan Data</h5>
    <p>Kami melaksanakan langkah-langkah keselamatan yang sesuai untuk melindungi maklumat peribadi anda:</p>
    <ul>
      <li>Penghantaran data disulitkan</li>
      <li>Penyimpanan pangkalan data selamat</li>
      <li>Audit keselamatan berkala</li>
      <li>Langkah kawalan akses</li>
    </ul>
    
    <h5>4. Penyimpanan Data</h5>
    <p>Kami menyimpan data peribadi anda hanya untuk tempoh yang diperlukan:</p>
    <ul>
      <li>Rekod pelajar aktif: Sehingga tamat pengajian</li>
      <li>Akaun tidak aktif: Sehingga 5 tahun</li>
      <li>Data kursus: Untuk tujuan penjejakan akademik</li>
    </ul>
    
    <h5>5. Hak Anda</h5>
    <p>Anda berhak untuk:</p>
    <ul>
      <li>Mengakses data peribadi anda</li>
      <li>Membetulkan maklumat yang tidak tepat</li>
      <li>Meminta pemadaman data</li>
      <li>Menolak komunikasi tidak penting</li>
    </ul>
  `,
  ru: `
    <h4>Политика конфиденциальности</h4>
    <p><strong>Последнее обновление:</strong>7 декабря 2025</p>
    
    <h5>1. Информация, которую мы собираем</h5>
    <p>Мы собираем следующую информацию от студентов:</p>
    <ul>
      <li>Личная идентификационная информация (имя, адрес электронной почты)</li>
      <li>Академическая информация (ID студента, направление, год, семестр)</li>
      <li>Данные о выборе курсов</li>
      <li>Техническая информация (IP-адрес, тип браузера)</li>
    </ul>
    
    <h5>2. Как мы используем вашу информацию</h5>
    <p>Ваша информация используется для:</p>
    <ul>
      <li>Обработки вашей регистрации и записи на курсы</li>
      <li>Управления вашим академическим прогрессом</li>
      <li>Сообщения важных академических обновлений</li>
      <li>Улучшения наших услуг</li>
    </ul>
    
    <h5>3. Безопасность данных</h5>
    <p>Мы применяем соответствующие меры безопасности для защиты вашей личной информации:</p>
    <ul>
      <li>Зашифрованная передача данных</li>
      <li>Безопасное хранение базы данных</li>
      <li>Регулярные проверки безопасности</li>
      <li>Меры контроля доступа</li>
    </ul>
    
    <h5>4. Хранение данных</h5>
    <p>Мы храним ваши личные данные только в течение необходимого времени:</p>
    <ul>
      <li>Активные записи студентов: До выпуска</li>
      <li>Неактивные учетные записи: До 5 лет</li>
      <li>Данные курсов: Для целей академического отслеживания</li>
    </ul>
    
    <h5>5. Ваши права</h5>
    <p>Вы имеете право:</p>
    <ul>
      <li>Доступа к вашим личным данным</li>
      <li>Исправления неточной информации</li>
      <li>Запроса удаления данных</li>
      <li>Отказа от несущественных сообщений</li>
    </ul>
  `,
  ur: `
    <h4>رازداری کی پالیسی</h4>
    <p><strong>آخری تازہ کاری:</strong>۷ دسمبر ۲۰۲۵</p>
    
    <h5>1. معلومات جو ہم جمع کرتے ہیں</h5>
    <p>ہم طلباء سے درج ذیل معلومات جمع کرتے ہیں:</p>
    <ul>
      <li>ذاتی شناختی معلومات (نام، ای میل ایڈریس)</li>
      <li>تعلیمی معلومات (طالب علم کی شناخت، ٹریک، سال، ٹرم)</li>
      <li>کورس سلیکشن ڈیٹا</li>
      <li>تکنیکی معلومات (آئی پی ایڈریس، براؤزر کی قسم)</li>
    </ul>
    
    <h5>2. ہم آپ کی معلومات کیسے استعمال کرتے ہیں</h5>
    <p>آپ کی معلومات کا استعمال کیا جاتا ہے:</p>
    <ul>
      <li>آپ کی رجسٹریشن اور کورس اندراج کو پروسیس کرنے کے لیے</li>
      <li>آپ کی تعلیمی ترقی کا انتظام کرنے کے لیے</li>
      <li>اہم تعلیمی اپ ڈیٹس کے بارے میں بات چیت کرنے کے لیے</li>
      <li>ہماری خدمات کو بہتر بنانے کے لیے</li>
    </ul>
    
    <h5>3. ڈیٹا سیکورٹی</h5>
    <p>ہم آپ کی ذاتی معلومات کی حفاظت کے لیے مناسب حفاظتی اقدامات نافذ کرتے ہیں:</p>
    <ul>
      <li>خفیہ کردہ ڈیٹا ٹرانسمیشن</li>
      <li>محفوظ ڈیٹا بیس اسٹوریج</li>
      <li>باقاعدہ سیکورٹی آڈٹ</li>
      <li>رسائی کنٹرول اقدامات</li>
    </ul>
    
    <h5>4. ڈیٹا کی برقراری</h5>
    <p>ہم آپ کے ذاتی ڈیٹا کو صرف ضروری مدت تک رکھتے ہیں:</p>
    <ul>
      <li>فعال طالب علم ریکارڈز: گریجویشن تک</li>
      <li>غیر فعال اکاؤنٹس: 5 سال تک</li>
      <li>کورس ڈیٹا: تعلیمی ٹریکنگ مقاصد کے لیے</li>
    </ul>
    
    <h5>5. آپ کے حقوق</h5>
    <p>آپ کو حق ہے:</p>
    <ul>
      <li>اپنے ذاتی ڈیٹا تک رسائی</li>
      <li>غلط معلومات کو درست کرنے کا</li>
      <li>ڈیٹا ڈیلیٹ کرنے کی درخواست دینے کا</li>
      <li>غیر ضروری مواصلات سے باہر نکلنے کا</li>
    </ul>
  `,
  tr: `
    <h4>Gizlilik Politikası</h4>
    <p><strong>Son Güncelleme:</strong>7 Aralık 2025</p>
    
    <h5>1. Topladığımız Bilgiler</h5>
    <p>Öğrencilerden aşağıdaki bilgileri topluyoruz:</p>
    <ul>
      <li>Kişisel kimlik bilgileri (ad, e-posta adresi)</li>
      <li>Akademik bilgiler (öğrenci kimliği, program, yıl, dönem)</li>
      <li>Ders seçimi verileri</li>
      <li>Teknik bilgiler (IP adresi, tarayıcı türü)</li>
    </ul>
    
    <h5>2. Bilgilerinizi Nasıl Kullanıyoruz</h5>
    <p>Bilgileriniz şunlar için kullanılır:</p>
    <ul>
      <li>Kaydınızı ve ders kaydınızı işlemek</li>
      <li>Akademik ilerlemenizi yönetmek</li>
      <li>Önemli akademik güncellemeleri iletmek</li>
      <li>Hizmetlerimizi iyileştirmek</li>
    </ul>
    
    <h5>3. Veri Güvenliği</h5>
    <p>Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri uyguluyoruz:</p>
    <ul>
      <li>Şifrelenmiş veri iletimi</li>
      <li>Güvenli veritabanı depolama</li>
      <li>Düzenli güvenlik denetimleri</li>
      <li>Erişim kontrol önlemleri</li>
    </ul>
    
    <h5>4. Veri Saklama</h5>
    <p>Kişisel verilerinizi yalnızca gerekli olduğu sürece saklıyoruz:</p>
    <ul>
      <li>Aktif öğrenci kayıtları: Mezuniyete kadar</li>
      <li>Etkin olmayan hesaplar: 5 yıla kadar</li>
      <li>Ders verileri: Akademik takip amacıyla</li>
    </ul>
    
    <h5>5. Haklarınız</h5>
    <p>Aşağıdaki haklara sahipsiniz:</p>
    <ul>
      <li>Kişisel verilerinize erişim</li>
      <li>Yanlış bilgileri düzeltme</li>
      <li>Veri silinmesini talep etme</li>
      <li>Gerekli olmayan iletişimlerden çıkma</li>
    </ul>
  `,
  fa: `
    <h4>سیاست حفظ حریم خصوصی</h4>
    <p><strong>آخرین بروزرسانی:</strong>۷ دسامبر ۲۰۲۵</p>
    
    <h5>1. اطلاعاتی که جمع آوری می کنیم</h5>
    <p>ما اطلاعات زیر را از دانشجویان جمع آوری می کنیم:</p>
    <ul>
      <li>اطلاعات شناسایی شخصی (نام، آدرس ایمیل)</li>
      <li>اطلاعات آکادمیک (شناسه دانشجویی، مسیر، سال، ترم)</li>
      <li>داده‌های انتخاب دوره</li>
      <li>اطلاعات فنی (آدرس IP، نوع مرورگر)</li>
    </ul>
    
    <h5>2. نحوه استفاده ما از اطلاعات شما</h5>
    <p>اطلاعات شما برای موارد زیر استفاده می شود:</p>
    <ul>
      <li>پردازش ثبت نام و ثبت نام دوره شما</li>
      <li>مدیریت پیشرفت آکادمیک شما</li>
      <li>ارتباط بروزرسانی‌های مهم آکادمیک</li>
      <li>بهبود خدمات ما</li>
    </ul>
    
    <h5>3. امنیت داده‌ها</h5>
    <p>ما اقدامات امنیتی مناسبی برای محافظت از اطلاعات شخصی شما اجرا می کنیم:</p>
    <ul>
      <li>انتقال داده‌های رمزگذاری شده</li>
      <li>ذخیره سازی پایگاه داده ایمن</li>
      <li>حسابرسی امنیتی منظم</li>
      <li>اقدامات کنترل دسترسی</li>
    </ul>
    
    <h5>4. نگهداری داده‌ها</h5>
    <p>ما داده‌های شخصی شما را تنها برای مدت زمان لازم نگهداری می کنیم:</p>
    <ul>
      <li>سوابق دانشجویان فعال: تا زمان فارغ التحصیلی</li>
      <li>حساب‌های غیرفعال: تا 5 سال</li>
      <li>داده‌های دوره: برای اهداف ردیابی آکادمیک</li>
    </ul>
    
    <h5>5. حقوق شما</h5>
    <p>شما حق دارید:</p>
    <ul>
      <li>به داده‌های شخصی خود دسترسی داشته باشید</li>
      <li>اطلاعات نادرست را اصلاح کنید</li>
      <li>درخواست حذف داده</li>
      <li>از ارتباطات غیرضروری انصراف دهید</li>
    </ul>
  `,
  ta: `
    <h4>தனியுரிமைக் கொள்கை</h4>
    <p><strong>கடைசியாக புதுப்பிக்கப்பட்டது:</strong>7 டிசம்பர் 2025</p>
    
    <h5>1. நாங்கள் சேகரிக்கும் தகவல்கள்</h5>
    <p>மாணவர்களிடமிருந்து பின்வரும் தகவல்களை நாங்கள் சேகரிக்கிறோம்:</p>
    <ul>
      <li>தனிப்பட்ட அடையாள தகவல்கள் (பெயர், மின்னஞ்சல் முகவரி)</li>
      <li>கல்வி தகவல்கள் (மாணவர் ஐடி, பாடப்பாதை, ஆண்டு, பருவம்)</li>
      <li>பாடம் தேர்வு தரவு</li>
      <li>தொழில்நுட்ப தகவல்கள் (IP முகவரி, உலாவி வகை)</li>
    </ul>
    
    <h5>2. உங்கள் தகவலை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்</h5>
    <p>உங்கள் தகவல் பயன்படுத்தப்படுகிறது:</p>
    <ul>
      <li>உங்கள் பதிவு மற்றும் பாடம் சேர்தலைச் செயலாக்க</li>
      <li>உங்கள் கல்வி முன்னேற்றத்தை நிர்வகிக்க</li>
      <li>முக்கியமான கல்வி புதுப்பிப்புகளைத் தொடர்பு கொள்ள</li>
      <li>எங்கள் சேவைகளை மேம்படுத்த</li>
    </ul>
    
    <h5>3. தரவு பாதுகாப்பு</h5>
    <p>உங்கள் தனிப்பட்ட தகவல்களைப் பாதுகாக்க பொருத்தமான பாதுகாப்பு நடவடிக்கைகளை செயல்படுத்துகிறோம்:</p>
    <ul>
      <li>மறைகுறியாக்கப்பட்ட தரவு பரிமாற்றம்</li>
      <li>பாதுகாப்பான தரவுத்தள சேமிப்பு</li>
      <li>வழக்கமான பாதுகாப்பு தணிக்கைகள்</li>
      <li>அணுகல் கட்டுப்பாட்டு நடவடிக்கைகள்</li>
    </ul>
    
    <h5>4. தரவு தக்கவைப்பு</h5>
    <p>உங்கள் தனிப்பட்ட தரவைத் தேவையான காலத்திற்கு மட்டுமே வைத்திருக்கிறோம்:</p>
    <ul>
      <li>செயலில் உள்ள மாணவர் பதிவுகள்: பட்டப்படை வரை</li>
      <li>செயலில் இல்லாத கணக்குகள்: 5 வருடங்கள் வரை</li>
      <li>பாடத் தரவுகள்: கல்வி கண்காணிப்பு நோக்கங்களுக்காக</li>
    </ul>
    
    <h5>5. உங்கள் உரிமைகள்</h5>
    <p>உங்களுக்கு உரிமை உள்ளது:</p>
    <ul>
      <li>உங்கள் தனிப்பட்ட தரவுகளை அணுக</li>
      <li>தவறான தகவல்களைத் திருத்த</li>
      <li>தரவு நீக்கத்தைக் கோர</li>
      <li>அத்தியாவசியமற்ற தகவல்தொடர்புகளிலிருந்து விலக</li>
    </ul>
  `,
  te: `
    <h4>గోప్యతా విధానం</h4>
    <p><strong>చివరిగా నవీకరించబడింది:</strong>7 డిసెంబర్ 2025</p>
    
    <h5>1. మేము సేకరించే సమాచారం</h5>
    <p>విద్యార్థుల నుండి మేము కింది సమాచారాన్ని సేకరిస్తాము:</p>
    <ul>
      <li>వ్యక్తిగత గుర్తింపు సమాచారం (పేరు, ఇమెయిల్ చిరునామా)</li>
      <li>విద్యాసంబంధిత సమాచారం (విద్యార్థి ఐడి, ట్రాక్, సంవత్సరం, టర్మ్)</li>
      <li>కోర్సు ఎంపిక డేటా</li>
      <li>సాంకేతిక సమాచారం (IP చిరునామా, బ్రౌజర్ రకం)</li>
    </ul>
    
    <h5>2. మేము మీ సమాచారాన్ని ఎలా ఉపయోగిస్తాము</h5>
    <p>మీ సమాచారం ఉపయోగించబడుతుంది:</p>
    <ul>
      <li>మీ నమోదు మరియు కోర్సు నమోదును ప్రాసెస్ చేయడానికి</li>
      <li>మీ విద్యా ప్రగతిని నిర్వహించడానికి</li>
      <li>ముఖ్యమైన విద్యా నవీకరణలను కమ్యూనికేట్ చేయడానికి</li>
      <li>మా సేవలను మెరుగుపరచడానికి</li>
    </ul>
    
    <h5>3. డేటా భద్రత</h5>
    <p>మీ వ్యక్తిగత సమాచారాన్ని రక్షించడానికి మేము తగిన భద్రతా చర్యలను అమలు చేస్తాము:</p>
    <ul>
      <li>ఎన్క్రిప్టెడ్ డేటా ట్రాన్స్మిషన్</li>
      <li>సురక్షిత డేటాబేస్ నిల్వ</li>
      <li>రెగ్యులర్ భద్రతా ఆడిట్లు</li>
      <li>యాక్సెస్ కంట్రోల్ చర్యలు</li>
    </ul>
    
    <h5>4. డేటా నిలుపుదల</h5>
    <p>మేము మీ వ్యక్తిగత డేటాను అవసరమైన వరకు మాత్రమే నిలుపుకుంటాము:</p>
    <ul>
      <li>యాక్టివ్ విద్యార్థి రికార్డులు: గ్రాడ్యుయేషన్ వరకు</li>
      <li>యాక్టివ్ కాని ఖాతాలు: 5 సంవత్సరాలు వరకు</li>
      <li>కోర్సు డేటా: విద్యా ట్రాకింగ్ ప్రయోజనాల కోసం</li>
    </ul>
    
    <h5>5. మీ హక్కులు</h5>
    <p>మీకు హక్కు ఉంది:</p>
    <ul>
      <li>మీ వ్యక్తిగత డేటాను యాక్సెస్ చేయడానికి</li>
      <li>తప్పుగా ఉన్న సమాచారాన్ని సరిదిద్దడానికి</li>
      <li>డేటా తొలగింపును కోరడానికి</li>
      <li>అవసరం లేని కమ్యూనికేషన్ల నుండి నిష్క్రమించడానికి</li>
    </ul>
  `,
  bn: `
    <h4>গোপনীয়তা নীতি</h4>
    <p><strong>সর্বশেষ আপডেট:</strong>৭ ডিসেম্বর, ২০২৫</p>
    
    <h5>১. আমরা কী তথ্য সংগ্রহ করি</h5>
    <p>আমরা শিক্ষার্থীদের কাছ থেকে নিম্নলিখিত তথ্য সংগ্রহ করি:</p>
    <ul>
      <li>ব্যক্তিগত পরিচয় তথ্য (নাম, ইমেল ঠিকানা)</li>
      <li>শিক্ষাগত তথ্য (ছাত্র আইডি, ট্র্যাক, বছর, টার্ম)</li>
      <li>কোর্স নির্বাচন ডেটা</li>
      <li>প্রযুক্তিগত তথ্য (আইপি ঠিকানা, ব্রাউজারের ধরন)</li>
    </ul>
    
    <h5>২. আমরা কীভাবে আপনার তথ্য ব্যবহার করি</h5>
    <p>আপনার তথ্য ব্যবহার করা হয়:</p>
    <ul>
      <li>আপনার নিবন্ধন এবং কোর্স নথিভুক্তিকরণ প্রক্রিয়া করতে</li>
      <li>আপনার শিক্ষাগত অগ্রগতি পরিচালনা করতে</li>
      <li>গুরুত্বপূর্ণ শিক্ষাগত আপডেট যোগাযোগ করতে</li>
      <li>আমাদের সেবা উন্নত করতে</li>
    </ul>
    
    <h5>৩. ডেটা সুরক্ষা</h5>
    <p>আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি:</p>
    <ul>
      <li>এনক্রিপ্টেড ডেটা ট্রান্সমিশন</li>
      <li>নিরাপদ ডাটাবেস স্টোরেজ</li>
      <li>নিয়মিত নিরাপত্তা অডিট</li>
      <li>অ্যাক্সেস নিয়ন্ত্রণ ব্যবস্থা</li>
    </ul>
    
    <h5>৪. ডেটা সংরক্ষণ</h5>
    <p>আমরা আপনার ব্যক্তিগত ডেটা কেবল প্রয়োজনীয় সময়ের জন্য সংরক্ষণ করি:</p>
    <ul>
      <li>সক্রিয় ছাত্র রেকর্ড: স্নাতক পর্যন্ত</li>
      <li>নিষ্ক্রিয় অ্যাকাউন্ট: ৫ বছর পর্যন্ত</li>
      <li>কোর্স ডেটা: শিক্ষাগত ট্র্যাকিং উদ্দেশ্যে</li>
    </ul>
    
    <h5>৫. আপনার অধিকার</h5>
    <p>আপনার অধিকার আছে:</p>
    <ul>
      <li>আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করতে</li>
      <li>ভুল তথ্য সংশোধন করতে</li>
      <li>ডেটা মুছে ফেলার অনুরোধ করতে</li>
      <li>অপ্রয়োজনীয় যোগাযোগ থেকে বেরিয়ে আসতে</li>
    </ul>
  `,
  lo: `
    <h4>ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</h4>
    <p><strong>ອັບເດດລ່າສຸດ:</strong>7 ທັນວາ 2025</p>
    
    <h5>1. ຂໍ້ມູນທີ່ພວກເຮົາເກັບກຳ</h5>
    <p>ພວກເຮົາເກັບກຳຂໍ້ມູນຕໍ່ໄປນີ້ຈາກນັກສຶກສາ:</p>
    <ul>
      <li>ຂໍ້ມູນການລະບຸຕົວຕົນ (ຊື່, ທີ່ຢູ່ອີເມວ)</li>
      <li>ຂໍ້ມູນທາງວິຊາການ (ລະຫັດນັກສຶກສາ, ເສັ້ນທາງ, ປີ, ພາກຮຽນ)</li>
      <li>ຂໍ້ມູນການເລືອກວິຊາ</li>
      <li>ຂໍ້ມູນດ້ານວິຊາການ (ທີ່ຢູ່ IP, ປະເພດໂປຣແກຣມທ່ອງເວັບ)</li>
    </ul>
    
    <h5>2. ວິທີທີ່ພວກເຮົາໃຊ້ຂໍ້ມູນຂອງທ່ານ</h5>
    <p>ຂໍ້ມູນຂອງທ່ານຖືກນຳໃຊ້ເພື່ອ:</p>
    <ul>
      <li>ດຳເນີນການລົງທະບຽນ ແລະ ການລົງທະບຽນວິຊາຂອງທ່ານ</li>
      <li>ຈັດການຄວາມຄືບໜ້າທາງວິຊາການຂອງທ່ານ</li>
      <li>ສື່ສານການອັບເດດທາງວິຊາການທີ່ສຳຄັນ</li>
      <li>ປັບປຸງບໍລິການຂອງພວກເຮົາ</li>
    </ul>
    
    <h5>3. ຄວາມປອດໄພຂອງຂໍ້ມູນ</h5>
    <p>ພວກເຮົາຈັດຕັ້ງມາດຕະການຄວາມປອດໄພທີ່ເໝາະສົມເພື່ອປົກປ້ອງຂໍ້ມູນສ່ວນຕົວຂອງທ່ານ:</p>
    <ul>
      <li>ການສົ່ງຂໍ້ມູນທີ່ເຂົ້າລະຫັດ</li>
      <li>ການເກັບຮັກສາຖານຂໍ້ມູນທີ່ປອດໄພ</li>
      <li>ການກວດສອບຄວາມປອດໄພເປັນປະຈຳ</li>
      <li>ມາດຕະການຄວບຄຸມການເຂົ້າເຖິງ</li>
    </ul>
    
    <h5>4. ການຮັກສາຂໍ້ມູນ</h5>
    <p>ພວກເຮົາຮັກສາຂໍ້ມູນສ່ວນຕົວຂອງທ່ານໄວ້ພຽງແຕ່ໃນຊ່ວງເວລາທີ່ຈຳເປັນ:</p>
    <ul>
      <li>ບັນທຶກນັກສຶກສາທີ່ກຳລັງເຄື່ອນໄຫວ: ຈົນກ່ວາຈົບການສຶກສາ</li>
      <li>ບັນຊີທີ່ບໍ່ເຄື່ອນໄຫວ: ສູງສຸດ 5 ປີ</li>
      <li>ຂໍ້ມູນວິຊາ: ເພື່ອຈຸດປະສົງການຕິດຕາມທາງວິຊາການ</li>
    </ul>
    
    <h5>5. ສິດຂອງທ່ານ</h5>
    <p>ທ່ານມີສິດ:</p>
    <ul>
      <li>ເຂົ້າເຖິງຂໍ້ມູນສ່ວນຕົວຂອງທ່ານ</li>
      <li>ແກ້ໄຂຂໍ້ມູນທີ່ບໍ່ຖືກຕ້ອງ</li>
      <li>ຮ້ອງຂໍການລຶບຂໍ້ມູນ</li>
      <li>ຖອນຕົວຈາກການສື່ສານທີ່ບໍ່ຈຳເປັນ</li>
    </ul>
  `,
  km: `
    <h4>គោលការណ៍​ភាព​ឯកជន</h4>
    <p><strong>ការអាប់ដេតចុងក្រោយ:</strong>៧ ខែធ្នូ ២០២៥</p>
    
    <h5>1. ព័ត៌មានដែលយើងប្រមូល</h5>
    <p>យើងប្រមូលព័ត៌មានខាងក្រោមពីនិស្សិត:</p>
    <ul>
      <li>ព័ត៌មានកំណត់អត្តសញ្ញាណផ្ទាល់ខ្លួន (ឈ្មោះ អាសយដ្ឋានអ៊ីមែល)</li>
      <li>ព័ត៌មានសិក្សា (លេខសម្គាល់និស្សិត ផ្លូវ ឆ្នាំ និងសម័យសិក្សា)</li>
      <li>ទិន្នន័យជ្រើសរើសវគ្គសិក្សា</li>
      <li>ព័ត៌មានបច្ចេកទេស (អាសយដ្ឋាន IP ប្រភេទកម្មវិធីរុករក)</li>
    </ul>
    
    <h5>2. របៀបដែលយើងប្រើប្រាស់ព័ត៌មានរបស់អ្នក</h5>
    <p>ព័ត៌មានរបស់អ្នកត្រូវបានប្រើប្រាស់ដើម្បី:</p>
    <ul>
      <li>ដំណើរការការចុះឈ្មោះ និងការចុះឈ្មោះវគ្គសិក្សារបស់អ្នក</li>
      <li>គ្រប់គ្រងការរីកចម្រើនអប់រំរបស់អ្នក</li>
      <li>ទំនាក់ទំនងអំពីព័ត៌មានអប់រំសំខាន់ៗ</li>
      <li>កែលម្អសេវាកម្មរបស់យើង</li>
    </ul>
    
    <h5>3. សុវត្ថិភាពទិន្នន័យ</h5>
    <p>យើងអនុវត្តវិធានការសុវត្ថិភាពសមរម្យដើម្បីការពារព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក៖</p>
    <ul>
      <li>ការបញ្ជូនទិន្នន័យដែលបានអ៊ិនគ្រីប</li>
      <li>ការផ្ទុកទិន្នន័យមូលដ្ឋានទិន្នន័យដែលមានសុវត្ថិភាព</li>
      <li>ការត្រួតពិនិត្យសុវត្ថិភាពជាទៀងទាត់</li>
      <li>វិធានការត្រួតពិនិត្យការចូល</li>
    </ul>
    
    <h5>4. ការរក្សាទុកទិន្នន័យ</h5>
    <p>យើងរក្សាទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នកតែក្នុងរយៈពេលដែលចាំបាច់ប៉ុណ្ណោះ៖</p>
    <ul>
      <li>កំណត់ត្រានិស្សិតសកម្ម៖ រហូតដល់បញ្ចប់ការសិក្សា</li>
      <li>គណនីមិនសកម្ម៖ រហូតដល់ 5 ឆ្នាំ</li>
      <li>ទិន្នន័យវគ្គសិក្សា៖ សម្រាប់គោលបំណងតាមដានអប់រំ</li>
    </ul>
    
    <h5>5. សិទ្ធិរបស់អ្នក</h5>
    <p>អ្នកមានសិទ្ធិក្នុងការ៖</p>
    <ul>
      <li>ចូលដំណើរការទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នក</li>
      <li>កែតម្រូវព័ត៌មានមិនត្រឹមត្រូវ</li>
      <li>ស្នើសុំការលុបទិន្នន័យ</li>
      <li>បដិសេធការទំនាក់ទំនងដែលមិនចាំបាច់</li>
    </ul>
  `,
  my: `
    <h4>ကိုယ်ရေးကိုယ်တာ မူဝါဒ</h4>
    <p><strong>နောက်ဆုံးအပ်ဒိတ်:</strong>၇ ဒီဇင်ဘာ ၂၀၂၅</p>
    
    <h5>၁. ကျွန်ုပ်တို့ စုဆောင်းသော အချက်အလက်များ</h5>
    <p>ကျွန်ုပ်တို့သည် ကျောင်းသားများထံမှ အောက်ပါအချက်အလက်များကို စုဆောင်းပါသည်:</p>
    <ul>
      <li>ကိုယ်ရေးကိုယ်တာ ဖော်ထုတ်ချက်အချက်အလက်များ (အမည်၊ အီးမေးလ်လိပ်စာ)</li>
      <li>ပညာရေးဆိုင်ရာ အချက်အလက်များ (ကျောင်းသားအိုင်ဒီ၊ လမ်းကြောင်း၊ နှစ်၊ စာသင်ကာလ)</li>
      <li>သင်တန်းရွေးချယ်မှု အချက်အလက်များ</li>
      <li>နည်းပညာဆိုင်ရာ အချက်အလက်များ (IP လိပ်စာ၊ ဘရောက်ဆာ အမျိုးအစား)</li>
    </ul>
    
    <h5>၂. ကျွန်ုပ်တို့ သင့်အချက်အလက်များကို အသုံးပြုပုံ</h5>
    <p>သင့်အချက်အလက်များကို အသုံးပြုသည်:</p>
    <ul>
      <li>သင့်မှတ်ပုံတင်ခြင်း နှင့် သင်တန်းစာရင်းသွင်းခြင်း လုပ်ငန်းစဉ်များ</li>
      <li>သင့်ပညာရေးတိုးတက်မှုကို စီမံခန့်ခွဲရန်</li>
      <li>အရေးကြီးသော ပညာရေးဆိုင်ရာ အပ်ဒိတ်များကို ဆက်သွယ်ရန်</li>
      <li>ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို မြှင့်တင်ရန်</li>
    </ul>
    
    <h5>၃. အချက်အလက်လုံခြုံရေး</h5>
    <p>သင့်ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ ကာကွယ်ရန် သင့်လျော်သော လုံခြုံရေး အစီအမံများ ချမှတ်ထားပါသည်:</p>
    <ul>
      <li>လျှို့ဝှက်ကုဒ်ဖြင့် အချက်အလက်ပို့ဆောင်ခြင်း</li>
      <li>လုံခြုံသော ဒေတာဘေ့စ် သိုလှောင်ခြင်း</li>
      <li>ပုံမှန် လုံခြုံရေး စစ်ဆေးခြင်းများ</li>
      <li>အသုံးပြုခွင့် ထိန်းချုပ်မှု အစီအမံများ</li>
    </ul>
    
    <h5>၄. အချက်အလက် သိမ်းဆည်းခြင်း</h5>
    <p>သင့်ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို လိုအပ်သော ကာလအထိသာ သိမ်းဆည်းပါသည်:</p>
    <ul>
      <li>တက်ကြွသော ကျောင်းသား မှတ်တမ်းများ: ဘွဲ့ရတဲ့အထိ</li>
      <li>မတက်ကြွသော အကောင့်များ: နှစ် ၅ နှစ်အထိ</li>
      <li>သင်တန်းအချက်အလက်များ: ပညာရေး ခြေရာခံရန် ရည်ရွယ်ချက်များအတွက်</li>
    </ul>
    
    <h5>၅. သင့်အခွင့်အရေးများ</h5>
    <p>သင့်တွင် အခွင့်အရေးရှိသည်:</p>
    <ul>
      <li>သင့်ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို ဝင်ရောက်ကြည့်ရှုရန်</li>
      <li>မမှန်ကန်သော အချက်အလက်များကို ပြင်ဆင်ရန်</li>
      <li>အချက်အလက်ဖျက်ရန် တောင်းဆိုရန်</li>
      <li>မလိုအပ်သော ဆက်သွယ်ရေးမှ နှုတ်ထွက်ရန်</li>
    </ul>
  `,
  ne: `
    <h4>गोपनीयता नीति</h4>
    <p><strong>अन्तिम अपडेट:</strong>७ डिसेम्बर २०२५</p>
    
    <h5>१. हामीले कुन जानकारी संकलन गर्छौं</h5>
    <p>हामी विद्यार्थीहरूबाट निम्न जानकारी संकलन गर्छौं:</p>
    <ul>
      <li>व्यक्तिगत पहिचान जानकारी (नाम, इमेल ठेगाना)</li>
      <li>शैक्षिक जानकारी (विद्यार्थी आईडी, ट्र्याक, वर्ष, टर्म)</li>
      <li>पाठ्यक्रम चयन डाटा</li>
      <li>प्राविधिक जानकारी (आईपी ठेगाना, ब्राउजर प्रकार)</li>
    </ul>
    
    <h5>२. हामी तपाईंको जानकारी कसरी प्रयोग गर्छौं</h5>
    <p>तपाईंको जानकारी प्रयोग गरिन्छ:</p>
    <ul>
      <li>तपाईंको दर्ता र पाठ्यक्रम दर्ता प्रक्रिया गर्न</li>
      <li>तपाईंको शैक्षिक प्रगति व्यवस्थापन गर्न</li>
      <li>महत्त्वपूर्ण शैक्षिक अपडेटहरू सञ्चार गर्न</li>
      <li>हाम्रो सेवाहरू सुधार गर्न</li>
    </ul>
    
    <h5>३. डाटा सुरक्षा</h5>
    <p>हामी तपाईंको व्यक्तिगत जानकारी सुरक्षा गर्न उपयुक्त सुरक्षा उपायहरू कार्यान्वयन गर्छौं:</p>
    <ul>
      <li>एन्क्रिप्ट गरिएको डाटा प्रसारण</li>
      <li>सुरक्षित डाटाबेस भण्डारण</li>
      <li>नियमित सुरक्षा लेखापरीक्षण</li>
      <li>पहुँच नियन्त्रण उपायहरू</li>
    </ul>
    
    <h5>४. डाटा रिटेन्सन</h5>
    <p>हामी तपाईंको व्यक्तिगत डाटा आवश्यक अवधिसम्म मात्र राख्छौं:</p>
    <ul>
      <li>सक्रिय विद्यार्थी रेकर्डहरू: स्नातक नभएसम्म</li>
      <li>निष्क्रिय खाताहरू: ५ वर्षसम्म</li>
      <li>पाठ्यक्रम डाटा: शैक्षिक ट्र्याकिङ उद्देश्यका लागि</li>
    </ul>
    
    <h5>५. तपाईंको अधिकारहरू</h5>
    <p>तपाईंसँग अधिकार छ:</p>
    <ul>
      <li>तपाईंको व्यक्तिगत डाटा पहुँच गर्न</li>
      <li>गलत जानकारी सच्याउन</li>
      <li>डाटा मेटाउन अनुरोध गर्न</li>
      <li>अनावश्यक सञ्चारबाट बाहिर निस्कन</li>
    </ul>
  `,
  pa: `
    <h4>ਪਰਾਈਵੇਸੀ ਪਾਲਿਸੀ</h4>
    <p><strong>ਆਖਰੀ ਅੱਪਡੇਟ:</strong>7 ਦਿਸੰਬਰ 2025</p>
    
    <h5>1. ਜਾਣਕਾਰੀ ਜੋ ਅਸੀਂ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ</h5>
    <p>ਅਸੀਂ ਵਿਦਿਆਰਥੀਆਂ ਤੋਂ ਹੇਠ ਲਿਖੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ:</p>
    <ul>
      <li>ਨਿੱਜੀ ਪਛਾਣ ਜਾਣਕਾਰੀ (ਨਾਮ, ਈਮੇਲ ਪਤਾ)</li>
      <li>ਸਿੱਖਿਆ ਸੰਬੰਧੀ ਜਾਣਕਾਰੀ (ਵਿਦਿਆਰਥੀ ਆਈਡੀ, ਟਰੈਕ, ਸਾਲ, ਟਰਮ)</li>
      <li>ਕੋਰਸ ਚੋਣ ਡੇਟਾ</li>
      <li>ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ (ਆਈਪੀ ਪਤਾ, ਬ੍ਰਾਊਜ਼ਰ ਕਿਸਮ)</li>
    </ul>
    
    <h5>2. ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਦੇ ਹਾਂ</h5>
    <p>ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ:</p>
    <ul>
      <li>ਤੁਹਾਡੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਕੋਰਸ ਦਾਖਲੇ ਦੀ ਪ੍ਰਕਿਰਿਆ ਲਈ</li>
      <li>ਤੁਹਾਡੀ ਸਿੱਖਿਆ ਸੰਬੰਧੀ ਤਰੱਕੀ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਲਈ</li>
      <li>ਮਹੱਤਵਪੂਰਨ ਸਿੱਖਿਆ ਸੰਬੰਧੀ ਅੱਪਡੇਟਸ ਦੀ ਸੰਚਾਰ ਕਰਨ ਲਈ</li>
      <li>ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਵਿੱਚ ਸੁਧਾਰ ਲਈ</li>
    </ul>
    
    <h5>3. ਡੇਟਾ ਸੁਰੱਖਿਆ</h5>
    <p>ਅਸੀਂ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਉਚਿਤ ਸੁਰੱਖਿਆ ਉਪਾਅ ਲਾਗੂ ਕਰਦੇ ਹਾਂ:</p>
    <ul>
      <li>ਐਨਕ੍ਰਿਪਟਡ ਡੇਟਾ ਟ੍ਰਾਂਸਮਿਸ਼ਨ</li>
      <li>ਸੁਰੱਖਿਅਤ ਡੇਟਾਬੇਸ ਸਟੋਰੇਜ</li>
      <li>ਨਿਯਮਤ ਸੁਰੱਖਿਆ ਆਡਿਟ</li>
      <li>ਪਹੁੰਚ ਨਿਯੰਤਰਣ ਉਪਾਅ</li>
    </ul>
    
    <h5>4. ਡੇਟਾ ਰਿਟੈਂਸ਼ਨ</h5>
    <p>ਅਸੀਂ ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਸਿਰਫ਼ ਜ਼ਰੂਰੀ ਸਮੇਂ ਲਈ ਰੱਖਦੇ ਹਾਂ:</p>
    <ul>
      <li>ਸਰਗਰਮ ਵਿਦਿਆਰਥੀ ਰਿਕਾਰਡ: ਗ੍ਰੈਜੂਏਸ਼ਨ ਤੱਕ</li>
      <li>ਨਿਸ਼ਕਰੀਅ ਖਾਤੇ: 5 ਸਾਲ ਤੱਕ</li>
      <li>ਕੋਰਸ ਡੇਟਾ: ਸਿੱਖਿਆ ਟ੍ਰੈਕਿੰਗ ਉਦੇਸ਼ਾਂ ਲਈ</li>
    </ul>
    
    <h5>5. ਤੁਹਾਡੇ ਅਧਿਕਾਰ</h5>
    <p>ਤੁਹਾਡੇ ਕੋਲ ਅਧਿਕਾਰ ਹੈ:</p>
    <ul>
      <li>ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਦਾ</li>
      <li>ਗਲਤ ਜਾਣਕਾਰੀ ਨੂੰ ਸਹੀ ਕਰਨ ਦਾ</li>
      <li>ਡੇਟਾ ਮਿਟਾਉਣ ਦੀ ਬੇਨਤੀ ਕਰਨ ਦਾ</li>
      <li>ਗੈਰ-ਜ਼ਰੂਰੀ ਸੰਚਾਰ ਤੋਂ ਬਾਹਰ ਹੋਣ ਦਾ</li>
    </ul>
  `,
  si: `
    <h4>රහස්‍යතා ප්‍රතිපත්තිය</h4>
    <p><strong>අවසන් යාවත්කාලීන කිරීම:</strong>7 දෙසැම්බර් 2025</p>
    
    <h5>1. අප රැස් කරන තොරතුරු</h5>
    <p>අපි ශිෂ්‍යයන්ගෙන් පහත තොරතුරු රැස් කරමු:</p>
    <ul>
      <li>පෞද්ගලික හඳුනාගැනීමේ තොරතුරු (නම, ඊමේල් ලිපිනය)</li>
      <li>ශාස්ත්‍රීය තොරතුරු (ශිෂ්‍ය අංකය, මාර්ගය, වර්ෂය, වාරය)</li>
      <li>පාඨමාලා තෝරාගැනීමේ දත්ත</li>
      <li>තාක්ෂණික තොරතුරු (IP ලිපිනය, බ්‍රවුසර් වර්ගය)</li>
    </ul>
    
    <h5>2. අපි ඔබේ තොරතුරු භාවිතා කරන ආකාරය</h5>
    <p>ඔබේ තොරතුරු භාවිතා කරනු ලැබේ:</p>
    <ul>
      <li>ඔබේ ලියාපදිංචි කිරීම සහ පාඨමාලා ලියාපදිංචිය සකස් කිරීමට</li>
      <li>ඔබේ අධ්‍යාපනික ප්‍රගතිය කළමනාකරණය කිරීමට</li>
      <li>වැදගත් අධ්‍යාපනික යාවත්කාලීන කිරීම් සන්නිවේදනය කිරීමට</li>
      <li>අපගේ සේවාවන් වැඩිදියුණු කිරීමට</li>
    </ul>
    
    <h5>3. දත්ත ආරක්ෂණය</h5>
    <p>ඔබේ පෞද්ගලික තොරතුරු ආරක්ෂා කිරීම සඳහා අපි සුදුසු ආරක්ෂක පියවරයන් ක්‍රියාත්මක කරමු:</p>
    <ul>
      <li>ගුප්තකේතනය කරන ලද දත්ත සම්ප්‍රේෂණය</li>
      <li>ආරක්ෂිත දත්ත සමුදාය ගබඩා කිරීම</li>
      <li>නිතිපතා ආරක්ෂක අධීක්ෂණ</li>
      <li>ප්‍රවේශ පාලන පියවර</li>
    </ul>
    
    <h5>4. දත්ත රඳවා තබා ගැනීම</h5>
    <p>අපි ඔබේ පෞද්ගලික දත්ත අවශ්‍ය කාලය පමණක් රඳවා තබා ගනිමු:</p>
    <ul>
      <li>සක්‍රීය ශිෂ්‍ය වාර්තා: උපාධිය ලබන තෙක්</li>
      <li>අක්‍රීය ගිණුම්: අවුරුදු 5 දක්වා</li>
      <li>පාඨමාලා දත්ත: අධ්‍යාපනික ගමන් පථගත කිරීමේ අරමුණු සඳහා</li>
    </ul>
    
    <h5>5. ඔබගේ අයිතිවාසිකම්</h5>
    <p>ඔබට අයිතියක් ඇත:</p>
    <ul>
      <li>ඔබේ පෞද්ගලික දත්ත වෙත ප්‍රවේශ වීමට</li>
      <li>වැරදි තොරතුරු නිවැරදි කිරීමට</li>
      <li>දත්ත මකා දැමීමට ඉල්ලීම කිරීමට</li>
      <li>අත්‍යවශ්‍ය නොවන සන්නිවේදනවලින් ඉවත් වීමට</li>
    </ul>
  `
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
  
  // Terms and conditions link
  const termsLink = document.getElementById('termsLink');
  if (termsLink) {
    termsLink.addEventListener('click', function(e) {
      e.preventDefault();
      showModal('terms');
    });
  }
  
  // Privacy policy link
  const privacyLink = document.getElementById('privacyLink');
  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.preventDefault();
      showModal('privacy');
    });
  }
  
// Close modal button - for Bootstrap close button
const closeModal = document.querySelector('.modal-content .btn-close');
if (closeModal) {
  closeModal.addEventListener('click', hideModal);
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

function showModal(type) {
  const modal = document.getElementById('legalModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalTitle || !modalContent) return;
  
  // Set modal title based on type
  if (type === 'terms') {
    modalTitle.textContent = translations[currentLang].terms_conditions;
    modalContent.innerHTML = termsAndConditionsContent[currentLang] || termsAndConditionsContent['en'];
  } else if (type === 'privacy') {
    modalTitle.textContent = translations[currentLang].privacy_policy;
    modalContent.innerHTML = privacyPolicyContent[currentLang] || privacyPolicyContent['en'];
  }
  
  // Show modal
  modal.style.display = 'block';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  const modal = document.getElementById('legalModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  const modal = document.getElementById('legalModal');
  if (modal && e.target === modal) {
    hideModal();
  }
});

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