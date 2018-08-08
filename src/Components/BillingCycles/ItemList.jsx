import React from 'react'
import { Field } from 'redux-form'

import Grid from '../../common/layout/Grid'
import Input from '../../common/form/Input'




class ItemList extends React.Component {
   renderRows () {
      let { list } = this.props
      list = list.length === 0 ? [{}] : list

      return list.map((item, index) => (
         <tr key={item._id}>
            <td>
               <Field name={`credits[${index}].name`} component={Input}
                  placeholder="Insira o nome" type="text"
               />
             </td>
            <td>
               <Field name={`credits[${index}].value`} component={Input}
                  placeholder="Insira o valor" type="number"
               />
            </td>
         </tr>
      ))
   }

   render () {
      return (
         <Grid cols="12 6">
            <fieldset>
               <legend>Créditos</legend>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.renderRows()}
                  </tbody>
               </table>
            </fieldset>
         </Grid>
      )
   }

}

export default ItemList