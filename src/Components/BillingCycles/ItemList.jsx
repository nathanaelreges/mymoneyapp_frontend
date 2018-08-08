import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field } from 'redux-form'

import Grid from '../../common/layout/Grid'
import Input from '../../common/form/Input'
import IconBtn from '../../common/templates/IconBtn'
import { ItemList as actions } from './actions'




class ItemList extends React.Component {
   renderRows () {
      let { list, addField, copyField, deleteField, field } = this.props
      list = list.length == 0 ? [{}] : list

      return list.map((item, index) => (
         <tr key={index}>
            <td>
               <Field name={`${field}[${index}].name`} component={Input}
                  placeholder="Insira o nome" type="text"
               />
            </td>
            <td>
               <Field name={`${field}[${index}].value`} component={Input}
                  placeholder="Insira o valor" type="number"
               />
            </td>
            <td className="item-list-buttons">
               <IconBtn color="primary" icon="plus" size="xs" onClick={()=>addField(field, index+1)}/>
               <IconBtn color="warning" icon="copy" size="xs" onClick={()=>copyField(field, index+1, item)}/>
               <IconBtn color="danger" icon="trash-o" size="xs" 
                  onClick={()=>{list.length>1 && deleteField(field, index)}}/>
            </td>
         </tr>
      ))
   }

   render () {
      return (
         <Grid cols="12 6">
            <fieldset>
               <legend>{this.props.label}</legend>
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


const maDispatchToProps = dispatch => (
   bindActionCreators(actions, dispatch)
)

export default connect(null, maDispatchToProps)(ItemList)