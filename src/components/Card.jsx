import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {editCard, saveCard} from '../actions/cardActions.js';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const EditModal = ({card, isOpen, onToggle}) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>Edit Card</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="card_front">Card Front</Label>
            <Input type="textarea" name="text" id="card_front" value={card.front} />
          </FormGroup>
          <FormGroup>
            <Label for="card_back">Card Back</Label>
            <Input type="textarea" name="text" id="card_back" value={card.back} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save Changes</Button>
          <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
};

EditModal.propTypes = {
  card : PropTypes.object.isRequired,
  isOpen : PropTypes.bool.isRequired,
  onToggle : PropTypes.func.isRequired
};

const Card = ({card, onClick, onToggle}) => {
  return (
    <div className="col-sm-4 card-item">
      <p>{card.front}</p>
      <button onClick={() => onClick(card.id)} type="button" className="btn btn-default">Edit</button>
      <EditModal isOpen={card.isEditing} card={card} onToggle={ () => onToggle(card.id) }/>
    </div>
  );
};

Card.propTypes = {
  card : PropTypes.object.isRequired,
  onClick : PropTypes.func.isRequired,
  onToggle : PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return { 
    onClick : (id) => dispatch( editCard(id) ),
    onToggle : (id) => dispatch( saveCard(id) )
  };
}

export default connect(null, mapDispatchToProps)(Card);