import React from "react";
import Box from '@material-ui/core/Box';
import ProjectCard from './ProjectCard';

export default function ProjectsList({ projects, removeProject }) {

  const renderProjectCard = () => {

    return projects.map(project =>
      < ProjectCard
        key={project.id}
        project={project}
        removeProject = {removeProject}
      />
    )
  }

  return (
    <Box>
      <>
        {renderProjectCard()}
      </>
    </Box>

  )
}