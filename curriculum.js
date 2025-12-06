// curriculum.js - Updated with 23-language support and proper language initialization
console.log('🚀 Curriculum script loaded');

// Language translations for curriculum page - ALL 23 LANGUAGES
const curriculumTranslations = {
  en: {
    "curriculum_title": "My Curriculum - STIU Student Portal",
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
    "credits_unit": "credits",
    "prerequisite": "Prerequisite",
    "please_wait": "Please wait a moment",
    "saving": "Saving...",
    "try_again": "Try Again",
    "error_title": "Error!",
    
    // Description translations
    "general_education_desc": "<strong>General Education Courses (40 Credits)</strong> - General Education courses serve as a foundation for your major and helps you develop a well-rounded body of knowledge and skills. You must choose 10 subjects in the following categories. We've recommended a year to help you decide when to take any given subject.",
    "professional_courses_desc": "<strong>Professional Courses (100 Credits)</strong> - Professional courses serve as the main body of knowledge and skills of your degree and make up 25 subjects (100 credits) in total. Your basic core courses will help you develop essential business abilities alongside other IT students, and your Major Requirements will generally involve more advanced topics relating to fundamental knowledge of IT. Your 5 Major Elective courses will then allow you to focus your studies in a specific branch of business and give you the option to select a minor.",
    "major_electives_desc": "<strong>Major Electives – Please choose 5 subjects (20 credits) from the following list</strong> - Students who successfully complete 20 credits from within the same track will be awarded a certificate of Specialized Study in that track. If students do not choose to follow these tracks, they will not be awarded a certificate.",
    "free_electives_desc": "<strong>Free Electives (8 Credits)</strong> - Free electives allow you to study in an area of personal interest. You must complete 2 subjects in this category and you may choose any subject you are eligible for offered at the university.",
    "internship_desc": "<strong>Internship (12 Credits)</strong> - Your Internship allows you to put into practice the knowledge and skills you acquired during your coursework and reflect on how well you can apply these skills. Your Internship is to be taken in your last term, after completing all your coursework and will provide you with your final 12 credits to graduate."
  },
  th: {
    "curriculum_title": "หลักสูตรของฉัน - STIU Student Portal",
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
    "credits_unit": "หน่วยกิต",
    "prerequisite": "วิชาบังคับก่อน",
    "please_wait": "กรุณารอสักครู่",
    "saving": "กำลังบันทึก...",
    
    // Description translations
    "general_education_desc": "<strong>การศึกษาทั่วไป (40 หน่วยกิต)</strong> - วิชาการศึกษาทั่วไปทำหน้าที่เป็นพื้นฐานสำหรับสาขาวิชาหลักของคุณและช่วยให้คุณพัฒนาความรู้และทักษะที่รอบด้าน คุณต้องเลือกเรียน 10 วิชาในหมวดหมู่ต่อไปนี้ เราได้แนะนำปีการศึกษาที่เหมาะสมเพื่อช่วยคุณตัดสินใจว่าเมื่อใดควรเรียนวิชาใดวิชาหนึ่ง",
    "professional_courses_desc": "<strong>วิชาชีพ (100 หน่วยกิต)</strong> - วิชาชีพทำหน้าที่เป็นแกนหลักของความรู้และทักษะสำหรับปริญญาของคุณและประกอบด้วยทั้งหมด 25 วิชา (100 หน่วยกิต) วิชาพื้นฐานหลักของคุณจะช่วยให้คุณพัฒนาความสามารถทางธุรกิจที่สำคัญร่วมกับนักศึกษา IT คนอื่นๆ และวิชาบังคับสาขาของคุณโดยทั่วไปจะเกี่ยวข้องกับหัวข้อขั้นสูงที่เกี่ยวข้องกับความรู้พื้นฐานด้าน IT วิชาเลือกสาขาจำนวน 5 วิชาของคุณจะช่วยให้คุณมุ่งเน้นการศึกษาของคุณในสาขาธุรกิจเฉพาะด้านและให้คุณมีตัวเลือกในการเลือกวิชาโท",
    "major_electives_desc": "<strong>วิชาเลือกสาขา – โปรดเลือก 5 วิชา (20 หน่วยกิต) จากรายการต่อไปนี้</strong> - นักศึกษาที่สำเร็จ 20 หน่วยกิตจากภายในสาขาเฉพาะเดียวกันจะได้รับใบรับรองการเรียนเฉพาะทางในสาขานั้น หากนักศึกษาไม่เลือกที่จะติดตามสาขาเฉพาะเหล่านี้ จะไม่ได้รับใบรับรอง",
    "free_electives_desc": "<strong>วิชาเลือกเสรี (8 หน่วยกิต)</strong> - วิชาเลือกเสรีช่วยให้คุณสามารถศึกษาในสาขาที่สนใจส่วนบุคคลได้ คุณต้องเรียนให้สำเร็จ 2 วิชาในหมวดหมู่นี้และคุณสามารถเลือกวิชาใดก็ได้ที่คุณมีสิทธิ์เรียนที่เปิดสอนในมหาวิทยาลัย",
    "internship_desc": "<strong>การฝึกงาน (12 หน่วยกิต)</strong> - การฝึกงานช่วยให้คุณได้นำความรู้และทักษะที่ได้รับระหว่างการเรียนมาประยุกต์ใช้และสะท้อนว่าคุณสามารถใช้ทักษะเหล่านี้ได้ดีเพียงใด การฝึกงานของคุณจะต้องดำเนินการในภาคการศึกษาสุดท้ายหลังจากเรียนวิชาต่างๆ ครบทั้งหมดแล้วและจะให้หน่วยกิตสุดท้าย 12 หน่วยกิตเพื่อสำเร็จการศึกษา"
  },
  zh: {
    "curriculum_title": "我的课程 - STIU学生门户",
    "profile_settings": "个人资料设置",
    "dashboard": "仪表板",
    "logout": "退出登录",
    "progress_summary": "课程进度摘要",
    "total_credits": "总学分",
    "completed_credits": "已完成学分",
    "remaining_credits": "剩余学分",
    "completion_rate": "完成率",
    "general_education": "通识教育",
    "humanities": "人文学科",
    "social_sciences": "社会科学",
    "languages": "语言",
    "science_math": "科学与数学",
    "professional_courses": "专业课程",
    "core_courses": "核心课程",
    "major_requirements": "专业必修课",
    "major_electives": "专业选修课",
    "specialization_tracks": "专业方向",
    "software_track": "软件工程",
    "ecommerce_track": "电子商务技术",
    "data_science_track": "数据科学",
    "network_track": "网络与安全",
    "other_requirements": "其他要求",
    "free_electives": "自由选修课",
    "internship": "实习",
    "save_progress": "保存进度",
    "save_success": "进度保存成功！",
    "loading_curriculum": "正在加载课程...",
    "course_completed": "已完成",
    "course_in_progress": "进行中",
    "course_not_started": "未开始",
    "credits": "学分",
    "year": "年",
    "credits_unit": "学分",
    "prerequisite": "先修课程",
    "please_wait": "请稍候",
    "saving": "保存中...",
    
    // Description translations
    "general_education_desc": "<strong>通识教育课程 (40 学分)</strong> - 通识教育课程是专业课程的基础，帮助您发展全面的知识和技能。您必须从以下类别中选择10门课程。我们推荐了学年，帮助您决定何时学习特定课程。",
    "professional_courses_desc": "<strong>专业课程 (100 学分)</strong> - 专业课程是您学位的核心知识和技能部分，共包含25门课程（100学分）。您的基础核心课程将帮助您与其他IT学生一起发展基本的商业能力，而专业必修课程通常涉及与IT基础知识相关的更高级主题。您的5门专业选修课程将使您能够专注于特定的商业领域学习，并为您提供选择辅修的机会。",
    "major_electives_desc": "<strong>专业选修课 – 请从以下列表中选择5门课程 (20 学分)</strong> - 在同一专业方向成功完成20学分的学生将获得该方向的专门学习证书。如果学生不选择遵循这些方向，将不会获得证书。",
    "free_electives_desc": "<strong>自由选修课 (8 学分)</strong> - 自由选修课让您能够学习个人感兴趣的领域。您必须完成此类别中的2门课程，并且可以选择大学开设的任何符合条件的课程。",
    "internship_desc": "<strong>实习 (12 学分)</strong> - 实习让您能够将在课程中学到的知识和技能付诸实践，并反思您应用这些技能的能力。您的实习将在最后一个学期进行，完成所有课程学习后，将为您提供毕业所需的最后12个学分。"
  },
  ja: {
    "curriculum_title": "私のカリキュラム - STIU学生ポータル",
    "profile_settings": "プロフィール設定",
    "dashboard": "ダッシュボード",
    "logout": "ログアウト",
    "progress_summary": "カリキュラム進捗概要",
    "total_credits": "総単位数",
    "completed_credits": "修了単位数",
    "remaining_credits": "残り単位数",
    "completion_rate": "修了率",
    "general_education": "一般教育",
    "humanities": "人文科学",
    "social_sciences": "社会科学",
    "languages": "言語",
    "science_math": "科学と数学",
    "professional_courses": "専門課程",
    "core_courses": "基礎科目",
    "major_requirements": "専門必修科目",
    "major_electives": "専門選択科目",
    "specialization_tracks": "専門分野",
    "software_track": "ソフトウェア工学",
    "ecommerce_track": "Eコマース技術",
    "data_science_track": "データサイエンス",
    "network_track": "ネットワークとセキュリティ",
    "other_requirements": "その他の要件",
    "free_electives": "自由選択科目",
    "internship": "インターンシップ",
    "save_progress": "進捗を保存",
    "save_success": "進捗を保存しました！",
    "loading_curriculum": "カリキュラムを読み込んでいます...",
    "course_completed": "完了",
    "course_in_progress": "進行中",
    "course_not_started": "未開始",
    "credits": "単位",
    "year": "年",
    "credits_unit": "単位",
    "prerequisite": "前提条件",
    "please_wait": "しばらくお待ちください",
    "saving": "保存中...",
    
    // Description translations
    "general_education_desc": "<strong>一般教育科目 (40 単位)</strong> - 一般教育科目は専門分野の基礎となり、幅広い知識とスキルを身につけるのに役立ちます。以下のカテゴリーから10科目を選択する必要があります。いつどの科目を受講するかを決めるのに役立つよう、推奨学年を示しています。",
    "professional_courses_desc": "<strong>専門課程 (100 単位)</strong> - 専門課程は学位の中核となる知識とスキルを構成し、合計25科目（100単位）で構成されています。基礎的なコア科目は他のIT学生と共に重要なビジネス能力を開発するのに役立ち、専門必修科目は一般的にITの基礎知識に関連するより高度なトピックを含みます。5つの専門選択科目は、特定のビジネス分野に学習を集中させ、副専攻を選択するオプションを提供します。",
    "major_electives_desc": "<strong>専門選択科目 – 以下のリストから5科目 (20 単位) を選択してください</strong> - 同じトラック内で20単位を修了した学生は、そのトラックの専門学習修了証を授与されます。学生がこれらのトラックを選択しない場合、修了証は授与されません。",
    "free_electives_desc": "<strong>自由選択科目 (8 単位)</strong> - 自由選択科目は、個人の関心分野を学ぶことができます。このカテゴリーで2科目を修了する必要があり、大学で開講されている資格要件を満たす任意の科目を選択できます。",
    "internship_desc": "<strong>インターンシップ (12 単位)</strong> - インターンシップでは、授業で習得した知識とスキルを実践し、これらのスキルをどの程度応用できるかを振り返ることができます。インターンシップは、すべての授業を修了した後の最終学期に履修し、卒業に必要な最後の12単位を提供します。"
  },
  ko: {
    "curriculum_title": "내 커리큘럼 - STIU 학생 포털",
    "profile_settings": "프로필 설정",
    "dashboard": "대시보드",
    "logout": "로그아웃",
    "progress_summary": "커리큘럼 진행 요약",
    "total_credits": "총 학점",
    "completed_credits": "완료된 학점",
    "remaining_credits": "남은 학점",
    "completion_rate": "완료율",
    "general_education": "일반 교육",
    "humanities": "인문학",
    "social_sciences": "사회과학",
    "languages": "언어",
    "science_math": "과학 및 수학",
    "professional_courses": "전문 과정",
    "core_courses": "핵심 과정",
    "major_requirements": "전공 필수",
    "major_electives": "전공 선택",
    "specialization_tracks": "전문 분야",
    "software_track": "소프트웨어 공학",
    "ecommerce_track": "전자상거래 기술",
    "data_science_track": "데이터 과학",
    "network_track": "네트워크 및 보안",
    "other_requirements": "기타 요구사항",
    "free_electives": "자유 선택 과목",
    "internship": "인턴십",
    "save_progress": "진행 상황 저장",
    "save_success": "진행 상황이 저장되었습니다!",
    "loading_curriculum": "커리큘럼 로드 중...",
    "course_completed": "완료됨",
    "course_in_progress": "진행 중",
    "course_not_started": "시작 안 함",
    "credits": "학점",
    "year": "년",
    "credits_unit": "학점",
    "prerequisite": "선수 과목",
    "please_wait": "잠시만 기다려 주세요",
    "saving": "저장 중...",
    
    // Description translations
    "general_education_desc": "<strong>일반 교육 과정 (40 학점)</strong> - 일반 교육 과정은 전공의 기초가 되며 포괄적인 지식과 기술을 개발하는 데 도움이 됩니다. 다음 범주에서 10개의 과목을 선택해야 합니다. 언제 특정 과목을 수강할지 결정하는 데 도움이 되도록 권장 학년을 제시했습니다.",
    "professional_courses_desc": "<strong>전문 과정 (100 학점)</strong> - 전문 과정은 학위의 핵심 지식과 기술을 구성하며 총 25개 과목(100학점)으로 이루어져 있습니다. 기본 핵심 과목은 다른 IT 학생들과 함께 필수 비즈니스 역량을 개발하는 데 도움이 되며, 전공 필수 과목은 일반적으로 IT 기초 지식과 관련된 더 고급 주제를 다룹니다. 5개의 전공 선택 과목을 통해 특정 비즈니스 분야에 학습을 집중하고 부전공을 선택할 수 있는 옵션을 제공합니다.",
    "major_electives_desc": "<strong>전공 선택 과목 – 다음 목록에서 5개 과목 (20 학점)을 선택하세요</strong> - 동일한 트랙 내에서 20학점을 성공적으로 이수한 학생은 해당 트랙의 전문 연구 수료증을 받게 됩니다. 학생이 이러한 트랙을 따르지 않으면 수료증을 받을 수 없습니다.",
    "free_electives_desc": "<strong>자유 선택 과목 (8 학점)</strong> - 자유 선택 과목을 통해 개인적인 관심 분야를 공부할 수 있습니다. 이 범주에서 2개 과목을 이수해야 하며, 대학에서 제공하는 자격 요건을 충족하는 모든 과목을 선택할 수 있습니다.",
    "internship_desc": "<strong>인턴십 (12 학점)</strong> - 인턴십을 통해 수업 중 습득한 지식과 기술을 실천에 옮기고 이러한 기술을 얼마나 잘 적용할 수 있는지 반성할 수 있습니다. 인턴십은 모든 수업을 완료한 후 마지막 학기에 진행되며, 졸업에 필요한 마지막 12학점을 제공합니다."
  },
  ar: {
    "curriculum_title": "منهجي الدراسي - بوابة طلاب STIU",
    "profile_settings": "إعدادات الملف الشخصي",
    "dashboard": "لوحة التحكم",
    "logout": "تسجيل الخروج",
    "progress_summary": "ملخص تقدم المنهج الدراسي",
    "total_credits": "إجمالي الساعات المعتمدة",
    "completed_credits": "الساعات المكتملة",
    "remaining_credits": "الساعات المتبقية",
    "completion_rate": "معدل الإنجاز",
    "general_education": "التعليم العام",
    "humanities": "العلوم الإنسانية",
    "social_sciences": "العلوم الاجتماعية",
    "languages": "اللغات",
    "science_math": "العلوم والرياضيات",
    "professional_courses": "الدورات المهنية",
    "core_courses": "الدورات الأساسية",
    "major_requirements": "متطلبات التخصص",
    "major_electives": "الاختيارية للتخصص",
    "specialization_tracks": "المسارات التخصصية",
    "software_track": "هندسة البرمجيات",
    "ecommerce_track": "تكنولوجيا التجارة الإلكترونية",
    "data_science_track": "علم البيانات",
    "network_track": "الشبكات والأمن",
    "other_requirements": "متطلبات أخرى",
    "free_electives": "الاختيارية الحرة",
    "internship": "التدريب العملي",
    "save_progress": "حفظ التقدم",
    "save_success": "تم حفظ التقدم بنجاح!",
    "loading_curriculum": "جارٍ تحميل المنهج الدراسي...",
    "course_completed": "مكتمل",
    "course_in_progress": "قيد التقدم",
    "course_not_started": "لم يبدأ",
    "credits": "ساعات معتمدة",
    "year": "سنة",
    "credits_unit": "ساعات معتمدة",
    "prerequisite": "المتطلب السابق",
    "please_wait": "الرجاء الانتظار لحظة",
    "saving": "جاري الحفظ...",
    
    // Description translations
    "general_education_desc": "<strong>دورات التعليم العام (40 ساعة معتمدة)</strong> - تعمل دورات التعليم العام كأساس لتخصصك وتساعدك على تطوير مجموعة متكاملة من المعارف والمهارات. يجب عليك اختيار 10 مواد في الفئات التالية. لقد أوصينا بسنة دراسية لمساعدتك في تحديد الوقت المناسب لدراسة أي مادة معينة.",
    "professional_courses_desc": "<strong>الدورات المهنية (100 ساعة معتمدة)</strong> - تشكل الدورات المهنية الجزء الأساسي من المعرفة والمهارات لدرجتك العلمية وتتكون من 25 مادة (100 ساعة معتمدة) إجمالاً. ستساعدك دوراتك الأساسية الأساسية على تطوير القدرات التجارية الأساسية جنباً إلى جنب مع طلاب تكنولوجيا المعلومات الآخرين، وعادةً ما تتضمن متطلبات تخصصك مواضيع أكثر تقدماً تتعلق بالمعرفة الأساسية لتكنولوجيا المعلومات. ستتيح لك دوراتك الاختيارية للتخصص البالغ عددها 5 دورات التركيز على دراساتك في فرع محدد من الأعمال وتوفر لك خيار اختيار تخصص فرعي.",
    "major_electives_desc": "<strong>المواد الاختيارية للتخصص – يرجى اختيار 5 مواد (20 ساعة معتمدة) من القائمة التالية</strong> - سيحصل الطلاب الذين يكملون بنجاح 20 ساعة معتمدة من نفس المسار على شهادة الدراسة المتخصصة في هذا المسار. إذا لم يختر الطلاب اتباع هذه المسارات، فلن يحصلوا على شهادة.",
    "free_electives_desc": "<strong>المواد الاختيارية الحرة (8 ساعات معتمدة)</strong> - تتيح لك المواد الاختيارية الحرة الدراسة في مجال يهمك شخصياً. يجب عليك إكمال مادتين في هذه الفئة ويمكنك اختيار أي مادة مؤهل لها تُقدم في الجامعة.",
    "internship_desc": "<strong>التدريب العملي (12 ساعة معتمدة)</strong> - يتيح لك التدريب العملي تطبيق المعرفة والمهارات التي اكتسبتها خلال دراستك والتأمل في مدى قدرتك على تطبيق هذه المهارات. يتم أخذ التدريب العملي في الفصل الدراسي الأخير، بعد إكمال جميع دراستك، وسيوفر لك 12 ساعة معتمدة أخيرة للتخرج."
  },
  hi: {
    "curriculum_title": "मेरा पाठ्यक्रम - STIU छात्र पोर्टल",
    "profile_settings": "प्रोफाइल सेटिंग",
    "dashboard": "डैशबोर्ड",
    "logout": "लॉगआउट",
    "progress_summary": "पाठ्यक्रम प्रगति सारांश",
    "total_credits": "कुल क्रेडिट",
    "completed_credits": "पूर्ण क्रेडिट",
    "remaining_credits": "शेष क्रेडिट",
    "completion_rate": "पूर्णता दर",
    "general_education": "सामान्य शिक्षा",
    "humanities": "मानविकी",
    "social_sciences": "सामाजिक विज्ञान",
    "languages": "भाषाएं",
    "science_math": "विज्ञान और गणित",
    "professional_courses": "पेशेवर पाठ्यक्रम",
    "core_courses": "मुख्य पाठ्यक्रम",
    "major_requirements": "मुख्य आवश्यकताएं",
    "major_electives": "मुख्य वैकल्पिक",
    "specialization_tracks": "विशेषज्ञता ट्रैक",
    "software_track": "सॉफ्टवेयर इंजीनियरिंग",
    "ecommerce_track": "ई-कॉमर्स प्रौद्योगिकी",
    "data_science_track": "डेटा विज्ञान",
    "network_track": "नेटवर्क और सुरक्षा",
    "other_requirements": "अन्य आवश्यकताएं",
    "free_electives": "मुक्त वैकल्पिक",
    "internship": "इंटर्नशिप",
    "save_progress": "प्रगति सहेजें",
    "save_success": "प्रगति सफलतापूर्वक सहेजी गई!",
    "loading_curriculum": "पाठ्यक्रम लोड हो रहा है...",
    "course_completed": "पूर्ण",
    "course_in_progress": "प्रगति पर",
    "course_not_started": "प्रारंभ नहीं हुआ",
    "credits": "क्रेडिट",
    "year": "वर्ष",
    "credits_unit": "क्रेडिट",
    "prerequisite": "पूर्वापेक्षा",
    "please_wait": "कृपया प्रतीक्षा करें",
    "saving": "सहेजा जा रहा है...",
    
    // Description translations
    "general_education_desc": "<strong>सामान्य शिक्षा पाठ्यक्रम (40 क्रेडिट)</strong> - सामान्य शिक्षा पाठ्यक्रम आपके मुख्य विषय की नींव के रूप में कार्य करते हैं और आपको ज्ञान और कौशल का एक समग्र सेट विकसित करने में मदद करते हैं। आपको निम्नलिखित श्रेणियों में से 10 विषय चुनने होंगे। हमने आपको किसी दिए गए विषय को कब लेना है, यह तय करने में मदद करने के लिए एक वर्ष की सिफारिश की है।",
    "professional_courses_desc": "<strong>व्यावसायिक पाठ्यक्रम (100 क्रेडिट)</strong> - व्यावसायिक पाठ्यक्रम आपकी डिग्री के ज्ञान और कौशल के मुख्य भाग के रूप में कार्य करते हैं और कुल 25 विषयों (100 क्रेडिट) से बने होते हैं। आपके बुनियादी मुख्य पाठ्यक्रम अन्य आईटी छात्रों के साथ आवश्यक व्यवसाय क्षमताओं को विकसित करने में मदद करेंगे, और आपकी मुख्य आवश्यकताएं आम तौर पर आईटी के मौलिक ज्ञान से संबंधित अधिक उन्नत विषयों को शामिल करेंगी। आपके 5 मुख्य वैकल्पिक पाठ्यक्रम आपको व्यवसाय की एक विशिष्ट शाखा में अपनी पढ़ाई पर ध्यान केंद्रित करने की अनुमति देंगे और आपको एक माइनर चुनने का विकल्प देंगे।",
    "major_electives_desc": "<strong>मुख्य वैकल्पिक पाठ्यक्रम – कृपया निम्नलिखित सूची से 5 विषय (20 क्रेडिट) चुनें</strong> - जो छात्र एक ही ट्रैक के भीतर से 20 क्रेडिट सफलतापूर्वक पूरा करते हैं, उन्हें उस ट्रैक में विशेष अध्ययन का प्रमाणपत्र प्रदान किया जाएगा। यदि छात्र इन ट्रैक्स का पालन करना नहीं चुनते हैं, तो उन्हें प्रमाणपत्र नहीं दिया जाएगा।",
    "free_electives_desc": "<strong>मुक्त वैकल्पिक पाठ्यक्रम (8 क्रेडिट)</strong> - मुक्त वैकल्पिक पाठ्यक्रम आपको व्यक्तिगत रुचि के क्षेत्र में अध्ययन करने की अनुमति देते हैं। आपको इस श्रेणी में 2 विषय पूरे करने होंगे और आप विश्वविद्यालय में पेश किए गए किसी भी ऐसे विषय को चुन सकते हैं जिसके लिए आप योग्य हैं।",
    "internship_desc": "<strong>इंटर्नशिप (12 क्रेडिट)</strong> - आपकी इंटर्नशिप आपको अपने पाठ्यक्रम के दौरान प्राप्त ज्ञान और कौशल को व्यवहार में लाने और इन कौशलों को आप कितनी अच्छी तरह लागू कर सकते हैं, इस पर विचार करने की अनुमति देती है। आपकी इंटर्नशिप आपके सभी पाठ्यक्रम कार्य को पूरा करने के बाद आपके अंतिम सेमेस्टर में ली जानी चाहिए और स्नातक होने के लिए आपको अंतिम 12 क्रेडिट प्रदान करेगी।"
  },
  vi: {
    "curriculum_title": "Chương trình học của tôi - Cổng thông tin sinh viên STIU",
    "profile_settings": "Cài đặt hồ sơ",
    "dashboard": "Bảng điều khiển",
    "logout": "Đăng xuất",
    "progress_summary": "Tóm tắt tiến độ chương trình học",
    "total_credits": "Tổng số tín chỉ",
    "completed_credits": "Tín chỉ đã hoàn thành",
    "remaining_credits": "Tín chỉ còn lại",
    "completion_rate": "Tỷ lệ hoàn thành",
    "general_education": "Giáo dục đại cương",
    "humanities": "Nhân văn",
    "social_sciences": "Khoa học xã hội",
    "languages": "Ngôn ngữ",
    "science_math": "Khoa học & Toán học",
    "professional_courses": "Môn học chuyên ngành",
    "core_courses": "Môn học cốt lõi",
    "major_requirements": "Môn học bắt buộc chuyên ngành",
    "major_electives": "Môn học tự chọn chuyên ngành",
    "specialization_tracks": "Chuyên ngành",
    "software_track": "Kỹ thuật phần mềm",
    "ecommerce_track": "Công nghệ thương mại điện tử",
    "data_science_track": "Khoa học dữ liệu",
    "network_track": "Mạng và bảo mật",
    "other_requirements": "Yêu cầu khác",
    "free_electives": "Môn học tự chọn tự do",
    "internship": "Thực tập",
    "save_progress": "Lưu tiến độ",
    "save_success": "Lưu tiến độ thành công!",
    "loading_curriculum": "Đang tải chương trình học...",
    "course_completed": "Đã hoàn thành",
    "course_in_progress": "Đang tiến hành",
    "course_not_started": "Chưa bắt đầu",
    "credits": "tín chỉ",
    "year": "Năm",
    "credits_unit": "tín chỉ",
    "prerequisite": "Môn học tiên quyết",
    "please_wait": "Vui lòng đợi một chút",
    "saving": "Đang lưu...",
    
    // Description translations
    "general_education_desc": "<strong>Môn học Giáo dục đại cương (40 Tín chỉ)</strong> - Môn học Giáo dục đại cương đóng vai trò nền tảng cho chuyên ngành của bạn và giúp bạn phát triển kiến thức và kỹ năng toàn diện. Bạn phải chọn 10 môn học trong các danh mục sau. Chúng tôi đã đề xuất năm học để giúp bạn quyết định khi nào nên học môn học cụ thể nào.",
    "professional_courses_desc": "<strong>Môn học chuyên ngành (100 Tín chỉ)</strong> - Môn học chuyên ngành tạo thành phần chính của kiến thức và kỹ năng cho bằng cấp của bạn và bao gồm tổng cộng 25 môn học (100 tín chỉ). Các môn học cốt lõi cơ bản của bạn sẽ giúp bạn phát triển khả năng kinh doanh thiết yếu cùng với các sinh viên IT khác, và các môn học bắt buộc chuyên ngành của bạn thường liên quan đến các chủ đề nâng cao hơn liên quan đến kiến thức cơ bản về IT. 5 môn học tự chọn chuyên ngành của bạn sau đó sẽ cho phép bạn tập trung nghiên cứu vào một lĩnh vực kinh doanh cụ thể và cung cấp cho bạn tùy chọn chọn chuyên ngành phụ.",
    "major_electives_desc": "<strong>Môn học tự chọn chuyên ngành – Vui lòng chọn 5 môn học (20 tín chỉ) từ danh sách sau</strong> - Sinh viên hoàn thành thành công 20 tín chỉ từ cùng một chuyên ngành sẽ được cấp chứng chỉ Nghiên cứu Chuyên sâu về chuyên ngành đó. Nếu sinh viên không chọn theo các chuyên ngành này, họ sẽ không được cấp chứng chỉ.",
    "free_electives_desc": "<strong>Môn học tự chọn tự do (8 Tín chỉ)</strong> - Môn học tự chọn tự do cho phép bạn học tập trong lĩnh vực quan tâm cá nhân. Bạn phải hoàn thành 2 môn học trong danh mục này và bạn có thể chọn bất kỳ môn học nào bạn đủ điều kiện được cung cấp tại trường đại học.",
    "internship_desc": "<strong>Thực tập (12 Tín chỉ)</strong> - Kỳ thực tập của bạn cho phép bạn áp dụng vào thực tế kiến thức và kỹ năng bạn đã đạt được trong quá trình học và phản ánh mức độ bạn có thể áp dụng các kỹ năng này. Kỳ thực tập của bạn sẽ được thực hiện trong học kỳ cuối cùng, sau khi hoàn thành tất cả các môn học và sẽ cung cấp cho bạn 12 tín chỉ cuối cùng để tốt nghiệp."
  },
  id: {
    "curriculum_title": "Kurikulum Saya - Portal Mahasiswa STIU",
    "profile_settings": "Pengaturan Profil",
    "dashboard": "Dasbor",
    "logout": "Keluar",
    "progress_summary": "Ringkasan Kemajuan Kurikulum",
    "total_credits": "Total SKS",
    "completed_credits": "SKS yang Diselesaikan",
    "remaining_credits": "SKS yang Tersisa",
    "completion_rate": "Tingkat Penyelesaian",
    "general_education": "Pendidikan Umum",
    "humanities": "Humaniora",
    "social_sciences": "Ilmu Sosial",
    "languages": "Bahasa",
    "science_math": "Sains & Matematika",
    "professional_courses": "Mata Kuliah Profesional",
    "core_courses": "Mata Kuliah Inti",
    "major_requirements": "Persyaratan Mayor",
    "major_electives": "Elektif Mayor",
    "specialization_tracks": "Jalur Spesialisasi",
    "software_track": "Rekayasa Perangkat Lunak",
    "ecommerce_track": "Teknologi E-Commerce",
    "data_science_track": "Ilmu Data",
    "network_track": "Jaringan dan Keamanan",
    "other_requirements": "Persyaratan Lainnya",
    "free_electives": "Elektif Bebas",
    "internship": "Magang",
    "save_progress": "Simpan Kemajuan",
    "save_success": "Kemajuan berhasil disimpan!",
    "loading_curriculum": "Memuat Kurikulum...",
    "course_completed": "Selesai",
    "course_in_progress": "Sedang Berjalan",
    "course_not_started": "Belum Dimulai",
    "credits": "SKS",
    "year": "Tahun",
    "credits_unit": "SKS",
    "prerequisite": "Prasyarat",
    "please_wait": "Harap tunggu sebentar",
    "saving": "Menyimpan...",
    
    // Description translations
    "general_education_desc": "<strong>Mata Kuliah Pendidikan Umum (40 SKS)</strong> - Mata kuliah Pendidikan Umum berfungsi sebagai dasar untuk jurusan utama Anda dan membantu Anda mengembangkan pengetahuan dan keterampilan yang luas. Anda harus memilih 10 mata kuliah dalam kategori berikut. Kami telah merekomendasikan tahun untuk membantu Anda memutuskan kapan harus mengambil mata kuliah tertentu.",
    "professional_courses_desc": "<strong>Mata Kuliah Profesional (100 SKS)</strong> - Mata kuliah Profesional berfungsi sebagai inti pengetahuan dan keterampilan gelar Anda dan terdiri dari total 25 mata kuliah (100 SKS). Mata kuliah inti dasar Anda akan membantu Anda mengembangkan kemampuan bisnis penting bersama dengan mahasiswa IT lainnya, dan Persyaratan Mayor Anda umumnya akan melibatkan topik yang lebih maju terkait pengetahuan dasar IT. 5 mata kuliah Elektif Mayor Anda kemudian akan memungkinkan Anda untuk memfokuskan studi Anda pada cabang bisnis tertentu dan memberi Anda opsi untuk memilih minor.",
    "major_electives_desc": "<strong>Elektif Mayor – Silakan pilih 5 mata kuliah (20 SKS) dari daftar berikut</strong> - Mahasiswa yang berhasil menyelesaikan 20 SKS dari jalur yang sama akan diberikan sertifikat Studi Spesialisasi di jalur tersebut. Jika mahasiswa tidak memilih untuk mengikuti jalur ini, mereka tidak akan diberikan sertifikat.",
    "free_electives_desc": "<strong>Elektif Bebas (8 SKS)</strong> - Elektif Bebas memungkinkan Anda untuk belajar di bidang minat pribadi. Anda harus menyelesaikan 2 mata kuliah dalam kategori ini dan Anda dapat memilih mata kuliah apa pun yang memenuhi syarat yang ditawarkan di universitas.",
    "internship_desc": "<strong>Magang (12 SKS)</strong> - Magang Anda memungkinkan Anda untuk mempraktikkan pengetahuan dan keterampilan yang Anda peroleh selama perkuliahan dan merefleksikan seberapa baik Anda dapat menerapkan keterampilan ini. Magang Anda akan diambil pada semester terakhir, setelah menyelesaikan semua perkuliahan Anda dan akan memberikan Anda 12 SKS terakhir untuk lulus."
  },
  ms: {
    "curriculum_title": "Kurikulum Saya - Portal Pelajar STIU",
    "profile_settings": "Tetapan Profil",
    "dashboard": "Papan Pemuka",
    "logout": "Log Keluar",
    "progress_summary": "Ringkasan Kemajuan Kurikulum",
    "total_credits": "Jumlah Kredit",
    "completed_credits": "Kredit Selesai",
    "remaining_credits": "Kredit Tinggal",
    "completion_rate": "Kadar Penyiapan",
    "general_education": "Pendidikan Am",
    "humanities": "Kemanusiaan",
    "social_sciences": "Sains Sosial",
    "languages": "Bahasa",
    "science_math": "Sains & Matematik",
    "professional_courses": "Kursus Profesional",
    "core_courses": "Kursus Teras",
    "major_requirements": "Keperluan Major",
    "major_electives": "Elektif Major",
    "specialization_tracks": "Jalur Pengkhususan",
    "software_track": "Kejuruteraan Perisian",
    "ecommerce_track": "Teknologi E-Dagang",
    "data_science_track": "Sains Data",
    "network_track": "Rangkaian dan Keselamatan",
    "other_requirements": "Keperluan Lain",
    "free_electives": "Elektif Bebas",
    "internship": "Latihan Industri",
    "save_progress": "Simpan Kemajuan",
    "save_success": "Kemajuan berjaya disimpan!",
    "loading_curriculum": "Memuatkan Kurikulum...",
    "course_completed": "Selesai",
    "course_in_progress": "Dalam Proses",
    "course_not_started": "Belum Bermula",
    "credits": "kredit",
    "year": "Tahun",
    "credits_unit": "kredit",
    "prerequisite": "Prasyarat",
    "please_wait": "Sila tunggu sebentar",
    "saving": "Menyimpan...",
    
    // Description translations
    "general_education_desc": "<strong>Kursus Pendidikan Am (40 Kredit)</strong> - Kursus Pendidikan Am berfungsi sebagai asas untuk major anda dan membantu anda membangunkan badan pengetahuan dan kemahiran yang menyeluruh. Anda mesti memilih 10 subjek dalam kategori berikut. Kami telah mencadangkan tahun untuk membantu anda membuat keputusan bila hendak mengambil mana-mana subjek tertentu.",
    "professional_courses_desc": "<strong>Kursus Profesional (100 Kredit)</strong> - Kursus Profesional berfungsi sebagai badan utama pengetahuan dan kemahiran ijazah anda dan terdiri daripada 25 subjek (100 kredit) secara keseluruhan. Kursus teras asas anda akan membantu anda membangunkan keupayaan perniagaan penting bersama-sama dengan pelajar IT lain, dan Keperluan Major anda biasanya akan melibatkan topik yang lebih maju berkaitan pengetahuan asas IT. 5 kursus Elektif Major anda kemudiannya akan membolehkan anda menumpukan pengajian anda dalam cabang perniagaan tertentu dan memberi anda pilihan untuk memilih minor.",
    "major_electives_desc": "<strong>Elektif Major – Sila pilih 5 subjek (20 kredit) dari senarai berikut</strong> - Pelajar yang berjaya menyelesaikan 20 kredit dari dalam trek yang sama akan dianugerahkan sijil Pengajian Pengkhususan dalam trek itu. Jika pelajar tidak memilih untuk mengikuti trek ini, mereka tidak akan dianugerahkan sijil.",
    "free_electives_desc": "<strong>Elektif Bebas (8 Kredit)</strong> - Elektif Bebas membolehkan anda belajar dalam bidang minat peribadi. Anda mesti menyelesaikan 2 subjek dalam kategori ini dan anda boleh memilih mana-mana subjek yang anda layak yang ditawarkan di universiti.",
    "internship_desc": "<strong>Latihan Industri (12 Kredit)</strong> - Latihan Industri anda membolehkan anda mengamalkan pengetahuan dan kemahiran yang anda peroleh semasa kursus dan merenung sejauh mana anda boleh menggunakan kemahiran ini. Latihan Industri anda akan diambil dalam penggal terakhir, selepas menyelesaikan semua kerja kursus anda dan akan memberikan anda 12 kredit terakhir untuk graduat."
  },
  ru: {
    "curriculum_title": "Мой учебный план - Студенческий портал STIU",
    "profile_settings": "Настройки профиля",
    "dashboard": "Панель управления",
    "logout": "Выйти",
    "progress_summary": "Сводка прогресса учебного плана",
    "total_credits": "Всего кредитов",
    "completed_credits": "Завершенные кредиты",
    "remaining_credits": "Оставшиеся кредиты",
    "completion_rate": "Процент завершения",
    "general_education": "Общее образование",
    "humanities": "Гуманитарные науки",
    "social_sciences": "Общественные науки",
    "languages": "Языки",
    "science_math": "Наука и математика",
    "professional_courses": "Профессиональные курсы",
    "core_courses": "Основные курсы",
    "major_requirements": "Требования специальности",
    "major_electives": "Факультативы специальности",
    "specialization_tracks": "Специализации",
    "software_track": "Программная инженерия",
    "ecommerce_track": "Технологии электронной коммерции",
    "data_science_track": "Наука о данных",
    "network_track": "Сети и безопасность",
    "other_requirements": "Другие требования",
    "free_electives": "Свободные факультативы",
    "internship": "Стажировка",
    "save_progress": "Сохранить прогресс",
    "save_success": "Прогресс успешно сохранен!",
    "loading_curriculum": "Загрузка учебного плана...",
    "course_completed": "Завершено",
    "course_in_progress": "В процессе",
    "course_not_started": "Не начато",
    "credits": "кредиты",
    "year": "Год",
    "credits_unit": "кредиты",
    "prerequisite": "Предварительное условие",
    "please_wait": "Пожалуйста, подождите",
    "saving": "Сохранение...",
    
    // Description translations
    "general_education_desc": "<strong>Курсы общего образования (40 кредитов)</strong> - Курсы общего образования служат основой для вашей специальности и помогают вам развить всесторонние знания и навыки. Вы должны выбрать 10 предметов из следующих категорий. Мы рекомендовали год, чтобы помочь вам решить, когда изучать тот или иной предмет.",
    "professional_courses_desc": "<strong>Профессиональные курсы (100 кредитов)</strong> - Профессиональные курсы составляют основную часть знаний и навыков для вашей степени и в общей сложности состоят из 25 предметов (100 кредитов). Ваши базовые основные курсы помогут вам развить важные деловые способности вместе с другими студентами IT, а ваши требования по специальности, как правило, будут включать более продвинутые темы, связанные с фундаментальными знаниями IT. Затем ваши 5 факультативов по специальности позволят вам сосредоточить учебу на конкретной области бизнеса и дадут вам возможность выбрать второстепенную специализацию.",
    "major_electives_desc": "<strong>Факультативы по специальности – Пожалуйста, выберите 5 предметов (20 кредитов) из следующего списка</strong> - Студенты, успешно завершившие 20 кредитов в одном и том же направлении, получат сертификат специализированного обучения по этому направлению. Если студенты не выберут эти направления, они не получат сертификат.",
    "free_electives_desc": "<strong>Свободные факультативы (8 кредитов)</strong> - Свободные факультативы позволяют вам изучать область личного интереса. Вы должны завершить 2 предмета в этой категории и можете выбрать любой предмет, на который вы имеете право, предлагаемый в университете.",
    "internship_desc": "<strong>Стажировка (12 кредитов)</strong> - Ваша стажировка позволяет вам применить на практике знания и навыки, полученные во время учебы, и подумать, насколько хорошо вы можете применять эти навыки. Ваша стажировка должна пройти в последнем семестре, после завершения всех курсов, и предоставит вам последние 12 кредитов для окончания учебы."
  },
  ur: {
    "curriculum_title": "میرا نصاب - STIU سٹوڈنٹ پورٹل",
    "profile_settings": "پروفائل سیٹنگز",
    "dashboard": "ڈیش بورڈ",
    "logout": "لاگ آؤٹ",
    "progress_summary": "نصاب کی پیش رفت کا خلاصہ",
    "total_credits": "کل کریڈٹ",
    "completed_credits": "مکمل ہونے والے کریڈٹ",
    "remaining_credits": "باقی کریڈٹ",
    "completion_rate": "مکمل ہونے کی شرح",
    "general_education": "عام تعلیم",
    "humanities": "انسانیات",
    "social_sciences": "سماجی علوم",
    "languages": "زبانیں",
    "science_math": "سائنس اور ریاضی",
    "professional_courses": "پیشہ ورانہ کورسز",
    "core_courses": "بنیادی کورسز",
    "major_requirements": "بڑی ضروریات",
    "major_electives": "بڑے انتخابی کورسز",
    "specialization_tracks": "تخصص کے راستے",
    "software_track": "سافٹ ویئر انجینئرنگ",
    "ecommerce_track": "ای کامرس ٹیکنالوجی",
    "data_science_track": "ڈیٹا سائنس",
    "network_track": "نیٹ ورک اور سیکورٹی",
    "other_requirements": "دیگر ضروریات",
    "free_electives": "آزاد انتخابی کورسز",
    "internship": "انٹرنشپ",
    "save_progress": "پیش رفت محفوظ کریں",
    "save_success": "پیش رفت کامیابی سے محفوظ ہو گئی!",
    "loading_curriculum": "نصاب لوڈ ہو رہا ہے...",
    "course_completed": "مکمل",
    "course_in_progress": "جاری ہے",
    "course_not_started": "شروع نہیں ہوا",
    "credits": "کریڈٹ",
    "year": "سال",
    "credits_unit": "کریڈٹ",
    "prerequisite": "پیشگی شرط",
    "please_wait": "براہ کرم انتظار کریں",
    "saving": "محفوظ ہو رہا ہے...",
    
    // Description translations
    "general_education_desc": "<strong>عمومی تعلیم کے کورسز (40 کریڈٹ)</strong> - عمومی تعلیم کے کورسز آپ کے بڑے مضمون کی بنیاد کے طور پر کام کرتے ہیں اور آپ کو علم اور مہارتوں کا ایک جامع مجموعہ تیار کرنے میں مدد کرتے ہیں۔ آپ کو درج ذیل زمروں میں سے 10 مضامین کا انتخاب کرنا ہوگا۔ ہم نے آپ کی مدد کے لیے ایک سال کی سفارش کی ہے تاکہ آپ یہ فیصلہ کر سکیں کہ کسی خاص مضمون کو کب لینا ہے۔",
    "professional_courses_desc": "<strong>پیشہ ورانہ کورسز (100 کریڈٹ)</strong> - پیشہ ورانہ کورسز آپ کی ڈگری کے علم اور مہارتوں کے مرکزی حصے کے طور پر کام کرتے ہیں اور کل 25 مضامین (100 کریڈٹ) پر مشتمل ہیں۔ آپ کے بنیادی بنیادی کورسز دوسرے آئی ٹی طلباء کے ساتھ مل کر ضروری کاروباری صلاحیتیں تیار کرنے میں مدد کریں گے، اور آپ کی بڑی ضروریات میں عام طور پر آئی ٹی کے بنیادی علم سے متعلق مزید اعلی درجے کے موضوعات شامل ہوں گے۔ آپ کے 5 بڑے انتخابی کورسز پھر آپ کو ایک مخصوص کاروباری شاخ میں اپنی تعلیم پر توجہ مرکوز کرنے کی اجازت دیں گے اور آپ کو ایک چھوٹا مضمون منتخب کرنے کا اختیار دیں گے۔",
    "major_electives_desc": "<strong>بڑے انتخابی مضامین – براہ کرم مندرجہ ذیل فہرست سے 5 مضامین (20 کریڈٹ) کا انتخاب کریں</strong> - جو طلباء ایک ہی ٹریک کے اندر سے 20 کریڈٹ کامیابی سے مکمل کرتے ہیں انہیں اس ٹریک میں مخصوص مطالعہ کا سرٹیفکیٹ دیا جائے گا۔ اگر طلباء ان ٹریکس پر عمل کرنے کا انتخاب نہیں کرتے ہیں تو انہیں سرٹیفکیٹ نہیں دیا جائے گا۔",
    "free_electives_desc": "<strong>آزاد انتخابی مضامین (8 کریڈٹ)</strong> - آزاد انتخابی مضامین آپ کو ذاتی دلچسپی کے شعبے میں مطالعہ کرنے کی اجازت دیتے ہیں۔ آپ کو اس زمرے میں 2 مضامین مکمل کرنے ہوں گے اور آپ یونیورسٹی میں پیش کیے جانے والے کسی بھی ایسے مضمون کا انتخاب کر سکتے ہیں جس کے لیے آپ اہل ہوں۔",
    "internship_desc": "<strong>انٹرنشپ (12 کریڈٹ)</strong> - آپ کی انٹرنشپ آپ کو اپنے کورس ورک کے دوران حاصل کردہ علم اور مہارتوں کو عملی جامہ پہنانے اور ان مہارتوں کو آپ کتنی اچھی طرح لاگو کر سکتے ہیں اس پر غور کرنے کی اجازت دیتی ہے۔ آپ کی انٹرنشپ آپ کے آخری سمسٹر میں لی جانی چاہیے، آپ کے تمام کورس ورک مکمل کرنے کے بعد اور آپ کو گریجویشن کے لیے آخری 12 کریڈٹ فراہم کرے گی۔"
  },
  tr: {
    "curriculum_title": "Müfredatım - STIU Öğrenci Portalı",
    "profile_settings": "Profil Ayarları",
    "dashboard": "Kontrol Paneli",
    "logout": "Çıkış Yap",
    "progress_summary": "Müfredat İlerleme Özeti",
    "total_credits": "Toplam Kredi",
    "completed_credits": "Tamamlanan Kredi",
    "remaining_credits": "Kalan Kredi",
    "completion_rate": "Tamamlama Oranı",
    "general_education": "Genel Eğitim",
    "humanities": "Beşeri Bilimler",
    "social_sciences": "Sosyal Bilimler",
    "languages": "Diller",
    "science_math": "Bilim ve Matematik",
    "professional_courses": "Mesleki Dersler",
    "core_courses": "Temel Dersler",
    "major_requirements": "Ana Dal Gereksinimleri",
    "major_electives": "Ana Dal Seçmeli Dersleri",
    "specialization_tracks": "Uzmanlık Alanları",
    "software_track": "Yazılım Mühendisliği",
    "ecommerce_track": "E-Ticaret Teknolojisi",
    "data_science_track": "Veri Bilimi",
    "network_track": "Ağ ve Güvenlik",
    "other_requirements": "Diğer Gereksinimler",
    "free_electives": "Serbest Seçmeli Dersler",
    "internship": "Staj",
    "save_progress": "İlerlemeyi Kaydet",
    "save_success": "İlerleme başarıyla kaydedildi!",
    "loading_curriculum": "Müfredat Yükleniyor...",
    "course_completed": "Tamamlandı",
    "course_in_progress": "Devam Ediyor",
    "course_not_started": "Başlamadı",
    "credits": "kredi",
    "year": "Yıl",
    "credits_unit": "kredi",
    "prerequisite": "Önkoşul",
    "please_wait": "Lütfen bekleyin",
    "saving": "Kaydediliyor...",
    
    // Description translations
    "general_education_desc": "<strong>Genel Eğitim Dersleri (40 Kredi)</strong> - Genel Eğitim dersleri ana dalınız için bir temel oluşturur ve kapsamlı bir bilgi ve beceri seti geliştirmenize yardımcı olur. Aşağıdaki kategorilerden 10 ders seçmelisiniz. Hangi dersi ne zaman alacağınıza karar vermenize yardımcı olmak için bir yıl önerdik.",
    "professional_courses_desc": "<strong>Mesleki Dersler (100 Kredi)</strong> - Mesleki dersler derecenizin bilgi ve becerilerinin ana gövdesini oluşturur ve toplam 25 ders (100 kredi) içerir. Temel ana dersleriniz diğer IT öğrencileriyle birlikte temel iş yetenekleri geliştirmenize yardımcı olacak ve Ana Dal Gereksinimleriniz genellikle IT'nin temel bilgisiyle ilgili daha ileri düzey konuları içerecektir. 5 Ana Dal Seçmeli dersiniz daha sonra çalışmalarınızı belirli bir iş dalında odaklamanıza ve bir yan dal seçme seçeneği sunacaktır.",
    "major_electives_desc": "<strong>Ana Dal Seçmeli Dersleri – Lütfen aşağıdaki listeden 5 ders (20 kredi) seçin</strong> - Aynı alandan 20 krediyi başarıyla tamamlayan öğrencilere o alanda Uzmanlık Çalışması sertifikası verilecektir. Öğrenciler bu alanları takip etmeyi seçmezlerse sertifika verilmeyecektir.",
    "free_electives_desc": "<strong>Serbest Seçmeli Dersler (8 Kredi)</strong> - Serbest seçmeli dersler kişisel ilgi alanınızda çalışmanıza olanak tanır. Bu kategoride 2 dersi tamamlamalısınız ve üniversitede sunulan uygun olduğunuz herhangi bir dersi seçebilirsiniz.",
    "internship_desc": "<strong>Staj (12 Kredi)</strong> - Stajınız, ders çalışmaları sırasında edindiğiniz bilgi ve becerileri uygulamaya koymanıza ve bu becerileri ne kadar iyi uygulayabileceğinizi yansıtmanıza olanak tanır. Stajınız, tüm ders çalışmalarınızı tamamladıktan sonra son döneminizde alınmalı ve mezun olmak için size son 12 kredinizi sağlayacaktır."
  },
  fa: {
    "curriculum_title": "برنامه درسی من - پورتال دانشجویی STIU",
    "profile_settings": "تنظیمات پروفایل",
    "dashboard": "داشبورد",
    "logout": "خروج",
    "progress_summary": "خلاصه پیشرفت برنامه درسی",
    "total_credits": "مجموع واحدها",
    "completed_credits": "واحدهای تکمیل شده",
    "remaining_credits": "واحدهای باقی مانده",
    "completion_rate": "نرخ تکمیل",
    "general_education": "آموزش عمومی",
    "humanities": "علوم انسانی",
    "social_sciences": "علوم اجتماعی",
    "languages": "زبان‌ها",
    "science_math": "علوم و ریاضیات",
    "professional_courses": "دروس تخصصی",
    "core_courses": "دروس پایه",
    "major_requirements": "دروس اجباری تخصص",
    "major_electives": "دروس اختیاری تخصص",
    "specialization_tracks": "گرایش‌های تخصصی",
    "software_track": "مهندسی نرم افزار",
    "ecommerce_track": "فناوری تجارت الکترونیک",
    "data_science_track": "علم داده",
    "network_track": "شبکه و امنیت",
    "other_requirements": "سایر الزامات",
    "free_electives": "دروس اختیاری آزاد",
    "internship": "کارآموزی",
    "save_progress": "ذخیره پیشرفت",
    "save_success": "پیشرفت با موفقیت ذخیره شد!",
    "loading_curriculum": "در حال بارگذاری برنامه درسی...",
    "course_completed": "تکمیل شده",
    "course_in_progress": "در حال انجام",
    "course_not_started": "شروع نشده",
    "credits": "واحد",
    "year": "سال",
    "credits_unit": "واحد",
    "prerequisite": "پیش نیاز",
    "please_wait": "لطفاً منتظر بمانید",
    "saving": "در حال ذخیره...",
    
    // Description translations
    "general_education_desc": "<strong>دروس آموزش عمومی (40 واحد)</strong> - دروس آموزش عمومی به عنوان پایه ای برای رشته اصلی شما عمل می‌کنند و به شما کمک می‌کنند مجموعه‌ای جامع از دانش و مهارت‌ها را توسعه دهید. شما باید 10 درس را از دسته‌های زیر انتخاب کنید. ما یک سال را توصیه کرده‌ایم تا به شما در تصمیم‌گیری برای زمان گذراندن هر درس خاص کمک کند.",
    "professional_courses_desc": "<strong>دروس تخصصی (100 واحد)</strong> - دروس تخصصی بدنه اصلی دانش و مهارت‌های مدرک شما را تشکیل می‌دهند و در مجموع شامل 25 درس (100 واحد) هستند. دروس پایه اصلی شما به شما کمک می‌کنند تا توانایی‌های تجاری ضروری را همراه با سایر دانشجویان IT توسعه دهید و الزامات تخصصی شما عموماً شامل موضوعات پیشرفته‌تری مربوط به دانش پایه IT خواهد بود. 5 درس اختیاری تخصصی شما سپس به شما امکان می‌دهد تا مطالعات خود را در یک شاخه خاص تجاری متمرکز کنید و گزینه انتخاب یک رشته فرعی را به شما می‌دهد.",
    "major_electives_desc": "<strong>دروس اختیاری تخصص – لطفاً 5 درس (20 واحد) را از لیست زیر انتخاب کنید</strong> - دانشجویانی که با موفقیت 20 واحد را از یک گرایش یکسان تکمیل کنند، گواهی مطالعه تخصصی در آن گرایش را دریافت خواهند کرد. اگر دانشجویان این گرایش‌ها را دنبال نکنند، گواهی به آنها اعطا نخواهد شد.",
    "free_electives_desc": "<strong>دروس اختیاری آزاد (8 واحد)</strong> - دروس اختیاری آزاد به شما امکان می‌دهند در زمینه‌ای از علاقه شخصی مطالعه کنید. شما باید 2 درس را در این دسته تکمیل کنید و می‌توانید هر درسی را که واجد شرایط آن هستید و در دانشگاه ارائه می‌شود انتخاب کنید.",
    "internship_desc": "<strong>کارآموزی (12 واحد)</strong> - کارآموزی شما به شما امکان می‌دهد دانش و مهارت‌هایی را که در طول دوره درسی کسب کرده‌اید در عمل به کار ببرید و تأمل کنید که چقدر خوب می‌توانید این مهارت‌ها را اعمال کنید. کارآموزی شما باید در ترم آخر، پس از تکمیل تمام دوره‌های درسی شما انجام شود و 12 واحد نهایی را برای فارغ‌التحصیلی در اختیار شما قرار می‌دهد."
  },
  ta: {
    "curriculum_title": "எனது பாடத்திட்டம் - STIU மாணவர் போர்டல்",
    "profile_settings": "சுயவிவர அமைப்புகள்",
    "dashboard": "டாஷ்போர்டு",
    "logout": "வெளியேறு",
    "progress_summary": "பாடத்திட்ட முன்னேற்ற சுருக்கம்",
    "total_credits": "மொத்த கடன்கள்",
    "completed_credits": "முடிக்கப்பட்ட கடன்கள்",
    "remaining_credits": "மீதமுள்ள கடன்கள்",
    "completion_rate": "நிறைவு விகிதம்",
    "general_education": "பொது கல்வி",
    "humanities": "மனிதநேயம்",
    "social_sciences": "சமூக அறிவியல்",
    "languages": "மொழிகள்",
    "science_math": "அறிவியல் & கணிதம்",
    "professional_courses": "தொழில்முறை பாடங்கள்",
    "core_courses": "அடிப்படைப் பாடங்கள்",
    "major_requirements": "முக்கிய தேவைகள்",
    "major_electives": "முக்கிய தேர்வுப் பாடங்கள்",
    "specialization_tracks": "சிறப்பு பிரிவுகள்",
    "software_track": "மென்பொருள் பொறியியல்",
    "ecommerce_track": "மின்வணிக தொழில்நுட்பம்",
    "data_science_track": "தரவு அறிவியல்",
    "network_track": "பிணையம் மற்றும் பாதுகாப்பு",
    "other_requirements": "பிற தேவைகள்",
    "free_electives": "இலவச தேர்வுப் பாடங்கள்",
    "internship": "பயிற்சி",
    "save_progress": "முன்னேற்றத்தை சேமிக்கவும்",
    "save_success": "முன்னேற்றம் வெற்றிகரமாக சேமிக்கப்பட்டது!",
    "loading_curriculum": "பாடத்திட்டம் ஏற்றப்படுகிறது...",
    "course_completed": "முடிந்தது",
    "course_in_progress": "நடந்து கொண்டிருக்கிறது",
    "course_not_started": "தொடங்கப்படவில்லை",
    "credits": "கடன்கள்",
    "year": "ஆண்டு",
    "credits_unit": "கடன்கள்",
    "prerequisite": "முன்நிபந்தனை",
    "please_wait": "தயவு செய்து காத்திருக்கவும்",
    "saving": "சேமிக்கப்படுகிறது...",
    
    // Description translations
    "general_education_desc": "<strong>பொது கல்வி பாடங்கள் (40 கடன்கள்)</strong> - பொது கல்வி பாடங்கள் உங்கள் முக்கிய பாடத்திற்கான அடிப்படையாக செயல்படுகின்றன மற்றும் ஒரு விரிவான அறிவு மற்றும் திறன்களை உருவாக்க உதவுகின்றன. பின்வரும் வகைகளில் 10 பாடங்களை நீங்கள் தேர்வு செய்ய வேண்டும். எந்த பாடத்தை எப்போது எடுக்க வேண்டும் என்பதை தீர்மானிக்க உதவ ஒரு ஆண்டை பரிந்துரைத்துள்ளோம்.",
    "professional_courses_desc": "<strong>தொழில்முறை பாடங்கள் (100 கடன்கள்)</strong> - தொழில்முறை பாடங்கள் உங்கள் பட்டத்தின் முக்கிய அறிவு மற்றும் திறன்களாக செயல்படுகின்றன மற்றும் மொத்தம் 25 பாடங்கள் (100 கடன்கள்) கொண்டவை. உங்கள் அடிப்படை முக்கிய பாடங்கள் மற்ற IT மாணவர்களுடன் இணைந்து அத்தியாவசிய வணிக திறன்களை உருவாக்க உதவும், மேலும் உங்கள் முக்கிய தேவைகள் பொதுவாக IT இன் அடிப்படை அறிவுடன் தொடர்புடைய மேம்பட்ட தலைப்புகளை உள்ளடக்கும். உங்கள் 5 முக்கிய தேர்வுப் பாடங்கள் பின்னர் உங்கள் படிப்புகளை ஒரு குறிப்பிட்ட வணிக கிளையில் கவனம் செலுத்த உங்களை அனுமதிக்கும் மற்றும் ஒரு சிறிய பாடத்தை தேர்ந்தெடுக்கும் வாய்ப்பை உங்களுக்கு வழங்கும்.",
    "major_electives_desc": "<strong>முக்கிய தேர்வுப் பாடங்கள் – தயவு செய்து பின்வரும் பட்டியலில் இருந்து 5 பாடங்களை (20 கடன்கள்) தேர்ந்தெடுக்கவும்</strong> - ஒரே பாதையில் இருந்து 20 கடன்களை வெற்றிகரமாக முடிக்கும் மாணவர்களுக்கு அந்தப் பாதையில் சிறப்பு படிப்பின் சான்றிதழ் வழங்கப்படும். மாணவர்கள் இந்த பாதைகளைப் பின்பற்றத் தேர்வு செய்யவில்லை என்றால், அவர்களுக்கு சான்றிதழ் வழங்கப்படாது.",
    "free_electives_desc": "<strong>இலவச தேர்வுப் பாடங்கள் (8 கடன்கள்)</strong> - இலவச தேர்வுப் பாடங்கள் தனிப்பட்ட விருப்பத்தின் பகுதியில் படிக்க உங்களை அனுமதிக்கின்றன. இந்த வகையில் 2 பாடங்களை நீங்கள் முடிக்க வேண்டும், மேலும் பல்கலைக்கழகத்தில் வழங்கப்படும் தகுதி வாய்ந்த எந்த பாடத்தையும் நீங்கள் தேர்வு செய்யலாம்.",
    "internship_desc": "<strong>பயிற்சி (12 கடன்கள்)</strong> - உங்கள் பயிற்சி, நீங்கள் பாடப் பணியின் போது பெற்ற அறிவு மற்றும் திறன்களைப் பயன்படுத்தவும், இந்தத் திறன்களை எவ்வளவு நன்றாகப் பயன்படுத்த முடியும் என்பதைப் பிரதிபலிக்கவும் உங்களை அனுமதிக்கிறது. உங்கள் பயிற்சி உங்கள் கடைசி பருவத்தில், உங்கள் அனைத்து பாடப் பணிகளையும் முடித்த பிறகு எடுக்கப்பட வேண்டும், மேலும் பட்டம் பெற உங்களுக்கு இறுதி 12 கடன்களை வழங்கும்."
  },
  te: {
    "curriculum_title": "నా పాఠ్యప్రణాళిక - STIU విద్యార్థి పోర్టల్",
    "profile_settings": "ప్రొఫైల్ సెట్టింగ్‌లు",
    "dashboard": "డాష్బోర్డ్",
    "logout": "లాగ్అవుట్",
    "progress_summary": "పాఠ్యప్రణాళిక పురోగతి సారాంశం",
    "total_credits": "మొత్తం క్రెడిట్లు",
    "completed_credits": "పూర్తయిన క్రెడిట్లు",
    "remaining_credits": "మిగిలిన క్రెడిట్లు",
    "completion_rate": "పూర్తి రేటు",
    "general_education": "సాధారణ విద్య",
    "humanities": "మానవతా శాస్త్రాలు",
    "social_sciences": "సామాజిక శాస్త్రాలు",
    "languages": "భాషలు",
    "science_math": "సైన్స్ & గణితం",
    "professional_courses": "ప్రొఫెషనల్ కోర్సులు",
    "core_courses": "కోర్ కోర్సులు",
    "major_requirements": "ప్రధాన అవసరాలు",
    "major_electives": "ప్రధాన ఎంపిక కోర్సులు",
    "specialization_tracks": "స్పెషలైజేషన్ ట్రాక్స్",
    "software_track": "సాఫ్ట్‌వేర్ ఇంజనీరింగ్",
    "ecommerce_track": "ఇ-కామర్స్ టెక్నాలజీ",
    "data_science_track": "డేటా సైన్స్",
    "network_track": "నెట్‌వర్క్ మరియు సెక్యూరిటీ",
    "other_requirements": "ఇతర అవసరాలు",
    "free_electives": "ఫ్రీ ఎలక్టివ్లు",
    "internship": "ఇంటర్న్‌షిప్",
    "save_progress": "పురోగతిని సేవ్ చేయండి",
    "save_success": "పురోగతి విజయవంతంగా సేవ్ చేయబడింది!",
    "loading_curriculum": "పాఠ్యప్రణాళిక లోడ్ అవుతోంది...",
    "course_completed": "పూర్తయింది",
    "course_in_progress": "పురోగతిలో ఉంది",
    "course_not_started": "ప్రారంభించలేదు",
    "credits": "క్రెడిట్లు",
    "year": "సంవత్సరం",
    "credits_unit": "క్రెడిట్లు",
    "prerequisite": "ముందస్తు అవసరం",
    "please_wait": "దయచేసి కాసేపు వేచి ఉండండి",
    "saving": "సేవ్ చేయబడుతోంది...",
    
    // Description translations
    "general_education_desc": "<strong>సాధారణ విద్య కోర్సులు (40 క్రెడిట్లు)</strong> - సాధారణ విద్య కోర్సులు మీ ప్రధాన విషయానికి ఆధారంగా పనిచేస్తాయి మరియు సమగ్రమైన జ్ఞానం మరియు నైపుణ్యాలను అభివృద్ధి చేయడంలో మీకు సహాయపడతాయి. మీరు క్రింది వర్గాలలో 10 విషయాలను ఎంచుకోవాలి. ఏదైనా ప్రత్యేక విషయాన్ని ఎప్పుడు తీసుకోవాలో నిర్ణయించడంలో మీకు సహాయపడటానికి మేము ఒక సంవత్సరాన్ని సిఫారసు చేస్తున్నాము.",
    "professional_courses_desc": "<strong>ప్రొఫెషనల్ కోర్సులు (100 క్రెడిట్లు)</strong> - ప్రొఫెషనల్ కోర్సులు మీ డిగ్రీ యొక్క ప్రధాన జ్ఞానం మరియు నైపుణ్యాలను రూపొందిస్తాయి మరియు మొత్తం 25 విషయాలు (100 క్రెడిట్లు) కలిగి ఉంటాయి. మీ ప్రాథమిక కోర్ కోర్సులు ఇతర IT విద్యార్థులతో కలిసి ముఖ్యమైన వ్యాపార సామర్థ్యాలను అభివృద్ధి చేయడంలో మీకు సహాయపడతాయి మరియు మీ ప్రధాన అవసరాలు సాధారణంగా IT యొక్క ప్రాథమిక జ్ఞానానికి సంబంధించిన మరింత అధునాతన అంశాలను కలిగి ఉంటాయి. మీ 5 ప్రధాన ఎంపిక కోర్సులు మీ అధ్యయనాలను నిర్దిష్ట వ్యాపార శాఖలో కేంద్రీకరించడానికి మిమ్మల్ని అనుమతిస్తాయి మరియు మైనర్ ఎంచుకునే ఎంపికను మీకు అందిస్తాయి.",
    "major_electives_desc": "<strong>ప్రధాన ఎంపిక కోర్సులు – దయచేసి క్రింది జాబితా నుండి 5 విషయాలు (20 క్రెడిట్లు) ఎంచుకోండి</strong> - అదే ట్రాక్ నుండి 20 క్రెడిట్లను విజయవంతంగా పూర్తి చేసిన విద్యార్థులు ఆ ట్రాక్ లో స్పెషలైజ్డ్ స్టడీ సర్టిఫికేట్ పొందుతారు. విద్యార్థులు ఈ ట్రాక్‌లను అనుసరించడానికి ఎంచుకోకపోతే, వారికి సర్టిఫికేట్ ఇవ్వబడదు.",
    "free_electives_desc": "<strong>ఫ్రీ ఎలక్టివ్లు (8 క్రెడిట్లు)</strong> - ఫ్రీ ఎలక్టివ్లు వ్యక్తిగత ఆసక్తి ప్రాంతంలో చదవడానికి మిమ్మల్ని అనుమతిస్తాయి. మీరు ఈ వర్గంలో 2 విషయాలను పూర్తి చేయాలి మరియు మీరు విశ్వవిద్యాలయంలో అందుబాటులో ఉన్న అర్హత కలిగిన ఏదైనా విషయాన్ని ఎంచుకోవచ్చు.",
    "internship_desc": "<strong>ఇంటర్న్‌షిప్ (12 క్రెడిట్లు)</strong> - మీ ఇంటర్న్‌షిప్ కోర్సు పని సమయంలో మీరు సంపాదించిన జ్ఞానం మరియు నైపుణ్యాలను ఆచరణలో ఉంచడానికి మరియు మీరు ఈ నైపుణ్యాలను ఎంత బాగా వర్తింపజేయగలరో ప్రతిబింబించడానికి మిమ్మల్ని అనుమతిస్తుంది. మీ ఇంటర్న్‌షిప్ మీ చివరి సెమిస్టర్‌లో, మీ అన్ని కోర్సు పనిని పూర్తి చేసిన తర్వాత తీసుకోవాలి మరియు గ్రాడ్యుయేషన్ కోసం మీకు చివరి 12 క్రెడిట్లను అందిస్తుంది."
  },
  bn: {
    "curriculum_title": "আমার পাঠ্যক্রম - STIU শিক্ষার্থী পোর্টাল",
    "profile_settings": "প্রোফাইল সেটিংস",
    "dashboard": "ড্যাশবোর্ড",
    "logout": "লগআউট",
    "progress_summary": "পাঠ্যক্রম অগ্রগতি সারাংশ",
    "total_credits": "মোট ক্রেডিট",
    "completed_credits": "সম্পন্ন ক্রেডিট",
    "remaining_credits": "অবশিষ্ট ক্রেডিট",
    "completion_rate": "সমাপ্তির হার",
    "general_education": "সাধারণ শিক্ষা",
    "humanities": "মানববিদ্যা",
    "social_sciences": "সামাজিক বিজ্ঞান",
    "languages": "ভাষা",
    "science_math": "বিজ্ঞান ও গণিত",
    "professional_courses": "পেশাদারী কোর্স",
    "core_courses": "মূল কোর্স",
    "major_requirements": "মেজর প্রয়োজনীয়তা",
    "major_electives": "মেজর ইলেকটিভ",
    "specialization_tracks": "বিশেষীকরণ ট্র্যাক",
    "software_track": "সফটওয়্যার ইঞ্জিনিয়ারিং",
    "ecommerce_track": "ই-কমার্স টেকনোলজি",
    "data_science_track": "ডেটা সাইন্স",
    "network_track": "নেটওয়ার্ক এবং নিরাপত্তা",
    "other_requirements": "অন্যান্য প্রয়োজনীয়তা",
    "free_electives": "মুক্ত ইলেকটিভ",
    "internship": "ইন্টার্নশিপ",
    "save_progress": "অগ্রগতি সংরক্ষণ করুন",
    "save_success": "অগ্রগতি সফলভাবে সংরক্ষিত হয়েছে!",
    "loading_curriculum": "পাঠ্যক্রম লোড হচ্ছে...",
    "course_completed": "সম্পন্ন",
    "course_in_progress": "চলমান",
    "course_not_started": "শুরু হয়নি",
    "credits": "ক্রেডিট",
    "year": "বছর",
    "credits_unit": "ক্রেডিট",
    "prerequisite": "পূর্বশর্ত",
    "please_wait": "অনুগ্রহ করে অপেক্ষা করুন",
    "saving": "সংরক্ষণ করা হচ্ছে...",
    
    // Description translations
    "general_education_desc": "<strong>সাধারণ শিক্ষা কোর্স (40 ক্রেডিট)</strong> - সাধারণ শিক্ষা কোর্সগুলি আপনার প্রধান বিষয়ের ভিত্তি হিসাবে কাজ করে এবং আপনাকে একটি সমগ্র জ্ঞান ও দক্ষতা বিকাশ করতে সহায়তা করে। আপনাকে নিম্নলিখিত বিভাগগুলিতে 10টি বিষয় নির্বাচন করতে হবে। আমরা একটি বছর সুপারিশ করেছি যাতে আপনাকে কোন নির্দিষ্ট বিষয়টি কখন নেওয়া উচিত তা সিদ্ধান্ত নিতে সাহায্য করে।",
    "professional_courses_desc": "<strong>পেশাদারী কোর্স (100 ক্রেডিট)</strong> - পেশাদারী কোর্সগুলি আপনার ডিগ্রির জ্ঞান ও দক্ষতার প্রধান অংশ গঠন করে এবং মোট 25টি বিষয় (100 ক্রেডিট) নিয়ে গঠিত। আপনার মৌলিক মূল কোর্সগুলি অন্যান্য IT শিক্ষার্থীদের সাথে প্রয়োজনীয় ব্যবসায়িক দক্ষতা বিকাশে আপনাকে সাহায্য করবে এবং আপনার প্রধান প্রয়োজনীয়তাগুলিতে সাধারণত IT-এর মৌলিক জ্ঞান সম্পর্কিত আরও উন্নত বিষয়গুলি জড়িত থাকবে। আপনার 5টি প্রধান ইলেকটিভ কোর্সগুলি আপনাকে একটি নির্দিষ্ট ব্যবসায়িক শাখায় আপনার পড়াশোনা কেন্দ্রীভূত করতে দেবে এবং আপনাকে একটি মাইনর নির্বাচন করার বিকল্প দেবে।",
    "major_electives_desc": "<strong>মেজর ইলেকটিভ – অনুগ্রহ করে নিম্নলিখিত তালিকা থেকে 5টি বিষয় (20 ক্রেডিট) নির্বাচন করুন</strong> - যেসব শিক্ষার্থী একই ট্র্যাকের মধ্যে থেকে 20 ক্রেডিট সফলভাবে সম্পূর্ণ করে তাদের সেই ট্র্যাকের বিশেষায়িত পড়াশোনার সার্টিফিকেট প্রদান করা হবে। যদি শিক্ষার্থীরা এই ট্র্যাকগুলি অনুসরণ না করে, তবে তাদের সার্টিফিকেট প্রদান করা হবে না।",
    "free_electives_desc": "<strong>মুক্ত ইলেকটিভ (8 ক্রেডিট)</strong> - মুক্ত ইলেকটিভ আপনাকে ব্যক্তিগত আগ্রহের একটি ক্ষেত্রে অধ্যয়ন করতে দেয়। আপনাকে এই বিভাগে 2টি বিষয় সম্পূর্ণ করতে হবে এবং আপনি বিশ্ববিদ্যালয়ে দেওয়া আপনার যোগ্যতা সম্পন্ন যে কোনও বিষয় নির্বাচন করতে পারেন।",
    "internship_desc": "<strong>ইন্টার্নশিপ (12 ক্রেডিট)</strong> - আপনার ইন্টার্নশিপ আপনাকে কোর্সওয়ার্কের সময় অর্জিত জ্ঞান ও দক্ষতা অনুশীলনে প্রয়োগ করতে এবং আপনি এই দক্ষতাগুলি কতটা ভালোভাবে প্রয়োগ করতে পারেন তা প্রতিফলিত করতে দেয়। আপনার ইন্টার্নশিপ আপনার শেষ সেমিস্টারে, আপনার সমস্ত কোর্সওয়ার্ক সম্পূর্ণ করার পরে নিতে হবে এবং স্নাতক হওয়ার জন্য আপনাকে চূড়ান্ত 12 ক্রেডিট প্রদান করবে।"
  },
  lo: {
    "curriculum_title": "ຫຼັກສູດຂອງຂ້ອຍ - STIU ພອດທານີມະຫາວິທະຍາໄລ",
    "profile_settings": "ການຕັ້ງຄ່າໂປຣໄຟລ໌",
    "dashboard": "ແຜງໜ້າຈໍ",
    "logout": "ອອກຈາກລະບົບ",
    "progress_summary": "ສະຫຼຸບຄວາມຄືບໜ້າຫຼັກສູດ",
    "total_credits": "ໜ່ວຍກິດທັງໝົດ",
    "completed_credits": "ໜ່ວຍກິດທີ່ສຳເລັດ",
    "remaining_credits": "ໜ່ວຍກິດທີ່ເຫຼືອ",
    "completion_rate": "ອັດຕາສ່ວນການສຳເລັດ",
    "general_education": "ການສຶກສາທົ່ວໄປ",
    "humanities": "ມະນຸດສາດ",
    "social_sciences": "ວິທະຍາສາດສັງຄົມ",
    "languages": "ພາສາ",
    "science_math": "ວິທະຍາສາດ ແລະ ຄະນິດສາດ",
    "professional_courses": "ວິຊາຊີບ",
    "core_courses": "ວິຊາພື້ນຖານ",
    "major_requirements": "ຂໍ້ກຳນົດສາຂາຫຼັກ",
    "major_electives": "ວິຊາເລືອກສາຂາຫຼັກ",
    "specialization_tracks": "ສາຂາເພີ່ມເຕີມ",
    "software_track": "ວິສະວະກຳຊອບແວ",
    "ecommerce_track": "ເຕັກໂນໂລຊີອີຄອມເມີຊ",
    "data_science_track": "ວິທະຍາສາດຂໍ້ມູນ",
    "network_track": "ເຄືອຂ່າຍ ແລະ ຄວາມປອດໄພ",
    "other_requirements": "ຂໍ້ກຳນົດອື່ນໆ",
    "free_electives": "ວິຊາເລືອກອິດສະຫຼະ",
    "internship": "ການຝຶກງານ",
    "save_progress": "ບັນທຶກຄວາມຄືບໜ້າ",
    "save_success": "ບັນທຶກຄວາມຄືບໜ້າສຳເລັດແລ້ວ!",
    "loading_curriculum": "ກຳລັງໂຫຼດຫຼັກສູດ...",
    "course_completed": "ສຳເລັດແລ້ວ",
    "course_in_progress": "ກຳລັງດຳເນີນ",
    "course_not_started": "ຍັງບໍ່ໄດ້ເລີ່ມ",
    "credits": "ໜ່ວຍກິດ",
    "year": "ປີ",
    "credits_unit": "ໜ່ວຍກິດ",
    "prerequisite": "ເງື່ອນໄຂກ່ອນ",
    "please_wait": "ກະລຸນາລໍຖ້າ",
    "saving": "ກຳລັງບັນທຶກ...",
    
    // Description translations
    "general_education_desc": "<strong>ວິຊາການສຶກສາທົ່ວໄປ (40 ໜ່ວຍກິດ)</strong> - ວິຊາການສຶກສາທົ່ວໄປເຮັດຫນ້າທີ່ເປັນພື້ນຖານສໍາລັບສາຂາຫຼັກຂອງທ່ານແລະຊ່ວຍທ່ານພັດທະນາຄວາມຮູ້ແລະທັກສະທີ່ກວ້າງຂວາງ. ທ່ານຕ້ອງເລືອກຮຽນ 10 ວິຊາໃນໝວດຕໍ່ໄປນີ້. ພວກເຮົາໄດ້ແນະນຳປີຮຽນເພື່ອຊ່ວຍໃຫ້ທ່ານຕັດສິນໃຈເວລາທີ່ຈະເອົາວິຊາໃດໜຶ່ງ.",
    "professional_courses_desc": "<strong>ວິຊາຊີບ (100 ໜ່ວຍກິດ)</strong> - ວິຊາຊີບເຮັດຫນ້າທີ່ເປັນສ່ວນຫຼັກຂອງຄວາມຮູ້ແລະທັກສະຂອງປະລິນຍາຂອງທ່ານແລະປະກອບມີທັງຫມົດ 25 ວິຊາ (100 ໜ່ວຍກິດ). ວິຊາພື້ນຖານຂອງທ່ານຈະຊ່ວຍໃຫ້ທ່ານພັດທະນາຄວາມສາມາດດ້ານທຸລະກິດທີ່ຈໍາເປັນຮ່ວມກັບນັກສຶກສາ IT ອື່ນໆ, ແລະຂໍ້ກໍານົດສາຂາຫຼັກຂອງທ່ານຈະປະກອບມີຫົວຂໍ້ຂັ້ນສູງກວ່າທີ່ກ່ຽວຂ້ອງກັບຄວາມຮູ້ພື້ນຖານດ້ານ IT. ວິຊາເລືອກສາຂາຫຼັກ 5 ວິຊາຂອງທ່ານຈານັ້ນຈະຊ່ວຍໃຫ້ທ່ານເອົາໃຈໃສ່ການສຶກສາຂອງທ່ານໃນສາຂາທຸລະກິດສະເພາະແລະໃຫ້ທ່ານມີທາງເລືອກໃນການເລືອກວິຊາຮອງ.",
    "major_electives_desc": "<strong>ວິຊາເລືອກສາຂາຫຼັກ – ກະລຸນາເລືອກ 5 ວິຊາ (20 ໜ່ວຍກິດ) ຈາກບັນຊີລາຍຊື່ຕໍ່ໄປນີ້</strong> - ນັກສຶກສາທີ່ສຳເລັດ 20 ໜ່ວຍກິດຈາກສາຂາເພີ່ມເຕີມດຽວກັນຈະໄດ້ຮັບໃບຢັ້ງຢືນການສຶກສາເພີ່ມເຕີມໃນສາຂານັ້ນ. ຖ້ານັກສຶກສາບໍ່ເລືອກຕິດຕາມສາຂາເພີ່ມເຕີມເຫຼົ່ານີ້, ພວກເຂົາຈະບໍ່ໄດ້ຮັບໃບຢັ້ງຢືນ.",
    "free_electives_desc": "<strong>ວິຊາເລືອກອິດສະຫຼະ (8 ໜ່ວຍກິດ)</strong> - ວິຊາເລືອກອິດສະຫຼະຊ່ວຍໃຫ້ທ່ານສາມາດສຶກສາໃນພາກສ່ວນທີ່ທ່ານສົນໃຈ. ທ່ານຕ້ອງໄດ້ສໍາເລັດ 2 ວິຊາໃນໝວດນີ້ ແລະ ທ່ານສາມາດເລືອກວິຊາໃດກໍ່ໄດ້ທີ່ທ່ານມີສິດໄດ້ຮັບໃນມະຫາວິທະຍາໄລ.",
    "internship_desc": "<strong>ການຝຶກງານ (12 ໜ່ວຍກິດ)</strong> - ການຝຶກງານຂອງທ່ານຊ່ວຍໃຫ້ທ່ານເອົາຄວາມຮູ້ແລະທັກສະທີ່ທ່ານໄດ້ຮັບໃນໄລຍະການຮຽນມາປະຕິບັດແລະສະທ້ອນວ່າທ່ານສາມາດໃຊ້ທັກສະເຫຼົ່ານີ້ໄດ້ດີປານໃດ. ການຝຶກງານຂອງທ່ານຈະຖືກເອົາໃນພາກຮຽນສຸດທ້າຍ, ຫຼັງຈາກສໍາເລັດວິຊາຮຽນທັງຫມົດຂອງທ່ານແລ້ວ ແລະ ຈະໃຫ້ໜ່ວຍກິດສຸດທ້າຍ 12 ໜ່ວຍກິດໃຫ້ທ່ານເພື່ອຈົບການສຶກສາ."
  },
  km: {
    "curriculum_title": "កម្មវិធីសិក្សារបស់ខ្ញុំ - វិបផតថលសិស្ស STIU",
    "profile_settings": "ការកំណត់ប្រវត្តិរូប",
    "dashboard": "ផ្ទាំងគ្រប់គ្រង",
    "logout": "ចាកចេញ",
    "progress_summary": "សង្ខេបការរីកចម្រើនកម្មវិធីសិក្សា",
    "total_credits": "គ្រីឌីតសរុប",
    "completed_credits": "គ្រីឌីតដែលបានបញ្ចប់",
    "remaining_credits": "គ្រីឌីតដែលនៅសល់",
    "completion_rate": "អត្រាការបញ្ចប់",
    "general_education": "ការអប់រំទូទៅ",
    "humanities": "មនុស្សសាស្ត្រ",
    "social_sciences": "វិទ្យាសាស្ត្រសង្គម",
    "languages": "ភាសា",
    "science_math": "វិទ្យាសាស្ត្រ និងគណិតវិទ្យា",
    "professional_courses": "មុខវិជ្ជាវិជ្ជាជីវៈ",
    "core_courses": "មុខវិជ្ជាស្នូល",
    "major_requirements": "តម្រូវការជំនាញ",
    "major_electives": "មុខវិជ្ជាជំនាញជ្រើសរើស",
    "specialization_tracks": "ផ្លូវឯកទេស",
    "software_track": "វិស្វកម្មសូហ្វវែរ",
    "ecommerce_track": "បច្ចេកវិទ្យាពាណិជ្ជកម្មអេឡិចត្រូនិក",
    "data_science_track": "វិទ្យាសាស្ត្រទិន្នន័យ",
    "network_track": "បណ្តាញ និងសុវត្ថិភាព",
    "other_requirements": "តម្រូវការផ្សេងៗ",
    "free_electives": "មុខវិជ្ជាជ្រើសរើសសេរី",
    "internship": "ការសម្រេចការងារ",
    "save_progress": "រក្សាទុកការរីកចម្រើន",
    "save_success": "ការរីកចម្រើនត្រូវបានរក្សាទុកដោយជោគជ័យ!",
    "loading_curriculum": "កំពុងផ្ទុកកម្មវិធីសិក្សា...",
    "course_completed": "បានបញ្ចប់",
    "course_in_progress": "កំពុងដំណើរការ",
    "course_not_started": "មិនទាន់ចាប់ផ្តើម",
    "credits": "គ្រីឌីត",
    "year": "ឆ្នាំ",
    "credits_unit": "គ្រីឌីត",
    "prerequisite": "លក្ខខណ្ឌចាំបាច់មុន",
    "please_wait": "សូមរង់ចាំមួយភ្លែត",
    "saving": "កំពុងរក្សាទុក...",
    
    // Description translations
    "general_education_desc": "<strong>មុខវិជ្ជាអប់រំទូទៅ (40 គ្រីឌីត)</strong> - មុខវិជ្ជាអប់រំទូទៅដើរតួជាគ្រឹះសម្រាប់ជំនាញសំខាន់របស់អ្នក និងជួយអ្នកអភិវឌ្ឍចំណេះដឹង និងជំនាញដ៏ទូលំទូលាយ។ អ្នកត្រូវតែជ្រើសរើស 10 មុខវិជ្ជាក្នុងចំណោមប្រភេទខាងក្រោម។ យើងបានណែនាំឆ្នាំដើម្បីជួយអ្នកសម្រេចចិត្តពេលវេលាដែលត្រូវយកមុខវិជ្ជាណាមួយ។",
    "professional_courses_desc": "<strong>មុខវិជ្ជាវិជ្ជាជីវៈ (100 គ្រីឌីត)</strong> - មុខវិជ្ជាវិជ្ជាជីវៈដើរតួជាផ្នែកសំខាន់នៃចំណេះដឹង និងជំនាញនៃសញ្ញាប័ត្ររបស់អ្នក ហើយមានចំនួន 25 មុខវិជ្ជាសរុប (100 គ្រីឌីត)។ មុខវិជ្ជាស្នូលមូលដ្ឋានរបស់អ្នកនឹងជួយអ្នកអភិវឌ្ឍសមត្ថភាពអាជីវកម្មសំខាន់ៗជាមួយនិស្សិត IT ផ្សេងទៀត ហើយតម្រូវការជំនាញសំខាន់របស់អ្នកនឹងពាក់ព័ន្ធនឹងប្រធានបទកម្រិតខ្ពស់ទៀតទាក់ទងនឹងចំណេះដឹងមូលដ្ឋានរបស់ IT។ មុខវិជ្ជាជំនាញជ្រើសរើសចំនួន 5 របស់អ្នកនឹងអនុញ្ញាតឱ្យអ្នកផ្តោតការសិក្សារបស់អ្នកលើសាខាអាជីវកម្មជាក់លាក់ និងផ្តល់ជម្រើសឱ្យអ្នកក្នុងការជ្រើសរើសជំនាញរង។",
    "major_electives_desc": "<strong>មុខវិជ្ជាជំនាញជ្រើសរើស – សូមជ្រើសរើស 5 មុខវិជ្ជា (20 គ្រីឌីត) ពីបញ្ជីខាងក្រោម</strong> - និស្សិតដែលបញ្ចប់ដោយជោគជ័យ 20 គ្រីឌីតពីក្នុងផ្លូវឯកទេសតែមួយនឹងទទួលបានវិញ្ញាបនបត្រសិក្សាឯកទេសនៅក្នុងផ្លូវនោះ។ ប្រសិនបើនិស្សិតមិនជ្រើសរើសតាមផ្លូវទាំងនេះទេ ពួកគេនឹងមិនទទួលបានវិញ្ញាបនបត្រនោះទេ។",
    "free_electives_desc": "<strong>មុខវិជ្ជាជ្រើសរើសសេរី (8 គ្រីឌីត)</strong> - មុខវិជ្ជាជ្រើសរើសសេរីអនុញ្ញាតឱ្យអ្នកសិក្សាក្នុងផ្នែកដែលអ្នកចាប់អារម្មណ៍ផ្ទាល់ខ្លួន។ អ្នកត្រូវតែបញ្ចប់ 2 មុខវិជ្ជាក្នុងប្រភេទនេះ ហើយអ្នកអាចជ្រើសរើសមុខវិជ្ជាណាមួយដែលអ្នកមានសិទ្ធិទទួលបានដែលបានផ្តល់ឱ្យនៅសាកលវិទ្យាល័យ។",
    "internship_desc": "<strong>ការសម្រេចការងារ (12 គ្រីឌីត)</strong> - ការសម្រេចការងាររបស់អ្នកអនុញ្ញាតឱ្យអ្នកអនុវត្តចំណេះដឹង និងជំនាញដែលអ្នកទទួលបានក្នុងអំឡុងពេលសិក្សា និងឆ្លុះបញ្ចាំងពីរបៀបដែលអ្នកអាចអនុវត្តជំនាញទាំងនេះបានល្អ។ ការសម្រេចការងាររបស់អ្នកត្រូវបានអនុវត្តនៅក្នុងវគ្គសិក្សាចុងក្រោយ បន្ទាប់ពីបញ្ចប់មុខវិជ្ជាទាំងអស់របស់អ្នក ហើយនឹងផ្តល់គ្រីឌីតចុងក្រោយចំនួន 12 ដល់អ្នកសម្រាប់បញ្ចប់ការសិក្សា។"
  },
  my: {
    "curriculum_title": "ကျွန်ုပ်၏သင်ရိုးညွှန်းတမ်း - STIU ကျောင်းသားပေါ်တယ်",
    "profile_settings": "ကိုယ်ရေးအချက်အလက် ဆက်တင်များ",
    "dashboard": "ဒိုင်ခွက်",
    "logout": "ထွက်ရန်",
    "progress_summary": "သင်ရိုးညွှန်းတမ်း တိုးတက်မှု အကျဉ်းချုပ်",
    "total_credits": "စုစုပေါင်း ယူနစ်",
    "completed_credits": "ပြီးဆုံးပြီး ယူနစ်",
    "remaining_credits": "ကျန်ရှိ ယူနစ်",
    "completion_rate": "ပြီးမြောက်မှုနှုန်း",
    "general_education": "ယေဘုယျ ပညာရေး",
    "humanities": "လူမှုရေးသိပ္ပံ",
    "social_sciences": "လူမှုရေးသိပ္ပံ",
    "languages": "ဘာသာစကားများ",
    "science_math": "သိပ္ပံနှင့် သင်္ချာ",
    "professional_courses": "အသက်မွေးဝမ်းကြောင်း သင်တန်းများ",
    "core_courses": "အခြေခံ သင်တန်းများ",
    "major_requirements": "အဓိက လိုအပ်ချက်များ",
    "major_electives": "အဓိက ရွေးချယ်သင်တန်းများ",
    "specialization_tracks": "အထူးပြု လမ်းကြောင်းများ",
    "software_track": "ဆော့ဖ်ဝဲအင်ဂျင်နီယာ",
    "ecommerce_track": "အီလက်ထရွန်းနစ်စီးပွားရေးနည်းပညာ",
    "data_science_track": "ဒေတာသိပ္ပံ",
    "network_track": "ကွန်ယက်နှင့်လုံခြုံရေး",
    "other_requirements": "အခြားလိုအပ်ချက်များ",
    "free_electives": "လွတ်လပ်ရွေးချယ်သင်တန်းများ",
    "internship": "လက်တွေ့သင်တန်း",
    "save_progress": "တိုးတက်မှု သိမ်းဆည်းရန်",
    "save_success": "တိုးတက်မှု အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ!",
    "loading_curriculum": "သင်ရိုးညွှန်းတမ်း တင်နေသည်...",
    "course_completed": "ပြီးဆုံးပြီ",
    "course_in_progress": "ဆောင်ရွက်ဆဲ",
    "course_not_started": "စတင်မထားသေး",
    "credits": "ယူနစ်",
    "year": "နှစ်",
    "credits_unit": "ယူနစ်",
    "prerequisite": "ကြိုတင်လိုအပ်ချက်",
    "please_wait": "ကျေးဇူးပြု၍ စောင့်ပါ",
    "saving": "သိမ်းဆည်းနေသည်...",
    
    // Description translations
    "general_education_desc": "<strong>ယေဘုယျပညာရေးသင်တန်းများ (40 ယူနစ်)</strong> - ယေဘုယျပညာရေးသင်တန်းများသည် သင့်အဓိကဘာသာရပ်အတွက် အခြေခံအုတ်မြစ်အဖြစ်ဆောင်ရွက်ပြီး ကျယ်ပြန့်သောဗဟုသုတနှင့် ကျွမ်းကျင်မှုများကို ဖွံ့ဖြိုးတိုးတက်စေရန် ကူညီပေးပါသည်။ သင့်အနေဖြင့် အောက်ပါအမျိုးအစားများမှ ဘာသာရပ် ၁၀ ခုကို ရွေးချယ်ရပါမည်။ မည်သည့်ဘာသာရပ်ကို မည်သည့်အချိန်တွင် ယူရမည်ကို ဆုံးဖြတ်ရန် ကူညီရန် ကျွန်ုပ်တို့သည် နှစ်တစ်နှစ်ကို အကြံပြုထားပါသည်။",
    "professional_courses_desc": "<strong>အသက်မွေးဝမ်းကြောင်းသင်တန်းများ (100 ယူနစ်)</strong> - အသက်မွေးဝမ်းကြောင်းသင်တန်းများသည် သင့်ဒီဂရီ၏ အဓိကဗဟုသုတနှင့် ကျွမ်းကျင်မှုများအဖြစ် ဆောင်ရွက်ပြီး စုစုပေါင်း ဘာသာရပ် ၂၅ ခု (ယူနစ် ၁၀၀) ပါဝင်ပါသည်။ သင့်၏အခြေခံအဓိကသင်တန်းများသည် အခြား IT ကျောင်းသားများနှင့်အတူ အရေးကြီးသော စီးပွားရေးစွမ်းရည်များ ဖွံ့ဖြိုးတိုးတက်စေရန် ကူညီပေးပြီး သင့်၏အဓိကလိုအပ်ချက်များတွင် IT ၏အခြေခံဗဟုသုတနှင့် ပတ်သက်သည့် ပိုမိုအဆင့်မြင့်သော ခေါင်းစဉ်များ ပါဝင်လေ့ရှိပါသည်။ သင့်၏အဓိကရွေးချယ်သင်တန်း ၅ ခုသည် သင့်အား သင့်ပညာရေးကို သီးခြားစီးပွားရေးဌာနတစ်ခုတွင် အာရုံစိုက်နိုင်စေပြီး သေးငယ်သောဘာသာရပ်တစ်ခုကို ရွေးချယ်နိုင်သည့် ရွေးချယ်ခွင့်ကို ပေးပါသည်။",
    "major_electives_desc": "<strong>အဓိကရွေးချယ်သင်တန်းများ – ကျေးဇူးပြု၍ အောက်ပါစာရင်းမှ ဘာသာရပ် ၅ ခု (ယူနစ် ၂၀) ကို ရွေးချယ်ပါ</strong> - တူညီသောလမ်းကြောင်းအတွင်းမှ ယူနစ် ၂၀ ကို အောင်မြင်စွာ ပြီးမြောက်သူ ကျောင်းသားများသည် ထိုလမ်းကြောင်းအတွက် အထူးပြုလေ့လာမှုလက်မှတ်ကို ရရှိမည်ဖြစ်သည်။ ကျောင်းသားများသည် ဤလမ်းကြောင်းများကို လိုက်နာရန် မရွေးချယ်ပါက လက်မှတ်ကို ချီးမြှင့်မည်မဟုတ်ပါ။",
    "free_electives_desc": "<strong>လွတ်လပ်ရွေးချယ်သင်တန်းများ (8 ယူနစ်)</strong> - လွတ်လပ်ရွေးချယ်သင်တန်းများသည် သင့်ကိုယ်ပိုင်စိတ်ဝင်စားမှုနယ်ပယ်တွင် လေ့လာခွင့်ပြုပါသည်။ ဤအမျိုးအစားတွင် ဘာသာရပ် ၂ ခုကို သင်ပြီးမြောက်ရပါမည်ဖြစ်ပြီး တက္ကသိုလ်တွင် ပေးအပ်သည့် သင့်တော်သော မည်သည့်ဘာသာရပ်ကိုမဆို ရွေးချယ်နိုင်ပါသည်။",
    "internship_desc": "<strong>လက်တွေ့သင်တန်း (12 ယူနစ်)</strong> - သင့်လက်တွေ့သင်တန်းသည် သင်တန်းသားဘဝအတွင်း သင့်ရရှိထားသော ဗဟုသုတနှင့် ကျွမ်းကျင်မှုများကို လက်တွေ့အသုံးချနိုင်စေရန် နှင့် ဤကျွမ်းကျင်မှုများကို သင်မည်မျှကောင်းစွာ အသုံးချနိုင်သည်ကို တွေးတောဆင်ခြင်နိုင်စေရန် ခွင့်ပြုပေးပါသည်။ သင့်လက်တွေ့သင်တန်းကို သင့်သင်တန်းများအားလုံးပြီးဆုံးပြီးနောက် နောက်ဆုံးသင်တန်းကာလတွင် ယူရပါမည်ဖြစ်ပြီး ဘွဲ့ရရန် သင့်အတွက် နောက်ဆုံးယူနစ် ၁၂ ခုကို ပေးဆောင်ပါမည်။"
  },
  ne: {
    "curriculum_title": "मेरो पाठ्यक्रम - STIU विद्यार्थी पोर्टल",
    "profile_settings": "प्रोफाइल सेटिङहरू",
    "dashboard": "ड्यासबोर्ड",
    "logout": "लगआउट",
    "progress_summary": "पाठ्यक्रम प्रगति सारांश",
    "total_credits": "कुल क्रेडिट",
    "completed_credits": "पूरा भएको क्रेडिट",
    "remaining_credits": "बाँकी क्रेडिट",
    "completion_rate": "पूर्णता दर",
    "general_education": "सामान्य शिक्षा",
    "humanities": "मानविकी",
    "social_sciences": "सामाजिक विज्ञान",
    "languages": "भाषाहरू",
    "science_math": "विज्ञान र गणित",
    "professional_courses": "व्यावसायिक पाठ्यक्रम",
    "core_courses": "मुख्य पाठ्यक्रम",
    "major_requirements": "मुख्य आवश्यकताहरू",
    "major_electives": "मुख्य वैकल्पिक पाठ्यक्रम",
    "specialization_tracks": "विशेषीकरण ट्र्याकहरू",
    "software_track": "सफ्टवेयर इन्जिनियरिङ",
    "ecommerce_track": "ई-कमर्स प्रविधि",
    "data_science_track": "डाटा विज्ञान",
    "network_track": "नेटवर्क र सुरक्षा",
    "other_requirements": "अन्य आवश्यकताहरू",
    "free_electives": "स्वतन्त्र वैकल्पिक पाठ्यक्रम",
    "internship": "इन्टर्नसिप",
    "save_progress": "प्रगति बचत गर्नुहोस्",
    "save_success": "प्रगति सफलतापूर्वक बचत भयो!",
    "loading_curriculum": "पाठ्यक्रम लोड हुँदैछ...",
    "course_completed": "पूरा भयो",
    "course_in_progress": "प्रगतिमा",
    "course_not_started": "सुरु भएको छैन",
    "credits": "क्रेडिट",
    "year": "वर्ष",
    "credits_unit": "क्रेडिट",
    "prerequisite": "पूर्व आवश्यकता",
    "please_wait": "कृपया प्रतीक्षा गर्नुहोस्",
    "saving": "बचत हुँदैछ...",
    
    // Description translations
    "general_education_desc": "<strong>सामान्य शिक्षा पाठ्यक्रम (40 क्रेडिट)</strong> - सामान्य शिक्षा पाठ्यक्रम तपाईंको मुख्य विषयको लागि आधारको रूपमा काम गर्दछ र तपाईंलाई ज्ञान र क्षमताहरूको समग्र सेट विकास गर्न मद्दत गर्दछ। तपाईंले तलका श्रेणीहरूमा १० विषयहरू छनौट गर्नुपर्छ। हामीले कुनै पनि दिइएको विषय कहिले लिने भन्ने निर्णय गर्न मद्दत गर्न एक वर्ष सिफारिस गरेका छौं।",
    "professional_courses_desc": "<strong>व्यावसायिक पाठ्यक्रम (100 क्रेडिट)</strong> - व्यावसायिक पाठ्यक्रम तपाईंको डिग्रीको ज्ञान र क्षमताहरूको मुख्य भागको रूपमा काम गर्दछ र कुल २५ विषयहरू (१०० क्रेडिट) मिलेर बनेको हुन्छ। तपाईंको आधारभूत मुख्य पाठ्यक्रमहरूले अन्य आईटी विद्यार्थीहरूसँग मिलेर आवश्यक व्यवसाय क्षमताहरू विकास गर्न मद्दत गर्दछ, र तपाईंको मुख्य आवश्यकताहरूले सामान्यतया आईटीको आधारभूत ज्ञानसँग सम्बन्धित अधिक उन्नत विषयहरू समावेश गर्दछ। तपाईंको ५ वटा मुख्य वैकल्पिक पाठ्यक्रमहरूले तपाईंलाई विशेष व्यवसाय शाखामा आफ्नो अध्ययन केन्द्रित गर्न अनुमति दिन्छ र तपाईंलाई सानो विषय छनौट गर्ने विकल्प दिन्छ।",
    "major_electives_desc": "<strong>मुख्य वैकल्पिक पाठ्यक्रम – कृपया तलको सूचीबाट ५ वटा विषयहरू (२० क्रेडिट) छनौट गर्नुहोस्</strong> - एउटै ट्र्याक भित्रबाट २० क्रेडिट सफलतापूर्वक पूरा गर्ने विद्यार्थीहरूलाई त्यो ट्र्याकमा विशेषीकृत अध्ययनको प्रमाणपत्र प्रदान गरिनेछ। यदि विद्यार्थीहरूले यी ट्र्याकहरू पछ्याउन छनौट गर्दैनन् भने, उनीहरूलाई प्रमाणपत्र प्रदान गरिने छैन।",
    "free_electives_desc": "<strong>स्वतन्त्र वैकल्पिक पाठ्यक्रम (8 क्रेडिट)</strong> - स्वतन्त्र वैकल्पिक पाठ्यक्रमहरूले तपाईंलाई व्यक्तिगत रुचिको क्षेत्रमा अध्ययन गर्न अनुमति दिन्छ। तपाईंले यो श्रेणीमा २ वटा विषयहरू पूरा गर्नुपर्छ र तपाईं विश्वविद्यालयमा प्रस्तावित कुनै पनि योग्य विषय छनौट गर्न सक्नुहुन्छ।",
    "internship_desc": "<strong>इन्टर्नसिप (12 क्रेडिट)</strong> - तपाईंको इन्टर्नसिपले तपाईंलाई पाठ्यक्रम कार्यको समयमा प्राप्त गरेको ज्ञान र क्षमताहरू अभ्यासमा लागू गर्न अनुमति दिन्छ र तपाईंले यी क्षमताहरू कति राम्ररी लागू गर्न सक्नुहुन्छ भन्ने प्रतिबिम्बित गर्न अनुमति दिन्छ। तपाईंको इन्टर्नसिप तपाईंको सबै पाठ्यक्रम कार्य पूरा गरेपछि तपाईंको अन्तिम सेमेस्टरमा लिनुपर्छ र स्नातक हुन तपाईंलाई अन्तिम १२ क्रेडिट प्रदान गर्नेछ।"
  },
  pa: {
    "curriculum_title": "ਮੇਰਾ ਕਰਿਕੂਲਮ - STIU ਵਿਦਿਆਰਥੀ ਪੋਰਟਲ",
    "profile_settings": "ਪ੍ਰੋਫਾਈਲ ਸੈਟਿੰਗਜ਼",
    "dashboard": "ਡੈਸ਼ਬੋਰਡ",
    "logout": "ਲੌਗਆਉਟ",
    "progress_summary": "ਕਰਿਕੂਲਮ ਪ੍ਰੋਗਰੈਸ ਸਾਰਾਂਸ਼",
    "total_credits": "ਕੁੱਲ ਕ੍ਰੈਡਿਟ",
    "completed_credits": "ਪੂਰੇ ਕ੍ਰੈਡਿਟ",
    "remaining_credits": "ਬਾਕੀ ਕ੍ਰੈਡਿਟ",
    "completion_rate": "ਪੂਰਤੀ ਦਰ",
    "general_education": "ਆਮ ਸਿੱਖਿਆ",
    "humanities": "ਮਨੁੱਖਤਾ",
    "social_sciences": "ਸਮਾਜਿਕ ਵਿਗਿਆਨ",
    "languages": "ਭਾਸ਼ਾਵਾਂ",
    "science_math": "ਵਿਗਿਆਨ ਅਤੇ ਗਣਿਤ",
    "professional_courses": "ਪੇਸ਼ੇਵਰ ਕੋਰਸ",
    "core_courses": "ਮੁੱਖ ਕੋਰਸ",
    "major_requirements": "ਮੇਜਰ ਜ਼ਰੂਰਤਾਂ",
    "major_electives": "ਮੇਜਰ ਇਲੈਕਟਿਵ",
    "specialization_tracks": "ਸਪੈਸ਼ਲਾਈਜ਼ੇਸ਼ਨ ਟਰੈਕ",
    "software_track": "ਸਾੱਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ",
    "ecommerce_track": "ਈ-ਕਾਮਰਸ ਟੈਕਨਾਲੋਜੀ",
    "data_science_track": "ਡਾਟਾ ਸਾਇੰਸ",
    "network_track": "ਨੈੱਟਵਰਕ ਅਤੇ ਸੁਰੱਖਿਆ",
    "other_requirements": "ਹੋਰ ਜ਼ਰੂਰਤਾਂ",
    "free_electives": "ਮੁਫਤ ਇਲੈਕਟਿਵ",
    "internship": "ਇੰਟਰਨਸ਼ਿਪ",
    "save_progress": "ਪ੍ਰੋਗਰੈਸ ਸੰਭਾਲੋ",
    "save_success": "ਪ੍ਰੋਗਰੈਸ ਸਫਲਤਾਪੂਰਵਕ ਸੰਭਾਲੀ ਗਈ!",
    "loading_curriculum": "ਕਰਿਕੂਲਮ ਲੋਡ ਹੋ ਰਹੀ ਹੈ...",
    "course_completed": "ਪੂਰਾ ਹੋਇਆ",
    "course_in_progress": "ਚੱਲ ਰਿਹਾ ਹੈ",
    "course_not_started": "ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਇਆ",
    "credits": "ਕ੍ਰੈਡਿਟ",
    "year": "ਸਾਲ",
    "credits_unit": "ਕ੍ਰੈਡਿਟ",
    "prerequisite": "ਪ੍ਰੀਜ਼ੀ",
    "please_wait": "ਕਿਰਪਾ ਕਰਕੇ ਇੰਤਜ਼ਾਰ ਕਰੋ",
    "saving": "ਸੰਭਾਲਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    
    // Description translations
    "general_education_desc": "<strong>ਆਮ ਸਿੱਖਿਆ ਕੋਰਸ (40 ਕ੍ਰੈਡਿਟ)</strong> - ਆਮ ਸਿੱਖਿਆ ਕੋਰਸ ਤੁਹਾਡੇ ਮੁੱਖ ਵਿਸ਼ੇ ਦੇ ਆਧਾਰ ਵਜੋਂ ਕੰਮ ਕਰਦੇ ਹਨ ਅਤੇ ਤੁਹਾਨੂੰ ਗਿਆਨ ਅਤੇ ਹੁਨਰ ਦਾ ਇੱਕ ਵਿਆਪਕ ਸਮੂਹ ਵਿਕਸਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ। ਤੁਹਾਨੂੰ ਹੇਠ ਲਿਖੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚੋਂ 10 ਵਿਸ਼ੇ ਚੁਣਨੇ ਹੋਣਗੇ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਇਹ ਤੈਅ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਇੱਕ ਸਾਲ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਹੈ ਕਿ ਕਿਸੇ ਵੀ ਦਿੱਤੇ ਵਿਸ਼ੇ ਨੂੰ ਕਦੋਂ ਲੈਣਾ ਹੈ।",
    "professional_courses_desc": "<strong>ਪੇਸ਼ੇਵਰ ਕੋਰਸ (100 ਕ੍ਰੈਡਿਟ)</strong> - ਪੇਸ਼ੇਵਰ ਕੋਰਸ ਤੁਹਾਡੀ ਡਿਗਰੀ ਦੇ ਗਿਆਨ ਅਤੇ ਹੁਨਰ ਦੇ ਮੁੱਖ ਹਿੱਸੇ ਵਜੋਂ ਕੰਮ ਕਰਦੇ ਹਨ ਅਤੇ ਕੁੱਲ 25 ਵਿਸ਼ੇ (100 ਕ੍ਰੈਡਿਟ) ਨਾਲ ਬਣੇ ਹੁੰਦੇ ਹਨ। ਤੁਹਾਡੇ ਬੁਨਿਆਦੀ ਮੁੱਖ ਕੋਰਸ ਹੋਰ ਆਈਟੀ ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਨਾਲ ਮਿਲ ਕੇ ਜ਼ਰੂਰੀ ਵਪਾਰਕ ਯੋਗਤਾਵਾਂ ਵਿਕਸਿਤ ਕਰਨ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨਗੇ, ਅਤੇ ਤੁਹਾਡੀਆਂ ਮੇਜਰ ਜ਼ਰੂਰਤਾਂ ਆਮ ਤੌਰ 'ਤੇ ਆਈਟੀ ਦੀ ਬੁਨਿਆਦੀ ਗਿਆਨ ਨਾਲ ਸੰਬੰਧਿਤ ਹੋਰ ਉਨ੍ਹਾਂ ਵਿਸ਼ਿਆਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨਗੀਆਂ। ਤੁਹਾਡੇ 5 ਮੇਜਰ ਇਲੈਕਟਿਵ ਕੋਰਸ ਫਿਰ ਤੁਹਾਨੂੰ ਕਿਸੇ ਵਿਸ਼ੇਸ਼ ਵਪਾਰਕ ਸ਼ਾਖਾ ਵਿੱਚ ਆਪਣੀ ਪੜ੍ਹਾਈ 'ਤੇ ਧਿਆਨ ਕੇਂਦ੍ਰਤ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਣਗੇ ਅਤੇ ਤੁਹਾਨੂੰ ਇੱਕ ਛੋਟਾ ਵਿਸ਼ਾ ਚੁਣਨ ਦਾ ਵਿਕਲਪ ਦੇਣਗੇ।",
    "major_electives_desc": "<strong>ਮੇਜਰ ਇਲੈਕਟਿਵ ਕੋਰਸ – ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀ ਸੂਚੀ ਵਿੱਚੋਂ 5 ਵਿਸ਼ੇ (20 ਕ੍ਰੈਡਿਟ) ਚੁਣੋ</strong> - ਜੋ ਵਿਦਿਆਰਥੀ ਇੱਕੋ ਟਰੈਕ ਵਿੱਚੋਂ 20 ਕ੍ਰੈਡਿਟ ਸਫਲਤਾਪੂਰਵਕ ਪੂਰਾ ਕਰਦੇ ਹਨ, ਉਨ੍ਹਾਂ ਨੂੰ ਉਸ ਟਰੈਕ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਅਧਿਐਨ ਦਾ ਸਰਟੀਫਿਕੇਟ ਦਿੱਤਾ ਜਾਵੇਗਾ। ਜੇ ਵਿਦਿਆਰਥੀ ਇਨ੍ਹਾਂ ਟਰੈਕਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨਾ ਨਹੀਂ ਚੁਣਦੇ, ਤਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਸਰਟੀਫਿਕੇਟ ਨਹੀਂ ਦਿੱਤਾ ਜਾਵੇਗਾ।",
    "free_electives_desc": "<strong>ਮੁਫਤ ਇਲੈਕਟਿਵ (8 ਕ੍ਰੈਡਿਟ)</strong> - ਮੁਫਤ ਇਲੈਕਟਿਵ ਤੁਹਾਨੂੰ ਨਿੱਜੀ ਰੁਚੀ ਦੇ ਖੇਤਰ ਵਿੱਚ ਅਧਿਐਨ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦੇ ਹਨ। ਤੁਹਾਨੂੰ ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ 2 ਵਿਸ਼ੇ ਪੂਰੇ ਕਰਨੇ ਹੋਣਗੇ ਅਤੇ ਤੁਸੀਂ ਯੂਨੀਵਰਸਿਟੀ ਵਿੱਚ ਪੇਸ਼ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਯੋਗ ਵਿਸ਼ੇ ਨੂੰ ਚੁਣ ਸਕਦੇ ਹੋ।",
    "internship_desc": "<strong>ਇੰਟਰਨਸ਼ਿਪ (12 ਕ੍ਰੈਡਿਟ)</strong> - ਤੁਹਾਡੀ ਇੰਟਰਨਸ਼ਿਪ ਤੁਹਾਨੂੰ ਕੋਰਸ ਵਰਕ ਦੌਰਾਨ ਪ੍ਰਾਪਤ ਕੀਤੇ ਗਿਆਨ ਅਤੇ ਹੁਨਰਾਂ ਨੂੰ ਅਭਿਆਸ ਵਿੱਚ ਲਾਗੂ ਕਰਨ ਅਤੇ ਇਹ ਦੇਖਣ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ ਕਿ ਤੁਸੀਂ ਇਨ੍ਹਾਂ ਹੁਨਰਾਂ ਨੂੰ ਕਿੰਨੀ ਚੰਗੀ ਤਰ੍ਹਾਂ ਲਾਗੂ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਹਾਡੀ ਇੰਟਰਨਸ਼ਿਪ ਤੁਹਾਡੇ ਸਾਰੇ ਕੋਰਸ ਵਰਕ ਪੂਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ ਤੁਹਾਡੇ ਆਖਰੀ ਸੈਮੇਸਟਰ ਵਿੱਚ ਲਈ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ ਅਤੇ ਗ੍ਰੈਜੂਏਟ ਹੋਣ ਲਈ ਤੁਹਾਨੂੰ ਆਖਰੀ 12 ਕ੍ਰੈਡਿਟ ਪ੍ਰਦਾਨ ਕਰੇਗੀ।"
  },
  si: {
    "curriculum_title": "මගේ විෂය මාලාව - STIU ශිෂ්ය පෝටලය",
    "profile_settings": "පැතිකඩ සැකසුම්",
    "dashboard": "ඩෂ්බෝඩ්",
    "logout": "පිටවීම",
    "progress_summary": "විෂය මාලා ප්‍රගති සාරාංශය",
    "total_credits": "සම්පූර්ණ ණය",
    "completed_credits": "සම්පූර්ණ කළ ණය",
    "remaining_credits": "ඉතිරි ණය",
    "completion_rate": "සම්පූර්ණ කිරීමේ අනුපාතය",
    "general_education": "පොදු අධ්‍යාපනය",
    "humanities": "මානව ශාස්ත්‍ර",
    "social_sciences": "සමාජ විද්‍යා",
    "languages": "භාෂා",
    "science_math": "විද්‍යාව සහ ගණිතය",
    "professional_courses": "වෘත්තීය පාඨමාලා",
    "core_courses": "ප්‍රධාන පාඨමාලා",
    "major_requirements": "ප්‍රධාන අවශ්‍යතා",
    "major_electives": "ප්‍රධාන තේරීම් පාඨමාලා",
    "specialization_tracks": "විශේෂීකරණ මාර්ග",
    "software_track": "මෘදුකාංග ඉංජිනේරු විද්‍යාව",
    "ecommerce_track": "ඊ-වාණිජ්‍ය තාක්ෂණය",
    "data_science_track": "දත්ත විද්‍යාව",
    "network_track": "ජාල හා ආරක්ෂාව",
    "other_requirements": "වෙනත් අවශ්‍යතා",
    "free_electives": "නිදහස් තේරීම් පාඨමාලා",
    "internship": "පුහුණුව",
    "save_progress": "ප්‍රගතිය සුරකින්න",
    "save_success": "ප්‍රගතිය සාර්ථකව සුරක්ෂිත කරන ලදි!",
    "loading_curriculum": "විෂය මාලාව යොමු වෙමින්...",
    "course_completed": "සම්පූර්ණ කළා",
    "course_in_progress": "ප්‍රගතියෙන්",
    "course_not_started": "ආරම්භ කර නැත",
    "credits": "ණය",
    "year": "වසර",
    "credits_unit": "ණය",
    "prerequisite": "පූර්වාවශ්‍යතා",
    "please_wait": "කරුණාකර තත්පර කිහිපයක් රැඳී සිටින්න",
    "saving": "සුරක්ෂිත වෙමින්...",
    
    // Description translations
    "general_education_desc": "<strong>පොදු අධ්‍යාපන පාඨමාලා (40 ණය)</strong> - පොදු අධ්‍යාපන පාඨමාලා ඔබේ ප්‍රධාන විෂය සඳහා පදනමක් ලෙස ක්‍රියා කරන අතර සවිස්තරාත්මක දැනුමක් හා කුසලතා සංවර්ධනය කිරීමට ඔබට උපකාර කරයි. පහත දැක්වෙන කාණ්ඩ වලින් විෂයයන් 10 ක් තෝරාගත යුතුය. ඕනෑම දී ඇති විෂයයක් ගැනීමට කවදා දැයි තීරණය කිරීමට ඔබට උපකාර කිරීම සඳහා අපි වසරක් නිර්දේශ කර ඇත.",
    "professional_courses_desc": "<strong>වෘත්තීය පාඨමාලා (100 ණය)</strong> - වෘත්තීය පාඨමාලා ඔබේ උපාධියේ දැනුමේ හා කුසලතාවල ප්‍රධාන අංගය ලෙස ක්‍රියා කරන අතර සම්පූර්ණ විෂයයන් 25 ක් (ණය 100) ඇතුළත් වේ. ඔබේ මූලික ප්‍රධාන පාඨමාලා අනෙකුත් IT සිසුන් සමඟ එක්ව අත්‍යවශ්‍ය ව්‍යාපාර හැකියාවන් වර්ධනය කිරීමට ඔබට උපකාර කරන අතර, ඔබේ ප්‍රධාන අවශ්‍යතා සාමාන්‍යයෙන් IT හි මූලික දැනුමට අදාළ වැඩිදියුණු කරන ලද මාතෘකා ඇතුළත් වේ. ඔබේ ප්‍රධාන තේරීම් පාඨමාලා 5 න් පසුව ඔබට නිශ්චිත ව්‍යාපාර ශාඛාවක ඔබේ අධ්‍යයනයන් කේන්ද්‍රගත කිරීමට ඉඩ ලබා දෙන අතර ඔබට බාල විෂයක් තෝරා ගැනීමට විකල්පයක් ලබා දෙයි.",
    "major_electives_desc": "<strong>ප්‍රධාන තේරීම් පාඨමාලා – කරුණාකර පහත ලැයිස්තුවෙන් විෂයයන් 5 ක් (ණය 20) තෝරාගන්න</strong> - එකම මාර්ගයකින් ණය 20 ක් සාර්ථකව සම්පූර්ණ කරන සිසුන්ට එම මාර්ගය සඳහා විශේෂිත අධ්‍යයන සහතික පත්‍රයක් ලබා දෙනු ලැබේ. සිසුන් මෙම මාර්ග අනුගමනය කිරීමට තෝරා නොගන්නේ නම්, ඔවුන්ට සහතික පත්‍රයක් නොලැබේ.",
    "free_electives_desc": "<strong>නිදහස් තේරීම් පාඨමාලා (8 ණය)</strong> - නිදහස් තේරීම් පාඨමාලා ඔබට පෞද්ගලික උනන්දුවක් දක්වන ක්ෂේත්‍රයක අධ්‍යයනය කිරීමට ඉඩ දෙයි. ඔබ මෙම කාණ්ඩයේ විෂයයන් 2 ක් සම්පූර්ණ කළ යුතු අතර විශ්වවිද්‍යාලයෙන් ඉදිරිපත් කරන ලද ඔබ සුදුසුකම් ලත් ඕනෑම විෂයයක් තෝරාගත හැකිය.",
    "internship_desc": "<strong>පුහුණුව (12 ණය)</strong> - ඔබේ පුහුණුව ඔබට පාඨමාලා කාලය තුළදී ලබාගත් දැනුම හා කුසලතා ප්‍රයෝගිකව යොදා ගැනීමට සහ මෙම කුසලතා කෙතරම් හොඳින් යොදාගත හැකිද යන්න පිළිබිඹු කිරීමට ඉඩ සලසයි. ඔබේ පුහුණුව ඔබේ සියලුම පාඨමාලා කටයුතු සම්පූර්ණ කිරීමෙන් පසු ඔබේ අවසාන සතියේදී ගත යුතු අතර උපාධිය සඳහා අවසන් ණය 12 ඔබට ලබා දෙනු ඇත."
  }
};

// Language names for dropdown with flags (matching profile.js)
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
    
    console.log('🌐 Initializing language FIRST...');
    // Initialize language BEFORE anything else
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
  // Get saved language from localStorage FIRST
  const savedLang = localStorage.getItem('preferredLang') || 'th';
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
  
  // Add all language options in the specified order (matching profile.js)
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
  updateCurriculumText();
  
  // Update course cards with new language
  updateCourseCardsLanguage();
  
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
        const name = languageNames[currentLang] || 'ไทย';
        currentLanguageElement.textContent = name.split(' ')[0];
      }
    }
  });
}

function updateCurriculumText() {
  const translations = curriculumTranslations[currentLang];
  
  // Update page title
  document.title = translations.curriculum_title;
  
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
  
  // Update loading spinner text
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    const spinnerTitle = spinner.querySelector('[data-i18n="loading_curriculum"]');
    const spinnerText = spinner.querySelector('[data-i18n="please_wait"]');
    if (spinnerTitle && translations.loading_curriculum) {
      spinnerTitle.textContent = translations.loading_curriculum;
    }
    if (spinnerText && translations.please_wait) {
      spinnerText.textContent = translations.please_wait;
    }
  }
  
  // Update save button text
  const saveBtn = document.getElementById('saveProgressBtn');
  if (saveBtn) {
    saveBtn.innerHTML = '<i class="fas fa-save me-2"></i>' + translations.save_progress;
  }
  
  // Update success message
  const successMsg = document.getElementById('saveSuccess');
  if (successMsg) {
    const successSpan = successMsg.querySelector('span[data-i18n="save_success"]');
    if (successSpan && translations.save_success) {
      successSpan.textContent = translations.save_success;
    }
  }
  
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
  renderCourseSection('humanities-courses', curriculumData.generalEducation.humanities);
  renderCourseSection('social-sciences-courses', curriculumData.generalEducation.socialSciences);
  renderCourseSection('language-courses', curriculumData.generalEducation.languages);
  renderCourseSection('science-math-courses', curriculumData.generalEducation.scienceMath);
}

function renderProfessionalCourses() {
  renderCourseSection('core-courses', curriculumData.professionalCourses.core);
  renderCourseSection('major-requirements-courses', curriculumData.professionalCourses.majorRequirements);
  renderCourseSection('major-electives-courses', curriculumData.professionalCourses.majorElectives);
}

function renderSpecializationTracks() {
  // Render each track in its own full-width container
  renderTrackSection('software-track-courses', curriculumData.professionalCourses.softwareTrack);
  renderTrackSection('ecommerce-track-courses', curriculumData.professionalCourses.ecommerceTrack);
  renderTrackSection('data-science-track-courses', curriculumData.professionalCourses.dataScienceTrack);
  renderTrackSection('network-track-courses', curriculumData.professionalCourses.networkTrack);
}

function renderOtherRequirements() {
  renderCourseSection('free-electives-courses', curriculumData.otherRequirements.freeElectives);
  renderCourseSection('internship-courses', curriculumData.otherRequirements.internship);
}

function renderCourseSection(containerId, courses) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.log(`⚠️ Container #${containerId} not found`);
    return;
  }
  
  container.innerHTML = '';
  
  courses.forEach(course => {
    const isCompleted = userProgress[course.code] === true;
    const courseElement = createCourseElement(course, isCompleted);
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
    const courseElement = createCourseElement(course, isCompleted);
    container.appendChild(courseElement);
  });
  
  console.log(`✅ Rendered ${courses.length} courses in track ${containerId}`);
}

function createCourseElement(course, isCompleted) {
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
  
  // Fixed: Properly iterate through all courses in the curriculum data structure
  // General Education courses
  Object.values(curriculumData.generalEducation).forEach(courses => {
    courses.forEach(course => {
      if (userProgress[course.code]) {
        completedCredits += course.credits;
      }
    });
  });
  
  // Professional Courses - Core, Major Requirements, Major Electives
  Object.values(curriculumData.professionalCourses).forEach(courseGroup => {
    // Check if it's an array (core, majorRequirements, majorElectives)
    if (Array.isArray(courseGroup)) {
      courseGroup.forEach(course => {
        if (userProgress[course.code]) {
          completedCredits += course.credits;
        }
      });
    } else {
      // It's an object with tracks (softwareTrack, ecommerceTrack, etc.)
      Object.values(courseGroup).forEach(courses => {
        if (Array.isArray(courses)) {
          courses.forEach(course => {
            if (userProgress[course.code]) {
              completedCredits += course.credits;
            }
          });
        }
      });
    }
  });
  
  // Other Requirements - Free Electives and Internship
  Object.values(curriculumData.otherRequirements).forEach(courses => {
    courses.forEach(course => {
      if (userProgress[course.code]) {
        completedCredits += course.credits;
      }
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
                         curriculumTranslations[currentLang].saving;
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
    alert(curriculumTranslations[currentLang].save_error || 'Error saving progress');
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
        <h5 class="text-danger">${curriculumTranslations[currentLang]?.error_title || 'Error'}</h5>
        <p class="text-muted">${message}</p>
        <button class="btn btn-primary mt-2" onclick="location.reload()">
          ${curriculumTranslations[currentLang]?.try_again || 'Try Again'}
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

// Export functions for global access
window.switchLanguage = switchLanguage;
window.handleLogout = handleLogout;