/* ------------------------------------------------------------------------------
* configureStore.js
*
* store's configuration file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */

import { createStore, applyMiddleware }   from 'redux';
import rootReducer                        from '../reducers';
import reduxImmutableStateInvariant       from 'redux-immutable-state-invariant';
import logger                             from 'redux-logger';

export default function configureStore (initialState) {
  return createStore(
    rootReducer, 
    initialState,
    applyMiddleware( reduxImmutableStateInvariant(), logger() )
  );
};