/* ------------------------------------------------------------------------------
* app.js
*
* Root React component for applicationt
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { render } from 'react-dom';
import uuid from 'uuid';

// store related
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';

// components
import Header from './containers/Header.jsx';
import CardList from './containers/CardList.jsx';
import EditModal from './containers/EditModal.jsx';

const cards = [
  { id : uuid.v4(), front : 'hello world', back : 'wassaby' },
  { id : uuid.v4(), front : 'hello world', back : 'wassaby' },
  { id : uuid.v4(), front : 'hello world', back : 'wassaby' },
  { id : uuid.v4(), front : 'hello world', back : 'wassaby' },
  { id : uuid.v4(), front : 'hello world', back : 'wassaby' }
];

const store = configureStore({ cards :  cards });

var App = React.createClass({
  render () {
    return <Provider store={store}>
      <div className="container">
        <Header />
        <EditModal />
        <CardList />
      </div>
    </Provider>;
  }  
});


render(<App />, document.getElementById('main'));
