export const DesignRhythmCircle = () => (
  <svg viewBox="0 0 800 640" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}>
    <circle cx="400" cy="320" r="200" fill="none" stroke="#999" strokeWidth="2.5"/>

    {/* Worksessions - top */}
    <circle cx="400" cy="120" r="9" fill="#4a9eed"/>
    <text x="400" y="90" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="middle">Worksessions</text>
    <text x="400" y="107" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="middle">Design/Research</text>

    {/* Kick Off 1 - upper left */}
    <circle cx="227" cy="220" r="9" fill="#4a9eed"/>
    <text x="206" y="200" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="end">Kick Off</text>
    <text x="206" y="217" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="end">Briefing/ ask 1</text>

    {/* Kick Off 2 - upper right */}
    <circle cx="573" cy="220" r="9" fill="#2ebdb4"/>
    <text x="594" y="208" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="start">Kick Off</text>
    <text x="594" y="225" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="start">Briefing/ ask 2</text>

    {/* Design Reviews - right */}
    <circle cx="588" cy="388" r="9" fill="#4a9eed"/>
    <text x="608" y="376" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="start">Design Reviews</text>
    <text x="608" y="393" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="start">Reviewers: what feedback is needed?</text>
    <text x="608" y="409" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="start">Presenters: what do i need to share?</text>

    {/* Adhoc - lower right */}
    <circle cx="500" cy="493" r="9" fill="#d43f3e"/>
    <text x="520" y="510" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="start">Adhoc</text>
    <text x="520" y="527" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="start">Briefing/ ask 3</text>

    {/* Hand Offs - lower left */}
    <circle cx="227" cy="420" r="9" fill="#1a1a1a"/>
    <text x="206" y="448" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1a1a1a" textAnchor="end">Hand Offs</text>
    <text x="206" y="465" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="end">Multiple lengthy meetings</text>
    <text x="206" y="481" fontFamily="sans-serif" fontSize="12" fill="#666" textAnchor="end">Work not planned for eng pick up until 6mo</text>
  </svg>
);
