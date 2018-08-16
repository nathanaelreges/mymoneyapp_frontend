import React from 'react'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Auth from '../../Components/Auth'
import { actions } from '../../Components/Auth'
import Messages from '../../common/Messages'


class Authentication extends React.Component {
   
   componentWillMount () {
      const { token } = this.props
      if(token){
         this.props.validateToken(token)
      }
   }

   render () {
      const { tokenValid, children, token } = this.props

      if(tokenValid === undefined) {return false}
      
      axios.defaults.headers.common['authorization'] = token
      
      if(tokenValid) {
         return(<div>{children}</div>)
      }
      else{
         return (<div>
            <Auth />
            <Messages />
         </div>)
      } 
   }

}

const mapStateToProps = state => ({
   tokenValid: state.auth.tokenValid,
   token: state.auth.token
})
const mapDispatchToActions = dispatch => (
   bindActionCreators({ validateToken: actions.validateToken }, dispatch)
)
const reduxConnect = connect(mapStateToProps, mapDispatchToActions)


//https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(reduxConnect(Authentication))

