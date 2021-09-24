import Project from "../model/Project";
import ProjectCard from "./ProjectCard";
import '../styles/Column.css';
import { useState } from "react";

interface Props {
    category: string;
    handleOnDragStart:(project: Project) => void;
    handleOnDrop:() => void;
    //handleOnDragOver:() => void;
    projects: Project[];
}


function Column({category, handleOnDragStart, handleOnDrop, projects}: Props) {

//this stage is responsible for retrieving the data for the drop handle function 
//we're targeting the category that a card is hovering over/ being dropped over
//this is also where we filter the projects array from the parent Board component and splitting it into separate 
//arrays based on category, then we map the individual projects as ProjectCard components
    return (
        <div className="Column"
           onDragEnter={ handleOnDrop }
           //onDragOver={ handleOnDragOver }
        >

            {projects.filter(project => project.category === category).map((project, index) => 
            <ProjectCard
                key={`${index}`}
                project={project}
                index={index}
                handleOnDragStart={() => handleOnDragStart(project)}
                
                
            />
            )}
        </div>
    )
}

export default Column;
