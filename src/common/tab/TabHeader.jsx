import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { select } from './actions'
import If from '../operator/If'

const TabHeader = props => (
   <If value={props.showList[props.target] == true}>
      <li className={props.target == props.selected? 'active': ''} >
         <a href="javascript:;" onClick={()=>{props.select(props.target)}}> 
            {props.title}
         </a>
      </li>
   </If>
)

const mapStateToProps = state => ({
   selected: state.tabs.selected,
   showList: state.tabs.showList
})

const mapDispatchToActions = dispatch => (
   bindActionCreators({ select }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToActions)(TabHeader)