import React, { useState } from 'react'
// import Box from '@material-ui/core/Box';

const ProjectCard = ({ project, removeProject }) => {

  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  const renderDetails = () => {
    return (
      <div>
        <h3>{project.address}</h3>
        <image scr={project.image} alt="image" />
        <h3>{project.description}</h3>
        <h3>{project.project_manager}</h3>
      </div>
    )
  }

  return (
    <div onClick={handleClick}>
      <h2>{project.name}</h2>
      <img alt="project" src={project.image} />
      {
        showDetails
          ? renderDetails()
          : null
      }
    </div>
  )
}

export default ProjectCard