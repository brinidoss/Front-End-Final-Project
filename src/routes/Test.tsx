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

    function updateOnClick() {
       // e.preventDefault();

        updateProject({
            name: 'Rose Garden',
            description: 'plant roses',
            label: 'none',
            outdoor: true,
            completed: false,
            user: null,
            category: 'inProgress'
        })

    console.log('hello there');
    };
    console.log(projects);

    return (
        <div className="TestRoute">
            <ProjectBoard data={projects}/>
            <button onClick={updateOnClick}>Update</button>
        </div>
    )
}

export default Test
