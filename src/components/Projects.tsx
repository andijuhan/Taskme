import React from 'react';
import CardProject from './CardProject';

const Projects: React.FC = () => {
   return (
      <div className='container bg-white bg-opacity-80 rounded-xl px-10 py-10'>
         <h1 className='text-xl text-gray-800 font-bold mb-5'>My Projects</h1>
         <div className='grid grid-cols-3 grid-rows-2 gap-3'>
            <CardProject />
         </div>
      </div>
   );
};

export default Projects;
