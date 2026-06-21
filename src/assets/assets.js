import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPython } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


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
    description: 'Building responsive and interactive user interfaces with modern framework.',
    tags: ['HTML','CSS','Javascript','React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS Code','IntelliJ IDEA','Postman']
  }
];



export const projects = [

  
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and knowledge with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "BuddyPay – Future of Teen Finance",
    description: "A full-stack fintech platform enabling secure, parent-supervised digital payments and financial management for teenagers",
    image: projectImg6,
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