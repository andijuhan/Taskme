import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IProject } from '../types/model';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi2';

interface Props {
   projects: IProject[];
}

const Sidebar = ({ projects }: Props) => {
   const location = useLocation();
   const pathName = location.pathname;

   return (
      <div className='w-[250px] h-screen border-r border-zinc-800 text-zinc-400 py-2 px-5'>
         <Link to={'/app'}>
            <HiHome className='w-6 h-6' />
         </Link>
         <input
            type='text'
            placeholder='New project'
            className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-200 mb-2 mt-5'
         />
         <button className='px-2 py-1 rounded-lg text-zinc-100 text-sm bg-blue-700 hover:bg-blue-600 mb-6'>
            Add
         </button>
         <p className='bg-zinc-800 rounded-full p-1 font-medium mb-3 text-zinc-200'>
            📌 Projects
         </p>
         <ul className='space-y-3 ml-2 mb-2 text-zinc-500'>
            {projects.map((project) => (
               <li
                  key={project.id}
                  className={`text-sm font-medium  ${
                     pathName.includes(project.id.toString()) && 'text-zinc-300'
                  } hover:text-zinc-200`}
               >
                  <Link to={`/app/kanban/${project.id}`}>
                     <div className='flex items-center'>
                        <BsFillCaretRightFill
                           className={`${
                              pathName.includes(project.id.toString()) &&
                              'text-zinc-200'
                           }`}
                        />
                        <span className='line-clamp-1 lowercase'>
                           {project.title}
                        </span>
                     </div>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Sidebar;
