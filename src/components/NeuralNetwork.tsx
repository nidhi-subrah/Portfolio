import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
  flowPhase: number;
  flowSpeed: number;
  type: 'primary' | 'secondary' | 'accent';
}

interface Connection {
  from: number;
  to: number;
  fadePhase: number;
  fadeSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced neural network configuration
    const config = {
      nodeCount: 35,
      maxConnections: 3,
      nodeRadius: { min: 1.5, max: 3.5 },
      connectionDistance: 180,
      pulseSpeed: 0.015,
      fadeSpeed: 0.012,
      flowSpeed: 0.008,
      nodeColor: 'rgba(147, 51, 234, 0.8)',
      connectionColor: 'rgba(59, 130, 246, 0.6)',
      glowColor: 'rgba(147, 51, 234, 0.4)',
      accentColor: 'rgba(34, 211, 238, 0.5)'
    };

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < config.nodeCount; i++) {
      const nodeType = i < 15 ? 'primary' : i < 25 ? 'secondary' : 'accent';
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (config.nodeRadius.max - config.nodeRadius.min) + config.nodeRadius.min,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: config.pulseSpeed + Math.random() * 0.01,
        flowPhase: Math.random() * Math.PI * 2,
        flowSpeed: config.flowSpeed + Math.random() * 0.005,
        type: nodeType
      });
    }

    // Create connections between nearby nodes
    const connections: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nodeConnections: number[] = [];
      
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + 
          Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        
        if (distance < config.connectionDistance && nodeConnections.length < config.maxConnections) {
          nodeConnections.push(j);
          connections.push({
            from: i,
            to: j,
            fadePhase: Math.random() * Math.PI * 2,
            fadeSpeed: config.fadeSpeed + Math.random() * 0.01
          });
        }
      }
      
      nodes[i].connections = nodeConnections;
    }

    // Initialize floating particles
    const particles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 50,
        size: 1 + Math.random() * 2
      });
    }

    // Enhanced animation loop
    const animate = () => {
      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections with flowing effect
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        // Update fade phase
        connection.fadePhase += connection.fadeSpeed;
        if (connection.fadePhase > Math.PI * 2) {
          connection.fadePhase = 0;
        }
        
        // Calculate fade opacity with smoother curve
        const fadeOpacity = 0.4 + 0.3 * Math.sin(connection.fadePhase);
        
        // Create gradient for connection
        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        gradient.addColorStop(0, `rgba(147, 51, 234, ${fadeOpacity * 0.7})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${fadeOpacity * 0.8})`);
        gradient.addColorStop(1, `rgba(34, 211, 238, ${fadeOpacity * 0.6})`);
        
        // Draw main connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        
        // Draw outer glow for connections
        ctx.strokeStyle = `rgba(147, 51, 234, ${fadeOpacity * 0.15})`;
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Draw inner highlight
        ctx.strokeStyle = `rgba(255, 255, 255, ${fadeOpacity * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Update and draw nodes with enhanced effects
      nodes.forEach(node => {
        // Update phases
        node.pulsePhase += node.pulseSpeed;
        node.flowPhase += node.flowSpeed;
        if (node.pulsePhase > Math.PI * 2) node.pulsePhase = 0;
        if (node.flowPhase > Math.PI * 2) node.flowPhase = 0;
        
        // Calculate pulse and flow effects
        const pulseOpacity = 0.5 + 0.4 * Math.sin(node.pulsePhase);
        const pulseRadius = node.radius + 0.8 * Math.sin(node.pulsePhase);
        const flowOffset = 2 * Math.sin(node.flowPhase);
        
        // Get node colors based on type
        let nodeColor, glowColor, accentColor;
        switch (node.type) {
          case 'primary':
            nodeColor = `rgba(147, 51, 234, ${pulseOpacity * 0.9})`;
            glowColor = `rgba(147, 51, 234, ${pulseOpacity * 0.3})`;
            accentColor = `rgba(59, 130, 246, ${pulseOpacity * 0.6})`;
            break;
          case 'secondary':
            nodeColor = `rgba(59, 130, 246, ${pulseOpacity * 0.8})`;
            glowColor = `rgba(59, 130, 246, ${pulseOpacity * 0.25})`;
            accentColor = `rgba(147, 51, 234, ${pulseOpacity * 0.5})`;
            break;
          case 'accent':
            nodeColor = `rgba(34, 211, 238, ${pulseOpacity * 0.7})`;
            glowColor = `rgba(34, 211, 238, ${pulseOpacity * 0.2})`;
            accentColor = `rgba(147, 51, 234, ${pulseOpacity * 0.4})`;
            break;
        }
        
        // Draw outer glow (largest)
        ctx.beginPath();
        ctx.arc(node.x + flowOffset, node.y + flowOffset, pulseRadius + 6, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.fill();
        
        // Draw middle glow
        ctx.beginPath();
        ctx.arc(node.x + flowOffset, node.y + flowOffset, pulseRadius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.1})`;
        ctx.fill();
        
        // Draw main node
        ctx.beginPath();
        ctx.arc(node.x + flowOffset, node.y + flowOffset, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
        
        // Draw inner accent
        ctx.beginPath();
        ctx.arc(node.x + flowOffset, node.y + flowOffset, pulseRadius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
        
        // Draw core highlight
        ctx.beginPath();
        ctx.arc(node.x + flowOffset, node.y + flowOffset, pulseRadius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.3})`;
        ctx.fill();
      });

      // Update and draw floating particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Reset particle when it dies
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = 100 + Math.random() * 50;
        }
        
        // Calculate particle opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const particleOpacity = 0.3 * (1 - lifeRatio);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particleOpacity})`;
        ctx.fill();
        
        // Draw particle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particleOpacity * 0.3})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default NeuralNetwork; 