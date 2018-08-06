import React from 'react'

import Grid from './Grid'

const SmallBox = props => (
   <Grid cols={props.cols}>
      <div className={`small-box bg-${props.bgColor}`}>
         <div className="inner">
            {props.children}
         </div>
         <div className="icon">
            <i className={`fa fa-${props.icon}`}></i>
         </div>
         <div className="small-box-footer">
            {props.footer}
         </div>
      </div>
   </Grid>
)

export default SmallBox