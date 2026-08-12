export const languages = ["en", "ar"] as const;

export type Lang = (typeof languages)[number];

export type Direction = "ltr" | "rtl";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavContent {
  links: NavLink[];
  cta: string;
}

export interface HeroContent {
  eyebrow: string;
  firstName: string;
  lastName: string;
  roleLeft: string;
  roleRight: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;
  email: string;
  phone: string;
  phoneHref: string;
  githubLabel: string;
  linkedinLabel: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface StackCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface StackContent {
  eyebrow: string;
  title: string;
  sub: string;
  cards: StackCard[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  features?: string[];
  pipeline?: string[];
  stack: string[];
  featured?: boolean;
}

export interface WorkContent {
  eyebrow: string;
  title: string;
  sub: string;
  projects: Project[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
}

export interface Certificate {
  mark: string;
  label: string;
  isLangBadge?: boolean;
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  items: ExperienceItem[];
  certificates: Certificate[];
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  description: string;
  emailLabel: string;
  phoneLabel: string;
  githubLabel: string;
  linkedinLabel: string;
}

export interface TerminalContent {
  typedLine: string;
}

export interface Dictionary {
  lang: Lang;
  dir: Direction;
  nav: NavContent;
  hero: HeroContent;
  terminal: TerminalContent;
  stack: StackContent;
  work: WorkContent;
  experience: ExperienceContent;
  contact: ContactContent;
  footer: string;
}

const en: Dictionary = {
  lang: "en",
  dir: "ltr",
  nav: {
    links: [
      { href: "#home", label: "// home" },
      { href: "#stack", label: "// stack" },
      { href: "#work", label: "// work" },
      { href: "#experience", label: "// experience" },
      { href: "#contact", label: "// contact" },
    ],
    cta: "// let's talk",
  },
  hero: {
    eyebrow: "Available for software engineering opportunities",
    firstName: "Mhd Moutaz",
    lastName: "Takahji",
    roleLeft: "Backend",
    roleRight: "Full-Stack Engineer",
    lede:
      "Computer Science student and software engineer focused on building robust backend systems and full-stack applications. I design APIs, relational databases, authentication and authorization systems, payment workflows, and cross-platform applications with a strong focus on clean architecture, reliability, and maintainability.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    email: "mhdmoutaztakahji@gmail.com",
    phone: "+963 937 646 083",
    phoneHref: "tel:+963937646083",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    githubUrl: "https://github.com/mhd-moutaz/",
    linkedinUrl: "https://linkedin.com/in/mhd-moutaz-takahji-832015306",
  },
  terminal: {
    typedLine: `-- developer profile
SELECT role, expertise, stack
FROM engineers
WHERE name = 'Mhd Moutaz Takahji'
LIMIT 1;

-- Backend / Full-Stack Engineer
-- APIs / Architecture / Databases
-- Laravel / Flutter / MySQL

-- profile loaded successfully`,
  },
  stack: {
    eyebrow: "-- expertise",
    title: "Engineering across the stack",
    sub: "From database architecture and backend services to cross-platform applications, I build software with a focus on structure, reliability, and real-world use.",
    cards: [
      {
        id: "01",
        title: "Backend Engineering",
        description:
          "Designing and developing RESTful APIs with authentication, authorization, background processing, notifications, and event-driven workflows.",
        tags: ["Laravel", "REST APIs", "Sanctum", "Passport", "Queues", "Events"],
      },
      {
        id: "02",
        title: "Cross-Platform Applications",
        description:
          "Building mobile and desktop applications that connect clean interfaces with reliable backend services and well-structured application logic.",
        tags: ["Flutter", "Android", "iOS", "C#", "WinForms"],
      },
      {
        id: "03",
        title: "Database Engineering",
        description:
          "Designing relational database schemas with clear relationships, normalization, indexing, constraints, and efficient query patterns.",
        tags: ["MySQL", "SQL Server", "SQLite", "Eloquent"],
      },
      {
        id: "04",
        title: "Software Architecture",
        description:
          "Structuring applications through service layers, MVC, role-based access control, and event-driven patterns to keep complex systems maintainable.",
        tags: ["MVC", "RBAC", "Service Layer", "Clean Architecture"],
      },
      {
        id: "05",
        title: "Payments & Business Systems",
        description:
          "Implementing payment gateways, wallet systems, refunds, invoicing, coupons, notifications, and business rules that support complete transaction workflows.",
        tags: ["Stripe", "Wallets", "Invoices", "FCM"],
      },
      {
        id: "06",
        title: "Programming Languages",
        description:
          "Working across multiple programming languages and choosing the right technology according to the system, platform, and engineering requirements.",
        tags: ["PHP", "C#", "C++", "Dart", "SQL", "Python"],
      },
    ],
  },
  work: {
    eyebrow: "-- selected work",
    title: "Selected Projects",
    sub: "Systems and applications built around real requirements, with an emphasis on backend architecture, data modeling, business logic, and practical user experiences.",
    projects: [
      {
        name: "Customizable T-Shirt E-Commerce Platform",
        period: "",
        description:
          "A full e-commerce platform that allows customers to configure products by design, size, fabric, and color with dynamic pricing. The backend is built around a normalized relational database of 30+ tables and includes wallet management, payments, refunds, coupons, invoicing, notifications, and role-based administration.",
        pipeline: ["Pending", "Confirmed", "Processing", "Completed"],
        features: [
          "Dynamic product configuration across designs, sizes, fabrics, and colors",
          "Wallet management with deposits, withdrawals, and refunds",
          "Stripe payment integration with localized Cash on Delivery",
          "Coupon system with usage limits and user-specific rules",
          "Arabic/English invoice generation with RTL support",
          "Role-based administration for administrators and inventory managers",
        ],
        stack: ["Laravel 12", "PHP 8.2", "MySQL", "Stripe", "Firebase FCM", "Sanctum", "Passport"],
        featured: true,
      },
      {
        name: "ReelCart",
        period: "",
        description:
          "A mobile commerce platform built around short-form product videos. Customers can discover products, view their details, and add items to their cart directly within the video experience. The system supports distinct workflows for customers, vendors, and administrators.",
        stack: ["Flutter", "Laravel API", "MySQL"],
      },
      {
        name: "Medical Clinic Management System",
        period: "",
        description:
          "A Windows desktop system designed to organize clinic operations, physician schedules, patient records, and appointments. The application provides structured access to electronic medical records and supports appointment management across multiple physicians.",
        stack: ["C#", "Windows Forms", "SQL Server"],
      },
      {
        name: "Library Management System",
        period: "",
        description:
          "A desktop management system for organizing books, authors, categories, and rental operations. It includes complete CRUD functionality, rental tracking, overdue penalty management, and authenticated administrative access.",
        stack: ["C#", "Windows Forms", "SQL Server"],
      },
    ],
  },
  experience: {
    eyebrow: "-- background",
    title: "Education & Credentials",
    items: [
      {
        period: "2022 — Expected 2027",
        title: "B.Sc. in Computer Science",
        org: "Yarmouk Private University, Syria · Five-Year Program · Fifth Year",
        description:
          "Academic experience spanning software engineering, machine learning, image and video processing, natural language processing, compiler theory, and project management, supported by hands-on software development projects.",
      },
    ],
    certificates: [
      { mark: "✓", label: "Tamkeen Developer Training — Verified" },
    ],
  },
  contact: {
    eyebrow: "-- contact",
    heading: "Let's build something meaningful.",
    description:
      "I'm interested in working on challenging software projects where solid engineering, thoughtful architecture, and attention to detail matter. Whether it's backend infrastructure, a full-stack product, or a cross-platform application, I'm always open to building something useful with a strong team.",
    emailLabel: "Email me",
    phoneLabel: "+963 937 646 083",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  footer: "© 2026 Mhd Moutaz Takahji. Designed and built from scratch.",
};

const ar: Dictionary = {
  lang: "ar",
  dir: "rtl",
  nav: {
    links: [
      { href: "#home", label: "// الرئيسية" },
      { href: "#stack", label: "// التقنيات" },
      { href: "#work", label: "// المشاريع" },
      { href: "#experience", label: "// المسيرة" },
      { href: "#contact", label: "// تواصل" },
    ],
    cta: "// لنتحدث",
  },
  hero: {
    eyebrow: "متاح لفرص العمل في مجال هندسة البرمجيات",
    firstName: "محمد معتز",
    lastName: "تكه جي",
    roleLeft: "مهندس برمجيات",
    roleRight: "Backend وFull-Stack",
    lede:
      "أدرس علوم الحاسب وأعمل في هندسة البرمجيات، مع تركيز على بناء الأنظمة الخلفية والتطبيقات المتكاملة. أعمل على تصميم واجهات API، وقواعد البيانات العلائقية، وأنظمة المصادقة والصلاحيات، وتدفقات الدفع، والتطبيقات متعددة المنصات، مع اهتمام كبير بجودة البنية البرمجية وموثوقية النظام وسهولة تطويره وصيانته.",
    primaryCta: "استعرض المشاريع",
    secondaryCta: "تواصل معي",
    email: "mhdmoutaztakahji@gmail.com",
    phone: "+963 937 646 083",
    phoneHref: "tel:+963937646083",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    githubUrl: "https://github.com/mhd-moutaz/",
    linkedinUrl: "https://linkedin.com/in/mhd-moutaz-takahji-832015306",
  },
  terminal: {
    typedLine: `-- developer profile
SELECT role, expertise, stack
FROM engineers
WHERE name = 'Mhd Moutaz Takahji'
LIMIT 1;

-- Backend / Full-Stack Engineer
-- APIs / Architecture / Databases
-- Laravel / Flutter / MySQL

-- profile loaded successfully`,
  },
  stack: {
    eyebrow: "-- مجالات العمل",
    title: "هندسة البرمجيات من النظام إلى الواجهة",
    sub: "أعمل على مختلف طبقات البرمجيات، بدءاً من تصميم قواعد البيانات والخدمات الخلفية وصولاً إلى التطبيقات متعددة المنصات، مع التركيز على بناء حلول منظمة وموثوقة وقابلة للاستخدام الفعلي.",
    cards: [
      {
        id: "01",
        title: "هندسة الأنظمة الخلفية",
        description:
          "تصميم وتطوير واجهات REST API تدير منطق التطبيق وعملياته الأساسية، مع بناء أنظمة للمصادقة والصلاحيات والمهام الخلفية والإشعارات والأحداث.",
        tags: ["Laravel", "REST APIs", "Sanctum", "Passport", "Queues", "Events"],
      },
      {
        id: "02",
        title: "تطوير التطبيقات متعددة المنصات",
        description:
          "تطوير تطبيقات للجوال والحاسوب تجمع بين واجهات استخدام واضحة وخدمات خلفية موثوقة وبنية برمجية منظمة.",
        tags: ["Flutter", "Android", "iOS", "C#", "WinForms"],
      },
      {
        id: "03",
        title: "هندسة قواعد البيانات",
        description:
          "تصميم قواعد بيانات علائقية بهيكل واضح وعلاقات مترابطة، مع الاهتمام بالتطبيع والفهرسة والقيود وكفاءة الاستعلامات.",
        tags: ["MySQL", "SQL Server", "SQLite", "Eloquent"],
      },
      {
        id: "04",
        title: "هندسة البنية البرمجية",
        description:
          "بناء الأنظمة وفق هيكل برمجي واضح باستخدام طبقات الخدمات وMVC ونظام الصلاحيات والأحداث، بما يحافظ على تنظيم المشروع ويسهّل تطويره مع ازدياد تعقيده.",
        tags: ["MVC", "RBAC", "Service Layer", "Clean Architecture"],
      },
      {
        id: "05",
        title: "أنظمة الدفع ومنطق الأعمال",
        description:
          "بناء أنظمة الدفع والمحافظ والفوترة والاسترداد والكوبونات والإشعارات، وربطها بمنطق الأعمال لضمان اكتمال دورة المعاملة من بدايتها حتى نهايتها.",
        tags: ["Stripe", "Wallets", "Invoices", "FCM"],
      },
      {
        id: "06",
        title: "لغات البرمجة",
        description:
          "العمل بعدة لغات برمجية واختيار التقنية المناسبة بحسب طبيعة النظام والمنصة ومتطلبات الحل البرمجي.",
        tags: ["PHP", "C#", "C++", "Dart", "SQL", "Python"],
      },
    ],
  },
  work: {
    eyebrow: "-- أبرز المشاريع",
    title: "مشاريع مختارة",
    sub: "مجموعة من الأنظمة والتطبيقات التي طُوّرت انطلاقاً من احتياجات حقيقية، مع التركيز على البنية الخلفية، ونمذجة البيانات، ومنطق الأعمال، وتجربة الاستخدام العملية.",
    projects: [
      {
        name: "منصة تجارة إلكترونية متخصصة بالقمصان القابلة للتخصيص",
        period: "",
        description:
          "منصة تجارة إلكترونية متكاملة تتيح للعميل تصميم المنتج واختيار تفاصيله من حيث التصميم والمقاس والقماش واللون، مع احتساب السعر وفق الخيارات المحددة. يعتمد النظام على قاعدة بيانات علائقية تضم أكثر من 30 جدولاً، ويشمل إدارة المحافظ والمدفوعات والاسترداد والكوبونات والفواتير والإشعارات ونظاماً متكاملاً للصلاحيات.",
        pipeline: ["قيد الانتظار", "تم التأكيد", "قيد التجهيز", "مكتمل"],
        features: [
          "نظام مرن لتخصيص المنتج وفق التصميم والمقاس والقماش واللون",
          "إدارة متكاملة للمحفظة تشمل الإيداع والسحب والاسترداد",
          "تكامل مع Stripe إلى جانب الدفع عند الاستلام",
          "نظام كوبونات يدعم حدود الاستخدام والقواعد الخاصة بالمستخدم",
          "إنشاء فواتير بالعربية والإنجليزية مع دعم كامل لاتجاه RTL",
          "نظام صلاحيات لإدارة المدراء ومسؤولي المخزون",
        ],
        stack: ["Laravel 12", "PHP 8.2", "MySQL", "Stripe", "Firebase FCM", "Sanctum", "Passport"],
        featured: true,
      },
      {
        name: "ReelCart — منصة تجارة إلكترونية تفاعلية",
        period: "",
        description:
          "منصة تجارة إلكترونية للجوال تعتمد على عرض المنتجات من خلال فيديوهات قصيرة وتفاعلية. يستطيع المستخدم اكتشاف المنتج والاطلاع على تفاصيله وإضافته إلى السلة مباشرة أثناء مشاهدة المحتوى، مع نظام منفصل لإدارة العملاء والبائعين والمدراء.",
        stack: ["Flutter", "Laravel API", "MySQL"],
      },
      {
        name: "نظام متكامل لإدارة العيادات الطبية",
        period: "",
        description:
          "نظام سطح مكتب صُمم لتنظيم العمل داخل العيادات الطبية، بدءاً من إدارة الأطباء وملفات المرضى وصولاً إلى تنظيم المواعيد والسجلات الطبية. يتيح النظام إدارة السجلات الإلكترونية وجدولة المواعيد بين عدة أطباء ضمن بيئة منظمة.",
        stack: ["C#", "Windows Forms", "SQL Server"],
      },
      {
        name: "نظام إدارة المكتبة",
        period: "",
        description:
          "نظام سطح مكتب لإدارة محتوى المكتبة وعمليات الإعارة، مع تنظيم الكتب والمؤلفين والتصنيفات ومتابعة الإعارات وحساب غرامات التأخير. يتضمن النظام صلاحيات وصول ومجموعة متكاملة من عمليات إدارة البيانات.",
        stack: ["C#", "Windows Forms", "SQL Server"],
      },
    ],
  },
  experience: {
    eyebrow: "-- المسيرة الأكاديمية",
    title: "التعليم والمؤهلات",
    items: [
      {
        period: "2022 — متوقع التخرج 2027",
        title: "بكالوريوس في علوم الحاسب",
        org: "جامعة اليرموك الخاصة، سوريا · برنامج دراسي لخمس سنوات · السنة الخامسة",
        description:
          "مسيرة أكاديمية تجمع بين هندسة البرمجيات وتعلم الآلة ومعالجة الصور والفيديو ومعالجة اللغة الطبيعية ونظرية المترجمات وإدارة المشاريع، إلى جانب تطبيق هذه المعارف من خلال مشاريع برمجية عملية.",
      },
    ],
    certificates: [
      { mark: "✓", label: "Tamkeen Developer Training — Verified" },
    ],
  },
  contact: {
    eyebrow: "-- تواصل",
    heading: "لنبنِ شيئاً يستحق أن يُبنى.",
    description:
      "أهتم بالمشاريع البرمجية التي تتطلب تفكيراً هندسياً حقيقياً، وبنية مدروسة، واهتماماً بالتفاصيل. سواء كان المشروع نظاماً خلفياً، أو منتجاً متكاملاً، أو تطبيقاً متعدد المنصات، أرحب دائماً بفرص التعاون لبناء حلول ذات قيمة ضمن فريق قوي.",
    emailLabel: "راسلني",
    phoneLabel: "+963 937 646 083",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
  footer: "© 2026 محمد معتز تكه جي. تصميم وتطوير من الصفر.",
};

export const dictionaries: Record<Lang, Dictionary> = { en, ar };
