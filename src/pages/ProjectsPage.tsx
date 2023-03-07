import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from '../components/Modal';
import AddProjectForm from '../components/AddProjectForm';
import { supabase } from '../SupabaseClient';
import { IProject } from '../types/model';

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
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(true);
   const [projects, setProjects] = useState<IProject[]>([defaultValue]);

   useEffect(() => {
      getProjects();
   }, []);

   console.log(projects);

   const getProjects = async () => {
      try {
         const { data, error } = await supabase
            .from('projects')
            .select('*')
            .limit(10)
            .order('dateAdded', { ascending: false });
         if (error) throw error;
         if (data !== null) {
            setProjects(data);
         }
      } catch (error: any) {
         console.log('Ups..', error.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='flex flex-col h-full'>
         <button
            className='btn btn-primary w-[200px] gap-2 mb-10'
            onClick={() => setIsOpen(!isOpen)}
         >
            <AiOutlinePlus className='w-5 h-5' />
            Add Project
         </button>
         {isOpen && (
            <Modal
               isOpen={isOpen}
               closeModal={() => {
                  setIsOpen(false);
               }}
            >
               <AddProjectForm
                  setIsOpen={setIsOpen}
                  getProjects={getProjects}
               />
            </Modal>
         )}
         <Projects
            projects={projects}
            getProjects={getProjects}
            loading={loading}
         />
      </div>
   );
};

export default ProjectsPage;
