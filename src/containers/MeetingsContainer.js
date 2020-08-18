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
      <div style={{
        // marginTop: '20px'
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
        {renderMeetingCard()}
      </div>
    </>
  )

}
export default MeetingsContainer;