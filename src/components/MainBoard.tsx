import { useEffect, useState } from "react";
import { Interface } from "readline";
import Project from "../model/Project";
import '../components/MainBoard.css';

interface Props {
    data: Project[]
}


function Board({data}: Props) {
    const [projects, setProjects] = useState<Project[]>([]);
    console.log(projects);

    useEffect(() => {
          setProjects(data);
    }, [data]);
 


    console.log(projects);
    

    //Filter by category 
    console.log(projects);
    console.log(data);

    let indoorProjects = projects.filter(x => x.outdoor === false)
    console.log(indoorProjects);

    let outdoorProjects = projects.filter(x => x.outdoor === true)
    console.log(outdoorProjects);

    let dreamProjects = projects.filter(x => x.category === "dream")
    console.log(dreamProjects);


    return(
        <div className="Board">

            <div className="Indoor">
                <div>
                    <h3>Indoor</h3>
                </div>
                <div>
                    {indoorProjects.map((proj, index) => 
                    <div key={`${index}`} className="Project-Card">{proj.name}</div>)}
                </div>
                
            </div>
            <div className="Outdoor">
                <div>
                    <h3>Outdoor</h3>
                </div>
                <div>
                    {outdoorProjects.map((proj, index) => 
                    <div key={`${index}`} className="Project-Card">{proj.name}</div>)}
                </div>
                
            </div>
            <div className="Dream">
                <div>
                    <h3>Dream</h3>
                </div>
                <div>
                    {dreamProjects.map((proj, index) => 
                    <div key={`${index}`} className="Project-Card">{proj.name}</div>)}
                </div>
                
            </div>


            
        
        </div>
    );
}

export default Board;
