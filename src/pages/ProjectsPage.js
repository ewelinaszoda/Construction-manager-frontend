import React, {useState, useEffect} from 'react'
import PrimarySearchAppBar from "../components/PrimarySearchAppBar.js"
import Box from '@material-ui/core/Box';
import ListProjects from "../components/ListProjects.js"
import DetailsProject from "../components/DetailsProject.js"
import API from "../API.js"

export default function ProjectsPage({logOut}) {

  const[projects, setProjects] = useState([])
  const[projectId, setProjectId] = useState(null)

  useEffect(() => {
    API.getProjects()
    .then(projects => setProjects(projects.projects))
    .catch(error => console.log(error.message))
  }, [])

  const removeProject = (id) => {
    setProjects(projects.filter(projectId => projectId !== id))
  }

  const myProject = () => {
    return projects.filter(project => projects.includes(project.id))
  }

  const handleClick = (id) => {
    setProjectId({projectId: id})
  }

  return (
    <>
      <Box height="1vh"></Box>
      <PrimarySearchAppBar logOut={logOut} />
     Your Projects
     <Box>
     <ListProjects projects={projects} handleClick={handleClick} removeProject={removeProject} myProject={myProject}/>
     <div>
     { projectId && <DetailsProject projectId={projectId} />}
     </div>
     </Box>
    </>
  )
  
}