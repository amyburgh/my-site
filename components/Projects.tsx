import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

const Projects: React.FC = () => {
  return (
    <section
      id='projects'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='projects'
    >
      <h3 className='not-prose mb-4 flex whitespace-pre-wrap text-xl font-semibold text-gray-200'>
        <a
          className='group relative border-none lg:-ml-2 lg:pl-2'
          href='#projects'
        >
          <div className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
            <div className='flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0'>
              <Link2Icon />
            </div>
          </div>
          Projects
        </a>
      </h3>

      <p className='mb-4'></p>
    </section>
  );
};

export default Projects;
