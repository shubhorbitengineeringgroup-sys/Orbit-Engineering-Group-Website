import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface MarqueeItem {
  id: string;
  name: string;
  logo: string;
  category?: string;
}

interface SeamlessMarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

const SeamlessMarquee: React.FC<SeamlessMarqueeProps> = ({
  items,
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) => {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-50%'] : ['0%', '50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: speed,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className={`overflow-hidden ${className}`} ref={containerRef}>
      <motion.div
        className="flex select-none gap-8"
        variants={marqueeVariants}
        animate="animate"
        onMouseDown={(e) => { setIsDragging(true); setStartX(e.clientX); }}
        onMouseMove={(e) => { if (!isDragging) return; setDragOffset((prev) => prev + (e.movementX)); }}
        onMouseUp={() => { setIsDragging(false); setDragOffset(0); }}
        onMouseLeave={() => { if (isDragging) { setIsDragging(false); setDragOffset(0); } }}
        onTouchStart={(e) => { setIsDragging(true); setStartX(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (!isDragging) return; const dx = e.touches[0].clientX - startX; setStartX(e.touches[0].clientX); setDragOffset((prev) => prev + dx); }}
        onTouchEnd={() => { setIsDragging(false); setDragOffset(0); }}
        style={{ 
          userSelect: 'none'
        }}
      >
        <motion.div
          style={{ x: dragOffset, userSelect: 'none' }}
        >
          <div className="flex gap-8">
            {duplicatedItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0">
                <Card className="hover-lift border-0 shadow-lg bg-white/90 backdrop-blur-sm p-6 sm:p-8 group transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="w-40 h-28 sm:w-56 sm:h-36 flex items-center justify-center mb-3 sm:mb-4 rounded-xl bg-gray-50/80 group-hover:bg-blue-50 transition-colors duration-300">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-20 sm:max-h-24 max-w-full object-contain transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-center text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SeamlessMarquee;
