import React from 'react'
import SmallBox from '../../common/templates/SmallBox'

const numberWithDots = (x) => (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))

const Summary = ({credit, debit}) => (
   <fieldset>
      <legend>Sumário</legend>
      <div className="row">
         <SmallBox cols="12 4" bgColor="green" icon="bank" footer="Crédito">
            <h1>R$ {numberWithDots(credit || 0)}</h1><br/>
         </SmallBox>
         <SmallBox cols="12 4" bgColor="red" icon="credit-card" footer="Débito">
            <h1>R$ {numberWithDots(debit || 0)}</h1><br/>
         </SmallBox>
         <SmallBox cols="12 4" bgColor="blue" icon="money" footer="Consolidado">
            <h1>R$ {numberWithDots((credit - debit) || 0)}</h1><br/>
         </SmallBox>
      </div>
   </fieldset>
)

export default Summary

