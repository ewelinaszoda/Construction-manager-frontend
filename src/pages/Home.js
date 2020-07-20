import React from "react"
import PrimarySearchAppBar from "../components/PrimarySearchAppBar.js"
import GetCurrentDate from  "../components/GetCurrentDate.js"
import MeetingsNotesContainer from "../containers/MeetingsNotesContainer.js"

const Home = (props) => {

  return (
    <div>
      <PrimarySearchAppBar logOut={props.logOut} />
      <GetCurrentDate />
      <MeetingsNotesContainer />
    </div>
  )

}

export default Home