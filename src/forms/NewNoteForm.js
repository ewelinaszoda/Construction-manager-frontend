import React, { useState } from 'react'
import API from '../API'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from "../styles/Typography"

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

const NewNoteForm = (props) => {

  const classes = useStyles();

  const [title, setTitle] = useState("")
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
           New Note Form
        </Typography>
        <br></br>
          <form className={classes.container} noValidate
            onSubmit={(e) => {
              props.addNoteToProject(props.project.id, {
                project_id: props.project.id,
                title,
                description,
              });
              API.submitNewNote(e, {
                project_id: props.project.id,
                title,
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
                Create Note
            </Button>
            </Grid>
          </form>
        </div>
        : null
      }
    </>
  );
}

export default NewNoteForm