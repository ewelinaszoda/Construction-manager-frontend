import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../API';
import NewMeetingForm from "../forms/NewMeetingForm"
import NewNoteForm from "../forms/NewNoteForm"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  }
});

const ProjectCard = ({ project, removeProject, addMeetingToProject, addNoteToProject }) => {

  const classes = useStyles();

  const [showDetails, setShowDetails] = useState(false)
  const [addMeeting, setAddMeeting] = useState(false)
  const [addNote, setAddNote] = useState(false)

  // RENDER MEETINGS

  const renderMeetings = () => {
    return (
      <div>
        {project.meetings.map((meeting) => renderOneMeeting(meeting))}
      </div>
    )
  }

  // RENDER NOTES

  const renderNotes = () => {
    return (
      <div>
        {project.notes.map((note) => renderOneNote(note))}
      </div>
    )
  }

  const renderOneNote = (note) => {
    return (
      <div>

        <h5>{note.title}</h5>
        <h5>{note.description}</h5>
      </div>
    )
  }

  const renderOneMeeting = (meeting) => {
    return (
      <div>
        <h5>{meeting.title}</h5>
        <h5>{meeting.date}</h5>
        <h5>{meeting.start_time}</h5>
        {/* <h5>{meeting.end_time}</h5> */}
        <h5>{meeting.location}</h5>
        <h5>{meeting.description}</h5>
      </div>
    )
  }

  // RENDER DETAILS 

  const renderDetails = () => {
    return (
      <div>
        <h5>{project.project_manager}</h5>
        <h5>{project.site_manager}</h5>
        <h5>{project.project_manager}</h5>
      </div>
    )
  }

  // HANDLERS FUNCTIONS

  const handleDeleteProject = () => {
    removeProject(project.id);
    API.deleteProject(project.id)
      .then(resp => resp.json())
      .catch(err => console.error(err))
  }

  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  const handleAddMeeting = () => {
    setAddMeeting(!addMeeting)

  }

  const handleAddNote = () => {
    setAddNote(!addNote)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title="Project Image"
        >
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          SHOW DETAILS
        </Button>
        <Button size="small" color="primary" onClick={handleDeleteProject}>
          DELETE PROJECT
        </Button>
      </CardActions>
      <CardActions>
        {showDetails
          ? <div>
            <>
              <h3>CONTACTS</h3>
              <>{renderDetails()}</>
            </>
            <>
              <h3>MEETINGS</h3>
              <Button variant="outlined" color="primary" onClick={handleAddMeeting} >
                ADD MEETING
              </Button>

              {addMeeting

                ? <NewMeetingForm project={project} addMeetingToProject={addMeetingToProject} />
                : null
              }

              <>{renderMeetings()}</>
            </>
            <>
              <h2>NOTES</h2>
              <Button variant="outlined" color="primary" onClick={handleAddNote}>
                ADD NOTE
              </Button>
              {addNote

                ? <NewNoteForm project={project} addNoteToProject={addNoteToProject} />
                : null
              }
              {/* {addNote && <NewNoteForm project={project}  />} */}
              <>{renderNotes()}</>
            </>
          </div>
          : null
        }
      </CardActions>
    </Card>
  );
}

export default ProjectCard


// import React, { useState } from 'react'
// // import Box from '@material-ui/core/Box';

// const ProjectCard = ({ project, removeProject }) => {

//   const [showDetails, setShowDetails] = useState(false)

//   const handleClick = () => {
//     setShowDetails(!showDetails)
//   }

//   const renderDetails = () => {
//     return (
//       <div>
//         <h3>{project.address}</h3>
//         <image scr={project.image} alt="image" />
//         <h3>{project.description}</h3>
//         <h3>{project.project_manager}</h3>
//       </div>
//     )
//   }

//   return (
//     <div onClick={handleClick}>
//       <h2>{project.name}</h2>
//       <img alt="project" src={project.image} />
//       {
//         showDetails
//           ? renderDetails()
//           : null
//       }
//     </div>
//   )
// }




