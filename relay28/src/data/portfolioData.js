// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content
// No coding knowledge required - just update the text, links, and information below

export const personalInfo = {
  name: "relay.dev",
  title: "FullStack Developer",
  tagline: "Building innovative solutions that fit your needs.",
  email: "radzduque@gmail.com",
  location: "Cebu, Philippines",
  
  // Social Links
  github: "https://github.com/relay28",
  linkedin: "https://linkedin.com/in/raeduqs",

  
  // About Me
  aboutMe: {
    description: `I'm a passionate BSIT student with a keen interest in full-stack development and problem-solving. 
    Currently seeking opportunities to apply my skills in a dynamic tech environment where I can contribute to innovative projects 
    and continue growing as a developer.`,
    
    // Image: Place your photo in the public folder and reference it here
    image: "/profile-placeholder.JPG",
    
    // Skills with proficiency (0-100)
    skills: [
      { name: "Java/Springboot" , level: 95 },
      { name: "JavaScript/React", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "C", level: 80},
      { name: "ServiceNow", level: 80},
      { name: "Python/Django", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "UI/UX Design", level: 70 },
    ],
    
    // Additional interests or technologies you're learning
    interests: ["Web Development","Mobile Development", "Machine Learning", "Open Source", "Networking","CyberSecurity","Cloud Computing"]
  },
  
  // Resume download link
  resumeLink: "/resume.pdf"
};

// ============================================
// PROJECTS
// ============================================
// Add, remove, or edit projects here
export const projects = [
  {
    id: 1,
    title: "WordMaster",
    description: "A interactive language learning platform designed to enhance vocabulary, grammar, and communication skills through role-based gameplay and comprehensive progress tracking.",
    longDescription: ".",
    image: "/projects/WOMS.png", // Place images in public/projects folder
    tags: ["React", "Springboot", "MySQL", "Java", "Python",,"Javascript","Gemini AI"],
    demoLink: "https://wordmaster-nu.vercel.app/login",
    githubLink: "https://github.com/Relay28/Wordmaster",
    featured: true, // Set to true for projects you want to highlight
  },
  {
    id: 2,
    title: "Memoire",
    description: "a digital time capsule system designed to store and share memories over time through both web and mobile applications.",
    longDescription: "",
    image: "/projects/mmrlogo.png",
    tags: ["React", "Springboot", "MySQL", "Java", "Tailwind CSS","Kotlin","Javascript"],
    demoLink: "https://it-342-memoire.vercel.app",
    githubLink: "https://github.com/Relay28/IT342-Memoire",
    featured: true,
  },
  {
    id: 3,
    title: "NoteCraft",
    description: "A modern note taking and sharing app for better note organizing, joined with task management features and messaging for seamless collaboration.",
    longDescription: ".",
    image: "/projects/notecraft.png",
    tags: ["React", "Springboot", "Java", "Javascript"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/relay28/NoteCraft",
    featured: false,
  },
  // Add more projects as needed
];

// ============================================
// EXPERIENCE
// ============================================
// Add your work experience, internships, or freelance work here
export const experience = [
];

// ============================================
// ACHIEVEMENTS
// ============================================
// Add your achievements, awards, certifications, etc.
export const achievements = [
  {
    id: 1,
    title: "PhilNits - Fundamental Information Technology Engineers (FE) Exam Passer",
    organization: "Information Technology Professionals Examination Council (ITPEC)",
    date: "November 2025",
    description: "One of 51 passers.Successfully passed the FE exam, demonstrating proficiency in fundamental IT concepts and practices.",
    icon: "certificate", // trophy, award, certificate, star
    link: "https://certificate-link.com"
  },
   {
    id: 2,
     title: "ServiceNow Service Portal Micro-Certification",
    organization: "ServiceNow",
    date: "November 2025",
    description: "Earned the ServiceNow Service Portal Micro-Certification, demonstrating proficiency in building and managing ServiceNow portals.",
    icon: "certificate",
    link: "https://drive.google.com/file/d/1YnmefggJjxg3kk8VJYwRJdpDG-VrxbvF/view?usp=sharing"
  },
  {
    id: 3,
    title: "TOPCIT - Level 3 Certified",
    organization: "Institute of Information & Communications Technology Planning & Evaluation (IITP)",
    date: "July 2025",
    description: "Earned TOPCIT Level 3 certification, demonstrating advanced proficiency in IT skills and knowledge.",
    icon: "certificate",
    link: "https://drive.google.com/file/d/1j9nDFVgEXvkDLAWcgDNOOdsIfQMvHMNR/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Top 7 in BS Information Technology - 3rd Year",
    organization: "University Name",
    date: "September 2025",
    description: "Ranked Top 7 among peers in the BS Information Technology program for outstanding academic performance.",
    icon: "star",
    link: null
  },
  {
    id: 5,
     title: "Top 7 in BS Information Technology - 2nd Year",
    organization: "University Name",
    date: "September 2024",
    description: "Ranked Top 7 among peers in the BS Information Technology program for outstanding academic performance",
    icon: "star",
    link: null
  },
  // Add more achievements as needed
];

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology",
    institution: "Cebu Institute of Technology - University",
    location: "Cebu City, Philippines",
    duration: "2022 - 2026 (Expected)",
    gpa: "4.5",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "System Administration",
      "CyberSecurity",
      "ServiceNow",
      "AWS",
      "Mobile Development",
      "Networking",
      "Data Analytics"
    ],
    achievements: [
      "Consistent Dean's Lister",
      "Top 7 in BSIT (2nd Year)",
      "Top 7 in BSIT (3nd Year)"
    ]
  },
  // Add more education entries if needed
];

// ============================================
// CONTACT INFORMATION
// ============================================
export const contactInfo = {
  title: "Let's Connect",
  subtitle: "I'm currently seeking opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
  email: "radzduque@gmail.com",
  
  // Social links with display names
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/relay28",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/raeduqs",
      icon: "linkedin"
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/rae.addison.duque",
      icon: "facebook"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:radzduque@gmail.com",
      icon: "email"
    }
  ],
  
  // Available for work?
  availability: {
    status: "Available for opportunities",
    types: ["Internship", "Part-time", "Full-time"],
    startDate: "Immediately"
  }
};
