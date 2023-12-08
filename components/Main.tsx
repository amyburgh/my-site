import React from 'react';
import About from './About';

const Main: React.FC = () => {
  return (
    <main
      id='content'
      className='py-24 lg:flex lg:max-h-screen lg:w-40 lg:flex-col'
    >
      <section
        id='about'
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        aria-label='about me'
      >
        <About />
      </section>
    </main>
  );
};

export default About;
