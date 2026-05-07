import React from 'react';

export const Background = () => {
  return (
    <>
      <div className="grain-overlay" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#f0f0f5]">
        {/* Organic Blurred Shapes */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #a8ffb1 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #ffe2a8 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[-10%] left-[10%] w-[70%] h-[70%] rounded-full opacity-30 blur-[150px]"
          style={{ background: 'radial-gradient(circle, #ffb1c1 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #b1e0ff 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #e2b1ff 0%, transparent 70%)' }}
        />
      </div>
    </>
  );
};
