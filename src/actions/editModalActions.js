var actions = {};

actions.openModal = function (id) {
  return { type : 'OPEN_EDIT_MODAL', data : id };
};

module.exports = actions;