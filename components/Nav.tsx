'use client';
import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useHash = () => {
  const params = useParams();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    setHash(currentHash);
  }, [params]);

  return hash;
};

// export default useHash;

const Nav: React.FC = () => {
  const hash = useHash();
  // console.log(hash);
  return (
    <nav className='' aria-label='In-page jump links'>
      <ul className='w-max border-l border-gray-600 px-4'>
        {['about', 'experience', 'projects', 'contact'].map((item) => (
          <li key={item} className='relative'>
            <Link href={`#${item}`} className={`group flex items-center py-3`}>
              <div
                className={`link ${''} === ${item} ? 'bg-sky-400 opacity-100' : '' absolute -left-[17px] h-6 w-[1px] bg-gray-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100`}
              ></div>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus:text-gray-200 group-focus-visible:text-gray-200'>
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
