import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete, AiFillSave } from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';

const CardProject: React.FC = () => {
   const [edit, setEdit] = useState<boolean>(false);

   const editProjectHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //update database
   };

   return (
      <div className='card bg-slate-100 shadow-xl hover:bg-slate-50'>
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
                     placeholder='Project Title'
                     className='input input-bordered w-full max-w-xl'
                  />
                  <textarea
                     className='textarea textarea-bordered'
                     placeholder='Description'
                  ></textarea>
                  <div className='flex gap-2'>
                     <button
                        type='submit'
                        className='btn btn-square btn-info btn-sm'
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
            <div className='card-body'>
               <h2 className='card-title capitalize'>App chat Fiverr</h2>
               <p className='my-3 text-gray-500'>
                  Membuat aplikasi chat menggunakan reactjs, express, mongoDB..
               </p>
               <div className='card-actions justify-end'>
                  <button
                     className='btn btn-square btn-sm btn-info'
                     onClick={() => setEdit(!edit)}
                  >
                     <AiFillEdit className='text-white w-5 h-5' />
                  </button>
                  <button className='btn btn-square btn-error btn-sm'>
                     <AiFillDelete className='text-white w-5 h-5' />
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default CardProject;
