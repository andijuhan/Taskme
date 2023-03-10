import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
//import { TaskItemModel, TaskModel } from '../types/model';
import { supabase } from '../SupabaseClient';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
   const { projectId } = useParams();
   //const [taskByProject, settaskByProject] = useState<TaskModel[]>([]);
   //const [taskItems, setTaskItems] = useState<TaskItemModel[]>([]);

   useEffect(() => {
      getTaskItem();
      getTaskbyProject();
   }, []);

   //mendapatkan list task berdasarkan projectId
   const getTaskbyProject = async () => {
      try {
         const { data, error } = await supabase
            .from('task')
            .select('*')
            .eq('projectId', projectId)
            .limit(5)
            .order('index', { ascending: true });

         if (error) throw error;
         if (data !== null) {
         }
      } catch (error) {}
   };

   const getTaskItem = async () => {
      try {
         const { data, error } = await supabase
            .from('taskItems')
            .select('*')
            .eq('projectId', projectId)
            .limit(10);
         if (error) throw error;
         if (data !== null) {
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

      /* let add,
         todos = taskTodos,
         progress = taskProgress,
         done = taskDone;

      if (source.droppableId === '1') {
         //dapatkan elemen array yg akan di tambahkan
         add = todos[source.index];
         //hapus elemen array berdasarkan index
         todos.splice(source.index, 1);
      } else if (source.droppableId === '2') {
         add = progress[source.index];
         progress.splice(source.index, 1);
      } else {
         add = done[source.index];
         done.splice(source.index, 1);
      }

      if (destination.droppableId === '1') {
         //tambahkan elemen array ke droppable active todo
         todos.splice(destination.index, 0, add);
      } else if (destination.droppableId === '2') {
         //tambahkan elemen array ke droppable complete todo
         progress.splice(destination.index, 0, add);
      } else {
         done.splice(destination.index, 0, add);
      } */

      //update taskId di database
      //buat function untuk update taskId
   };
   return <></>;
};

export default ProjectDetails;
