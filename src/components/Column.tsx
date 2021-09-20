import Project from "../model/Project";
import ProjectCard from "./ProjectCard";
import './Column.css';
import { useState } from "react";

interface Props {
    category: string;
    handleOnDragStart:(project: Project) => void;
    handleOnDrop:() => void;
    //handleOnDragOver:() => void;
    projects: Project[];
}





function Column({category, handleOnDragStart, handleOnDrop, projects}: Props) {

    // const [collapse, setCollapse] = useState<Boolean>(true);
    // const [height, setHeight] = useState<String>('min');

    // const columnParentDiv:any = document.querySelector<Element>('.Column');

    // function handleOnDragOver(): void {
    //     // setCollapse(!collapse);
    //     // console.log(collapse);
    //    console.log('hello there');
    //     console.log(columnParentDiv.hasChildNodes());
    //     console.log(projects.filter(project => project.category === category).length);
 

    //     // if (height === "min") {
    //     //     setHeight('max'); 
    //     // } else {
    //     //     setHeight('min');
    //     // }
    // }
    


    return (
        <div className="Column"
           onDragEnter={ handleOnDrop }
           //onDragOver={ handleOnDragOver }
        >

            {projects.filter(project => project.category === category).map((project, index) => 
            <ProjectCard
                key={`${index}`}
                project={project}
                index={index}
                handleOnDragStart={() => handleOnDragStart(project)}
                
            />
            )}
        </div>
    )
}

export default Column;
