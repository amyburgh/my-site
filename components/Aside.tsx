import React from 'react';
import ProfileImage from './ProfileImage';
import Nav from './Nav';
import Socials from './Socials';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

const Aside = () => {
  return (
    <>
      <ProfileImage />
      <aside className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between'>
        <h1 className='mt-8 text-4xl font-bold text-gray-950 dark:text-gray-200 sm:text-5xl'>
          <a href='/'>Aaron Myburgh</a>
        </h1>
        <h2 className='mt-3 text-lg font-bold [text-wrap:balance]'>
          I`m a{' '}
          <span className='inline-block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent'>
            Software Engineer
          </span>
          {/* <span className='inline-flex h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] flex-col overflow-hidden text-sky-400'>
          <ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
            <li>Software Engineer</li>
            <li>Mechanical Engineer</li>
            <li aria-hidden='true'>Software Engineer</li>
          </ul>
        </span> */}
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I engineer safe and robust software solutions using the latest
          technologies.
        </p>
        <Button className='to my-4 w-fit bg-sky-500 px-6 text-gray-200 hover:bg-gradient-to-l hover:from-violet-500'>
          <DownloadIcon className='mr-2 h-4 w-4' /> Resume
        </Button>
        <Nav />
        <Socials />
      </aside>
    </>
  );
};

export default Aside;
