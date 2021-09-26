import { useEffect, useState } from 'react'
import Project from '../model/Project'
import { fetchProjects, updateProject } from '../services/ProjectService';
import Column from './Column';
import '../styles/board.css';
import { useAuthUser } from '../Context/auth-context';


function Board() {

    //me trying to figure this out - not from Kyle
    const user = useAuthUser();

    const [projects, setProjects] = useState<Project[]>([]);
    const [updatedProject, setUpdatedProject] = useState<Project>();
    const [updatedCategory, setUpdatedCategory] = useState<string>('');

    //create a new function that uses the services fetchProjects to set the state of the projects array
    function loadProjects() {
        if (user?.uid) {
            fetchProjects(user.uid).then(setProjects);
        }
        

        // if (user) {
        //     let userProjects = projects.filter(project => project.user?.uid === user.uid);
        //     setProjects(userProjects);
        //     console.log(user);
        //     console.log(user.uid);
        //     console.log(projects);
        // } else if (!user) {
        //     let nonUserProjects = projects.filter(project => project.user?.uid === false);
        //     setProjects(nonUserProjects);
        // }
       // }

    }

    //calls the above function when the component first renders
    useEffect(loadProjects, []);
    // useEffect(loadProjects, [user]);

    //loadProjects();

    //this function saves which project is being dragged so we know which one will be updated
    function handleDragStart(project: Project): void {
        setUpdatedProject(project);
    }
    
    // this function creates a new project that will be sent to the api with a put request to update the project 
    //based on the new category, updated category is captured by setting the state over the column where it is dropped
    //the category variable is taken from the prop passed down to Column.tsx from Board.tsx
    //once we create the new project to send to the api and change its category based on the category it is dropped over
    //we send the update to the api with the updateProject put request taken from services
    //then we load projects again to make sure the data is updated
    //card appears in new category because it has been updated in the database and the projects are filtered
     function handleOnDrop(category: string): void {
        let newProject: any = '';
        setUpdatedCategory(category);
        // updatedProject ? 
        // setUpdatedProject(prevUpdatedProject => ({   <== so pretty to look at,
        //     updatedProject: {                            but it doesn't work :(
        //         ...prevUpdatedProject,                   how you set state of 
        //         category: updatedCategory                a property of an object
        //     }
        // }))
        // : console.log('not going to happen');

        newProject = updatedProject;
        newProject.category = category;

        newProject ? updateProject(newProject._id, newProject) : console.log('no go');

        loadProjects();
        
    }

    //this function shows the card appearing in a category before it is dropped
    function handleDragEnter(category: string) {
        console.log('entering')
        let newProject: any = '';
        setUpdatedCategory(category);
        
        newProject = updatedProject;
        newProject.category = category;

        newProject ? updateProject(newProject._id, newProject) : console.log('no go');

        loadProjects();
}


    
//down below we are reusing the Column component for each category and passing the unique category down as a prop
//child components are passing back up the data we need to determine specific projects and categories that
//are being interacted with through the handle functions

    return (
        <div className="Board">
            <div>
                <div className="colum-box">
                    <h2>Dream</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('dream')}} >
                <Column category='dream' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('dream')}
                        //handleOnDragOver={ handleDragOver }
                />
                
                </div>
                
                
            </div>
            <div>
                <div className="colum-box">
                    <h2>Coming Soon</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('comingSoon')}} >
                <Column category='comingSoon' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('comingSoon')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                 <div className="colum-box">
                    <h2>Urgent</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('urgent')}} >
                <Column category='urgent' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('urgent')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                <div className="colum-box">
                    <h2>In Progress</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('inProgress')}} >
                <Column category='inProgress' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('inProgress')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>
            <div>
                <div className="colum-box">
                    <h2>Complete</h2>
                </div>
                <div onDragEnter={(e) => {handleDragEnter('complete')}} className="complete">
                <Column category='complete' 
                        projects={projects}
                        handleOnDragStart={ handleDragStart }
                        handleOnDrop={() => handleOnDrop('complete')}
                        //handleOnDragOver={ handleDragOver }
                />
                </div>
            </div>

            
        </div>
    )
}

export default Board
