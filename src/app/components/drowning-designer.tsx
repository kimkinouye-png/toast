import { User } from 'lucide-react';

const colors = {
  accentPurple: '#6b6ce0',
  teal: '#2ebdb4',
  background: '#faf9f7'
};

export const DrowningDesigner = () => {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <style>{`
        @keyframes sinking {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(40px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes bubble-rise-1 {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translateY(-140px) translateX(5px) scale(0.4); opacity: 0; }
        }
        @keyframes bubble-rise-2 {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-160px) translateX(-8px) scale(0.3); opacity: 0; }
        }
        @keyframes bubble-rise-3 {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(-150px) translateX(12px) scale(0.35); opacity: 0; }
        }
        @keyframes bubble-rise-4 {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-145px) translateX(-5px) scale(0.4); opacity: 0; }
        }
        .designer-sinking { animation: sinking 4s ease-in-out infinite; }
      `}</style>

      <div className="designer-sinking" style={{ position: 'relative' }}>
        <User size={120} strokeWidth={1.5} style={{ color: colors.accentPurple }} />
        
        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', pointerEvents: 'none' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${40 + i * 10}px`,
              width: `${6 + i * 1.5}px`,
              height: `${6 + i * 1.5}px`,
              borderRadius: '50%',
              border: `2px solid ${colors.teal}`,
              backgroundColor: 'rgba(46, 189, 180, 0.1)',
              animation: `bubble-rise-${i} ${2.5 + i * 0.4}s ease-in infinite`,
              animationDelay: `${i * 0.5}s`
            }} />
          ))}
        </div>
      </div>

      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 500, color: colors.accentPurple, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
        Designer
      </div>
    </div>
  );
};
