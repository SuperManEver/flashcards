/* ------------------------------------------------------------------------------
* editModalReducer.js
*
* Reducer for modal window for editing cards
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
const editModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_EDIT_MODAL':
      return true;

    case 'CLOSE_EDIT_MODAL':
      console.log('close modal');
      return false;

    default: 
      return state;
  }
};

export default editModalReducer;