'use client';

import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24'>
      {/* Your code here */}
      <Image
        src='/dark-profile.png'
        alt='Pixar style avatar of Aaron Myburgh in a dark theme'
        width={400}
        height={400}
        // fill={true}
        objectFit='contain'
        className='rounded-full'
      ></Image>
      <h1 className='text-4xl font-bold text-gray-200 sm:text-5xl'>
        <a href='/'>Aaron Myburgh</a>
      </h1>
      <h2 className='mt-3 text-lg font-bold [text-wrap:balance]'>
        I`m a{' '}
        <span className='inline-flex h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500'>
          <ul className='animate-text-slide-2 block text-left leading-tight [&_li]:block'>
            <li>Software Engineer</li>
            <li>Mechanical Engineer</li>
            <li aria-hidden='true'>Software Engineer</li>
          </ul>
        </span>
      </h2>
      <p className='mt-4 max-w-xs leading-normal'>
        I build exceptional and accessible digital experiences for the web.
      </p>
    </header>
  );
};

export default Header;

// Inspiration: For the text carousel
// https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/
