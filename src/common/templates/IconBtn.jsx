import React from 'react'

const IconBtn = ({color, icon, onClick}) => (
   <button className={'btn btn-sm btn-' + color} onClick={onClick}>
      <i className={'fa fa-' + icon}></i>
   </button>
)

export default IconBtn