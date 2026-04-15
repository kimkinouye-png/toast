export const PilotTestPlan = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
    <table style={{ fontFamily: 'DM Sans, sans-serif', width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
      <thead>
        <tr>
          {['Focus','Objectives','Pilot Description','Tool','KPIs','Base','Result','Adoption','Dates'].map(h => (
            <th key={h} style={{ textAlign: 'left', padding: '7px 8px', borderBottom: '2px solid #1a1a1a', fontWeight: 700, fontSize: '10px', color: '#1a1a1a', background: '#faf9f7' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            focus: 'All', obj: 'Reduce overall time of projects per sprint.',
            name: 'Leveraging LLMs and agents throughout the PDLC', desc: '',
            tool: 'Multi', kpi: 'Project Velocity (small projects/sprint)',
            base: '5 per designer', result: '5 per designer', resultType: 'strong',
            adoption: '—', adoptionType: 'none', date: "Q4 '25", divider: false
          },
          {
            focus: 'Plan\n(Matt)', obj: 'Reduce time needed for briefing design teams.',
            name: 'PRD → Design Brief', desc: 'Agents extract essential information and create a design-thinking brief.',
            tool: 'Writer', kpi: 'Time to scope and plan for S/M projects.',
            base: '2 hrs', result: '15 min', resultType: 'strong',
            adoption: '100%', adoptionType: 'full', date: "Q4 '25", divider: false
          },
          {
            focus: 'Legal\nReview', obj: 'Decrease time to Legal Sign Off.',
            name: 'Consumer Duty Surveys', desc: 'Time to fill out Consumer Duty surveys.',
            tool: 'Writer / ChatGPT', kpi: 'Time to fill out form',
            base: '2 hrs', result: '30 min / 75% ↓', resultType: 'strong',
            adoption: '100%', adoptionType: 'full', date: "Q4 '25", divider: true
          },
          {
            focus: 'Legal\nReview', obj: 'Decrease time to Legal Sign Off.',
            name: 'Jira Legal Ticket Submission', desc: 'Use tools to submit legal tickets in Jira.',
            tool: 'Writer / ChatGPT', kpi: 'Time to submit Jira ticket',
            base: '30 min', result: '5 min', resultType: 'strong',
            adoption: '100%', adoptionType: 'full', date: "Q4 '25", divider: false
          },
          {
            focus: 'Discovery\n(Vinod)', obj: 'Boost volume of ideation for user experiences.',
            name: 'Brainstorming & Ideation', desc: 'XD agents with personas based on key segments to generate ideas.',
            tool: 'Figma Make / Claude / Replit', kpi: 'Increased concept designs',
            base: '—', result: 'Quality', resultType: 'quality',
            adoption: '15%', adoptionType: 'low', date: "Q4 '25", divider: true
          },
          {
            focus: 'Design\n(Vinod)', obj: 'More rapid research and user testing to validate designs.',
            name: 'Prototyping', desc: 'Fast functional prototypes to demonstrate interactions during review phases.',
            tool: 'Replit / Figma Make', kpi: 'Increased prototypes in reviews',
            base: '20 hrs', result: 'Quality', resultType: 'quality',
            adoption: '30%', adoptionType: 'low', date: "Q4 '25", divider: false
          },
          {
            focus: 'Deliver', obj: 'Scale content standards across every Figma file.',
            name: 'Agentic Editor', desc: 'Real-time content compliance checks against style guide and accessibility rules in Figma.',
            tool: 'XD Content Analyzer', kpi: 'Content compliance rate',
            base: 'Manual review', result: 'Quality', resultType: 'quality',
            adoption: '100%', adoptionType: 'full', date: "Q1 '26", divider: false
          },
          {
            focus: 'Discovery\n(Nisreen)', obj: 'Improve customer centricity by making insights accessible.',
            name: 'User Insights', desc: 'Synthesis of research, VOC data, analytics, survey results.',
            tool: 'tbd', kpi: 'Include data and insights in more projects',
            base: '1 week', result: 'On hold', resultType: 'hold',
            adoption: '—', adoptionType: 'none', date: "Q2 '26", divider: true
          },
          {
            focus: 'Deliver', obj: 'Improves quality of file received by engineering.',
            name: 'Pre-Hand Off QA', desc: 'Review PDS usage, accessibility, proper file structure for hand off.',
            tool: 'tbd', kpi: 'Project Velocity (small projects/sprint)',
            base: '—', result: 'On hold', resultType: 'hold',
            adoption: '—', adoptionType: 'none', date: "Q2 '26", divider: false
          },
        ].map((row, i) => {
          const resultColor = row.resultType === 'strong' ? '#0f6e56' : row.resultType === 'quality' ? '#6b6ce0' : '#aaa';
          const resultStyle = row.resultType === 'hold' ? { color: '#aaa', fontStyle: 'italic' } : { color: resultColor, fontWeight: 700 };
          const adoptionColor = row.adoptionType === 'full' ? '#0f6e56' : row.adoptionType === 'low' ? '#c07a00' : '#1a1a1a';
          const adoptionWeight = row.adoptionType !== 'none' ? 700 : 400;
          const borderTop = row.divider ? '1.5px solid rgba(107,108,224,0.2)' : undefined;
          const focusParts = row.focus.split('\n');
          return (
            <tr key={i} style={{ borderTop }}>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a', fontWeight: 600 }}>
                {focusParts[0]}{focusParts[1] && <><br/><span style={{ fontWeight: 400, color: '#888' }}>{focusParts[1]}</span></>}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>{row.obj}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                <span style={{ fontWeight: 700, display: 'block', marginBottom: '2px' }}>{row.name}</span>
                {row.desc && <span style={{ color: '#555' }}>{row.desc}</span>}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>{row.tool}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>{row.kpi}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>{row.base}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', ...resultStyle }}>{row.result}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: adoptionColor, fontWeight: adoptionWeight }}>{row.adoption}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>{row.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
