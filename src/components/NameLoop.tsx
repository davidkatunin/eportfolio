import { useEffect, useRef, useState, useMemo } from 'react';
import { FlagForLithuania } from "@/components/FlagForLithuania";
import { FlagForUnitedStates } from "@/components/FlagForUnitedStates";

export default function NameLoop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const speedPxPerSecond = 100; // Speed

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const firstItem = containerRef.current.querySelector<HTMLDivElement>('.loop-item');
      if (firstItem) {
        setItemWidth(firstItem.offsetWidth);
      }
      setContainerWidth(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const copies = useMemo(() => {
    if (!itemWidth || !containerWidth) return 3;
    return Math.ceil(containerWidth / itemWidth) + 3;
  }, [itemWidth, containerWidth]);

  useEffect(() => {
    if (!itemWidth) return;
    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      offsetRef.current += speedPxPerSecond * dt;
      const wrapped = ((offsetRef.current % itemWidth) + itemWidth) % itemWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-wrapped}px)`;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [itemWidth, speedPxPerSecond]);

  const NameBlock = (
    <div className="loop-item flex items-center">
      <span className="sm:text-[15rem] text-[100px] font-bold">David Katunin</span>
      <div className="flex flex-col sm:px-16 px-8 h-full gap-10">
        <FlagForLithuania className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
        <FlagForUnitedStates className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden pb-24 text-white font-[Impact]">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
      >
        <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: copies }).map((_, i) => (
            <div key={i}>{NameBlock}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
