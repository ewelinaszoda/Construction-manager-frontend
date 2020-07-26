import React from "react"
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

const Account = ({ user }) => {

  return (
    <>
      <Box height="1vh">
        User Details
    <br></br>
        <br></br>
        <div>Name: {user.name}</div>
        <div>Surname: {user.surname}</div>
        <div>Email: {user.email}</div>
        <div>Phone phone_number: {user.phone_number}</div>
        <Link to={`/users/${user.id}/edit`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="secondary" >
            EDIT USER
          </Button>
        </Link>
      </Box>
    </>
  )

}

export default Account