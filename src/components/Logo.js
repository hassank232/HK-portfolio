import React from 'react';

function Logo({ size = "w-12 h-12", textSize = "text-2xl", showHover = false }) {
  return (
    <div className={`${size} bg-black rounded-full flex items-center justify-center border-2 border-blue-700 shadow-lg ${showHover ? 'hover:scale-110 transition-transform duration-300' : ''}`}>
      <span className={`text-white font-bold ${textSize} tracking-wider`}>HK</span>
    </div>
  );
}

export default Logo;