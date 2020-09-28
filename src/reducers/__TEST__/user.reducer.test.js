import { getUsers } from '../../actions/actions';
import userReducer from '../user.reducer';

const state = {};
const result = {
  messages: 'Signed Up Successfully',
  is_success: true,
  data: {
    user: {
      id: 85,
      email: 'nikulai@hui.com',
      authentication_token: 'xe_2a7FLz5hyYx5twfsj',
      name: 'Nikulai',
      meals: [],
    },
  },
};

const res = userReducer(state, getUsers(result));

it('should be type of object', () => {
  expect(typeof res).toBe('object');
});

it('first element should be Signed Up Successfully', () => {
  expect(res.messages).toBe('Signed Up Successfully');
});

it('is_success should be true', () => {
  expect(res.is_success).toBe(true);
});

it('is_success should be true', () => {
  expect(res.data.user.id).toEqual(85);
});

it('is_success should be true', () => {
  expect(res.data.user.email).toBe('nikulai@hui.com');
});

it('is_success should be true', () => {
  expect(res.data.user.authentication_token).toBe('xe_2a7FLz5hyYx5twfsj');
});

it('is_success should be true', () => {
  expect(res.data.user.name).toBe('Nikulai');
});
