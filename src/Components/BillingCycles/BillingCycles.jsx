import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../../common/templates/Content'
import { TabsBox, TabsHeader, TabHeader, TabsContent, TabContent } from '../../common/tab'

import { addCycle, editCycle, deleteCycle, init } from './actions'
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
                  <TabHeader title="Listar" target="list"/>
                  <TabHeader title="Incluir" target="add" />
                  <TabHeader title="Editar" target="edit" />
                  <TabHeader title="Deletar" target="delete" />
               </TabsHeader>
               <TabsContent>
                  <TabContent id="list">
                     <List />
                  </TabContent>
                  <TabContent id="add">
                     <Form onSubmit={this.props.addCycle}/>
                  </TabContent>
                  <TabContent id="edit">
                     <Form type="edit" onSubmit={this.props.editCycle}/>
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
   addCycle,
   editCycle,
   deleteCycle
}, dispatch))

export default connect(mapStateToProps, mapDispatchToActions)(BillingCycles)


