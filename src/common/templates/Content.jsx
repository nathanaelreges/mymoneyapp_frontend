import React from 'react'

const Content = props => (
   <div>
      <section className="content-header">
         <h1>
            {props.title}
            <small>{props.titleSmall}</small>
         </h1>
      </section>
      <section className="content container-fluid">
         {props.children}
      </section>
   </div>
)

export default Content