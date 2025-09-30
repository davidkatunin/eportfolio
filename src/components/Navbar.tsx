"use client";

import { useEffect, useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";

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
  const [navOpacity, setNavOpacity] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (!hasInteracted) {
        if (scrollY > 0) {
          setHasInteracted(true);
        }
        return;
      }

      const startFadeAt = 0.2 * viewportHeight;
      const endFadeAt = 1.0 * viewportHeight;
      const rawProgress = (scrollY - startFadeAt) / (endFadeAt - startFadeAt);
      const clamped = Math.min(1, Math.max(0, rawProgress));
      setNavOpacity(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasInteracted]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] border-b transition-colors duration-500 ease-out lg:bg-transparent bg-white`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navOpacity})`,
        borderColor: `rgba(209, 213, 219, ${navOpacity})`,
      }}
    >
        <div className="flex flex-row justify-between sm:px-24 px-6 py-3 sm:py-2 font-[Impact] items-center sm:bg-transparent bg-white">
            <div className="flex flex-col text-xl sm:text-2xl cursor-pointer" onClick={() => window.location.href = '/'}>
            <p>David</p>
            <p>Katunin</p>
            </div>
        
            <ul className="hidden lg:flex flex-row justify-between gap-8 lg:gap-12 text-lg lg:text-xl">
                <li>
                    <a href="/swe" className="hover:text-blue-500 transition-colors duration-200">Software Development</a>
                </li>
                <li>
                    <a href="/photography" className="hover:text-blue-500 transition-colors duration-200">Photography</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-blue-500 transition-colors duration-200">About</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact Me</a>
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
    </nav>
  );
}
