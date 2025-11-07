'use client';
import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';

const data = [
  {
    company: 'Private Portfolio',
    position: 'Commercial Property Manager',
    date: 'JAN. 2020 - DEC. 2024',
    description:
      'Managed operations of commercial properties, overseeing leasing activities, and ensuring tenant satisfaction. Implemented cost-effective property improvements, successfully handled tenant concerns, fostering positive relationships and optimizing property performance.',
  },
  {
    company: '42 Silicon Valley',
    position: 'Software Engineering Student',
    date: 'APR. 2018 - SEP. 2019',
    description:
      'Completed an intensive, project-centric coding program focused on real-world software development through collaboration with peers to design, develop, and debug software solutions in a professional-like environment.',
  },
  {
    company: 'NMU Formula Student Racing Team',
    position: 'Mechanical Design Engineer',
    date: 'JUN. 2013 - NOV. 2014',
    description:
      'Designed and implemented composite components that achieved a weight reduction of up to 30% through the integration of varied tread orientations and the layering of carbon fiber, enhanced by vacuum pressure curing. Delivered training to onboard new team members.',
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
