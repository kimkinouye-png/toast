export const SolutionsBrainstorm = () => {
  const colors = {
    background: '#faf9f7',
    text: '#1a1a1a',
    cardBg: '#ffffff',
    tabBg: '#1a1a1a',
    tabText: '#ffffff',
    border: 'rgba(0,0,0,0.12)'
  };

  const solutions = [
    {
      phase: 'DISCOVER',
      cards: [
        {
          title: 'Concept +\nBriefing',
          items: [
            'Create design briefs from PRDs',
            'Summarize room PRDs'
          ]
        },
        {
          title: 'Discovery +\nResearch',
          items: [
            'Leverage agents to research during brainstorming',
            'Transcription during brainstorming'
          ]
        }
      ]
    },
    {
      phase: 'DEFINE',
      cards: [
        {
          title: 'Strategy +\nPrioritization',
          items: [
            'Facilitate brainstorm helping to synthesize ideas'
          ]
        },
        {
          title: 'Design +\nPrototyping',
          items: [
            'Enable rapid prototyping via AI-driven service reviews'
          ]
        }
      ]
    },
    {
      phase: 'DEVELOP',
      cards: [
        {
          title: 'Development +\nImplementation',
          items: [
            'Streamline legal submissions and queries'
          ]
        },
        {
          title: 'Launch +\nMeasurement',
          items: [
            'Optimize hand-off, ensuring edge cases'
          ]
        }
      ]
    },
    {
      phase: 'DELIVER',
      cards: [
        {
          title: 'Iteration +\nImprovement',
          items: []
        }
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: colors.background, padding: '0 40px' }}>
      {/* Phase tabs */}
      <div className="flex gap-4 mb-8">
        {solutions.map((section) => (
          <div
            key={section.phase}
            style={{
              flex: 1,
              backgroundColor: colors.tabBg,
              color: colors.tabText,
              padding: '12px 0',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              fontFamily: 'DM Sans, sans-serif',
              borderRadius: '6px'
            }}
          >
            {section.phase}
          </div>
        ))}
      </div>

      {/* Solution cards grid */}
      <div className="flex gap-4 flex-1">
        {solutions.map((section) => (
          <div key={section.phase} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {section.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '6px',
                  padding: '20px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                  minHeight: '140px'
                }}
              >
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: colors.text,
                    marginBottom: '14px',
                    lineHeight: '1.4',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {card.title}
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px' }}>
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        lineHeight: '1.5',
                        color: colors.text,
                        marginBottom: '8px'
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
