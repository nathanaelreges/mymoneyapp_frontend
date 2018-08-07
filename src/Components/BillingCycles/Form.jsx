import React from 'react'
import { reduxForm, Field, } from 'redux-form'


const renderField = ({type, input, label}) => (
   <div className="form-group">
      <label htmlFor={input.name}>
         {label}
      </label>
      <input {...input} id={input.name} type={type} className="form-control" placeholder={label}/>
   </div>
)

const Form = props => {
   const { handleSubmit, submitting } = props
   return (
      <form className="form" onSubmit={handleSubmit}>
         <Field name="name" label="Nome" type="text" component={renderField} />
         <Field name="month" label="Mês" type="number" component={renderField} />
         <Field name="year" label="Ano" type="number" component={renderField} />
         <button type="submit" disabled={submitting} className="btn btn-primary">
            Submit
         </button>
      </form>
   )
}

export default reduxForm({form: 'billingcycles'})(Form)