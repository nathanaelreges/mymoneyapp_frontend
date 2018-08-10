import React from 'react'

const IconBtn = ({color = 'primary', icon, onClick, size, moreClass, disabled}) => {
   const btnSize = size? ' btn-' + size: ''
   moreClass = moreClass? ' ' + moreClass: ''

   return (
      <button type="button" className={'btn btn-' + color + btnSize + moreClass } 
         onClick={onClick} disabled={disabled}
      >
         <i className={'fa fa-' + icon}></i>
      </button>
   )
}

export default IconBtn