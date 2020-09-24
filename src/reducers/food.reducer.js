const foodReducer = (state = [], action) => {
    switch (action.type) {
      case 'GETFOOD':
        state=[]
        return state.concat(action.val);
      case 'CLEAR':
          return state = [];
      default:
        return state;
    }
};

export default foodReducer