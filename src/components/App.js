import React from "react";
import SignUp from '../components/signUp/signUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserPage from "../components/userPage/userPage";
import Header from "../components/Header/header";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/userpage" component={UserPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App