import React from 'react'

const IconBtn = ({color = 'primary', icon, onClick, size, moreClass}) => {
   const btnSize = size? ' btn-' + size: ''
   moreClass = moreClass? ' ' + moreClass: ''

   return (
      <button className={'btn btn-' + color + btnSize + moreClass } onClick={onClick}>
         <i className={'fa fa-' + icon}></i>
      </button>
   )
}

export default IconBtn