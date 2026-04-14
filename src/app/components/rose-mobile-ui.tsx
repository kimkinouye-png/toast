export const RoseMobileUI = () => {
  const colors = {
    background: '#faf9f7',
    text: '#1a1a1a',
    textMuted: '#666',
    rose: '#d43f3e',
    borderColor: '#e5e5e5',
    inputBg: '#fff'
  };

  return (
    <div
      style={{
        width: '380px',
        height: '780px',
        background: '#1a1a1a',
        borderRadius: '48px',
        padding: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '180px',
          height: '32px',
          background: '#1a1a1a',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          zIndex: 10
        }}
      />

      {/* Screen */}
      <div
        style={{
          flex: 1,
          background: colors.background,
          borderRadius: '36px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: `1px solid ${colors.borderColor}`
          }}
        >
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: colors.textMuted,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            ← Back
          </div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '20px',
            fontWeight: 600,
            color: colors.text
          }}>
            R<span style={{ color: colors.rose }}>o</span>se
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            color: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e'
            }} />
            Online
          </div>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Rose Avatar + Message */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: colors.rose,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              flexShrink: 0
            }}>
              R
            </div>
            <div style={{
              background: colors.inputBg,
              border: `1px solid ${colors.borderColor}`,
              borderRadius: '12px',
              padding: '16px',
              maxWidth: '280px'
            }}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: colors.text,
                lineHeight: '1.5',
                marginBottom: '16px'
              }}>
                Hi, I'm Rose. I help you decode workplace feedback — what it really means, whether it's fair, and what you can actually do with it.
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: colors.rose,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '12px'
              }}>
                TO GET STARTED
              </div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: colors.text,
                lineHeight: '1.6'
              }}>
                Share the feedback you received, as close to the exact words as you can. The more you tell me — who said it, when, and what you want to figure out — the more precise I can be.
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div style={{
          padding: '16px 20px',
          borderTop: `1px solid ${colors.borderColor}`,
          background: colors.background
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <div style={{
              flex: 1,
              background: colors.inputBg,
              border: `1px solid ${colors.borderColor}`,
              borderRadius: '20px',
              padding: '12px 16px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: colors.textMuted,
              lineHeight: '1.4',
              minHeight: '80px'
            }}>
              Share the feedback here. Include: what was said, who gave it, when it happened, and what you want to figure out.
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{ fontSize: '18px', color: '#999' }}>→</div>
            </div>
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            color: colors.textMuted,
            marginTop: '12px',
            textAlign: 'center',
            lineHeight: '1.4'
          }}>
            Rose is an AI coach. Not a therapist. Not a lawyer. Just really good at this.
          </div>
        </div>
      </div>
    </div>
  );
};
