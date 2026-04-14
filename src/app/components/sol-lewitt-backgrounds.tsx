// Sol LeWitt-inspired background patterns

// Option A: Grid with random straight lines (inspired by Wall Drawing #86)
export const GridLines = () => {
  const lines = Array.from({ length: 40 }, (_, i) => {
    const isHorizontal = Math.random() > 0.5;
    const position = (i % 20) * 50;
    const offset = Math.random() * 100;

    return {
      id: i,
      x1: isHorizontal ? 0 : position + offset,
      y1: isHorizontal ? position + offset : 0,
      x2: isHorizontal ? 1000 : position + offset,
      y2: isHorizontal ? position + offset : 1000,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-lines" x="0" y="0" width="1000" height="1000" patternUnits="userSpaceOnUse">
            {lines.map(line => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lines)" />
      </svg>
    </div>
  );
};

// Option B: Concentric circles (inspired by circle-based wall drawings)
export const ConcentricCircles = () => {
  const circles = Array.from({ length: 8 }, (_, i) => ({
    cx: 50 + (i % 3) * 450,
    cy: 50 + Math.floor(i / 3) * 350,
    rings: 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {circles.map((circle, i) => (
          <g key={i}>
            {Array.from({ length: circle.rings }).map((_, j) => (
              <circle
                key={j}
                cx={circle.cx}
                cy={circle.cy}
                r={30 + j * 25}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

// Option C: Diagonal lines (inspired by Wall Drawing #260)
export const DiagonalLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="60" y2="60" stroke="#1a1a1a" strokeWidth="0.5" />
            <line x1="0" y1="60" x2="60" y2="0" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
      </svg>
    </div>
  );
};

// Option D: Four-part grid (inspired by Wall Drawing #797)
export const FourPartGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical divider */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1a1a1a" strokeWidth="1" />
        {/* Horizontal divider */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1a1a1a" strokeWidth="1" />

        {/* Top-left: vertical lines */}
        <defs>
          <pattern id="vertical" x="0" y="0" width="40" height="100" patternUnits="userSpaceOnUse">
            <line x1="20" y1="0" x2="20" y2="100" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
          <pattern id="horizontal" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="100" y2="20" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
          <pattern id="diagonal-tl" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="40" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
          <pattern id="diagonal-tr" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="50%" height="50%" fill="url(#vertical)" />
        <rect x="50%" y="0" width="50%" height="50%" fill="url(#horizontal)" />
        <rect x="0" y="50%" width="50%" height="50%" fill="url(#diagonal-tl)" />
        <rect x="50%" y="50%" width="50%" height="50%" fill="url(#diagonal-tr)" />
      </svg>
    </div>
  );
};

// Option E: Random arcs (inspired by Wall Drawing #289)
export const RandomArcs = () => {
  const arcs = Array.from({ length: 30 }, (_, i) => {
    const cx = Math.random() * 100;
    const cy = Math.random() * 100;
    const r = 10 + Math.random() * 30;
    const startAngle = Math.random() * 360;
    const endAngle = startAngle + 90 + Math.random() * 90;

    const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
    const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);

    return {
      id: i,
      d: `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {arcs.map(arc => (
          <path
            key={arc.id}
            d={arc.d}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.15"
          />
        ))}
      </svg>
    </div>
  );
};

// Option F: Simple dot grid (minimal and clean)
export const DotGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#1a1a1a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
};

// Option G: Vertical and horizontal bands (inspired by Wall Drawing #340)
export const BandedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical bands */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`v-${i}`}>
            {Array.from({ length: 12 }).map((_, j) => (
              <line
                key={j}
                x1={i * 200 + j * 3}
                y1="0"
                x2={i * 200 + j * 3}
                y2="100%"
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            ))}
          </g>
        ))}
        {/* Horizontal bands */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`h-${i}`}>
            {Array.from({ length: 12 }).map((_, j) => (
              <line
                key={j}
                x1="0"
                y1={i * 250 + j * 3}
                x2="100%"
                y2={i * 250 + j * 3}
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

// Option H: Scribble lines (inspired by Wall Drawing #46)
export const ScribbleLines = () => {
  const scribbles = Array.from({ length: 25 }, (_, i) => {
    const startX = (i % 5) * 20 + Math.random() * 10;
    const startY = Math.floor(i / 5) * 20 + Math.random() * 10;
    let path = `M ${startX} ${startY}`;

    for (let j = 0; j < 8; j++) {
      const x = startX + Math.random() * 15 - 7.5;
      const y = startY + Math.random() * 15 - 7.5;
      path += ` L ${x} ${y}`;
    }

    return { id: i, d: path };
  });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {scribbles.map(scribble => (
          <path
            key={scribble.id}
            d={scribble.d}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.15"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};

// Option I: Triangular grid (inspired by geometric wall drawings)
export const TriangularGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="triangle-pattern" x="0" y="0" width="80" height="69.28" patternUnits="userSpaceOnUse">
            {/* Triangle pointing up */}
            <path d="M 40,0 L 80,69.28 L 0,69.28 Z" fill="none" stroke="#1a1a1a" strokeWidth="1" />
            {/* Internal lines */}
            <line x1="20" y1="34.64" x2="60" y2="34.64" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangle-pattern)" />
      </svg>
    </div>
  );
};

// Option J: Wavy parallel lines (inspired by Wall Drawing #273)
export const WavyLines = () => {
  const waves = Array.from({ length: 40 }, (_, i) => {
    const y = i * 30;
    let path = `M 0 ${y}`;
    for (let x = 0; x <= 2000; x += 50) {
      const amplitude = 15;
      const frequency = 0.02;
      const yOffset = Math.sin(x * frequency + i * 0.5) * amplitude;
      path += ` L ${x} ${y + yOffset}`;
    }
    return { id: i, d: path };
  });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {waves.map(wave => (
          <path
            key={wave.id}
            d={wave.d}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
};

// Option K: Square grid with diagonal fills
export const DiagonalSquares = () => {
  const size = 60;
  const cols = 30;
  const rows = 25;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const x = col * size;
            const y = row * size;
            const type = (row + col) % 4;

            return (
              <g key={`${row}-${col}`}>
                <rect
                  x={x}
                  y={y}
                  width={size}
                  height={size}
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="0.5"
                />
                {type === 0 && (
                  <line x1={x} y1={y} x2={x + size} y2={y + size} stroke="#1a1a1a" strokeWidth="0.5" />
                )}
                {type === 1 && (
                  <line x1={x + size} y1={y} x2={x} y2={y + size} stroke="#1a1a1a" strokeWidth="0.5" />
                )}
                {type === 2 && (
                  <>
                    <line x1={x} y1={y} x2={x + size} y2={y + size} stroke="#1a1a1a" strokeWidth="0.5" />
                    <line x1={x + size} y1={y} x2={x} y2={y + size} stroke="#1a1a1a" strokeWidth="0.5" />
                  </>
                )}
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
};

// Option L: Radiating lines from corner (inspired by Wall Drawing #289)
export const RadiatingLines = () => {
  const numLines = 60;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: numLines }).map((_, i) => {
          const angle = (i / numLines) * 180;
          const length = 2000;
          const x2 = Math.cos((angle * Math.PI) / 180) * length;
          const y2 = Math.sin((angle * Math.PI) / 180) * length;

          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="#1a1a1a"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
};

// Option M: Organic overlapping circles (inspired by Wall Drawing #358)
export const OverlappingCircles = () => {
  const circles = Array.from({ length: 40 }, (_, i) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: 5 + Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {circles.map((circle, i) => (
          <circle
            key={i}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.2"
          />
        ))}
      </svg>
    </div>
  );
};

// Option N: Dense horizontal lines (inspired by Wall Drawing #260)
export const DenseHorizontal = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dense-horizontal" x="0" y="0" width="100" height="6" patternUnits="userSpaceOnUse">
            <line x1="0" y1="3" x2="100" y2="3" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dense-horizontal)" />
      </svg>
    </div>
  );
};

// Option O: Cross-hatch squares (inspired by Wall Drawing #122)
export const CrossHatchSquares = () => {
  const size = 100;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crosshatch-square" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            {/* Square */}
            <rect x="0" y="0" width={size} height={size} fill="none" stroke="#1a1a1a" strokeWidth="1" />
            {/* Diagonal lines one way */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`d1-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10 + size}
                y2={size}
                stroke="#1a1a1a"
                strokeWidth="0.3"
              />
            ))}
            {/* Diagonal lines other way */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`d2-${i}`}
                x1={size - i * 10}
                y1="0"
                x2={-i * 10}
                y2={size}
                stroke="#1a1a1a"
                strokeWidth="0.3"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshatch-square)" />
      </svg>
    </div>
  );
};

// Option P: Subtle gradient lines (modern minimal interpretation)
export const GradientLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.12] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 0 }} />
          </linearGradient>
          <pattern id="gradient-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="80" y2="40" stroke="url(#line-gradient)" strokeWidth="1" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="url(#line-gradient)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient-pattern)" />
      </svg>
    </div>
  );
};
