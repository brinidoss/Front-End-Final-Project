import React, { useEffect, useState } from 'react'
import MainBoard from '../components/MainBoard';
import Project from '../model/Project';
import { fetchProjects } from '../services/ProjectService'

function Test() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    useEffect(loadProjects, [])

    const [fakeData, setFakeData] = useState([
        {   name: "Mow the Lawn",
            description: "Lots of Grass",
            outdoor: true,
            priority: 1
        },
        {
            name: "Paint the Master",
            description: "Lots of Paint",
            outdoor: false,
            priority: 1
        }
     
    ])


  
    function loadProjects() {
      fetchProjects().then(setProjects);
    }
    console.log(projects);

    return (
        <div className="TestRoute">
            <MainBoard data={projects}/>
        </div>
    )
}

export default Test
