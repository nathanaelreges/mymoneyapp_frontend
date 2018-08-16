import React from 'react'
import Router from './Router'



import '../../common/templates/dependecies'
import Header from '../../common/templates/Header'
import Sidebar from '../../common/templates/Sidebar'
import Footer from '../../common/templates/Footer'
//import Messages from '../../common/Messages'


const Content = props => (<div  className="wrapper">
   <Header />
   <Sidebar />
   <div className="content-wrapper">
      <Router />
   </div>
   <Footer />
</div>)

export default Content