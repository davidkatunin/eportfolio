"use client";

import NameLoop from "@/components/NameLoop";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import WorldMap from "@/components/world-map";
import { SpiralCalendar } from "@/components/SpiralCalendar";
import { ContactSection } from "@/components/ContactSection";
import { FlagBadges } from "@/components/FlagBadges";
import PoliceTape from "@/components/PoliceTape";
import { MapPin, Terminal, Code2, Camera, Briefcase, Calendar, Code, ExternalLink, Github } from "lucide-react";
import { motion } from 'motion/react';

const experiences = [
  {
    title: 'Software Developer Intern',
    logo: '/nordLogo.png',
    company: 'Nord Security',
    period: 'June 2025 - September 2025',
    description: 'Built a full-stack contract renewal dashboard using Next.js, PostgreSQL, and AWS, designing the data schema and UI/UX, automating renewal workflows and Jira ticket generation, and leveraging AI tools for efficient development and debugging.',
    technologies: ['Python', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker'],
    color: '#3E5FFF'
  },
  {
    title: 'Software Engineer Intern',
    logo: '/aubotLogo.png',
    company: 'Aubot',
    period: 'January 2025 - March 2025',
    description: 'Reviewed and enhanced advanced Python and Java curriculum, authoring clear explanations and solutions for data-structure concepts while identifying content gaps and collaborating with the team to improve overall course quality.',
    technologies: ['Java', 'Python'],
    color: '#8338ec'
  },
  {
    title: 'Software Developer Intern',
    logo: '/nordLogo.png',
    company: 'Nord Security',
    period: 'June 2024 - August 2024',
    description: 'Developed a secure internal ESG dashboard using AWS services, reducing software costs and improving reporting efficiency, while implementing automated renewal alerts and strengthening code quality through tooling, reviews, and AI-assisted development.',
    technologies: ['Python', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker'],
    color: '#3E5FFF'
  }
];

const projects = [
  {
    title: 'MediaVault',
    description: 'Full-stack web app built with the Django framework, enabling users to log, rate, and discover movies, TV shows, books, and video games all in one place.',
    image: 'https://images.unsplash.com/photo-1763198302381-ebffcec5410f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'REST APIs'],
    docs: 'https://www.linkedin.com/in/david-katunin-783108197/overlay/1757638124532/single-media-viewer/?profileId=ACoAAC4ctlMBpl57nE5o6ZwpWxNfYXb0XRGOpbM',
    featured: true
  },
  {
    title: 'S.D.C.E',
    description: 'Productivity Chrome extension that tracks browser activity, resets daily stats, and manages streaks using JavaScript and Chrome Storage.',
    image: 'https://lh3.googleusercontent.com/85QQTCDSLmNtpHwOVCrqsv4fl41s6O1tAxlsK3Dc4K2DXWSe4dha4lZvqS0L7qMDaJsWnvMk6SqWIktLzfXBTQOGBK8=s800-w800-h500',
    technologies: ['TypeScript', 'Chrome DevTools', 'TailwindCSS', 'Git'],
    github: 'https://github.com/davidkatunin/SDCE',
    demo: 'https://chromewebstore.google.com/',
    featured: true
  },
  {
    title: 'Instagram Gallery',
    description: 'An unordered gallery showcasing my photography work, featuring curated shots that reflect my visual style and creative perspective beyond software development.',
    image: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demo: 'https://www.instagram.com/dova.visuals/',
  },
  {
    title: 'FireArm Forge',
    description: 'Firearm customization platform built with a modular backend and interactive UI, allowing users to configure real-world weapons, browse attachment data, and visualize builds in real time.',
    image: 'https://images.unsplash.com/photo-1543347080-1a67824f1be2?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comingSoon: true,
  },
  {
    title: 'Japan Gallery',
    description: 'The Gallery for my upcoming Japan trip in March-April 2026, where I move across Tokyo, Osaka, and Kyoto',
    image: 'https://images.unsplash.com/photo-1660477703315-516fe0575770?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Go', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    comingSoon: true,
  }
];

const photoshoots = [
  {
    title: 'Cities Gallery',
    description: 'A gallery of my cities and architecture shots across America and Europe',
    image: './DSC00824.jpg',
    category: 'Cities & Architecture'
  },
  {
    title: 'Peoples Gallery',
    description: 'A gallery of portraits I have shot of friends and family over the years.',
    image: './DSC00807.jpg',
    category: 'People & Portraits'
  },
  {
    title: 'Joninės Gallery',
    description: 'A gallery of my time in Kernavė 2024, during Joninės.',
    image: './DSC00180.jpg',
    category: 'Events'
  }
];

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden relative" style={{
        backgroundColor: '#0a0e27',
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
        `,
        backgroundSize: '200px 200px',
        backgroundBlendMode: 'overlay'
      }}>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(100,200,255,0.5)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)'
          }}
        />
          <section className="relative flex flex-col justify-between items-center min-h-[100vh] sm:h-[100vh]">
            <div className="hidden sm:block absolute bottom-0 left-0 z-0 w-full opacity-60">
              <NameLoop />
            </div>
            <div className="absolute inset-0 overflow-hidden z-0">
              <img
                src="/portrait.PNG"
                alt="Portrait of David Katunin"
                className="w-full h-full object-cover object-center sm:object-contain sm:origin-center sm:scale-95 sm:object-center sm:-translate-x-[20%] sm:translate-y-[6%]"
              />
            </div>
            <div className="relative w-full flex-1 flex flex-col justify-center px-4 py-12 sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2 sm:h-full sm:px-6 sm:py-0 text-white bg-gradient-to-b from-[#0a0e27]/90 via-[#0a0e27]/70 to-[#0a0e27]/90 sm:bg-gradient-to-l sm:from-[#0a0e27]/60 sm:via-[#0a0e27]/30 sm:to-transparent z-10">
              <div className="relative z-10 max-w-6xl mx-auto w-full sm:px-6 sm:py-20 sm:-translate-y-[90px]">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6 sm:justify-start">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#050816] border border-gray-800">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00f5ff]" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Based in
                    </span>
                  </div>
                  <FlagBadges />
                </div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center sm:justify-start">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-[#00f5ff]" />
                  <span className="text-[#00f5ff] tracking-wider uppercase text-xs sm:text-sm text-center sm:text-left">Full Stack Developer & Visual Artist</span>
                </div>
                <h1 className="mb-4 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-center sm:text-left">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block text-glow-cyan text-[#00f5ff] glitch-text">David Katunin</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
                  Building the future with code and capturing moments through the lens. 
                  Specializing in full-stack development, AI/ML, and cyberpunk aesthetics.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center sm:justify-start">
                  <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#050816] border border-[#00f5ff]/30 rounded cyber-glow-cyan">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00f5ff]" />
                    <span className="text-sm sm:text-base text-[#00f5ff]">Software Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#050816] border border-[#ff006e]/30 rounded cyber-glow-pink">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff006e]" />
                    <span className="text-sm sm:text-base text-[#ff006e]">Photographer</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  <a 
                    href="#projects" 
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#00f5ff] text-[#0a0e27] hover:bg-[#00f5ff]/90 transition-all duration-300 cyber-glow-cyan text-center text-sm sm:text-base font-medium"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#050816] text-[#00f5ff] border border-[#00f5ff]/30 hover:text-[#0a0e27] hover:bg-[#00f5ff]/90 transition-all duration-300 cyber-glow-cyan text-center text-sm sm:text-base font-medium"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <ScrollDownArrow />
          </section>
        </div>
      <div/>
      <section className="pt-20 mb-20 w-full items-center bg-[#121838]">
        <motion.div
          className="fixed inset-0 pointer-events-none z-30"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 245, 255, 0.03) 2px, rgba(0, 245, 255, 0.03) 4px)'
          }}
          animate={{
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <section id="experience" className="pb-20 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-[#00f5ff]" />
              <span className="text-[#00f5ff] tracking-wider uppercase text-md">Career Journey</span>
            </div>
            <h2 className="mb-16 text-white text-5xl font-bold">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group relative p-6 bg-[#050816] border border-gray-800 hover:border-[#00f5ff]/50 transition-all duration-300"
                  style={{
                    borderLeft: `4px solid ${exp.color}`
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="">
                      <div className="flex flex-row gap-5">
                        <img src={exp.logo} alt="" className="w-14 h-14" />
                        <div className="">
                          <h3 className="text-white mb-2">{exp.title}</h3>
                          <h4 className="text-[#00f5ff] mb-2">{exp.company}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[#0a0e27] border border-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-[#0a0e27]">
          <div className="max-w-6xl mx-auto px-4 text-start">
            <section className="pt-20 relative overflow-hidden">
              <div className="mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#00f5ff]" />
                  <span className="text-[#00f5ff] tracking-wider uppercase text-sm">Global Experience</span>
                </div>
                <h2 className="mb-8 text-white text-5xl font-bold">Where I've Worked</h2>
                <p className="text-gray-300 mb-12 max-w-2xl">
                  Each dot on this map represents more than just a destination—it's where I've worked, 
                  lived, and captured moments that tell the story of my career in software development and passion for photography.
                </p>
              </div>
            </section>
          </div>
          <div className="max-w-6xl mx-auto px-4 w-full bg-[#050816] rounded-t-lg relative font-sans p-4">
            <div className="flex flex-row gap-2 text-sm">
              <h3 className="text-sm font-semibold mb-3">
                <span className="text-yellow-600">Le</span>
                <span className="text-green-600">ge</span>
                <span className="text-red-600">nd</span>
              </h3>
              <span className="text-[#5c5c5c]">- hover points for info</span>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 20 20" className="w-4 h-4">
                    <circle cx="10" cy="10" r="5" fill="#0abdc6" />
                    <circle cx="10" cy="10" r="5" fill="#0abdc6" opacity="0.5">
                    </circle>
                  </svg>
                </div>
                <span className="text-xs text-[#5c5c5c]">Current Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 20 20" className="w-4 h-4">
                    <circle cx="10" cy="10" r="5" fill="#ffc0cb" />
                    <circle cx="10" cy="10" r="5" fill="#ffc0cb" opacity="0.5">
                    </circle>
                  </svg>
                </div>
                <span className="text-xs text-[#5c5c5c]">Past Work</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <SpiralCalendar className="w-4 h-4" />
                </div>
                <span className="text-xs text-[#5c5c5c]">Upcoming</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <WorldMap />
          </div>
        </div>
      </section>
      <div className="bg-[#050816]">
        <section className="py-20 max-w-6xl mx-auto px-4 text-start" id="projects">
          <div className="mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-[#00f5ff]" />
              <span className="text-[#00f5ff] tracking-wider uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="mb-8 text-white text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div 
                key={index}
                className={`group relative overflow-hidden bg-[#0a0e27] border border-gray-800 hover:border-[#00f5ff]/50 transition-all duration-300 ${project.comingSoon ? 'opacity-60' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: project.comingSoon ? 0.6 : 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: project.comingSoon ? 0 : -5 }}
              >
                {project.comingSoon && (
                  <>
                    <div className="absolute inset-0 bg-[#0a0e27]/40 backdrop-blur-[2px] z-20"></div>
                    <PoliceTape />
                  </>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${project.comingSoon ? '' : 'group-hover:scale-110'}`}
                    style={project.comingSoon ? { filter: 'grayscale(30%) blur(2px)' } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-white mb-3 font-bold text-3xl">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-[#050816] border border-[#00f5ff]/30 text-[#00f5ff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {!project.comingSoon && (
                    <div className="flex gap-4">
                      {project.github && project.github !== '#' && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-[#00f5ff] transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-[#00f5ff] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                      {project.docs && project.docs !== '#' && (
                        <a 
                          href={project.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-[#00f5ff] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-sm">Docs</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                {!project.comingSoon && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] via-[#8338ec] to-[#ff006e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div 
                key={index}
                className={`group relative overflow-hidden bg-[#0a0e27] border border-gray-800 hover:border-[#8338ec]/50 transition-all duration-300 ${project.comingSoon ? 'opacity-60' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: project.comingSoon ? 0.6 : 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: project.comingSoon ? 0 : -5 }}
              >
                {project.comingSoon && (
                  <>
                    <div className="absolute inset-0 bg-[#0a0e27]/40 backdrop-blur-[2px] z-20"></div>
                    <PoliceTape />
                  </>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${project.comingSoon ? '' : 'group-hover:scale-110'}`}
                    style={project.comingSoon ? { filter: 'grayscale(30%) blur(2px)' } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  {!project.comingSoon && (
                    <div className="flex gap-3">
                      {project.github && project.github !== '#' && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#8338ec] transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#8338ec] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.docs && project.docs !== '#' && (
                        <a 
                          href={project.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#8338ec] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-[#121838]">
        <section className="py-20 max-w-6xl mx-auto px-4 text-start">
          <div className="mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-[#ff006e]" />
              <span className="text-[#ff006e] tracking-wider uppercase text-sm">Visual Stories</span>
            </div>
            <h2 className="mb-8 text-white text-5xl font-bold">Photography</h2>
            <p className="text-gray-300 mb-12 max-w-2xl">
              A selection of photography projects showcasing my work across different subjects, locations, and moments.           
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photoshoots.map((shoot, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden bg-[#050816] border border-gray-800 hover:border-[#ff006e]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={shoot.image} 
                    alt={shoot.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 text-xs bg-[#ff006e] text-white mb-3">
                      {shoot.category}
                    </span>
                    <h4 className="text-white mb-2">{shoot.title}</h4>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {shoot.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ff006e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
