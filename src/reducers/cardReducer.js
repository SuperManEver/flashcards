import uuid from 'uuid';
import R from 'ramda';

function replaceCard (state, id, diff) {
  // find that needs to be changed
  const card            = R.find(R.propEq('id', id), state);
  const updatedCard     = Object.assign({}, card, diff);

  const replaceOldCard  = R.map((card) => R.propEq('id', id)(card) ? updatedCard : card);

  return replaceOldCard(state);
}

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = Object.assign({}, { id : uuid.v4(), isEditing : false }, action.data);
      return state.concat([newCard]);

    case 'EDIT_CARD': 
      return replaceCard (state, action.id, { isEditing : true });

    case 'SAVE_CARD':
      return replaceCard(state, action.id, { isEditing : false });

    case 'UPDATE_CARD':
      let {front, back} = action.data;
      return replaceCard(state, action.data.id, { isEditing : false, front : front, back : back });

    default: 
      return state;
  }
};

export default cardReducer;