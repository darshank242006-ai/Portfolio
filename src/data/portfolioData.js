// ============================================================
// portfolioData.js
// This file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Darshan K",
  firstName: "Darshan K",
  brandName: "Darshan K", // shown in the preloader, navbar and footer
  title: "Java Developer",
  location: "Bengaluru, India",
  phone: "+91 8951623480",
  emails: {
    primary: "darshank242006@gmail.com",
    secondary: "",
  },
  summary: "A passionate BCA graduate aspiring to become a Java Developer, with knowledge of Java, SQL, HTML, and CSS, eager to learn and build real-world applications.",
  resumeUrl: "/Darshan_Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/darshank242006-ai",
  linkedin: "https://www.linkedin.com/in/darshan-k-5a4b8438a",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Darshan K",
  titleHighlight: "Java Developer",
  subtitle: "Building reliable web applications with Java, Spring Boot, MySQL, and modern frontend technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:darshank242006@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Darshan_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Darshan K</span>, an aspiring Java Full Stack Developer based in Bengaluru, India. I have strong foundational knowledge in Java, OOP, relational databases, and frontend development, sharpening my skills through the placement training program at TAP Academy. Passionate about continuous improvement, I am eager to learn modern frameworks, tackle challenging software problems, and build reliable real-world web applications.`,
  techStack: ["Java", "Spring Boot", "MySQL", "React", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, full-stack approach to building scalable and robust web applications.",
  cards: [
    { number: "01", title: "Research", text: "Analyze application requirements, data models, and user workflows to plan a solid architectural foundation." },
    { number: "02", title: "Design", text: "Structure relational database schemas, design clean RESTful endpoints, and sketch responsive UI layouts." },
    { number: "03", title: "Develop", text: "Implement modular backend business logic in Java with clean database integration and interactive frontend interfaces." },
    { number: "04", title: "Deploy", text: "Conduct comprehensive testing, optimize queries, manage version control with Git, and deploy stable builds." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "OOP Concepts" }, { name: "Data Structures Basics" }],
    },
    {
      title: "Backend & Frameworks",
      skills: [{ name: "Servlets & JSP" }, { name: "Spring Framework" }, { name: "Spring Boot" }, { name: "JDBC" }],
    },
    {
      title: "Frontend Development",
      skills: [{ name: "HTML5 & CSS3" }, { name: "JavaScript (ES6+)" }, { name: "React.js" }, { name: "Bootstrap" }],
    },
    {
      title: "Databases & Tools",
      skills: [{ name: "MySQL" }, { name: "SQL" }, { name: "Git & GitHub" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Developer Intern",
    duration: "2024 - Present",
    skills: [
      "Core Java programming, OOP principles, collections, exception handling, and multithreading",
      "Dynamic web application development using Java Servlets, JSP, and JDBC",
      "Relational database design, writing complex SQL queries, and CRUD operations in MySQL",
      "Responsive frontend development with HTML5, CSS3, JavaScript, and Bootstrap",
      "Full-stack integration connecting frontend user interfaces with Java backend and databases",
    ],
    tech: ["Java", "JDBC", "Servlets", "JSP", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex programming problems into logical, efficient, and clean solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Communicating effectively with peers and mentors to build cohesive software projects." },
  { name: "Analytical Thinking", icon: "📈", desc: "Evaluating data flows, database schemas, and edge cases to ensure robust code." },
  { name: "Adaptability", icon: "⚡", desc: "Quickly learning new frameworks, developer tools, and best practices in modern web development." },
];

export const projects = [
  {
    id: "train-ticket-reservation",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Train Ticket Reservation System",
    description: "A web-based train reservation system enabling users to search routes, check seat availability, book tickets, and view booking history, with an admin panel for schedule management.",
    techTags: ["Java", "J2EE", "JDBC", "SQL", "Bootstrap", "HTML/CSS"],
    links: {
      github: "https://github.com/darshank242006-ai/Train-Ticket-Reservation-System-",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "online-bookstore-system",
    number: "02",
    badge: null,
    title: "Online Bookstore Management System",
    description: "An e-commerce bookstore solution featuring user authentication, book catalog browsing, inventory control, automated receipt generation, and sales tracking.",
    techTags: ["Java", "JDBC", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    links: {
      github: "https://github.com/darshank242006-ai/onlinebookstore",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/darshan-k-5a4b8438a",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "GFGC CN-HALLI",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Developer", "Java · Spring Boot · MySQL", "Building scalable full-stack web solutions"],
  credential: "BCA — GFGC CN-HALLI",
  copyright: `© ${new Date().getFullYear()} Darshan K | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
