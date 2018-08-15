import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { connect as ReactRedux } from 'react-redux'

import actions from './AuthActions'
import Grid from '../../common/layout/Grid'
import If from '../../common/operator/If'



class Auth extends React.Component {
   constructor (props) {
      super(props)

      this.state = { isLogin: true }
   }

   toggleForm () {
      this.setState({ isLogin: !this.state.isLogin })
   }

   render () {
      const { handleSubimit } = this.props
      const { isLogin } = this.state
      return (
         <div className="login-box">
            <div className="login-logo">
               <b>My</b>Money
            </div>
            <div className="login-box-body">
               <p className="login-box-msg">
                  {isLogin? 'Entre na sua conta!': 'Faça seu cadastro!'}
               </p>
               <form onSubmit={handleSubimit}>
                  <AuthField name="name" type="text" placeholder="Digite um nome de usuário." 
                     icon="avatar" hidden={isLogin} />
                  <AuthField name="email" type="email" placeholder="Digite seu email."
                     icon="envelope"/>
                  <AuthField name="password" type="password" placeholder="Digite sua senha."
                     icon="lock"/>
                  <AuthField name="confirmPassword" type="password" placeholder="Digite sua senha novamente." 
                     icon="lock" hidden={isLogin} />
                  <div className="row">
                     <Grid cols="4">
                        <button type="submit" className="pull-right btn btn-primary btn-block btn-flat">
                           Sign In
                        </button>
                     </Grid>
                  </div>
               </form>
               <a href="javascript:;" className="text-center" onClick={()=>this.toggleForm()}>
                  {isLogin? 'Ja é cadastrado?': 'Ainda não é cadastrado?'}
               </a>
            </div>
         </div>
      )
   }
}


const AuthField = props =>(
   <If value={props.hidden}>
      <div className="form-group has-feedback">
         <Field {...props} className="form-control" component={Input} />
         <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
      </div>
   </If>
) 




const connectReduxForm = reduxForm({form: 'auth'})

const mapDispatchToProps = dispatch => (
   bindActionCreators(actions, dispatch)
)
const connectRedux = ReactRedux(null, mapDispatchToProps)

export default connectRedux(connectReduxForm(Auth))