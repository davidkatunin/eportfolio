"use client";

import CurvedLoop from "@/components/CurvedLoop";
 
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#d9d5d2]">
      <nav className="sticky top-0 z-50 bg-[#d9d5d2] border-b border-gray-300">
        <div className="flex flex-row justify-between px-16 py-2 font-[Anton] items-center">
          <div className="flex flex-col">
            <p>David</p>
            <p>Katunin</p>
          </div>
          <div className="flex flex-row justify-between">
            Links!
          </div>
        </div>
      </nav>
      <section className="flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <div className="text-xl mb-4">Picture with my name and countries and software developer</div>
        </div>
        <CurvedLoop 
          marqueeText="David Katunin 🇱🇹 🇺🇸"
          speed={2.5}
          curveAmount={0}
          interactive={false}
          className="text-[15rem] font-anton"
        />
      </section>
      <section className="h-screen bg-white">
        <div className="h-full flex items-center justify-center">
          <p className="text-2xl">Scroll down to see more content...</p>
        </div>
      </section>
    </div>
  );
}
