'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24'>
      <div
        className='transform transition duration-500 ease-in-out'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {theme === 'dark' ? (
          <Image
            src={isHovered ? '/dark-profile-glitch.webp' : '/dark-profile.png'}
            alt='Pixar style avatar of Aaron Myburgh in a dark theme'
            width={400}
            height={400}
            // objectFit='contain'
            className='rounded-full'
          />
        ) : (
          <Image
            src={'/light-profile2.png'}
            alt='Pixar style avatar of Aaron Myburgh in a light theme'
            width={400}
            height={400}
            // objectFit='contain'
            className='rounded-full'
          />
        )}
      </div>
      <h1 className='mt-8 text-4xl font-bold text-gray-200 sm:text-5xl'>
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
      <nav className='hidden lg:block' aria-label='In-page jump links'>
        <ul className='mt-16 w-max'>
          {['about', 'experience', 'projects'].map((item) => (
            <li key={item}>
              <Link
                className='active group flex items-center py-3'
                href={`#${item}`}
              >
                <span className='nav-indicator group-delay-1000 mr-4 group-hover:text-gray-200 group-hover:opacity-0 group-focus-visible:w-4 group-focus-visible:text-gray-200 motion-reduce:transition-none'>
                  {'//'}
                </span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200'>
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// Inspiration: For the text carousel
// https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/
