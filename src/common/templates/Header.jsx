import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLogin from './NavBarLogin'

const Header = props => (
   <header className="main-header">
      <Link to="/" className="logo">
         <span className="logo-mini"><b>My</b>M</span>
         <span className="logo-lg"><i className="fa fa-money"></i> <b>My</b>Money</span>
      </Link>
      <nav className="navbar navbar-static-top" role="navigation">
         <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
         </a>
         <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
               <NavBarLogin />
            </ul>
         </div>
      </nav>
   </header>
)

export default Header
