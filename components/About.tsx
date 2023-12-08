import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1 className='text-gray-200'>{'// About me'}</h1>
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
          className='font-medium text-gray-200 hover:text-teal-300 focus-visible:text-teal-300'
          href='https://www.goodreads.com/book/show/343.Perfume'
          target='_blank'
          rel='noreferrer'
        >
          {' "Perfume: The Story of a Murderer" '}
        </a>
        ), or making a splash in open water swimming competitions when the
        Summer sun{"'"}s out. Life{"'"}s too short not to add a bit of
        personality to the code, right?
      </p>
    </div>
  );
};

export default About;
