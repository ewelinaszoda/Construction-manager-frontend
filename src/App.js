import React from "react";
import 'fontsource-roboto';
import API from "./API"
import AuthPages from './pages/AuthPages';
import SignInSignUpPages from './pages/SignInSignUpPages';

export default class App extends React.Component {

  state = {
    user: null,
    projects: null,
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

  render() {

    return (
      <div>
        {this.state.user
          ? <AuthPages logOut={this.logOut} user={this.state.user} />
          : <SignInSignUpPages signIn={this.signIn} signUp={this.signUp} />}
      </div>
    )
  }
}
