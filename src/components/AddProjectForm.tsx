import React, { useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';

const AddProjectForm: React.FC = () => {
   const [projectTitle, setProjectTitle] = useState<string>('');
   const [projectDesc, setProjectDesc] = useState<string>('');

   const addProjectHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //simpan ke database
      console.log('simpan ke database');
   };

   return (
      <div className='w-[600px] bg-indigo-600 px-5 py-10 rounded-xl bg-opacity-60'>
         <form action='' onSubmit={(e) => addProjectHandle(e)}>
            <h1 className='text-xl text-white font-bold mb-5'>
               Add New Project
            </h1>
            <div className='form-control w-full'>
               <label className='label'>
                  <span className='label-text text-white'>Project Title</span>
               </label>
               <input
                  type='text'
                  placeholder='CRM App'
                  className='input input-bordered w-full max-w-xl'
                  onChange={(e) => setProjectTitle(e.target.value)}
                  value={projectTitle}
               />
               <label className='label'>
                  <span className='label-text text-white'>
                     Project Description
                  </span>
               </label>
               <textarea
                  className='textarea textarea-bordered'
                  placeholder='CRM App with ReactJs, Express, MongoDB'
                  onChange={(e) => setProjectDesc(e.target.value)}
                  value={projectDesc}
               ></textarea>
               <button type='submit' className='btn gap-2 mt-5'>
                  <AiFillFileAdd className='h-6 w-6' />
                  Add Project
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddProjectForm;
