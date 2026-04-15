type PctTier = 'full' | 'low' | 'none';

const pctCellStyle = (tier: PctTier) =>
  tier === 'none'
    ? { color: '#1a1a1a' as const, fontWeight: 400 as const }
    : tier === 'low'
      ? { color: '#c07a00' as const, fontWeight: 700 as const }
      : { color: '#0f6e56' as const, fontWeight: 700 as const };

export const PilotTestPlan = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px' }}>
    <table style={{ fontFamily: 'DM Sans, sans-serif', width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
      <thead>
        <tr>
          {['Focus', 'Pilot Description', 'Objectives', 'KPIs', 'Base', 'Result', 'XO Team', 'Org Adoption', 'Dates'].map((h) => (
            <th
              key={h}
              style={{
                textAlign: 'left',
                padding: '7px 8px',
                borderBottom: '2px solid #1a1a1a',
                fontWeight: 700,
                fontSize: '10px',
                color: '#1a1a1a',
                background: '#faf9f7'
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          {
            focus: 'All',
            name: 'Leveraging LLMs and agents throughout the PDLC',
            desc: '',
            obj: 'Reduce overall time of projects per sprint.',
            kpi: 'Project Velocity (small projects/sprint)',
            base: '5 per designer',
            result: '5 per designer',
            resultType: 'strong' as const,
            xo: '—',
            xoTier: 'none' as const,
            org: '—',
            orgTier: 'none' as const,
            date: "Q4 '25",
            divider: false
          },
          {
            focus: 'Plan',
            name: 'PRD → Design Brief',
            desc: '',
            obj: 'Reduce time needed for briefing design teams.',
            kpi: 'Time to scope and plan for S/M projects.',
            base: '2 hrs',
            result: '15 min',
            resultType: 'strong' as const,
            xo: '100%',
            xoTier: 'full' as const,
            org: '50%',
            orgTier: 'full' as const,
            date: "Q4 '25",
            divider: false
          },
          {
            focus: 'Deliver (Legal)',
            name: 'Consumer Duty Surveys',
            desc: '',
            obj: 'Decrease time to Legal Sign Off.',
            kpi: 'Time to fill out form',
            base: '2 hrs',
            result: '30 min / 75% ↓',
            resultType: 'strong' as const,
            xo: '100%',
            xoTier: 'full' as const,
            org: '100%',
            orgTier: 'full' as const,
            date: "Q4 '25",
            divider: false
          },
          {
            focus: 'Deliver (Legal)',
            name: 'Jira Legal Ticket Submission',
            desc: '',
            obj: 'Decrease time to Legal Sign Off.',
            kpi: 'Time to submit Jira ticket',
            base: '30 min',
            result: '5 min',
            resultType: 'strong' as const,
            xo: '100%',
            xoTier: 'full' as const,
            org: '100%',
            orgTier: 'full' as const,
            date: "Q4 '25",
            divider: true
          },
          {
            focus: 'Discovery',
            name: 'Brainstorming & Ideation',
            desc: 'XD agents',
            obj: 'Boost volume of ideation for user experiences.',
            kpi: 'Increased concept designs',
            base: '—',
            result: 'Quality',
            resultType: 'quality' as const,
            xo: '15%',
            xoTier: 'low' as const,
            org: '7%',
            orgTier: 'low' as const,
            date: "Q1 '26",
            divider: false
          },
          {
            focus: 'Design',
            name: 'Prototyping',
            desc: 'Fast functional prototypes',
            obj: 'More rapid research and user testing to validate designs.',
            kpi: 'Increased prototypes in reviews',
            base: '20 hrs',
            result: 'Quality',
            resultType: 'quality' as const,
            xo: '30%',
            xoTier: 'low' as const,
            org: '15%',
            orgTier: 'low' as const,
            date: "Q4 '25",
            divider: true
          },
          {
            focus: 'Deliver',
            name: 'Agentic Editor',
            desc: 'Real-time content compliance checks',
            obj: 'Scale content standards across every Figma file.',
            kpi: 'Content compliance rate',
            base: '2 weeks',
            result: 'Quality',
            resultType: 'quality' as const,
            xo: '100%',
            xoTier: 'full' as const,
            org: '100%',
            orgTier: 'full' as const,
            date: "Q1 '26",
            divider: false
          },
          {
            focus: 'Discovery',
            name: 'User Insights',
            desc: 'Synthesis of research',
            obj: 'Improve customer centricity',
            kpi: 'Include data and insights in more projects',
            base: '1 week',
            result: 'On hold',
            resultType: 'hold' as const,
            xo: '—',
            xoTier: 'none' as const,
            org: '—',
            orgTier: 'none' as const,
            date: "Q2 '26",
            divider: false
          },
          {
            focus: 'Deliver',
            name: 'Pre-Hand Off QA',
            desc: 'Review PDS usage',
            obj: 'Improves quality of file received by engineering.',
            kpi: 'Project Velocity (small projects/sprint)',
            base: '—',
            result: 'On hold',
            resultType: 'hold' as const,
            xo: '—',
            xoTier: 'none' as const,
            org: '—',
            orgTier: 'none' as const,
            date: "Q2 '26",
            divider: true
          },
          {
            focus: 'Plan',
            name: 'Calculator to more accurately forecast hc needed.',
            desc: '',
            obj: 'Decrease time for capacity planning',
            kpi: 'Time spent (wks)',
            base: '3 weeks',
            result: '1 week',
            resultType: 'strong' as const,
            xo: '—',
            xoTier: 'none' as const,
            org: '—',
            orgTier: 'none' as const,
            date: "Q2 '26",
            divider: false
          },
          {
            focus: 'All',
            name: 'Figma Make template using data from context panel.',
            desc: '',
            obj: 'Decrease time to create design review decks',
            kpi: 'Time spent (hrs/dd)',
            base: '8 hrs',
            result: '80%',
            resultType: 'strong' as const,
            xo: '—',
            xoTier: 'none' as const,
            org: '—',
            orgTier: 'none' as const,
            date: "Q2 '26",
            divider: false
          }
        ].map((row, i) => {
          const resultColor = row.resultType === 'strong' ? '#0f6e56' : row.resultType === 'quality' ? '#6b6ce0' : '#aaa';
          const resultStyle =
            row.resultType === 'hold' ? { color: '#aaa', fontStyle: 'italic' as const } : { color: resultColor, fontWeight: 700 as const };
          const borderTop = row.divider ? '1.5px solid rgba(107,108,224,0.2)' : undefined;
          return (
            <tr key={i} style={{ borderTop }}>
              <td
                style={{
                  padding: '7px 8px',
                  borderBottom: '0.5px solid rgba(0,0,0,0.1)',
                  verticalAlign: 'top',
                  color: '#1a1a1a',
                  fontWeight: 600
                }}
              >
                {row.focus}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                <span style={{ fontWeight: 700, display: 'block', marginBottom: row.desc ? '2px' : 0 }}>{row.name}</span>
                {row.desc ? <span style={{ color: '#555' }}>{row.desc}</span> : null}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                {row.obj}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                {row.kpi}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                {row.base}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', ...resultStyle }}>{row.result}</td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', ...pctCellStyle(row.xoTier) }}>
                {row.xo}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', ...pctCellStyle(row.orgTier) }}>
                {row.org}
              </td>
              <td style={{ padding: '7px 8px', borderBottom: '0.5px solid rgba(0,0,0,0.1)', verticalAlign: 'top', color: '#1a1a1a' }}>
                {row.date}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
