'use client';
import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

const useHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let hashChangeTimeout: NodeJS.Timeout;
    let ignoreScroll = false;

    const updateHash = () => {
      const currentHash = window.location.hash.replace('#', '');
      setHash(currentHash);
      // Ignore scroll updates for a short time after hash change
      ignoreScroll = true;
      clearTimeout(hashChangeTimeout);
      hashChangeTimeout = setTimeout(() => {
        ignoreScroll = false;
      }, 800);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes (from clicks) - this takes priority
    window.addEventListener('hashchange', updateHash);
    
    // Also listen for scroll events to update active state
    const handleScroll = () => {
      // Always prioritize URL hash if it exists
      if (window.location.hash) {
        const urlHash = window.location.hash.replace('#', '');
        if (urlHash !== hash) {
          setHash(urlHash);
        }
        return;
      }
      
      if (ignoreScroll) return;
      
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const sections = ['about', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 100;
        let activeSection = '';

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              activeSection = section;
              break;
            }
          }
        }

        // Only update if we found a section
        if (activeSection && activeSection !== hash) {
          setHash(activeSection);
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(hashChangeTimeout);
    };
  }, []);

  return hash;
};

const Nav: React.FC = () => {
  const hash = useHash();
  const navItems = ['about', 'experience', 'contact'];

  return (
    <nav className='' aria-label='In-page jump links'>
      <ul className='w-max border-l border-gray-600 px-4'>
        {navItems.map((item) => (
          <li key={item} className='relative'>
            <Link href={`#${item}`} className={`group flex items-center py-3`}>
              <div
                className={`${hash === item ? 'bg-white opacity-100' : ''} absolute -left-[17px] h-6 w-[1px] bg-gray-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100`}
              ></div>
              <span className={`nav-text text-xs font-bold uppercase tracking-widest ${hash === item ? 'text-white' : 'text-gray-500 group-hover:text-gray-200 group-focus:text-gray-200 group-focus-visible:text-gray-200'}`}>
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
