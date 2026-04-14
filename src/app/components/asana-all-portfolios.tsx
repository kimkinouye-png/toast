const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  border: 'rgba(0,0,0,0.12)',
  divider: 'rgba(0,0,0,0.08)',
  purple: '#6b6ce0',
  teal: '#2ebdb4',
  red: '#d43f3e',
  green: '#4caf50',
  orange: '#ff9800',
  pink: '#e91e63',
  blue: '#2196f3'
};

export const AsanaAllPortfolios = () => {
  const businessUnitItems = [
    { name: '2026 Consumer XD (L2)', owner: 'Mark Kozlowski', color: colors.purple, avatars: ['MK', 'KG', 'KD', 'EK'], tag: 'Business...' },
    { name: '2026 Merchant XD (L2)', owner: 'Karin Giefer', color: colors.green, avatars: ['KG'], tag: 'Business...' },
    { name: '2026 Platforms & Tools XD (L2)', owner: 'Kevan Del Rosario', color: colors.orange, avatars: ['KD'], tag: 'Business...' },
    { name: '2026 Venmo XD)', owner: 'Elisa Koss', color: colors.teal, avatars: ['EK'], tag: 'Business...' },
    { name: '2026 XD All Programs', owner: 'Amy Rombaum', color: colors.red, avatars: ['AR'], tag: 'Business...' },
    { name: 'XD Backlog', owner: 'Amy Rombaum', color: '#9e9e9e', avatars: ['XM'], tag: 'Business...' },
    { name: 'Cross-XD Calendar', owner: 'Amy Rombaum', color: '#9e9e9e', avatars: ['XJI'], tag: 'Business...' },
    { name: 'All XD Stakeholders', owner: 'Amy Rombaum', color: '#9e9e9e', avatars: ['AM'], tag: 'Business...' }
  ];

  const horizontalItems = [
    { name: '2026 Content & Storytelling XD Portfolio (L2)', owner: 'Suchi Parikh Crandall', color: colors.red, avatars: ['SC'], tag: 'Horizontal' },
    { name: '2026 Content Design Portfolio (L2)', owner: 'Suchi Parikh Crandall', color: colors.orange, avatars: ['SC'], tag: 'Horizontal' },
    { name: '2026 XD Operations Portfolio (L2)', owner: 'Anat Muller', color: '#9e9e9e', avatars: ['AM'], tag: 'Horizon...' }
  ];

  const renderPortfolioItem = (item: any, index: number) => (
    <div
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 0',
        borderBottom: `1px solid ${colors.divider}`,
        fontFamily: 'DM Sans, sans-serif'
      }}
    >
      {/* Number */}
      <div style={{ width: '20px', fontSize: '13px', color: colors.textMuted }}>
        {index + 1}
      </div>

      {/* Color indicator */}
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '3px',
          backgroundColor: item.color,
          flexShrink: 0
        }}
      />

      {/* Name */}
      <div style={{ flex: 1, fontSize: '13px', color: colors.text, fontWeight: 400 }}>
        {item.name}
      </div>

      {/* Owner */}
      <div style={{ width: '180px', fontSize: '13px', color: colors.text }}>
        {item.owner}
      </div>

      {/* DPM/Owner column - avatars */}
      <div style={{ width: '120px', display: 'flex', gap: '4px', alignItems: 'center' }}>
        {item.avatars.map((avatar: string, i: number) => (
          <div
            key={i}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: i === 0 ? colors.purple : colors.teal,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 500,
              color: '#ffffff'
            }}
          >
            {avatar.slice(0, 2)}
          </div>
        ))}
      </div>

      {/* Tag */}
      <div
        style={{
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          backgroundColor: 'rgba(107, 108, 224, 0.1)',
          color: colors.purple,
          fontWeight: 500
        }}
      >
        {item.tag}
      </div>
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.surface,
        borderRadius: '8px',
        border: `1px solid ${colors.border}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: `1px solid ${colors.divider}`,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#fafafa'
        }}
      >
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: colors.text
          }}
        >
          2026 All XD (L1)
        </div>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '8px',
            fontSize: '12px',
            color: colors.textMuted
          }}
        >
          <span>List</span>
          <span>Timeline</span>
          <span>Dashboard</span>
          <span>Progress</span>
          <span>Workload</span>
          <span>Messages</span>
        </div>
      </div>

      {/* Column headers */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
          borderBottom: `1px solid ${colors.divider}`,
          backgroundColor: '#fafafa',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '12px',
          fontWeight: 500,
          color: colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        <div style={{ width: '20px' }}>#</div>
        <div style={{ width: '12px' }}></div>
        <div style={{ flex: 1 }}>Name</div>
        <div style={{ width: '180px' }}>Owner</div>
        <div style={{ width: '120px' }}>DPM [XD]</div>
        <div style={{ width: '100px' }}>Portfolio T...</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
        {/* Business unit section */}
        <div style={{ marginTop: '16px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: colors.text,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>▼</span>
            <span>Business unit</span>
          </div>
          {businessUnitItems.map((item, index) => renderPortfolioItem(item, index))}
        </div>

        {/* Horizontal section */}
        <div style={{ marginTop: '24px', marginBottom: '16px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: colors.text,
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>▼</span>
            <span>Horizontal</span>
          </div>
          {horizontalItems.map((item, index) => renderPortfolioItem(item, index))}
        </div>
      </div>
    </div>
  );
};
