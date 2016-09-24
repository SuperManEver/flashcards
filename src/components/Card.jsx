import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {openModal} from '../actions/editModalActions.js';

const Card = ({card, onClick}) => {
  return (
    <div className="col-sm-4 card-item">
      <p>{card.front}</p>
      <button onClick={() => onClick(card.id)} type="button" className="btn btn-default">Edit</button>
    </div>
  );
};

Card.propTypes = {
  card : PropTypes.object.isRequired,
  onClick : PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return { 
    onClick : (id) => dispatch( openModal(id) )
  };
}

export default connect(null, mapDispatchToProps)(Card);