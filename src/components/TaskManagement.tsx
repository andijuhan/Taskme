import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { TaskItemModel } from '../types/model';
import TaskColumn from './TaskColumn';

interface Props {
   taskTodo: TaskItemModel[];
   taskProgress: TaskItemModel[];
   taskDone: TaskItemModel[];
}

const TaskManagement = ({ taskTodo, taskProgress, taskDone }: Props) => {
   return (
      <div className='container bg-white text-gray-800 bg-opacity-70 rounded-xl p-10 flex gap-3'>
         <TaskColumn
            taskItems={taskTodo}
            taskTitle={'Todo'}
            taskId={'TaskTodo'}
         />
         <TaskColumn
            taskItems={taskProgress}
            taskTitle={'In Progress'}
            taskId={'TaskProgress'}
         />
         <TaskColumn
            taskItems={taskDone}
            taskTitle={'Done'}
            taskId={'TaskDone'}
         />
      </div>
   );
};

export default TaskManagement;
