export const RoseSystem = () => {
  const colors = {
    background: '#faf9f7',
    text: '#1a1a1a',
    textMuted: 'rgba(26,26,26,0.6)',
    stem: '#d4f1ec',
    stemBorder: '#9ed5c9',
    rose: '#e8e4f3',
    roseBorder: '#c5b8e0',
    user: '#f5e8d9',
    userBorder: '#e0c9ad',
    arrow: 'rgba(26,26,26,0.3)'
  };

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ padding: '0 40px' }}>
      <div className="flex gap-6 items-start" style={{ maxWidth: '950px', transform: 'scale(0.9)' }}>

        {/* Stem - Research Pipeline */}
        <div
          style={{
            width: '230px',
            backgroundColor: colors.stem,
            border: `2px solid ${colors.stemBorder}`,
            borderRadius: '16px',
            padding: '28px 24px',
            position: 'relative'
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            color: colors.text,
            marginBottom: '4px'
          }}>
            Stem
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: colors.textMuted,
            marginBottom: '24px'
          }}>
            Research pipeline
          </div>

          {/* Flow boxes */}
          {['Monitor sources', 'Score articles', 'Human review', 'Approve knowledge', 'Update Rose'].map((label, idx) => (
            <div key={idx}>
              <div
                style={{
                  backgroundColor: '#fff',
                  border: `1.5px solid ${colors.stemBorder}`,
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '12px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.text,
                  textAlign: 'center'
                }}
              >
                {label}
              </div>
              {idx < 4 && (
                <div style={{
                  width: '2px',
                  height: '16px',
                  backgroundColor: colors.arrow,
                  margin: '0 auto 12px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '-3px',
                    width: 0,
                    height: 0,
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: `6px solid ${colors.arrow}`
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrow from Stem to Rose */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '50px',
              height: '2px',
              backgroundColor: colors.arrow
            }} />
            <div style={{
              position: 'absolute',
              right: '-4px',
              top: '-3px',
              width: 0,
              height: 0,
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderLeft: `6px solid ${colors.arrow}`
            }} />
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '0',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: colors.textMuted,
              whiteSpace: 'nowrap'
            }}>
              new knowledge
            </div>
          </div>
        </div>

        {/* Rose - AI Feedback Coach */}
        <div
          style={{
            width: '280px',
            backgroundColor: colors.rose,
            border: `2px solid ${colors.roseBorder}`,
            borderRadius: '16px',
            padding: '28px 24px',
            position: 'relative'
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            color: colors.text,
            marginBottom: '4px'
          }}>
            Rose
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: colors.textMuted,
            marginBottom: '24px'
          }}>
            AI feedback coach
          </div>

          {/* Knowledge blocks */}
          {[
            { title: "Rose's learning system", desc: "Stem feeds approved updates" },
            { title: "Rose's knowledge base", desc: "Bias frameworks\nfeedback science\nintersectionality · safety" },
            { title: "Rose's responses", desc: "Interpret · check for bias\nreframe · deliver to user" }
          ].map((block, idx) => (
            <div key={idx}>
              <div
                style={{
                  backgroundColor: '#fff',
                  border: `1.5px solid ${colors.roseBorder}`,
                  borderRadius: '8px',
                  padding: '16px 20px',
                  marginBottom: '12px'
                }}
              >
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: colors.text,
                  marginBottom: '6px'
                }}>
                  {block.title}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.textMuted,
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line'
                }}>
                  {block.desc}
                </div>
              </div>
              {idx < 2 && (
                <div style={{
                  width: '2px',
                  height: '16px',
                  backgroundColor: colors.arrow,
                  margin: '0 auto 12px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '-3px',
                    width: 0,
                    height: 0,
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: `6px solid ${colors.arrow}`
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrow from Rose to User */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '380px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '50px',
              height: '2px',
              backgroundColor: colors.arrow
            }} />
            <div style={{
              position: 'absolute',
              right: '-4px',
              top: '-3px',
              width: 0,
              height: 0,
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              borderLeft: `6px solid ${colors.arrow}`
            }} />
          </div>
        </div>

        {/* User - Rose Interface */}
        <div
          style={{
            width: '230px',
            backgroundColor: colors.user,
            border: `2px solid ${colors.userBorder}`,
            borderRadius: '16px',
            padding: '28px 24px',
            position: 'relative'
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            color: colors.text,
            marginBottom: '4px'
          }}>
            User
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: colors.textMuted,
            marginBottom: '24px'
          }}>
            Rose interface
          </div>

          {/* Interface sections */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.6)',
              border: `1.5px solid ${colors.userBorder}`,
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '16px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: colors.text,
              textAlign: 'center'
            }}
          >
            Rose
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.4)',
              border: `1.5px solid ${colors.userBorder}`,
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: colors.text,
              textAlign: 'center'
            }}
          >
            My feedback
          </div>

          {['What this means', 'Fairness check', 'The reframe'].map((label, idx) => (
            <div key={idx}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: colors.text,
                marginBottom: '8px'
              }}>
                {label}
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  border: `1.5px solid ${colors.userBorder}`,
                  borderRadius: '6px',
                  height: '32px',
                  marginBottom: idx < 2 ? '16px' : '0'
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
