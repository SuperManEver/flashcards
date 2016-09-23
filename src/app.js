/* ------------------------------------------------------------------------------
* app.js
*
* Root React component for applicationt
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { render } from 'react-dom';

var App = React.createClass({
  render () {
    return <div>
        <h2>Hello World</h2>
      </div>;
  }  
});

render(<App />, document.getElementById('main'));
