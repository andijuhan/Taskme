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
      <div className='w-[600px] bg-white text-gray-800 px-10 py-10 rounded-xl bg-opacity-80'>
         <form action='' onSubmit={(e) => addProjectHandle(e)}>
            <h1 className='text-xl font-bold mb-5'>Add New Project</h1>
            <div className='form-control w-full'>
               <label className='label'>
                  <span className='label-text'>Project Title</span>
               </label>
               <input
                  type='text'
                  placeholder='CRM App'
                  className='input input-bordered w-full max-w-xl'
                  onChange={(e) => setProjectTitle(e.target.value)}
                  value={projectTitle}
               />
               <label className='label'>
                  <span className='label-text'>Project Description</span>
               </label>
               <textarea
                  className='textarea textarea-bordered'
                  placeholder='CRM App with ReactJs, Express, MongoDB'
                  onChange={(e) => setProjectDesc(e.target.value)}
                  value={projectDesc}
               ></textarea>
               <label className='label'>
                  <span className='label-text'>Project Category</span>
               </label>
               <div className='flex space-x-4'>
                  <select className='select select-bordered w-full max-w-xs'>
                     <option disabled selected>
                        Uncategory
                     </option>
                     <option>Frontend</option>
                     <option>Backend</option>
                     <option>Fullstack</option>
                  </select>
                  <button>Add new category</button>
               </div>
               <button type='submit' className='btn btn-primary gap-2 mt-5'>
                  <AiFillFileAdd className='h-6 w-6' />
                  Add Project
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddProjectForm;
