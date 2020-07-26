import React from "react"
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar"
import Box from '@material-ui/core/Box'
import Footer from "../layout/Footer"
import Account from "../components/Account"

const AccountPage = ({ user, logOut}) => {

  const renderAccountInfo = () => {
    return (
      <>
      <Box height="1vh"></Box>
      <PrimarySearchAppBar logOut={logOut} />
      <br></br>
      <Account user={user}/>
      {/* <div>
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
      </div> */}
      <Footer/>
      </>
    );
  };

  return (
    <div>
      {renderAccountInfo()}
    </div>
  )

}

export default AccountPage