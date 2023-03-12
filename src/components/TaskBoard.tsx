import { HiPencilSquare } from 'react-icons/hi2';
import { HiTrash } from 'react-icons/hi';
import TaskItem from './TaskItem';
import { IProject } from '../types/model';
import { useParams } from 'react-router-dom';
import Welcome from '../components/Welcome';

interface Props {
   projects: IProject[];
}

const TaskBoard = ({ projects }: Props) => {
   const { projectId } = useParams();

   const [projectById] = projects.filter(
      (project) => project.id === Number(projectId)
   );

   return (
      <div className='px-10 py-5 text-zinc-400'>
         {!projectId && <Welcome />}
         {projectId && projectById && (
            <>
               <div className='flex items-center mb-7 gap-3'>
                  <h1 className='text-xl font-bold'>{projectById?.title}</h1>
                  <div className='flex items-center gap-1 opacity-30 hover:opacity-100'>
                     <HiPencilSquare className='w-6 h-6' />
                     <HiTrash className='w-6 h-6' />
                  </div>
               </div>
               <div className='flex gap-4'>
                  <div className='w-[320px] min-h-[500px] bg-zinc-800 rounded-xl py-3 px-5 shadow-lg flex flex-col justify-between'>
                     <div>
                        <h2 className='text-zinc-300 text-lg font-medium mb-3'>
                           🧾 Todo
                        </h2>
                        <div className='flex flex-col gap-2'>
                           <TaskItem />
                           <TaskItem />
                        </div>
                     </div>
                     <input
                        type='text'
                        placeholder='New task'
                        className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-300'
                     />
                  </div>
                  <div className='w-[320px] min-h-[500px] bg-zinc-800 rounded-xl py-3 px-5 shadow-lg flex flex-col justify-between'>
                     <div>
                        <h2 className='text-zinc-300 text-lg font-medium mb-3'>
                           ⏳ In Proggress
                        </h2>
                        <div className='flex flex-col gap-2'>
                           <TaskItem />
                        </div>
                     </div>
                     <input
                        type='text'
                        placeholder='New task'
                        className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-300'
                     />
                  </div>
                  <div className='w-[320px] min-h-[500px] bg-zinc-800 rounded-xl py-3 px-5 shadow-lg flex flex-col justify-between'>
                     <div>
                        <h2 className='text-zinc-300 text-lg font-medium mb-3'>
                           ✔️ Done
                        </h2>
                        <div className='flex flex-col gap-2'></div>
                     </div>
                     <input
                        type='text'
                        placeholder='New task'
                        className='input input-sm w-full max-w-xs bg-zinc-600 text-zinc-300'
                     />
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default TaskBoard;
