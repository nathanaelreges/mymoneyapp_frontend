import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { select } from './actions'
import If from '../operator/If'

const TabHeader = props => (
   <If value={props.showList[props.target] == true}>
      <li className={props.selected == props.target? 'active': ''} >
         <a href="#" data-toggle={props.target} onClick={()=>{props.select(props.target)}}>
            {props.title}
         </a>
      </li>
   </If>
)

const mapStateToProps = state => ({
   selected: state.tabs.selected,
   showList: state.tabs.show
})

const mapDispatchToActions = dispatch => (
   bindActionCreators({select}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToActions)(TabHeader)