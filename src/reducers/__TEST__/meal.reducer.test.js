import mealReducer from "../meal.reducer";
import { getMeal } from "../../actions";

const state = [];
const result = {
        title: 'Soup',
        calories: 220,
        grams: 300
    }
const res = mealReducer(state, getMeal(result))

