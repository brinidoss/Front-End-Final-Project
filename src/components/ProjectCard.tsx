import Project from '../model/Project'
import './ProjectCard.css';

export interface Props {
    project: Project;
    index: number;
    handleOnDragStart: () => void;
}

function ProjectCard({project, index, handleOnDragStart }: Props) {

//    let dreamCard = '';
//    let soon = '';
//    let urgent = '';
//    let inProgress = '';

//    if(project.label === 'none'){
//        dreamCard = 'none'
//    }
//    else if(project.category === 'comingSoon'){
//         soon = 'soon'
//    }
//    else if(project.category === 'urgent'){
//     soon = 'urgent'
//     }
//     else if(project.category === 'inProgress'){
//     soon = 'progress'
// }
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

return (
        <div className="ProjectCard">
            <div className={`ProjectCard__card draggable ${styleCard}`} draggable='true'
            onDragStart={ handleOnDragStart }
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
