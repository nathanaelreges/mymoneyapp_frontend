import React from 'react'
import Router from './Router'



import '../../common/templates/dependecies'
import Header from '../../common/templates/Header'
import Sidebar from '../../common/templates/Sidebar'
import Footer from '../../common/templates/Footer'
import Messages from '../../common/Messages'


const App = props => (<div>
   <Header />
   <Sidebar />
   <div className="content-wrapper">
      <Router />
   </div>
   <Footer />
   <Messages />
</div>)

export default App