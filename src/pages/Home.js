import React, { useState, useEffect } from 'react'
import PrimarySearchAppBarWithoutSearchProject from "../layout/PrimarySearchAppBarWithoutSearchProject.js"
import GetCurrentDate from "../components/GetCurrentDate.js"
import Box from '@material-ui/core/Box';
import API from "../API"
// import Weather from "../components/Weather"
import Calendar from "../components/Calendar"
import Footer from "../layout/Footer"
import MeetingsContainer from "../containers/MeetingsContainer"

const Home = (props) => {

  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    API.getMyMeetings()
      .then(meetings => {
        setMeetings(meetings)
      })
      .catch(error => {
        console.error('OH NO')
        setMeetings([])
        console.log(error.message)
      })
  }, [])

  return (
    <div>
      <PrimarySearchAppBarWithoutSearchProject logOut={props.logOut} />
      <br></br>
      <Box>
      <GetCurrentDate />
      </Box>
      {/* <Weather /> */}
      <div className="title-calendar">
        <div className="logo-calendar">
          <div className="icon">date_range</div>
          <span>
          {props.user.name}<b>Calendar</b>
          </span>
        </div>
      </div>
      <div className="calendar-container">
        <Calendar
        />
        <br></br>
        <br></br>
      </div>
      <MeetingsContainer meetings={meetings} />
      <Footer />
    </div>
  )

}
export default Home