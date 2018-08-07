import React from 'react'

import Content from '../../common/templates/Content'
import TabsBox from '../../common/tab/TabsBox'
import TabsHeader from '../../common/tab/TabsHeader'
import TabHeader from '../../common/tab/TabHeader'
import TabsContent from '../../common/tab/TabsContent'
import TabContent from '../../common/tab/TabContent'

class BillingCycles extends React.Component {
   render() {
      return (
         <Content title="BillingCycles" titleSmall="Cadastro">
            <TabsBox>
               <TabsHeader>
                  <TabHeader title="Listar" target="list" />
                  <TabHeader title="Incluir" target="add" />
                  <TabHeader title="Editar" target="edit" />
                  <TabHeader title="Deletar" target="delete" />
               </TabsHeader>
            </TabsBox>
         </Content>
      )
   }
}

export default BillingCycles


