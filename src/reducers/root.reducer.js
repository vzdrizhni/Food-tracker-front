import { combineReducers } from 'redux';
import userReducer from "./user.reducer";
import mealReducer from "./meal.reducer";
import foodReducer from "../reducers/food.reducer";

const reducer = combineReducers({ user: userReducer, meals: mealReducer, food: foodReducer });

export default reducer