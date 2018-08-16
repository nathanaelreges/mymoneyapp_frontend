import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { connect as reactRedux } from 'react-redux'

import * as actions from './AuthActions'
import Grid from '../../common/layout/Grid'
import If from '../../common/operator/If'

import Input from '../../common/form/Input'

class Auth extends React.Component {
   constructor (props) {
      super(props)

      this.state = { isLogin: true }
      this.submited = this.submited.bind(this)
   }

   submited (data) {
      const { isLogin } = this.state
      
      if(isLogin) {
         this.props.login(data)
      }
      else {
         this.props.sign(data)
      }
   }
   
   toggleForm () {
      this.setState({ isLogin: !this.state.isLogin })
   }

   render () {
      const { handleSubmit } = this.props
      const { isLogin } = this.state
      return (
         <div className="login-container">
            <div className="login-box">
               <div className="login-logo">
                  <b>My</b>Money
               </div>
               <div className="login-box-body" >
                  <p className="login-box-msg">
                     {isLogin? 'Entre na sua conta!': 'Faça seu cadastro!'}
                  </p>
                  <form onSubmit={handleSubmit(this.submited)}>
                     <AuthField name="name" type="text" placeholder="Digite um nome de usuário." 
                        icon="user" hidden={isLogin} autoComplete="user-name"/>
                     <AuthField name="email" type="email" placeholder="Digite seu email."
                        icon="envelope" autoComplete="email"/>
                     <AuthField name="password" type="password" placeholder="Digite sua senha."
                        icon="lock" autoComplete="current-password"/>
                     <AuthField name="confirmPassword" type="password" placeholder="Digite sua senha novamente." 
                        icon="lock" hidden={isLogin} autoComplete="current-password"/>
                     <div className="row">
                        <Grid cols="8">
                        </Grid>
                        <Grid cols="4">
                           <button type="submit" className="pull-right btn btn-primary btn-block btn-flat">
                              {isLogin? 'Logar?': 'Cadastrar'}
                           </button>
                        </Grid>
                     </div>
                  </form>
                  <a href="javascript:;" className="text-center" onClick={()=>this.toggleForm()}>
                     {isLogin? 'Ja é cadastrado?': 'Ainda não é cadastrado?'}
                  </a>
               </div>
            </div>
         </div>
      )
   }
}


const AuthField = props =>(
   <If value={!props.hidden}>
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
const connectRedux = reactRedux(null, mapDispatchToProps)

export default connectReduxForm(connectRedux(Auth))