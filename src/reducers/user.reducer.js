const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET':
      return action.act;
    default:
      return state;
  }
};

export default userReducer;