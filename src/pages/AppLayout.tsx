import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AppLayout: React.FC = () => {
   return (
      <>
         <div className='w-full min-h-screen bg-[url("https://res.cloudinary.com/djlpcw7uf/image/upload/v1677829292/TaskMe/pexels-andy-vu-3244513_qyq5wk.jpg")] bg-cover bg-center bg-no-repeat'>
            <Navbar />
            <div className='flex'>
               <Sidebar />
               <div className='w-full p-10'>
                  <Outlet />
               </div>
            </div>
         </div>
      </>
   );
};

export default AppLayout;
