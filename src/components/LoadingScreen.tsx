'use client';

import { useEffect, useState, useRef } from 'react';

const CODE_CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';

interface CodeColumn {
  chars: string[];
  y: number;
  speed: number;
  x: number;
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const columnsRef = useRef<CodeColumn[]>([]);

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

    // Initialize columns
    const fontSize = 14;
    const columnWidth = fontSize * 0.6;
    const columnCount = Math.floor(canvas.width / columnWidth);
    
    columnsRef.current = Array.from({ length: columnCount }, (_, i) => ({
      chars: Array.from({ length: Math.floor(Math.random() * 20) + 10 }, () => 
        CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
      ),
      y: Math.random() * -canvas.height,
      speed: Math.random() * 2 + 1,
      x: i * columnWidth,
    }));

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear with slight fade for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      columnsRef.current.forEach((column) => {
        // Update position
        column.y += column.speed;
        
        // Reset if off screen
        if (column.y > canvas.height) {
          column.y = -Math.random() * canvas.height;
          // Randomly change characters
          column.chars = Array.from({ length: Math.floor(Math.random() * 20) + 10 }, () => 
            CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
          );
        }

        // Draw characters
        column.chars.forEach((char, index) => {
          const y = column.y + index * fontSize;
          if (y > 0 && y < canvas.height) {
            // Gradient effect - brighter at top
            const brightness = 1 - (index / column.chars.length) * 0.7;
            const alpha = Math.max(0.1, brightness);
            
            // Use cyan for first few chars, then fade to green
            const colorValue = index < 3 ? 0.8 : 0.3;
            ctx.fillStyle = `rgba(0, ${255 * colorValue}, ${255 * brightness}, ${alpha})`;
            ctx.fillText(char, column.x, y);
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    let hasTriggered = false;
    let progressInterval: NodeJS.Timeout;

    // Simulate progress
    const updateProgress = () => {
      if (!isMounted || hasTriggered) return;
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = prev < 50 ? 2 : prev < 90 ? 1 : 0.5;
        return Math.min(100, prev + increment);
      });
    };

    progressInterval = setInterval(updateProgress, 50);

    function handlePageLoad() {
      if (!isMounted || hasTriggered) return;
      hasTriggered = true;
      
      // Set progress to 100
      setProgress(100);
      
      // Start fade out animation after a brief delay
      setTimeout(() => {
        setIsAnimating(true);
        // Remove from DOM after animation completes
        setTimeout(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        }, 600);
      }, 300);
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Small delay to ensure smooth transition
      setTimeout(handlePageLoad, 100);
    } else {
      // Wait for page to fully load
      window.addEventListener('load', handlePageLoad);
      
      // Also check for images and other resources
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let imageCleanupFunctions: Array<() => void> = [];

      if (totalImages > 0) {
        let loadedImages = 0;

        const checkImagesLoaded = () => {
          loadedImages++;
          if (loadedImages === totalImages && document.readyState === 'complete') {
            handlePageLoad();
          }
        };

        images.forEach((img) => {
          if (img.complete) {
            checkImagesLoaded();
          } else {
            const loadHandler = () => checkImagesLoaded();
            const errorHandler = () => checkImagesLoaded();
            img.addEventListener('load', loadHandler);
            img.addEventListener('error', errorHandler);
            imageCleanupFunctions.push(() => {
              img.removeEventListener('load', loadHandler);
              img.removeEventListener('error', errorHandler);
            });
          }
        });
      }

      // Fallback timeout to ensure loading screen doesn't stay forever
      const fallbackTimeout = setTimeout(() => {
        handlePageLoad();
      }, 5000);

      // Cleanup function
      return () => {
        isMounted = false;
        clearInterval(progressInterval);
        window.removeEventListener('load', handlePageLoad);
        clearTimeout(fallbackTimeout);
        imageCleanupFunctions.forEach(cleanup => cleanup());
      };
    }

    return () => {
      isMounted = false;
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0e27] ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transition: 'opacity 0.6s ease-out',
      }}
    >
      {/* Code rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Progress bar at bottom center */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-8">
        <div className="relative">
          {/* Progress bar background */}
          <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden">
            {/* Progress bar fill */}
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-500/50 blur-sm"></div>
            </div>
          </div>
          
          {/* Percentage text */}
          <div className="absolute -top-8 left-0 right-0 text-center">
            <span className="text-glow-cyan text-2xl font-mono font-bold">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

