// import React, { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignInPage from './pages/SignInPage';
import 'fontsource-roboto';
import API from "./API"


// ICONS
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

export default class App extends React.Component {

  state = {
    email: null
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(json => this.signIn(json.email, json.token))
    }
  }

  signOut = () => {
    this.setState({
      email: null
    })
    localStorage.removeItem("token")
  }

  signIn = (email, token) => {
    this.setState({
      email
    })
    localStorage.token = token
  }

  render() {
    return (
      <div>
        <h1>{this.state.email
          ? 'Welcome back, you are sign in!'
          : 'Welcome, stranger'}
        </h1>
        <Router>
          <Route path="/sign-in" render={() =>
            <SignInPage signIn={this.signIn} />
          } />
        </Router>
      </div>
    )
  }
}






// function App() {

//   const [email, setEmail] = useState(null); 

//   const signIn = (email) => {
//     setEmail(email)

//   }

//   return (
//     <div>
//       {/* <head>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width"
//         />
//       </head> */}
//       <Route exact path="/sign-in" render={() =>
//          <SignInPage signIn={signIn}/>
//       }/>

//     </div>

//   );
// }

// export default App;
// rails g model User name:string surname:string email:string  password_digest:string phone_number:string
// rails g model Subontractor name address phone_number email description project_id:integer
// rails g model Project name address image description client project_manger site_manager quantity_surveyor start_date:date end_date:date user_id:integer
// rails g model Meeting title date:date start_time:time  end_time:time location description project_id:integer
// rails g model Note title description project_id:integer 
// rails g model Drawing title file project_id:integer    
// rails g model SubcontractorMeeting contractor_id:integer meeting_id:integer
