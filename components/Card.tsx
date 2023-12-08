import exp from 'constants';
import React from 'react';

const Card: React.FC = () => {
  return (
    <div className='m-4 flex h-96 w-64 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <h1 className='text-center text-2xl font-bold text-gray-800'>
          Card Title
        </h1>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam
          voluptatibus! Voluptate, voluptatum?
        </p>
      </div>
    </div>
  );
};

export default Card;
