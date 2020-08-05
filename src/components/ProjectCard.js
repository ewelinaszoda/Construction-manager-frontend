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
    margin: "20px",
    display: "inline-block",
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

  // PARSE DATE

  const parseDate = (date) => {
    const parsedDate = date.split('T')[1].split(".")[0].split(":")
    const interpolatedDate = `${parsedDate[0]}:${parsedDate[1]}`
    return interpolatedDate
  }


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
        <h5>Title: {meeting.title}</h5>
        <h5>Date: {meeting.date}</h5>
        <h5>Time: {meeting.start_time}</h5>
        {/* <h5>Time: {parseDate(meeting.start_time)}</h5> */}
        {/* <h5>{meeting.end_time}</h5> */}
        <h5>Location: {meeting.location}</h5>
        <h5>Description: {meeting.description}</h5>
      </div>
    )
  }

  // RENDER DETAILS 

  const renderDetails = () => {
    return (
      <div>
        <h5>Client: {project.client}</h5>
        <h5>Project Manager: {project.project_manager}</h5>
        <h5>Site Manager: {project.site_manager}</h5>
        <h5>Quantity Surveyor: {project.quantity_surveyor}</h5>
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
          <br></br>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          SHOW DETAILS
        </Button>
        <Button size="small"
          color="secondary"
          onClick={handleDeleteProject}>
          DELETE PROJECT
        </Button>
      </CardActions>
      <CardActions>
        {showDetails
          ? <div>
            <>
              <Typography variant="h6" component="h3" align="center" style={{ color: '#243c8c' }}>
                CONTACTS
              </Typography>
              <hr />
              <>{renderDetails()}</>
            </>
            <>
              <Typography variant="h6" component="h2" align="center" style={{ color: '#243c8c' }}>
                MEETINGS
              </Typography>
              <hr />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: '30px' }}
                onClick={handleAddMeeting}
              >
                ADD MEETING
              </Button>

              {addMeeting

                ? <NewMeetingForm project={project} addMeetingToProject={addMeetingToProject} />
                : null
              }

              <>{renderMeetings()}</>
            </>
            <br></br>
            <br></br>
            <>
              <Typography variant="h5" component="h2" align="center" style={{ color: '#243c8c' }}>
                NOTES
              </Typography>
              <hr />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: '30px' }}
                onClick={handleAddNote}>
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




