import React from "react"
import Meeting from "../components/Meeting"
import Typography from "../styles/Typography"

const MeetingsContainer = ({ meetings }) => {

  const renderMeetingCard = () => {
    if (meetings) {
      return meetings.map(meeting =>
        < Meeting
          key={meeting.id}
          meeting={meeting} 
        />
      )
    }
    return null;
  }

  return (
    <>
      <Typography variant="h4" marked="center" align="center" component="h2">
        YOUR MEETINGS
      </Typography>
      <br></br>
      <br></br>
        <>
          {renderMeetingCard()}
        </>
    </>
  )

}
export default MeetingsContainer;