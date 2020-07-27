import React from "react"
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Account = ({ user }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {user.name}'s Details
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}{user.name}{bull}{user.surname}{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Email: {user.email}
        </Typography>
        <Typography variant="body2" component="p">
        Phone: {user.phone_number}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/users/${user.id}/edit`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="secondary" >
            EDIT USER
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Account


















// const Account = ({ user }) => {

//   return (
//     <>
//       <Box height="1vh">
//         User Details
//     <br></br>
//         <br></br>
//         <div>Name: {user.name}</div>
//         <div>Surname: {user.surname}</div>
//         <div>Email: {user.email}</div>
//         <div>Phone phone_number: {user.phone_number}</div>
//         <Link to={`/users/${user.id}/edit`} style={{ textDecoration: 'none' }}>
//           <Button variant="outlined" color="secondary" >
//             EDIT USER
//           </Button>
//         </Link>
//       </Box>
//     </>
//   )

// }
