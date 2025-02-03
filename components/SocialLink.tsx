import React from 'react';

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, icon }) => {
  return (
    <li className='mr-5 text-xs'>
      <a
        className='block hover:text-slate-200'
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        aria-label={ariaLabel}
      >
        <span className='sr-only'>{ariaLabel}</span>
        {icon}
      </a>
    </li>
  );
};

export default SocialLink;
