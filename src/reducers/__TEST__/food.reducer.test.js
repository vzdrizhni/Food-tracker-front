import foodReducer from "../food.reducer";
import { getFood } from "../../actions/actions";

const state = [];
const result = {
        title: 'Soup',
        calories: 220,
        grams: 300
    }
const res = foodReducer(state, getFood(result))

it('should return val property of foodReducer function', () => {
  expect(typeof foodReducer(state, result)).toBe('object');
});

it('should return val property of foodReducer function', () => {
  expect(typeof foodReducer(state, result)).toContain('object');
});

it('should return val property of foodReducer function', () => {
  expect(typeof res[0]).toBe('object');
});

it('should return val property of foodReducer function', () => {
  expect(res[0].title).toBe('Soup');
});

it('should return val property of foodReducer function', () => {
  expect(res[0].calories).toEqual(220);
});

it('should return val property of foodReducer function', () => {
  expect(res[0].grams).toEqual(300);
});