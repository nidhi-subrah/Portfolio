import { useEffect, useState } from 'react';

export const StartupAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => setStage(4), 3500);
    const timer5 = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => setIsVisible(false), 4000);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  if (!isVisible) {
    // Remove any overlay or pointer-events block
    if (typeof document !== 'undefined') {
      const root = document.getElementById('root');
      if (root) root.style.pointerEvents = 'auto';
    }
    return null;
  }

  // Block pointer events only while visible
  if (typeof document !== 'undefined') {
    const root = document.getElementById('root');
    if (root) root.style.pointerEvents = isVisible ? 'none' : 'auto';
  }
  return (
    <div className={`fixed inset-0 z-50 bg-background transition-all duration-3000 ease-out ${
      isTransitioning ? 'opacity-0 scale-101' : 'opacity-100 scale-100'
    }`}>
      {/* Digital grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 183, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 183, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'slide-grid 3s ease-out forwards'
        }}></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 px-8">
          {/* Matrix-like code rain effect */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-green-400 text-xs font-mono animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              >
                {Math.random().toString(36).substring(2, 8)}
              </div>
            ))}
          </div>

          {/* Main startup sequence */}
          <div className="relative z-10 space-y-6">
            <div className={`text-lg font-mono text-primary transition-all duration-700 ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Initializing Neural Network...
            </div>
            
            <div className={`text-lg font-mono text-accent transition-all duration-700 ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Loading Portfolio Matrix...
            </div>
            
            <div className={`text-lg font-mono text-muted-foreground transition-all duration-700 ${
              stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Welcome to the Digital Realm
            </div>

            {/* Enhanced logo/text with holographic effect */}
            <div className={`text-3xl font-bold mt-12 transition-all duration-500 ${
              stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <span className="gradient-text relative" style={{ position: 'relative', display: 'inline-block' }}>
                ◉ SYSTEM READY ◉
                <div className="absolute inset-0 animate-ping opacity-25">◉ SYSTEM READY ◉</div>
              </span>
            </div>

            {/* Holographic scanning line */}
            {stage >= 3 && (
              <div className="relative mx-auto w-64 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-60"></div>
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-2000 ease-out"
                  style={{ width: `${Math.min(100, stage * 33)}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Final Transition Effect - Ultra Smooth */}
      {isTransitioning && (
        <div className="absolute inset-0 z-50">
          {/* Gradual blackout overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-black opacity-0 animate-[fadeIn_2s_ease-in-out_forwards]"></div>
          
          {/* Professional particle fade */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full animate-[fadeOut_3s_ease-out_forwards]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Smooth tech grid fade */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,183,255,0.05)_25px,rgba(0,183,255,0.05)_26px,transparent_27px),linear-gradient(transparent_24px,rgba(0,183,255,0.05)_25px,rgba(0,183,255,0.05)_26px,transparent_27px)] bg-[size:50px_50px] animate-[fadeOut_4s_ease-out_forwards]"></div>
          </div>
        </div>
      )}
    </div>
  );
};