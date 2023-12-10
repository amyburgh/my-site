'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Spotlight: React.FC<Props> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className='relative'>
      <div
        className='pointer-events-none fixed inset-0 -z-30 transition duration-300'
        style={{
          background:
            theme === 'dark'
              ? `radial-gradient(600px at ${position.x}px ${position.y}px, #111827, transparent 80%)` // #111827 is the bg-gray-900 color
              : `radial-gradient(600px at ${position.x}px ${position.y}px, #f9fafb, transparent 80%)`, // #f9fafb is the bg-gray-50 color
        }}
      ></div>
      {children}
    </div>
  );
};

export default Spotlight;
