const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET':
      return Object.assign(state, action.val);
    case 'DEL':
      return {};
    default:
      return state;
  }
};

export default userReducer;
