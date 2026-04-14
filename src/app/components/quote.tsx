interface QuoteProps {
  text: string;
  author: string;
}

export const Quote = ({ text, author }: QuoteProps) => {
  const colors = {
    background: '#faf9f7',
    text: '#1a1a1a',
    textMuted: 'rgba(26,26,26,0.6)',
    accentPurple: '#6b6ce0'
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl px-20 text-center">
        <div
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '52px',
            fontWeight: 400,
            color: colors.text,
            lineHeight: 1.3,
            marginBottom: '40px'
          }}
        >
          "{text}"
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            color: colors.textMuted,
            letterSpacing: '0.02em'
          }}
        >
          — {author}
        </div>
      </div>
    </div>
  );
};
