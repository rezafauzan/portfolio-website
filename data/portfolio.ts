export type PortfolioData = {
  name: string;
  title: string;
  intro: string;
  location?: string;
  email: string;
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  skills: Array<{
    group: "Frontend" | "Backend" | "Database" | "Tools";
    items: Array<{ name: string }>;
  }>;
  experience: Array<{
    company: string;
    role: string;
    start: string;
    end?: string;
    location?: string;
    highlights: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    tech: string[];
    image: { src: string; alt: string };
    links?: { github?: string; demo?: string };
  }>;
  education: Array<{
    institution: string;
    degree: string;
    start?: string;
    end?: string;
    notes?: string[];
  }>;
  certifications?: Array<{ name: string; issuer?: string; year?: string }>;
};

export const portfolio: PortfolioData = {
  name: "Reza Fauzan Adhima",
  title: "Fullstack Developer",
  intro:
    "Fullstack Web Developer with 4+ years of freelance experience building scalable web applications. Experienced in backend development using Golang, PHP, and Java, with hands-on expertise delivering e-commerce platforms, dashboards, and internal systems. Passionate about clean architecture, maintainable systems, and modern web technologies.",

  location: "Jakarta, Indonesia",

  email: "reza.fauzan.adhima.04@gmail.com",

  links: {
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/in/your-linkedin",
  },

  skills: [
    {
      group: "Frontend",
      items: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Redux Toolkit" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Vite" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Golang (Gin)" },
        { name: "PHP (Laravel)" },
        { name: "CodeIgniter 4" },
        { name: "Java (Quarkus)" },
        { name: "REST API" },
        { name: "JWT Authentication" },
        { name: "Clean Architecture" },
      ],
    },
    {
      group: "Database",
      items: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "MongoDB" },
        { name: "Firebase" },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Docker" },
        { name: "Git" },
        { name: "GitHub Actions" },
        { name: "Linux" },
        { name: "Swagger" },
        { name: "Postman" },
        { name: "Vercel" },
        { name: "VPS" },
      ],
    },
  ],

  experience: [
    {
      company: "PT Nashta Group Global Utama",
      role: "Backend Developer",
      start: "Apr 2026",
      end: "Present",
      location: "Depok, Indonesia",
      highlights: [
        "Contributed to the development of Asset Tracker, an internal office asset management system.",
        "Digitized manual inventory processes into a centralized system to improve data accuracy and accessibility.",
        "Reduced manual asset lookup time from minutes to seconds.",
        "Worked with Gin Gonic, GORM, PostgreSQL, and Docker.",
      ],
    },
    {
      company: "Koda Tech Academy",
      role: "Fullstack Web Developer",
      start: "Dec 2025",
      end: "Apr 2026",
      location: "Depok, Indonesia",
      highlights: [
        "Developed a full-featured Coffee Shop e-commerce platform with role-based access.",
        "Built modular frontend architecture using React.js, Tailwind CSS, and Redux Toolkit.",
        "Designed and implemented RESTful APIs for Infinity Shortlink platform.",
        "Successfully deployed applications to VPS production environments.",
      ],
    },
    {
      company: "Snow x Infinity",
      role: "Fullstack Developer (Freelance)",
      start: "Jun 2022",
      end: "Sep 2025",
      location: "Bandung, Indonesia",
      highlights: [
        "Built responsive company profile and portfolio websites using Next.js and Tailwind CSS.",
        "Developed administrative dashboard systems for government and village correspondence management.",
        "Implemented CMS functionality using Supabase and modern frontend architecture.",
        "Focused on performance, responsive design, and maintainable codebases.",
      ],
    },
    {
      company: "Kawah Edukasi",
      role: "Backend Developer",
      start: "Nov 2022",
      end: "Feb 2023",
      location: "Bandung, Indonesia",
      highlights: [
        "Developed backend services for an employee attendance management system using Java Quarkus.",
        "Implemented attendance recording, user management, and RESTful APIs.",
        "Used PostgreSQL, Swagger, and Postman for API documentation and testing.",
      ],
    },
    {
      company: "PT LEN Industri Persero",
      role: "Project Manager & Backend Developer",
      start: "Mar 2021",
      end: "Apr 2021",
      location: "Indonesia",
      highlights: [
        "Led development of an AI-powered Smart Gate system during internship program.",
        "Built backend APIs using Laravel 8 and MySQL.",
        "Integrated mask detection, temperature measurement, and automated gate operations.",
        "Managed project scheduling, budgeting, and delivery during pandemic constraints.",
      ],
    },
  ],

  projects: [
    {
      name: "Asset Tracker",
      description:
        "Internal office asset management system designed to digitize inventory records and improve asset transparency.",
      tech: ["Gin Gonic", "GORM", "PostgreSQL", "Docker"],
      image: {
        src: "/projects/asset-tracker.png",
        alt: "Asset Tracker dashboard",
      },
    },
    {
      name: "Coffee Shop E-Commerce",
      description:
        "Full-featured coffee shop e-commerce platform with responsive design and role-based access management.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Gin Gonic",
        "PostgreSQL",
        "Docker",
      ],
      image: {
        src: "/projects/coffee-shop.png",
        alt: "Coffee Shop E-Commerce",
      },
    },
    {
      name: "Infinity Shortlink",
      description:
        "Modern URL shortener platform with analytics and RESTful API integration deployed to VPS.",
      tech: [
        "React.js",
        "Gin Gonic",
        "PostgreSQL",
        "Docker",
      ],
      image: {
        src: "/projects/infinity-shortlink.png",
        alt: "Infinity Shortlink",
      },
    },
    {
      name: "Zifinity Portfolio CMS",
      description:
        "Personal portfolio website with integrated CMS for managing articles and personal branding.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
      image: {
        src: "/projects/zifinity.png",
        alt: "Zifinity Portfolio CMS",
      },
    },
    {
      name: "Simpelkan Dashboard",
      description:
        "District administrative dashboard system for managing citizen document requests and correspondence.",
      tech: ["Laravel", "Bootstrap 5", "MySQL", "Chart.js"],
      image: {
        src: "/projects/simpelkan.png",
        alt: "Simpelkan Dashboard",
      },
    },
  ],

  education: [
    {
      institution: "Koda Tech Academy",
      degree: "Fullstack Web Developer",
      start: "2025",
      end: "2026",
      notes: [
        "Learned React.js, Redux Toolkit, Tailwind CSS, Golang, Gin-Gonic, PostgreSQL, Redis, Docker, and SSH.",
      ],
    },
    {
      institution: "Kawah Edukasi",
      degree: "Backend Developer",
      start: "2022",
      end: "2023",
      notes: [
        "Studied Java, Quarkus, PostgreSQL, Swagger, Dependency Injection, Agile/Scrum, and ERD design.",
      ],
    },
    {
      institution: "SMK Negeri 1 Katapang",
      degree: "Software Engineering",
      start: "2019",
      end: "2021",
      notes: [
        "Focused on Web Development, OOP Java, Database Design, Laravel, and React.",
      ],
    },
  ],

  certifications: [
    {
      name: "Junior Programmer",
      issuer: "BNSP",
      year: "2020",
    },
    {
      name: "Junior Web Developer",
      issuer: "Kementerian Komunikasi dan Informatika RI",
      year: "2021",
    },
    {
      name: "Artificial Intelligence Training",
      issuer: "Kamp Kreatif SMK Indonesia",
      year: "2020",
    },
    {
      name: "Project-Based Online Internship Program",
      issuer: "PT LEN Industri Persero",
      year: "2021",
    },
  ],
};