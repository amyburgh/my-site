import React from 'react';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
      <h1 className='text-4xl font-bold text-gray-950 dark:text-gray-200 sm:text-5xl'>
        <a href='/'>Aaron Myburgh</a>
      </h1>
      <h2 className='mt-3 text-lg font-bold [text-wrap:balance]'>
        I`m a{' '}
        <span className='inline-block bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent'>
          Software Engineer
        </span>
      </h2>
      <p className='mt-4 max-w-xs leading-normal'>
        I engineer safe and robust web solutions using the latest technologies
      </p>
      <a href='./Aaron_Myburgh.pdf' download>
        <Button className='my-8 w-fit bg-sky-500 px-6 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-l hover:from-violet-500'>
          <DownloadIcon className='mr-2 h-4 w-4' /> Resume
        </Button>
      </a>
    </div>
  );
};

export default Hero;
