import React from "react";
import SignUp from '../components/signUp/signUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserPage from "../components/userPage/userPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/userpage" component={UserPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App