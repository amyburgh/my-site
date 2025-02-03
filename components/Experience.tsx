'use client';
import React from 'react';
import { Link2Icon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/seperator';

const data = [
  {
    company: 'Noosa Trust',
    position: 'Commercial Propery Manager',
    date: 'JAN. 2020 - DEC. 2023',
    description:
      'Managed operations of commercial properties, overseeing leasing activities, and ensuring tenant satisfaction. Implemented cost-effective property improvements, successfully handled tenant concerns, fostering positive relationships and optimizing property performance.',
  },
  {
    company: 'NMU Formula Student Racing Team',
    position: 'Mechanical Design Engineer',
    date: 'JUN. 2013 - NOV. 2014',
    description:
      'Designed and implemented composite components that achieved a weight reduction of up to 30% through the integration of varied tread orientations and the layering of carbon fiber, enhanced by vacuum pressure curing. Delivered training to onboard new teammembers.',
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='experience'
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
      <p className='mb-4'>
        {data.map((job) => (
          <div
            className='mb-4 flex flex-col gap-4 lg:flex-row'
            key={job.company}
          >
            <div>
              <p className='z-10 mb-2 mt-1 w-max text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2'>
                {job.date}
              </p>
            </div>
            <div>
              <h4 className='text-lg font-semibold text-gray-200'>
                {job.position} @ {job.company}
              </h4>
              <p className='text-sm text-gray-400'>{job.description}</p>
            </div>
          </div>
        ))}
      </p>
    </section>
  );
};

export default Experience;
