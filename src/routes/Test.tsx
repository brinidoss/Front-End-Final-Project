import React, { useEffect, useState } from 'react'
import ProjectBoard from '../components/ProjectBoard';
import Project from '../model/Project';
import { fetchProjects } from '../services/ProjectService'

function Test() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    useEffect(loadProjects , [])

    


  
    function loadProjects() {
      fetchProjects().then(setProjects);
      console.log(projects)

    }

    console.log(projects);

    return (
        <div className="TestRoute">
            <ProjectBoard/>
        </div>
    )
}

export default Test
