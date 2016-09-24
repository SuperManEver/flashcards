var actions = {};

actions.createCard = function (data) {
  return { type : 'CREATE_CARD', data : data };
};

actions.editCard = function (id) {
  return { type : 'EDIT_CARD', id : id };
};

module.exports = actions;
