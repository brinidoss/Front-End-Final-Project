import { useEffect, useState } from "react";


import Project from "../model/Project";
import { fetchProjects} from "../services/ProjectService";

// interface RouteParams {
//   user: string
// }

function UserProjectRoute() {
  const [ projects, setProjects ] = useState<Project[]>([]);
//   const { user } = useParams<RouteParams>();
//   useEffect(loadProjects, [user])


//   function loadProjects() {
//     fetchProjectsTo(user).then(setProjects);
//   }
  function loadGetProjects() {
    fetchProjects().then(setProjects);
  }

  console.log(loadGetProjects());

 

  return (
    <div className="UserProj">
        <h1>Hello World</h1>

    </div>
  );
}

export default UserProjectRoute;