'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const Spotlight: React.FC<Props> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
  };

  // useEffect(() => {
  //   document.body.style.cursor = 'none'; // Hide the default cursor
  // }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className='relative h-screen w-full overflow-hidden'
    >
      <div
        className='absolute inset-0 transition duration-300'
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, #111827, transparent 80%)`, // #111827 is the bg-gray-900 color
        }}
      >
        {children}
      </div>
      {/* <div // Dot cursor
        ref={cursorRef}
        className='pointer-events-none absolute h-2 w-2 rounded-full bg-gray-200'
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div // Circle cursor
        className='pointer-events-none absolute h-8 w-8 rounded-full border-2 border-gray-400'
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'transparent',
          boxShadow: '0 0 10px #111827',
        }}
      /> */}
    </div>
  );
};

export default Spotlight;
