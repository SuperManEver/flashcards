import {PropTypes} from 'react';
import {connect} from 'react-redux';
import {editCard, saveCard, updateCard} from '../actions/cardActions.js';

import Card from '../components/Card.jsx';

function mapDispatchToProps (dispatch) {
  return { 
    onClick     : (id) => dispatch( editCard(id) ),
    onToggle    : (id) => dispatch( saveCard(id) ),
    updateCard  : (data) => dispatch( updateCard(data) )
  };
}

export default connect(null, mapDispatchToProps)(Card);