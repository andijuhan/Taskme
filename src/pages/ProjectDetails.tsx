import React, { useState, useEffect } from 'react';
import TaskManagement from '../components/TaskManagement';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TaskItemModel } from '../types/model';
import { supabase } from '../SupabaseClient';

const ProjectDetails = () => {
   const [taskTodos, setTaskTodo] = useState<TaskItemModel[]>([]);
   const [taskProgress, setTaskProgress] = useState<TaskItemModel[]>([]);
   const [taskDone, setTaskDone] = useState<TaskItemModel[]>([]);

   useEffect(() => {
      getTaskItem();
   }, []);

   const getTaskItem = async () => {
      try {
         const { data, error } = await supabase
            .from('taskItems')
            .select('*')
            .limit(10)
            .order('created_at', { ascending: true });
         if (error) throw error;
         if (data !== null) {
            const todos = data.filter((todo) => todo.taskId === 1);
            const inProgress = data.filter((progress) => progress.taskId === 2);
            const done = data.filter((don) => don.taskId === 3);
            setTaskTodo(todos);
            setTaskProgress(inProgress);
            setTaskDone(done);
         }
      } catch (error: any) {
         console.log('Ups..', error.message);
      } finally {
      }
   };

   const onDragEnd = (result: DropResult) => {
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
      console.log(todos);

      //update taskId di database
      //buat function untuk update taskId
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
