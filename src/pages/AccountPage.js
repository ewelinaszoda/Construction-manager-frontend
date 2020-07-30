import React from "react"
import PrimarySearchAppBarWithoutSearchProject from "../layout/PrimarySearchAppBarWithoutSearchProject"
// import Footer from "../layout/Footer"
import Account from "../components/Account"

const AccountPage = ({ user, logOut}) => {

  const renderAccountInfo = () => {
    return (
      <>
      <PrimarySearchAppBarWithoutSearchProject logOut={logOut} />
      <br></br>
      <Account user={user}/>
      {/* <Footer/> */}
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