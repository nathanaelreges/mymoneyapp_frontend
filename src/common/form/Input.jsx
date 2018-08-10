import React from 'react'

const Input = ({input, type, placeholder, readOnly}) => (
   <input {...input} 
      type={type}
      className="form-control"
      placeholder={placeholder}
      id={input.name}
      readOnly={readOnly}
   />
)

export default Input