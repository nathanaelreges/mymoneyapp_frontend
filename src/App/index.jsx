import React from 'react'
import Middleware from './Middleware'
import routes from './routes'
import '../common/templates/dependecies'
import Header from '../common/templates/Header'
import Sidebar from '../common/templates/Sidebar'
import Content from '../common/templates/Content'
import Footer from '../common/templates/Footer'


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