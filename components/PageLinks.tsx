import React from 'react';
import Link from 'next/link';

const PageLinks: React.FC = () => {
  return (
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
  );
};

export default PageLinks;
