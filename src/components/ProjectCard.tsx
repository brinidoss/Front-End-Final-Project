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
   let dreamCard = '';
   let soon = '';
   let urgent = '';
   let inProgress = '';

   if(project.category === 'dream'){
       dreamCard = 'dream'
   }
   else if(project.category === 'comingSoon'){
        soon = 'soon'
   }
   else if(project.category === 'urgent'){
    soon = 'urgent'
    }
    else if(project.category === 'inProgress'){
    soon = 'progress'
}


   
    

    return (
        <div className="ProjectCard">
            <div className={`ProjectCard__card draggable ${dreamCard} ${soon} ${urgent} ${inProgress}`} draggable='true'
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => console.log('hmm')}
            onDragOver={(e) => e.preventDefault()}
            >

                <p>{project.name}</p>
                
                <div className="btn-container">
                    <button className="editBtn">Edit</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default ProjectCard
