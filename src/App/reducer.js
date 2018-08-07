import { combineReducers } from 'redux'
import tabsReducer from '../common/tab/reducer'
import { reducer as BillingCylclesReducer } from '../Components/BillingCycles'

export default combineReducers({
   dashboard: () => ({}),
   tabs: tabsReducer,
   billingCycles: BillingCylclesReducer
})