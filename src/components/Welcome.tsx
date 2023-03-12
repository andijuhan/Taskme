import React from 'react';

const welcome = () => {
   return (
      <div className='w-[600px] bg-zinc-800 p-5 rounded-lg text-zinc-300'>
         <h1 className='text-xl font-bold mb-3'>Welcome username</h1>
         <div className='font mb-7'>
            <p>Simple Kanban Board for your project</p>
            <p>
               Create and manage project with Kanban system to increased
               productivity.{' '}
            </p>
         </div>
         <button className='px-2 py-1 rounded-lg text-zinc-100 font-medium text-sm bg-blue-600 hover:bg-blue-700'>
            Create Project
         </button>
      </div>
   );
};

export default welcome;
