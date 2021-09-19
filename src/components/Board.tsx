import { useEffect, useState } from 'react'
import Project from '../model/Project'
import { fetchProjects, updateProject } from '../services/ProjectService';
import Column from './Column'
import './board.css';
import { count } from 'console';

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
    function handleDragEnter(category: string) {
        console.log('entering')
        let newProject: any = '';
        setUpdatedCategory(category);
        
        newProject = updatedProject;
        newProject.category = category;

        newProject ? updateProject(newProject._id, newProject) : console.log('no go');

        loadProjects();
}

    return (
        <div className="Board">
            <div>
                <div className="colum-box">
                    <h2>Dream</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('dream')}} >
                <Column category='dream' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('dream')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
                
                
            </div>
            <div>
                <div className="colum-box">
                    <h2>Coming Soon</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('comingSoon')}} >
                <Column category='comingSoon' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('comingSoon')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                 <div className="colum-box">
                    <h2>Urgent</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('urgent')}} >
                <Column category='urgent' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('urgent')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                <div className="colum-box">
                    <h2>In Progress</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('inProgress')}} >
                <Column category='inProgress' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('inProgress')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                <div className="colum-box">
                    <h2>Complete</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('complete')}} className="complete">
                <Column category='complete' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('complete')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            
            
            
            
            
        </div>
    )
}

export default Board
