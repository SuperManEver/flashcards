/* ------------------------------------------------------------------------------
* main.js
*
* root reducer for application
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */

import {combineReducers} from 'redux';
import cards from './cardReducer.js';
import edit_modal from './editModalReducer.js';

const rootReducer = combineReducers({
  cards : cards,
  edit_modal : edit_modal
});

export default rootReducer;

