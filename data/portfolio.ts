export type ExperienceProject = {
  name: string;
  summary: string;
  period: string;
  highlights: string[];
  tech: string[];
};

export type PortfolioData = {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  intro: string;
  about: string[];
  location: string;
  email: string;
  phone: string;
  avatar: { src: string; alt: string };
  links: {
    github: string;
    linkedin: string;
    whatsapp: string;
    website: string;
  };
  highlights: string[];
  skills: Array<{
    group: string;
    items: string[];
  }>;
  experience: Array<{
    company: string;
    role: string;
    start: string;
    end?: string;
    location?: string;
    projects: ExperienceProject[];
  }>;
  projects: Array<{
    name: string;
    category: string;
    year: string;
    context: string;
    description: string;
    impact: string;
    tech: string[];
    links?: { github?: string; demo?: string };
  }>;
  education: Array<{
    institution: string;
    degree: string;
    location?: string;
    start?: string;
    end?: string;
    notes?: string[];
  }>;
  certifications: Array<{ name: string; issuer: string; year: string }>;
};

export const portfolio: PortfolioData = {
  name: "Reza Fauzan Adhima",
  shortName: "Reza Fauzan",
  title: "Fullstack Developer",
  tagline: "Backend-focused fullstack developer building internal systems, APIs, and production-ready web apps.",
  intro:
    "Fullstack Web Developer with 4+ years of freelance experience building and deploying scalable web applications. Strong in backend development using Golang, PHP, and Java, with hands-on experience delivering e-commerce platforms, dashboards, and internal systems.",
  about: [
    "I'm a fullstack developer based in Jakarta with a strong lean toward the backend. Today I work as a Staff Backend at PT Global Energi Lestari, where I built a Legal Management System from scratch — from the ERD and API contracts to Go Fiber services secured with API-key middleware — and extend procurement apps that talk to each other through RabbitMQ.",
    "Before that I spent more than three years freelancing under Snow x Infinity, shipping company profiles, CMS-driven portfolios, and administrative dashboards for district and village governments. That work taught me to own a product end-to-end: database design, REST APIs, a responsive frontend, and deployment to Vercel or a VPS.",
    "I care about clean architecture, clear API documentation (OpenAPI/Swagger), and systems that stay maintainable after launch — and I'm comfortable stepping into frontend work whenever the project needs it.",
  ],
  location: "Jakarta, Indonesia",
  email: "rezafauzan.a@outlook.com",
  phone: "+62 851-8335-6072",
  avatar: {
    src: "/profile.jpg",
    alt: "Reza Fauzan Adhima holding a camera",
  },
  links: {
    github: "https://github.com/rezafauzan",
    linkedin: "https://www.linkedin.com/in/reza-fauzan-adhima/",
    whatsapp: "https://wa.me/6285183356072",
    website: "https://reza-fauzan.vercel.app",
  },
  highlights: [
    "Built a Legal Management System from scratch: ERD, API architecture, and OpenAPI contracts.",
    "Event-driven integration between procurement apps using RabbitMQ.",
    "Cut asset lookup time from minutes to seconds with Asset Tracker.",
    "Shipped admin dashboards for district and village governments.",
  ],

  skills: [
    {
      group: "Backend",
      items: [
        "Golang (Gin, Fiber)",
        "PHP (Laravel, CodeIgniter)",
        "Java (Spring Boot, Quarkus)",
        "Squirrel",
        "GORM",
        "RabbitMQ",
        "JWT Auth",
        "Middleware",
      ],
    },
    {
      group: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
        "Vite",
        "SEO Onsite",
      ],
    },
    {
      group: "Database",
      items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Firebase", "Supabase"],
    },
    {
      group: "DevOps & Cloud",
      items: [
        "Docker",
        "GitHub Actions",
        "Linux",
        "SSH / VPS",
        "Vercel",
        "Netlify",
        "Microservices",
        "Microfrontend",
      ],
    },
    {
      group: "Architecture",
      items: [
        "RESTful API",
        "Clean Architecture",
        "Dependency Injection",
        "SOLID",
        "YAGNI",
        "MVC",
        "OpenAPI / Swagger",
        "Agile / Scrum",
      ],
    },
    {
      group: "Security & Testing",
      items: [
        "OWASP Top 10",
        "Input Validation",
        "CORS",
        "CSRF",
        "XSS Prevention",
        "Unit Testing",
        "API Testing",
        "Functional Testing",
      ],
    },
  ],

  experience: [
    {
      company: "PT Global Energi Lestari",
      role: "Staff Backend",
      start: "Jun 2026",
      location: "Bandung, Indonesia",
      projects: [
        {
          name: "Legal Management",
          summary: "Legal Management System — internal web app",
          period: "Jul 2026",
          highlights: [
            "Built the system from scratch, including database design (ERD), API architecture, and API contract documentation.",
            "Developed RESTful APIs with Go Fiber and integrated them with internal apps through OpenAPI, secured with API-key middleware.",
            "Implemented core frontend features alongside backend services to keep the project on schedule.",
          ],
          tech: ["Go Fiber", "Squirrel", "PostgreSQL", "Docker", "Redis", "Firebase"],
        },
        {
          name: "Procurement",
          summary: "Supplier & Back Office Procurement — two connected internal apps",
          period: "Jun 2026",
          highlights: [
            "Completed unfinished backend modules and enhanced existing features across two interconnected procurement apps.",
            "Implemented asynchronous, event-driven communication between the apps using RabbitMQ.",
            "Optimized database queries and backend performance together with frontend developers and stakeholders.",
          ],
          tech: ["Go Fiber", "Squirrel", "PostgreSQL", "Docker", "Redis", "RabbitMQ", "Firebase"],
        },
      ],
    },
    {
      company: "PT Nashta Group Global Utama",
      role: "Backend Developer",
      start: "Apr 2026",
      end: "May 2026",
      location: "Depok, Indonesia",
      projects: [
        {
          name: "Asset Tracker",
          summary: "Office asset management system",
          period: "Apr 2026",
          highlights: [
            "Digitized manual inventory records into a centralized system, improving data accuracy and asset transparency.",
            "Reduced manual asset lookup time from minutes to seconds.",
            "Designed and documented API specifications with Swagger and Postman to align frontend and backend teams.",
          ],
          tech: ["Gin Gonic", "GORM", "PostgreSQL", "Docker"],
        },
      ],
    },
    {
      company: "Koda Tech Academy",
      role: "Fullstack Web Developer",
      start: "Dec 2025",
      end: "Apr 2026",
      location: "Depok, Indonesia",
      projects: [
        {
          name: "Coffee Shop",
          summary: "Coffee shop e-commerce web app",
          period: "Dec 2025 – Apr 2026",
          highlights: [
            "Built a full-featured e-commerce platform with a responsive UI for mobile and desktop.",
            "Modular frontend with React, React Router, Redux Toolkit, and Tailwind CSS, with role-based access for users and admins.",
            "Deployed as separate frontend and backend services with Redis for caching/sessions and PostgreSQL as the primary database.",
          ],
          tech: ["React.js", "Gin Gonic", "Tailwind CSS", "Redux", "PostgreSQL", "Redis", "Docker"],
        },
        {
          name: "Infinity Shortlink",
          summary: "Link shortener",
          period: "Dec 2025 – Apr 2026",
          highlights: [
            "Delivered frontend and backend end-to-end under tight deadlines.",
            "Designed REST APIs for link generation, redirection, and analytics.",
            "Deployed the application to a VPS production environment.",
          ],
          tech: ["React.js", "Gin Gonic", "Tailwind CSS", "PostgreSQL", "Docker"],
        },
      ],
    },
    {
      company: "Snow x Infinity",
      role: "Fullstack Developer (Freelance)",
      start: "Jun 2022",
      end: "Sep 2025",
      location: "Bandung, Indonesia",
      projects: [
        {
          name: "Topi (Hat To Go)",
          summary: "Company profile website",
          period: "Sep 2025",
          highlights: [
            "Built a mobile-first company profile to showcase products and business information.",
            "Strengthened the brand's online presence with a fast, mobile-optimized site.",
          ],
          tech: ["Next.js", "Tailwind CSS"],
        },
        {
          name: "Zifinity",
          summary: "Personal portfolio with CMS",
          period: "Mar 2024",
          highlights: [
            "Microfrontend architecture separating the portfolio and blog sections.",
            "CMS for publishing and updating articles without redeploying.",
          ],
          tech: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
        },
        {
          name: "Simpelkan",
          summary: "District (kecamatan) administrative dashboard",
          period: "Jun 2023",
          highlights: [
            "Managed citizen document requests and official correspondence in one dashboard.",
            "Real-time data visualization to support faster, better-informed decisions.",
          ],
          tech: ["Laravel", "Bootstrap 5", "MySQL", "Chart.js"],
        },
        {
          name: "Biomedical and Genome Science Initiative",
          summary: "Healthcare company profile",
          period: "Aug 2022",
          highlights: [
            "Presented services, facilities, and institutional information in a structured, accessible format.",
            "Optimized for both mobile and desktop visitors.",
          ],
          tech: ["Next.js", "Tailwind CSS"],
        },
        {
          name: "Meliau Hilir Village Correspondence",
          summary: "Village administrative system",
          period: "Jun 2022",
          highlights: [
            "Digitized village correspondence and citizen document requests.",
            "Faster document tracking and reporting through centralized data.",
          ],
          tech: ["CodeIgniter 4", "Bootstrap 5", "MySQL", "Chart.js"],
        },
      ],
    },
    {
      company: "Kawah Edukasi",
      role: "Backend Developer",
      start: "Nov 2022",
      end: "Feb 2023",
      location: "Bandung, Indonesia",
      projects: [
        {
          name: "Barans Absensi",
          summary: "Employee attendance system",
          period: "Nov 2022 – Feb 2023",
          highlights: [
            "Built backend services for attendance recording, user management, and REST APIs for client apps.",
            "Lightweight backend architecture focused on performance and reliable attendance data processing.",
            "Documented and tested endpoints with Swagger and Postman.",
          ],
          tech: ["Java Spring Boot", "PostgreSQL", "Swagger", "Postman"],
        },
      ],
    },
    {
      company: "PT LEN Industri (Persero)",
      role: "Project Manager & Backend Developer (Internship)",
      start: "Mar 2021",
      end: "Apr 2021",
      location: "Indonesia",
      projects: [
        {
          name: "AI Smart Gate",
          summary: "COVID-19 compliance gate",
          period: "Mar – Apr 2021",
          highlights: [
            "Led end-to-end development integrating mask detection and temperature measurement.",
            "Built backend APIs with Laravel 8 and microcontroller logic for sanitizer, disinfectant, and gate automation.",
            "Managed budget, schedule, and team objectives — delivered on time under pandemic constraints.",
          ],
          tech: ["Laravel 8", "MySQL"],
        },
      ],
    },
    {
      company: "Tim Sukses Teh Nia",
      role: "Fullstack Web Developer",
      start: "Dec 2020",
      end: "Dec 2020",
      location: "Bandung, Indonesia",
      projects: [
        {
          name: "Quick Count Sibadak",
          summary: "Regional election quick count",
          period: "Dec 2020",
          highlights: [
            "Built a quick count monitoring system with periodic updates for near real-time results.",
            "Migrated from CodeIgniter + Bootstrap to Laravel + Tailwind CSS for maintainability.",
            "Provided live monitoring and support throughout election day to keep data accurate.",
          ],
          tech: ["Laravel", "CodeIgniter 4", "Tailwind CSS", "Chart.js", "MySQL"],
        },
      ],
    },
  ],

  projects: [
    {
      name: "Legal Management System",
      category: "Internal System",
      year: "2026",
      context: "PT Global Energi Lestari",
      description:
        "Internal web app for managing legal documents and workflows, built from an empty repo to a documented API platform.",
      impact: "Owned ERD, API architecture, and OpenAPI contracts; endpoints secured with API-key middleware.",
      tech: ["Go Fiber", "Squirrel", "PostgreSQL", "Redis", "Docker"],
    },
    {
      name: "Procurement Suite",
      category: "Event-Driven",
      year: "2026",
      context: "PT Global Energi Lestari",
      description:
        "Two interconnected apps — Supplier and Back Office — handling the company's procurement process.",
      impact: "Introduced RabbitMQ messaging between the apps and optimized slow database queries.",
      tech: ["Go Fiber", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    },
    {
      name: "Asset Tracker",
      category: "Internal System",
      year: "2026",
      context: "PT Nashta Group Global Utama",
      description:
        "Office asset management system that replaced manual inventory records with a centralized database.",
      impact: "Asset lookup went from minutes to seconds.",
      tech: ["Gin Gonic", "GORM", "PostgreSQL", "Docker"],
    },
    {
      name: "Coffee Shop E-Commerce",
      category: "E-Commerce",
      year: "2026",
      context: "Koda Tech Academy",
      description:
        "Full-featured coffee shop store with customer and admin roles, responsive on mobile and desktop.",
      impact: "Shipped as separate frontend/backend services with Redis sessions and PostgreSQL.",
      tech: ["React.js", "Redux Toolkit", "Gin Gonic", "PostgreSQL", "Redis"],
    },
    {
      name: "Infinity Shortlink",
      category: "SaaS Tool",
      year: "2026",
      context: "Koda Tech Academy",
      description: "URL shortener with link generation, redirection, and click analytics.",
      impact: "Built end-to-end under a tight deadline and deployed to a VPS.",
      tech: ["React.js", "Gin Gonic", "PostgreSQL", "Docker"],
    },
    {
      name: "Zifinity",
      category: "CMS",
      year: "2024",
      context: "Personal project",
      description:
        "Personal portfolio and blog with a built-in CMS, split into microfrontends for the portfolio and blog.",
      impact: "Articles are published and updated from the CMS without redeploying.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
      links: { demo: "https://zifinity.vercel.app" },
    },
    {
      name: "Simpelkan",
      category: "Gov Dashboard",
      year: "2023",
      context: "Snow x Infinity — client work",
      description:
        "District administrative dashboard for citizen document requests and official correspondence.",
      impact: "Streamlined request processing with real-time charts for decision-making.",
      tech: ["Laravel", "Bootstrap 5", "MySQL", "Chart.js"],
    },
    {
      name: "AI Smart Gate",
      category: "IoT + AI",
      year: "2021",
      context: "PT LEN Industri (Persero)",
      description:
        "Automated gate with mask detection, temperature checks, and sanitizer dispensers for COVID-19 compliance.",
      impact: "Led the team as project manager and delivered on time during the pandemic.",
      tech: ["Laravel 8", "MySQL", "Microcontroller"],
    },
  ],

  education: [
    {
      institution: "Koda Tech Academy",
      degree: "Fullstack Web Developer Bootcamp",
      location: "Depok",
      start: "Dec 2025",
      end: "Apr 2026",
      notes: [
        "Frontend: React.js, Redux Toolkit, Tailwind CSS",
        "Backend: Golang, Gin, PostgreSQL, Redis",
        "DevOps basics: Docker and SSH",
      ],
    },
    {
      institution: "Kawah Edukasi",
      degree: "Backend Developer Bootcamp",
      location: "Bandung",
      start: "Nov 2022",
      end: "Feb 2023",
      notes: [
        "Java OOP, Quarkus, PostgreSQL, Dependency Injection",
        "Swagger documentation, ERD design, Agile/Scrum teamwork",
      ],
    },
    {
      institution: "SMK Negeri 1 Katapang",
      degree: "Software Engineering",
      start: "2019",
      end: "2021",
      notes: ["Web Development, OOP Java, Database Design, Laravel, React"],
    },
  ],

  certifications: [
    {
      name: "Junior Programmer",
      issuer: "BNSP",
      year: "2020",
    },
    {
      name: "Artificial Intelligence Training",
      issuer: "Kamp Kreatif SMK Indonesia",
      year: "2020",
    },
    {
      name: "Junior Web Developer",
      issuer: "Kominfo RI — VSGA Digital Talent Scholarship",
      year: "2021",
    },
    {
      name: "Project-Based Online Internship",
      issuer: "PT LEN Industri (Persero)",
      year: "2021",
    },
  ],
};
