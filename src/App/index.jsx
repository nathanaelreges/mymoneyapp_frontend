import React from 'react'
import Middleware from './Middleware'
import routes from './routes'
import { hot } from 'react-hot-loader'
import ReduxToastr from 'react-redux-toastr'

import '../common/templates/dependecies'
import Header from '../common/templates/Header'
import Sidebar from '../common/templates/Sidebar'
import Footer from '../common/templates/Footer'



const App = props => (
   <div>
      <Middleware>
         <Header />
         <Sidebar />
         <div className="content-wrapper">
            {routes}
         </div>
         <Footer />
         <ReduxToastr
            timeOut={4000}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
         />
      </Middleware>
   </div>
)

export default hot(module)(App)