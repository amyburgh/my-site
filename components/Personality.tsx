import React from 'react';

const Mindset = () => {
  const characters = [
    { char: 'M', delay: 50, color: 'text-red-400' },
    { char: 'i', delay: 75, color: 'text-orange-400' },
    { char: 'n', delay: 100, color: 'text-yellow-400' },
    { char: 'd', delay: 125, color: 'text-lime-400' },
    { char: 's', delay: 150, color: 'text-green-400' },
    { char: 'e', delay: 175, color: 'text-teal-400' },
    { char: 't', delay: 200, color: 'text-cyan-400' },
  ];

  return (
    <span className='group/dazzle relative inline-flex lg:font-medium lg:text-gray-200'>
      <span className='sr-only'>Mindset</span>
      {characters.map(({ char, delay, color }) => (
        <span
          key={char}
          className={`transition delay-[${delay}ms] duration-75 group-hover/dazzle:-translate-y-px group-hover/dazzle:${color}`}
          aria-hidden='true'
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default Mindset;
