import React, {useState} from "react";
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import {AppRoute, PrivateRoute} from './components/Routes';
import {SignInPage, Home, ProjectsPage} from './pages';
import {CreateUserContext, emptyUser} from './context/CurrentUserContext';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

// const SignContext = React.createContext()


export const App = () => {
  const user = useState(emptyUser());

  return (
    <CreateUserContext.Provider value={user}>
      <div className="app">
        <Router>
          <Switch>
            <AppRoute path="/" exact component={SignInPage} />
            <PrivateRoute path="/home" exact component={Home}/>
            <PrivateRoute path="/projects" exact component={ProjectsPage}/>
          </Switch>
        </Router>
        
        {/* {this.state.user
        ? <MainPages logOut={this.logOut} />
        : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp}/>} 
        <MainPages logOut={this.logOut} /> */}
      </div>
    </CreateUserContext.Provider>
  )


  // state = {
  //   user: null,
  //   projects: null,
  // }

  // componentDidMount() {
  //   if (localStorage.token) {
  //     API.validate(localStorage.token)
  //       .then(json => {
  //         this.signIn(json.user, json.token)
  //       })
  //   }
  // }

  // signUp = (user) => {
  //   this.setState({
  //     user
  //   })
  // }

  // signIn = (user, token) => {
  //   this.setState({
  //     user
  //   })
  //   localStorage.token = token
  // }

  // logOut = () => {
  //   this.setState({
  //     user: null
  //   })
  //   localStorage.removeItem("token")
  // }
}
