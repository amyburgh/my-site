'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Spotlight: React.FC<Props> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className='relative'>
      {mounted && (
        <div
          className='pointer-events-none fixed inset-0 -z-30 transition duration-300'
          style={{
            background:
              resolvedTheme === 'dark'
                ? `radial-gradient(600px at ${position.x}px ${position.y}px, #111827, transparent 80%)`
                : `radial-gradient(600px at ${position.x}px ${position.y}px, #f9fafb, transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Spotlight;
