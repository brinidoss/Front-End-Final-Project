import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../components/HomePage.css"
import Project from "../model/Project";
import { fetchProjects } from "../services/ProjectService";
import NewProject from "../images/NewProject.png";
import ProjectBoard from "../images/ProjectBoard.png";



function HomePage() {
    const [projects, setProjects] = useState<Project[]>([]);

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

    function loadProjects() {
        fetchProjects().then(setProjects);
    }

    useEffect(loadProjects, []);





    
    
    
    return (
        <div className="parent">
            <div className ="stat-area-home">
                    <div>
                        <p className="stat-label-home">Dream</p>
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
            <div className="test-btn">
               <div className="brdbtn">
            <NavLink to="/Board"><img className="homepage1" src={ProjectBoard} alt="project board pix"/></NavLink>
            {/* <button className="boardBtn">Go to Board</button> */}
            </div> 
            <div className="projbtn">
            <NavLink to="/Form"><img className="homepage" src={NewProject} alt="newproject pix"/></NavLink>
            
            {/* <button className="ProjectBtn">New Project</button> */}
            </div>
            </div>
        </div> 
    );
  }

export default HomePage;