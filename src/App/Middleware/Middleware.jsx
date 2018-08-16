import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import Authentication from './Authentication'

const store = configureStore()


const Middleware = props => (
   <Provider store={store}>
      <BrowserRouter>
         <Authentication>
            {props.children}
         </Authentication>
      </BrowserRouter>
   </Provider>
)

export default Middleware

