import React from 'react';
import { ITaskItem } from '../types/model';
import TaskItem from './TaskItem';

interface Props {
   title: string;
   taskItems: ITaskItem[];
}

const TaskBoardItem = ({ title, taskItems }: Props) => {
   return (
      <div className='w-[320px] min-h-[500px] bg-zinc-800 rounded-xl py-3 px-5 shadow-lg flex flex-col justify-between'>
         <div>
            <h2 className='text-zinc-300 text-lg font-medium mb-3'>{title}</h2>
            <div className='flex flex-col gap-2'>
               {taskItems.map((taskItem) => (
                  <TaskItem key={taskItem.id} title={taskItem.title} />
               ))}
            </div>
         </div>
         <input
            type='text'
            placeholder='New task'
            className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-300'
         />
      </div>
   );
};

export default TaskBoardItem;
