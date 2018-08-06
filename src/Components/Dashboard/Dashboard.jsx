import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../../common/templates/Content'
import SmallBox from '../../common/templates/SmallBox'
import { onLoad } from './actions'

class Dashboard extends React.Component {
   componentDidMount () {
      this.props.onLoad()
   }

   render() {
      const { credit, debit } = this.props
      return (   
         <Content title="Dashboard" titleSmall="v1.0">
            <SmallBox cols="12 4" bgColor="green" icon="bank" footer="Crédito">
               <h1>R$ {credit}</h1><br/>
            </SmallBox>
            <SmallBox cols="12 4" bgColor="red" icon="credit-card" footer="Débito">
               <h1>R$ {debit}</h1><br/>
            </SmallBox>
            <SmallBox cols="12 4" bgColor="blue" icon="money" footer="Consolidado">
               <h1>R$ {credit - debit}</h1><br/>
            </SmallBox>
         </Content>
      )
   }
}

const mapStateToProps = state => ({
   credit: state.dashboard.credit,
   debit: state.dashboard.debit,
})

const mapDispatchToActions = dispatch => (
   bindActionCreators({ onLoad }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToActions)(Dashboard)
