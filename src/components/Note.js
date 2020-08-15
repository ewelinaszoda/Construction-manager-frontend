import React from "react"
import Box from '@material-ui/core/Box';

const Note = ({note}) => {

  return (
    <div style={{ width: '100%' }}>
      <Box bgcolor="background.paper">
      <div>
        <h3>{note.title}</h3>
        <h3>{note.description}</h3>
      </div>
      </Box>
    </div >
  )

}
export default Note;