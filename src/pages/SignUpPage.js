import React from 'react';
import API from "../API"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router'
import logo from "../images/logo.png";

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

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '25%',
    width: '25%',
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
});


class SignUpPage extends React.Component {

  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone_number: "",
    redirectToSingInPage: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  // JOE WAY
  // handleCreate = (event) => {
  //   event.preventDefault();
  //   event.target.reset();
  //   API.signUp(this.state)
  //     .then(res => {
  //       localStorage.setItem("jwt", res.jwt);
  //       return res;
  //     })
  //     .catch(error => console.log(error.message))

  // };

  //DAN WAY
  // handleCreate = (event) => {
  //   event.preventDefault();
  //   const { name, surname, email, password, phone_number } = this.state;
  //   const userData = { name, surname, email, password, phone_number };
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({ user: userData }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("jwt", res.jwt);
  //       return res;
  //     })
  //     .catch(error => console.log(error.message))
  // };
  
  handleCreate = (e) => {
    e.preventDefault();
    const { name, surname, email, password, phone_number } = this.state;
    const userData = { name, surname, email, password, phone_number };
    API.signUp(userData)
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("jwt", res.jwt);
      return res;
    })
    this.setState({ redirectToSingInPage: true})
    // this.clearForm();
    // .then(this.redirectToSingInPage())
  };

  clearForm = () => {
    this.setState({ name: "" })
    this.setState({ surname: "" })
    this.setState({ email: "" })
    this.setState({ password: "" })
    this.setState({ phone_number: "" })
  }

  render() {
// debugger
    const { classes } = this.props;
    const redirectToSingInPage = this.state.redirectToSingInPage 

    if ( redirectToSingInPage === true ) {
      return <Redirect to= "/" />
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={logo} alt="Logo" className={classes.logo} />
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <br></br>
          <Typography component="h1" variant="h5">
            Sign up to Construction Manager
        </Typography>
          <form className={classes.form} onSubmit={this.handleCreate}>
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
                  value={this.state.name}
                  onChange={this.handleChange}
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
                  value={this.state.surname}
                  onChange={this.handleChange}
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
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  value={this.state.phone_number}
                  onChange={this.handleChange}
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
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                value="create user"
              >
                Sign up 
            </Button>
            </Link>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUpPage);





