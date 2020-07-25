import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AccountPage from "./AccountPage"
import ProjectsPage from "./ProjectsPage"
import NewProjectForm  from "../forms/NewProjectForm"
import EditAccountForm  from "../forms/EditAccountForm"
import Home from "./Home"
import  { Redirect } from 'react-router-dom'

const MainPages = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home logOut={props.logOut} user={props.user}/>
        </Route>
        <Route exact path="/projects">
          <ProjectsPage logOut={props.logOut} user={props.user}/>
        </Route>
        <Route exact path="/new-project-form">
          <NewProjectForm logOut={props.logOut} user={props.user}/>
        </Route>
        <Route exact path="/account">
          <AccountPage logOut={props.logOut} user={props.user}/>
        </Route>
        <Route exact path="/users/:userId/edit">
          <EditAccountForm logOut={props.logOut} user={props.user}/>
        </Route>
      </Switch>
      <Redirect to="/home" />  
    </Router>
  )
}

export default MainPages 