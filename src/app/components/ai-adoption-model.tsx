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

export const AIAdoptionModel = () => {
  const steps = [
    { number: '01', title: 'Identify', subtitle: 'friction.', color: colors.accentPurple },
    { number: '02', title: 'Design', subtitle: 'a test.', color: colors.teal },
    { number: '03', title: 'Measure', subtitle: 'impact.', color: colors.orange },
    { number: '04', title: 'Scale', subtitle: 'what works.', color: colors.red }
  ];

  return (
    <div className="w-full flex items-center" style={{ maxWidth: '95%', margin: '0 auto', padding: '40px 0' }}>
      {/* Steps */}
      <div className="grid grid-cols-4 gap-8 w-full">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {/* Background card */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
                backgroundColor: colors.surface,
                borderRadius: '16px',
                border: `2px solid ${colors.divider}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            />

            {/* Content */}
            <div style={{ position: 'relative', padding: '20px' }}>
              {/* Step number badge */}
              <div
                className="mb-6"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: step.color,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.02em'
                }}
              >
                {step.number}
              </div>

              {/* Step title */}
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: colors.text,
                  marginBottom: '8px'
                }}
              >
                {step.title}
              </div>

              {/* Step subtitle */}
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  color: colors.textMuted
                }}
              >
                {step.subtitle}
              </div>

              {/* Colored accent bar */}
              <div
                style={{
                  marginTop: '20px',
                  height: '4px',
                  width: '60px',
                  backgroundColor: step.color,
                  borderRadius: '2px'
                }}
              />
            </div>

            {/* Arrow (except for last step) */}
            {idx < steps.length - 1 && (
              <div
                className="absolute"
                style={{
                  top: '50%',
                  right: '-40px',
                  transform: 'translateY(-50%)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: steps[idx].color,
                  opacity: 0.5,
                  zIndex: 10
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
