import React, { useEffect, useState } from 'react'
import Project from '../model/Project';
import { fetchProjects } from '../services/ProjectService'

function Test() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    useEffect(loadProjects, [])
  
    function loadProjects() {
      fetchProjects().then(setProjects);
    }
    console.log(projects);

    return (
        <div className="TestRoute">
            <p>Find Your Projects Here</p>
            {projects.map((project, index) =>
            <p key={`${index}-${project.name}`}>{project.name}</p>    
            )}
        </div>
    )
}

export default Test
