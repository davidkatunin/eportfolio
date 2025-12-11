"use client";

import NameLoop from "@/components/NameLoop";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import WorldMap from "@/components/world-map";
import { SpiralCalendar } from "@/components/SpiralCalendar";
import { ContactSection } from "@/components/ContactSection";
import { FlagBadges } from "@/components/FlagBadges";
import { MapPin, Terminal, Code2, Camera, Briefcase, Calendar, Code } from "lucide-react";
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
          <section className="relative flex flex-col justify-between items-center h-[100vh]">
            <div className="absolute bottom-0 left-0 z-0 w-full pb-20 sm:pb-0 opacity-60">
              <NameLoop />
            </div>
            <div className="absolute inset-0 overflow-hidden z-0">
              <img
                src="/portrait.PNG"
                alt="Portrait of David Katunin"
                className="w-full h-full object-cover translate-y-[8%] sm:translate-y-[6%] sm:object-contain sm:origin-center sm:scale-95 sm:object-center sm:-translate-x-[20%]"
              />
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 h-full flex flex-col justify-center px-6 sm:pt-40 sm:px-12 text-white bg-gradient-to-l from-[#0a0e27]/60 via-[#0a0e27]/30 to-transparent z-10">
              <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 -translate-y-[90px]">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#050816] border border-gray-800">
                    <MapPin className="w-4 h-4 text-[#00f5ff]" />
                    <span className="text-gray-300 text-sm">Based in</span>
                  </div>
                  <FlagBadges />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-[#00f5ff]" />
                  <span className="text-[#00f5ff] tracking-wider uppercase text-sm">Full Stack Developer & Visual Artist</span>
                </div>
                <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block text-glow-cyan text-[#00f5ff] glitch-text">David Katunin</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                  Building the future with code and capturing moments through the lens. 
                  Specializing in full-stack development, AI/ML, and cyberpunk aesthetics.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-3 px-6 py-3 bg-[#050816] border border-[#00f5ff]/30 rounded cyber-glow-cyan">
                    <Code2 className="w-5 h-5 text-[#00f5ff]" />
                    <span className="text-[#00f5ff]">Software Engineer</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-[#050816] border border-[#ff006e]/30 rounded">
                    <Camera className="w-5 h-5 text-[#ff006e]" />
                    <span className="text-[#ff006e]">Photographer</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="px-8 py-3 bg-[#00f5ff] text-[#0a0e27] hover:bg-[#00f5ff]/90 transition-all duration-300 cyber-glow-cyan"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-8 py-3 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-all duration-300"
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
              <span className="text-gray-800">- hover points for info</span>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 20 20" className="w-4 h-4">
                    <circle cx="10" cy="10" r="2" fill="red" />
                    <circle cx="10" cy="10" r="2" fill="red" opacity="0.5">
                      <animate attributeName="r" from="2" to="6" dur="1.5s" begin="0s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <span className="text-xs text-gray-700">Current Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 20 20" className="w-4 h-4">
                    <circle cx="10" cy="10" r="2" fill="green" />
                    <circle cx="10" cy="10" r="2" fill="green" opacity="0.5">
                      <animate attributeName="r" from="2" to="6" dur="1.5s" begin="0s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <span className="text-xs text-gray-700">Past Work</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <SpiralCalendar className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-700">Upcoming</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <WorldMap />
          </div>
        </div>
      </section>
      <div className="bg-[#050816]">
        <section className="h-[500px] pt-20 max-w-6xl mx-auto px-4 text-start">
          <div className="mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-[#00f5ff]" />
              <span className="text-[#00f5ff] tracking-wider uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="mb-8 text-white text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="">
            test
          </div>
        </section>
      </div>
      <section>
        <ContactSection />
      </section>
    </>
  );
}
