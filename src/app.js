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

import Header from './containers/Header.jsx';

const store = configureStore();

var App = React.createClass({
  render () {
    return <Provider store={store}>
      <div className="container">
        <Header />
        <h2>Hello World</h2>
      </div>
    </Provider>;
  }  
});


render(<App />, document.getElementById('main'));
