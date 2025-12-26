"use client";

import { Code2, Camera, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `flex gap-2 items-center transition-colors duration-200 ${
      pathname === href ? "text-[#00f5ff] hover:cursor-pointer" : "text-gray-300 hover:text-[#00f5ff] hover:cursor-pointer"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-[#00f5ff]/40`}
      style={{
        boxShadow: '0 6px 16px rgba(0,245,255,0.2), 0 -2px 8px rgba(0,245,255,0.15) inset',
        animation: 'glowPulse 2.4s ease-in-out infinite alternate',
      }}
    >
      <div className="flex flex-row justify-between sm:px-24 px-6 py-3 sm:py-2 items-center sm:bg-transparent h-16">
        <button 
          onClick={() => window.location.href = '/'}
          className="text-xl text-white hover:text-[#00f5ff] transition-colors"
        >
          <span className="text-[#00f5ff]">{'<'}</span>
          DK
          <span className="text-[#00f5ff]">{'/>'}</span>
        </button>
        <ul className="hidden lg:flex flex-row justify-between gap-8 lg:gap-12 text-md lg:text-lg font-light">
          <li className={linkClasses("/")}>
            <Home className="w-5 h-5"/>
            <Link href="/">Home</Link>
          </li>
          <li className={linkClasses("/swe")}>
            <Code2 className="w-5 h-5"/>
            <Link href="/swe">Software Engineer</Link>
          </li>
          <li className={linkClasses("/photography")}>
            <Camera className="w-5 h-5"/>
            <Link href="/photography">Photography</Link>
          </li>
        </ul>
        <ul className="lg:hidden flex flex-row gap-6 items-center">
          <li>
            <Link href="/" className={linkClasses("/")}>
              <Home className="w-5 h-5"/>
            </Link>
          </li>
          <li>
            <Link href="/swe" className={linkClasses("/swe")}>
              <Code2 className="w-5 h-5"/>
            </Link>
          </li>
          <li>
            <Link href="/photography" className={linkClasses("/photography")}>
              <Camera className="w-5 h-5"/>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            box-shadow:
              0 4px 10px rgba(0, 245, 255, 0.18),
              0 -2px 6px rgba(0, 245, 255, 0.14) inset;
          }
          100% {
            box-shadow:
              0 8px 14px rgba(0, 245, 255, 0.3),
              0 -3px 8px rgba(0, 245, 255, 0.18) inset;
          }
        }
      `}</style>
    </nav>
  );
}
