import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className='' aria-label='In-page jump links'>
      <ul className='w-max border-l border-gray-600 px-4'>
        {['about', 'experience', 'projects', 'skills', 'contact'].map(
          (item) => (
            <li key={item} className='relative'>
              <Link
                className='active group flex items-center py-3'
                href={`#${item}`}
              >
                {/* TODO: Remove this group focus indicator */}
                <div className='nav-indicator absolute -left-[17px] h-6 w-[1px] bg-gray-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100'></div>
                {/* <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span> */}
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus:text-gray-200 group-focus-visible:text-gray-200'>
                  {item}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
