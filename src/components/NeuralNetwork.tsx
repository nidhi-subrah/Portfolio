import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
}

interface Connection {
  from: number;
  to: number;
  fadePhase: number;
  fadeSpeed: number;
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

    // Neural network configuration
    const config = {
      nodeCount: 25,
      maxConnections: 4,
      nodeRadius: { min: 1, max: 2.5 },
      connectionDistance: 150,
      pulseSpeed: 0.02,
      fadeSpeed: 0.015,
      nodeColor: 'rgba(59, 130, 246, 0.6)',
      connectionColor: 'rgba(147, 51, 234, 0.4)',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    };

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < config.nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (config.nodeRadius.max - config.nodeRadius.min) + config.nodeRadius.min,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: config.pulseSpeed + Math.random() * 0.01
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

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        // Update fade phase
        connection.fadePhase += connection.fadeSpeed;
        if (connection.fadePhase > Math.PI * 2) {
          connection.fadePhase = 0;
        }
        
        // Calculate fade opacity
        const fadeOpacity = 0.3 + 0.2 * Math.sin(connection.fadePhase);
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(147, 51, 234, ${fadeOpacity * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        // Draw glow effect for connections
        ctx.strokeStyle = `rgba(59, 130, 246, ${fadeOpacity * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        // Update pulse phase
        node.pulsePhase += node.pulseSpeed;
        if (node.pulsePhase > Math.PI * 2) {
          node.pulsePhase = 0;
        }
        
        // Calculate pulse opacity and radius
        const pulseOpacity = 0.4 + 0.3 * Math.sin(node.pulsePhase);
        const pulseRadius = node.radius + 0.5 * Math.sin(node.pulsePhase);
        
        // Draw node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${pulseOpacity * 0.2})`;
        ctx.fill();
        
        // Draw main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${pulseOpacity * 0.6})`;
        ctx.fill();
        
        // Draw inner glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${pulseOpacity * 0.4})`;
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