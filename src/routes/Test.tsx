import React, { useEffect, useState } from 'react'
import MainBoard from '../components/MainBoard';
import ProjectBoard from '../components/ProjectBoard';
import Project from '../model/Project';
import { fetchProjects } from '../services/ProjectService'

function Test() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    useEffect(loadProjects, [])

    


  
    function loadProjects() {
      fetchProjects().then(setProjects);
      console.log('hello');
    }
    console.log(projects);

    return (
        <div className="TestRoute">
            <ProjectBoard data={projects}/>
        </div>
    )
}

export default Test
