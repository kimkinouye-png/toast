interface MobileFrameProps {
  src: string;
  alt: string;
}

export const MobileFrame = ({ src, alt }: MobileFrameProps) => {
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
          background: '#fff',
          borderRadius: '36px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top'
          }}
        />
      </div>
    </div>
  );
};
