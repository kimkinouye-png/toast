export const DailyDigestOutput = () => {
  const stories = [
    {
      category: 'AI RESEARCH & NEWS',
      title: 'Want to understand the current state of AI? Check these charts.',
      source: 'AI Technology Review',
      excerpt: "Stanford's 2026 AI Index report cuts through the AI hype cycle noise with data-driven insights. It provides a grounded perspective you need to make strategic decisions."
    },
    {
      category: 'The Verge',
      title: 'Sam Altman reportedly targeted in second attack',
      excerpt: 'Two suspects were arrested after a shooting at Altman\'s Russian Hill home, the second attack in three days. This escalating security situation underscores the growing tensions and stakes in the AI industry.'
    },
    {
      category: 'MIT Technology Review',
      title: 'The AI code wars are heating up',
      excerpt: 'GitHub\'s new AI tools were among the first killer apps for AI, predicting and generating code...'
    }
  ];

  return (
    <div
      style={{
        width: '420px',
        height: '700px',
        background: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '32px 28px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          color: '#333',
          letterSpacing: '0.05em'
        }}>
          Daily Digest
        </div>
        <div style={{
          background: '#fff',
          color: '#333',
          padding: '8px 16px',
          borderRadius: '6px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          border: '1px solid #ddd'
        }}>
          Refresh
        </div>
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '13px',
        fontWeight: 400,
        color: '#666',
        marginBottom: '24px'
      }}>
        MONDAY, APRIL 13, 2026
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        color: '#444',
        marginBottom: '16px'
      }}>
        10 stories curated from 16 sources
      </div>

      {/* Stories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {stories.map((story, idx) => (
          <div
            key={idx}
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '18px 20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              {story.category}
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: '1.4',
              marginBottom: '10px'
            }}>
              {story.title}
            </div>
            {story.source && (
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: '#888',
                marginBottom: '10px'
              }}>
                {story.source}
              </div>
            )}
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: '#555',
              lineHeight: '1.5'
            }}>
              {story.excerpt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
