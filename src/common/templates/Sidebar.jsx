import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Sidebar extends React.Component {
   constructor (props) {
      super(props)

      this.state = { treeViewOpen: location.pathname == '/billingcycles'}
   }

   toggleTreeView () {
      this.setState({ treeViewOpen: !this.state.treeViewOpen})
   }

   render () {
      const { pathname } = this.props.location
      const { treeViewOpen } = this.state
      return (<aside className="main-sidebar">
         <section className="sidebar">  
            <ul className="sidebar-menu">
               <li className="header">
                  Menu
               </li>
               <li className={pathname == '/dashboard'? 'active' : ''}>
                  <Link to="/dashboard">
                     <i className="fa fa-dashboard"></i>
                     <span>Dashboard</span>
                  </Link>
               </li>
               <li className={'treeview'+ (treeViewOpen ? ' menu-open': '') +
                  (pathname == '/billingcycles'? ' active' : '')
               }>
                  <a href="javascript:;" className="open-treeview"
                     onClick={()=>this.toggleTreeView()}
                  >
                     <i className="fa fa-edit"></i>
                     <span>Cadastro</span>
                     <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul className={'treeview-menu' + (treeViewOpen ? ' treeview-menu-open': '') }>
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
      </aside>)
   }
}




export default withRouter(Sidebar)