import { useEffect, useState } from 'react'
import Project from '../model/Project'
import { fetchProjects, updateProject } from '../services/ProjectService';
import Column from './Column'
import './board.css';
import { count } from 'console';

function Board() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [updatedProject, setUpdatedProject] = useState<Project>();
    const [updatedCategory, setUpdatedCategory] = useState<string>('');

    function loadProjects() {
        fetchProjects().then(setProjects);
    }

    useEffect(loadProjects, []);

    function handleDragStart(project: Project): void {
        setUpdatedProject(project);
    }
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
    function handleDragEnter(category: string) {
        console.log('entering')
        let newProject: any = '';
        setUpdatedCategory(category);
        
        newProject = updatedProject;
        newProject.category = category;

        newProject ? updateProject(newProject._id, newProject) : console.log('no go');

        loadProjects();
}

const handleDreamFilter = () => {
    return projects.filter(x => x.category === 'dream').length
}
const handleSoonFilter = () => {
    return projects.filter(x => x.category === 'comingSoon').length
}
const handleUrgentFilter = () => {
    return projects.filter(x => x.category === 'urgent').length
}
const handleProgressFilter = () => {
    return projects.filter(x => x.category === 'inProgress').length
}
const handleCompleteFilter = () => {
    return projects.filter(x => x.category === 'complete').length
}
useEffect(() =>{
    handleDreamFilter();
    handleSoonFilter();
    handleUrgentFilter();
    handleProgressFilter();
    handleCompleteFilter();

}, [projects])
let dreams = handleDreamFilter();
let soon = handleSoonFilter();
let urgent = handleUrgentFilter();
let progress = handleProgressFilter();
let complete = handleCompleteFilter();
    let dreamPercent:number = Math.round((dreams / projects.length) * 100) / 100 * 100 ? Math.round((dreams / projects.length) * 100) / 100 * 100 : 0;
    let soonPercent: number = Math.round((soon / projects.length) * 100) / 100 * 100 ? Math.round((soon / projects.length) * 100) / 100 * 100 : 0;
    let urgentPercent: number = Math.round((urgent/ projects.length) * 100) / 100 * 100 ? Math.round((urgent / projects.length) * 100) / 100 * 100 : 0;
    let progressPercent:number = Math.round((progress/ projects.length) * 100) / 100 * 100 ? Math.round((progress / projects.length) * 100) / 100 * 100 : 0;
    let completePercent: number = Math.round((complete / projects.length) * 100) / 100 * 100 ? Math.round((complete / projects.length) * 100) / 100 * 100 : 0;
    
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


            <div>
                <h2>Stats</h2>
                <div className ="stat-area">
                    <div>
                        <p className="stat-label">Dream</p>
                        <div className="stat-sheet" style={{width: `${dreamPercent}%`, backgroundColor: `blueviolet`} }>{dreams} </div>
                    </div>
                    <div>
                        <p className="stat-label">Coming Soon</p>
                        <div className="stat-sheet" style={{width: `${soonPercent}%`, backgroundColor: `yellow`} }>{soon} </div>
                    </div>
                    <div>
                        <p className="stat-label">Urgent</p>
                        <div className="stat-sheet" style={{width: `${urgentPercent}%`, backgroundColor: `red`} }>{urgent} </div>
                    </div>
                    <div>
                        <p className="stat-label">In Progress</p>
                        <div className="stat-sheet" style={{width: `${progressPercent}%`, backgroundColor: `orange`} }>{progress} </div>
                    </div>
                    <div>
                        <p className="stat-label">Complete</p>
                        <div className="stat-sheet" style={{width: `${completePercent}%`, backgroundColor: `green`} }>{complete} </div> 
                    </div>
                
                
                
                
                
                </div>
                
                
            </div>
            
            
            
            
            
        </div>
    )
}

export default Board
