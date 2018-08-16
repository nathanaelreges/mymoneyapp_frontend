import React from 'react'

const Input = ({input, type, placeholder, readOnly, autoComplete}) => (
   <input {...input} 
      type={type}
      className="form-control"
      placeholder={placeholder}
      id={input.name}
      readOnly={readOnly}
      autoComplete={autoComplete}
   />
)

export default Input