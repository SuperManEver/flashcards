import React, {PropTypes} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const EditModal = ({front, back, isOpen, onToggle, changeFront, changeBack, updateCard}) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>Edit Card</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="card_front">Card Front</Label>
            <Input type="textarea" onChange={changeFront} name="text" id="card_front" value={front} />
          </FormGroup>
          <FormGroup>
            <Label for="card_back">Card Back</Label>
            <Input type="textarea" onChange={changeBack} name="text" id="card_back" value={back} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateCard}>Save Changes</Button>
          <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
};

EditModal.propTypes = {
  front : PropTypes.string.isRequired,
  back  : PropTypes.string.isRequired,
  isOpen : PropTypes.bool.isRequired,
  onToggle : PropTypes.func.isRequired
};

export default EditModal;