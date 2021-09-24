import { FormEvent, useState } from "react";
import { useAuthUser } from "../Context/auth-context";
import Project from "../model/Project";
import { addProject } from "../services/ProjectService";
import "../styles/Form.css";

interface Props {
  onAdd?: (project: Project) => void
}

function Form({ onAdd }: Props) {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ label, setLabel ] = useState("none");
  const [ category, setCategory ] = useState("dream");
  //const [ priority, setPriority ] = useState(0);
  const [ outdoor, setOutdoor ] = useState(false);
  const [ completed, setCompleted ] = useState(false);

  const user: any = useAuthUser();

  //uses addProject from services to do a post request to the api using the state of the above 
  //to determine the values being sent to the database
  //then we reset the form
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  
    const uid = user.uid;

    addProject({
      
      name, description, label, outdoor, completed, uid, category

    }).then(onAdd);
    setName("");
    setDescription("");
    setLabel("none");
    setCategory("dream");
    //setPriority(0);
    setCompleted(false);
    setOutdoor(false);
  }

  return (
    <div className="centering-div">
    <form className="ProjectForm" onSubmit={handleSubmit}>
      <h3>Add a Project</h3>
     
        <div className="ProjectForm__option  nameOption">
            {/* <label htmlFor="ProjectForm__name">Project Name</label> */}
            <input className="ProjectForm__input" type="text" id="ProjectForm__name" placeholder="Project Name" value={name} required minLength={2} onChange={e => setName(e.target.value)} />
        </div>

        <div className="ProjectForm__option descriptionOption">
            {/* <label htmlFor="ProjectForm__description">Description</label> */}
            <textarea className="ProjectForm__input" id="ProjectForm__description" placeholder="Project Description" value={description}  onChange={e => setDescription(e.target.value)} rows={4}/>
        </div>

        <div className="ProjectForm__option categoryOption">
            {/* <label htmlFor="category">Category</label> */}
            <select className="ProjectForm__input" id="category" name="category" onChange={ (e) => setCategory(e.target.value) } required>
              <option value="" disabled selected hidden>Select a Category</option>
              <option value="dream">Dream Project</option>
              <option value="comingSoon">Coming Soon</option>
              <option value="urgent">Urgent</option>
              <option value="inProgress">In Progress</option>
              <option value="complete">Complete</option>
            </select>
            
        </div>

        <div className="ProjectForm__option labelOption">
            {/* <p>Label</p> */}
            <div>
              <input type="radio" name="label" id="none" value="none" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="none">None</label>
            </div>
            <div>
              <input type="radio" name="label" id="kitchen" value="kitchen" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="kitchen">Kitchen</label>
            </div>
            <div>
              <input type="radio" name="label" id="bath" value="bath" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="bath">Bath</label>
            </div>
            <div>
              <input type="radio" name="label" id="bedroom" value="bedroom" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="bedroom">Bedroom</label><br></br>
            </div>
            <div>
              <input type="radio" name="label" id="living" value="living" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="living">Living Room</label>
            </div>
            <div>
              <input type="radio" name="label" id="basement" value="basement" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="basement">Basement</label>
            </div>
            <div>
              <input type="radio" name="label" id="office" value="office" onChange={ (e) => setLabel(e.target.value) }/>
              <label htmlFor="office">Home Office</label>
            </div>
        </div>

        {/* <div className="ProjectForm__option priorityOption">
            <p>Priority</p>
            <input type="radio" name="priority" id="low" onChange={ (e) => setPriority(0) }/>
            <label htmlFor="low">Wish List</label>
            <input type="radio" name="priority" id="medium" onChange={ (e) => setPriority(1) }/>
            <label htmlFor="medium">Coming Soon</label>
            <input type="radio" name="priority" id="high" onChange={ (e) => setPriority(2) }/>
            <label htmlFor="high">Up Next</label>
        </div> */}

        <div className="ProjectForm__option outdoorOption">
            {/* <p>Indoor or Outdoor</p> */}
            <input type="radio" name="inOrOut" id="indoor" onChange={ (e) => setOutdoor(false) }/>
            <label htmlFor="indoor">Indoor</label>
            <input type="radio" name="inOrOut" id="outdoor" onChange={ (e) => setOutdoor(true) }/>
            <label htmlFor="outdoor">Outdoor</label>
        </div>

        <div>
            <button className="ProjectForm__button">Submit</button>
        </div>
    </form>
    </div>
  );
}

export default Form;