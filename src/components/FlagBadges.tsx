"use client";

export function FlagBadges() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        <div className="w-10 h-7 border border-gray-700 overflow-hidden">
          <svg viewBox="0 0 60 40" className="w-full h-full">
            <rect width="60" height="40" fill="#B22234" />
            <path
              d="M0,0 h60 v3.08 h-60z M0,6.15 h60 v3.08 h-60z M0,12.31 h60 v3.08 h-60z M0,18.46 h60 v3.08 h-60z M0,24.62 h60 v3.08 h-60z M0,30.77 h60 v3.08 h-60z M0,36.92 h60 v3.08 h-60z"
              fill="#fff"
            />
            <rect width="24" height="17.23" fill="#3C3B6E" />
            <g fill="#fff">
              {[...Array(9)].map((_, row) =>
                [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={2.5 + (row % 2 === 0 ? col * 4 : 2 + col * 4)}
                    cy={1.5 + row * 1.9}
                    r="0.8"
                  />
                ))
              )}
            </g>
          </svg>
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#0a0e27] border border-[#00f5ff] text-[#00f5ff] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          USA
        </div>
      </div>
      <div className="relative group">
        <div className="w-10 h-7 border border-gray-700 overflow-hidden">
          <svg viewBox="0 0 60 40" className="w-full h-full">
            <rect width="60" height="13.33" fill="#FDB913" />
            <rect y="13.33" width="60" height="13.33" fill="#006A44" />
            <rect y="26.66" width="60" height="13.34" fill="#C1272D" />
          </svg>
        </div>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#0a0e27] border border-[#00f5ff] text-[#00f5ff] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Lithuania
        </div>
      </div>
    </div>
  );
}
