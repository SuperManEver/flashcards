var actions = {};

actions.createCard = function (data) {
  return { type : 'CREATE_CARD', data : data };
};

actions.editCard = function (id) {
  console.log("card id: " + id);
  return { type : 'EDIT_CARD', id : id };
};

// export default actions;
module.exports = actions;
