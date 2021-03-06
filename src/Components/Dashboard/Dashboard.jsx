import React from 'react'
import axios from 'axios'

import Content from '../../common/templates/Content'
import SmallBox from '../../common/templates/SmallBox'

const baseUrl = 'http://localhost:3003/api/billingcycles'


class Dashboard extends React.Component {
   constructor (props) {
      super(props)
      this.state = {credits: 0, debits: 0}
   }

   componentDidMount () {
      axios.get(baseUrl + '/summary').then(x=>{
         this.setState(x.data)
      })
   }
   
   render() {
      const numberWithDots = (x) => (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
      const { credits, debits } = this.state

      return (   
         <Content title="Dashboard" titleSmall="v1.0">
            <SmallBox cols="12 4" bgColor="green" icon="bank" footer="Crédito">
               <h1>R$ {numberWithDots(credits || 0)}</h1><br/>
            </SmallBox>
            <SmallBox cols="12 4" bgColor="red" icon="credit-card" footer="Débito">
               <h1>R$ {numberWithDots(debits || 0)}</h1><br/>
            </SmallBox>
            <SmallBox cols="12 4" bgColor="blue" icon="money" footer="Consolidado">
               <h1>R$ {numberWithDots((credits - debits) || 0)}</h1><br/>
            </SmallBox>
         </Content>
      )
   }
}

export default Dashboard
