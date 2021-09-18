import React from 'react'
import Project from '../model/Project'
import './ProjectCard.css';

export interface Props {
    project: Project;
    index: number;
    //handleDragStart: (e: any) => void;
    //selectedProject: Project;
    //dropzone: string;
}

function ProjectCard({project, index }: Props) {

    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
           draggable.classList.add('dragging');
           //console.log(project.name);
        })
    })

    function handleDragStart(e: any) {
        console.log('hooo');
        console.log(e.target);
        console.log(project.name);
        console.log(project._id);
        console.log(project);
        //console.log(dropzone);

   }
    

    return (
        <div className="ProjectCard">
            <div className="ProjectCard__card draggable" draggable='true'
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => console.log('hmm')}
            onDragOver={(e) => e.preventDefault()}
            >
                <p>{project.name}</p>
                <p>{project.category}</p>
            </div>
            
        </div>
    )
}

export default ProjectCard
