/* ------------------------------------------------------------------------------
* Header.jsx
*
* header component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import Modal from 'boron/ScaleModal';
import {connect} from 'react-redux';
import createCard from '../actions/cardActions.js';

const Header = React.createClass({
  getInitialState() {
    return {
      front : '',
      back  : ''
    };
  },

  showModal () {
    this.refs.modal.show();
  },

  hideModal () {
    this.refs.modal.hide();
  },

  componentDidMount() {
    this.refs.modal.show();
  },

  createNewCard () {
    let {front, back} = this.state;
    let {createCard} = this.props;

    createCard({ front : front, back : back });

    this.hideModal();
  },

  updateFront (evt) {
    const value = evt.target.value;
    this.setState({
      front : value
    });
  },

  updateBack (evt) {
    const value = evt.target.value;
    this.setState({
      back : value
    });
  },

  render () {
    return <header>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Flashcards</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <button onClick={this.showModal} type="button" className="btn btn-success btn-xs">New Card</button>
              </ul>
            </div>
          </div>
        </nav>

        <Modal ref="modal" keyboard={this.callback}>
          <div className="new-card-modal">
            <h2>New Card</h2>

            <label htmlFor="front">Card Front</label>
            <textarea value={this.state.front} onChange={this.updateFront} id="front" rows="4" cols="55"></textarea>

            <label htmlFor="back">Card Front</label>
            <textarea value={this.state.back} onChange={this.updateBack} id="back" rows="4" cols="55"></textarea>

            <button type="button" className="btn btn-default" onClick={this.hideModal}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={this.createNewCard}>Create</button>
          </div>
        </Modal>

      </header>;
  }  
});

function mapDispatchToProps(dispatch) {
  return {
    createCard : (data) => dispatch(createCard( data ))
  };
};

export default connect(null, mapDispatchToProps)(Header);