import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './signUp/signUp';
import SignIn from './SignIn/signIn';
import UserPage from './userPage/userPage';
import Header from './Header/header';
import BottomNav from './BottomNav/bottomNav';
import MealItem from './mealItem/mealItem';
import AddMeal from './AddMeal/addMeal';
import './app.css';

const App = () => (
  <div>
    <Router>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/userpage" component={UserPage} />
        <Route exact path="/meal/:id" component={MealItem} />
        <Route exact path="/addmeasure" component={AddMeal} />
      </Switch>
      <Route path="/" component={BottomNav} />
    </Router>
  </div>
);

export default App;
