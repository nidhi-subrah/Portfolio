import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // depth layer
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
  pulsePhase: number;
  connections: Connection[];
  twinklePhase: number;
  lastTwinkle: number;
}

interface Connection {
  targetId: number;
  opacity: number;
  createdAt: number;
  duration: number;
  tracerProgress: number;
  hasTracer: boolean;
}

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const heroHeightRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const heroHeight = Math.min(window.innerHeight, 800);
      heroHeightRef.current = heroHeight;
      
      // Higher density in hero area, lower density below
      const heroParticleCount = Math.min(120, Math.floor((canvas.width * heroHeight) / 12000));
      const belowHeroParticleCount = Math.min(60, Math.floor((canvas.width * (canvas.height - heroHeight)) / 20000));
      
      // Create hero particles
      for (let i = 0; i < heroParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * heroHeight,
          z: Math.random(), // 0-1 depth
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.8 + 0.4,
          baseOpacity: Math.random() * 0.8 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          twinklePhase: Math.random() * Math.PI * 2,
          lastTwinkle: 0
        });
      }
      
      // Create below-hero particles
      for (let i = 0; i < belowHeroParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: heroHeight + Math.random() * (canvas.height - heroHeight),
          z: Math.random(),
          size: Math.random() * 2 + 0.8,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.6 + 0.3,
          baseOpacity: Math.random() * 0.6 + 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          twinklePhase: Math.random() * Math.PI * 2,
          lastTwinkle: 0
        });
      }
      
      return particles;
    };

    const drawParticle = (particle: Particle, parallaxOffset: { x: number; y: number }) => {
      const currentTime = Date.now();
      ctx.save();
      
      // Apply parallax based on depth
      const parallaxX = particle.x + parallaxOffset.x * (1 - particle.z) * 0.5;
      const parallaxY = particle.y + parallaxOffset.y * (1 - particle.z) * 0.5;
      
      // Breathing effect - soft pulse
      const breathingScale = 1 + Math.sin(currentTime * 0.002 + particle.pulsePhase) * 0.15;
      
      // Twinkle effect - occasional sparkle
      let twinkleMultiplier = 1;
      const timeSinceLastTwinkle = currentTime - particle.lastTwinkle;
      if (timeSinceLastTwinkle > 8000 && Math.random() < 0.0003) { // Random twinkle every ~8 seconds
        particle.lastTwinkle = currentTime;
      }
      
      if (timeSinceLastTwinkle < 800) { // Twinkle duration
        const twinkleProgress = timeSinceLastTwinkle / 800;
        twinkleMultiplier = 1 + Math.sin(twinkleProgress * Math.PI * 3) * 0.8;
      }
      
      const currentOpacity = particle.opacity * breathingScale * twinkleMultiplier;
      
      ctx.globalAlpha = currentOpacity;
      
      // Depth-based alpha and size adjustment
      const depthAlpha = 0.4 + particle.z * 0.6;
      ctx.globalAlpha *= depthAlpha;
      
      const effectiveSize = particle.size * (0.7 + particle.z * 0.3) * twinkleMultiplier;
      
      // Create enhanced glowing effect
      const gradient = ctx.createRadialGradient(
        parallaxX, parallaxY, 0,
        parallaxX, parallaxY, effectiveSize * 4
      );
      gradient.addColorStop(0, 'hsl(197, 100%, 60%)');
      gradient.addColorStop(0.3, 'hsl(197, 100%, 50%, 0.6)');
      gradient.addColorStop(0.7, 'hsl(197, 100%, 40%, 0.3)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(parallaxX, parallaxY, effectiveSize * 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw core particle with enhanced brightness
      const coreIntensity = 55 + breathingScale * 25 + (twinkleMultiplier - 1) * 30;
      ctx.fillStyle = `hsl(197, 100%, ${Math.min(85, coreIntensity)}%)`;
      ctx.beginPath();
      ctx.arc(parallaxX, parallaxY, effectiveSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const updateConnections = () => {
      const currentTime = Date.now();
      const maxDistance = 130;
      const connectionProbability = 0.003; // Lower probability for more selective connections
      
      particlesRef.current.forEach((particle, i) => {
        // Update existing connections
        particle.connections = particle.connections.filter(connection => {
          const elapsed = currentTime - connection.createdAt;
          const progress = elapsed / connection.duration;
          
          if (progress >= 1) {
            return false; // Remove expired connection
          }
          
          // Update connection opacity with easing
          if (progress < 0.3) {
            // Ease in
            connection.opacity = (progress / 0.3) * 0.4;
          } else if (progress > 0.7) {
            // Ease out
            connection.opacity = ((1 - progress) / 0.3) * 0.4;
          } else {
            // Hold
            connection.opacity = 0.4;
          }
          
          // Update tracer
          if (connection.hasTracer) {
            connection.tracerProgress = progress;
          }
          
          return true;
        });
        
        // Create new connections
        if (Math.random() < connectionProbability && particle.connections.length < 3) {
          particlesRef.current.forEach((otherParticle, j) => {
            if (i !== j && !particle.connections.find(c => c.targetId === j)) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < maxDistance && Math.random() < 0.3) {
                particle.connections.push({
                  targetId: j,
                  opacity: 0,
                  createdAt: currentTime,
                  duration: 450 + Math.random() * 250, // 450-700ms
                  tracerProgress: 0,
                  hasTracer: Math.random() < 0.15 // 15% chance for tracer
                });
              }
            }
          });
        }
      });
    };

    const drawConnections = (parallaxOffset: { x: number; y: number }) => {
      particlesRef.current.forEach((particle, i) => {
        particle.connections.forEach(connection => {
          const targetParticle = particlesRef.current[connection.targetId];
          if (!targetParticle) return;
          
          // Apply parallax
          const startX = particle.x + parallaxOffset.x * (1 - particle.z) * 0.5;
          const startY = particle.y + parallaxOffset.y * (1 - particle.z) * 0.5;
          const endX = targetParticle.x + parallaxOffset.x * (1 - targetParticle.z) * 0.5;
          const endY = targetParticle.y + parallaxOffset.y * (1 - targetParticle.z) * 0.5;
          
          ctx.save();
          ctx.globalAlpha = connection.opacity;
          ctx.strokeStyle = 'hsl(197, 100%, 50%)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          
          // Draw tracer if present
          if (connection.hasTracer && connection.tracerProgress > 0) {
            const tracerX = startX + (endX - startX) * connection.tracerProgress;
            const tracerY = startY + (endY - startY) * connection.tracerProgress;
            
            ctx.globalAlpha = connection.opacity * 0.8;
            const gradient = ctx.createRadialGradient(tracerX, tracerY, 0, tracerX, tracerY, 8);
            gradient.addColorStop(0, 'hsl(197, 100%, 70%)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(tracerX, tracerY, 8, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.restore();
        });
      });
    };

    const updateParticles = () => {
      const currentTime = Date.now();
      
      particlesRef.current.forEach(particle => {
        // Enhanced movement with slight variation
        const speedMultiplier = particle.y < heroHeightRef.current ? 1.2 : 0.8;
        particle.x += particle.speedX * speedMultiplier;
        particle.y += particle.speedY * speedMultiplier;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Breathing opacity animation
        const breathingFactor = Math.sin(currentTime * 0.002 + particle.pulsePhase) * 0.1;
        particle.opacity = Math.max(0.1, Math.min(0.9, particle.baseOpacity + breathingFactor));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate mouse parallax (capped at 8px)
      const parallaxOffset = {
        x: Math.max(-8, Math.min(8, (mouseRef.current.x - canvas.width / 2) * 0.02)),
        y: Math.max(-8, Math.min(8, (mouseRef.current.y - canvas.height / 2) * 0.02))
      };
      
      updateParticles();
      updateConnections();
      drawConnections(parallaxOffset);
      
      particlesRef.current.forEach(particle => drawParticle(particle, parallaxOffset));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-50"
      style={{ pointerEvents: 'none' }}
    />
  );
};