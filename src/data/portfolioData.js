export const personalInfo = {
  name: "Ankit Raj",
  title: "MCA Student | Software Developer | Full-Stack Developer",
  tagline: "Building practical software solutions with Java, Spring Boot, React, Python and modern technologies.",
  shortIntro: "Passionate software developer with a strong foundation in programming, data structures, databases, and full-stack development. I enjoy building practical applications and solving real-world problems using modern technologies.",
  location: "Muzaffarpur, Bihar, India",
  email: "ankitraj25581@gmail.com",
  phone: "+91 7564853697",
  linkedin: "https://www.linkedin.com/in/ankit-raj-212b66245/",
  github: "https://github.com/ankitraj2000",
  linkedinDisplay: "linkedin.com/in/ankit-raj-212b66245",
  githubDisplay: "github.com/ankitraj2000",
  resumeUrl: "/resume.pdf",
  mca: {
    institution: "Lovely Professional University",
    degree: "Master of Computer Applications",
    years: "2025–2027",
    cgpa: "8.23",
    location: "Phagwara, Punjab"
  },
  bca: {
    institution: "M.M.H.A.P.U. University",
    degree: "Bachelor of Computer Applications",
    years: "2021–2024",
    percentage: "78%",
    location: "Patna, Bihar"
  }
};

export const interests = [
  "Software Development",
  "Full-Stack Development",
  "Java",
  "Spring Boot",
  "Database Management",
  "Data Structures & Algorithms",
  "Machine Learning / Data Analysis"
];

export const skillsData = {
  programmingLanguages: [
    { name: "C", level: "Intermediate", icon: "Code2", color: "from-blue-500 to-indigo-600" },
    { name: "C++", level: "Intermediate", icon: "Terminal", color: "from-blue-600 to-cyan-500" },
    { name: "Java", level: "Intermediate", icon: "Coffee", color: "from-amber-500 to-red-600" },
    { name: "Python", level: "Intermediate", icon: "FileCode", color: "from-yellow-400 to-blue-500" },
    { name: "PHP", level: "Intermediate", icon: "Server", color: "from-indigo-400 to-purple-600" },
    { name: "JavaScript", level: "Intermediate", icon: "FileYellow", color: "from-yellow-300 to-amber-500" },
    { name: "HTML", level: "Intermediate", icon: "Layout", color: "from-orange-500 to-red-500" },
    { name: "CSS", level: "Intermediate", icon: "Palette", color: "from-blue-400 to-cyan-400" },
    { name: "SQL", level: "Intermediate", icon: "Database", color: "from-teal-400 to-emerald-600" }
  ],
  technologiesTools: [
    { name: "Git", level: "Intermediate", icon: "GitBranch" },
    { name: "GitHub", level: "Intermediate", icon: "Github" },
    { name: "Linux", level: "Intermediate", icon: "Cpu" },
    { name: "Excel", level: "Intermediate", icon: "FileSpreadsheet" },
    { name: "NumPy", level: "Intermediate", icon: "Binary" },
    { name: "Pandas", level: "Intermediate", icon: "Table" },
    { name: "Matplotlib", level: "Intermediate", icon: "BarChart3" },
    { name: "Scikit-learn", level: "Intermediate", icon: "Brain" }
  ],
  coreConcepts: [
    { 
      title: "Object-Oriented Programming", 
      desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID principles & Design Patterns.",
      badge: "OOP",
      icon: "Boxes"
    },
    { 
      title: "Database Management Systems", 
      desc: "Relational Modeling, Normalization, Complex Queries, Indexing, JDBC & ACID Transactions.",
      badge: "DBMS",
      icon: "Database"
    },
    { 
      title: "Data Structures & Algorithms", 
      desc: "Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Time/Space Complexity Analysis.",
      badge: "DSA",
      icon: "Workflow"
    }
  ]
};

export const projectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    duration: "December 2025 – February 2026",
    role: "Full-Stack Developer",
    description: "Full-stack Expense Tracker application built using Spring Boot, React, SQL, and JWT Authentication.",
    github: "https://github.com/Ankitraj2000/expense-tracker",
    technologies: ["Spring Boot", "React", "SQL", "JWT", "REST API", "Vercel", "CSS3"],
    features: [
      "Secure user registration and login",
      "JWT authentication & authorization",
      "Role-based authentication",
      "Add, update and delete income/expenses",
      "Expense categorization & budget tracking",
      "Dashboard analytics with breakdown",
      "Monthly financial reports",
      "RESTful APIs architecture",
      "SQL database integration",
      "Frontend deployment on Vercel"
    ],
    accentColor: "from-cyan-500 to-blue-600",
    badge: "Full-Stack App",
    mockType: "expense"
  },
  {
    id: "traffic-accident-analysis",
    title: "Traffic Accident Analysis",
    duration: "March 2026 – May 2026",
    role: "Data Analyst & ML Developer",
    description: "Machine learning project that analyzes traffic accident data to identify accident patterns and generate data-driven insights.",
    github: "https://github.com/Ankitraj2000/Traffic_accident_analysis",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "EDA"],
    features: [
      "Data preprocessing and cleaning pipelines",
      "Exploratory Data Analysis (EDA)",
      "High-impact data visualization graphs",
      "Statistical analysis & correlations",
      "Predictive machine learning modeling",
      "Accident pattern identification & hotspot mapping"
    ],
    accentColor: "from-emerald-500 to-teal-600",
    badge: "ML / Data Analysis",
    mockType: "traffic"
  },
  {
    id: "atm-management-system",
    title: "ATM Management System",
    duration: "January 2024 – March 2024",
    role: "Java Developer",
    description: "Java-based ATM Simulator System connected with MySQL using JDBC to simulate real-world banking operations.",
    github: "https://github.com/Ankitraj2000/Atm_Simulator_System.git",
    technologies: ["Java", "MySQL", "JDBC", "OOP", "SQL"],
    features: [
      "Secure user PIN authentication",
      "Real-time balance inquiry",
      "Cash withdrawal with limit validation",
      "Instant account deposit",
      "Detailed transaction history logging",
      "Dynamic database CRUD operations",
      "JDBC relational integration",
      "Strong Object-Oriented Design"
    ],
    accentColor: "from-amber-500 to-indigo-600",
    badge: "Java Core System",
    mockType: "atm"
  }
];

export const educationTimeline = [
  {
    institution: "Lovely Professional University",
    degree: "Master of Computer Applications (MCA)",
    years: "2025 – 2027",
    score: "CGPA: 8.23",
    scoreType: "CGPA",
    location: "Phagwara, Punjab",
    status: "Currently Pursuing",
    highlights: ["Advanced Software Engineering", "Cloud & Web Architectures", "Full Stack Development", "Database Optimization"],
    icon: "GraduationCap"
  },
  {
    institution: "M.M.H.A.P.U. University",
    degree: "Bachelor of Computer Applications (BCA)",
    years: "2021 – 2024",
    score: "Percentage: 78%",
    scoreType: "Percentage",
    location: "Patna, Bihar",
    status: "Completed with Distinction",
    highlights: ["Computer Fundamentals", "C & Java Programming", "Database Systems", "Web Technologies"],
    icon: "BookOpen"
  },
  {
    institution: "Dr. R.M.L.S. College",
    degree: "Intermediate (Class XII)",
    years: "2017 – 2019",
    score: "Percentage: 75%",
    scoreType: "Percentage",
    location: "Muzaffarpur, Bihar",
    status: "Completed",
    highlights: ["Science Stream", "Mathematics", "Physics & Chemistry"],
    icon: "Award"
  },
  {
    institution: "Indraprastha International School",
    degree: "Matriculation (Class X)",
    years: "2016 – 2017",
    score: "CGPA: 7.04",
    scoreType: "CGPA",
    location: "Muzaffarpur, Bihar",
    status: "Completed",
    highlights: ["General Sciences", "Mathematics", "Computer Science Foundations"],
    icon: "School"
  }
];

export const certificationsData = [
  {
    title: "Java Programming",
    issuer: "Neocolab",
    date: "June 2026",
    skills: ["Java SE", "OOP Concepts", "Data Structures", "Collections Framework"],
    badge: "Verified Certification",
    icon: "Coffee",
    color: "border-amber-500/30 text-amber-400"
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
    date: "November 2025",
    skills: ["Modern C++", "Pointers & Memory", "STL Algorithms", "Object Design"],
    badge: "Verified Certificate",
    icon: "Code2",
    color: "border-blue-500/30 text-blue-400"
  },
  {
    title: "C Programming",
    issuer: "Great Learning",
    date: "October 2023",
    skills: ["C Syntax", "Control Structures", "Arrays & Strings", "File Handling"],
    badge: "Verified Certificate",
    icon: "FileCode",
    color: "border-cyan-500/30 text-cyan-400"
  }
];

export const achievementsData = [
  {
    title: "BrainBytes – Coding Competition",
    award: "2nd Prize",
    date: "April 2026",
    organization: "Boom Script Club, LPU School of Computer Applications",
    description: "Secured 2nd position among competitive developer teams in problem-solving, algorithmic speed, and data structure execution challenges.",
    type: "Coding Contest",
    icon: "Trophy",
    accent: "from-amber-400/20 to-yellow-600/10 border-amber-500/40 text-amber-300"
  },
  {
    title: "HackManthan 2025",
    award: "24-Hour Hackathon Participant",
    date: "November 2025",
    organization: "EventEye, Lovely Professional University",
    description: "Engineered rapid web solution prototype under tight 24-hour sprint constraint, focusing on architecture quality, UI design, and database stability.",
    type: "Hackathon",
    icon: "Zap",
    accent: "from-cyan-400/20 to-blue-600/10 border-cyan-500/40 text-cyan-300"
  }
];

export const githubActivity = {
  username: "ankitraj2000",
  profileUrl: "https://github.com/ankitraj2000",
  publicRepos: 12,
  topLanguages: ["Java", "JavaScript", "Python", "SQL", "C++"],
  recentRepositories: [
    {
      name: "expense-tracker",
      url: "https://github.com/Ankitraj2000/expense-tracker",
      desc: "Full-stack Expense Tracker with Spring Boot, React, SQL & JWT Auth",
      lang: "Java / React",
      stars: 4,
      forks: 1
    },
    {
      name: "Traffic_accident_analysis",
      url: "https://github.com/Ankitraj2000/Traffic_accident_analysis",
      desc: "ML model and EDA dashboard analyzing traffic accident patterns",
      lang: "Python",
      stars: 3,
      forks: 1
    },
    {
      name: "Atm_Simulator_System",
      url: "https://github.com/Ankitraj2000/Atm_Simulator_System.git",
      desc: "Java ATM simulator using JDBC and MySQL database",
      lang: "Java / MySQL",
      stars: 2,
      forks: 0
    }
  ]
};
