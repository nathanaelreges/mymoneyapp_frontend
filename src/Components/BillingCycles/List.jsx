import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconBtn from '../../common/templates/IconBtn'
import { onListLoad, onListEdit , onListDelete } from './actions'



class List extends React.Component {
   componentWillMount () {
      this.props.onLoad()
   }

   render () {
      const renderList = () => (
         this.props.list.map(item => (
            <tr key={item._id}>
               <td>{item.name}</td>
               <td>{item.month}</td>
               <td>{item.year}</td>
               <td>
                  <IconBtn color="warning" icon="edit" size="xs" moreClass="mr-5"
                     onClick={()=>{this.props.onEdit(item)}}
                  />
                  <IconBtn color="danger" icon="times" size="xs" 
                     onClick={()=>{this.props.onDelete(item)}}
                  />
               </td>
            </tr>
         ))
      )

      return (
         <table className="table table-hover">
            <tbody>
               <tr>
                  <th>Nome</th>
                  <th>Mês</th>
                  <th>Ano</th>
                  <th>Ações</th>
               </tr>
               {renderList()}
            </tbody>
         </table>
      )
   }
}

const mapStateToProps = state => ({
   list: state.billingCycles.list
})

const mapDispatchToProps = dispatch => (
   bindActionCreators({ 
      onLoad: onListLoad,
      onEdit: onListEdit,
      onDelete: onListDelete
   }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(List)