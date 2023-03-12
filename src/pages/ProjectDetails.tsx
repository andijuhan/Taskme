import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TaskItemModel, TaskModel } from '../types/model';
import { supabase } from '../SupabaseClient';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
   const { projectId } = useParams();
   const [taskByProject, settaskByProject] = useState<TaskModel[]>([]);
   const [taskItems, setTaskItems] = useState<TaskItemModel[]>([]);

   useEffect(() => {
      getTaskItem();
      getTaskbyProject();
   }, []);

   console.log(taskByProject);
   console.log(taskItems);

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
            settaskByProject(data);
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
            const dataSort = data.sort(
               (a, b) => (a.index || 0) - (b.index || 0)
            );
            setTaskItems(dataSort);
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

      console.log(result);

      let taskItemSourceDrag = taskItems[source.index];
      let taskItemDestinationDrag = taskItems[destination.index];

      const tes = taskItems.map((taskItem, index) => {
         //jika taskItem id sama dengan taskItem sumber drag
         if (taskItem.id === taskItemSourceDrag.id) {
            taskItem.index = destination.index;
            taskItem.taskId = Number(destination.droppableId);
         } else if (taskItem.id === taskItemDestinationDrag.id) {
            taskItem.index = source.index;
            taskItem.taskId = Number(source.droppableId);
         }
         return taskItem;
      });

      const dataSort = tes.sort((a, b) => (a.index || 0) - (b.index || 0));
      setTaskItems(dataSort);
      console.log(result);

      console.log(taskItems);

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
