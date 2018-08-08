import React from 'react'



const FormGroup = ({readOnly, type, input, label, placeholder}) => {
   return (
      <div className="form-group">
         <label htmlFor={input.name}>
            {label}
         </label>
         <input {...input} id={input.name} type={type} className="form-control" 
            placeholder={placeholder} readOnly={readOnly}
         />
      </div>
   )
}

export default FormGroup