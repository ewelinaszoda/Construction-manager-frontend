import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AccountPage from "./AccountPage"
import ProjectsPage from "./ProjectsPage"
import NewProjectForm from "../forms/NewProjectForm"
import EditAccountForm from "../forms/EditAccountForm"
import Home from "./Home"
import { Redirect } from 'react-router-dom'
// import NotFound404 from '../components/NotFound404'
import NotesContainer from "../containers/NotesContainer.js"
import MeetingsContainer from "../containers/MeetingsContainer";

const MainPages = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home logOut={props.logOut} user={props.user} />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage logOut={props.logOut} user={props.user} />
        </Route>
        <Route exact path="/new-project-form">
          <NewProjectForm logOut={props.logOut} user={props.user} />
        </Route>
        <Route path="/projects/:projectId/meetings"
          render={routeProps => (
            <MeetingsContainer logOut={props.logOut} user={props.user} {...routeProps} />
          )}
        >
        </Route>

        <Route path="/projects/:projectId/notes">
          <NotesContainer logOut={props.logOut} user={props.user} />
        </Route>

        <Route exact path="/account">
          <AccountPage logOut={props.logOut} user={props.user} />
        </Route>
        <Route exact path="/users/:userId/edit">
          <EditAccountForm logOut={props.logOut} user={props.user} updateState={props.updateState} />
        </Route>
        {/* <Route path="*">
          <NotFound404 />
        </Route> */}
      </Switch>
      <Redirect to="/home" />
    </Router>
  )
}

export default MainPages 