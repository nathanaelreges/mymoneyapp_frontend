import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

const store = createStore(reducer)

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