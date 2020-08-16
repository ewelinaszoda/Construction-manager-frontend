import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  //   alignContent: 'center'
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
  //   marginBottom: 12,
  },
  button: {
    color: ""
  }
});

const Meeting = ({ meeting }) => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <Box bgcolor="background.paper"
        display="flex"
        flexWrap="nowrap"
        p={2}
        m={2}
        css={{
          maxWidth: 300,
          margin: "20px",
          display: "inline-block",
        }}
      >
        <Box p={1}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                TITLE:
              </Typography>
              <Typography variant="h4" component="h2" align="center" style={{ color: '#243c8c' }}>
              {meeting.title}
                </Typography>
                <br></br>
              <Typography variant="h5" component="h2">
                {bull}{meeting.date}{bull}{meeting.start_time}{bull}
              </Typography>
              <br></br>
              <Typography className={classes.pos} color="textSecondary">
                LOCATION:  
                </Typography>
                <Typography variant="h5" component="h2" align="center" style={{ color: '#243c8c' }}>
                {meeting.location}
                </Typography>
                <br></br>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.button} onClick={handleClick}>SHOW DESCRIPTION</Button>
            </CardActions>
            <CardActions>
              {showDetails
                ? <h3>{meeting.description}</h3>
                : null}
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  )
}
export default Meeting;