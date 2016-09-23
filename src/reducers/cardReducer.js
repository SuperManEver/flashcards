const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      console.log('new card is created ' + action.data.front + " " + action.data.back);
      return state;
    default: 
      return state;
  }
};

export default cardReducer;