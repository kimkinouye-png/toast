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

export const CalendarComparison = () => {
  // Sample calendar data - Before (busy week)
  const beforeEvents = [
    { day: 0, start: 9, duration: 1, title: 'Design C...', color: colors.red },
    { day: 0, start: 10.5, duration: 0.5, title: 'PRD Review', color: colors.red },
    { day: 0, start: 13, duration: 2, title: 'CDO Review', color: colors.red },
    { day: 1, start: 9, duration: 1, title: 'All Hands', color: colors.red },
    { day: 1, start: 11, duration: 1.5, title: 'Product Sync', color: colors.red },
    { day: 1, start: 14, duration: 1, title: 'Design C...', color: colors.red },
    { day: 2, start: 9, duration: 0.5, title: 'Standup', color: colors.red },
    { day: 2, start: 10, duration: 2, title: 'Sprint Planning', color: colors.accentPurple },
    { day: 2, start: 13, duration: 1.5, title: 'UXR Session', color: colors.red },
    { day: 3, start: 9, duration: 1, title: 'All Hands', color: colors.red },
    { day: 3, start: 10.5, duration: 1, title: 'Design E...', color: colors.red },
    { day: 3, start: 13, duration: 2, title: 'Legal Review', color: colors.red },
    { day: 4, start: 9, duration: 0.5, title: 'Standup', color: colors.red },
    { day: 4, start: 10, duration: 1, title: 'Eng Sync', color: colors.red },
    { day: 4, start: 13, duration: 3, title: 'Engagement...', color: colors.red }
  ];

  // Sample calendar data - After (focused week)
  const afterEvents = [
    { day: 0, start: 9, duration: 1, title: 'Grooming', color: colors.teal },
    { day: 0, start: 13, duration: 1, title: 'Sprint Review', color: colors.teal },
    { day: 1, start: 9, duration: 1, title: 'All Hands', color: colors.teal },
    { day: 2, start: 9, duration: 0.5, title: 'Plan', color: colors.teal },
    { day: 2, start: 13, duration: 1, title: 'Crit', color: colors.teal },
    { day: 3, start: 9, duration: 1, title: 'All Hands', color: colors.teal },
    { day: 3, start: 10, duration: 1, title: 'Review', color: colors.teal },
    { day: 4, start: 13, duration: 1, title: 'Legal Review', color: colors.teal }
  ];

  const days = ['6', '7', '8', '9', '10'];
  const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9am to 5pm

  const renderCalendar = (events: any[], title: string, stats: any) => (
    <div className="flex-1">
      <div
        className="mb-4"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          color: colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '0.12em'
        }}
      >
        {title}
      </div>

      {/* Calendar grid */}
      <div
        className="rounded-lg p-4 mb-4"
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`
        }}
      >
        {/* Day headers */}
        <div className="flex mb-2">
          <div style={{ width: '40px' }} />
          {days.map((day) => (
            <div
              key={day}
              className="flex-1 text-center"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: colors.text
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Time slots */}
        <div className="relative">
          {hours.map((hour, hourIdx) => (
            <div key={hour} className="flex" style={{ height: '40px', position: 'relative' }}>
              {/* Hour label */}
              <div
                style={{
                  width: '40px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  color: colors.textVeryMuted,
                  paddingTop: '2px'
                }}
              >
                {hour > 12 ? `${hour - 12}pm` : `${hour}am`}
              </div>

              {/* Day columns */}
              {days.map((day, dayIdx) => (
                <div
                  key={`${hour}-${day}`}
                  className="flex-1"
                  style={{
                    borderTop: hourIdx === 0 ? `1px solid ${colors.divider}` : 'none',
                    borderBottom: `1px solid ${colors.divider}`,
                    borderLeft: dayIdx === 0 ? `1px solid ${colors.divider}` : 'none',
                    borderRight: `1px solid ${colors.divider}`,
                    position: 'relative'
                  }}
                >
                  {/* Events */}
                  {events
                    .filter((e) => e.day === dayIdx && Math.floor(e.start) === hour)
                    .map((event, eventIdx) => {
                      const top = (event.start - hour) * 40;
                      const height = event.duration * 40 - 2;
                      return (
                        <div
                          key={eventIdx}
                          className="absolute left-0 right-0 rounded px-1"
                          style={{
                            top: `${top}px`,
                            height: `${height}px`,
                            backgroundColor: event.color,
                            opacity: 0.8,
                            marginLeft: '2px',
                            marginRight: '2px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '9px',
                              fontWeight: 500,
                              color: colors.surface,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {event.title}
                          </div>
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <div
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '28px',
                fontWeight: 700,
                color: title.includes('Before') ? colors.red : colors.teal,
                lineHeight: 1
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                color: colors.textMuted,
                marginTop: '4px'
              }}
            >
              {key}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full flex gap-8">
      {renderCalendar(
        beforeEvents,
        'Before — Ways of Working',
        {
          '26 hrs': 'meetings',
          '74%': 'in meetings',
          '9 hrs': 'focus time',
          '6': 'conflicts'
        }
      )}
      {renderCalendar(
        afterEvents,
        'After — Ways of Working',
        {
          '12 hrs': 'meetings',
          '36%': 'in meetings',
          '23 hrs': 'focus time',
          '0': 'conflicts'
        }
      )}
    </div>
  );
};
