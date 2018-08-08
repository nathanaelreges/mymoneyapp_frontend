import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './actions'
import FormGroup from '../../common/form/FormGroup'
import Grid from '../../common/layout/Grid'


class Form extends React.Component {
   render () {
      const { handleSubmit, submitting, type = 'add' } = this.props
   
      const btnColor = {'delete': 'danger', 'edit': 'warning', 'add': 'primary'}[type]
      const btnText = {'delete': 'Excluir', 'edit': 'Enviar', 'add': 'Enviar'}[type]
      const typeDelete = type == 'delete'
   
      return (
         <form className="form" onSubmit={handleSubmit}>
            <div className="box-body">
               <div className="row">
                  <Grid cols="12 4">
                     <Field name="name" label="Nome" type="text" component={FormGroup} 
                        readOnly={typeDelete} placeholder="Insira o nome"
                     />
                  </Grid>
                  <Grid cols="12 4">
                     <Field name="month" label="Mês" type="number" component={FormGroup} 
                        readOnly={typeDelete} placeholder="Insira o mês"
                     />
                  </Grid>
                  <Grid cols="12 4">
                     <Field name="year" label="Ano" type="number" component={FormGroup} 
                        readOnly={typeDelete} placeholder="Insira o ano"
                     />
                  </Grid>   
               </div>
            </div>
            <div className="box-footer">
               <button type="submit" disabled={submitting} className={'btn mr-5 btn-' + btnColor}>
                  {btnText}
               </button>
               <button type="button" className="btn btn-default" onClick={this.props.init}>
                  Cancelar
               </button>
            </div>
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