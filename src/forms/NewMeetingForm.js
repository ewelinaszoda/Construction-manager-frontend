import React, { useState } from 'react'
import API from '../API'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { withStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';
// import { Redirect } from 'react-router'
// import logo from "../images/logo.png";
// import Copyright from "../components/Copyright"
// import stylesSignUp from "../styles/stylesSignUp"



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const NewMeetingForm = (props) => {

  const classes = useStyles();

  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date())
  const [start_time, setStart_time] = useState("")
  // const [end_time, setEnd_time] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const [formSubmitted, setFormSubmitted] = useState(false)

  const submitForm = () => {
    setFormSubmitted(!formSubmitted)
  }

  return (
    <>
      {!formSubmitted ?
        <div>
          <br></br>
          <br></br>
          <Typography component="h3" variant="h6" align="center">
           New Meeting Form
        </Typography>
        <br></br>
          <form className={classes.container} noValidate
            onSubmit={(e) => {
              props.addMeetingToProject(props.project.id, {
                project_id: props.project.id,
                title,
                date,
                start_time,
                // end_time,
                location,
                description,
              });
              API.submitNewMeeting(e, {
                project_id: props.project.id,
                title,
                date,
                start_time,
                // end_time,
                location,
                description,
              }, submitForm)
            }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="title"
                    name="title"
                    variant="outlined"
                    required
                    fullWidth
                    id="title"
                    label="title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="date"
                  name="date"
                  variant="outlined"
                  required
                  fullWidth
                  id="datetime-local"
                  label="Date"
                  autoFocus
                  type="date"
                  value={date}
                  className={classes.textField}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="start_time"
                  name="start_time"
                  variant="outlined"
                  // required
                  // fullWidth
                  id="start_time"
                  placeholder="00:00"
                  label="Time"
                  autoFocus
                  value={start_time}
                  onChange={(e) => setStart_time(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  autoFocus
                  name="location"
                  autoComplete="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  placeholder="Maximum 500 characters."
                  name="description"
                  autoComplete="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                value="create user"
              >
                Create Meeting
            </Button>
            </Grid>
          </form>
        </div>
        : null
      }
    </>
  );
}


export default NewMeetingForm
