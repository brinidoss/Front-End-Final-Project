import Project from "../model/Project";
import ProjectCard from "./ProjectCard";
import './Column.css';

interface Props {
    category: string;
    handleOnDragStart:(project: Project) => void;
    handleOnDrop:() => void;
    projects: Project[];
}

function Column({category, handleOnDragStart, handleOnDrop, projects}: Props) {

    return (
        <div className="Column"
           onDrop={ handleOnDrop }
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
