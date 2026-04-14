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
  yellow: '#ffd700',
  divider: 'rgba(0,0,0,0.08)',
  border: 'rgba(0,0,0,0.12)',
  ghost: 'rgba(26,26,26,0.04)',
  stickyYellow: '#fff9c4',
  stickyPink: '#ffcdd2',
  stickyBlue: '#bbdefb',
  stickyGreen: '#c8e6c9'
};

export const FigJamBoard = () => {
  const sections = [
    {
      title: 'Discover',
      stickies: [
        { text: 'PRDs are incomplete and not customer-back', votes: 8, color: colors.stickyYellow },
        { text: 'Customer problems are vague', votes: 6, color: colors.stickyPink },
        { text: 'Discovery time is compressed', votes: 7, color: colors.stickyBlue }
      ]
    },
    {
      title: 'Define',
      stickies: [
        { text: 'Product decisions made too late', votes: 9, color: colors.stickyYellow },
        { text: 'Top-down directives impede process', votes: 5, color: colors.stickyGreen },
        { text: 'Unclear approval chains', votes: 6, color: colors.stickyPink }
      ]
    },
    {
      title: 'Develop',
      stickies: [
        { text: 'Prototyping is high effort, low value', votes: 11, color: colors.stickyBlue },
        { text: 'Legal approvals take too long', votes: 12, color: colors.stickyYellow },
        { text: 'Design system divergence', votes: 4, color: colors.stickyGreen }
      ]
    },
    {
      title: 'Deliver',
      stickies: [
        { text: 'Edge cases discovered late', votes: 7, color: colors.stickyPink },
        { text: 'QA process not robust', votes: 8, color: colors.stickyYellow },
        { text: 'Measurement not customer-centric', votes: 5, color: colors.stickyBlue }
      ]
    }
  ];

  return (
    <div className="w-full" style={{ maxWidth: '95%', margin: '0 auto' }}>
      <div
        className="rounded-lg p-8"
        style={{
          backgroundColor: colors.surface,
          border: `2px solid ${colors.border}`
        }}
      >
        {/* Main sections */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Section header */}
              <div
                className="mb-4 pb-2"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: colors.text,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderBottom: `2px solid ${colors.accentPurple}`
                }}
              >
                {section.title}
              </div>

              {/* Stickies */}
              <div className="space-y-3">
                {section.stickies.map((sticky, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      position: 'relative',
                      background: sticky.color,
                      border: 'none',
                      padding: '12px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                      minHeight: '80px',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: colors.text,
                        lineHeight: 1.4,
                        marginBottom: '10px'
                      }}
                    >
                      {sticky.text}
                    </div>

                    {/* Votes and stamps */}
                    <div className="flex items-center gap-2">
                      {/* Vote dots */}
                      <div className="flex gap-1">
                        {Array.from({ length: Math.min(sticky.votes, 5) }).map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: colors.accentPurple
                            }}
                          />
                        ))}
                        {sticky.votes > 5 && (
                          <span
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '9px',
                              fontWeight: 600,
                              color: colors.textMuted,
                              marginLeft: '2px'
                            }}
                          >
                            +{sticky.votes - 5}
                          </span>
                        )}
                      </div>

                      {/* Stamp (checkmark for high votes) */}
                      {sticky.votes >= 8 && (
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            backgroundColor: colors.teal,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.surface,
                            fontSize: '10px'
                          }}
                        >
                          ✓
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis section */}
        <div
          className="rounded-lg p-6 mt-6"
          style={{
            backgroundColor: colors.ghost,
            border: `2px dashed ${colors.accentPurple}`
          }}
        >
          <div
            className="mb-4"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              color: colors.accentPurple,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            Synthesis — Top Pain Points
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div
                style={{
                  marginTop: '4px',
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
                  fontSize: '13px',
                  fontWeight: 400,
                  color: colors.text,
                  lineHeight: 1.4
                }}
              >
                Legal approvals are time-expensive and high effort
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div
                style={{
                  marginTop: '4px',
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
                  fontSize: '13px',
                  fontWeight: 400,
                  color: colors.text,
                  lineHeight: 1.4
                }}
              >
                Prototyping requires high effort for low value
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div
                style={{
                  marginTop: '4px',
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
                  fontSize: '13px',
                  fontWeight: 400,
                  color: colors.text,
                  lineHeight: 1.4
                }}
              >
                Product decisions are made too late in the process
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div
                style={{
                  marginTop: '4px',
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
                  fontSize: '13px',
                  fontWeight: 400,
                  color: colors.text,
                  lineHeight: 1.4
                }}
              >
                PRDs are incomplete and not written customer-back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
