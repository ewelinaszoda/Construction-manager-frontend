import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import API from '../API';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  }
});

const ProjectCard = ({ project, removeProject }) => {

  const classes = useStyles();

  const [showDetails, setShowDetails] = useState(false)

  let history = useHistory();

  // PROJECT.MEETINGS
  // PROJECT.NOTES

  const handleClickMeetings = () => {
    history.push('/meetings')
  }

  const handleClickNotes = () => {
    history.push('/notes')
  }

  const renderMeetings = (project) => {
    project.meetings.forEach((meeting) => { renderOneMeeting(meeting) })
  }

  const renderNotes = (project) => {
    project.notes.forEach((note) => { renderOneNote(note) })
  }

  const renderOneMeeting = (meeting) => {
    return (
      <div>
        <h3>{meeting.project.name}</h3>
        <h3>{meeting.title}</h3>
        <h3>{meeting.date}</h3>
        <h3>{meeting.start_time}</h3>
        <h3>{meeting.end_time}</h3>
        <h3>{meeting.location}</h3>
        <h3>{meeting.description}</h3>
      </div>
    )
  }

  const renderOneNote = (note) => {
    return (
      <div>
        <h3>{note.project.name}</h3>
        <h3>{note.title}</h3>
        <h3>{note.description}</h3>
      </div>
    )
  }

  const handleDeleteProject = (e) => {
    e.preventDefault();
    API.deleteProject(project.id)
      .then(resp => resp())
      .catch(err => console.error(err))
  }

  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  const renderDetails = () => {
    return (
      <div>
        <h3>{project.project_manager}</h3>
        <h3>{project.site_manager}</h3>
        <h3>{project.project_manager}</h3>
      </div>
    )
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
          SHOW CONTACTS
        </Button>
        <Button size="small" color="primary" onClick={handleClickMeetings}>
          SEE MEETINGS
        </Button>
        <Button size="small" color="primary" onClick={handleClickNotes}>
          SEE NOTES
        </Button>
        <Button size="small" color="primary" onClick={handleDeleteProject}>
          DELETE PROJECT
        </Button>
        {
          showDetails
            ? renderDetails()
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




