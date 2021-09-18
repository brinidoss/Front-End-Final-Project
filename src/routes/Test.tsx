import React, { useEffect, useState } from 'react'
import ProjectBoard from '../components/ProjectBoard';
import Project from '../model/Project';
import { fetchProjects, updateProject } from '../services/ProjectService'

function Test() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    useEffect(loadProjects , [])

    


  
    function loadProjects() {
      fetchProjects().then(setProjects);

    }

    console.log(projects);

    return (
        <div className="TestRoute">
            <ProjectBoard data={projects}/>
        </div>
    )
}

export default Test
