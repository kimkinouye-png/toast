export const ChaosToOrder = () => {
  const colors = {
    background: '#faf9f7',
    accentPurple: '#6b6ce0',
    text: '#1a1a1a',
    textMuted: 'rgba(26,26,26,0.6)'
  };

  // Center point for orbit system
  const centerX = 250;
  const centerY = 250;

  // Define shapes with chaotic positions and orbital properties
  const shapes = [
    // Inner orbit - circles
    { type: 'circle', chaosX: 70, chaosY: 90, orbitRadius: 80, angle: 0, size: 30 },
    { type: 'circle', chaosX: 430, chaosY: 130, orbitRadius: 80, angle: 90, size: 30 },
    { type: 'circle', chaosX: 120, chaosY: 410, orbitRadius: 80, angle: 180, size: 30 },
    { type: 'circle', chaosX: 380, chaosY: 450, orbitRadius: 80, angle: 270, size: 30 },

    // Middle orbit - squares
    { type: 'square', chaosX: 400, chaosY: 60, orbitRadius: 140, angle: 45, size: 30 },
    { type: 'square', chaosX: 90, chaosY: 340, orbitRadius: 140, angle: 135, size: 30 },
    { type: 'square', chaosX: 60, chaosY: 450, orbitRadius: 140, angle: 225, size: 30 },
    { type: 'square', chaosX: 420, chaosY: 150, orbitRadius: 140, angle: 315, size: 30 },

    // Outer orbit - triangles
    { type: 'triangle', chaosX: 50, chaosY: 280, orbitRadius: 200, angle: 30, size: 30 },
    { type: 'triangle', chaosX: 440, chaosY: 220, orbitRadius: 200, angle: 120, size: 30 },
    { type: 'triangle', chaosX: 270, chaosY: 480, orbitRadius: 200, angle: 210, size: 30 },
    { type: 'triangle', chaosX: 350, chaosY: 50, orbitRadius: 200, angle: 300, size: 30 }
  ];

  const renderShape = (shape: any, index: number) => {
    // Calculate orbital position
    const angleRad = (shape.angle * Math.PI) / 180;
    const orbitX = centerX + Math.cos(angleRad) * shape.orbitRadius;
    const orbitY = centerY + Math.sin(angleRad) * shape.orbitRadius;

    if (shape.type === 'circle') {
      return (
        <g key={`shape-${index}`}>
          <circle
            r={shape.size / 2}
            fill={colors.accentPurple}
            opacity={0.7}
          >
            <animate
              attributeName="cx"
              values={`${shape.chaosX};${orbitX};${orbitX}`}
              dur="2s"
              fill="freeze"
            />
            <animate
              attributeName="cy"
              values={`${shape.chaosY};${orbitY};${orbitY}`}
              dur="2s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`0 ${orbitX} ${orbitY}`}
              to={`360 ${centerX} ${centerY}`}
              dur="10s"
              begin="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      );
    } else if (shape.type === 'square') {
      return (
        <g key={`shape-${index}`}>
          <rect
            width={shape.size}
            height={shape.size}
            fill={colors.accentPurple}
            opacity={0.7}
          >
            <animate
              attributeName="x"
              values={`${shape.chaosX - shape.size/2};${orbitX - shape.size/2};${orbitX - shape.size/2}`}
              dur="2s"
              fill="freeze"
            />
            <animate
              attributeName="y"
              values={`${shape.chaosY - shape.size/2};${orbitY - shape.size/2};${orbitY - shape.size/2}`}
              dur="2s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`0 ${orbitX} ${orbitY}`}
              to={`360 ${centerX} ${centerY}`}
              dur="12.5s"
              begin="2s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      );
    } else {
      // triangle
      const h = shape.size * 0.866;
      const chaosPts = `${shape.chaosX},${shape.chaosY - h/2} ${shape.chaosX - shape.size/2},${shape.chaosY + h/2} ${shape.chaosX + shape.size/2},${shape.chaosY + h/2}`;
      const orbitPts = `${orbitX},${orbitY - h/2} ${orbitX - shape.size/2},${orbitY + h/2} ${orbitX + shape.size/2},${orbitY + h/2}`;

      return (
        <g key={`shape-${index}`}>
          <polygon
            fill={colors.accentPurple}
            opacity={0.7}
          >
            <animate
              attributeName="points"
              values={`${chaosPts};${orbitPts};${orbitPts}`}
              dur="2s"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`0 ${orbitX} ${orbitY}`}
              to={`360 ${centerX} ${centerY}`}
              dur="15s"
              begin="2s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
      );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ marginTop: '80px' }}>
      <svg viewBox="0 0 500 500" className="w-full max-w-2xl">
        {/* Orbit guides (subtle circles) */}
        <circle
          cx={250}
          cy={250}
          r={80}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={1}
          opacity={0.15}
        />
        <circle
          cx={250}
          cy={250}
          r={140}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={1}
          opacity={0.15}
        />
        <circle
          cx={250}
          cy={250}
          r={200}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={1}
          opacity={0.15}
        />

        {/* Center point */}
        <circle
          cx={250}
          cy={250}
          r={10}
          fill={colors.accentPurple}
          opacity={0.4}
        />

        {shapes.map((shape, i) => renderShape(shape, i))}
      </svg>
    </div>
  );
};
