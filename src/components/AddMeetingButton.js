import React from 'react'
import Button from '@material-ui/core/Button';

const AddMeetingButton = props => {
  return (
  <div>
    <span>
      <Button variant="outlined" color="secondary"
        onClick={props.addMeeting}
      >
        ADD MEETING
            </Button>
    </span>

  </div>
  )}

export default AddMeetingButton