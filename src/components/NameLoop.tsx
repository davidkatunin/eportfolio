import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { FlagForLithuania } from "@/components/FlagForLithuania";
import { FlagForUnitedStates } from "@/components/FlagForUnitedStates";

export default function NameLoop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const speedPxPerSecond = 100; // Speed

  // Ensure we're on the client side before starting animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const firstItem = containerRef.current.querySelector<HTMLDivElement>('.loop-item');
    if (firstItem) {
      setItemWidth(firstItem.offsetWidth);
    }
    setContainerWidth(containerRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, isClient]);

  const copies = useMemo(() => {
    if (!itemWidth || !containerWidth) return 3;
    return Math.ceil(containerWidth / itemWidth) + 3;
  }, [itemWidth, containerWidth]);

  useEffect(() => {
    if (!itemWidth || !isClient) return;
    let frame: number;
    let last = Date.now();
    let isRunning = true;
    
    const step = (now: number) => {
      if (!isRunning) return;
      
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      offsetRef.current += speedPxPerSecond * dt;
      const wrapped = ((offsetRef.current % itemWidth) + itemWidth) % itemWidth;
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-wrapped}px, 0, 0)`;
      }
      
      frame = requestAnimationFrame(step);
    };
    
    frame = requestAnimationFrame(step);
    
    return () => {
      isRunning = false;
      cancelAnimationFrame(frame);
    };
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

  // Don't render the animated content until we're on the client
  if (!isClient) {
    return (
      <div className="relative w-full overflow-hidden pb-24 text-white font-[Impact]">
        <div className="flex whitespace-nowrap">
          <div className="flex whitespace-nowrap">
            <div className="loop-item flex items-center">
              <span className="sm:text-[15rem] text-[100px] font-bold">David Katunin</span>
              <div className="flex flex-col sm:px-16 px-8 h-full gap-10">
                <FlagForLithuania className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                <FlagForUnitedStates className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden pb-24 text-white font-[Impact]">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
      >
        <div 
          ref={trackRef} 
          className="flex whitespace-nowrap will-change-transform"
          style={{ 
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          {Array.from({ length: copies }).map((_, i) => (
            <div key={i} style={{ backfaceVisibility: 'hidden' }}>
              {NameBlock}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
