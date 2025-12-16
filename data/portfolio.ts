export interface Project {
  name: string;
  company?: string;
  technology: string[];
  url: string;
  description?: string;
  features?: string[];
  contributions: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  board?: string;
  years: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Amna Sheikh",
  title: "MERN Stack Web Developer",
  subtitle: "Full-Stack Developer",
  tagline: "Passionate about crafting engaging user experiences and building scalable web solutions",
  age: "22 Years",
  nationality: "Pakistani",
  address: "Rawalpindi",
  phone: "0336 5355358",
  whatsapp: "+92 336 5355358",
  email: "amnaaena12@gmail.com",
  github: "github.com/aenasheikh753",
  linkedin: "www.linkedin.com/in/amna-sheikhh12",
  languages: ["English", "Urdu"],
};

export const stats = {
  experience: 1.5,
  projects: 10,
  clients: 18,
  performance: 100,
};

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    role: "Project Manager",
    company: "Alright Tech",
    content: "Amna is an exceptional front-end developer. Her attention to detail and ability to create responsive, user-friendly interfaces is outstanding. She consistently delivers high-quality work on time.",
    rating: 5
  },
  {
    name: "Sarah Ali",
    role: "CEO",
    company: "Potolo",
    content: "Working with Amna was a pleasure. She transformed our vision into a beautiful, functional platform. Her expertise in React and Next.js helped us build a scalable solution that our users love.",
    rating: 5
  },
  {
    name: "Hassan Malik",
    role: "Tech Lead",
    company: "Street 10",
    content: "Amna's technical skills and problem-solving abilities are impressive. She implemented complex features with Redux and state management flawlessly. Highly recommended!",
    rating: 5
  }
];

export interface SkillWithProgress {
  name: string;
  percentage: number;
}

export const summary = "Frontend Developer with 1.5+ years of hands-on experience, specializing in crafting modern, high-performance applications using React.js and Next.js. Continuously enhancing expertise in writing clean, maintainable code, optimizing performance, and developing reusable components. Proficient in Bootstrap and Tailwind CSS for creating responsive and visually stunning interfaces, along with strong foundations in HTML, CSS, and JavaScript. Well-versed in API integration, implementing frontend security best practices, and deploying applications via Vercel and Netlify. Passionate about artificial intelligence, with practical experience integrating and working with OpenAI APIs to build innovative solutions.";

export const topSkills: SkillWithProgress[] = [
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  // { name: "MongoDB", percentage: 75 },
  { name: "Bootstrap", percentage: 75 },
  { name: "Js", percentage: 90 },
  { name: "Next.js", percentage: 70 },
  { name: "HTML/CSS", percentage: 95 },
  { name: "Tailwind CSS", percentage: 85 },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS", "HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "SQL", "SQLite"]
  },
  {
    category: "MERN Stack",
    items: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  },
  {
    category: "API & Tools",
    items: ["Postman (API testing)", "Axios (API integration)", "Figma (UI/UX design)"]
  },
  {
    category: "Deployment",
    items: ["Vercel", "Netlify", "Heroku", "Render"]
  },
  {
    category: "Other",
    items: ["Responsive Design", "Full-Stack Development", "MVC Architecture", "UI/UX Best Practices"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Alright Tech",
    role: "Front-end Developer",
    duration: "Feb 2024 – Present",
    projects: [
      {
        name: "Potolo",
        technology: ["HTML/CSS", "JavaScript", "Bootstrap"],
        url: "https://potolo.com/",
        description: "A responsive front-end platform for businesses (restaurants, shops, groceries) featuring a multi-level dropdown with custom icons and adaptive design for seamless browsing across devices.",
        features: [
          "User-friendly interface optimized for mobile/desktop",
          "Custom icon integration for enhanced UX",
          "Fully responsive business pages"
        ],
        contributions: [
          "Conceptualized and Developed a centralized digital ecosystem designed to unify multiple services under a single, cohesive web platform.",
          "Launched 'Potolo Super Market' as the flagship service, focusing on high-performance UI and a seamless user journey.",
          "Designed a modular and scalable architecture to facilitate the rapid integration of future services such as Potolo Restaurants and Potolo Grocery.",
          "Implemented a unified navigation and design language across the platform to maintain brand consistency and improve user retention."
        ]
      },
      {
        name: "Sign N Track",
        technology: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel"],
        url: "https://www.signntrack.com/",
        description: "A secure Swiss e-signature and document management platform designed for teams and businesses that need fast digital signing, document tracking, and simple contract management.",
        features: [
          "Cross-platform digital signature solution for global document processing",
          "Multi-tier subscription model with free trial and premium features",
          "Fully responsive interface optimized for mobile and desktop",
          "Comprehensive Admin Dashboard for user and document management",
          "Real-time document monitoring and security settings"
        ],
        contributions: [
          "Developed a cross-platform digital signature solution allowing users to securely sign and process documents globally, eliminating the need for physical paperwork.",
          "Architected a multi-tier subscription model, integrating a free trial and a premium tier with enhanced security features for advanced users.",
          "Engineered a fully responsive interface using Bootstrap, ensuring a seamless document management experience across mobile and desktop devices.",
          "Built a comprehensive Admin Dashboard to provide full control over user management, real-time document monitoring, and system security settings.",
          "Streamlined document workflows to enhance user efficiency."
        ]
      },
      {
        name: "Street 10",
        technology: ["React js", "Tailwind CSS", "Redux Toolkit", "Axios"],
        url: "https://street10.vercel.app/",
        description: "A high-performance car auction and e-commerce marketplace built with React.js, featuring real-time bidding, secure authentication, and comprehensive order management system.",
        features: [
          "Real-time bidding system for seamless car auctions",
          "Secure role-based authentication with JWT for customers and vendors",
          "Robust state management with Redux Toolkit and Redux Persist",
          "KYC verification module with CNIC upload functionality",
          "Comprehensive order management and user wallet system",
          "Fully responsive UI with Tailwind CSS for all devices"
        ],
        contributions: [
          "Developed a high-performance car auction and e-commerce marketplace using React.js, enabling seamless real-time bidding for users.",
          "Implemented a secure, role-based authentication system with JWT and Axios interceptors to manage distinct access levels for customers and vendors.",
          "Developed a robust state management architecture using Redux Toolkit and Redux Persist to ensure data consistency and session persistence across the application.",
          "Integrated a secure KYC verification module featuring CNIC upload functionality to enhance platform trust and security.",
          "Built a comprehensive order management and user wallet system, providing real-time tracking of refund requests, bidding history, and account balances.",
          "Architected responsive UI components with Tailwind CSS, ensuring an optimized user experience across mobile, tablet, and desktop devices."
        ]
      }
    ]
  }
];

export const education: Education[] = [
  {
    degree: "BS Software Engineering",
    institution: "PMAS AAUR",
    years: "2020 - 2024"
  },
  {
    degree: "INTERMEDIATE (FSC)",
    institution: "FBISE",
    board: "FBISE",
    years: "2018 - 2020"
  },
  {
    degree: "Matric",
    institution: "FBISE",
    board: "FBISE",
    years: "2016 - 2018"
  }
];

