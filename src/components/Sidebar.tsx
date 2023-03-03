import React from 'react';
import { BsStack } from 'react-icons/bs';
import { RiTodoLine, RiDashboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   return (
      <div className='w-[300px] text-white py-10'>
         <div className='flex flex-col text-white font-bold'>
            <Link to='/app'>
               <div className='flex items-center space-x-2 hover:bg-black hover:bg-opacity-50 px-7 py-4 cursor-pointer rounded-tr-xl rounded-br-xl'>
                  <RiDashboardFill className='w-6 h-6' />
                  <p>Dashboard</p>
               </div>
            </Link>
            <Link to='/app/projects'>
               <div className='flex items-center space-x-2 hover:bg-black hover:bg-opacity-50 px-7 py-4 cursor-pointer rounded-tr-xl rounded-br-xl'>
                  <BsStack className='w-6 h-6' />
                  <p>Projects</p>
               </div>
            </Link>
            <Link to='/app/todos'>
               <div className='flex items-center space-x-2 hover:bg-black hover:bg-opacity-50 px-7 py-4 cursor-pointer rounded-tr-xl rounded-br-xl'>
                  <RiTodoLine className='w-6 h-6' />
                  <p>Todos</p>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Sidebar;
