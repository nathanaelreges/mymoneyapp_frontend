import React from 'react'
import { reduxForm, Field, } from 'redux-form'

const Form = props => {
   const { handleSubmit, submitting } = props
   return (
      <form onSubmit={handleSubmit}>
         <Field name="name" component="input" />
         <Field name="month" component="input" />
         <Field name="year" component="input" />
         <button type="submit" disabled={submitting}>
            Submit
         </button>
      </form>
   )
}

export default reduxForm({form: 'billingcycles'})(Form)