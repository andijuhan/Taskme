import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AppLayout: React.FC = () => {
   const [imgBackground, setImgBackground] = useState<string>(
      'https://res.cloudinary.com/djlpcw7uf/image/upload/v1677829292/TaskMe/pexels-andy-vu-3244513_qyq5wk.jpg'
   );

   return (
      <>
         <div
            className='w-full min-h-screen bg-cover bg-center bg-fixed'
            style={{
               backgroundImage: `url(${imgBackground})`,
            }}
         >
            <Navbar />
            <div className='flex min-h-screen'>
               <Sidebar />
               <div className='w-full px-10 py-10'>
                  <Outlet />
               </div>
            </div>
         </div>
      </>
   );
};

export default AppLayout;
