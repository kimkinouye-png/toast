const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  textVeryMuted: 'rgba(26,26,26,0.35)',
  accentPurple: '#6b6ce0',
  teal: '#2ebdb4',
  red: '#d43f3e',
  orange: '#f5a623',
  divider: 'rgba(0,0,0,0.08)',
  border: 'rgba(0,0,0,0.12)',
  ghost: 'rgba(26,26,26,0.04)'
};

export const AsanaPortfolio = () => {
  const projects = [
    { name: 'BNPL', status: 'On track', statusTime: '2 days ago', statusColor: colors.teal, dueDate: 'Jun 30', priority: 'P0', priorityColor: colors.red },
    { name: 'Subscriptions', status: 'On track', statusTime: '1 day ago', statusColor: colors.teal, dueDate: 'Jun 30', priority: 'P0', priorityColor: colors.red },
    { name: 'One Time', status: 'At risk', statusTime: '3 days ago', statusColor: colors.orange, dueDate: 'May 30', priority: 'P0', priorityColor: colors.red },
    { name: 'Pre Purchase', status: 'On track', statusTime: 'today', statusColor: colors.teal, dueDate: 'Jul 15', priority: 'P1', priorityColor: colors.orange },
    { name: 'Digital Wallet', status: 'On track', statusTime: 'today', statusColor: colors.teal, dueDate: 'Jun 15', priority: 'P1', priorityColor: colors.orange },
    { name: 'Post Purchase', status: 'No recent updates', statusTime: '', statusColor: colors.textMuted, dueDate: 'Jul 30', priority: 'P1', priorityColor: colors.orange }
  ];

  return (
    <div
      className="w-full rounded-lg"
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        maxWidth: '1200px'
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-6 py-3"
        style={{
          borderBottom: `1px solid ${colors.divider}`
        }}
      >
        <div
          className="flex items-center justify-center rounded"
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: colors.red,
            color: colors.surface,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          A
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            color: colors.text
          }}
        >
          Branded Checkout
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-6 px-6 py-2"
        style={{
          borderBottom: `1px solid ${colors.divider}`
        }}
      >
        {['List', 'Timeline', 'Dashboard', 'Progress', 'Workload'].map((tab, i) => (
          <div
            key={tab}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: i === 0 ? 600 : 400,
              color: i === 0 ? colors.text : colors.textMuted,
              paddingBottom: '8px',
              borderBottom: i === 0 ? `2px solid ${colors.accentPurple}` : 'none',
              cursor: 'pointer'
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Column headers */}
      <div
        className="flex items-center gap-4 px-6 py-2"
        style={{
          borderBottom: `1px solid ${colors.divider}`,
          backgroundColor: colors.ghost
        }}
      >
        <div style={{ width: '24px' }} />
        <div
          className="flex-1"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Name
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            width: '200px'
          }}
        >
          Status
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            width: '100px'
          }}
        >
          Due Date
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            width: '80px'
          }}
        >
          Priority
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            width: '60px'
          }}
        >
          Owner
        </div>
      </div>

      {/* Project rows */}
      <div>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-6 py-3"
            style={{
              borderBottom: idx < projects.length - 1 ? `1px solid ${colors.divider}` : 'none'
            }}
          >
            {/* Checkbox */}
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '3px',
                border: `2px solid ${colors.border}`,
                backgroundColor: colors.surface
              }}
            />

            {/* Name */}
            <div
              className="flex-1"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                color: colors.text
              }}
            >
              {project.name}
            </div>

            {/* Status */}
            <div style={{ width: '200px' }}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: project.statusColor,
                  opacity: 0.9
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: colors.surface
                  }}
                />
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: colors.surface
                  }}
                >
                  {project.status}
                  {project.statusTime && ` · ${project.statusTime}`}
                </span>
              </div>
            </div>

            {/* Due Date */}
            <div
              style={{
                width: '100px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: colors.textMuted
              }}
            >
              {project.dueDate}
            </div>

            {/* Priority */}
            <div style={{ width: '80px' }}>
              <div
                className="inline-block px-2 py-1 rounded"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: project.priorityColor,
                  color: colors.surface,
                  opacity: 0.85
                }}
              >
                {project.priority}
              </div>
            </div>

            {/* Owner */}
            <div style={{ width: '60px' }}>
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: colors.accentPurple,
                  color: colors.surface,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600
                }}
              >
                KI
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
