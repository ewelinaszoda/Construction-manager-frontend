import React from "react"
import PrimarySearchAppBar from "../components/PrimarySearchAppBar.js"
import GetCurrentDate from  "../components/GetCurrentDate.js"
import MeetingsNotesContainer from "../containers/MeetingsNotesContainer.js"
import Box from '@material-ui/core/Box';

const Home = (props) => {

  return (
    <div>
      <Box height="1vh"></Box>
      <PrimarySearchAppBar logOut={props.logOut} />
      <GetCurrentDate />
      <MeetingsNotesContainer />
    </div>
  )

}
export default Home