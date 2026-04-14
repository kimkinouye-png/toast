import { useState } from 'react';
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
} from './sol-lewitt-backgrounds';

const colors = {
  background: '#faf9f7',
  surface: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(26,26,26,0.6)',
  accentPurple: '#6b6ce0',
  border: 'rgba(0,0,0,0.12)',
  ghost: 'rgba(26,26,26,0.04)'
};

const backgroundOptions = [
  {
    name: 'Grid Lines',
    description: 'Random straight lines on grid (Wall Drawing #86)',
    component: <GridLines />
  },
  {
    name: 'Concentric Circles',
    description: 'Overlapping circle patterns (circle-based wall drawings)',
    component: <ConcentricCircles />
  },
  {
    name: 'Diagonal Lines',
    description: 'Crosshatch diagonal pattern (Wall Drawing #260)',
    component: <DiagonalLines />
  },
  {
    name: 'Four-Part Grid',
    description: 'Quadrant system with different line directions (Wall Drawing #797)',
    component: <FourPartGrid />
  },
  {
    name: 'Random Arcs',
    description: 'Scattered arc fragments (Wall Drawing #289)',
    component: <RandomArcs />
  },
  {
    name: 'Dot Grid',
    description: 'Simple geometric dot pattern — minimal and clean',
    component: <DotGrid />
  },
  {
    name: 'Banded Lines',
    description: 'Vertical and horizontal bands with dense parallel lines (Wall Drawing #340)',
    component: <BandedLines />
  },
  {
    name: 'Scribble Lines',
    description: 'Organic, hand-drawn quality scribbles (Wall Drawing #46)',
    component: <ScribbleLines />
  },
  {
    name: 'Triangular Grid',
    description: 'Tessellating triangular geometric pattern',
    component: <TriangularGrid />
  },
  {
    name: 'Wavy Lines',
    description: 'Parallel flowing wave forms (Wall Drawing #273)',
    component: <WavyLines />
  },
  {
    name: 'Diagonal Squares',
    description: 'Grid of squares with varying diagonal fills',
    component: <DiagonalSquares />
  },
  {
    name: 'Radiating Lines',
    description: 'Lines emanating from corner point (Wall Drawing #289)',
    component: <RadiatingLines />
  },
  {
    name: 'Overlapping Circles',
    description: 'Organic random circles creating depth (Wall Drawing #358)',
    component: <OverlappingCircles />
  },
  {
    name: 'Dense Horizontal',
    description: 'Tightly spaced horizontal lines — strong texture (Wall Drawing #260)',
    component: <DenseHorizontal />
  },
  {
    name: 'Cross-Hatch Squares',
    description: 'Squares filled with diagonal cross-hatching (Wall Drawing #122)',
    component: <CrossHatchSquares />
  },
  {
    name: 'Gradient Lines',
    description: 'Modern minimal grid with fading lines',
    component: <GradientLines />
  },
  {
    name: 'No Background',
    description: 'Plain background with no pattern',
    component: null
  }
];

export default function BackgroundPreview() {
  const [currentBg, setCurrentBg] = useState(0);

  return (
    <div className="relative w-full h-screen">
      {/* Background pattern */}
      <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
        {backgroundOptions[currentBg].component}

        {/* Sample title slide content */}
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
              Portfolio Presentation
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
              Kim Inouye
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
              Building operational systems that help design organizations thrive at scale
            </p>
          </div>

          {/* Ghost number */}
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

      {/* Background info card */}
      <div
        className="absolute top-8 left-8 px-6 py-4 rounded-lg max-w-md"
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
          Sol LeWitt Background Options
        </div>
        <div
          className="mb-1"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: colors.text
          }}
        >
          {backgroundOptions[currentBg].name}
        </div>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: colors.textMuted,
            lineHeight: 1.4
          }}
        >
          {backgroundOptions[currentBg].description}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          onClick={() => setCurrentBg(prev => Math.max(0, prev - 1))}
          disabled={currentBg === 0}
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
          {currentBg + 1} / {backgroundOptions.length}
        </div>

        <button
          onClick={() => setCurrentBg(prev => Math.min(backgroundOptions.length - 1, prev + 1))}
          disabled={currentBg === backgroundOptions.length - 1}
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
