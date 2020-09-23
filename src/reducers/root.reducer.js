import { combineReducers } from 'redux';
import userReducer from "./user.reducer";
import mealReducer from "./meal.reducer";

const reducer = combineReducers({ user: userReducer, meals: mealReducer });

export default reducer