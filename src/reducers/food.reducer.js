const foodReducer = (state = [], action) => {
    switch (action.type) {
      case 'GETFOOD':
        return state.concat(action.val);
      case 'DEL':
          return state = [];
      default:
        return state;
    }
};

export default foodReducer