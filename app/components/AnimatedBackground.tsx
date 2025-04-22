'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      glowColor: string;
      isPink: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.isPink = Math.random() > 0.5;
        this.color = this.isPink ? '#BE185D' : '#1E40AF'; // Deep pink or deep blue
        this.glowColor = this.isPink ? '#EC4899' : '#3B82F6'; // Bright pink or bright blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        // Outer glow
        const outerGradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 4
        );
        outerGradient.addColorStop(0, this.isPink 
          ? 'rgba(236, 72, 153, 0.4)' 
          : 'rgba(59, 130, 246, 0.4)'
        );
        outerGradient.addColorStop(1, this.isPink 
          ? 'rgba(236, 72, 153, 0)' 
          : 'rgba(59, 130, 246, 0)'
        );

        ctx.fillStyle = outerGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Middle glow
        const middleGradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        middleGradient.addColorStop(0, this.isPink 
          ? 'rgba(236, 72, 153, 0.6)' 
          : 'rgba(59, 130, 246, 0.6)'
        );
        middleGradient.addColorStop(1, this.isPink 
          ? 'rgba(236, 72, 153, 0)' 
          : 'rgba(59, 130, 246, 0)'
        );

        ctx.fillStyle = middleGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        const innerGradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        innerGradient.addColorStop(0, this.glowColor);
        innerGradient.addColorStop(1, this.isPink 
          ? 'rgba(236, 72, 153, 0)' 
          : 'rgba(59, 130, 246, 0)'
        );

        ctx.fillStyle = innerGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - (distance / 150);
            const isSameColor = particles[i].isPink === particles[j].isPink;
            ctx.strokeStyle = isSameColor
              ? particles[i].isPink
                ? `rgba(190, 24, 93, ${opacity * 0.3})`
                : `rgba(30, 64, 175, ${opacity * 0.3})`
              : `rgba(139, 92, 246, ${opacity * 0.3})`; // Purple for mixed connections
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />
    </div>
  );
} 