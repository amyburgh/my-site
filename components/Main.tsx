import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Main: React.FC = () => {
  return (
    <main
      id='content'
      // className='py-24 lg:flex lg:max-h-screen lg:w-40 lg:flex-col'
    >
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default About;
