import React, { useState } from 'react';
import TaskManagement from '../components/TaskManagement';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TaskItemModel } from '../types/model';

const DUMMY_DATA_1: TaskItemModel[] = [
   {
      id: 1,
      title: 'Title 1',
   },
   {
      id: 2,
      title: 'Title 2',
   },
   {
      id: 3,
      title: 'Title 3',
   },
   {
      id: 4,
      title: 'Title 4',
   },
];

const ProjectDetails = () => {
   const [taskTodos, setTaskTodo] = useState<TaskItemModel[]>(DUMMY_DATA_1);
   const [taskProgress, setTaskProgress] = useState<TaskItemModel[]>([]);
   const [taskDone, setTaskDone] = useState<TaskItemModel[]>([]);

   console.log(taskTodos);
   console.log(taskProgress);

   const onDragEnd = (result: DropResult) => {
      console.log(result);

      const { source, destination } = result;
      //jika tujuan drag kosong
      if (!destination) return;
      //jika tujuan drag sama
      if (
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      )
         return;
      let add,
         todos = taskTodos,
         progress = taskProgress,
         done = taskDone;

      if (source.droppableId === 'TaskTodo') {
         //dapatkan elemen array yg akan di tambahkan
         add = todos[source.index];
         //hapus elemen array berdasarkan index
         todos.splice(source.index, 1);
      } else if (source.droppableId === 'TaskProgress') {
         add = progress[source.index];
         progress.splice(source.index, 1);
      } else {
         add = done[source.index];
         done.splice(source.index, 1);
      }

      if (destination.droppableId === 'TaskTodo') {
         //tambahkan elemen array ke droppable active todo
         todos.splice(destination.index, 0, add);
      } else if (destination.droppableId === 'TaskProgress') {
         //tambahkan elemen array ke droppable complete todo
         progress.splice(destination.index, 0, add);
      } else {
         done.splice(destination.index, 0, add);
      }

      //update state
      setTaskDone(done);
      setTaskProgress(progress);
      setTaskTodo(todos);
   };
   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <TaskManagement
            taskTodo={taskTodos}
            taskProgress={taskProgress}
            taskDone={taskDone}
         />
      </DragDropContext>
   );
};

export default ProjectDetails;
