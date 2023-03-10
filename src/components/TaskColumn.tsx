import { AiOutlinePlus } from 'react-icons/ai';
import { Droppable } from 'react-beautiful-dnd';
import { TaskItemModel } from '../types/model';
import TaskItem from './TaskItem';

interface Props {
   taskItems: TaskItemModel[];
   taskTitle: string;
   taskId: string;
}

const TaskColumn = ({ taskItems, taskTitle, taskId }: Props) => {
   return (
      <Droppable droppableId={taskId}>
         {(provided, snapshot) => (
            <div
               className='w-[350px] h-[500px] bg-gray-200 bg-opacity-80 rounded-xl p-5 shadow-lg'
               ref={provided.innerRef}
               {...provided.droppableProps}
            >
               <div className='flex justify-between items-center mb-3'>
                  <p className='font-medium text-xl capitalize'>{taskTitle}</p>
                  <button>
                     {
                        //button drag
                     }
                  </button>
               </div>

               <ul className='space-y-3'>
                  {taskItems.map((taskItem, index) => (
                     <TaskItem
                        key={taskItem.id}
                        index={index}
                        id={taskItem.id}
                        title={taskItem.title}
                     />
                  ))}
                  {provided.placeholder}
               </ul>
               <div className='flex justify-center items-center'>
                  <button className='p-3 rounded-lg px-10 opacity-50'>
                     <AiOutlinePlus className='w-6 h-6 hover:scale-105' />
                  </button>
               </div>
            </div>
         )}
      </Droppable>
   );
};

export default TaskColumn;
