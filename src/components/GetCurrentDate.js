import React from "react";
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
}))

const GetCurrentDate = () => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const date = new Date().toDateString();

  return (
    <>
      <br></br>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <>
          <Typography variant="h2" component="h2">
            {bull}  T{bull}O{bull}D{bull}A{bull}Y  {bull}
          </Typography>
        </>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" component="h2" style={{ color: '#ed644c' }}>
          {date}
        </Typography>
      </Box>
    </>
  );

}

export default GetCurrentDate;