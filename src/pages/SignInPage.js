import React from 'react';
import API from "../API";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import logo from "../images/logo.png";
import Copyright from "../components/Copyright"
import stylesSignIn from "../styles/stylesSignIn"

class SignInPage extends React.Component {

  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    API.signIn(this.state)
      .then(jso => {
        if(jso.message) {
         alert(jso.message)
        } else  {
          this.props.signIn(jso.user, jso.token)
        }
      })

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: "",
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div 
          className={classes.paper}
          >
            <Avatar className={classes.avatar}
              src={logo}
              alt="logo"
            >
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to Construction Manager
          </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
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
                value={this.state.email}
                onChange={this.handleChange}
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
                value={this.state.password}
                onChange={this.handleChange}
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
}

export default withStyles(stylesSignIn)(SignInPage);