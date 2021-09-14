import axios from 'axios';
import { useEffect, useState } from 'react';



function TestProject() {

    
        const [filteredRecipes, setFilteredRecipes] = useState([]);
    
        const url = 'https://us-central1-home-improv-projects.cloudfunctions.net/api/projects';
      
        useEffect(() => {
            console.log('hi');
            axios.get(url).then((response) => {
                console.log(response.data);
                setFilteredRecipes(response.data);
            }) 
        }, []);
        
        
    
    

    console.log(filteredRecipes);
    
    return(
        <div className="Test">

            

        </div>



    );
    
    }
export default TestProject;