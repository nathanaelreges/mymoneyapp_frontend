import React from 'react'

const renderOptions = list => (
   list.map((x, index)=>(
      <option key={index} value={x}/>
   ))
)

const Input = ({input, type, placeholder, readOnly, dataList}) => (
   <div>
      <input {...input} 
         type={type}
         className="form-control"
         placeholder={placeholder}
         id={input.name}
         readOnly={readOnly}
         list={input.name + '-list'}
      />
      <datalist id={input.name + '-list'}>
         {renderOptions(dataList)}
      </datalist>
   </div>
)

export default Input