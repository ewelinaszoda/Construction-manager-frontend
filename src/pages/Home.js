import React from 'react'
// import React, { useState, useEffect } from 'react'
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar.js"
import GetCurrentDate from "../components/GetCurrentDate.js"
// import MeetingsNotesContainer from "../containers/MeetingsNotesContainer.js"
import Box from '@material-ui/core/Box';
// import API from "../API.js"
import Footer from "../layout/Footer"
import Calendar from "../containers/Calendar"

const Home = (props) => {

  // const [meetings, setMeetings] = useState([])
  // const [notes, setNotes]  = useState([]) 

  // useEffect(() => {
  //   API.getProjectMeetings()
  //     .then(meetings => {
  //       setMeetings(meetings)
  //     })
  //     .catch(error => console.log(error.message))
  // }, [])

  // useEffect(() => {
  //   API.getMyNotes()
  //     .then(notes => {
  //       setNotes(notes)
  //     })
  //     .catch(error => console.log(error.message))
  // }, [])


  return (
    <div>
      <Box height="1vh"></Box>
      <PrimarySearchAppBar logOut={props.logOut} />
      <br></br>
      <Box>
        Hi {props.user.name}!
      </Box>
      <GetCurrentDate />
      {/* <MeetingsNotesContainer meetings={meetings} notes={notes} /> */}
      <>
      <Calendar />
      </>
      <Footer/>

    </div>
  )

}
export default Home



<header>
<div id="logo">
  <span className="icon">date_range</span>
  <span>
    react<b>calendar</b>
  </span>
</div>
</header>
<main>
<Calendar />
</main>