import React from "react"
import Box from '@material-ui/core/Box';

const Meeting = ({ meeting }) => {

  return (
    <div style={{ width: '100%' }}>
      <Box bgcolor="background.paper">
      <div>
        {/* <h3>{meeting.project.name}</h3> */}
        <h3>{meeting.title}</h3>
        <h3>{meeting.date}</h3>
        <h3>{meeting.start_time}</h3>
        <h3>{meeting.end_time}</h3>
        <h3>{meeting.location}</h3>
        <h3>{meeting.description}</h3>
      </div>
      </Box>
    </div >
  )

}
export default Meeting;