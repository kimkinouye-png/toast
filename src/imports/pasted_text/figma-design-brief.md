# Figma Design Brief
## Kim Inouye — Toast Portfolio Presentation
### For use with Figma MCP

---

## Purpose

This is a 32-slide HTML presentation for Kim Inouye's panel interview at Toast for a Principal Design Operations Program Manager role. The presentation has been fully built in HTML/CSS with a dark theme. We want Figma to redesign the visual system — the current dark theme is one direction, but we are open to exploring a light theme or a hybrid. The design system is not locked.

This IS a redesign brief. We want Figma's recommendation on the best visual direction, then implementation upon approval.

---

## Presentation overview

**Three chapters:**
1. Ways of Working — how Kim built operational infrastructure at PayPal for a 300-person global design org
2. AI Pilots — how she designed and ran an AI transformation program
3. Tools I Built — two personal tools: a capacity planner and Rose (a feedback decoder)

**Audience:** Panel of five at Toast — Head of Design Ops (hiring manager), two Design Ops PMs, a Principal Product Designer, and a Sr. Director of R&D Operations.

**Format:** 60-minute portfolio presentation, screen-shared over video call (Zoom or Google Meet). The deck needs to perform well on a compressed, shared screen.

---

## Current design system

The deck currently uses a dark theme. This is the starting point — not a constraint.

### Colors (current)
| Token | Value | Usage |
|---|---|---|
| Background | `#0f0f0f` | Slide background |
| Surface | `#141414` | Card backgrounds, bento cells |
| Body text | `#f0ede6` | Primary text — warm off-white |
| Muted text | `rgba(240,237,230,0.5)` | Secondary text, captions |
| Very muted | `rgba(240,237,230,0.25)` | Axis labels, ghost text |
| Accent purple | `#7b7ce8` | Eyebrows, progress bar, accent lines |
| Purple light | `#9b9cf0` | Purple highlights, secondary accent |
| Teal | `#4ecdc4` | Positive states, "after" visuals, data |
| Red | `#E24B4A` | Negative states, "before" visuals |
| Divider | `rgba(255,255,255,0.06)` | Subtle separators |
| Border | `rgba(255,255,255,0.08–0.15)` | Card borders |

### Typography (current)
| Role | Font | Size | Weight |
|---|---|---|---|
| Display | Playfair Display | 72–140px | 700 |
| Headline | Playfair Display | 40–68px | 700 italic mix |
| Body large | DM Sans | 22–34px | 300 |
| Body | DM Sans | 16–20px | 300–400 |
| Eyebrow | DM Sans | 16px | 500, uppercase, 0.18em tracking |
| Caption/label | DM Sans | 12–14px | 300–500 |

### Layout (current)
- Slide padding: `52px top, 80px horizontal`
- Max content width: full bleed within padding
- Accent line: 1px horizontal gradient, purple to transparent, after every headline
- Ghost numbers: large Playfair Display numerals, very low opacity, bottom-right of chapter intro slides

---

## Slide templates in use

| Template | Description | Slides |
|---|---|---|
| A — Chapter intro | Full-bleed display type, ghost number, body-lg | 01 (title), chapter intros |
| B — Statement | Single large statement, centered | Closing |
| E — Headline + visual right | Headline left, visual widget right | Multiple |
| F — Headline + stats | Headline + bento stat cells | Multiple |
| H — Closing | Full-bleed closing statement | Slide 30 |
| P — From/To | Two-column before/after, left-aligned type | AI vision slides |

---

## Visual assets in the deck — please audit these

These are HTML widgets embedded as iframes. Figma should review each one for visual quality, consistency with the deck, and whether they need to be restyled.

1. **V01 — Efficiency story** — Column chart (design org headcount 345→260, TPV line overlay) + full-bleed "Zero." slide. Two-slide mini deck. Flag if the chart approach, color, or type needs work.

2. **Slide 09 — Asana backlog** — Simulated Asana interface showing BNPL backlog with tasks, priorities, sizes, project types. Flag if the simulation feels too literal or if it could be simplified.

3. **Slide 10 — Meeting evolution** — Stacked horizontal bar timeline showing before (8+ hrs, 3 overloaded meetings) vs after (~3 hrs, 5 focused meetings). This visual went through many iterations — it is the most uncertain one in the deck.

4. **Slide 11 — Calendar before/after** — Designer week: before (74% meetings) vs after (34% meetings, 66% focus). Includes a Zone of Genius quote. Flag if the quote placement or visual treatment needs refinement.

5. **Slide 12 — Branded Checkout portfolio** — Simulated Asana portfolio view with project cards, status badges, size indicators, project type labels.

6. **Slide 13 — Five portfolios** — Five Asana org portfolios (Consumer, Merchant, Platforms, Honey, Venmo) with varied portfolio and project counts.

7. **Slide 23 — Repeatable model** — Four-step framework: Identify friction → Design a test → Measure impact → Scale what works. Simple typographic layout.

8. **Slide 24 — Proof numbers** — 2×2 grid: 6 months, 8 pilots, 9 of 25 workstreams, 75–84% time savings. Large Playfair numbers, minimal labels.

9. **Rose/Stem diagram** — Three-column system diagram: Stem (research pipeline) → Rose (AI feedback coach) → User interface. Currently uses teal/purple panel borders on dark background.

---

## Design directions to explore

We want Figma's recommendation across three possible directions before committing:

### Option A — Refined dark (current direction)
Polish the existing dark theme. Tighten consistency, improve contrast, refine the widget styling. Keep the overall mood.

### Option B — Light mode
Full light theme. Warm off-white background, near-black text, same teal/purple accent system adjusted for light backgrounds. Better legibility over video. Feels more approachable, less developer-ish.

### Option C — Hybrid
Dark for chapter intros and statement slides. Light for content slides with data and widgets. Creates visual punctuation between sections.

**Recommendation first, then implement upon approval.** Do not implement any direction until Kim has reviewed and confirmed.

---

## Review areas

For whichever direction is recommended, audit against these:

### 1. Visual hierarchy
Does each slide have a clear primary focal point? Is the headline always the first thing the eye lands on? Flag any slides where hierarchy is ambiguous or competing elements pull attention.

### 2. Typography
Consistency of sizes, weights, spacing across all slides. Headline wrapping. Eyebrow treatment. Does Playfair Display / DM Sans pairing work in both light and dark contexts?

### 3. Color
Is teal / purple used consistently to encode meaning (teal = positive/after, purple = accent/structure)? Any slides where color feels arbitrary? Contrast check — especially muted text. Does the color system need to be adjusted for light mode?

### 4. Widget integration
Do the embedded widgets feel like they belong in the deck? Consistent padding, proportional heights, visual style aligned with surrounding slides. Flag any widgets that feel like foreign objects.

### 5. Spacing and breathing room
Are slides cluttered or well-paced? Whitespace around visual elements. Accent line placement and proportion. Does the layout breathe?

### 6. Chapter intro slides
Do they create a clear pause between sections? Does the ghost number treatment work? Is display type large enough to land as a moment?

### 7. Closing slide
Statement: *"The difference between thriving and drowning is often infrastructure. Not talent. Not effort. Not intentions. Just the absence of systems that let people do their best work."*
Does this land as a final thought? Needs space, scale, and visual weight appropriate to close a 60-minute presentation.

### 8. Screen performance
The deck will be shared over Zoom/Google Meet on a compressed screen. Identify any elements that may get washed out, lose contrast, or become hard to read in that context. Light mode may perform better here — flag if so.

---

## Deliverable format

1. **Direction recommendation** — Which of the three options (A, B, or C) Figma recommends and why. One clear recommendation with rationale.
2. **Visual mockup** — One or two representative slides showing the recommended direction before full implementation.
3. **Kim approves direction**
4. **Full implementation** — Apply the approved direction across all slides and widgets
5. **Slide-by-slide change log** — What changed on each slide, with before/after notes

---

## Interview context

This presentation needs to perform at Director-level. The hiring manager (Graciela) already knows Kim and her work. The panel includes a Sr. Director of R&D Operations (Julia Klein) who will be evaluating whether Kim can operate at that level.

The visual quality of the presentation is itself a signal — Kim is presenting herself as a systems thinker and operational leader. The deck should feel polished, intentional, and confident. It should not look like a developer built it, and it should not look over-designed or template-heavy.

**The presentation is approximately one week away. Time is a real constraint.**