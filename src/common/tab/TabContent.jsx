import React from 'react'
import { connect } from 'react-redux'

import If from '../operator/If'

const TabContent = props => (
   <If value={props.showList[props.id] == true}>
      <div className={'tab-pane' + (props.id == props.selected? ' active': '')}>
         {props.children}
      </div>
   </If>
)

const mapStateToProps = state => ({
   showList: state.tabs.showList,
   selected: state.tabs.selected
})

export default connect(mapStateToProps)(TabContent)