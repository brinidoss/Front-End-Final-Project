import axios from "axios";
import Project from "../model/Project";

// const baseUrl = "<URL FOR YOUR BACKEND API>";
const baseUrl = 'https://us-central1-home-improv-projects.cloudfunctions.net/api/projects';

export function fetchProjects() : Promise<Project[]> {
  return axios.get(`${baseUrl}`)
  .then(res => res.data)
}

export function addProject(project:Project) : Promise<Project> {
  return axios.post(`${baseUrl}`, project).then(res => res.data);
}

export function fetchProjectsTo(user: string) : Promise<Project[]> {
  return axios.get(`${baseUrl}`, {
    params: { to: user }
  })
  .then(res => res.data)
}