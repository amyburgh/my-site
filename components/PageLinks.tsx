import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const PageLinks: React.FC = () => {
  return (
    <nav className='hidden lg:block' aria-label='In-page jump links'>
      <ul className='mt-16 w-max'>
        {['about', 'experience', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <ScrollLink
              to={item}
              smooth={true}
              duration={500}
              offset={-70} // Adjust the offset if needed
              className='active group flex cursor-pointer items-center py-3'
            >
              <span className='nav-indicator group-delay-1000 mr-4 group-hover:text-gray-200 group-hover:opacity-0 group-focus-visible:w-4 group-focus-visible:text-gray-200 motion-reduce:transition-none'>
                {'//'}
              </span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 group-focus-visible:text-gray-200'>
                {item}
              </span>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageLinks;
