import React, { useState, useEffect } from 'react'
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar.js"
import Box from '@material-ui/core/Box';
import ProjectsList from "../components/ProjectsList.js"
// import Project from "../components/Project.js"
import API from "../API.js"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function ProjectsPage({ logOut }) {

  const [projects, setProjects] = useState([])
  const [userSearch, setUserSearch] = useState("")

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
    setProjects(projects.filter(projectId => projectId !== id))
  }

  return (
    <>
      <PrimarySearchAppBar
        logOut={logOut}
        updateUserSearch={updateUserSearch}
        userSearch={userSearch}
      />
      <>
      <div>
        <h1>Your Projects</h1>
        <Link to='/new-project-form' style={{ textDecoration: 'none' }}>
          <span>
            <Button variant="outlined" color="secondary">
              ADD PROJECT
            </Button>
          </span>
        </Link>
        </div>
      </>
      <Box>
        <ProjectsList projects={filterProjects()} removeProject={removeProject} />
      </Box>
    </>
  )

}
