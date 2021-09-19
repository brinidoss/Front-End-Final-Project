import { useEffect, useState } from "react";
import Project from "../model/Project";
import ProjectCard from "./ProjectCard";
import './Column.css';
import { fetchProjects } from "../services/ProjectService";

interface Props {
    category: string;
}

function Column({category}: Props) {

    const [projects, setProjects] = useState<Project[]>([]);
    
      function loadProjects() {
          fetchProjects().then(setProjects);
      }

      useEffect(loadProjects, [category]);

    console.log(projects);

    // function handleDragStart(e: any) {
    //     console.log(e.target);
    //     console.log(category);
    // }

    return (
        <div className="Column"
            onDragOver={(e) => console.log(category)}
        >
            
            {projects.filter(project => project.category === category).map((project, index) => 
            
            <ProjectCard
            key={`${index}`}
            project={project}
            index={index}
            />
            )}
        </div>
    )
}

export default Column;
