import React from 'react';
import Modal from 'boron/ScaleModal';
import {connect} from 'react-redux';
import {closeModal} from '../actions/editModalActions.js';

const EditModal = React.createClass({
  hideModal () {
    this.props.closeModal();
    this.refs.modal.hide();
  },

  componentWillUpdate(nextProps, nextState) {
    // console.log(nextProps);
    if (nextProps.edit_modal) this.refs.modal.show();
    else this.refs.modal.hide();
  },

  callback () {
    // this.props.closeModal();
    console.log('dismiss');
  },

  render () {
    return <Modal ref="modal" onKeyPress={this.callback}>
        <h2>Edit Modal</h2>
        <button onClick={this.hideModal}>Close</button>
      </Modal>;
  }  
});

function mapStateToProps (state, ownProps) {
  return {
    edit_modal : state.edit_modal
  };
}

function mapDispatchToProps (dispatch) {
  return {
    closeModal : () => dispatch( closeModal() ) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
