import React from 'react';

export const Background = () => {
  return (
    <>
      {/* Texture Noise Overlay */}
      <div className="hidden md:block fixed inset-0 z-[-5] opacity-[0.03] pointer-events-none dark:opacity-[0.05] bg-noise-texture" />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#f8f8fa] dark:bg-[#050505]">
        {/* Main Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #888 1px, transparent 1px),
              linear-gradient(to bottom, #888 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Sub-grid (Millimetric) */}
        <div 
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #888 1px, transparent 1px),
              linear-gradient(to bottom, #888 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px'
          }}
        />

        {/* Subtle Radial Glow to prevent excessive flatness */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.4] dark:opacity-[0.2]"
          style={{ background: 'radial-gradient(circle, rgba(168, 255, 177, 0.1) 0%, transparent 70%)' }}
        />
      </div>
    </>
  );
};
