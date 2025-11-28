// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content
// No coding knowledge required - just update the text, links, and information below

export const personalInfo = {
  name: "Rae Addison P. Duque",
  title: "FullStack Developer | Infomration Technolgy Student",
  tagline: "Building innovative solutions with modern technologies",
  email: "radzduque@gmail.com",
  phone: "+1 (123) 456-7890",
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
    image: "/profile-placeholder.jpg",
    
    // Skills with proficiency (0-100)
    skills: [
      { name: "JavaScript/React", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "UI/UX Design", level: 70 },
    ],
    
    // Additional interests or technologies you're learning
    interests: ["Web Development", "Machine Learning", "Open Source", "UI/UX Design"]
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
    tags: ["React", "Springboot", "MySQL", "Java", "Python","Gemini AI"],
    demoLink: "https://demo-link.com",
    githubLink: "https://wordmaster-nu.vercel.app/login",
    featured: true, // Set to true for projects you want to highlight
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and real-time updates.",
    longDescription: "Developed a productivity tool that helps users organize their tasks efficiently. Features include drag-and-drop task organization, priority levels, due dates, and collaborative features.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Material-UI", "React Beautiful DnD"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A modern weather application with real-time data visualization and 7-day forecast.",
    longDescription: "Created a weather dashboard that provides current weather conditions, hourly forecasts, and weekly predictions using OpenWeather API. Features include location search, favorites, and responsive charts.",
    image: "/projects/weather.jpg",
    tags: ["React", "API Integration", "Chart.js", "CSS3"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/project",
    featured: false,
  },
  // Add more projects as needed
];

// ============================================
// EXPERIENCE
// ============================================
// Add your work experience, internships, or freelance work here
export const experience = [
//   {
//     id: 1,
//     position: "Frontend Developer Intern",
//     company: "Tech Company Name",
//     location: "City, Country",
//     duration: "Jun 2024 - Aug 2024",
//     type: "Internship", // Internship, Full-time, Part-time, Freelance
//     description: [
//       "Developed responsive web applications using React and TypeScript",
//       "Collaborated with design team to implement pixel-perfect UI components",
//       "Optimized application performance, reducing load time by 40%",
//       "Participated in code reviews and followed agile development practices"
//     ],
//     technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
//     current: false,
//   },
//   {
//     id: 2,
//     position: "Web Development Volunteer",
//     company: "Non-Profit Organization",
//     location: "Remote",
//     duration: "Jan 2024 - May 2024",
//     type: "Volunteer",
//     description: [
//       "Redesigned organization website, improving user engagement by 60%",
//       "Implemented responsive design ensuring mobile compatibility",
//       "Created content management system for easy updates",
//       "Trained staff on website maintenance and updates"
//     ],
//     technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
//     current: false,
//   },
  // Add more experiences as needed
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
    icon: "trophy", // trophy, award, certificate, star
    link: "https://certificate-link.com"
  },
  {
    id: 2,
    title: "TOPCIT - Level 3 Certified",
    organization: "Institute of Information & Communications Technology Planning & Evaluation (IITP)",
    date: "July 2025",
    description: "Earned AWS Cloud Practitioner certification demonstrating knowledge of cloud concepts and AWS services.",
    icon: "certificate",
    link: "https://certificate-link.com"
  },
  {
    id: 3,
    title: "Top 7 in BS Information Technology - 3rd Year",
    organization: "University Name",
    date: "September 2025",
    description: "Ranked Top 7 among peers in the BS Information Technology program for outstanding academic performance.",
    icon: "star",
    link: null
  },
  {
    id: 4,
     title: "Top 7 in BS Information Technology - 2rd Year",
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
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    duration: "2021 - 2025 (Expected)",
    gpa: "3.8/4.0",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Computer Networks"
    ],
    achievements: [
      "Dean's List (3 semesters)",
      "CS Department Scholarship Recipient"
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
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  
  // Social links with display names
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
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
