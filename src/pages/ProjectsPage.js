import React, { useState, useEffect } from 'react'
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar"
import Box from '@material-ui/core/Box';
import ProjectsList from "../components/ProjectsList"
import API from "../API.js"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from "../styles/Typography"
import Footer from "../layout/Footer"

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

  const addMeetingToProject = (projectId, meetingObj) => {
    const newProjects = [...projects];
    const currentProject = newProjects.find(p => p.id === projectId);
    currentProject.meetings = [...currentProject.meetings, meetingObj];
    setProjects(newProjects)
  }

  const addNoteToProject = (projectId, noteObj) => {
    const newProjects = [...projects];
    const currentProject = newProjects.find(p => p.id === projectId);
    currentProject.notes = [...currentProject.notes, noteObj];
    setProjects(newProjects)
  }

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
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '30px' }}
            // style={{ color: ' #2987c7', margin: "30px"}} 
            // style={{ color: '#6cbe45', margin: "30px"}} 
            >
              ADD PROJECT
            </Button>
          </Link>
        </div>
        <br></br>
        <Box
          style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <ProjectsList projects={filterProjects()} removeProject={removeProject} addMeetingToProject={addMeetingToProject} addNoteToProject={addNoteToProject} />
        </Box>
      </>
      <Footer />
    </>
  )
}
