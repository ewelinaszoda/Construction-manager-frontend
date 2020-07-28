// import React from 'react'
import React, { useState, useEffect } from 'react'
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar.js"
import GetCurrentDate from "../components/GetCurrentDate.js"
// import MeetingsContainer from "../containers/MeetingsContainer"
import Box from '@material-ui/core/Box';
import API from "../API"

// import Weather from "../components/Weather"
import Calendar from "../components/Calendar"
import Footer from "../layout/Footer"

// import MeetingsFromApi from "../containers/MeetingsFromApi"
import MeetingsContainer from "../containers/MeetingsContainer"
// import MeetingsContainerFromAPI from "../containers/MeetingsContainerFromAPI"
import AddTripButton from '../components/AddTripButton'
import AnotherComponent from "../components/AnotherComponent"

const Home = (props) => {

  const [meetings, setMeetings] = useState([])
  // const [notes, setNotes]  = useState([]) 
  const [isEmptyState, setIsEmptyState] = useState(true)
  const [isAddMeetingState, setIsAddMeetingState] = useState(false)


  useEffect(() => {
    API.getMyMeetings()
      .then(meetings => {
        setMeetings(meetings)
      })
      .catch(error => console.log(error.message))
  }, [])

  // useEffect(() => {
  //   API.getMyNotes()
  //     .then(notes => {
  //       setNotes(notes)
  //     })
  //     .catch(error => console.log(error.message))
  // }, [])

  const triggerAddTripState = () => {
    setIsEmptyState(false)
    setIsAddMeetingState(true)
  }

  // const triggerAddMeetingState = () => {
  //   setIsEmptyState(false)
  //   setIsAddMeetingState(true)
  // }

  return (
    <div>
      <PrimarySearchAppBar logOut={props.logOut} />
      <br></br>
      <Box>
        Hi {props.user.name}!
      </Box>
      <GetCurrentDate />


      {/* <Weather /> */}

      <div className="title-calendar">
          <div className="logo-calendar">
            <div className="icon">date_range</div>
            <span>
              My<b>calendar</b>
            </span>
          </div>
        </div>
        <div className="calendar-container">
          <Calendar 
          // isEmptyState={isEmptyState} 
          // isAddMeetingState={isAddMeetingState}
          // meetings={meetings}
          // addMeeting={triggerAddMeetingState}
          />
          <br></br>
      <div>
      {isEmptyState && <AddTripButton addTrip={triggerAddTripState} />}

      {isAddMeetingState && <AnotherComponent />}
    </div>
        </div>
        {/* <MeetingsContainerFromAPI meetings={meetings} />  */}
      <MeetingsContainer meetings={meetings} />
      <Footer />

    </div>
  )

}
export default Home