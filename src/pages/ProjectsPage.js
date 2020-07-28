import React, { useState, useEffect } from 'react'
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar"
import Box from '@material-ui/core/Box';
import ProjectsList from "../components/ProjectsList"
// import Project from "../components/Project.js"
import API from "../API.js"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from "../styles/Typography"


export default function ProjectsPage({ logOut }) {

  const [projects, setProjects] = useState([])
  const [userSearch, setUserSearch] = useState("")


  // selectd ptoject 
  // conditional rendering 
  // see all details 
  // if selected project render that project.metting

  useEffect(() => {
    API.getMyProjects()
      .then(projects => {
        setProjects(projects)
      })
      .catch(error => console.log(error.message))
  }, [])

  const updateUserSearch = (e) => {
    setUserSearch(e.target.value)
  }

  const filterProjects = () => {
    return projects.filter(project => project.name.toUpperCase().includes(userSearch.toUpperCase()))
  }

  const removeProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  }

  return (
    <>
      <PrimarySearchAppBar
        logOut={logOut}
        updateUserSearch={updateUserSearch}
        userSearch={userSearch}
      />
      <>
      <br></br>
      <br></br>
      <Typography variant="h4" marked="center" align="center" component="h2">
        YOUR PROJECTS
      </Typography>
        <div>
          <Link to='/new-project-form' style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="secondary">
                ADD PROJECT
            </Button>
          </Link>
        </div>
      <Box>
        <ProjectsList projects={filterProjects()} removeProject={removeProject} />
      </Box>
      </>
    </>
  )

}
