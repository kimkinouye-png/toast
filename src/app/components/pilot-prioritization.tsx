const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  textVeryMuted: 'rgba(26,26,26,0.35)',
  accentPurple: '#6b6ce0',
  teal: '#2ebdb4',
  red: '#d43f3e',
  orange: '#f5a623',
  divider: 'rgba(0,0,0,0.08)',
  border: 'rgba(0,0,0,0.12)',
  ghost: 'rgba(26,26,26,0.04)'
};

export const PilotPrioritization = () => {
  // Pilots positioned on the matrix (x: 0-100, y: 0-100)
  const pilots = [
    { name: 'Workshop Synthesis', x: 25, y: 50, status: 'sweet-spot', statusLabel: 'Sweet Spot' },
    { name: 'V2w Prototyping', x: 55, y: 85, status: 'activated-proven', statusLabel: 'Activated • needs proven' },
    { name: 'Legal Review', x: 85, y: 90, status: 'activated-progress', statusLabel: 'Activated • in progress' },
    { name: 'PRD to Brief', x: 45, y: 75, status: 'activated-progress', statusLabel: 'Activated • in progress' },
    { name: 'Agentic Ideation', x: 35, y: 65, status: 'activated-progress', statusLabel: 'Activated • in progress' },
    { name: 'Content Quality', x: 40, y: 40, status: 'considered', statusLabel: 'High' },
    { name: 'Content Toolkit', x: 52, y: 35, status: 'considered', statusLabel: 'High' },
    { name: 'Instant Translation', x: 75, y: 55, status: 'considered', statusLabel: 'Low' }
  ];

  const getStatusColor = (status: string) => {
    if (status === 'activated-proven' || status === 'activated-progress') return colors.teal;
    if (status === 'sweet-spot') return colors.accentPurple;
    return colors.textVeryMuted;
  };

  return (
    <div className="w-full" style={{ maxWidth: '95%', margin: '0 auto' }}>
      {/* Legend */}
      <div className="flex justify-end gap-6 mb-8">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.teal
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: colors.textMuted
            }}
          >
            Activated • needs proven
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.teal
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: colors.textMuted
            }}
          >
            Activated • in progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors.textVeryMuted
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: colors.textMuted
            }}
          >
            Considered
          </span>
        </div>
      </div>

      {/* Matrix */}
      <div className="relative" style={{ height: '500px' }}>
        {/* Sweet Spot label */}
        <div
          className="absolute"
          style={{
            top: '20px',
            left: '20px',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.accentPurple,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Sweet Spot
        </div>

        {/* Grid background */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`
          }}
        >
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Horizontal lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${i * 20}%`}
                x2="100%"
                y2={`${i * 20}%`}
                stroke={colors.divider}
                strokeWidth="1"
              />
            ))}
            {/* Vertical lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={`v-${i}`}
                x1={`${i * 20}%`}
                y1="0"
                x2={`${i * 20}%`}
                y2="100%"
                stroke={colors.divider}
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Pilots */}
          {pilots.map((pilot, idx) => (
            <div
              key={idx}
              className="absolute"
              style={{
                left: `${pilot.x}%`,
                top: `${100 - pilot.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Dot */}
              <div
                className="relative"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(pilot.status),
                  border: `2px solid ${colors.surface}`
                }}
              />

              {/* Label */}
              <div
                className="absolute whitespace-nowrap px-2 py-1 rounded"
                style={{
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: colors.text,
                  backgroundColor: getStatusColor(pilot.status),
                  opacity: 0.9
                }}
              >
                <span style={{ color: colors.surface }}>{pilot.name}</span>
              </div>

              {/* Status label for some items */}
              {pilot.statusLabel && pilot.status === 'considered' && (
                <div
                  className="absolute whitespace-nowrap"
                  style={{
                    top: '18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '9px',
                    fontWeight: 400,
                    color: colors.textMuted
                  }}
                >
                  {pilot.statusLabel}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Y-axis label */}
        <div
          className="absolute"
          style={{
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap'
          }}
        >
          High Impact ← → Low Impact
        </div>

        {/* X-axis label */}
        <div
          className="absolute flex justify-between"
          style={{
            bottom: '-30px',
            left: 0,
            right: 0,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          <span>← Low Effort</span>
          <span>High Effort →</span>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-12">
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            color: colors.textVeryMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Long-Term Bets
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            color: colors.textVeryMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Deprioritized
        </div>
      </div>
    </div>
  );
};
