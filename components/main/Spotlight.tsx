'use client';

import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Spotlight: React.FC<Props> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className='h-screen w-full overflow-hidden'
    >
      <div
        className=' absolute inset-0 transition duration-300'
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, #111827, transparent 80%)`, // #111827 is the bg-gray-900 color
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Spotlight;
