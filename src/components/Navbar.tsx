import React from 'react';

const Navbar = () => {
   return (
      <div className='navbar bg-black text-neutral-content shadow-lg bg-opacity-60'>
         <div className='flex w-full justify-between'>
            <h1 className='text-white font-bold ml-5 text-xl'>TASKMe.</h1>
            <div className='avatar online placeholder mr-2 cursor-pointer'>
               <div className='bg-indigo-500 text-neutral-content rounded-full w-10'>
                  <span className='text-xl'>JD</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
