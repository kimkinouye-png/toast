import { VisualPlaceholder } from './components/visual-placeholder';
import { EfficiencyChart } from './components/efficiency-chart';
import { ChaosToOrder } from './components/chaos-to-order';
import { AsanaBacklog } from './components/asana-backlog';
import { AsanaPwVBacklog } from './components/asana-pwv-backlog';
import { AsanaPortfolio } from './components/asana-portfolio';
import { AsanaAllPortfolios } from './components/asana-all-portfolios';
import { MeetingEvolution } from './components/meeting-evolution';
import { CalendarComparison } from './components/calendar-comparison';
import { PDLCFrictionMap } from './components/pdlc-friction-map';
import { PilotPrioritization } from './components/pilot-prioritization';
import { AIAdoptionModel } from './components/ai-adoption-model';
import { FigJamBoard } from './components/figjam-board';
import { RoseSystem } from './components/rose-system';
import { DailyDigestLanding } from './components/daily-digest-landing';
import { DailyDigestOutput } from './components/daily-digest-output';
import { MobileFrame } from './components/mobile-frame';
import { RoseMobileUI } from './components/rose-mobile-ui';
import { ContactCard } from './components/contact-card';
import { Quote } from './components/quote';
import { SoundWaves, GeometricEye, NotebookNotes, GeometricEar } from './components/observing-visuals';
import { User } from 'lucide-react';
import { DrowningDesigner } from './components/drowning-designer';
import listeningGif from '../imports/Observe_I_See_GIF_by_Cool_Cats.gif';
import workingTooMuchGif from '../imports/Working_Too_Much_GIF_by_Mino_Games.gif';
import panicGif from '../imports/Panic_Omg_GIF__1_.gif';
import prdDesignBriefImg from '../imports/Screenshot_2026-04-12_at_6.42.40 PM.png';
import legalAssistantImg from '../imports/Screenshot_2026-04-12_at_6.44.37 PM.png';
import agenticIdeationImg from '../imports/Screenshot_2026-04-12_at_6.43.15 PM.png';
import vibePrototypingImg from '../imports/Screenshot_2026-04-12_at_6.44.02 PM.png';
import capacityPlannerImg from '../imports/Screenshot_2026-04-13_at_8.20.11 AM.png';
import roseUIImg from '../imports/Screenshot_2026-04-13_at_8.29.04 AM.png';
import dailyDigestLandingImg from '../imports/Screenshot_2026-04-13_at_8.33.51 AM.png';
import dailyDigestOutputImg from '../imports/Screenshot_2026-04-13_at_8.33.36 AM.png';
import thingsBuiltImg from '../imports/Screenshot_2026-04-13_at_9.25.32 AM.png';
import portfolioOverviewImg from '../imports/image-1.png';
import waysOfWorkingOverviewImg from '../imports/ways-of-working-overview.png';
import { BacklogProcessFlow } from './components/backlog-process-flow';
import { PilotTestPlan } from './components/pilot-test-plan';

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

const ResultsSlide = () => (
  <div style={{ padding: '52px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', background: colors.background, fontFamily: 'DM Sans, sans-serif' }}>
    <div style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.accentPurple, marginBottom: '24px' }}>The results</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '56px', alignItems: 'start' }}>
      <div>
        <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: colors.text, lineHeight: 1.15, marginBottom: '20px' }}>
          The team didn't stop to transform. They transformed while shipping.
        </div>
        <div style={{ width: '40px', height: '2px', background: colors.accentPurple }}></div>
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: colors.accentPurple, marginBottom: '24px' }}>AI adoption by workstream</div>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
            <div style={{ fontSize: '15px', color: colors.text }}>Content Design</div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, color: colors.accentPurple }}>100%</div>
          </div>
          <div style={{ height: '8px', background: 'rgba(0,0,0,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '100%', background: colors.accentPurple, borderRadius: '4px' }}></div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
            <div style={{ fontSize: '15px', color: colors.text }}>UX Design</div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, color: colors.accentPurple }}>50%</div>
          </div>
          <div style={{ height: '8px', background: 'rgba(0,0,0,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '50%', background: colors.accentPurple, borderRadius: '4px' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const buildSlides = (components: any) => {
  const { MainTitle, ChapterIntro, Statement, HeadlineVisual, HeadlineVisualCentered, HeadlineStats, FromTo, FullVisual, HeadlineFullWidth } = components;

  return [
    // Slide 1: Title
    <MainTitle
      key="1"
      eyebrow="Portfolio Presentation"
      title="Kim Inouye"
      subtitle="Building operational systems that help design organizations thrive at scale"
    />,

    // Slide 2: Simon Sinek quote
    <Quote
      key="2"
      text="Creating something new is easy. Creating something that can last is the challenge."
      author="Simon Sinek"
    />,

    // Slide 3: What I do
    <FullVisual
      key="3"
      headline="I turn operational chaos into systems that scale."
    >
      <div className="flex items-center justify-center h-full">
        <ChaosToOrder />
      </div>
    </FullVisual>,

    // CHAPTER 1: WAYS OF WORKING

    // Slide 4: Chapter 1 Intro
    <ChapterIntro
      key="4"
      eyebrow="Case Study 01"
      title="Ways of Working"
      subtitle=""
      ghostNumber="01"
    />,

    // Slide 5: Setting the stage
    <HeadlineFullWidth
      key="5"
      eyebrow="PayPal — 2022 to 2025"
      headline="Fewer designers. More to design for."
    >
      <EfficiencyChart />
    </HeadlineFullWidth>,

    // Slide 6: My approach
    <HeadlineVisual
      key="6"
      eyebrow="My approach"
      headline="I started by observing before I intervened."
    >
      <img
        src={listeningGif}
        alt="Cool Cats listening"
        style={{
          maxWidth: '100%',
          maxHeight: '500px',
          borderRadius: '12px'
        }}
      />
    </HeadlineVisual>,

    // Slide 7: The human cost
    <FullVisual
      key="7"
      eyebrow="The human cost"
      headline="Designers were drowning. And no one could see it."
    >
      <div className="flex items-center justify-center h-full gap-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <User size={120} strokeWidth={1.5} style={{ color: '#d43f3e', opacity: 0.7 }} />
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 500, color: '#d43f3e', textTransform: 'uppercase', letterSpacing: '0.12em' }}>PM</div>
          </div>
        ))}
        <DrowningDesigner />
      </div>
    </FullVisual>,

    // Slide 8: The backlog as forcing function
    <HeadlineFullWidth
      key="9"
      eyebrow="The backlog as a forcing function"
      headline="If it's not in the backlog, it doesn't get design time."
    >
      <AsanaPwVBacklog />
    </HeadlineFullWidth>,

    // Slide 9: Ways of Working system overview
    <HeadlineFullWidth
      key="14b"
      eyebrow="The full system"
      headline="One operating model. Built to scale."
    >
      <img
        src={waysOfWorkingOverviewImg}
        alt="Ways of Working system overview"
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
      />
    </HeadlineFullWidth>,

    // Slide 10: New Process
    <HeadlineFullWidth
      key="11a"
      eyebrow="The new process"
      headline="The intake form was just the entry point."
    >
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BacklogProcessFlow />
      </div>
    </HeadlineFullWidth>,

    // Slide 11: Micro impact
    <HeadlineFullWidth
      key="11"
      eyebrow="Micro impact"
      headline="Designers got their time and autonomy back."
    >
      <MeetingEvolution />
    </HeadlineFullWidth>,

    // Slide 12: Quote - Laura Martinez
    <Quote
      key="12"
      text="We couldn't have gotten up and running in Asana without you. But just as important, you've guided us in how to use it to support the team planning processes you've set up for us."
      author="Laura Martinez, Sr Design Manager"
    />,

    // Slide 13: Quote - Content Designer
    <Quote
      key="13"
      text="I just wanted to send a BIG thank you for taking time out of your busy calendars to help the post-purchase team properly use and adopt Asana!"
      author="Content Designer"
    />,

    // Slide 14: Organizational impact
    <HeadlineFullWidth
      key="14"
      eyebrow="Organizational impact"
      headline="The system scaled across the entire org."
    >
      <AsanaAllPortfolios />
    </HeadlineFullWidth>,

    // CHAPTER 2: AI PILOTS

    // Slide 15: Chapter 2 Intro
    <ChapterIntro
      key="15"
      eyebrow="Case Study 02"
      title="AI Pilots"
      subtitle=""
      ghostNumber="02"
    />,

    // Slide 16: The gap
    <HeadlineVisual
      key="16"
      eyebrow="The gap"
      headline="Every tech company is racing to adopt AI."
    >
      <img src={panicGif} alt="Panic gif" style={{ maxWidth: '100%', maxHeight: '700px', borderRadius: '12px' }} />
    </HeadlineVisual>,

    // Slide 17: Program design
    <HeadlineFullWidth
      key="17"
      eyebrow="My Role"
      headline="I designed the program before anyone built anything."
    >
      <AIAdoptionModel />
    </HeadlineFullWidth>,

    // Slide 18: The diagnosis
    <HeadlineFullWidth
      key="19"
      eyebrow="The diagnosis"
      headline="Engagement survey results supported the workshop findings."
    >
      <PDLCFrictionMap />
    </HeadlineFullWidth>,

    // Slide 19: Test Plan & Results
    <HeadlineFullWidth
      key="18b"
      eyebrow="Test plan & results"
      headline="Every pilot was measured before it was built."
    >
      <PilotTestPlan />
    </HeadlineFullWidth>,

    // Slide 20: Case study 01 - PRD to Design Brief
    <HeadlineFullWidth
      key="21"
      eyebrow="Case study 01"
      headline="PRD to Design Brief"
    >
      <img src={prdDesignBriefImg} alt="PRD Design Synthesizer interface" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </HeadlineFullWidth>,

    // Slide 21: Case study 02 - Legal Review
    <HeadlineFullWidth
      key="22"
      eyebrow="Case study 02"
      headline="Streamlining legal review."
    >
      <img src={legalAssistantImg} alt="UK CDA Assistant interface" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </HeadlineFullWidth>,

    // Slide 22: Case study 03 - Agentic Ideation
    <HeadlineFullWidth
      key="24"
      eyebrow="Case study 03"
      headline="Rapid exploration without losing momentum."
    >
      <img src={agenticIdeationImg} alt="Agentic ideation interface" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </HeadlineFullWidth>,

    // Slide 23: Case study 04 - Vibe Prototyping
    <HeadlineFullWidth
      key="25"
      eyebrow="Case study 04"
      headline="Test, learn, and ship faster."
    >
      <img src={vibePrototypingImg} alt="Vibe prototyping interface" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </HeadlineFullWidth>,

    // Slide 24: The results (redesigned)
    <ResultsSlide key="26" />,

    // CHAPTER 3: TOOLS I BUILD

    // Slide 25: Chapter 3 Intro
    <ChapterIntro
      key="27"
      eyebrow="Case Study 03"
      title="What I Build Personally"
      subtitle=""
      ghostNumber="03"
    />,

    // Slide 26: Capacity Planner - Beginning
    <Statement
      key="28"
      text="Do we have enough designers?"
    />,

    // Slide 27: Capacity Planner - The tool
    <HeadlineVisual
      key="29"
      eyebrow="Capacity Planner — The tool"
      headline="Forecasting is easier with a smart calculator."
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '24px', fontWeight: 400, color: colors.text }}>
          <div className="mb-6" style={{ fontSize: '16px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Live Demo</div>
          <a href="https://capacity-planner.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <img
              src={capacityPlannerImg}
              alt="Capacity Planner application"
              style={{ maxWidth: '900px', maxHeight: '500px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </a>
        </div>
      </div>
    </HeadlineVisual>,

    // Slide 28: Rose - Beginning
    <Statement
      key="30"
      text="Feedback can sometimes be hard and confusing."
    />,

    // Slide 29: Rose - The interface
    <HeadlineVisual
      key="31"
      eyebrow="Rose — The product"
      headline="Making feedback less confusing and more actionable."
    >
      <div className="flex items-center justify-center h-full">
        <RoseMobileUI />
      </div>
    </HeadlineVisual>,

    // Slide 30: Daily Digest - The question
    <Statement
      key="32"
      text="How can I keep up with all of the news in AI and hone in on what's most important?"
    />,

    // Slide 31: Daily Digest - The tool
    <HeadlineFullWidth
      key="33"
      eyebrow="Daily Digest — The tool"
      headline=""
    >
      <div className="flex items-center justify-center gap-6 h-full">
        <DailyDigestLanding />
        <DailyDigestOutput />
      </div>
    </HeadlineFullWidth>,

    // CLOSING

    // Slide 32: Contact
    <HeadlineFullWidth
      key="34"
      eyebrow=""
      headline="Visit my site for more examples and case studies."
    >
      <ContactCard />
    </HeadlineFullWidth>,

    // Slide 33: My Why
    <Statement
      key="35"
      text="My Why"
    />,

    // Slide 34: Chaos → order (HeadlineVisual, same headline & animation as slide 3)
    <HeadlineVisual
      key="36"
      headline="I turn operational chaos into systems that scale."
    >
      <div className="flex items-center justify-center h-full">
        <ChaosToOrder />
      </div>
    </HeadlineVisual>
  ];
};


