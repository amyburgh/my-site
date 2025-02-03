import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import React from 'react';

const Socials: React.FC = () => {
  return (
    <div className=''>
      <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
        <li className='mr-5 text-xs'>
          <a
            className='block hover:text-slate-200'
            href='https://github.com/amyburgh'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub (opens in a new tab)'
          >
            <span className='sr-only'>GitHub</span>
            <GitHubLogoIcon className='h-6 w-6' aria-hidden='true' />
          </a>
        </li>
        <li className='mr-5 text-xs'>
          <a
            className='block hover:text-slate-200'
            href='https://twitter.com/aaronmyburgh'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Twitter (opens in a new tab)'
          >
            <span className='sr-only'>Twitter</span>
            <TwitterLogoIcon className='h-6 w-6' aria-hidden='true' />
          </a>
        </li>
        <li className='mr-5 text-xs'>
          <a
            className='block hover:text-slate-200'
            href='https://www.linkedin.com/in/aaronmyburgh/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='LinkedIn (opens in a new tab)'
          >
            <span className='sr-only'>LinkedIn</span>
            <LinkedInLogoIcon className='h-6 w-6' aria-hidden='true' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
