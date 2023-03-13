import React from 'react';
import { ITaskItem } from '../types/model';
import TaskItem from './TaskItem';
import { HiPlus } from 'react-icons/hi2';

interface Props {
   title: string;
   taskItems: ITaskItem[];
   color: string;
}

const TaskBoardItem = ({ title, taskItems, color }: Props) => {
   return (
      <div className='w-[320px] min-h-[500px] bg-zinc-800 rounded-xl py-3 px-5 shadow-lg flex flex-col justify-between'>
         <div>
            <div className='flex items-center mb-3 gap-3'>
               <h2 className='text-zinc-300 text-lg font-medium'>{title}</h2>
               <div className={`w-4 h-4 rounded-full ${color}`}></div>
            </div>
            <div className='flex flex-col gap-2'>
               {taskItems.map((taskItem) => (
                  <TaskItem key={taskItem.id} title={taskItem.title} />
               ))}
            </div>
         </div>
         <div className='flex items-center'>
            <input
               type='text'
               placeholder='New task'
               className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-300 pr-10'
            />
            <button>
               <HiPlus className='-ml-6 w-5 h-5' />
            </button>
         </div>
      </div>
   );
};

export default TaskBoardItem;
