import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './actions'

const renderField = ({type, input, label}) => (
   <div className="form-group">
      <label htmlFor={input.name}>
         {label}
      </label>
      <input {...input} id={input.name} type={type} className="form-control" placeholder={label}/>
   </div>
)

const Form = props => {
   const { handleSubmit, submitting, type = 'add' } = props

   const btnColor = {'delete': 'danger', 'edit': 'warning', 'add': 'primary'}[type]
   const btnText = {'delete': 'Excluir', 'edit': 'Enviar', 'add': 'Enviar'}[type]

   return (
      <form className="form" onSubmit={handleSubmit}>
         <Field name="name" label="Nome" type="text" component={renderField} />
         <Field name="month" label="Mês" type="number" component={renderField} />
         <Field name="year" label="Ano" type="number" component={renderField} />
         <button type="submit" disabled={submitting} className={'btn btn-' + btnColor}>
            {btnText}
         </button>
         <button type="button" className="btn btn-default" onClick={props.init}>
            Voltar
         </button>
      </form>
   )
}

const mapDispatchToProps = dispatch => (
   bindActionCreators({ init }, dispatch)
)

const connectReduxForm = reduxForm({form: 'billingCycles', destroyOnUnmount: false})
const connectRedux = connect(null, mapDispatchToProps)

export default connectReduxForm(connectRedux(Form))