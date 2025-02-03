import React from 'react';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import SocialLink from './SocialLink';

const Socials: React.FC = () => {
  return (
    <div className=''>
      <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
        <SocialLink
          href='https://github.com/amyburgh'
          ariaLabel='GitHub (opens in a new tab)'
          icon={<GitHubLogoIcon className='h-6 w-6' aria-hidden='true' />}
        />
        <SocialLink
          href='https://twitter.com/aaronmyburgh'
          ariaLabel='Twitter (opens in a new tab)'
          icon={<TwitterLogoIcon className='h-6 w-6' aria-hidden='true' />}
        />
        <SocialLink
          href='https://www.linkedin.com/in/aaronmyburgh/'
          ariaLabel='LinkedIn (opens in a new tab)'
          icon={<LinkedInLogoIcon className='h-6 w-6' aria-hidden='true' />}
        />
      </ul>
    </div>
  );
};

export default Socials;
