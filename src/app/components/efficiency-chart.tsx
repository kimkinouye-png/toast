const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  textVeryMuted: 'rgba(26,26,26,0.35)',
  accentPurple: '#6b6ce0',
  teal: '#2ebdb4',
  border: 'rgba(0,0,0,0.12)',
  darkNavy: '#1e3a5f'
};

export const EfficiencyChart = () => {
  const data = [
    { year: '2022', headcount: 345, tpv: 1.3 },
    { year: '2023', headcount: 310, tpv: 1.54 },
    { year: '2024', headcount: 276, tpv: 1.69 },
    { year: '2025', headcount: 260, tpv: 1.79 }
  ];

  const maxHeadcount = 380;
  const minTPV = 1.0;
  const maxTPV = 2.0;

  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: '80px 120px' }}>
      {/* Chart Title */}
      <div className="mb-8">
        <h3
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.textMuted,
            textAlign: 'center'
          }}
        >
          Design Headcount vs Total Payment Volume
        </h3>
      </div>

      {/* Chart */}
      <div className="relative" style={{ height: '400px' }}>
        {/* Y-axis labels - Headcount (left) */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between" style={{ width: '60px' }}>
          {[380, 320, 260, 200, 140, 100].map((val, i) => (
            <div
              key={i}
              className="text-right pr-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: colors.textVeryMuted
              }}
            >
              {val}
            </div>
          ))}
        </div>

        {/* Y-axis labels - TPV (right) */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between" style={{ width: '80px' }}>
          {['$2.0T', '$1.7T', '$1.4T', '$1.1T', '$1.0T'].map((val, i) => (
            <div
              key={i}
              className="text-left pl-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                color: colors.textVeryMuted
              }}
            >
              {val}
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="absolute" style={{ left: '70px', right: '90px', top: 0, bottom: '40px' }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={i}
                x1="0"
                y1={(i / 5) * 400}
                x2="1000"
                y2={(i / 5) * 400}
                stroke={colors.border}
                strokeWidth="1"
              />
            ))}

            {/* Headcount Line */}
            <polyline
              points={data.map((item, i) => {
                const spacing = 1000 / (data.length + 1);
                const x = spacing * (i + 1);
                const y = 400 - (item.headcount / maxHeadcount) * 400;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke={colors.accentPurple}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Headcount points and labels */}
            {data.map((item, i) => {
              const spacing = 1000 / (data.length + 1);
              const x = spacing * (i + 1);
              const y = 400 - (item.headcount / maxHeadcount) * 400;

              return (
                <g key={i}>
                  {/* Point */}
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={colors.accentPurple}
                  />
                  {/* Headcount label */}
                  <text
                    x={x}
                    y={y + 25}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      fill: colors.accentPurple
                    }}
                  >
                    {item.headcount}
                  </text>
                </g>
              );
            })}

            {/* TPV Line */}
            <polyline
              points={data.map((item, i) => {
                const spacing = 1000 / (data.length + 1);
                const x = spacing * (i + 1);
                // Scale TPV from 1.0T to 2.0T (compressed to upper portion)
                const tpvNormalized = (item.tpv - minTPV) / (maxTPV - minTPV);
                const y = 400 - 160 - tpvNormalized * 240;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke={colors.darkNavy}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* TPV points and labels */}
            {data.map((item, i) => {
              const spacing = 1000 / (data.length + 1);
              const x = spacing * (i + 1);
              // Scale TPV from 1.0T to 2.0T (compressed to upper portion)
              const tpvNormalized = (item.tpv - minTPV) / (maxTPV - minTPV);
              const y = 400 - 160 - tpvNormalized * 240;
              // Position first two labels below, others above
              const labelY = (i === 0 || i === 1) ? y + 25 : y - 15;

              return (
                <g key={i}>
                  {/* Point */}
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={colors.darkNavy}
                  />
                  {/* TPV label */}
                  <text
                    x={x}
                    y={labelY}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      fill: colors.darkNavy
                    }}
                  >
                    ${item.tpv}T
                  </text>
                </g>
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-around">
            {data.map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.text
                }}
              >
                {item.year}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-8 mt-12">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '20px',
              height: '12px',
              backgroundColor: colors.accentPurple,
              opacity: 0.8,
              borderRadius: '2px'
            }}
          />
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: colors.textMuted
            }}
          >
            Design Org Headcount
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{
              width: '20px',
              height: '3px',
              backgroundColor: colors.darkNavy,
              borderRadius: '2px'
            }}
          />
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: colors.textMuted
            }}
          >
            Total Payment Volume
          </div>
        </div>
      </div>

    </div>
  );
};
