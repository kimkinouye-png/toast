export const ContactCard = () => {
  const colors = {
    background: '#faf9f7',
    text: '#1a1a1a',
    textMuted: '#1a1a1a',
    accentPurple: '#6b6ce0',
    border: 'rgba(0,0,0,0.1)',
    gridBorder: 'rgba(0,0,0,0.08)'
  };

  const projects = [
    {
      name: 'Capacity Planner',
      description: 'Custom tool for planning how many designers are needed to support a product roadmap. Maps available weeks against project scope.',
      liveApp: 'https://capacity-planner.netlify.app/',
      caseStudy: 'https://kim-inouye.netlify.app/capacity-planner'
    },
    {
      name: 'Rose',
      description: 'AI feedback decoder. Takes ambiguous workplace feedback and helps the person understand what was really said and what to do with it.',
      liveApp: 'https://rose-website-tan.vercel.app/',
      caseStudy: 'https://kim-inouye.netlify.app/rose'
    },
    {
      name: 'Stem',
      description: "Research intelligence tool that finds and scores articles relevant to Rose's knowledge base. Human review before anything ships.",
      liveApp: 'https://stem-dashboard-ashy.vercel.app/',
      caseStudy: 'https://kim-inouye.netlify.app/stem'
    },
    {
      name: 'Aperi',
      description: 'Quality monitoring tool that scores AI responses for sycophancy, bias detection accuracy, and response calibration.',
      liveApp: 'https://aperi.vercel.app/',
      caseStudy: 'https://kim-inouye.netlify.app/aperi'
    },
    {
      name: 'Daily Digest',
      description: 'AI-curated daily briefing that pulls from 16 RSS feeds, summarizes with Claude, and groups the top stories by topic.',
      liveApp: 'https://daily-digest-rose4.vercel.app/',
      caseStudy: '#',
      showCaseStudy: false
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ padding: '0 40px' }}>
      <div
        style={{
          maxWidth: '1100px',
          width: '100%',
          background: '#fff',
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: colors.background,
            padding: '24px 36px',
            borderBottom: `1px solid ${colors.border}`
          }}
        >
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: colors.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '10px'
            }}
          >
            BUILDING WITH AI
          </div>
          <div
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '36px',
              fontWeight: 400,
              color: colors.text
            }}
          >
            Things I've built
          </div>
        </div>

        {/* Table Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr 180px',
            gap: '28px',
            padding: '18px 36px',
            borderBottom: `1px solid ${colors.gridBorder}`,
            background: colors.background
          }}
        >
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              color: colors.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            PRODUCT
          </div>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              color: colors.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            WHAT IT DOES
          </div>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              color: colors.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            LINKS
          </div>
        </div>

        {/* Projects */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr 180px',
              gap: '28px',
              padding: '24px 36px',
              borderBottom: idx < projects.length - 1 ? `1px solid ${colors.gridBorder}` : 'none',
              background: '#fff'
            }}
          >
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: colors.text
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: colors.textMuted,
                lineHeight: '1.6'
              }}
            >
              {project.description}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={project.liveApp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: colors.accentPurple,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                Live app
              </a>
              {project.showCaseStudy !== false && (
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: colors.accentPurple,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Case study
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
