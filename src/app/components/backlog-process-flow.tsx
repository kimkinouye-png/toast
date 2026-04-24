export const BacklogProcessFlow = () => (
  <svg width="100%" viewBox="0 0 680 240" role="img" style={{ display: 'block' }}>
    <title>Design backlog process flow</title>
    <desc>Five-stage flow from roadmaps to committed sprint plan</desc>
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>

    {/* Column headers */}
    <text x="8" y="18" textAnchor="start" fontFamily="sans-serif" fontSize="11" fill="#888">Roadmaps</text>
    <text x="118" y="18" textAnchor="start" fontFamily="sans-serif" fontSize="11" fill="#888">Consolidated</text>
    <text x="228" y="18" textAnchor="start" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1a1a1a">Design backlog</text>
    <text x="350" y="18" textAnchor="start" fontFamily="sans-serif" fontSize="11" fill="#888">Groomed backlog</text>
    <text x="478" y="18" textAnchor="start" fontFamily="sans-serif" fontSize="11" fill="#888">Committed sprint plan</text>

    {/* Col 1: Roadmaps */}
    <rect x="8" y="28" width="84" height="110" rx="4" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
    <rect x="16" y="36" width="32" height="22" rx="3" fill="rgba(0,0,0,0.1)"/>
    <rect x="52" y="36" width="32" height="22" rx="3" fill="rgba(0,0,0,0.1)"/>
    <rect x="16" y="64" width="32" height="22" rx="3" fill="rgba(0,0,0,0.1)"/>
    <rect x="52" y="64" width="32" height="22" rx="3" fill="rgba(0,0,0,0.1)"/>
    <text x="50" y="122" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#999">Over 300 items</text>

    {/* Arrow 1 */}
    <line x1="94" y1="83" x2="116" y2="83" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)"/>

    {/* Col 2: Consolidated */}
    <rect x="118" y="28" width="84" height="110" rx="4" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
    <rect x="130" y="48" width="60" height="48" rx="3" fill="rgba(0,0,0,0.1)"/>
    <text x="160" y="68" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">Prioritized</text>
    <text x="160" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">plan</text>

    {/* Arrow 2 */}
    <line x1="204" y1="83" x2="226" y2="83" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)"/>

    {/* Col 3: Design Backlog — emphasized to match headline */}
    <rect x="228" y="28" width="84" height="110" rx="4" fill="none" stroke="rgba(26,26,26,0.35)" strokeWidth="1.25"/>
    <rect x="236" y="38" width="68" height="32" rx="3" fill="rgba(0,0,0,0.1)"/>
    <text x="270" y="57" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">+ Adhoc</text>
    <rect x="236" y="78" width="68" height="32" rx="3" fill="rgba(0,0,0,0.1)"/>
    <text x="270" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">Prioritized</text>
    <text x="270" y="105" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">plan</text>

    {/* Arrow 3 */}
    <line x1="314" y1="83" x2="348" y2="83" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)"/>

    {/* Col 4: Groomed Backlog */}
    <rect x="350" y="28" width="100" height="110" rx="4" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/>
    <rect x="358" y="38" width="84" height="44" rx="3" fill="rgba(0,0,0,0.1)"/>
    <text x="400" y="63" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">Reprioritized</text>
    <rect x="358" y="90" width="84" height="28" rx="3" fill="rgba(0,0,0,0.07)"/>
    <text x="400" y="107" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">Deprioritized</text>

    {/* Arrow 4 */}
    <line x1="452" y1="83" x2="476" y2="83" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)"/>

    {/* Col 5: Committed Sprint Plan */}
    <rect x="478" y="28" width="140" height="110" rx="4" fill="none" stroke="#6b6ce0" strokeWidth="1"/>
    <text x="498" y="50" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#555">• Item 1</text>
    <text x="498" y="65" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#555">• Item 2</text>
    <text x="498" y="80" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#555">• Item 3</text>
    <rect x="486" y="92" width="124" height="28" rx="3" fill="rgba(0,0,0,0.07)"/>
    <text x="548" y="109" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#555">Deprioritized</text>

    {/* Phase bars */}
    <rect x="8" y="152" width="298" height="18" rx="4" fill="#2ebdb4" opacity="0.75"/>
    <text x="157" y="164" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="white">QUARTERLY PLANNING</text>

    <rect x="314" y="152" width="304" height="18" rx="4" fill="#f5c86a" opacity="0.85"/>
    <text x="466" y="164" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#5a4000">SPRINT GROOMING &amp; PLANNING</text>
  </svg>
);
