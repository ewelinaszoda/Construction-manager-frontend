import React from "react"
import Box from '@material-ui/core/Box';
import Note from  "../components/Note.js"

const NotesContainer = () => {

  return (
    <div style={{ width: '100%' }}>
      <h3>NOTES</h3>
      <Box>
        <Note/>
      </Box>
    </div >
  )

}
export default NotesContainer;