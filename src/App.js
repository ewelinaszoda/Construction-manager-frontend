import React from "react";
import 'fontsource-roboto';
import API from "./API"
import AuthPages from './pages/AuthPages';
import SignInSignUpPages from './pages/SignInSignUpPages';

export default class App extends React.Component {

  state = {
    user: null,
    projects: null,
    errors: []
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(jso => {
          if (jso.user) {
            this.signIn(jso.user, jso.token)
          } else {
            console.log("Invalid token")
          }
        })
    }
  }

  signUp = (user) => {
    this.setState({
      user: user
    })
  }

  signIn = (user, token) => {
    this.setState({
      user: user
    })
    localStorage.token = token
  }

  logOut = () => {
    this.setState({
      user: null
    })
    localStorage.removeItem("token")
  }

  // handlePostAuth = (userInfo) => {
  //   if (userInfo.error) {
  //     alert(userInfo.error)
  //   } else {
  //     setUser(userInfo.user)
  //     if (userInfo.jwt) localStorage.setItem('jwt', userInfo.jwt)
  //   } 
  // }

  // handlePostAuth = (userInfo) => {
  //   if (userInfo.error) {
  //     alert(userInfo.error)
  //   } else {
  //     this.setState({uer: userInfo.user})
  //     if (userInfo.jwt) localStorage.setItem('jwt', userInfo.jwt)
  //   } 
  // }


  render() {

    return (
      <div>
        {
          this.state.user
            ? <AuthPages logOut={this.logOut} user={this.state.user} />
            : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp} />
        }
      </div>
    )
  }
}
