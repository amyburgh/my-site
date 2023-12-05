'use client';

import React, { useState } from 'react';

const Spotlight: React.FC = () => {
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
        className='pointer-events-none absolute inset-0 transition duration-300'
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, #111827, transparent 80%)`, // #111827 is the bg-gray-900 color
        }}
      ></div>
    </div>
  );
};

export default Spotlight;
