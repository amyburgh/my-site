import React from 'react';
import Personality from './Personality';

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='about me'
    >
      <h1 className='mb-4 text-gray-200'>{'// About me'}</h1>
      <p className='mb-4'>
        Hey there, I&apos;m Aaron an adaptable Software Engineer with a dash of
        Mechanical Engineering mojo.
      </p>
      <p className='mb-4'>
        My mechanical engineering background equips me with a keen understanding
        of how systems work and solving problems with creative, outside-the-box
        thinking. Thanks to a stint in commercial property management, I{"'"}ve
        mastered the art of smooth communication, teamwork, and project
        juggling. Passionate about technology, I thrive on continuous learning,
        exploring areas like cybersecurity, I{"'"}ve dabbled in ethical hacking
        and digital forensics for that extra thrill.
      </p>
      <p>
        Away from the keyboard, you{"'"}ll catch me soaking up family vibes,
        diving into historical fiction or biographies (seriously, check out
        <a
          className='font-medium text-gray-200 hover:text-sky-300 focus-visible:text-sky-300'
          href='https://www.goodreads.com/book/show/343.Perfume'
          target='_blank'
          rel='noreferrer'
        >
          {' "Perfume: The Story of a Murderer" '}
        </a>
        ), or making a splash in open water swimming competitions when the
        Summer sun{"'"}s out. Life{"'"}s too short not to add a bit of{' '}
        <Personality /> to the code, right?
      </p>
    </section>
  );
};

export default About;
