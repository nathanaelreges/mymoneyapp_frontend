import React from 'react'

const TabHeader = props => (
   <li className="" >
      <a href="#" data-toggle={props.target}>
         {props.title}
      </a>
   </li>
)

export default TabHeader