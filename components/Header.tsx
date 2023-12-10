'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      {/* <motion.div
        className='fixed left-1/2 top-0 h-16 w-full rounded-none border border-white 
        border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/20 backdrop-blur-sm sm:top-6 sm:h-12 
        sm:w-9 sm:rounded-xl lg:w-fit lg:px-8'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <nav className='flex h-full items-center justify-center'>
          <ul className='flex items-center justify-center space-x-6'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className='text-gray-900 hover:text-gray-300 dark:text-gray-50 dark:hover:text-gray-200'
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div> */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
