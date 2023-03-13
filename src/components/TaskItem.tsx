import { Draggable } from 'react-beautiful-dnd';

interface Props {
   title: string;
}

const TaskItem = ({ title }: Props) => {
   return (
      <div className='w-full rounded-xl bg-zinc-700 p-3 shadow-md'>
         <span>{title}</span>
      </div>
   );
};

export default TaskItem;
