import React from "react";
import Box from '@material-ui/core/Box';
import Meeting from '../containers/Meeting';

export default function MeetingsFromApi({ meetings }) {

  const renderMeeting = () => {

    return meetings.map(meeting =>
      < Meeting
        key={meeting.id}
        meeting={meeting}
      />
    )
  }

  return (
    <Box>
      <>
        {renderMeeting()}
      </>
    </Box>
  )
}