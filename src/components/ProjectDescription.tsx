import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthUser } from "../Context/auth-context";
import Project from "../model/Project";
import { deleteProject, fetchProjects, updateProject } from "../services/ProjectService";
import './ProjectDescription.css';


 interface RouteParams {
        id: string;
    }

function ProjectDescription() {

const user = useAuthUser();
    const [projects, setProjects] = useState<Project[]>([]);
    const [updateName, setUpdateName] = useState(false);
    const [updateDesc, setUpdateDesc] = useState(false);
    const [updateCategory, setUpdateCategory] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams<RouteParams>();

    
    
    function handleDelete(_id: any) {
        deleteProject(_id);


    }
    //fetch projects using the function from services again
    function loadProjects() {
        if (user?.uid) {
            fetchProjects(user.uid).then(setProjects);
        };
    }

    function handleUpdate(e: FormEvent){
        e.preventDefault();
        let updatedProject: any = foundProject;

        
        updatedProject.name = name.length > 0 ? name : updatedProject?.name
        updatedProject.description = description.length > 0 ? description : updatedProject?.name
        updatedProject.category = category.length > 0 ? category : updatedProject?.name 
        
        updateProject(updatedProject._id, updatedProject);

        loadProjects();
        setUpdateName(false);
        setUpdateDesc(false);
        setUpdateCategory(false);
        console.log(name);
        console.log(updatedProject.name);
    }
    let style = '';

    function handleShowUpdate(){
        setUpdateName(!updateName);
        setUpdateDesc(!updateDesc);
        setUpdateCategory(!updateCategory);
        if(updateName === true){
            style = 'show';
        }
        else {
            style = 'hidden';
        }
        if (updateDesc === true ){
            style = 'show';
        }
        else {
            style = 'hidden';
        }
        if (updateCategory === true ){
            style = 'show';
        }
        else {
            style = 'hidden';
        }
    }

    useEffect(loadProjects, []);

    //the id appears in the url and we use Params and the find method to find the specific project by id
    const foundProject: Project | undefined = projects.find((project) => project._id === id);

    return (
        <div className="ProjectDescription">
            <div className="ProjectDescription__Container">
                <h2>{foundProject?.name}</h2>
                <button onClick={()=> handleShowUpdate()}>Edit</button>
                {updateName ? 
                <form className={style}  onSubmit={handleUpdate}>
                    <input value={`${name}`} onChange={(e) => setName(e.target.value)} type="text"/>
                 
                    <button>update</button>
        
                </form>
                : console.log('nothing')
                }
                

        
                <p>{foundProject?.label}</p>
                <p>{foundProject?.description}</p>
                {updateDesc ? 
                <form className={style}  onSubmit={handleUpdate}>
                    <input value={`${description}`} onChange={(e) => setDescription(e.target.value)} type="text"/>
                 
                    <button>update</button>
        
                </form>
                : console.log('nothing')
                }
                {updateCategory ?

                <form action="" onSubmit={handleUpdate}>
                    {/* <label htmlFor="category">Category</label> */}
                    <select className="ProjectForm__input" id="category" name="category" onChange={ (e) => setCategory(e.target.value) }>
                    <option value="" disabled selected hidden>Select a Category</option>
                    <option value="dream">Dream Project</option>
                    <option value="comingSoon">Coming Soon</option>
                    <option value="urgent">Urgent</option>
                    <option value="inProgress">In Progress</option>
                    <option value="complete">Complete</option>
                    </select>
                    <button>update</button>

                </form> :
                console.log('nope')
                
            
            }

                
            
            
        

                <button onClick={()=>handleDelete(foundProject?._id)}>Delete</button>
                
               
            </div>    
        </div>
    )
}

export default ProjectDescription;


