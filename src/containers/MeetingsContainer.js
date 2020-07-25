import React from "react"
import Box from '@material-ui/core/Box';
import Meeting from  "../components/Meeting.js"

const MeetingsContainer = () => {



  return (
    <div style={{ width: '100%' }}>
      <h3>MEETINGS</h3>
      <Box bgcolor="background.paper">
        <Meeting />
      </Box>
    </div >
  )

}
export default MeetingsContainer;