import React from 'react';
import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2';

const Navbar = () => {
   return (
      <div className='py-2 bg-zinc-900 border-b text-white border-zinc-800'>
         <div className='flex w-full justify-between'>
            <h1 className='font-bold ml-5 text-xl'>Kanban</h1>
            <button className='mr-5'>
               <HiOutlineArrowLeftOnRectangle className='text-zinc-300 w-7 h-7' />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
