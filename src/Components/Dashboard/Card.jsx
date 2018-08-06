import React from 'react'

import Grid from '../../common/templates/Grid'

const Card = props => (
   <Grid cols="4 12">
      <SmallBox bgColor="green" icon="money">
         {credit - debit}
      </SmallBox>
   </Grid>
)

export default Card