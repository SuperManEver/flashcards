import uuid from 'uuid';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      console.log('new card is created ' + action.data.front + " " + action.data.back);
      const newCard = Object.assign({}, { id : uuid.v4() }, action.data);
      return state.concat([newCard]);
    default: 
      return state;
  }
};

export default cardReducer;