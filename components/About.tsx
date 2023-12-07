import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p className='mb-4'>
        I am Aaron, an adaptable and self-motivated software engineer with a
        strong foundation in both Mechanical and Software Engineering. I am
        currently transitioning to Software Engineering from a career in
        Commercial Property Management.
      </p>
      <p>
        My past experiences would be a valuable asset to any team seeking a
        problem solver with a diverse skill set. My background in mechanical
        engineering has provided me with a strong understanding of how systems
        work and the ability to think critically and solve problems creatively.
        My experience in commercial property management has further honed my
        skills in communication, teamwork, and project management. I am
        passionate about technology and I am constantly learning new things. I
        am also interested in cybersecurity and have completed coursework in
        ethical hacking and digital forensics.
      </p>
      <p>
        When I step away from the computer, you can find me hanging out with my
        family, getting lost in a good historical fiction or biography (highly
        recommend
        <a
          className='font-medium text-gray-200 hover:text-teal-300 focus-visible:text-teal-300'
          href='https://www.goodreads.com/book/show/343.Perfume'
          target='_blank'
          rel='noreferrer'
        >
          {' "Perfume: The Story of a Murderer" '}
        </a>
        for something unique), or in the summer tackling the open water for a
        both fun and competetive swimming.
      </p>
    </div>
  );
};

export default About;
