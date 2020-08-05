import React from 'react'
import Button from '@material-ui/core/Button';

const AddTripButton = props => {
  return (
  <div>
    <span>
      <Button variant="outlined" color="secondary"
        onClick={props.addTrip}
      >
        ADD MEETING
            </Button>
    </span>

  </div>
  )}

export default AddTripButton