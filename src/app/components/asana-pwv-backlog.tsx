export const AsanaPwVBacklog = () => (
  <div style={{ background: 'white', borderRadius: '8px', border: '0.5px solid rgba(0,0,0,0.12)', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', width: '100%' }}>
    <div style={{ background: 'white', padding: '10px 16px 0' }}>
      <div style={{ fontSize: '10px', color: '#888', marginBottom: '5px' }}>XD_Consumer_Pillar / XD_Purchase / Post-purchase Portfolio /</div>
      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
        <div style={{ width: '16px', height: '16px', background: '#f0f0f0', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>≡</div>
        XD_PwV_Backlog
        <span style={{ fontSize: '11px', color: '#888', fontWeight: 400, marginLeft: '4px' }}>✓ Set status</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
          <div style={{ background: '#6b6ce0', color: 'white', fontSize: '10px', padding: '3px 10px', borderRadius: '4px' }}>Share</div>
          <div style={{ fontSize: '10px', color: '#555', border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: '4px', padding: '3px 8px' }}>Customize</div>
        </div>
      </div>
      <div style={{ display: 'flex', borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}>
        {['Overview', 'List ···', 'Board', 'Timeline', 'Dashboard', 'Calendar', 'Workflow', 'Messages', 'Files +'].map((t, i) => (
          <div key={t} style={{ fontSize: '11px', color: i === 1 ? '#1a1a1a' : '#888', padding: '6px 10px', borderBottom: i === 1 ? '2px solid #1a1a1a' : '2px solid transparent', fontWeight: i === 1 ? 500 : 400, whiteSpace: 'nowrap' }}>{t}</div>
        ))}
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 16px', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
      <div style={{ fontSize: '10px', color: '#555', border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: '4px', padding: '3px 8px' }}>+ Add task ∨</div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
        {['≡ Filter', '↕ Sort', '⊞ Group', '⊘ Hide'].map(b => (
          <div key={b} style={{ fontSize: '10px', color: '#555', border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: '4px', padding: '3px 8px' }}>{b}</div>
        ))}
      </div>
      <div style={{ fontSize: '10px', color: '#888' }}>Save view ∨</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '2.4fr 0.6fr 0.7fr 0.7fr 0.8fr 0.7fr 0.7fr', padding: '4px 16px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', background: '#fafafa' }}>
      {['# Task name', 'PRD Submi...', 'PRD - Com...', 'Work Need...', 'Design - Si...', 'Content Si...', 'KO Date ↑'].map(h => (
        <div key={h} style={{ fontSize: '9px', color: '#888', fontWeight: 500, padding: '2px 4px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{h}</div>
      ))}
    </div>

    {[
      { section: 'Unplanned', rows: [
        { name: 'Checkout Error State Redesign', prd: true, comp: 'Sufficient', work: 'Discovery +4', design: 'M', content: 'S', ko: 'Aug 12', designColor: '#2ebdb4', contentColor: '#6b6ce0' },
        { name: 'Guest Checkout Flow Optimization', prd: true, comp: 'Sufficient', work: '', design: 'S', content: 'XS', ko: 'Aug 19', designColor: '#2ebdb4', contentColor: '#6b6ce0' },
      ]},
      { section: 'Planned Backlog', rows: [
        { name: 'Empty Paysheet Update Design', prd: true, comp: 'Sufficient', work: '', design: 'XS', content: '', ko: 'Sep 3', designColor: '#2ebdb4', contentColor: '' },
        { name: 'Refunds Experience Refresh', prd: true, comp: 'Sufficient', work: '', design: 'L', content: 'M', ko: 'Sep 10', designColor: '#f5c842', contentColor: '#6b6ce0' },
      ]},
      { section: 'Grooming', rows: [] },
      { section: 'KO Ready', rows: [] },
    ].map(({ section, rows }) => (
      <div key={section}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 16px 3px' }}>
          <span style={{ fontSize: '10px', color: '#888' }}>▼</span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>{section}</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2.4fr 0.6fr 0.7fr 0.7fr 0.8fr 0.7fr 0.7fr', padding: '4px 16px', borderBottom: '0.5px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
            <div style={{ fontSize: '10px', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '5px', paddingLeft: '16px' }}>
              <span style={{ fontSize: '9px', color: '#888' }}>⊡</span> {row.name}
            </div>
            <div style={{ padding: '2px 4px' }}>{row.prd && <span style={{ background: '#3d3d3d', color: 'white', padding: '1px 6px', borderRadius: '6px', fontSize: '8px', fontWeight: 600 }}>Yes</span>}</div>
            <div style={{ padding: '2px 4px' }}>{row.comp && <span style={{ background: '#e8f5ee', color: '#1a6b3c', border: '0.5px solid rgba(45,189,110,0.4)', padding: '1px 6px', borderRadius: '6px', fontSize: '8px', fontWeight: 600 }}>{row.comp}</span>}</div>
            <div style={{ padding: '2px 4px', fontSize: '9px', color: '#555' }}>{row.work}</div>
            <div style={{ padding: '2px 4px' }}>{row.design && <span style={{ background: row.designColor, color: row.designColor === '#f5c842' ? '#7d6608' : 'white', padding: '1px 6px', borderRadius: '6px', fontSize: '8px', fontWeight: 600 }}>{row.design}</span>}</div>
            <div style={{ padding: '2px 4px' }}>{row.content && <span style={{ background: row.contentColor, color: 'white', padding: '1px 6px', borderRadius: '6px', fontSize: '8px', fontWeight: 600 }}>{row.content}</span>}</div>
            <div style={{ padding: '2px 4px', fontSize: '9px', color: '#1a1a1a' }}>{row.ko}</div>
          </div>
        ))}
        {rows.length === 0 && <div style={{ fontSize: '9px', color: '#aaa', padding: '3px 16px 3px 42px' }}>#</div>}
        <div style={{ fontSize: '10px', color: '#888', padding: '4px 16px 4px 42px' }}>+ Add task...</div>
      </div>
    ))}
    <div style={{ padding: '6px 16px', fontSize: '10px', color: '#6b6ce0', cursor: 'pointer' }}>+ Add section</div>
  </div>
);
