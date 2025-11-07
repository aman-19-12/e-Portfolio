import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, ArrowUp } from 'lucide-react';

/**
 * Modern Developer Portfolio built with React and Tailwind CSS.
 * This single-file component includes a Hero, About, Projects, and Contact section,
 * featuring smooth scrolling navigation and full responsiveness.
 */

// --- Constants (Mock Data) ---

const MOCK_SKILLS = [
  { name: 'React', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Figma/UI Design', level: 65 },
  { name: 'Database (Firestore)', level: 70 },
];

const MOCK_PROJECTS = [
  {
   id: 1,
    title: 'ADMISSION-MANAGEMENT SYSTEM',
    description: 'Developed a complete Admission Management System as a freelance project — streamlined student registration, application tracking, and admin dashboard UI',
    tech: ['C LANGUAGE'],
    link: 'https://github.com/AmanPanwar/admission-management-AMAN',
  },
  {
    id: 2,
    title: 'Graphic Design Internship at Paper2Publish',
    description: 'Worked as a Graphic Design Intern, creating modern poster designs, publication layouts, and digital marketing creatives for the Paper2Publish team',
    tech: ['PHOTOSHOP,CANVA'],
    link: 'https://www.paper2publish.com',
  },
  {
    id: 3,
    title: 'Freelance Creative Design Projects',
    description: 'Designed brand identities, event posters, and custom logo concepts for small businesses and startups as freelance design work',
    tech: ['Photoshop'],
    link: '#',
  },
];

// --- Utility Components ---

// Smooth Scroll Function
const useScrollToRef = (ref) => {
  return () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth',
      });
    }
  };
};

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 flex items-center justify-center sm:justify-start">
    <Icon className="w-8 h-8 mr-3 text-white" />
    {title}
  </h2>
);

// --- Main Components ---

const Header = ({ refs, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'About', ref: refs.aboutRef, icon: User },
    { name: 'Projects', ref: refs.projectsRef, icon: Briefcase },
    { name: 'Contact', ref: refs.contactRef, icon: Mail },
  ];

  const handleScroll = (ref) => {
    setIsOpen(false);
    scrollToSection(ref);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-xl z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black text-white hover:text-cyan-400 transition duration-300">
              {'<Developer/>'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.ref)}
                className="text-slate-300 hover:bg-slate-800 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.ref)}
              className="block w-full text-left text-slate-300 hover:bg-slate-800 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium transition duration-200"
            >
              <item.icon className="w-5 h-5 inline mr-2" />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

const HeroSection = ({ scrollToSection, aboutRef }) => {
  return (
    <section className="h-screen flex items-center justify-center bg-slate-800/50 pt-20" id="hero">
      <div className="text-center max-w-4xl px-6">
        <p className="text-cyan-400 text-lg font-extrabold mb-4">Hi, I'm</p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-4">
          AMAN PANWAR
        </h1>
        <p className="text-2xl sm:text-4xl font-light text-slate-300 mb-8">
           🎯 Innovative Graphic Designer turning ideas into eye-catching visuals that connect and inspire.
        </p>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full text-lg shadow-lg hover:bg-cyan-400 transition duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-24 bg-slate-900" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle icon={User} title="About Me & Skills" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
               I am currently pursuing CSE from Graphic Era Hill University where I am currently improving my hard and soft skills like technical ,designing and communication .
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              While my core field is computer science I have strong interest in creativity and designing . Overtime I realise how impactful design can be for making technology more user friendly helping brand connect with  people that is what inspired me to set a goal of becoming graphic designer.            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {MOCK_SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                  <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
    <Code className="w-8 h-8 text-cyan-400 mb-4" />
    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-slate-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span key={t} className="px-3 py-1 text-xs font-semibold bg-slate-700 text-cyan-300 rounded-full">
          {t}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center transition duration-200"
    >
      View Demo / Code &rarr;
    </a>
  </div>
);

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-24 bg-slate-800" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle icon={Briefcase} title="Featured Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-slate-400">Want to see more? <a href="#" className="text-cyan-400 hover:underline">Check out my GitHub.</a></p>
        </div>
      </div>
    </section>
  );
});

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-24 bg-slate-900" id="contact">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTitle icon={Mail} title="Get In Touch" />
        <p className="text-slate-300 text-xl text-center mb-10">
          I'm currently open to new opportunities. Send me a message and let's build something amazing together!
        </p>
        
        {/* Simple Contact Form Mockup */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg text-lg shadow-lg hover:bg-cyan-400 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});


const Footer = ({ scrollToTop }) => (
  <footer className="bg-slate-950 py-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-slate-500">
      <p className="text-center sm:text-left mb-4 sm:mb-0">
        &copy; {new Date().getFullYear()} AMAN PANWAR
        📞+91 8273250890
        📩p.aman.19122005@gmail.com
      </p>
      <button
        onClick={scrollToTop}
        className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition duration-200"
      >
        <ArrowUp className="w-5 h-5 mr-1" />
        Back to Top
      </button>
    </div>
  </footer>
);


// --- Main Application Component ---

const App = () => {
  // Refs for smooth scrolling
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { heroRef, aboutRef, projectsRef, contactRef };

  // Utility to scroll to any ref
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - (ref === heroRef ? 0 : 80), // No offset for Hero
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = useScrollToRef(heroRef);


  // Set document title (best practice for web apps)
  useEffect(() => {
    document.title = "AMAN PANWAR | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200">
      {/* Global Styles */}
      <style>{`
        /* Custom scrollbar for aesthetics */
        body::-webkit-scrollbar {
          width: 8px;
        }
        body::-webkit-scrollbar-track {
          background: #0f172a;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #06b6d4; /* cyan-500 */
          border-radius: 4px;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Header refs={refs} scrollToSection={scrollToSection} />

      <main>
        <div ref={heroRef}><HeroSection scrollToSection={scrollToSection} aboutRef={aboutRef} /></div>
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </main>

      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default App;
