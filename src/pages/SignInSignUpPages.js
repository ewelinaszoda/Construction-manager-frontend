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
          <SignUpPage />
        </Route>
        <Route path="/">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default SignInSignUpPages