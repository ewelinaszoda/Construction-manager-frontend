import React from "react";
import Box from '@material-ui/core/Box';

const GetCurrentDate = () => {

  const date = new Date().toDateString();

  return (
    <div style={{ width: '100%' }}>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        TODAY {date}
      </Box>
    </div> 
  );

}

export default GetCurrentDate;