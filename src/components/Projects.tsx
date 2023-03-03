import React from 'react';
import CardProject from './CardProject';

const Projects: React.FC = () => {
   return (
      <div className='container bg-indigo-600 h-full bg-opacity-60 rounded-xl px-5 py-10'>
         <h1 className='text-xl text-white font-bold mb-5'>My Projects</h1>
         <div className='grid grid-cols-4 grid-rows-2'>
            <CardProject />
         </div>
      </div>
   );
};

export default Projects;
