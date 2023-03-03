import React from 'react';
import AddProjectForm from '../components/AddProjectForm';
import Projects from '../components/Projects';

//UI Form untuk add Project
//Menampilkan list Project
//Management Project (CRUD)
const ProjectsPage = () => {
   return (
      <div className='flex flex-col space-y-10 h-full'>
         <AddProjectForm />
         <Projects />
      </div>
   );
};

export default ProjectsPage;
