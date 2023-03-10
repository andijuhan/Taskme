import { Draggable } from 'react-beautiful-dnd';

interface Props {
   id: number;
   title: string;
   index: number;
}

const TaskItem = ({ id, title, index }: Props) => {
   return (
      <Draggable draggableId={id.toString()} index={index}>
         {(provided, snapshot) => (
            <div
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
            >
               <li
                  key={id}
                  className={`${
                     snapshot.isDragging
                        ? 'bg-opacity-100 shadow-orange-200'
                        : 'bg-opacity-70'
                  } bg-gray-100 text-gray-800 p-3 rounded-lg shadow-md`}
               >
                  {title}
               </li>
            </div>
         )}
      </Draggable>
   );
};

export default TaskItem;
