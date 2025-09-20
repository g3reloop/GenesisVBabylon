import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  fullScreen = false,
  role = 'region',
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy
}) => {
  const baseClasses = fullScreen 
    ? 'min-h-screen w-full bg-deep-black/40 backdrop-blur-xl border border-electric-violet/30 rounded-none p-8 shadow-2xl'
    : 'bg-deep-black/40 backdrop-blur-xl border border-electric-violet/30 rounded-2xl p-6 shadow-2xl';
  
  return (
    <div 
      className={`${baseClasses} ${className}`}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      tabIndex={fullScreen ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default GlassCard;
