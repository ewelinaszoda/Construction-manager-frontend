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


  // handleUpdateUser = (e) => {
  
  //   e.preventDefault();
  //   const userData = { name, surname, email, password, phone_number }
  //   console.log(userData)
  //   API.updateUserData(userData, user.id)
  //   .then(resp => handleResp(resp, "You details has been changed!"))
  //   // .then(resp => {
  //   //   debugger
  //   //   setName(resp.user.name)
  //   //   setSurname(resp.user.surname)
  //   //   setEmail(resp.user.email)
  //   //   setPassword(resp.user.password)
  //   //   setPhone_number(resp.user.phone_number)
  //   // })
  //   // .catch(err => console.error(err))
  //   .then(clearForm())
  //   .then(history.push('/account'))
  //   };



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
