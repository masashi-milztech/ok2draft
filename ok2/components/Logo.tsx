import React from 'react';

interface LogoProps {
  variant?: 'hero' | 'header' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = '' }) => {
  const logoUrl = "https://accessible-brown-wv4w2bp7u4.edgeone.app/ok2inc-logo%20copy.png";
  
  // Hero Variant: Large size for the main display
  if (variant === 'hero') {
    return (
      <img 
        src={logoUrl} 
        alt="OK² inc." 
        // Width adjustment: Mobile w-64, Desktop w-[480px] to match previous text scale roughly
        className={`w-64 md:w-[480px] h-auto object-contain select-none ${className}`}
      />
    );
  }

  // Header and Footer: Smaller size for navigation/footer areas
  return (
    <img 
      src={logoUrl} 
      alt="OK² inc." 
      className={`h-6 md:h-8 w-auto object-contain select-none ${className}`}
    />
  );
};
