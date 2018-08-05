import React from 'react'
import { Link, withRouter } from 'react-router-dom'




const Sidebar = ({location}) => (
   <aside className="main-sidebar">
      <section className="sidebar">  
         <ul className="sidebar-menu" data-widget="tree">
            <li className="header">
               Menu
            </li>
            <li className={location.pathname == '/dashboard'? ' active' : ''}>
               <Link to="/dashboard">
                  <i className="fa fa-tachometer"></i>
                  <span>Dashboard</span>
               </Link>
            </li>
            <li className={'treeview' + (location.pathname == '/billingcycles'? ' active' : '')}>
               <a href="#">
                  <i className="fa fa-usd"></i>
                  <span>BillingCycle</span>
                  <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                  </span>
               </a>
               <ul className="treeview-menu">
                  <li>
                     <Link to="/billingcycles">
                        <span>Cadastro</span>
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </section>
   </aside>
)




export default withRouter(Sidebar)