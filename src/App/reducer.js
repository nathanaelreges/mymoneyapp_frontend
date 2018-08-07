import { combineReducers } from 'redux'
import tabsReducer from '../common/tab/reducer'

export default combineReducers({
   dashboard: () => ({}),
   tabs: tabsReducer
})