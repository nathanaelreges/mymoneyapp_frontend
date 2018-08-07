import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Form = props => (
   <div>
      <Field name="name" component="input" />
      <Field name="month" component="input" />
      <Field name="year" component="input" />
   </div>
)

export default reduxForm({form: 'billingcycles'})(Form)