import React from "react"
import MeetingsContainer from "./MeetingsContainer.js"
import NotesContainer from "./NotesContainer.js"
import Box from '@material-ui/core/Box';

const MeetingsNotesContainer = () => {

  return (
    <div style={{ width: '100%' }}>
      <Box>
        <MeetingsContainer />
        <NotesContainer />
      </Box>
    </div >
  )

}

export default MeetingsNotesContainer