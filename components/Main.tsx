import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Main: React.FC = () => {
  return (
    <main id='content' className=''>
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default Main;
