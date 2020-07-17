// import React, { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignInPage from './pages/SignInPage';
import 'fontsource-roboto';


// ICONS
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

//WHERE META ???
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width"
//         />

export default class App extends React.Component {
  state = {
    email: null
  }

  signIn = (email) => {
    this.setState({
      email
    })
  }

  render() {
    return (
      <div>
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
