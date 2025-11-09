'use client';
import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

const data = [
  {
    company: 'NMU Formula Student Racing Team',
    position: 'Mechanical Design Engineer',
    date: 'JUN 2013 - NOV 2014',
    description:
      'I started by designing and building race car components as part of NMU’s Formula Student team, an experience that taught me how precision and collaboration matter when missing a deadline means missing the start line.',
  },
  {
    company: '42 Silicon Valley',
    position: 'Software Engineering Student',
    date: 'APR 2018 - SEP 2019',
    description:
      'A few years later, I moved to Silicon Valley for 42, an intensive software engineering program built entirely around problem-solving and collaboration. No lectures, no grades, just code, iteration, and some serious persistence.',
  },
  {
    company: 'Private Portfolio',
    position: 'Commercial Property Manager',
    date: 'JAN 2020 - DEC 2024',
    description:
      'From 2020 to 2024, I managed commercial properties, handling operations, compliance, and property upgrades. It was a crash course in real-world ownership and decision-making.',
  },
  {
    company: 'Outlier.ai (Contract)',
    position: 'Software Engineer',
    date: 'JUN 2025 - AUG 2025',
    description:
      'Most recently, I evaluated AI-generated codebases for research teams. Now I’m back on the building side, ready and focused on shipping software that solves real problems.',
  },
  {
    company: '',
    position: 'Software Engineer',
    date: 'NEXT',
    description:
      'I’m looking for a team that values a non-traditional path. A decade across different fields means I see problems from angles others might miss. If that resonates, drop me a line on LinkedIn.',
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id='experience'
      className='mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24'
    >
      <h3 className='not-prose mb-4 flex whitespace-pre-wrap text-xl font-semibold text-gray-200'>
        <a
          className='group relative border-none lg:-ml-2 lg:pl-2'
          href='#experience'
        >
          <div className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
            <div className='flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0'>
              <Link2Icon />
            </div>
          </div>
          Experience
        </a>
      </h3>
      <div className='mb-4'>
        {data.map((job) => (
          <div
            className='mb-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-4'
            key={job.company}
          >
            <p className='order-2 mb-2 mt-2 w-auto text-xs font-semibold uppercase tracking-wide text-gray-500 lg:order-1 lg:col-span-1 lg:row-span-2'>
              {job.date}
            </p>
            <h4 className='order-1 text-lg font-semibold text-gray-200 lg:order-2 lg:col-span-3'>
              {job.position} @ {job.company}
            </h4>
            <p className='order-3 mt-2 text-sm text-gray-400 lg:col-span-3 lg:mt-0'>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
