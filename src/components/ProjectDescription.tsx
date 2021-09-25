import { FormEvent, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAuthUser } from "../Context/auth-context";
import Project from "../model/Project";
import { deleteProject, fetchProjects, updateProject } from "../services/ProjectService";
import '../styles/ProjectDescription.css';


 interface RouteParams {
        id: string;
    }

function ProjectDescription() {

const user = useAuthUser();
    const [projects, setProjects] = useState<Project[]>([]);
    const [updateName, setUpdateName] = useState(false);
    const [updateDesc, setUpdateDesc] = useState(false);
    const [updateCategory, setUpdateCategory] = useState(false);
    const [updateLabel, setUpdateLabel] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState('');
    const { id } = useParams<RouteParams>();

     //the id appears in the url and we use Params and the find method to find the specific project by id
     const foundProject: Project | undefined = projects.find((project) => project._id === id);

    
    
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

        
        updatedProject.name = name.length > 0 ? name : updatedProject?.name;
        updatedProject.description = description.length > 0 ? description : updatedProject?.description;
        updatedProject.category = category.length > 0 ? category : updatedProject?.category;
        updatedProject.label = label.length > 0 ? label : updatedProject?.label; 
        
        updateProject(updatedProject._id, updatedProject);

        loadProjects();
    
        setUpdateName(false);
        setUpdateDesc(false);
        setUpdateCategory(false);
        setUpdateLabel(false);
        console.log(name);
        console.log(updatedProject.name);
    }
    let style = '';

    function handleShowUpdate(){
        setUpdateName(!updateName);
        setUpdateDesc(!updateDesc);
        setUpdateCategory(!updateCategory);
        setUpdateLabel(!updateLabel);
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
        if (updateLabel === true ){
            style = 'show';
        }
        else {
            style = 'hidden';
        }
    }

    useEffect(loadProjects, []);

    // //the id appears in the url and we use Params and the find method to find the specific project by id
    // const foundProject: Project | undefined = projects.find((project) => project._id === id);

    return (
        <div className="ProjectDescription">
            <div className="ProjectDescription__Container">
                <div className="description-content"> 
                <div className="ProjectDescription__Header">
                    <h2>{name ? name : foundProject?.name}</h2>
                    <NavLink to="/Board" id="back-to-board">X</NavLink>
                </div>
                {updateName ? 
                <form className={`${style} form-flex`}  onSubmit={handleUpdate}>
                    <div>
                        <input className="desc-input" value={`${name}`} onChange={(e) => setName(e.target.value)} type="text" placeholder="Edit Project Name"/>
                    </div>
                    <div>
                        <button className="save-button">Save</button>
                    </div>
                </form>
                : console.log('nothing')
                }
                
                <div className="label-container">
                    <p className="description-label">{category ? category : foundProject?.category}</p>
                    <p className="description-label">{label ? label : foundProject?.label}</p>
                    
                </div>
                
                {updateCategory ?

                    <form className="form-flex" onSubmit={handleUpdate}>
                        {/* <label htmlFor="category">Category</label> */}
                        <div>
                            <select className="desc-input" id="category" name="category" onChange={ (e) => setCategory(e.target.value) }>
                                <option value="" disabled selected hidden>Select a Category</option>
                                <option value="dream">Dream Project</option>
                                <option value="comingSoon">Coming Soon</option>
                                <option value="urgent">Urgent</option>
                                <option value="inProgress">In Progress</option>
                                <option value="complete">Complete</option>
                        </select>
                        </div>
                        <div>
                            <button className="save-button">Save</button>
                        </div>
                    </form> :
                    console.log('nope')
                }
                
                {updateLabel ? 
                <form className="form-flex" onSubmit={handleUpdate} >
                {/* <p>Label</p> */}
                <div className="radio-content">
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="none" value="none" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="none">None</label>
                    </div>
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="kitchen" value="kitchen" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="kitchen">Kitchen</label>
                    </div>
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="bath" value="bath" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="bath">Bath</label>
                    </div>
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="bedroom" value="bedroom" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="bedroom">Bedroom</label><br></br>
                    </div>
                        <input className="desc-radio" type="radio" name="label" id="living" value="living" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="living">Living Room</label>
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="basement" value="basement" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="basement">Basement</label>
                    </div>
                    <div>
                        <input className="desc-radio" type="radio" name="label" id="office" value="office" onChange={ (e) => setLabel(e.target.value) }/>
                        <label htmlFor="office">Home Office</label>
                    </div>
                </div>
                <div>
                    <button className="save-button">Save</button>
                </div>
            </form>
            : console.log('nope')
            
                }
                <p className="descript">Description:</p> 
                <div className="descript description-div">{description ? description : foundProject?.description}</div>
                {updateDesc ? 
                <form className={`${style} form-flex`}  onSubmit={handleUpdate}>
                    <div>
                        <textarea className="desc-input" value={`${description}`} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Edit Project Description"/>
                    </div>
                    <div>
                        <button className="save-button">Save</button>
                    </div>
                </form>
                : console.log('nothing')
                }
                
            <div className="description-container-buttons">
                <button className="description-button" onClick={()=> handleShowUpdate()}>Edit</button>
                <button id="delete-button" className="description-button" onClick={()=>handleDelete(foundProject?._id)}>Delete</button>
            </div>
                </div>
                <div className="desc-one grid-item">
                    <div className="white-bottom"></div>
                </div>
                <div className="desc-two grid-item">
                    <div className="white-bottom"></div>
                </div>
                <div className="desc-three grid-item">
                    <div className="white-bottom"></div>
                </div>
                <div className="desc-four grid-item">
                    <div className="white-bottom"></div>
                </div>
            </div>    
           
        </div>
    )
}

export default ProjectDescription;


