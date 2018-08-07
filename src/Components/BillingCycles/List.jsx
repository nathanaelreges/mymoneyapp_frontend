import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onLoad } from './actions'

const renderList = (list) => (
   list.map(item => (
      <tr key={item._id}>
         <td>{item.name}</td>
         <td>{item.month}</td>
         <td>{item.year}</td>
      </tr>
   ))
)

class List extends React.Component {
   componentWillMount () {
      this.props.onLoad()
   }

   render () {
      return (
         <table className="table table-hover">
            <caption>Ciclos de pagamento:</caption>
            <tbody>
               <tr>
                  <th>Nome</th>
                  <th>Mês</th>
                  <th>Ano</th>
               </tr>
               {renderList(this.props.list)}
            </tbody>
         </table>
      )
   }
}

const mapStateToProps = state => ({
   list: state.billingCycles.list
})

const mapDispatchToProps = dispatch => (
   bindActionCreators({ onLoad }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(List)