import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {editCard, saveCard, updateCard} from '../actions/cardActions.js';
import EditModal from './EditModal.jsx';

const Card = React.createClass({
  getInitialState() {
    let {card} = this.props;
    return {
      front : card.front,
      back  : card.back
    };
  },

  changeFront (evt) {
    const newValue = evt.target.value;
    this.setState({
      front : newValue
    });
  },

  changeBack (evt) {
    const newValue = evt.target.value;
    this.setState({
      back : newValue
    });
  },

  updateCard () {
    let {front, back} = this.state;
    let {card} = this.props;
    this.props.updateCard({ id : card.id,  front : front, back : back });
  },

  render () {
    let {card, onClick, onToggle} = this.props;
    let {front, back} = this.state;

    return <div className="col-sm-4 card-item">
      <p>{card.front}</p>
      <button onClick={() => onClick(card.id)} type="button" className="btn btn-default">Edit</button>
      <EditModal 
        isOpen={card.isEditing} 
        changeFront={this.changeFront} 
        changeBack={this.changeBack} 
        front={front} 
        back={back} 
        updateCard={this.updateCard}
        onToggle={ () => onToggle(card.id) }/>
    </div>;
  }  
});


function mapDispatchToProps (dispatch) {
  return { 
    onClick     : (id) => dispatch( editCard(id) ),
    onToggle    : (id) => dispatch( saveCard(id) ),
    updateCard  : (data) => dispatch( updateCard(data) )
  };
}

export default connect(null, mapDispatchToProps)(Card);