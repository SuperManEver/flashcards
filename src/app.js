/* ------------------------------------------------------------------------------
* app.js
*
* Root React component for applicationt
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { render } from 'react-dom';

import Header from './containers/Header.jsx';

var App = React.createClass({
  render () {
    return <div className="container">
        <Header />
        <h2>Hello World</h2>
      </div>;
  }  
});

render(<App />, document.getElementById('main'));
