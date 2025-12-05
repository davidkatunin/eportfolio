"use client";

import StaggeredMenu from "@/components/StaggeredMenu";
import { Code2, Camera, Home } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
  { label: 'Tech', ariaLabel: 'Learn about my swe', link: '/services' },
  { label: 'Photos', ariaLabel: 'Take a look at my photos', link: '/photography'},
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/davidkatunin' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/david-katunin-783108197/' },
  { label: 'Instagram', link: 'https://www.instagram.com/dova.visuals/' },
];

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
        <ul className="hidden lg:flex flex-row justify-between gap-8 lg:gap-12 text-lg lg:text-xl">
          <li className={linkClasses("/")}>
            <Home />
            <a href="/">Home</a>
          </li>
          <li className={linkClasses("/swe")}>
            <Code2 />
            <a href="/swe">Software Engineer</a>
          </li>
          <li className={linkClasses("/photography")}>
            <Camera />
            <a href="/photography">Photography</a>
          </li>
        </ul>
        <div className="lg:hidden">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#000"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            accentColor="#ff6b6b"
          />
        </div>
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
