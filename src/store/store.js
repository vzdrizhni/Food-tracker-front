import { createStore } from 'redux';
import userReducer from '../reducers/user.reducer';

const initialState = {};

const store = createStore(userReducer, initialState);

export default store;