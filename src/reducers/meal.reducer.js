const mealReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET':
      return [...state, action.val];
    default:
      return state;
  }
};

export default mealReducer;