var actions = {};

actions.openModal = function (id) {
  return { type : 'OPEN_EDIT_MODAL', data : id };
};

actions.closeModal = function () {
  return { type : 'CLOSE_EDIT_MODAL' };
};

module.exports = actions;