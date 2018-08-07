import { combineReducers } from 'redux'
import tabsReducer from '../common/tab/reducer'
import { reducer as BillingCylclesReducer } from '../Components/BillingCycles'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
   dashboard: () => ({}),
   tabs: tabsReducer,
   billingCycles: BillingCylclesReducer,
   form: reduxFormReducer
})