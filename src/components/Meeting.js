import React from "react"
import Box from '@material-ui/core/Box';

const Meeting = ({ meeting }) => {

  const parseDate = (date) => {
    const parsedDate = date.split('T')[1].split(".")[0].split(":")
    const interpolatedDate = `${parsedDate[0]}:${parsedDate[1]}`
    return interpolatedDate
  }

  return (
  
    <div style={{ width: '100%' }}>
      <Box bgcolor="background.paper">
        <div>
          <h3>TITLE: {meeting.title}</h3>
          <h3>DATE: {meeting.date}</h3>
          <h3>TIME: {parseDate(meeting.start_time)}</h3>
          {/* <h3>{meeting.end_time}</h3> */}
          <h3>LOCATION:{meeting.location}</h3>
          <h3>DESCRIPTION:{meeting.description}</h3>
          {/* <h3>PROJECT:{meeting.project.name}</h3> */}
        </div>
        <br></br>
        <br></br>
      </Box>
    </div >
  )

}
export default Meeting;