import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setHasReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getAnimationClass = () => {
    if (hasReducedMotion) return '';
    
    const baseClass = isVisible ? 'animate-in' : 'opacity-0';
    const animationClass = {
      fadeIn: 'fade-in',
      slideUp: 'slide-up',
      slideLeft: 'slide-left',
      slideRight: 'slide-right',
      scale: 'scale-95',
      parallax: 'translate-y-4'
    }[animation];

    return `${baseClass} ${animationClass}`;
  };

  const style = {
    '--delay': `${delay}s`,
    '--duration': `${duration}s`
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      className={`${className} ${getAnimationClass()} transition-all`}
      style={hasReducedMotion ? undefined : style}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;