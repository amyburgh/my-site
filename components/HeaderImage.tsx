'use client';

import React from 'react';
import Image from 'next/image';
// import { useTheme } from 'next-themes';

const HeaderImage: React.FC = () => {
  // const [mounted, setMounted] = React.useState(false);
  // const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  // React.useEffect(() => setMounted(true), []);
  // if (!mounted) return null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='transform transition duration-500 ease-in-out'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={isHovered ? '/dark-profile-glitch.webp' : '/dark-profile.png'}
        alt='Pixar style avatar of Aaron Myburgh'
        width={400}
        height={400}
        className='rounded-full'
      />
    </div>
  );
};

export default HeaderImage;
