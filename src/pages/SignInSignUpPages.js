import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import SignInPage  from "./SignInPage"
import SignUpPage  from "./SignUpPage"

const SignInSignUpPages = (props) => {

  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUpPage signUp={props.signUp}/>
        </Route>
        <Route path="/">
          <SignInPage signIn={props.signIn}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default SignInSignUpPages