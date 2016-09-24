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

const cards = [
  { id : uuid.v4(), front : 'curry', back : 'wassaby', isEditing : false },
  { id : uuid.v4(), front : 'haskell', back : 'wassaby', isEditing : false },
  { id : uuid.v4(), front : 'lambda', back : 'wassaby', isEditing : false },
  { id : uuid.v4(), front : 'thread', back : 'wassaby', isEditing : false },
  { id : uuid.v4(), front : 'calculus', back : 'wassaby', isEditing : false }
];

const store = configureStore({ cards :  cards });

var App = React.createClass({
  render () {
    return <Provider store={store}>
      <div className="container">
        <Header />
        <CardList />
      </div>
    </Provider>;
  }  
});

render(<App />, document.getElementById('main'));
