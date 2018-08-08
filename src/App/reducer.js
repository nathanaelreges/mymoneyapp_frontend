import { combineReducers } from 'redux'
import tabsReducer from '../common/tab/reducer'
import { reducer as BillingCylclesReducer } from '../Components/BillingCycles'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


export default combineReducers({
   dashboard: () => ({}),
   tabs: tabsReducer,
   billingCycles: BillingCylclesReducer,
   form: formReducer,
   toastr: toastrReducer
})