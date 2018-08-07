import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import ReduxMulti from 'redux-multi'

import reducer from './reducer'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
   window.__REDUX_DEVTOOLS_EXTENSION__() : null
//

const store = applyMiddleware(ReduxPromise, ReduxMulti)(createStore)(reducer, devTools)

const Middleware = props =>(
   <Provider store={store}>
      <BrowserRouter>
         <div>
            {props.children}
         </div>
      </BrowserRouter>
   </Provider>  
)

export default Middleware


if (module.hot) {
   module.hot.accept('./reducer', () => {
     store.replaceReducer(reducer);
   });
 }