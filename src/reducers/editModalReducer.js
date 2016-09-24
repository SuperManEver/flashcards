const editModalReducer = (state = { isEditModalOpen : false }, action) => {
  switch (action.type) {
    case 'OPEN_EDIT_MODAL':
      console.log('open modal');
      // return state;
      return Object.assign({}, { isEditModalOpen : true });

    default: 
      return state;
  }
};

export default editModalReducer;