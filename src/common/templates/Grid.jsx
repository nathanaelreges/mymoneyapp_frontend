import React from 'react'


const Grid = props => {
   const cols = props.cols.split(' ')
   const prefixes = ['col-xs-', 'col-sm-', 'col-md-', 'col-lg-']
   
   const colsClass = cols.reduce((acc, cur, index) => (
      acc + prefixes[index] + cur + ' '
   ),'')
   
   return (
      <div className={colsClass}>
         {props.children}
      </div>
   )
}

export default Grid