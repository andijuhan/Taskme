import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
   return (
      <>
         <Navbar />
         <div className='w-full min-h-screen flex bg-[url("https://images.unsplash.com/photo-1676846328604-ce831c481346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80")] bg-cover'>
            <Sidebar />
            <div className='w-full p-10'>
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default HomePage;
