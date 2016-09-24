import uuid from 'uuid';
import R from 'ramda';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = Object.assign({}, { id : uuid.v4(), isEditing : false }, action.data);
      return state.concat([newCard]);

    case 'EDIT_CARD': 
      // find card that will be edited
      const card            = R.find(R.propEq('id', action.id), state);
      const updatedCard     = Object.assign({}, card, { isEditing : true });

      const replaceOldCard  = R.map((card) => R.propEq('id', action.id)(card) ? updatedCard : card);

      return replaceOldCard(state);

    default: 
      return state;
  }
};

export default cardReducer;