import React from "react"
import MeetingsContainer from "../container/MeetingsContainer.js"
import NotesContainer from "../container/NotesContainer.js"
import Box from '@material-ui/core/Box';

const MeetingsNotesContainer = () => {

  return (
    <div style={{ width: '100%' }}>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        <MeetingsContainer />
        <NotesContainer />
      </Box>
    </div >
  )

}

export default MeetingsNotesContainer