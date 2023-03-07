import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   AiFillEdit,
   AiFillDelete,
   AiFillSave,
   AiFillEye,
} from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { supabase } from '../SupabaseClient';
import { IProject } from '../types/model';

interface Props {
   project: IProject;
   getProjects: () => Promise<void>;
}

const CardProject = ({ project, getProjects }: Props) => {
   const navigate = useNavigate();
   const [title, seTtitle] = useState<string>(project.title || '');
   const [description, setDescription] = useState<string>(
      project.description || ''
   );

   const [edit, setEdit] = useState<boolean>(false);

   const editProjectHandle = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //update database
      try {
         const { error } = await supabase
            .from('projects')
            .update({ title: title, description: description })
            .eq('id', project.id);
         if (error) throw error;
         //update list project
         getProjects();
      } catch (error: any) {
         console.log('Ups..', error.message);
      }
   };

   const deleteProjectHandle = async () => {
      try {
         const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', project.id);
         if (error) throw error;
         //update list project
         getProjects();
      } catch (error: any) {
         console.log('Ups..', error.message);
      }
   };

   return (
      <div className='card bg-opacity-70 backdrop-blur-sm bg-slate-50 shadow-xl hover:backdrop-blur-md'>
         {edit ? (
            <form
               action=''
               onSubmit={(e) => {
                  editProjectHandle(e);
                  setEdit(false);
               }}
            >
               <div className='form-control w-full max-w-xl gap-3 p-4'>
                  <input
                     type='text'
                     defaultValue={project.title || ''}
                     className='input input-bordered w-full max-w-xl'
                     onChange={(e) => seTtitle(e.target.value)}
                     required
                  />
                  <textarea
                     className='textarea textarea-bordered h-[150px]'
                     defaultValue={project.description || ''}
                     onChange={(e) => setDescription(e.target.value)}
                     required
                  ></textarea>
                  <select className='select select-bordered w-full max-w-xs'>
                     <option disabled selected>
                        Uncategory
                     </option>
                     <option>Frontend</option>
                     <option>Backend</option>
                     <option>Fullstack</option>
                  </select>
                  <div className='flex gap-2'>
                     <button
                        type='submit'
                        className='btn btn-square btn-success btn-sm'
                     >
                        <AiFillSave className='text-white w-5 h-5' />
                     </button>
                     <button
                        type='button'
                        className='btn btn-square btn-error btn-sm'
                        onClick={() => setEdit(false)}
                     >
                        <MdOutlineCancelPresentation className='text-white w-5 h-5' />
                     </button>
                  </div>
               </div>
            </form>
         ) : (
            <div className='card-body relative group'>
               <h2 className='card-title capitalize text-gray-700 line-clamp-1'>
                  {project.title || ''}
               </h2>
               <p className='my-3 text-gray-500 line-clamp-2'>
                  {project.description || ''}
               </p>
               <div className='card-actions justify-end absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 duration-500'>
                  <button
                     className='btn btn-square btn-info btn-sm'
                     onClick={() => navigate(`/app/projects/${project.id}`)}
                  >
                     <AiFillEye className='text-white w-5 h-5' />
                  </button>
                  <button
                     className='btn btn-square btn-sm btn-success'
                     onClick={() => setEdit(!edit)}
                  >
                     <AiFillEdit className='text-white w-5 h-5' />
                  </button>
                  <button
                     className='btn btn-square btn-error btn-sm'
                     onClick={() => deleteProjectHandle()}
                  >
                     <AiFillDelete className='text-white w-5 h-5' />
                  </button>
               </div>
               <div>
                  <p className='text-xs text-green-600'>Done</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default CardProject;
