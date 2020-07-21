import React from "react";
import 'fontsource-roboto';
import API from "./API"
import MainPages from './pages/MainPages';
import SignInSignUpPages from './pages/SignInSignUpPages';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

// const SignContext = React.createContext()


export default class App extends React.Component {

  state = {
    user: null,
    projects: null,
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(json => {
          this.signIn(json.user, json.token)
        })
    }
  }


  signUp = (user) => {
    this.setState({
      user
    })
  }

  signIn = (user, token) => {
    this.setState({
      user
    })
    localStorage.token = token
  }

  logOut = () => {
    this.setState({
      user: null
    })
    localStorage.removeItem("token")
  }


  render() {
    return (
      <div>
         {this.state.user
        ? <MainPages logOut={this.logOut} />
        : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp}/>} 
        {/* <MainPages logOut={this.logOut} /> */}
      </div>
    )
  }
}

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
