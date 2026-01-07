import React from 'react';

const AnimatedLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizes = {
    sm: { width: 180, height: 50 },
    md: { width: 240, height: 65 },
    lg: { width: 320, height: 85 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ height }}>
      {/* Logo Text */}
      <svg 
        viewBox="0 0 280 80" 
        width={width} 
        height={height}
        className="overflow-visible"
      >
        {/* CHILDMATE text */}
        <text
          x="5"
          y="35"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="26"
          letterSpacing="1"
        >
          <tspan fill="hsl(270, 60%, 50%)">CHILD</tspan>
          <tspan fill="hsl(250, 30%, 25%)">MATE</tspan>
        </text>
        
        {/* Play School text */}
        <text
          x="5"
          y="60"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="500"
          fontSize="20"
          fill="hsl(250, 30%, 25%)"
          letterSpacing="2"
        >
          Play School
        </text>
        
        {/* Color dots */}
        <circle cx="152" cy="55" r="5" fill="hsl(45, 95%, 60%)" />
        <circle cx="167" cy="55" r="5" fill="hsl(158, 50%, 55%)" />
        <circle cx="182" cy="55" r="5" fill="hsl(15, 90%, 65%)" />
        
        {/* Animated Boy Character */}
        <g className="bounce-character" style={{ transformOrigin: '245px 30px' }}>
          {/* Head */}
          <ellipse cx="245" cy="18" rx="16" ry="15" fill="#FFD7B5" />
          {/* Hair */}
          <ellipse cx="245" cy="10" rx="14" ry="10" fill="#F5A623" />
          <ellipse cx="248" cy="8" rx="10" ry="8" fill="#E8941D" />
          {/* Face */}
          <ellipse cx="240" cy="18" rx="2" ry="2" fill="#333" />
          <ellipse cx="250" cy="18" rx="2" ry="2" fill="#333" />
          {/* Happy mouth */}
          <path d="M241 24 Q245 28 249 24" stroke="#333" strokeWidth="1.5" fill="none" />
          {/* Blush */}
          <ellipse cx="236" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
          <ellipse cx="254" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
          {/* Body */}
          <rect x="237" y="33" width="16" height="14" rx="3" fill="white" />
          {/* Arms (waving) */}
          <line x1="233" y1="36" x2="223" y2="28" stroke="#FFD7B5" strokeWidth="4" strokeLinecap="round" />
          <line x1="257" y1="36" x2="267" y2="28" stroke="#FFD7B5" strokeWidth="4" strokeLinecap="round" />
          {/* Hands */}
          <circle cx="221" cy="26" r="4" fill="#FFD7B5" />
          <circle cx="269" cy="26" r="4" fill="#FFD7B5" />
          {/* Legs */}
          <rect x="238" y="47" width="6" height="10" rx="2" fill="hsl(198, 85%, 60%)" />
          <rect x="248" y="47" width="6" height="10" rx="2" fill="hsl(198, 85%, 60%)" />
          {/* Shoes */}
          <ellipse cx="241" cy="58" rx="4" ry="3" fill="hsl(198, 85%, 45%)" />
          <ellipse cx="251" cy="58" rx="4" ry="3" fill="hsl(198, 85%, 45%)" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
