'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowGlitch(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => {
        setShowGlitch(false);
      }, 100);
    } else {
      setShowGlitch(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className='group transform transition duration-500 ease-in-out'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={
          showGlitch
            ? '/profile/dark-profile-glitch.webp'
            : '/profile/dark-profile.png'
        }
        alt='Pixar style avatar of Aaron Myburgh'
        priority={true}
        width={400}
        height={400}
        className='rounded-full border-2 border-slate-200/10 transition group-hover:border-slate-200/30'
      />
    </div>
  );
};

export default ProfileImage;
