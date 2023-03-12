import React from 'react';
import { IProject } from '../types/model';

interface Props {
   projects: IProject[];
   getProjects: () => Promise<void>;
   loading: boolean;
}

const Projects = ({ projects, getProjects, loading }: Props) => {
   return <div className='container p-10'></div>;
};

export default Projects;
