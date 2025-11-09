import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24'
      aria-label='about'
    >
      <h3 className='not-prose mb-4 flex whitespace-pre-wrap text-xl font-semibold text-gray-200'>
        <a
          className='group relative border-none lg:-ml-2 lg:pl-2'
          href='#about'
        >
          <div className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
            <div className='flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0'>
              <Link2Icon />
            </div>
          </div>
          About
        </a>
      </h3>

      <p className='mb-4'>
        Hi, I'm Aaron a{' '}
        <span className='font-medium text-gray-200'>Software Engineer </span>{' '}
        with a background in Mechanical Engineering. I studied in South Africa
        and later in Silicon Valley, where I shifted my focus to software. My
        experience spans mechanical systems, property operations, and software
        engineering, giving me a practical perspective to problem-solving.
      </p>
      <p>
        Away from the screen, you’ll find me with family, reading biographies,
        or outside touching grass.
      </p>
    </section>
  );
};

export default About;
