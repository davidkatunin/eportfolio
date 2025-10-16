"use client";

import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import DottedMap from "dotted-map";
import { LaptopHouse } from "./LaptopHouse";
import { SpiralCalendar } from "./SpiralCalendar";

interface MapProps {
  dots?: Array<{
    lat: number;
    lng: number;
    color?: string;
    icon?: string;
    data?: {
      title: string;
      description: string;
      image?: string;
    };
  }>;
  dotColor?: string;
}

const myDots = [
  {
    lat: 44,
    lng: -83,
    color: "red",
    icon: "circle",
    data: {
      title: "Current Location",
      description: "I'm currently living in Chicago, Illinois.",
      image: "/usa.png",
    }
  },
  {
    lat: 49,
    lng: 24,
    color: "green",
    icon: "circle",
    data: {
      title: "Vilnius, Lithuania",
      description: "I've interned at Nord Security 2x as a Software Engineer.",
      image: "/nordLogo.png",
    }
  },
  {
    lat: 23,
    lng: 142,
    icon: "calendar",
    data: {
      title: "Upcoming Trip",
      description: "I'm going to Tokyo, Osaka, and Kyoto in Spring 2026.",
      image: "/japan.png",
    }
  },
  {
    lat: -47,
    lng: 153,
    color: "red",
    icon: "remote",
    data: {
      title: "Melbourne, Australia",
      description: "I've interned at Aubot remotely as a Software Engineer.",
      image: "/aubotLogo.png",
    }
  },
]

export default function WorldMap({
  dots = myDots,
  dotColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [svgMap, setSvgMap] = useState<string>("");

  // Generate the map only on the client side to prevent hydration mismatches
  useEffect(() => {
    setIsClient(true);
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const mapSvg = map.getSVG({
      radius: .5,
      color: "#d9d5d2", // map dots color
      shape: "circle",
      backgroundColor: "white", // Background Color of map div
    });
    setSvgMap(mapSvg);
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const handleMouseEnter = useCallback((index: number, event: React.MouseEvent) => {
    if (hoveredDot === index) return;
    setHoveredDot(index);
    const containerRect = svgRef.current?.getBoundingClientRect();
    if (containerRect) {
      setTooltipPosition({
        x: event.clientX - containerRect.left,
        y: event.clientY - containerRect.top - 10
      });
    }
  }, [hoveredDot]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (hoveredDot !== null) {
      const containerRect = svgRef.current?.getBoundingClientRect();
      if (containerRect) {
        const newX = event.clientX - containerRect.left;
        const newY = event.clientY - containerRect.top - 10;
        
        if (Math.abs(tooltipPosition.x - newX) > 5 || Math.abs(tooltipPosition.y - newY) > 5) {
          setTooltipPosition({ x: newX, y: newY });
        }
      }
    }
  }, [hoveredDot, tooltipPosition]);

  const handleMouseLeave = useCallback(() => {
    setHoveredDot(null);
  }, []);


  // Show loading state until client-side rendering is complete
  if (!isClient || !svgMap) {
    return (
      <div className="w-4/5 aspect-[2/1] bg-white rounded-lg relative font-sans mx-auto flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-4/5 aspect-[2/1] bg-white rounded-lg relative font-sans mx-auto">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none rounded-2xl"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        {dots.map((dot, i) => {
          const point = projectPoint(dot.lat, dot.lng);
          const color = dot.color || dotColor;
          
          return (
            <g 
              key={`dot-group-${i}`} 
              transform={`translate(${point.x}, ${point.y})`}
              onMouseEnter={(e) => handleMouseEnter(i, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              {dot.icon === "circle" ? (
                <>
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={color}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={color}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              ) : dot.icon === "remote" ? (
                <>
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={"#4287f5"}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <g transform="translate(-5, -5)">
                    <LaptopHouse className="text-blue-500" />
                  </g>
                </>
              ) : dot.icon === "calendar" ? (
                <>
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={"#f52a2a"}
                    opacity="1"
                  >
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <g transform="translate(-5, -5)">
                    <SpiralCalendar />
                  </g>
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
      
      {hoveredDot !== null && dots[hoveredDot]?.data && (
        <div
          className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs z-10 pointer-events-none will-change-transform"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: 'translateX(-50%)',
            transition: 'none'
          }}
        >
          <div className="flex items-start space-x-2">
            {dots[hoveredDot].data?.image && (
              <img 
                src={dots[hoveredDot].data?.image} 
                alt={dots[hoveredDot].data?.title}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
            )}
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-gray-900 mb-1">
                {dots[hoveredDot].data?.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {dots[hoveredDot].data?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
