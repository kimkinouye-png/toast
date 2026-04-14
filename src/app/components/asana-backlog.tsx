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

export const AsanaBacklog = () => {
  const tasks = [
    {
      section: 'BACKLOG',
      items: [
        { name: 'Three Tap Carousel', date: 'Apr 9 – May 7', priority: 'P1', status: 'Ready', statusColor: colors.teal, assignee: 'Reviewed' },
        { name: 'Three Pay Options', date: 'Apr 8 – Jun 18', priority: 'P1', status: 'Ready', statusColor: colors.teal, assignee: 'Reviewed' },
        { name: 'PDP Pre-Approval', date: 'May 6 – Jun 2', priority: 'P1', status: 'Ready', statusColor: colors.teal, assignee: 'Reviewed' },
        { name: 'Checkout Flow v5', date: 'May 5 – Jun 5', priority: 'P1', status: 'Not Ready', statusColor: colors.orange, assignee: 'New' }
      ]
    },
    {
      section: 'PLAN',
      items: [
        { name: 'Dynamic Messaging', date: 'Apr 9 – 28', priority: 'P2', status: 'At Risk', statusColor: colors.orange, assignee: 'Next' },
        { name: 'Review PRD', date: 'Apr 7', priority: 'P1', status: 'At Risk', statusColor: colors.orange, assignee: 'Next' },
        { name: 'Ticket Transfer', date: 'Yesterday', priority: 'P1', status: 'On Track', statusColor: colors.teal, assignee: 'Next' },
        { name: 'Scope Plan', date: 'Monday', priority: 'P0', status: 'On Track', statusColor: colors.teal, assignee: 'Next' },
        { name: 'Kick Off', date: 'Monday', priority: 'P1', status: 'On Track', statusColor: colors.teal, assignee: 'Next' }
      ]
    },
    {
      section: 'DISCOVERY',
      items: [
        { name: 'Pod Review', date: 'Wednesday', priority: 'P0', status: 'On Track', statusColor: colors.teal, assignee: 'Now' },
        { name: 'Pod LT Review', date: 'Apr 20', priority: 'P1', status: 'On Track', statusColor: colors.teal, assignee: 'Now' }
      ]
    }
  ];

  return (
    <div
      className="w-full rounded-lg p-6"
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        maxWidth: '900px'
      }}
    >
      {/* Column Headers */}
      <div
        className="flex items-center gap-3 py-2 px-3 mb-4"
        style={{
          borderBottom: `1px solid ${colors.divider}`
        }}
      >
        {/* Checkbox spacer */}
        <div className="flex-shrink-0" style={{ width: '18px' }} />

        {/* Task name header */}
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
          Task name
        </div>

        {/* Date header */}
        <div
          className="flex-shrink-0"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            minWidth: '100px'
          }}
        >
          Dates
        </div>

        {/* Priority header */}
        <div
          className="flex-shrink-0"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            minWidth: '40px'
          }}
        >
          Priority
        </div>

        {/* Status header */}
        <div
          className="flex-shrink-0"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            minWidth: '100px'
          }}
        >
          Status
        </div>

        {/* Assignee header */}
        <div
          className="flex-shrink-0"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            minWidth: '80px'
          }}
        >
          Review
        </div>
      </div>

      {tasks.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-6">
          {/* Section header */}
          <div
            className="mb-3 pb-2"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: colors.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderBottom: `1px solid ${colors.divider}`
            }}
          >
            {section.section}
          </div>

          {/* Tasks */}
          <div className="space-y-2">
            {section.items.map((task, taskIdx) => (
              <div
                key={taskIdx}
                className="flex items-center gap-3 py-2 px-3 rounded hover:bg-opacity-50 transition-colors"
                style={{
                  backgroundColor: colors.ghost,
                  border: `1px solid transparent`
                }}
              >
                {/* Checkbox */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: `2px solid ${colors.border}`,
                    backgroundColor: colors.surface
                  }}
                />

                {/* Task name */}
                <div
                  className="flex-1"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: colors.text
                  }}
                >
                  {task.name}
                </div>

                {/* Date */}
                <div
                  className="flex-shrink-0"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: colors.textMuted,
                    minWidth: '100px'
                  }}
                >
                  {task.date}
                </div>

                {/* Priority */}
                <div
                  className="flex-shrink-0"
                  style={{
                    minWidth: '40px'
                  }}
                >
                  {task.priority && (
                    <div
                      className="px-2 py-1 rounded inline-block"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: colors.red,
                        color: colors.surface,
                        opacity: 0.85
                      }}
                    >
                      {task.priority}
                    </div>
                  )}
                </div>

                {/* Status */}
                <div
                  className="flex-shrink-0"
                  style={{
                    minWidth: '100px'
                  }}
                >
                  {task.status && (
                    <div
                      className="px-3 py-1 rounded-full inline-block"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '11px',
                        fontWeight: 500,
                        backgroundColor: task.statusColor,
                        color: colors.surface,
                        opacity: 0.9
                      }}
                    >
                      {task.status}
                    </div>
                  )}
                </div>

                {/* Assignee */}
                <div
                  className="flex-shrink-0"
                  style={{
                    minWidth: '80px'
                  }}
                >
                  {task.assignee && (
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: colors.text
                      }}
                    >
                      {task.assignee}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
