const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET':
      console.log('worked');
      return Object.assign(state, action.val);
    default:
      return state;
  }
};

export default userReducer;