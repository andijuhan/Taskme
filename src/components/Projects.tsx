import React from 'react';
import { IProject } from '../types/model';
import CardProject from './CardProject';
import SearchProjects from './SearchProjects';
import { ImFilesEmpty } from 'react-icons/im';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface Props {
   projects: IProject[];
   getProjects: () => Promise<void>;
   loading: boolean;
}

const Projects = ({ projects, getProjects, loading }: Props) => {
   console.log(projects);

   return (
      <div className='container bg-white bg-opacity-70 rounded-xl px-10 py-10'>
         <SearchProjects />
         <h1 className='text-xl text-gray-800 font-bold mb-5 mt-5'>
            My Projects
         </h1>
         {projects.length === 0 && (
            <div className='flex flex-col justify-center items-center w-full gap-4'>
               <ImFilesEmpty className='text-gray-800 w-14 h-14' />
               <p className='font-medium text-xl'>Projects not found</p>
            </div>
         )}
         {loading && (
            <div className='flex flex-col justify-center items-center w-full gap-4'>
               <AiOutlineLoading3Quarters className='text-gray-800 w-14 h-14 animate-spin' />
            </div>
         )}
         <div className='grid grid-cols-4 items-start gap-3'>
            {!loading &&
               projects.map((project) => (
                  <CardProject
                     key={project.id}
                     project={project}
                     getProjects={getProjects}
                  />
               ))}
         </div>
         <div className='mt-5 flex justify-center hidden'>
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
