import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  GridLines,
  ConcentricCircles,
  DiagonalLines,
  FourPartGrid,
  RandomArcs,
  DotGrid,
  BandedLines,
  ScribbleLines,
  TriangularGrid,
  WavyLines,
  DiagonalSquares,
  RadiatingLines,
  OverlappingCircles,
  DenseHorizontal,
  CrossHatchSquares,
  GradientLines
} from './components/sol-lewitt-backgrounds';
import BackgroundPreview from './components/background-preview';
import TemplatePreview from './components/template-preview';
import { VisualPlaceholder } from './components/visual-placeholder';
import { buildSlides } from './slides-data';

// Design system colors
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

// Slide templates
const MainTitle = ({ eyebrow, title, subtitle, background }: any) => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    {background}
    <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '52px 80px' }}>
      <div className="mb-8">
        {eyebrow && (
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
            {eyebrow}
          </div>
        )}
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
          {title}
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
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

const ChapterIntro = ({ eyebrow, title, subtitle, ghostNumber, background }: any) => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    {background}
    <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: '52px 80px' }}>
      <div className="mb-8">
        {eyebrow && (
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
            {eyebrow}
          </div>
        )}
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
          {title}
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
          {subtitle}
        </p>
      </div>

      {ghostNumber && (
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
          {ghostNumber}
        </div>
      )}
    </div>
  </div>
);

const HeadlineStats = ({ eyebrow, headline, stats }: any) => (
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
          {eyebrow}
        </div>
        <h2
          className="max-w-3xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '68px',
            fontWeight: 700,
            fontStyle: headline.italic ? 'italic' : 'normal',
            lineHeight: 1.2,
            color: colors.text,
            marginBottom: '20px'
          }}
        >
          {headline.text}
        </h2>
        <div
          className="h-px w-full max-w-xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>

      <div className="grid gap-6 flex-1 max-w-6xl" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
        {stats.map((stat: any, i: number) => (
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
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: stat.color || colors.text
                }}
              >
                {stat.value}
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
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HeadlineVisual = ({ eyebrow, headline, children }: any) => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="flex h-full gap-12" style={{ padding: '52px 80px' }}>
      <div className="flex-1 flex flex-col justify-center">
        {eyebrow ? (
        <div
          className="uppercase tracking-[0.18em] mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: colors.accentPurple
          }}
        >
          {eyebrow}
        </div>
        ) : null}
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
          {headline}
        </h2>
        <div
          className="h-px w-full max-w-md"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  </div>
);

const HeadlineVisualCentered = ({ eyebrow, headline, children }: any) => (
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
          {eyebrow}
        </div>
        <h2
          className="max-w-3xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: 1.2,
            color: colors.text,
            marginBottom: '20px'
          }}
        >
          {headline}
        </h2>
        <div
          className="h-px w-full max-w-xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>
      <div className="flex-1 flex items-center">
        {children}
      </div>
    </div>
  </div>
);

const Statement = ({ text }: any) => (
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
        {text}
      </h2>
    </div>
  </div>
);

const FromTo = ({ eyebrow, fromTitle, fromContent, toTitle, toContent }: any) => (
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
          {eyebrow}
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
            {fromTitle}
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
            {fromContent}
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
            {toTitle}
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
            {toContent}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FullVisual = ({ eyebrow, headline, children }: any) => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="absolute inset-0" style={{ padding: '52px 80px' }}>
      {children}
    </div>
    {(eyebrow || headline) && (
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          padding: '52px 80px',
          background: `linear-gradient(to bottom, ${colors.background} 0%, transparent 100%)`,
          paddingBottom: '120px'
        }}
      >
        {eyebrow && (
          <div
            className="uppercase tracking-[0.18em] mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: colors.accentPurple
            }}
          >
            {eyebrow}
          </div>
        )}
        {headline && (
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
            {headline}
          </h2>
        )}
      </div>
    )}
  </div>
);

const HeadlineFullWidth = ({ eyebrow, headline, children }: any) => (
  <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
    <div className="flex flex-col h-full" style={{ padding: '52px 80px' }}>
      <div className="mb-12">
        {eyebrow && (
          <div
            className="uppercase tracking-[0.18em] mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              color: colors.accentPurple
            }}
          >
            {eyebrow}
          </div>
        )}
        {headline && (
          <h2
            className="max-w-4xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: colors.text,
              marginBottom: '20px'
            }}
          >
            {headline}
          </h2>
        )}
        <div
          className="h-px w-full max-w-xl"
          style={{
            background: `linear-gradient(to right, ${colors.accentPurple} 0%, transparent 100%)`
          }}
        />
      </div>
      <div className="flex-1 flex items-center overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

// Visual widgets
const EfficiencyChart = () => (
  <div className="w-full h-full flex items-center justify-center p-12">
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-5 gap-8 items-end h-96">
        {[
          { year: '2018', headcount: 280, tpv: 85 },
          { year: '2019', headcount: 345, tpv: 100 },
          { year: '2020', headcount: 320, tpv: 120 },
          { year: '2021', headcount: 290, tpv: 145 },
          { year: '2022', headcount: 260, tpv: 165 }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center h-full justify-end">
            <div
              className="w-full rounded-t-lg"
              style={{
                height: `${(item.headcount / 345) * 100}%`,
                backgroundColor: i === 4 ? colors.teal : colors.accentPurple,
                opacity: i === 4 ? 1 : 0.6
              }}
            />
            <div
              className="mt-4 text-center"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: colors.textMuted
              }}
            >
              {item.year}
            </div>
            <div
              className="text-center"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
                fontWeight: 700,
                color: colors.text
              }}
            >
              {item.headcount}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-8 text-center"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 300,
          color: colors.textMuted
        }}
      >
        Design org headcount while TPV grew 94%
      </div>
    </div>
  </div>
);

const AsanaBacklog = () => (
  <div
    className="w-full rounded-lg p-8"
    style={{
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`
    }}
  >
    <div className="space-y-3">
      {[
        { name: 'Mobile checkout optimization', priority: 'High', size: 'L', type: 'Feature' },
        { name: 'Payment method accessibility', priority: 'High', size: 'M', type: 'A11y' },
        { name: 'BNPL provider integration', priority: 'Medium', size: 'XL', type: 'Integration' },
        { name: 'Cart abandonment flow', priority: 'Medium', size: 'M', type: 'Feature' },
        { name: 'Express checkout UI refresh', priority: 'Low', size: 'S', type: 'Polish' }
      ].map((task, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 rounded"
          style={{
            backgroundColor: colors.background,
            border: `1px solid ${colors.divider}`
          }}
        >
          <div className="flex-1">
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: colors.text
              }}
            >
              {task.name}
            </div>
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: task.priority === 'High' ? colors.red : task.priority === 'Medium' ? colors.accentPurple : colors.textMuted,
              color: colors.surface,
              opacity: 0.8
            }}
          >
            {task.priority}
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: colors.divider,
              color: colors.text
            }}
          >
            {task.size}
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: colors.divider,
              color: colors.text
            }}
          >
            {task.type}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MeetingEvolution = () => (
  <div className="w-full space-y-8">
    <div>
      <div
        className="mb-3"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          color: colors.red
        }}
      >
        Before (8+ hrs/week)
      </div>
      <div className="space-y-2">
        {[
          { name: 'Weekly Design Review', hours: 3, color: colors.red },
          { name: 'Sprint Planning', hours: 2.5, color: colors.red },
          { name: 'Design Critique', hours: 3, color: colors.red }
        ].map((meeting, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: colors.text
                }}
              >
                {meeting.name}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.textMuted
                }}
              >
                {meeting.hours}h
              </div>
            </div>
            <div
              className="h-8 rounded"
              style={{
                width: `${(meeting.hours / 8) * 100}%`,
                backgroundColor: meeting.color,
                opacity: 0.6
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <div>
      <div
        className="mb-3"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          color: colors.teal
        }}
      >
        After (~3 hrs/week)
      </div>
      <div className="space-y-2">
        {[
          { name: 'Design Standup', hours: 0.5, color: colors.teal },
          { name: 'Portfolio Review', hours: 1, color: colors.teal },
          { name: 'Focus Critique', hours: 1, color: colors.teal },
          { name: 'Async Review', hours: 0.5, color: colors.teal }
        ].map((meeting, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: colors.text
                }}
              >
                {meeting.name}
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: colors.textMuted
                }}
              >
                {meeting.hours}h
              </div>
            </div>
            <div
              className="h-6 rounded"
              style={{
                width: `${(meeting.hours / 8) * 100}%`,
                backgroundColor: meeting.color,
                opacity: 0.8
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CalendarComparison = () => (
  <div className="grid grid-cols-2 gap-8">
    <div>
      <div
        className="mb-4"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          color: colors.red
        }}
      >
        Before: 74% meetings
      </div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded"
            style={{
              backgroundColor: i < 30 ? colors.red : colors.divider,
              opacity: i < 30 ? 0.6 : 0.3
            }}
          />
        ))}
      </div>
    </div>
    <div>
      <div
        className="mb-4"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          color: colors.teal
        }}
      >
        After: 34% meetings, 66% focus
      </div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded"
            style={{
              backgroundColor: i < 14 ? colors.red : i < 40 ? colors.teal : colors.divider,
              opacity: 0.6
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ProofNumbers = () => (
  <div className="grid grid-cols-2 gap-8">
    {[
      { value: '6', label: 'months', description: 'From pilot to scale' },
      { value: '8', label: 'pilots', description: 'AI experiments run' },
      { value: '9/25', label: 'workstreams', description: 'Adopted AI tools' },
      { value: '75-84%', label: 'time saved', description: 'On key workflows', color: colors.teal }
    ].map((item, i) => (
      <div
        key={i}
        className="rounded-lg p-8"
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`
        }}
      >
        <div
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1,
            color: item.color || colors.text,
            marginBottom: '8px'
          }}
        >
          {item.value}
        </div>
        <div
          className="uppercase mb-2"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: colors.textMuted,
            letterSpacing: '0.12em'
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: colors.textMuted
          }}
        >
          {item.description}
        </div>
      </div>
    ))}
  </div>
);

const RoseDiagram = () => (
  <div className="grid grid-cols-3 gap-6">
    {[
      { title: 'Stem', subtitle: 'Research Pipeline', items: ['User interviews', 'Feedback forms', 'Support tickets', 'Analytics'] },
      { title: 'Rose', subtitle: 'AI Coach', items: ['Pattern detection', 'Sentiment analysis', 'Action extraction', 'Priority scoring'], highlight: true },
      { title: 'Output', subtitle: 'User Interface', items: ['Actionable insights', 'Trend reports', 'Recommendations', 'Impact tracking'] }
    ].map((column, i) => (
      <div
        key={i}
        className="rounded-lg p-8"
        style={{
          backgroundColor: colors.surface,
          border: `2px solid ${column.highlight ? colors.teal : colors.border}`
        }}
      >
        <div
          className="mb-2"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '32px',
            fontWeight: 700,
            color: column.highlight ? colors.teal : colors.text
          }}
        >
          {column.title}
        </div>
        <div
          className="mb-6"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: colors.textMuted
          }}
        >
          {column.subtitle}
        </div>
        <div className="space-y-2">
          {column.items.map((item, j) => (
            <div
              key={j}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: colors.text
              }}
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Speaker notes for each slide (34 slides)
const speakerNotes = [
  // Slide 1
  "Thank you all for having me. I'm Kim — a design operations leader at PayPal, where I've spent the last four years building how the design org operates. I currently support our agentic product team and run an AI pilot program intended to evolve the ways of working. Today I'll walk you through some of that work. I want this to feel like a conversation, so please ask questions as we go.",

  // Slide 2
  "Before I get into the work, I want to tell you how I think about what I do. Building a program, infrastructure, ways of working is only part of it, and it's the easy part. What is hard is changing human behavior and perception. Getting people to buy-in, use it, own it, and evolve it.",

  // Slide 3
  "I consider myself someone who can turn operational chaos into systems that scale. I told Figma Make to create an image that illustrated something that started in chaos and became orderly, and I didn't like any of it because it was static and the shapes were too uniform. What i like about this animation is that is is constantly moving in beautiful patterns. Teams are dynamic, they are shifting and evolving with the work; and the ebb and flow of business.",

  // Slide 4
  "The first body of work I want to share is the operational system I built at PayPal. This is the foundation — without it, none of the AI work that follows would have been possible.",

  // Slide 5
  "PayPal is one of the largest fintech companies in the world. Between 2022 and 2025, they increased their TPV significantly to $1.79 trillion in payment volume, across 7 brands and 25 products. While supporting this 27% growth, the team was getting leaner by 23% in that time-span. A familiar theme to many, we needed to do more with much less. We did not have any efficiencies. No shared system for how work got done. No intake. No system of record. No visibility. Branded Checkout, which is the team I started with when implementing these ways of working, that product alone generates about 50% of company revenue with a staff of ~75.",

  // Slide 6
  "I started by observing before I intervened. I shadowed designers in their meetings and took notes for them — I needed to understand how work actually flowed. Producing notes added immediate value and built trust before I proposed any changes. I listened for the language teams already used, and I identified what was already working and protected it. The goal was to add structure, not disrupt momentum.",

  // Slide 7
  "On Branded Checkout, there were as many as 4 product managers to every 1 designer. On some teams, 8 to 1. One designer fielding requests from 8 PMs — each with their own roadmap, their own deadlines, and their own Slack channel. Any PM could schedule a meeting, drop a Figma link, or Slack expecting immediate design support. No sanctioned way to say no, push back, or even see everything being asked of them. Constant context switching, back-to-back meetings, burnout invisible to leadership because there was no system to surface it.",

  // Slide 8
  "One of the biggest shifts I introduced was the design backlog — and it came with a single rule: if it's not in the backlog, it doesn't get design time. To get into the backlog, the work had to be defined. That single rule changed the relationship between design and product. I owned the gatekeeper role myself initially, absorbing the political friction so designers could focus on the work.",

  // Slide 9
  "The full Ways of Working system: shared portfolios, intake, backlogs, and rituals—one operating model teams could replicate as the org scaled.",

  // Slide 10
  "I built the operating rhythms around the team's existing behavior. I introduced meetings incrementally — one team at a time, starting with the teams most ready for structure. I updated Asana myself for the first weeks to demonstrate value before asking the team to own it. I empowered teams to adapt the system — and then the whole org mirrored the model.",

  // Slide 11
  "Designers got their time and autonomy back. Meeting time dropped significantly. Focus time went from 26% to 66% of the work week. Designers were empowered to decline undefined requests — they had a clear process to point to. Engagement scores improved meaningfully. Teams felt more in control of their work. The before/after here isn't just a number — it's a felt difference in what a designer's week looked and felt like.",

  // Slide 12
  "",

  // Slide 13
  "The system scaled — and became the operating standard for the entire org. Every design team at PayPal eventually mirrored the structure I built for the first team. And this Ways of Working system became the foundation that made the AI pilot program possible. You can't measure improvement without a baseline.",

  // Slide 14
  "The system scaled — and became the operating standard for the entire org. Every design team at PayPal eventually mirrored the structure I built for the first team. And this Ways of Working system became the foundation that made the AI pilot program possible. You can't measure improvement without a baseline.",

  // Slide 15
  "The second body of work is the AI pilot program I run today. This is only possible because the Ways of Working foundation is already in place. We have the structure to run something intentional — not just deploy tools.",

  // Slide 16
  "Across the tech industry, AI adoption has become a strategic imperative. Design teams already operate at capacity — if not over. AI usage is still wildly inconsistent. Some designers experiment heavily, while others never touch it. There is no guide on how to design with it, and no one has the time to stop what they are doing to figure out what works.",

  // Slide 17
  "I designed the program before anyone built anything. I created the test and measurement plan for every pilot — defining the problem, hypothesis, success criteria, and how we'd know if something was working before a single tool was built. We ran 8 pilots across the full PDLC. We prioritized impact, effort, and expected value — and we intentionally created space for less measurable longer-horizon bets like Replit prototyping.",

  // Slide 18
  "We diagnosed the friction before we prescribed the solution. We started with structured discovery — surveys and interviews across the Checkout design team. Two pain points rose to the top: PRDs that weren't written customer-back, and legal reviews that were manual, time-consuming, and a consistent source of launch delays. We weren't guessing. We were building solutions against things the team told us were actually hurting them.",

  // Slide 19
  "Every pilot was measured before it was built. I created the test and measurement plan for each one — defining the problem, hypothesis, success criteria, and how we'd know if something was working before a single tool was built. We ran eight pilots across the full PDLC and prioritized impact, effort, and expected value.",

  // Slide 20
  "PRDs at PayPal are written by product managers for engineers — technical, not customer-back. Designers couldn't tell if the problem was defined or if they were starting from scratch. I designed the test and brief template. A content designer built the agent. We ran it across specific workstreams. The agent turns a PRD into a clear design brief — surfacing what matters, flagging what's missing, and suggesting questions the team should be asking. It's live and running in specific workstreams today.",

  // Slide 21
  "Legal and compliance review at PayPal is complex. Every piece of consumer-facing content must be reviewed. For global launches that multiplies by region. I researched the problem by talking directly to content ops and the Jira manager — they had deep institutional knowledge. The root cause was simple: wrong templates triggering wrong lawyers. Tickets sitting ignored for days. The MCP agent identifies the correct template, fills it completely — no tired eyes, no missed checkboxes, no wrong routing. Error rate: zero. The MCP agent fixes the intake, not the review.",

  // Slide 22
  "Rapid exploration without losing momentum. Agentic ideation allows designers to test multiple directions quickly before committing to a single path.",

  // Slide 23
  "Vibe prototyping: test multiple directions quickly, learn what works, and ship faster — without losing momentum on the roadmap.",

  // Slide 24
  "Six months in. Eight pilots designed and tested. Nine of twenty-five workstreams adopted without stopping to ship. Time savings of 75 to 84 percent at the task level. This is what responsible AI transformation looks like inside a regulated fintech company.",

  // Slide 25
  "The last thing I want to show you is what I build on my own time. Not because anyone asked me to — because I saw problems worth solving. The same instinct I bring to my day job.",

  // Slide 26
  "Design leaders couldn't back up headcount requests with hard numbers the way engineering could. Engineering has had data-driven capacity planning for years — shared formulas, story points, velocity tracked over time. Design had different spreadsheets, different assumptions, and no shared sizing framework. Headcount decisions were made on gut feel. I built a tool to close that gap.",

  // Slide 27
  "I built the Capacity Planner around the mental model design leaders already use — scenario comparison, available weeks, roadmap mapping. The tool calculates available work weeks per designer, maps them against the roadmap, and lets leaders compare staffing scenarios side by side. Consistent math across the org for the first time. My manager's feedback: this will make it so all teams can size and calculate the same way — solving a pain point for the org at large.",

  // Slide 28
  "Rose came from a more human observation. Feedback at work is often ambiguous, politically loaded, or subtly biased — and the person receiving it has no one in their corner to help them decode it. Enterprise HR tools serve the company. Career coaching tools focus on resumes and job searching. No tool sits on the employee's side of feedback they've already received. That's the gap Rose fills.",

  // Slide 29
  "Rose is built on the Claude API and trained on a specific, curated knowledge base — bias frameworks, feedback science, psychological safety research. Every source is deliberate. Stem is Rose's research pipeline — it monitors curated sources, scores new articles, and requires human review before anything enters Rose's brain. Rose doesn't learn automatically. That's intentional. Quality is not something you automate away.",

  // Slide 30
  "How can I keep up with all the news in AI and hone in on what's most important? This question led to building the Daily Digest tool.",

  // Slide 31
  "The Daily Digest pulls from 16 curated RSS feeds, uses Claude to summarize and synthesize, then groups the top stories by topic. It's an AI-curated daily briefing — built so you can keep up with AI news without drowning in it.",

  // Slide 32
  "Visit my site for more examples and case studies. Here are five tools I've built on my own time — Capacity Planner, Rose, Stem, Aperi, and Daily Digest. Each one addresses a real problem I saw worth solving. You can find live demos and detailed case studies for each project on my website.",

  // Slide 33
  "My Why, I grew up, playing the cello, building computers with my dad, I studied Mathematics in college, and during lockdown I went back to grad school for a degree in Data visualization. I love technology and design, I love working with designers, and I hope to bring some of that magic and sense making to Toast.",

  // Slide 34
  "My Why. I want to close with something personal. I don't do this work because it's my job. I do it because I genuinely believe that the difference between a team that's thriving and a team that's drowning is often infrastructure — not talent, not effort, not intentions. Just the absence of systems that let people do their best work. That's what I build."
];

// Main slideshow component
export default function App() {
  const [previewMode, setPreviewMode] = useState<'templates' | 'backgrounds' | null>(null); // Start with presentation
  const [currentSlide, setCurrentSlide] = useState(0);
  const [speakerPanelOpen, setSpeakerPanelOpen] = useState(false);

  // If in template preview mode
  if (previewMode === 'templates') {
    return (
      <div className="relative w-full h-screen">
        <TemplatePreview />
        <button
          onClick={() => setPreviewMode(null)}
          className="absolute top-8 right-8 px-6 py-3 rounded-lg transition-all hover:scale-105"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            backgroundColor: colors.accentPurple,
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Exit Preview → Full Presentation
        </button>
      </div>
    );
  }

  // If in background preview mode
  if (previewMode === 'backgrounds') {
    return (
      <div className="relative w-full h-screen">
        <BackgroundPreview />
        <button
          onClick={() => setPreviewMode(null)}
          className="absolute top-8 right-8 px-6 py-3 rounded-lg transition-all hover:scale-105"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            backgroundColor: colors.accentPurple,
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Exit Preview → Full Presentation
        </button>
      </div>
    );
  }

  const slides = buildSlides({
    MainTitle,
    ChapterIntro,
    Statement,
    HeadlineVisual,
    HeadlineVisualCentered,
    HeadlineStats,
    FromTo,
    FullVisual,
    HeadlineFullWidth
  });


  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setSpeakerPanelOpen(prev => !prev);
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        setPreviewMode('backgrounds');
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setPreviewMode('templates');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen">
      {slides[currentSlide]}

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          disabled={currentSlide === 0}
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
          {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
          disabled={currentSlide === slides.length - 1}
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

      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-300"
        style={{
          width: `${((currentSlide + 1) / slides.length) * 100}%`,
          backgroundColor: colors.accentPurple
        }}
      />

      {/* Speaker notes panel */}
      <div
        id="sp"
        className={`script-panel ${speakerPanelOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: '40px',
          left: '50%',
          width: '800px',
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: '#1a1a1a',
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '24px 32px',
          zIndex: 90,
          transform: speakerPanelOpen ? 'translate(-50%, 0)' : 'translate(-50%, -120%)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
        }}
      >
        <div
          className="slabel"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: colors.accentPurple,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '12px'
          }}
        >
          Speaker Notes
        </div>
        <div
          id="st"
          className="stext"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: 1.6,
            color: '#f0ede6'
          }}
        >
          {speakerNotes[currentSlide]}
        </div>
      </div>
    </div>
  );
}
