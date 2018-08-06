import { combineReducers } from 'redux'
import { reducer as DashboardReducer } from '../Components/Dashboard'

export default combineReducers({
   dashboard: DashboardReducer
})