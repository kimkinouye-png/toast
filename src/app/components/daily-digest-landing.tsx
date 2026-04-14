export const DailyDigestLanding = () => {
  return (
    <div
      style={{
        width: '420px',
        height: '700px',
        background: '#0a0a0a',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        color: '#888',
        letterSpacing: '0.05em'
      }}>
        Daily Digest
      </div>

      {/* Run Digest Button */}
      <div style={{
        position: 'absolute',
        top: '32px',
        right: '32px',
        background: '#fff',
        color: '#0a0a0a',
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        cursor: 'pointer'
      }}>
        Run Digest
      </div>

      {/* Main Content */}
      <div style={{ textAlign: 'center', maxWidth: '380px' }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#666',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px'
        }}>
          DAILY DIGEST
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '52px',
          fontWeight: 400,
          color: '#f5f5f5',
          lineHeight: '1.2',
          marginBottom: '32px',
          margin: '0 0 32px 0'
        }}>
          Your daily AI &amp; product briefing
        </h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          color: '#aaa',
          lineHeight: '1.6',
          marginBottom: '12px',
          margin: '0 0 12px 0'
        }}>
          8-12 curated stories from 16 sources, grouped by topic.
        </p>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          color: '#aaa',
          lineHeight: '1.6',
          margin: 0
        }}>
          Hit "Run Digest" to generate today's edition.
        </p>
      </div>
    </div>
  );
};
