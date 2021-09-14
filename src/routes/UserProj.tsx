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



      {/* <h2>Shout Outs for {user}</h2>
      <p>
        <Link to="/">Back to All Shoutouts</Link>
      </p> */}

      {/* <ShoutOutList shoutOuts={projects} />
      <AddShoutOutForm initialTo={user} onAdd={loadProjects}/> */}
    </div>
  );
}

export default UserProjectRoute;