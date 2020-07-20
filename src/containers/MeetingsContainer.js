import React from "react"
import Meeting from "../container/Meeting.js"
import Box from '@material-ui/core/Box';
import Meeting from  "../components/Meeting.js"

const MeetingsContainer = () => {

  return (
    <div style={{ width: '100%' }}>
      <h3>MEETINGS</h3>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        <Meeting />
      </Box>
    </div >
  )

}

export default MeetingsContainer