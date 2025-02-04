import React from 'react';
import About from './About';
import Experience from './Experience';
// import Projects from './Projects';
import Contact from './Contact';

// import { scroll } from 'framer-motion';

const Main: React.FC = () => {
  return (
    <main id='content' className=''>
      <About />
      <Experience />
      <Contact />
    </main>
  );
};

export default Main;
