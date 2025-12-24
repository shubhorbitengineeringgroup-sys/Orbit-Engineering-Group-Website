import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo-2.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 200); // Fade out delay
    }, 800); // Show logo animation for 0.8 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500",
        !isLoading && "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <img
            src={logo}
            alt="Orbit Engineering Group Logo"
            className="h-32 w-32 object-contain animate-bounce-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-gradient-x"></div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="text-lg font-medium text-foreground/80 animate-pulse">
            Loading Orbit Engineering Group
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-water-gradient animate-progress-bar rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;