import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './actions'


class Form extends React.Component {
   constructor (props) {
      super(props)
      this.renderField = this.renderField.bind(this)
   }

   renderField ({type, input, label}) {
      const typeDelete = this.props.type == 'delete'

      return (
         <div className="form-group">
            <label htmlFor={input.name}>
               {label}
            </label>
            <input {...input} id={input.name} type={type} className="form-control" placeholder={label}
               disabled={typeDelete}
            />
         </div>
      )
   }
   
   render () {
      const { handleSubmit, submitting, type = 'add' } = this.props
   
      const btnColor = {'delete': 'danger', 'edit': 'warning', 'add': 'primary'}[type]
      const btnText = {'delete': 'Excluir', 'edit': 'Enviar', 'add': 'Enviar'}[type]
      const typeDelete = type == 'delete'
   
      return (
         <form className="form" onSubmit={handleSubmit}>
            <Field name="name" label="Nome" type="text" component={this.renderField} />
            <Field name="month" label="Mês" type="number" component={this.renderField} />
            <Field name="year" label="Ano" type="number" component={this.renderField} />
            <button type="submit" disabled={submitting} className={'btn mr-5 btn-' + btnColor}>
               {btnText}
            </button>
            <button type="button" className="btn btn-default" onClick={this.props.init}>
               Voltar
            </button>
         </form>
      )
   }
}

const mapDispatchToProps = dispatch => (
   bindActionCreators({ init }, dispatch)
)

const connectReduxForm = reduxForm({form: 'billingCycles', destroyOnUnmount: false})
const connectRedux = connect(null, mapDispatchToProps)

export default connectReduxForm(connectRedux(Form))