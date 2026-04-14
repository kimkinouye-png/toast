export const AsanaIntakeLog = () => {
  const colors = {
    background: '#faf9f7',
    mainBg: '#fff',
    text: '#1a1a1a',
    textMuted: '#666',
    textLight: '#999',
    border: '#e5e5e5',
    statusRed: '#d43f3e',
    statusOrange: '#f5a623',
    statusBlue: '#6b6ce0',
    statusGreen: '#2ebdb4',
    statusPurple: '#9575cd',
    taskHover: '#f8f8f8'
  };

  const tasks = [
    { name: '[Converted to project] Intent Form 2026H1 (4)', owner: 'carolined@pay...', description: 'P0', workstream: 'XO = PayPal.Wallet', workstreamColor: colors.statusRed },
    { name: '[Converted to project] Intent form storefront life', owner: 'adrienneh@p...', description: 'Paid: steagall P...', workstream: 'Global Product Solutions', workstreamColor: colors.statusOrange },
    { name: '[Converted to project] Content for new PayPal Co...', owner: 'mmccunnin...', description: 'Launch Date is...', workstream: 'Global Product Solutions', workstreamColor: colors.statusOrange },
    { name: '[Converted to project] PayPal Cash Card Rewards...', owner: 'emmabrosna...', description: 'Objective: Build...', workstream: 'Instore: NFC/Loyalty/QR', workstreamColor: colors.statusBlue },
    { name: '[Converted to project] Intent Form PayPal Cash...', owner: 'adrienneh@p...', description: 'Clearing Auth...', workstream: 'XO = PayPal.Wallet', workstreamColor: colors.statusRed },
    { name: '[Converted to project] US Seller Guest Checkout...', owner: 'mmccunnin...', description: 'Feature Brief is...', workstream: 'XO = PayPal.Wallet', workstreamColor: colors.statusRed },
    { name: '[Converted to project] Flexible Value - Guest...', owner: 'adrienneh@p...', description: 'Whole feature W...', workstream: 'XO = BA (Recurring and Vaulting)', workstreamColor: colors.statusGreen },
    { name: '[Converted to project] Intent Form - Credit Card...', owner: 'lizdiazpayan...', description: 'Update local...', workstream: 'Global Product Solutions', workstreamColor: colors.statusOrange },
    { name: '[Converted to project] Smart Pay-Plus Custo...', owner: 'mmccunnin...', description: 'PRD: https://ww...', workstream: 'XO = One Time', workstreamColor: colors.statusGreen },
    { name: '[Converted to project] Intent Form US Seller Invo...', owner: 'lizdiazpayan...', description: 'Objective: Prov...', workstream: 'XO = One Time', workstreamColor: colors.statusGreen },
    { name: '[Converted to project] Guest Range Toggle...', owner: 'mmccunnin...', description: 'Update local...', workstream: 'XO = One Time', workstreamColor: colors.statusGreen },
    { name: '[Converted to project] Embedded Fuel Sale...', owner: 'carolined@pay...', description: 'Shared Brief i...', workstream: 'Global Product Solutions', workstreamColor: colors.statusOrange },
    { name: '[Converted to project] Intent Form - Non-Chec...', owner: 'lizdiazpayan...', description: 'Shared Brief...', workstream: 'XO = One Time', workstreamColor: colors.statusGreen }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', background: colors.mainBg, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Project Title */}
        <div style={{ padding: '20px 32px', borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '24px', height: '24px', background: '#ffd700', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              ≡
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '20px', fontWeight: 600, color: colors.text }}>
              Intake Form Submission Log
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: colors.textMuted }}>
            <span>List</span>
            <span>Board</span>
            <span>Timeline</span>
            <span>Calendar</span>
            <span>Messages</span>
            <span>Files</span>
            <span>Progress</span>
          </div>
        </div>

        {/* List View */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Section Header */}
          <div style={{ padding: '12px 32px', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: colors.text }}>
              Forms Submitted
            </div>
          </div>

          {/* Column Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 280px 160px 240px 240px', gap: '16px', padding: '8px 32px', background: colors.background, borderBottom: `1px solid ${colors.border}`, fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: colors.textMuted, fontWeight: 600 }}>
            <div>#</div>
            <div>Name</div>
            <div>Owner</div>
            <div>Description</div>
            <div>[SS] Purchase Workstreams</div>
          </div>

          {/* Task Rows */}
          {tasks.map((task, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 280px 160px 240px 240px',
                gap: '16px',
                padding: '10px 32px',
                borderBottom: `1px solid ${colors.border}`,
                fontSize: '12px',
                fontFamily: 'DM Sans, sans-serif',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = colors.taskHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ color: colors.textLight }}>{idx + 1}</div>
              <div style={{ color: colors.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.name}</div>
              <div style={{ color: colors.textMuted, fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.owner}</div>
              <div style={{ color: colors.textMuted, fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.description}</div>
              <div>
                <span style={{
                  background: task.workstreamColor,
                  color: '#fff',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  {task.workstream}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
