import React from 'react'

import './common/dependecies'
import Middleware from './Middleware'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Content from './common/Content'
import Footer from './common/Footer'
import routes from './common/routes'

const App = props => (
   <div>
      <Middleware>
         <Header />
         <Sidebar />
         <Content>
            {routes}
         </Content>
         <Footer />
      </Middleware>
   </div>
)

export default App