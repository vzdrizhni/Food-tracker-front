import foodReducer from '../food.reducer';
import { getFood } from '../../actions/actions';

const state = [];
const result = {
  title: 'Soup',
  calories: 220,
  grams: 300,
};
const res = foodReducer(state, getFood(result));

it('should be type of object', () => {
  expect(typeof foodReducer(state, result)).toBe('object');
});

it('should contain an object', () => {
  expect(typeof foodReducer(state, result)).toContain('object');
});

it('first element should be an object', () => {
  expect(typeof res[0]).toBe('object');
});

it('first element should be Soup', () => {
  expect(res[0].title).toBe('Soup');
});

it('calories key should be equal to 220', () => {
  expect(res[0].calories).toEqual(220);
});

it('grams key should be equal to 300', () => {
  expect(res[0].grams).toEqual(300);
});
