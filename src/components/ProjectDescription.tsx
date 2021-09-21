import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Project from "../model/Project";
import { deleteProject, fetchProjects } from "../services/ProjectService";
import './ProjectDescription.css';


 interface RouteParams {
        id: string;
    }

function ProjectDescription() {

    const [projects, setProjects] = useState<Project[]>([]);
    const { id } = useParams<RouteParams>();
    
    function handleDelete(_id: any) {
        deleteProject(_id);


    }
    //fetch projects using the function from services again
    function loadProjects() {
        fetchProjects().then(setProjects);
    }

    useEffect(loadProjects, []);

    //the id appears in the url and we use Params and the find method to find the specific project by id
    const foundProject: Project | undefined = projects.find((project) => project._id === id);

    return (
        <div className="ProjectDescription">
            <div className="ProjectDescription__Container">
                <h2>{foundProject?.name}</h2>
                <p>{foundProject?.label}</p>
                <p>{foundProject?.description}</p>

                <button onClick={()=>handleDelete(foundProject?._id)}>Delete</button>
            </div>    
        </div>
    )
}

export default ProjectDescription;
