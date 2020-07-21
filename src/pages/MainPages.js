import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AccountPage from "./AccountPage"
import ProjectsPage from "./ProjectsPage"
import Home from "./Home"
import  { Redirect } from 'react-router-dom'

const MainPages = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home logOut={props.logOut} />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        <Route exact path="/account">
          <AccountPage />
        </Route>
        </Route>
      </Switch>
      <Redirect to="/home" />  
    </Router>
  )
}

export default MainPages 