import React from 'react'

const Input = ({input, type, placeholder}) => (
   <input {...input} 
      type={type}
      className="form-control"
      placeholder={placeholder}
      id={input.name}
   />
)

export default Input