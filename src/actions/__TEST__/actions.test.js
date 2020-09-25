import {
  getUsers, destroyUser, getMeal, getFood,
} from '../actions';

const user = getUsers();
const destrUser = destroyUser();
const meal = getMeal();
const mealParameter = getMeal('Joke');
const food = getFood();
const foodCake = getFood('Cake');

it('value of type property should be GET ', () => {
  expect(user.type).toBe('GET');
});

it('value of val property should be undefined ', () => {
  expect(user.val).toBe(undefined);
});

it('value of type property should be DEL', () => {
  expect(destrUser.type).toBe('DEL');
});

it('value of type property should be GETMEAL', () => {
  expect(meal.type).toBe('GETMEAL');
});

it('value of val property should be undefined ', () => {
  expect(meal.val).toBe(undefined);
});

it('value of val property should be Joke ', () => {
  expect(mealParameter.val).toBe('Joke');
});

it('value of type property should be GETFOOD', () => {
  expect(food.type).toBe('GETFOOD');
});

it('value of val property should be undefined ', () => {
  expect(food.val).toBe(undefined);
});

it('value of val property should be undefined ', () => {
  expect(foodCake.val).toBe('Cake');
});
