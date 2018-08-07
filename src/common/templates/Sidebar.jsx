import React from 'react'
import { Link, withRouter } from 'react-router-dom'

//bug fix for treeview effect
let treeviewOpen = false
const treeviewClick = (e) => {
   treeviewOpen = e.currentTarget.classList.contains('menu-open')
}
//bug fix for treeview effect

const Sidebar = ({location}) => (
   <aside className="main-sidebar">
      <section className="sidebar">  
         <ul className="sidebar-menu" data-widget="tree">
            <li className="header">
               Menu
            </li>
            <li className={location.pathname == '/dashboard'? 'active' : ''}>
               <Link to="/dashboard">
                  <i className="fa fa-dashboard"></i>
                  <span>Dashboard</span>
               </Link>
            </li>
            <li onClick={treeviewClick} 
               className={'treeview' + 
                  (treeviewOpen ? ' menu-open': '') + 
                  (location.pathname == '/billingcycles'? ' active' : '')
               }>
               <a href="#" className="open-treeview">
                  <i className="fa fa-edit"></i>
                  <span>Cadastro</span>
                  <span className="pull-right-container">
                     <i className="fa fa-angle-left pull-right"></i>
                  </span>
               </a>
               <ul className="treeview-menu">
                  <li>
                     <Link to="/billingcycles">
                        <i className="fa fa-usd"></i>
                        <span>Ciclos de Pagamento</span>
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </section>
   </aside>
)




export default withRouter(Sidebar)