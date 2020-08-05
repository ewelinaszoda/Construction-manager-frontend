import React from 'react'
import Button from '@material-ui/core/Button';

const AddNoteButton = props => {
  return (
  <div>
    <span>
      <Button variant="outlined" color="secondary"
        onClick={props.addNote}
      >
        ADD NOTE
            </Button>
    </span>

  </div>
  )}

export default AddNoteButton