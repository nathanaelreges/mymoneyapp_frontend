import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Middleware = props =>(
   <BrowserRouter>
      <div>
         {props.children}
      </div>
   </BrowserRouter>
)

export default Middleware