import { HiPencilSquare } from 'react-icons/hi2';
import { HiTrash } from 'react-icons/hi';
import { IProject, ITaskBoard, ITaskItem } from '../types/model';
import { useParams } from 'react-router-dom';
import Welcome from '../components/Welcome';
import { useEffect } from 'react';
import { useState } from 'react';
import { supabase } from '../SupabaseClient';
import TaskBoardItem from './TaskBoardItem';

interface Props {
   projects: IProject[];
}

const TaskBoard = ({ projects }: Props) => {
   const [taskBoards, setTaskBoards] = useState<ITaskBoard[]>([]);
   const [taskItems, setTaskItems] = useState<ITaskItem[]>([]);
   const [todos, settodos] = useState<ITaskItem[]>([]);
   const [inProgress, setInProgress] = useState<ITaskItem[]>([]);
   const [done, setDone] = useState<ITaskItem[]>([]);

   const { projectId } = useParams();

   const [projectById] = projects.filter(
      (project) => project.id === Number(projectId)
   );

   useEffect(() => {
      getTaskBoards();
      getTaskItems();
   }, [projectId]);

   useEffect(() => {
      setTaskItemByTaskBoard();
   }, [taskItems, taskBoards]);

   console.log(todos);

   const getTaskBoards = async () => {
      try {
         const { data, error } = await supabase
            .from('taskBoard')
            .select('*')
            .eq('projectId', projectId)
            .order('index', { ascending: true })
            .limit(4);
         if (error) throw error;
         if (data !== null) {
            setTaskBoards(data);
         }
      } catch (error: any) {
         console.log('Ups..', error.message);
      } finally {
         //
      }
   };

   const getTaskItems = async () => {
      try {
         const { data, error } = await supabase
            .from('taskItems')
            .select('*')
            .eq('projectId', projectId)
            .limit(20);
         if (error) throw error;
         if (data !== null) {
            setTaskItems(data);
         }
      } catch (error: any) {
      } finally {
         //
      }
   };

   const setTaskItemByTaskBoard = () => {
      taskBoards?.map((taskBoard, index) => {
         const taskItemFilterByTaskBoard = taskItems.filter(
            (taskItem) => taskItem.taskBoardId === taskBoards[index].id
         );
         const taskItemSortByIndex = taskItemFilterByTaskBoard.sort(
            (a, b) => a.index - b.index
         );
         if (taskBoard.title === 'Todo') settodos(taskItemSortByIndex);
         if (taskBoard.title === 'In Progress')
            setInProgress(taskItemSortByIndex);
         if (taskBoard.title === 'Done') setDone(taskItemSortByIndex);
      });
   };

   return (
      <div className='px-10 py-5 text-zinc-400'>
         {!projectId && <Welcome />}
         {projectId && projectById && (
            <>
               <div className='flex items-center mb-7 gap-3'>
                  <h1 className='text-xl font-bold'>{projectById.title}</h1>
                  <div className='flex items-center gap-1 opacity-30 hover:opacity-100'>
                     <HiPencilSquare className='w-6 h-6' />
                     <HiTrash className='w-6 h-6' />
                  </div>
               </div>
               <div className='flex gap-4'>
                  {taskBoards.map((taskBoard) => {
                     let taskItem: ITaskItem[] = [];
                     if (taskBoard.title === 'Todo') taskItem = todos;
                     if (taskBoard.title === 'In Progress')
                        taskItem = inProgress;
                     if (taskBoard.title === 'Done') taskItem = done;
                     return (
                        <TaskBoardItem
                           key={taskBoard.id}
                           title={taskBoard.title}
                           taskItems={taskItem}
                        />
                     );
                  })}
               </div>
            </>
         )}
      </div>
   );
};

export default TaskBoard;
