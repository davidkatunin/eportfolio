"use client";

import NameLoop from "@/components/NameLoop";
import Navbar from "@/components/Navbar";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import WorldMap from "@/components/world-map";
import { LaptopHouse } from "@/components/LaptopHouse";
import { SpiralCalendar } from "@/components/SpiralCalendar";
import { ContactSection } from "@/components/ContactSection";
import { FlagBadges } from "@/components/FlagBadges";
import { MapPin, Terminal, Code2, Camera } from "lucide-react";

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
        <Navbar />
        <section className="relative flex flex-col justify-between items-center h-[100vh]">
          <div className="absolute bottom-0 left-0 z-0 w-full pb-20 sm:pb-0 opacity-60">
            <NameLoop />
          </div>
          <div className="absolute inset-0 overflow-hidden z-0">
            <img
              src="/portrait.PNG"
              alt="Portrait of David Katunin"
              className="w-full h-full object-cover translate-y-[8%] sm:translate-y-[5%] sm:object-contain sm:origin-center sm:scale-95 sm:object-center sm:-translate-x-[20%]"
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 h-full flex flex-col justify-center px-6 sm:px-12 text-white bg-gradient-to-l from-[#0a0e27]/60 via-[#0a0e27]/30 to-transparent z-10">
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
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
              <h1 className="mb-6">
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
      <section>
        <div className="pt-24 bg-white w-full bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-xl md:text-4xl text-black">
              Where I've Worked
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Each dot on this map represents more than just a destination—it's where I've worked, 
            lived, and captured moments that tell the story of my career in software development and passion for photography.
            </p>
          </div>
          <div>
            <div className="w-4/5 bg-white rounded-lg relative font-sans mx-auto p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Legend</h3>
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
                    <LaptopHouse className="text-blue-500 w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-700">Remote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5">
                    <SpiralCalendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-700">Upcoming</span>
                </div>
              </div>
            </div>
            <WorldMap />
          </div>
        </div>
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
}
