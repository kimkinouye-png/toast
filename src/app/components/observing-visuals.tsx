const colors = {
  background: '#faf9f7',
  accentPurple: '#6b6ce0',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)'
};

// Option 1: Concentric Circles (Sound Waves)
export const SoundWaves = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg viewBox="0 0 400 400" className="w-full max-w-md">
      {/* Center point */}
      <circle cx={200} cy={200} r={8} fill={colors.accentPurple} opacity={1} />

      {/* Concentric circles radiating outward */}
      {[30, 60, 90, 120, 150, 180].map((r, i) => (
        <circle
          key={i}
          cx={200}
          cy={200}
          r={r}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={2}
          opacity={1 - i * 0.15}
        >
          <animate
            attributeName="r"
            from={r}
            to={r + 30}
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from={1 - i * 0.15}
            to={0}
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  </div>
);

// Option 2: Geometric Eye
export const GeometricEye = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg viewBox="0 0 400 400" className="w-full max-w-md">
      {/* Outer eye shape (almond) */}
      <ellipse
        cx={200}
        cy={200}
        rx={150}
        ry={80}
        fill="none"
        stroke={colors.accentPurple}
        strokeWidth={3}
        opacity={0.8}
      />

      {/* Iris circle */}
      <circle
        cx={200}
        cy={200}
        r={50}
        fill={colors.accentPurple}
        opacity={0.3}
      />

      {/* Pupil */}
      <circle
        cx={200}
        cy={200}
        r={25}
        fill={colors.accentPurple}
        opacity={0.9}
      >
        <animate
          attributeName="r"
          values="25;20;25"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Observation lines (radiating from pupil) */}
      <line x1={200} y1={200} x2={80} y2={120} stroke={colors.accentPurple} strokeWidth={1.5} opacity={0.4} />
      <line x1={200} y1={200} x2={120} y2={280} stroke={colors.accentPurple} strokeWidth={1.5} opacity={0.4} />
      <line x1={200} y1={200} x2={320} y2={120} stroke={colors.accentPurple} strokeWidth={1.5} opacity={0.4} />
      <line x1={200} y1={200} x2={280} y2={280} stroke={colors.accentPurple} strokeWidth={1.5} opacity={0.4} />
    </svg>
  </div>
);

// Option 3: Notebook/Notes
export const NotebookNotes = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg viewBox="0 0 400 400" className="w-full max-w-md">
      {/* Notebook outline */}
      <rect
        x={100}
        y={80}
        width={200}
        height={240}
        fill="none"
        stroke={colors.accentPurple}
        strokeWidth={3}
        rx={4}
      />

      {/* Spiral binding */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx={110}
          cy={120 + i * 35}
          r={5}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={2}
          opacity={0.6}
        />
      ))}

      {/* Written lines with animation */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={140}
          y1={120 + i * 35}
          x2={140}
          y2={120 + i * 35}
          stroke={colors.accentPurple}
          strokeWidth={2}
          opacity={0.7}
        >
          <animate
            attributeName="x2"
            from={140}
            to={270}
            dur="0.8s"
            begin={`${i * 0.3}s`}
            fill="freeze"
          />
        </line>
      ))}
    </svg>
  </div>
);

// Option 4: Geometric Ear
export const GeometricEar = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg viewBox="0 0 400 400" className="w-full max-w-md">
      {/* Outer ear curve */}
      <path
        d="M 200,100 Q 280,100 280,200 Q 280,300 200,300"
        fill="none"
        stroke={colors.accentPurple}
        strokeWidth={3}
        opacity={0.8}
      />

      {/* Inner ear curves */}
      <path
        d="M 200,140 Q 240,140 240,200 Q 240,260 200,260"
        fill="none"
        stroke={colors.accentPurple}
        strokeWidth={2.5}
        opacity={0.7}
      />

      <path
        d="M 200,180 Q 220,180 220,200 Q 220,220 200,220"
        fill="none"
        stroke={colors.accentPurple}
        strokeWidth={2}
        opacity={0.6}
      />

      {/* Sound waves coming in */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M ${100 - i * 30},${180 + i * 15} Q ${120 - i * 30},200 ${100 - i * 30},${220 - i * 15}`}
          fill="none"
          stroke={colors.accentPurple}
          strokeWidth={2}
          opacity={0.5 - i * 0.15}
        >
          <animate
            attributeName="opacity"
            values="0;0.5;0"
            dur="2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>
  </div>
);
