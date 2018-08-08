import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../../common/templates/Content'
import { TabsBox, TabsHeader, TabHeader, TabsContent, TabContent } from '../../common/tab'

import { createCycle, updateCycle, deleteCycle, init } from './actions'
import List from './List'
import Form from './Form'

class BillingCycles extends React.Component {
   componentWillMount () {
      this.props.init()
   }

   render() {
      return (
         <Content title="BillingCycles" titleSmall="Cadastro">
            <TabsBox>
               <TabsHeader>
                  <TabHeader title="Listar" target="list" icon="list"/>
                  <TabHeader title="Incluir" target="add" icon="plus"/>
                  <TabHeader title="Editar" target="edit" icon="pencil"/>
                  <TabHeader title="Deletar" target="delete" icon="trash-o"/>
               </TabsHeader>
               <TabsContent>
                  <TabContent id="list">
                     <List />
                  </TabContent>
                  <TabContent id="add">
                     <Form onSubmit={this.props.createCycle}/>
                  </TabContent>
                  <TabContent id="edit">
                     <Form type="edit" onSubmit={this.props.updateCycle}/>
                  </TabContent>
                  <TabContent id="delete">
                     <Form type="delete" onSubmit={this.props.deleteCycle}/>
                  </TabContent>
               </TabsContent>
            </TabsBox>
         </Content>
      )
   }
}

const mapStateToProps = state => ({selected: state.tabs.selected})

const mapDispatchToActions = dispatch => (bindActionCreators({
   init,
   createCycle,
   updateCycle,
   deleteCycle
}, dispatch))

export default connect(mapStateToProps, mapDispatchToActions)(BillingCycles)


