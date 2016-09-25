var actions = {};

actions.createCard = function (data) {
  return { type : 'CREATE_CARD', data : data };
};

actions.editCard = function (id) {
  return { type : 'EDIT_CARD', id : id };
};

actions.saveCard = function (id) {
  return { type : 'SAVE_CARD', id : id };
};

actions.updateCard = function (data) {
  return { type : 'UPDATE_CARD', data : data };
}

module.exports = actions;
