import React from 'react';

const SearchProjects = () => {
   return (
      <div className='form-control flex flex-row w-full gap-3'>
         <div className='input-group w-[40%]'>
            <input
               type='text'
               placeholder='Search…'
               className='input input-bordered w-full'
            />
            <button className='btn btn-square'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth='2'
                     d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
               </svg>
            </button>
         </div>
         <select className='select select-bordered max-w-xs'>
            <option disabled selected>
               Uncategory
            </option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
         </select>
         <select className='select select-bordered max-w-none'>
            <option disabled selected>
               On Proggress
            </option>
            <option>On Proccess</option>
            <option>Done</option>
            <option>Deadline</option>
            <option>Rejected</option>
            <option>Revision</option>
         </select>
      </div>
   );
};

export default SearchProjects;
