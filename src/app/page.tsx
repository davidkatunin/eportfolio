"use client";

import { useEffect, useState } from "react";
import NameLoop from "@/components/NameLoop";
import Navbar from "@/components/Navbar";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import WorldMap from "@/components/world-map";
import { LaptopHouse } from "@/components/LaptopHouse";
import { SpiralCalendar } from "@/components/SpiralCalendar";
import { ContactSection } from "@/components/ContactSection";
import ClientPerformanceMonitor from "@/components/ClientPerformanceMonitor";


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative" style={{
      backgroundColor: '#d9d5d2',
      backgroundImage: `
        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
      `,
      backgroundSize: '200px 200px',
      backgroundBlendMode: 'overlay'
    }}>
      <Navbar />
      <section className="relative flex flex-col justify-between items-center h-[100vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/portrait.PNG" alt="Portrait of David Katunin" className="w-full h-full object-cover object-[center_20%] origin-top scale-[1.03] translate-y-[8%] sm:translate-y-[5%] sm:object-contain sm:origin-center sm:scale-100 sm:object-center sm:-translate-x-[20%]"/>
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full pb-20 sm:pb-0">
          <NameLoop />
        </div>
        <ScrollDownArrow />
      </section>
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
    </div>
  );
}
