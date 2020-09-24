import React from "react";
import SignUp from '../components/signUp/signUp'
import SignIn from '../components/SignIn/signIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserPage from "../components/userPage/userPage";
import Header from "../components/Header/header";
import BottomNav from "../components/BottomNav/bottomNav";
import MealItem from "../components/mealItem/mealItem";
import './app.css'

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/sign_in" component={SignIn}/>
          <Route exact path="/userpage" component={UserPage}/>
          <Route exact path="/meal/:id" component={MealItem}/>
        </Switch>
        <Route path="/" component={BottomNav} />
      </Router>
    </div>
  )
}

export default App