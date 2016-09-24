import uuid from 'uuid';
import R from 'ramda';

const cardReducer = (state = { cards : [] }, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      // console.log('new card is created ' + action.data.front + " " + action.data.back);
      const newCard = Object.assign({}, { id : uuid.v4() }, action.data);
      return state.cards.concat([newCard]);

    case 'EDIT_CARD': 
      // find can that will be edited
      // const card = R.find(R.propEq('id', action.id), state.cards);
      // return Object.assign({}, state, { isEditModalOpen : true });
      return state;

    default: 
      return state;
  }
};

export default cardReducer;