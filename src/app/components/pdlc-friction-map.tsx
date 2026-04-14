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

export const PDLCFrictionMap = () => {
  const stages = [
    {
      title: 'Discover',
      frictions: [
        'PRDs are incomplete, not customer-back',
        'Customer problems are vague and not well defined',
        'Discovery time is compressed with delivery timelines'
      ]
    },
    {
      title: 'Define',
      frictions: [
        'Product decisions are made late in the process',
        'Top-down directives impede critical thinking and process',
        'Unclear approval chains hamper alignment'
      ]
    },
    {
      title: 'Develop',
      frictions: [
        'Prototyping is high effort and low value',
        'Legal approvals are time expensive and high effort',
        'Design system divergence causes confusion'
      ]
    },
    {
      title: 'Deliver',
      frictions: [
        'Edge cases go unidentified late',
        'QA process is not robust',
        'Measurement is not always customer-centric'
      ]
    }
  ];

  return (
    <div className="w-full" style={{ maxWidth: '95%', margin: '0 auto' }}>
      {/* Title */}
      <div
        className="mb-8"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          color: colors.text,
          lineHeight: 1.5
        }}
      >
        Survey results and follow up interviews clarified issues stemming from corner cutting in order to move fast.
      </div>

      {/* Stages */}
      <div className="grid grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-3"
              style={{
                backgroundColor: colors.text,
                borderBottom: `1px solid ${colors.border}`
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: colors.surface,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {stage.title}
              </div>
            </div>

            {/* Friction points */}
            <div className="px-5 py-5 space-y-3">
              {stage.frictions.map((friction, fIdx) => (
                <div
                  key={fIdx}
                  className="flex gap-2"
                >
                  <div
                    style={{
                      marginTop: '6px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: colors.red,
                      flexShrink: 0
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: colors.text,
                      lineHeight: 1.5
                    }}
                  >
                    {friction}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
