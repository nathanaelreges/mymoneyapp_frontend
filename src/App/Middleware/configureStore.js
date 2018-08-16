import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxMulti from 'redux-multi'

import reducer from './reducer'


export default function configureStore() {
   const store = applyMiddleware(ReduxPromise, ReduxMulti)(createStore)(reducer, devTools)

   const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__() : null
   //
 
   if (module.hot) {
     // Enable Webpack hot module replacement for reducers
     module.hot.accept('./reducer', () => {
       const nextRootReducer = require('./reducer');
       store.replaceReducer(nextRootReducer);
     });
   }
 
   return store
}
