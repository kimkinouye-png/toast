import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

// Template 0: Main Title
const TemplateMainTitle = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '52px 80px' }}>
      <div className="mb-8">
        <div
          className="uppercase tracking-[0.18em]"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple,
            marginBottom: '24px'
          }}
        >
          Eyebrow Text
        </div>
        <h1
          className="max-w-4xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '140px',
            fontWeight: 700,
            lineHeight: 1.1,
            color: colors.text,
            marginBottom: '24px'
          }}
        >
          Main Title
        </h1>
        <div
          className="h-px w-full max-w-2xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`,
            marginBottom: '48px'
          }}
        />
        <p
          className="max-w-2xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '34px',
            fontWeight: 300,
            lineHeight: 1.4,
            color: 'rgba(26,26,26,0.85)'
          }}
        >
          Subtitle or description text — no ghost number on main title
        </p>
      </div>
    </div>
  </div>
);

// Template A: Chapter Intro
const TemplateA = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '52px 80px' }}>
      <div className="mb-8">
        <div
          className="uppercase tracking-[0.18em]"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple,
            marginBottom: '24px'
          }}
        >
          Eyebrow Text
        </div>
        <h1
          className="max-w-4xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '140px',
            fontWeight: 700,
            lineHeight: 1.1,
            color: colors.text,
            marginBottom: '24px'
          }}
        >
          Chapter Title
        </h1>
        <div
          className="h-px w-full max-w-2xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`,
            marginBottom: '48px'
          }}
        />
        <p
          className="max-w-2xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '34px',
            fontWeight: 300,
            lineHeight: 1.4,
            color: 'rgba(26,26,26,0.85)'
          }}
        >
          Subtitle or description text goes here with a bit more detail about the section
        </p>
      </div>

      <div
        className="absolute bottom-12 right-20"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '280px',
          fontWeight: 700,
          color: colors.ghost,
          lineHeight: 1,
          pointerEvents: 'none'
        }}
      >
        01
      </div>
    </div>
  </div>
);

// Template B: Statement
const TemplateB = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0 flex items-center justify-center" style={{ padding: '52px 120px' }}>
      <h2
        className="text-center max-w-5xl"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '64px',
          fontWeight: 700,
          lineHeight: 1.3,
          color: colors.text
        }}
      >
        A centered statement or quote that spans multiple lines and creates impact through scale and positioning
      </h2>
    </div>
  </div>
);

// Template E: Headline + Visual Right
const TemplateE = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="flex h-full gap-12" style={{ padding: '52px 80px' }}>
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="uppercase tracking-[0.18em] mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple
          }}
        >
          Eyebrow Text
        </div>
        <h2
          className="max-w-xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: colors.text,
            marginBottom: '20px'
          }}
        >
          Headline on left side
        </h2>
        <div
          className="h-px w-full max-w-md"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full h-96 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`
          }}
        >
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: colors.textMuted
            }}
          >
            Visual / Widget Area
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Template F: Headline + Stats
const TemplateF = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="flex flex-col h-full" style={{ padding: '52px 80px' }}>
      <div className="mb-12">
        <div
          className="uppercase tracking-[0.18em] mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple
          }}
        >
          Eyebrow Text
        </div>
        <h2
          className="max-w-3xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '68px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: colors.text,
            marginBottom: '20px'
          }}
        >
          Headline for stats section
        </h2>
        <div
          className="h-px w-full max-w-xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 max-w-6xl">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg p-10 flex flex-col justify-between"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`
            }}
          >
            <div>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em'
                }}
              >
                Label {i}
              </div>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: colors.text
                }}
              >
                ##
              </div>
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: 'rgba(26,26,26,0.7)',
                lineHeight: 1.4
              }}
            >
              Description text
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Template H: Closing (same as Statement but noted separately)
const TemplateH = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0 flex items-center justify-center" style={{ padding: '52px 120px' }}>
      <h2
        className="text-center max-w-5xl"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '64px',
          fontWeight: 700,
          lineHeight: 1.3,
          color: colors.text
        }}
      >
        Closing statement with maximum impact and breathing room
      </h2>
    </div>
  </div>
);

// Template P: From/To
const TemplateP = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="flex flex-col h-full" style={{ padding: '52px 80px' }}>
      <div className="mb-12">
        <div
          className="uppercase tracking-[0.18em]"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple
          }}
        >
          Eyebrow Text
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <div>
          <h3
            className="mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '40px',
              fontWeight: 700,
              color: colors.red
            }}
          >
            From
          </h3>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: colors.text
            }}
          >
            Description of the "before" state or problem. This column uses red to indicate the negative or starting point.
          </div>
        </div>
        <div>
          <h3
            className="mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '40px',
              fontWeight: 700,
              color: colors.teal
            }}
          >
            To
          </h3>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: colors.text
            }}
          >
            Description of the "after" state or solution. This column uses teal to indicate the positive or end point.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Template G: Full Visual
const TemplateG = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0" style={{ padding: '52px 80px' }}>
      <div
        className="w-full h-full rounded-lg flex items-center justify-center"
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`
        }}
      >
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: colors.textMuted
          }}
        >
          Full-Bleed Visual / Widget Area
        </div>
      </div>
    </div>
    <div
      className="absolute top-0 left-0 right-0"
      style={{
        padding: '52px 80px',
        background: `linear-gradient(to bottom, ${colors.background} 0%, transparent 100%)`,
        paddingBottom: '120px'
      }}
    >
      <h2
        className="max-w-4xl"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '68px',
          fontWeight: 700,
          lineHeight: 1.2,
          color: colors.text
        }}
      >
        Headline Overlay
      </h2>
    </div>
  </div>
);

const templates = [
  {
    name: 'Main Title',
    description: 'Large display title, eyebrow, subtitle, accent line — NO ghost number. Clean main title slide.',
    slides: 'Slide 1',
    component: <TemplateMainTitle />
  },
  {
    name: 'Template A — Chapter Intro',
    description: 'Large display title, eyebrow, subtitle, accent line, ghost number. Used for chapter dividers.',
    slides: 'Slides 2, 14, 22, 31',
    component: <TemplateA />
  },
  {
    name: 'Template B — Statement',
    description: 'Centered large quote or statement. Maximum impact through scale and whitespace.',
    slides: 'Slides 3, 5, 11, 16, 19, 21, 24, 28, 29, 30',
    component: <TemplateB />
  },
  {
    name: 'Template E — Headline + Visual',
    description: 'Headline left, visual/widget right. Two-column layout for charts, diagrams, simulations.',
    slides: 'Slides 4, 8, 9, 10, 18, 25',
    component: <TemplateE />
  },
  {
    name: 'Template F — Headline + Stats',
    description: 'Headline top, bento stat cards below. 3-column or 4-column grid depending on content.',
    slides: 'Slides 6, 7, 12, 13, 17, 20, 23, 27',
    component: <TemplateF />
  },
  {
    name: 'Template H — Closing',
    description: 'Full-bleed closing statement (similar to Statement but designated for conclusions).',
    slides: 'Slide 30 (main closing)',
    component: <TemplateH />
  },
  {
    name: 'Template P — From/To',
    description: 'Two-column before/after comparison. Red (from) vs Teal (to) color coding.',
    slides: 'Slides 15, 26',
    component: <TemplateP />
  },
  {
    name: 'Template G — Full Visual',
    description: 'Full-bleed visual with headline overlay. Visual takes entire slide, headline floats on top with gradient fade.',
    slides: 'Not currently used',
    component: <TemplateG />
  }
];

export default function TemplatePreview() {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  return (
    <div className="relative w-full h-screen">
      {templates[currentTemplate].component}

      {/* Template info card */}
      <div
        className="absolute top-8 left-8 px-6 py-4 rounded-lg max-w-xl"
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}
      >
        <div
          className="mb-1"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: colors.accentPurple,
            textTransform: 'uppercase',
            letterSpacing: '0.12em'
          }}
        >
          Template Preview
        </div>
        <div
          className="mb-2"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: colors.text
          }}
        >
          {templates[currentTemplate].name}
        </div>
        <div
          className="mb-2"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: colors.textMuted,
            lineHeight: 1.4
          }}
        >
          {templates[currentTemplate].description}
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: colors.textVeryMuted
          }}
        >
          {templates[currentTemplate].slides}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          onClick={() => setCurrentTemplate(prev => Math.max(0, prev - 1))}
          disabled={currentTemplate === 0}
          className="p-3 rounded-full transition-all disabled:opacity-30 hover:scale-110"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            color: colors.text
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          className="px-5 py-2 rounded-full"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            color: colors.text
          }}
        >
          {currentTemplate + 1} / {templates.length}
        </div>

        <button
          onClick={() => setCurrentTemplate(prev => Math.min(templates.length - 1, prev + 1))}
          disabled={currentTemplate === templates.length - 1}
          className="p-3 rounded-full transition-all disabled:opacity-30 hover:scale-110"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            color: colors.text
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
