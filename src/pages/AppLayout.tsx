import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppLayout: React.FC = () => {
   return (
      <>
         <div className='w-full min-h-screen bg-fixed bg-zinc-900'>
            <Navbar />
            <div className='flex w-full min-h-screen'>
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default AppLayout;
