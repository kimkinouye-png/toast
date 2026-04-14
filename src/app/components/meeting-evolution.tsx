const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  textVeryMuted: 'rgba(26,26,26,0.35)',
  accentPurple: '#6b6ce0',
  teal: '#2ebdb4',
  red: '#d43f3e',
  divider: 'rgba(0,0,0,0.08)',
  border: 'rgba(0,0,0,0.12)',
  ghost: 'rgba(26,26,26,0.04)'
};

export const MeetingEvolution = () => {
  return (
    <div className="w-full space-y-16" style={{ maxWidth: '90%', margin: '0 auto' }}>
      {/* BEFORE */}
      <div>
        <div
          className="mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}
        >
          Before
        </div>
        <div
          className="mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '32px',
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.2
          }}
        >
          8+ hrs per week.
        </div>

        {/* Timeline */}
        <div className="relative mb-6">
          {/* Hour markers */}
          <div className="flex mb-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour) => (
              <div
                key={hour}
                className="flex-1 text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.textVeryMuted
                }}
              >
                {hour}h
              </div>
            ))}
          </div>

          {/* Meeting blocks */}
          <div className="flex gap-2 mb-4">
            {/* Product Design Sync - 3hrs */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '30%',
                backgroundColor: colors.red,
                opacity: 0.6
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Product Design Sync
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                3 hrs · Tue + Thu · ran 90 min
              </div>
            </div>

            {/* Design Crit - 1hr */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '10%',
                backgroundColor: colors.red,
                opacity: 0.6
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Design Crit
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                1 hr
              </div>
            </div>

            {/* CDO Design Review - 4hrs */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '40%',
                backgroundColor: colors.red,
                opacity: 0.6
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                CDO Design Review
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                4 hrs · weekly · all teams present
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: colors.textMuted,
            lineHeight: 1.4
          }}
        >
          One meeting trying to do seven jobs.
        </div>
      </div>

      {/* AFTER */}
      <div>
        <div
          className="mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: colors.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}
        >
          After
        </div>
        <div
          className="mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '32px',
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.2
          }}
        >
          ~3 hrs avg across sprint.
        </div>

        {/* Timeline */}
        <div className="relative mb-6">
          {/* Hour markers */}
          <div className="flex mb-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour) => (
              <div
                key={hour}
                className="flex-1 text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.textVeryMuted
                }}
              >
                {hour}h
              </div>
            ))}
          </div>

          {/* Meeting blocks */}
          <div className="flex gap-2 mb-2">
            {/* Grooming */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '10%',
                backgroundColor: colors.teal,
                opacity: 0.8
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Grooming
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                1h
              </div>
            </div>

            {/* Plan */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '5%',
                backgroundColor: colors.teal,
                opacity: 0.8
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Plan
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                30m
              </div>
            </div>

            {/* Crit */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '10%',
                backgroundColor: colors.teal,
                opacity: 0.8
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Crit
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                1h
              </div>
            </div>

            {/* Review */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '10%',
                backgroundColor: colors.teal,
                opacity: 0.8
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                Review
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                1h · 20 min slots
              </div>
            </div>

            {/* CDO Design Review */}
            <div
              className="rounded px-3 py-3"
              style={{
                width: '10%',
                backgroundColor: colors.teal,
                opacity: 0.8
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: colors.surface
                }}
              >
                CDO Design Review
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: colors.surface,
                  opacity: 0.9,
                  marginTop: '4px'
                }}
              >
                1h · bi-weekly
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: colors.textMuted,
            lineHeight: 1.4
          }}
        >
          Every meeting had a job to be done.
        </div>
      </div>
    </div>
  );
};
