import { useEffect, useState } from 'react'
import Project from '../model/Project'
import { fetchProjects, updateProject } from '../services/ProjectService';
import Column from './Column'

function Board() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [updatedProject, setUpdatedProject] = useState<Project>();
    const [updatedCategory, setUpdatedCategory] = useState<string>('');

    function loadProjects() {
        fetchProjects().then(setProjects);
    }

    useEffect(loadProjects, []);

    function handleDragStart(project: Project): void {
        setUpdatedProject(project);
    }

    function handleOnDrop(category: string): void {
        let newProject: any = '';
        setUpdatedCategory(category);

        // updatedProject ? 
        // setUpdatedProject(prevUpdatedProject => ({   <== so pretty to look at,
        //     updatedProject: {                            but it doesn't work :(
        //         ...prevUpdatedProject,                   how you set state of 
        //         category: updatedCategory                a property of an object
        //     }
        // }))
        // : console.log('not going to happen');

        newProject = updatedProject;
        newProject.category = category;

        newProject ? updateProject(newProject._id, newProject) : console.log('no go');

        loadProjects();
        
    }

    return (
        <div className="Board">
            <Column projects={projects} category='dream' handleOnDragStart={ handleDragStart } handleOnDrop={() => handleOnDrop('dream')}/>
            <Column projects={projects} category='comingSoon' handleOnDragStart={ handleDragStart } handleOnDrop={() => handleOnDrop('comingSoon')}/>
            <Column projects={projects} category='urgent' handleOnDragStart={ handleDragStart } handleOnDrop={() => handleOnDrop('urgent')}/>
            <Column projects={projects} category='inProgress' handleOnDragStart={ handleDragStart } handleOnDrop={() => handleOnDrop('inProgress')}/>
            
        </div>
    )
}

export default Board
