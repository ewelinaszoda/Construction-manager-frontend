import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
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
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
      <Container>
      <Grid container spacing={2}>
        <Typography variant="h6" marked="left" gutterBottom style={{color: "grey"}}>
           The app built by Ewelina Szoda
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-end"
            className={classes.iconsWrapper}
            spacing={2}
          >
            <Grid item className={classes.icons}>
              <Link  style={{color: "grey"}} href="https://github.com/ewelinaszoda" target="_blank" >
                <GitHubIcon /> GitHub
              </Link>
            </Grid>

            <Grid item className={classes.icons}>
              <Link style={{color: "grey"}} href="https://www.linkedin.com/in/ewelina-szoda-a99000a4/" target="_blank" >
                <LinkedInIcon/> LinkedIn
              </Link>
            </Grid>

          </Grid>
          </Grid>
          <Grid item xs={6}>
          <Box mt={5}>
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <Copyright />
          </Box>
          </Grid>
          </Container>
      </footer>
      </>
  );
}