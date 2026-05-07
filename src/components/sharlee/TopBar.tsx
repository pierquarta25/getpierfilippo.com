import React from 'react';
import { Moon, LayoutGrid } from 'lucide-react';

export const TopBar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center font-bold text-xl">
          PQ
        </div>
      </div>
      
      <div className="flex items-center gap-6 font-medium text-sm">
        <button className="hover:opacity-50 transition-opacity">EN</button>
        <button className="hover:opacity-50 transition-opacity">
          <Moon size={20} />
        </button>
        <button 
          onClick={onMenuClick}
          className="hover:opacity-50 transition-opacity"
        >
          <LayoutGrid size={24} />
        </button>
      </div>
    </header>
  );
};
