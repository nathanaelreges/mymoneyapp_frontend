import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../../common/templates/Content'
import TabsBox from '../../common/tab/TabsBox'
import TabsHeader from '../../common/tab/TabsHeader'
import TabHeader from '../../common/tab/TabHeader'
import TabsContent from '../../common/tab/TabsContent'
import TabContent from '../../common/tab/TabContent'
import { select, show } from '../../common/tab/actions'

class BillingCycles extends React.Component {
   componentWillMount () {
      this.props.show('list', 'delete')
      this.props.select('list')
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
                  <TabContent id="list"><h1>list</h1></TabContent>
                  <TabContent id="add"><h1>add</h1></TabContent>
                  <TabContent id="edit"><h1>edit</h1></TabContent>
                  <TabContent id="delete"><h1>delete</h1></TabContent>
               </TabsContent>
            </TabsBox>
         </Content>
      )
   }
}

const mapStateToProps = state => ({selected: state.tabs.selected})

const mapDispatchToActions = dispatch => (bindActionCreators({ select, show }, dispatch))

export default connect(mapStateToProps, mapDispatchToActions)(BillingCycles)


