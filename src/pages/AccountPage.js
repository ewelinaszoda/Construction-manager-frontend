import React from "react"
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar"
import Footer from "../layout/Footer"
import Account from "../components/Account"

const AccountPage = ({ user, logOut }) => {

  const renderAccountInfo = () => {
    return (
      <>
        <PrimarySearchAppBar logOut={logOut} />
        <br></br>
        <Account user={user} />
        <Footer/>
      </>
    );
  };

  return (
    <div style={{minHeight: "70vh"}}>
      {renderAccountInfo()}
    </div>
  )
}

export default AccountPage