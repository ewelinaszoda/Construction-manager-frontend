import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AccountPage from "./AccountPage"
import ProjectsPage from "./ProjectsPage"
import Home from "./Home"

const MainPages = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        <Route exact path="/account">
          <AccountPage />
        </Route>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainPages 