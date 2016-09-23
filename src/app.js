/* ------------------------------------------------------------------------------
* app.js
*
* Root React component for applicationt
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { render } from 'react-dom';

// store related
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';

// components
import Header from './containers/Header.jsx';
import CardList from './containers/CardList.jsx';

const cards = [
  { front : 'hello world', back : 'wassaby' },
  { front : 'hello world', back : 'wassaby' },
  { front : 'hello world', back : 'wassaby' },
  { front : 'hello world', back : 'wassaby' },
  { front : 'hello world', back : 'wassaby' }
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
