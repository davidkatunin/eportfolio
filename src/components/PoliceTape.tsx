import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

export default function PoliceTape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const speedPxPerSecond = 80; // Speed

  // Ensure we're on the client side before starting animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const firstItem = containerRef.current.querySelector<HTMLDivElement>('.tape-item');
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
    if (!itemWidth || !containerWidth) return 4;
    return Math.ceil(containerWidth / itemWidth) + 4;
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
  }, [itemWidth, speedPxPerSecond, isClient]);

  const TapeBlock = (
    <div className="tape-item flex items-center whitespace-nowrap">
      <span className="px-10 font-black text-2xl md:text-3xl tracking-widest text-white" style={{
        textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 0 0 10px rgba(0, 0, 0, 0.8)'
      }}>
        🚧 COMING SOON 🚧
      </span>
    </div>
  );

  // Don't render the animated content until we're on the client
  if (!isClient) {
    return (
      <div className="police-tape">
        <div className="flex whitespace-nowrap">
          <div className="tape-item flex items-center whitespace-nowrap">
            <span className="px-10 font-black text-2xl md:text-3xl tracking-widest text-white" style={{
              textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 0 0 10px rgba(0, 0, 0, 0.8)'
            }}>
              🚧 COMING SOON 🚧
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="police-tape"
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
            {TapeBlock}
          </div>
        ))}
      </div>
    </div>
  );
}

