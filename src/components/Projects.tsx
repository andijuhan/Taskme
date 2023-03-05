import React from 'react';
import CardProject from './CardProject';
import SearchProjects from './SearchProjects';

const Projects: React.FC = () => {
   return (
      <div className='container bg-white bg-opacity-60 rounded-xl px-10 py-10'>
         <SearchProjects />
         <h1 className='text-xl text-gray-800 font-bold mb-5 mt-5'>
            My Projects
         </h1>
         <div className='grid grid-cols-4 items-start gap-3'>
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
         </div>
         <div className='mt-5 flex justify-center'>
            <div className='btn-group'>
               <button className='btn'>«</button>
               <button className='btn'>Page 1</button>
               <button className='btn'>»</button>
            </div>
         </div>
      </div>
   );
};

export default Projects;
