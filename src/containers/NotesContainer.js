import React from "react"
import Box from '@material-ui/core/Box';
import Note from  "../components/Note.js"

const NotesContainer = ({project}) => {

  const renderNoteCard = () => {
    return project.notes.map(note =>
      < Note
        key={note.id}
       note={note}
      />
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <h3>Notes</h3>
      <Box bgcolor="background.paper">
      <>
        {renderNoteCard()}
      </>
      </Box>
    </div >
  )

}
export default NotesContainer;