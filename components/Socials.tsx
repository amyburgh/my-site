import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import SocialLink from './SocialLink';

// Custom X (Twitter) logo component with the new design
const XLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox='0 0 24 24'
    className={className}
    fill='currentColor'
    aria-hidden='true'
  >
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

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
          href='https://x.com/aaronmyburgh'
          ariaLabel='X (opens in a new tab)'
          icon={<XLogo className='h-6 w-6' />}
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
