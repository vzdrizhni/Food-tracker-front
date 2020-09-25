import mealReducer from "../meal.reducer";
import {getMeal} from "../../actions/actions";

const state = [];
const result = {
  id: 1,
  created: '22 september, 2020'
}
const res = mealReducer(state, getMeal(result))

it('should be type of object', () => {
  expect(typeof mealReducer(state, result)).toBe('object');
});

it('first element should be Soup', () => {
  expect(res[0].created).toBe('22 september, 2020');
});

it('calories key should be equal to 220', () => {
  expect(res[0].id).toEqual(1);
});
