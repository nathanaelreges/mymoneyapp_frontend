import React from 'react'

const If = props => {
   if(props.value){
      return props.children
   }
   else {
      return false
   }
}


export default If