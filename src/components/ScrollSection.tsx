
import React, { useEffect, useRef } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  triggerAnimation?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = '', 
  triggerAnimation = true 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerAnimation) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [triggerAnimation]);

  return (
    <div 
      ref={sectionRef} 
      className={`opacity-0 transform translate-y-8 transition-all duration-1000 ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
