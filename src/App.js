import React, { useState, useEffect } from "react";
import API from './API'
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AppRoute, PrivateRoute } from './components/Routes';
import { SignInPage, Home, ProjectsPage } from './pages';
import { CreateUserContext, emptyUser } from './context/CurrentUserContext';
// import API from "./API"
// import MainPages from './pages/MainPages';
// import SignInSignUpPages from './pages/SignInSignUpPages';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

// const SignContext = React.createContext()


export const App = () => {

  const user = useState(emptyUser())

  const [state, setState] = useState({
    user: null,
    projects: null,
  })

  // state = {
  //   user: null,
  //   projects: null,
  // }

  useEffect(() => {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(json => signIn(json.user, json.token))
    }
  }, [])

  const signUp = (user) => {
    setState({
      user
    })
  }

  const signIn = (user, token) => {
    setState({
      user
    })
    localStorage.token = token
  }

  const logOut = () => {
    setState({
      user: null
    })
    localStorage.removeItem("token")
  }

  return (
    <CreateUserContext.Provider value={user}>
      <div className="app">
        <Router>
          <Switch>
            <AppRoute path="/" exact component={SignInPage} signUp={signUp} signIn={signIn}/>
            <PrivateRoute path="/home" exact component={Home} logOut={logOut} user={state.user} />
            <PrivateRoute path="/projects" exact component={ProjectsPage} />
          </Switch>
        </Router>

        {/* {this.state.user
        ? <MainPages logOut={this.logOut} />
        : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp}/>} 
        <MainPages logOut={this.logOut} /> */}
      </div>
    </CreateUserContext.Provider>
  )
}

  // componentDidMount() {
  //   if (localStorage.token) {
  //     API.validate(localStorage.token)
  //       .then(json => {
  //         this.signIn(json.user, json.token)
  //       })
  //   }
  // }


  //   return (
  //     <div>
  //       {state.user
  //         ? <MainPages logOut={this.logOut} />
  //         : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp} />}
  //       {/* <MainPages logOut={this.logOut} /> */}
  //     </div>
  //   )
  // }


// export { SignContext };

// render() {
//   return (
//     <SignContext.Provider signIn={this.signIn} signUp={this.signUp}>
//        {this.state.user
//       ? <MainPages logOut={this.logOut} />
//       : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp}/>} 
//       {/* <MainPages logOut={this.logOut} /> */}
//     </SignContext.Provider>
//   )
// }
// }
