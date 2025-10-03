"use client";

import NameLoop from "@/components/NameLoop";
import Navbar from "@/components/Navbar";
import ScrollDownArrow from "@/components/ScrollDownArrow";

export default function Home() {
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
      <section className=" bg-white">
        <div className="flex flex-col items-center justify-top px-48 py-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          </div>
          <div className="flex flex-row w-1/2 justify-between gap-10">
            <p className="text-lg w-1/">
              I am a software engineer with a passion for creating beautiful and functional web applications. I am a quick learner and I am always looking to improve my skills.
              I am currently working as a software engineer at a startup called "The Box" where I am responsible for the development of the company's website and the company's mobile app.
            </p>
            <div className="flex flex-col gap-4 w-1/2">
              <h2 className="text-2xl font-bold">My Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
