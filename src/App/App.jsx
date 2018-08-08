import React from 'react'
import Middleware from './Middleware'
import routes from './routes'
import { hot } from 'react-hot-loader'

import '../common/templates/dependecies'
import Header from '../common/templates/Header'
import Sidebar from '../common/templates/Sidebar'
import Footer from '../common/templates/Footer'
import Messages from '../common/Messages'


const App = props => (
   <div>
      <Middleware>
         <Header />
         <Sidebar />
         <div className="content-wrapper">
            {routes}
         </div>
         <Footer />
         <Messages />
      </Middleware>
   </div>
)

export default hot(module)(App)