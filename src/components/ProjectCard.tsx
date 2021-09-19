import Project from '../model/Project'
import './ProjectCard.css';

export interface Props {
    project: Project;
    index: number;
    handleOnDragStart: () => void;
}

function ProjectCard({project, index, handleOnDragStart }: Props) {

    return (
        <div className="ProjectCard">
            <div className="ProjectCard__card draggable" draggable='true'
            onDragStart={ handleOnDragStart }
            onDragOver={(e) => e.preventDefault()}
            >
                <p>{project.name}</p>
                <p>{project.category}</p>
            </div>
        </div>
    )
}

export default ProjectCard
