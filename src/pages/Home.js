import React, { useState, useEffect } from 'react'
// import PrimarySearchAppBarWithoutSearchProject from "../layout/PrimarySearchAppBarWithoutSearchProject.js"
import PrimarySearchAppBarWithSearchMeeting  from "../layout/PrimarySearchAppBarWithSearchMeeting.js"
import GetCurrentDate from "../components/GetCurrentDate.js"
import Box from '@material-ui/core/Box';
import API from "../API"
// import Weather from "../components/Weather"
import Calendar from "../components/Calendar"
import Footer from "../layout/Footer"
import MeetingsContainer from "../containers/MeetingsContainer"

const Home = (props) => {

  const [meetings, setMeetings] = useState([])
  const [userSearch, setUserSearch] = useState("")

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

  const updateUserSearch = (e) => {
    setUserSearch(e.target.value)
  }

  const filterMeetings = () => {
    return meetings.filter(meeting => meeting.title.toUpperCase().includes(userSearch.toUpperCase()))
  }

  return (
    <div>
      {/* <PrimarySearchAppBarWithoutSearchProject */}
      <PrimarySearchAppBarWithSearchMeeting 
      logOut={props.logOut} 
      updateUserSearch={updateUserSearch}
      userSearch={userSearch}
      />
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
      <MeetingsContainer meetings={filterMeetings()}
      // meetings={meetings} 
      />
      <Footer />
    </div>
  )

}
export default Home