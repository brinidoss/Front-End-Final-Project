import { FormEvent, useState } from "react";
import Project from "../model/Project";
import { addProject } from "../services/ProjectService";

interface Props {
  onAdd?: (project: Project) => void
}

function Form({ onAdd }: Props) {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ label, setLabel ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ priority, setPriority ] = useState(0);
  const [ outdoor, setOutdoor ] = useState(false);
  const [ completed, setCompleted ] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addProject({
      name, description, label, category, priority, outdoor, completed
    }).then(onAdd);
    setName("");
    setDescription("");
    setLabel("");
    setCategory("");
    setPriority(0);
    setCompleted(false);
    setOutdoor(false);
  }

  return (
    <form className="ProjectForm" onSubmit={handleSubmit}>
      <h3>Add a Project</h3>
     
        <div className="ProjectForm__option  nameOption">
            <label htmlFor="ProjectForm__name">Project Name</label>
            <input type="text" id="ProjectForm__name" value={name} required minLength={2} onChange={e => setName(e.target.value)} />
        </div>

        <div className="ProjectForm__option descriptionOption">
            <label htmlFor="ProjectForm__description">Description</label>
            <textarea id="ProjectForm__description" value={description}  onChange={e => setDescription(e.target.value)} rows={4}/>
        </div>

        <div className="ProjectForm__option categoryOption">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={ (e) => setCategory(e.target.value) }>
              <option value="dream">Dream Project</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="upNext">Up Next</option>
              <option value="inProgress">In Progress</option>

            </select>
            
        </div>

        <div className="ProjectForm__option labelOption">
            <p>Label</p>
            <input type="radio" name="label" id="kitchen" value="kitchen" onChange={ (e) => setLabel(e.target.value) }/>
            <label htmlFor="kitchen">Kitchen</label>
            <input type="radio" name="label" id="bath" value="bath" onChange={ (e) => setLabel(e.target.value) }/>
            <label htmlFor="bath">Bath</label>
            <input type="radio" name="label" id="bedroom" value="bedroom" onChange={ (e) => setLabel(e.target.value) }/>
            <label htmlFor="bedroom">Bedroom</label>
            <input type="radio" name="label" id="living" value="living" onChange={ (e) => setLabel(e.target.value) }/>
            <label htmlFor="living">Living Room</label>
            <input type="radio" name="label" id="basement" value="basement" onChange={ (e) => setLabel(e.target.value) }/>
            <label htmlFor="basement">Basement</label>
        </div>

        <div className="ProjectForm__option priorityOption">
            <p>Priority</p>
            <input type="radio" name="priority" id="low" onChange={ (e) => setPriority(0) }/>
            <label htmlFor="low">Wish List</label>
            <input type="radio" name="priority" id="medium" onChange={ (e) => setPriority(1) }/>
            <label htmlFor="medium">Coming Soon</label>
            <input type="radio" name="priority" id="high" onChange={ (e) => setPriority(2) }/>
            <label htmlFor="high">Up Next</label>
        </div>

        <div className="ProjectForm__option outdoorOption">
            <p>Indoor or Outdoor</p>
            <input type="radio" name="inOrOut" id="indoor" onChange={ (e) => setOutdoor(false) }/>
            <label htmlFor="indoor">Indoor</label>
            <input type="radio" name="inOrOut" id="outdoor" onChange={ (e) => setOutdoor(true) }/>
            <label htmlFor="outdoor">Outdoor</label>
        </div>

        <div>
            <button>Submit</button>
        </div>
    </form>
  );
}

export default Form;