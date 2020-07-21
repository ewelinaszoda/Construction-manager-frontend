import React from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function ListProjects({ projects, handleClick }) {

  const renderProject = () => {

    return (
      <ul>
        {projects.map(project =>
          <li
            key={project.id}
            project={project}
            onClick={() => handleClick(project.id)}
          >
            {project.name}
          </li>
        )
        }
      </ul>
    )
  }

  return (
    <Box>
      <>
        {renderProject()}
      </>     
      <Button variant="outlined" color="secondary">
        ADD PROJECT
      </Button>
      </Box>



  )
}


