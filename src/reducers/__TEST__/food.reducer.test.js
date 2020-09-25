import foodReducer from "../food.reducer";
import { getFood } from "../../actions";

const state = [];
const result = {
        title: 'Soup',
        calories: 220,
        grams: 300
    }

it('should return val property of foodReducer function', () => {
  expect(typeof foodReducer(state, result)).toBe('object');
});

it('should return val property of foodReducer function', () => {
  expect(typeof foodReducer(state, result)).toContain('object');
});

it('should return val property of foodReducer function', () => {
  const res = foodReducer(state, result);
  expect(typeof res[0]).toBe('object');
});