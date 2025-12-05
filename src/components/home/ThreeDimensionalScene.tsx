import React, { useRef, useEffect } from "react";

export function ThreeDimensionalScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Star properties
    interface Star {
      x: number;
      y: number;
      z: number;
      prevZ: number;
    }
    
    // Create stars
    const stars: Star[] = [];
    const numStars = 400;
    const speed = 0.2;
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 2 - 1, // -1 to 1
        y: Math.random() * 2 - 1, // -1 to 1
        z: Math.random(),
        prevZ: 0
      });
    }
    
    // Animation
    let animationId: number;
    
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Background with trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Update and draw stars
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.prevZ = star.z;
        star.z -= speed * 0.01;
        
        // Reset star if it's too close
        if (star.z <= 0) {
          star.x = Math.random() * 2 - 1;
          star.y = Math.random() * 2 - 1;
          star.z = 1;
          star.prevZ = 1;
        }
        
        // Project 3D coordinates to 2D screen space
        const sx = star.x / star.z;
        const sy = star.y / star.z;
        
        // Previous position for line drawing
        const prevSx = star.x / star.prevZ;
        const prevSy = star.y / star.prevZ;
        
        // Calculate star size based on z-position
        const radius = Math.max(0.5, (1 - star.z) * 2);
        
        // Calculate star brightness based on z-position
        const opacity = (1 - star.z);
        
        // Draw star
        ctx.beginPath();
        ctx.arc(
          centerX + sx * centerX,
          centerY + sy * centerY,
          radius,
          0,
          Math.PI * 2
        );
        
        // Colorful stars with gradients
        const hue = (i % 60) + 30; // Golden hues
        ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${opacity})`;
        ctx.fill();
        
        // Draw trail
        if (star.prevZ > 0) {
          ctx.beginPath();
          ctx.moveTo(centerX + prevSx * centerX, centerY + prevSy * centerY);
          ctx.lineTo(centerX + sx * centerX, centerY + sy * centerY);
          ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${opacity * 0.5})`;
          ctx.stroke();
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full absolute inset-0 z-0"
    />
  );
}