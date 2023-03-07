import React, { useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { supabase } from '../SupabaseClient';

interface Props {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   getProjects: () => Promise<void>;
}

const AddProjectForm = ({ setIsOpen, getProjects }: Props) => {
   const [projectTitle, setProjectTitle] = useState<string>('');
   const [projectDesc, setProjectDesc] = useState<string>('');

   const addProjectHandle = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //simpan ke database
      try {
         const { error } = await supabase
            .from('projects')
            .insert({ title: projectTitle, description: projectDesc })
            .single();
         if (error) throw error;
         //update list project
         getProjects();
      } catch (error: any) {
         console.log('Ups..', error.message);
      }
   };

   return (
      <div className='flex gap-3 items-start w-full'>
         <div className='w-[600px] bg-white text-gray-800 px-10 rounded-xl'>
            <form
               action=''
               onSubmit={(e) => {
                  addProjectHandle(e);
                  setIsOpen(false);
               }}
            >
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
                     required
                  />
                  <label className='label'>
                     <span className='label-text'>Project Description</span>
                  </label>
                  <textarea
                     className='textarea textarea-bordered'
                     placeholder='CRM App with ReactJs, Express, MongoDB'
                     onChange={(e) => setProjectDesc(e.target.value)}
                     value={projectDesc}
                     required
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
                  <label className='label'>
                     <span className='label-text'>Client</span>
                  </label>
                  <div className='flex space-x-4'>
                     <select className='select select-bordered w-full max-w-xs'>
                        <option disabled selected>
                           Mr. John
                        </option>
                        <option>Anas. Hue</option>
                        <option>Ada Wong</option>
                        <option>Stepen</option>
                     </select>
                     <button>Add new client</button>
                  </div>
                  <label className='label'>
                     <span className='label-text'>Deadline Date</span>
                  </label>
                  <input
                     type='date'
                     className='input input-bordered w-full max-w-xs'
                  />
                  <button type='submit' className='btn btn-primary gap-2 my-5'>
                     <AiFillFileAdd className='h-6 w-6' />
                     Add Project
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddProjectForm;
