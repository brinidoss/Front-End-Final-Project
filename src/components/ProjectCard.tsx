import { Link } from 'react-router-dom';
import Project from '../model/Project'
import './ProjectCard.css';

export interface Props {
    project: Project;
    index: number;
    handleOnDragStart: () => void;
    
}

function ProjectCard({project, index, handleOnDragStart}: Props) {

    //determining the style based on label
let styleCard: string = '';

const handleCardStyle = () => {
    switch (project.label){
        case ('none'):
            styleCard = 'none';
            break;
        case ('kitchen'):
            styleCard = 'kitchen';
            break;
        case ('bath'):
            styleCard = 'bath';
            break;
        case ('bedroom'):
            styleCard = 'bedroom';
            break;
        case ('basement'):
            styleCard = 'basement';
            break;
        case ('office'):
            styleCard = 'office';
            break;
        case ('living'):
            styleCard = 'living';
            break;
    }
    return styleCard;
}
// useEffect(() =>{
//     handleCardStyle()
// }, []);
// tried putting in use effect and no luck

handleCardStyle();

//this is the child of the Column componenet, which is the child of Board 
//the individual project is passed down as a prop
//this level is responsible for gathering data for which project is being updated
//we also create a link to the project description based on the id

return (
        <div className={`ProjectCard`}>
            <div className={`ProjectCard__card draggable ${styleCard} ${project.outdoor? `outdoor`: `indoor`}`} 
            draggable
            onDragStart={ handleOnDragStart }
            onDragOver={(e) => e.preventDefault()}
            
            >

                <p className="project-name">{project.name}</p>
                
                <div className="btn-container">
                    <Link to={`/Board/${project._id}`}>
                        <button className="editBtn">Info</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard
