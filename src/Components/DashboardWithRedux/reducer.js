const INITIAL_STATE = {credit: 0, debit: 0}

export default (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case 'SUMMARY_FETCHED':
         return action.payload.data
      default:
         return state
   }
}