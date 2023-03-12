import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
   draggableId: string;
}

const TaskColumnDrag = ({ draggableId }: Props) => {
   return (
      <Draggable draggableId='1' index={1}>
         {() => <div className='bg-red-200 w-full h-full'>TaskColumnDrag</div>}
      </Draggable>
   );
};

export default TaskColumnDrag;
