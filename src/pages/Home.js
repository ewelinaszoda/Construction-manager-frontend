import React from "react"
import PrimarySearchAppBar from "../components/PrimarySearchAppBar.js"
import GetCurrentDateDiv from  "../components/GetCurrentDate.js"

const Home = (props) => {

  return (
    <div>
      <PrimarySearchAppBar logOut={props.logOut}/>
      <GetCurrentDateDiv/>
    </div>
  )

}

export default Home