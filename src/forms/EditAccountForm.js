import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

import API from '../API'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Construction Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditProfile({ handlePostAuth, user }) {
  const classes = useStyles();

  const [name, setName] = useState(user.name)
  const [surname, setSurname] = useState(user.surname)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [phone_number, setPhone_number] = useState(user.phone_number)
  
  let history = useHistory();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const userData = { name, surname, email, password, phone_number }
    console.log(userData)
    history.push('/account')
    API.updateUserInfo(userData, user.id)
    .then(resp => handlePostAuth(resp))
    clearForm();
  };

  

  const clearForm = () => {
    setName("")
    setSurname("")
    setEmail("")
    setPassword("")
    setPhone_number("")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={ handleUpdateUser }>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField 
               autoComplete="name"
               name="name"
               variant="outlined"
               required
               fullWidth
               id="firstName"
               label="First Name"
               autoFocus
               value={name}
               onChange={ (e) => setName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="surname"
                  autoComplete="lname"
                  value={surname}
                  onChange={ (e) => setSurname(e.target.value) }
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone number"
                  name="phone_number"
                  autoComplete="phone number"
                  value={phone_number}
                  onChange={ (e) => setPhone_number(e.target.value) }
                />
              </Grid>
            <Grid item xs={12}>
            <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={ (e) => setPassword(e.target.value) }
                />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="save changes"
          >
            Update Profile
          </Button>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}