"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import DottedMap from "dotted-map";
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

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 400;
const TOOLTIP_WIDTH = 320;
const TOOLTIP_OFFSET = 12;

const myDots = [
  {
    lat: 38,
    lng: -90,
    color: "#0abdc6",
    icon: "circle",
    data: {
      title: "Current Location",
      description: "I'm currently living in Chicago, Illinois.",
      image: "/usa.png",
    }
  },
  {
    lat: 50,
    lng: 26,
    color: "#ffc0cb",
    icon: "circle",
    data: {
      title: "Vilnius, Lithuania",
      description: "I've interned at Nord Security 2x as a Software Engineer.",
      image: "/nordLogo.png",
    }
  },
  {
    lat: 23,
    lng: 146,
    icon: "calendar",
    data: {
      title: "Upcoming Trip",
      description: "I'm going to Tokyo, Osaka, and Kyoto in Spring 2026.",
      image: "/japan.png",
    }
  },
  {
    lat: -61,
    lng: 154,
    color: "#ffc0cb",
    icon: "circle",
    data: {
      title: "Melbourne, Australia",
      description: "I've interned at Aubot remotely as a Software Engineer.",
      image: "/aubotLogo.png",
    }
  },
]

export default function WorldMap({
  dots = myDots,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipSide, setTooltipSide] = useState<"right" | "left">("right");
  const [isClient, setIsClient] = useState(false);
  const [svgMap, setSvgMap] = useState<string>("");

  // Generate the map only on the client side to prevent hydration mismatches
  useEffect(() => {
    setIsClient(true);
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const mapSvg = map.getSVG({
      radius: .5,
      color: "#5c5c5c", // map dots color
      shape: "circle",
      backgroundColor: "#050816", // Background Color of map div
    });
    setSvgMap(mapSvg);
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (VIEWBOX_WIDTH / 360);
    const y = (90 - lat) * (VIEWBOX_HEIGHT / 180);
    return { x, y };
  };

  const computePosition = useCallback((point: { x: number; y: number }) => {
    const containerRect = svgRef.current?.getBoundingClientRect();
    if (!containerRect) return null;

    const scaleX = containerRect.width / VIEWBOX_WIDTH;
    const scaleY = containerRect.height / VIEWBOX_HEIGHT;

    return {
      x: containerRect.left + point.x * scaleX,
      y: containerRect.top + point.y * scaleY,
    };
  }, []);

  const updateTooltipPosition = useCallback(() => {
    if (hoveredDot === null || !lastPointRef.current) return;
    const pos = computePosition(lastPointRef.current);
    if (!pos) return;

    const overflowsRight =
      pos.x + TOOLTIP_OFFSET + TOOLTIP_WIDTH > (typeof window !== "undefined" ? window.innerWidth : 0);
    const overflowsLeft =
      pos.x - TOOLTIP_OFFSET - TOOLTIP_WIDTH < 0;

    setTooltipSide(overflowsRight && !overflowsLeft ? "left" : "right");
    setTooltipPosition(pos);
  }, [hoveredDot, computePosition]);

  const handleMouseEnter = useCallback(
    (index: number, point: { x: number; y: number }) => {
      lastPointRef.current = point;
      setHoveredDot(index);
      const pos = computePosition(point);
      if (!pos) return;

      const overflowsRight =
        pos.x + TOOLTIP_OFFSET + TOOLTIP_WIDTH > (typeof window !== "undefined" ? window.innerWidth : 0);
      const overflowsLeft =
        pos.x - TOOLTIP_OFFSET - TOOLTIP_WIDTH < 0;

      setTooltipSide(overflowsRight && !overflowsLeft ? "left" : "right");
      setTooltipPosition(pos);
    },
    [computePosition]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredDot(null);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateTooltipPosition);
    return () => window.removeEventListener("resize", updateTooltipPosition);
  }, [updateTooltipPosition]);

  if (!isClient || !svgMap) {
    return (
      <div className="w-full aspect-[2/1] bg-white rounded-b-lg relative font-sans mx-auto flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-b-lg border-t-2 border-[#00f5ff]/70 relative font-sans mx-auto overflow-visible">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none rounded-b-2xl"
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
          const color = dot.color;
          
          return (
            <g 
              key={`dot-group-${i}`} 
              transform={`translate(${point.x}, ${point.y})`}
              onMouseEnter={() => handleMouseEnter(i, point)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              {dot.icon === "circle" ? (
                <>
                  <circle
                    cx="0"
                    cy="0"
                    r="3"
                    fill={color}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="3"
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
          className="fixed bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-sm z-50 pointer-events-none will-change-transform"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform:
              tooltipSide === "right"
                ? `translate(${TOOLTIP_OFFSET}px, -50%)`
                : `translate(calc(-100% - ${TOOLTIP_OFFSET}px), -50%)`,
            transition: 'none'
          }}
        >
          <div className="flex items-start space-x-2">
            {dots[hoveredDot].data?.image && (
              <img 
                src={dots[hoveredDot].data?.image} 
                alt={dots[hoveredDot].data?.title}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-black"
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
