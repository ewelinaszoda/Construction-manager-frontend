import BackgroundImage from '../images/backgroundSignIn.jpg';


const stylesSingIn = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://shanetraylen.com/wp-content/uploads/2019/02/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg)',
    // backgroundImage: 'url(https://shanetraylen.com/wp-content/uploads/2019/02/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg)',
    backgroundImage: `url(${BackgroundImage})`,
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
    width: theme.spacing(7),
    height: theme.spacing(7),
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
})

export default stylesSingIn
