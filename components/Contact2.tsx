'use client';
import { motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link2Icon } from '@radix-ui/react-icons';
import { motionValue } from 'framer-motion';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again when the element comes back into view
    threshold: 0.1, // The element is considered in view when it's 50% visible
  });

  // ...

  const inViewValue = motionValue(inView);
  const fontSize = useTransform(inViewValue, (inView) =>
    inView ? '2rem' : '1rem'
  );

  return (
    <section
      id='contact'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='contact'
    >
      <motion.h3
        ref={ref}
        className='not-prose mb-4 flex whitespace-pre-wrap text-center text-xl font-semibold text-gray-200'
        style={{ fontSize }}
        animate={{ fontSize: inView ? '2rem' : '1rem' }}
        transition={{ duration: 0.5 }}
      >
        <a
          className='group relative border-none lg:-ml-2 lg:pl-2'
          href='#contact'
        >
          <div className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
            <div className='flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0'>
              <Link2Icon />
            </div>
          </div>
          Contact me
        </a>
      </motion.h3>
    </section>
  );
};

export default Contact;
