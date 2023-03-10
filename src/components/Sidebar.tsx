import React from 'react';
import { BsStack } from 'react-icons/bs';
import { RiTodoLine, RiDashboardFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
   const location = useLocation();
   const pathName = location.pathname;

   return (
      <div className='w-[300px] min-full shadow-xl bg-white bg-opacity-10 backdrop-blur-sm text-white py-10'>
         <div className='flex flex-col text-white'>
            <Link to='/app'>
               <div
                  className={`flex items-center space-x-4 hover:bg-black hover:bg-opacity-50 ${
                     pathName === '/app' ? 'bg-black bg-opacity-50' : ''
                  } px-7 py-4 cursor-pointer duration-300`}
               >
                  <RiDashboardFill className='w-5 h-5' />
                  <p>Dashboard</p>
               </div>
            </Link>
            <Link to='/app/projects'>
               <div
                  className={`flex items-center space-x-4 hover:bg-black hover:bg-opacity-50 ${
                     pathName.includes('/app/projects')
                        ? 'bg-black bg-opacity-50'
                        : ''
                  } px-7 py-4 cursor-pointer duration-300`}
               >
                  <BsStack className='w-5 h-5' />
                  <p>Projects</p>
               </div>
            </Link>
            <Link to='/app/todos'>
               <div
                  className={`flex items-center space-x-4 hover:bg-black hover:bg-opacity-50 ${
                     pathName === '/app/todos' ? 'bg-black bg-opacity-50' : ''
                  } px-7 py-4 cursor-pointer duration-300`}
               >
                  <RiTodoLine className='w-5 h-5' />
                  <p>Todos</p>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Sidebar;
