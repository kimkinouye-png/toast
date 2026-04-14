const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  border: 'rgba(0,0,0,0.12)'
};

export const VisualPlaceholder = ({ label }: { label: string }) => (
  <div
    className="w-full h-full flex items-center justify-center rounded-lg"
    style={{
      backgroundColor: colors.surface,
      border: `2px dashed ${colors.border}`,
      minHeight: '400px'
    }}
  >
    <div className="text-center p-8">
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          color: colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '8px'
        }}
      >
        Visual Placeholder
      </div>
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          color: colors.text,
          lineHeight: 1.4
        }}
      >
        {label}
      </div>
    </div>
  </div>
);
