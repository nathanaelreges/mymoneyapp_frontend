import React from 'react'
import { hot } from 'react-hot-loader'

import Middleware from './Middleware/Middleware'
import Content from './Content/Content'


const App = props => (
   <Middleware>
      <Content/>
   </Middleware>
)

export default hot(module)(App)