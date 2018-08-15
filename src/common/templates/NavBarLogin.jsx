import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { logout } from '../../Components/Auth/AuthActions'

class NavBarLogin extends React.Component {
   constructor (props) {
      super(props)

      this.state = { expanded: false }
   }

   toggleExpand () {
      this.setState({ expanded: !this.state.expanded })
   }

   render () {
      const { name, email, logout } = this.props
      const { expanded } = this.state

      return (<li className={"dropdown user user-menu" + (expanded? ' open': '')} 
            onMouseEnter={()=>this.toggleExpand()} 
            onMouseLeave={()=>this.toggleExpand()}
         >
         <a onClick={()=>this.toggleExpand()} className="dropdown-toggle"
            href="javascript:;" aria-expanded="false">
            <img src="https://picsum.photos/200/?random" className="user-image" alt="User Image" />
            <span className="hidden-xs">{ name }</span>
         </a>
         <ul className="dropdown-menu">
            <li className="user-header">
               <img src="https://picsum.photos/300/?random" className="img-circle" alt="User Image" />
               <p>{ name }
                  <small>{ email }</small>
               </p>
            </li>
            <li className="user-footer">
               <div className="pull-right">
                  <a href="javascript:;" className="btn btn-default btn-flat" onClick={logout}>
                     Logout
                  </a>
               </div>
            </li>
         </ul>
      </li>)
   }
}




const mapStateToProps = state => ({...state.auth.user})

const mapDispatchToProps = dispatch => (
   bindActionCreators({ logout }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBarLogin)