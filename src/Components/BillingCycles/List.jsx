import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconBtn from '../../common/templates/IconBtn'
import { goEditCycle , goDeleteCycle } from './actions'



class List extends React.Component {

   render () {
      const renderList = () => (
         this.props.list.map(item => (
            <tr key={item._id}>
               <td>{item.name}</td>
               <td>{item.month}</td>
               <td>{item.year}</td>
               <td>
                  <IconBtn color="warning" icon="edit" size="xs" moreClass="mr-5"
                     onClick={()=>{this.props.goEditCycle(item)}}
                  />
                  <IconBtn color="danger" icon="times" size="xs" 
                     onClick={()=>{this.props.goDeleteCycle(item)}}
                  />
               </td>
            </tr>
         ))
      )

      return (
         <table className="table table-hover">
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Mês</th>
                  <th>Ano</th>
                  <th className="list-buttons">Ações</th>
               </tr>
            </thead>
            <tbody>
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
      goEditCycle,
      goDeleteCycle
   }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(List)