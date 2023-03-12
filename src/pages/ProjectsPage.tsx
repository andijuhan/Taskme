import React, { useState, useEffect } from 'react';
import { supabase } from '../SupabaseClient';
import { IProject } from '../types/model';
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';

//UI Form untuk add Project
//Menampilkan list Project
//Management Project (CRUD)
const defaultValue: IProject = {
   id: 0,
   title: '',
   description: '',
   deadlinedate: '',
};

const ProjectsPage = () => {
   const [loading, setLoading] = useState<boolean>(true);
   const [projects, setProjects] = useState<IProject[]>([defaultValue]);

   useEffect(() => {
      getProjects();
   }, []);

   const getProjects = async () => {
      try {
         const { data, error } = await supabase
            .from('projects')
            .select('*')
            .limit(10);
         if (error) throw error;
         if (data !== null) {
            console.log(data);

            setProjects(data);
         }
      } catch (error: any) {
         console.log('Ups..', error.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='flex h-full'>
         <Sidebar projects={projects} />
         <TaskBoard projects={projects} />
      </div>
   );
};

export default ProjectsPage;
