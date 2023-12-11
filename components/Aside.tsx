import React from 'react';
import ProfileImage from './ProfileImage';
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
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I engineer safe and robust software solutions using the latest
          technologies.
        </p>
        <Button className='my-4 w-fit bg-sky-500 px-6 text-gray-200 hover:bg-gradient-to-l hover:from-violet-500'>
          {/* <Button className='my-4 w-fit border border-sky-500 bg-gray-200/10 px-6 text-gray-200 hover:bg-sky-500 hover:bg-gradient-to-l hover:from-violet-400'> */}
          <DownloadIcon className='mr-2 h-4 w-4' /> Resume
        </Button>
        <Socials />
      </aside>
    </>
  );
};

export default Aside;
