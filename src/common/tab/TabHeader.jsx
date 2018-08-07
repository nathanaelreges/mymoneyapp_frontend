import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { select } from './actions'

const TabHeader = props => (
   <li className={props.selected == props.target? 'active': ''} >
      <a href="#" data-toggle={props.target} onClick={()=>{props.select(props.target)}}>
         {props.title}
      </a>
   </li>
)

const mapStateToProps = state => ({selected: state.tabs.selected})

const mapDispatchToActions = dispatch => (
   bindActionCreators({select}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToActions)(TabHeader)