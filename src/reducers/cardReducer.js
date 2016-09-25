import uuid from 'uuid';
import R from 'ramda';

function replaceCard (state, id, flag) {
  const card            = R.find(R.propEq('id', id), state);
  const updatedCard     = Object.assign({}, card, { isEditing : flag });

  const replaceOldCard  = R.map((card) => R.propEq('id', id)(card) ? updatedCard : card);

  return replaceOldCard(state);
}

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = Object.assign({}, { id : uuid.v4(), isEditing : false }, action.data);
      return state.concat([newCard]);

    case 'EDIT_CARD': 
      // find card that will be edited
      return replaceCard (state, action.id, true);

    case 'SAVE_CARD':
      /*
      const card            = R.find(R.propEq('id', action.id), state);
      const updatedCard     = Object.assign({}, card, { isEditing : false });

      const replaceOldCard  = R.map((card) => R.propEq('id', action.id)(card) ? updatedCard : card);

      return replaceOldCard(state);
      */
      return replaceCard(state, action.id, false);

    default: 
      return state;
  }
};

export default cardReducer;