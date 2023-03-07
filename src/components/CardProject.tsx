import React, { useState } from 'react';
import {
   AiFillEdit,
   AiFillDelete,
   AiFillSave,
   AiFillEye,
} from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { IProject } from '../types/props';

interface Props {
   project: IProject;
}

const CardProject = ({ project }: Props) => {
   const title = project.title || '';
   const description = project.description || '';
   const deadlineDate = project.deadlinedate || '';

   const [edit, setEdit] = useState<boolean>(false);

   const editProjectHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //update database
   };

   return (
      <div className='card bg-opacity-70 backdrop-blur-sm bg-slate-50 shadow-xl hover:backdrop-blur-md'>
         {edit ? (
            <form
               action=''
               onSubmit={(e) => {
                  editProjectHandle(e);
               }}
            >
               <div className='form-control w-full max-w-xl gap-3 p-4'>
                  <input
                     type='text'
                     value={title}
                     className='input input-bordered w-full max-w-xl'
                  />
                  <textarea
                     className='textarea textarea-bordered'
                     value={description}
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
                        onClick={() => setEdit(false)}
                     >
                        <AiFillSave className='text-white w-5 h-5' />
                     </button>
                     <button
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
               <h2 className='card-title capitalize text-gray-700'>{title}</h2>
               <p className='my-3 text-gray-500'>{description}</p>
               <div className='card-actions justify-end absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 duration-500'>
                  <button className='btn btn-square btn-info btn-sm'>
                     <AiFillEye className='text-white w-5 h-5' />
                  </button>
                  <button
                     className='btn btn-square btn-sm btn-success'
                     onClick={() => setEdit(!edit)}
                  >
                     <AiFillEdit className='text-white w-5 h-5' />
                  </button>
                  <button className='btn btn-square btn-error btn-sm'>
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
