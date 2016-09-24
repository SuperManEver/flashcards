/* ------------------------------------------------------------------------------
* main.js
*
* root reducer for application
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */

import {combineReducers} from 'redux';
import cards from './cardReducer.js';

const rootReducer = combineReducers({
  cards : cards
});

export default rootReducer;

