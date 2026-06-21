import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPython } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg7 from '../assets/project9.avif';
import projectImg8 from '../assets/project11.avif';

export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Developing responsive, accessible, and high-performance user interfaces using modern frontend technologies.',
    tags: ['HTML','CSS','Javascript','React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Building secure and scalable server-side applications, REST APIs, and business logic for web platforms.',
    tags: ['Node.js', 'Express', 'Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing efficient database structures and optimizing data storage for performance and reliability.',
    tags: ['MongoDB','MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Leveraging modern development tools for version control, collaboration, testing, and deployment.',
    tags: ['Git & GitHub', 'VS Code','IntelliJ IDEA','Postman']
  }
];



export const projects = [

  
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website showcasing my projects, technical skills, internship experience, and development journey using React.js, Tailwind CSS, and Framer Motion.",
    image: projectImg7,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "BuddyPay – Future of Teen Finance",
    description: "A full-stack fintech application that empowers teenagers with secure digital payments while providing parents with spending controls, wallet management, transaction monitoring, and AI-powered financial guidance.",
    image: projectImg8,
    tech: ["React.js", "Django", "Django REST Framework", "SQLite", "Groq AI", "Tailwind CSS"],
    icons: [FaReact, FaPython, FaRobot],
    demo: "#",
    code: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
  role: "Full Stack Developer Intern",
  company: "EY GDS & Edunet Foundation",
  duration: "2026 • 1 Month",
  description:
    "Developed BuddyPay, a fintech web application for teen digital payments, implementing secure authentication, parental controls, wallet management, and AI-powered assistance using React.js and Django.",
  color: "purple"
}]