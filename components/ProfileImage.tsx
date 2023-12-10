'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        priority={true}
        width={400}
        height={400}
        className='rounded-full'
      />
    </div>
  );
};

export default ProfileImage;
