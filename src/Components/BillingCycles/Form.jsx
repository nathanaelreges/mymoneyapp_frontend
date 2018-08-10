import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './actions'
import ItemList from './ItemList'
import FormGroup from '../../common/form/FormGroup'
import Grid from '../../common/layout/Grid'
import Summary from './Summary';


class Form extends React.Component {
   render () {
      const { handleSubmit, submitting, type = 'add', credits = [], debits = [], init } = this.props
   
      const btnColor = {'delete': 'danger', 'edit': 'warning', 'add': 'primary'}[type]
      const btnText = {'delete': 'Excluir', 'edit': 'Enviar', 'add': 'Enviar'}[type]
      const typeDelete = type == 'delete'

      const sum = (t, c) => t + c
      const creditTotal = credits.map(x=> +x.value || 0).reduce(sum, 0)
      const debitTotal = debits.map(x=> +x.value || 0).reduce(sum, 0)
   
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
               <Summary credit={creditTotal} debit={debitTotal}/>  
               <div className="row">
                  <ItemList list={credits} label={'Créditos'} field={'credits'} readOnly={typeDelete}/>
                  <ItemList list={debits} label={'Débitos'} field={'debits'} readOnly={typeDelete}/>
               </div>
            </div>
            <div className="box-footer">
               <button type="submit" disabled={submitting} className={'btn mr-5 btn-' + btnColor}>
                  {btnText}
               </button>
               <button type="button" className="btn btn-default" onClick={init}>
                  Cancelar
               </button>
            </div>
         </form>
      )
   }
}


const select = formValueSelector('billingCycles')
const mapStateToProps = state => ({
   credits: select(state, 'credits'),
   debits: select(state, 'debits')
})

const mapDispatchToProps = dispatch => (
   bindActionCreators({ init }, dispatch)
)

const connectReduxForm = reduxForm({form: 'billingCycles', destroyOnUnmount: false})
const connectRedux = connect(mapStateToProps, mapDispatchToProps)

export default connectReduxForm(connectRedux(Form))