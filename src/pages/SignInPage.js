import React, { useState, useContext } from 'react';
// import React, { createContext } from 'react';
// import API from "../API"
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// for class function
// import { withStyles } from "@material-ui/core/styles";
// for Hook use makeStyles
import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/logo.png";
// import API from "../API"
import { post, SIGN_IN_URL } from '../utils/api-helpers';
import { CreateUserContext } from '../context/CurrentUserContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Construction Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  logo: {
    height: '15%',
    width: '15%',
  },
  image: {
    backgroundImage: 'url(https://shanetraylen.com/wp-content/uploads/2019/02/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignInPage = () => {

  const classes = useStyles();

  const { push } = useHistory();
  const [, setUser] = useContext(CreateUserContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    error: null
  })

  // state = {
  //   email: "",
  //   password: "",
  // }


  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await post(SIGN_IN_URL, state);

      setUser(response);
      localStorage.setItem('accessToken', response.token);
      push('/home');
    }
    catch (error) {
      setState({ ...state, error: error.message })
      console.error(error.message);

      // event.target.reset();
      // API.signIn(this.state)
      //   .then(jso => {
      //     this.props.signIn(jso.user, jso.token)
      //   })
      //   .catch(error => console.log(error.message))
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={logo} alt="Logo" className={classes.logo} />
          {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon /> 
             </Avatar>  */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}