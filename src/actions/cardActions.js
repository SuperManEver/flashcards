var actions = {};

actions.createCard = function (data) {
  return { type : 'CREATE_CARD', data : data };
};

actions.editCard = function (data) {
  console.log(data);
  return { type : 'EDIT_CARD', data : data };
};

// export default actions;
module.exports = actions;
