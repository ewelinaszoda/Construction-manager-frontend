import React from "react";
import Box from '@material-ui/core/Box';
import ProjectCard from './ProjectCard';

export default function ProjectsList({ projects, removeProject, addMeetingToProject, addNoteToProject }) {

  const renderProjectCard = () => {

    return projects.map(project =>
      < ProjectCard
        key={project.id}
        project={project}
        removeProject={removeProject}
        addMeetingToProject={addMeetingToProject}
        addNoteToProject={addNoteToProject}
      />
    )
  }

  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {renderProjectCard()}
    </Box>
  )
}
