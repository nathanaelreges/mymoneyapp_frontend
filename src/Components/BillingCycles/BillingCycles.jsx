import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../../common/templates/Content'
import { TabsBox, TabsHeader, TabHeader, TabsContent, TabContent, TabActions  } from '../../common/tab'

import { onAdd } from './actions'
import List from './List'
import Form from './Form'

class BillingCycles extends React.Component {
   componentWillMount () {
      this.props.showTabs('list', 'add')
      this.props.selectTab('list')
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
                     <Form onSubmit={this.props.onAdd}/>
                  </TabContent>
                  <TabContent id="edit"></TabContent>
                  <TabContent id="delete"><h1>delete</h1></TabContent>
               </TabsContent>
            </TabsBox>
         </Content>
      )
   }
}

const mapStateToProps = state => ({selected: state.tabs.selected})

const mapDispatchToActions = dispatch => (bindActionCreators({ 
   selectTab: TabActions.select, 
   showTabs: TabActions.show,
   onAdd
}, dispatch))

export default connect(mapStateToProps, mapDispatchToActions)(BillingCycles)


