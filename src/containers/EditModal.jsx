import React from 'react';
import Modal from 'boron/ScaleModal';
import {connect} from 'react-redux';

const EditModal = React.createClass({
  componentDidMount () {
    let {isEditModalOpen} = this.props;
    if (isEditModalOpen) this.refs.modal.show();
  },

  hideModal () {
    this.refs.modal.hide();
  },

  render () {
    return <div>
        <Modal ref="modal">
            <h2>Edit Modal</h2>
            <button onClick={this.hideModal}>Close</button>
        </Modal>
      </div>;
  }  
});

function mapStateToProps (state, ownProps) {
  return {
    isEditModalOpen : state.edit_modal
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
