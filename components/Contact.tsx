import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

const Contact = () => {
  return (
    <section
      id='contact'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='contact'
    >
      <h3 className='not-prose mb-4 flex whitespace-pre-wrap text-center text-xl font-semibold text-gray-200'>
        <a
          className='group relative border-none lg:-ml-2 lg:pl-2'
          href='#contact'
        >
          <div className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
            <div className='flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0'>
              <Link2Icon />
            </div>
          </div>
          Contact me
        </a>
      </h3>
      <a
        className='block hover:text-slate-200'
        href='https://www.linkedin.com/in/aaronmyburgh/'
        target='_blank'
        rel='noreferrer noopener'
        aria-label='LinkedIn (opens in a new tab)'
      >
        <Alert className='border-green-400 bg-green-400/10 text-green-400'>
          <ChatBubbleIcon className='h-4 w-4' />
          <AlertTitle>Get in touch!</AlertTitle>
          <AlertDescription>
            I&apos;m currently looking for a new opportunity, feel free to reach
            out on LinkedIn.
          </AlertDescription>
        </Alert>
      </a>
    </section>
  );
};

export default Contact;
