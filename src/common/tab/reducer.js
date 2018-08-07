const INITIAL_STATE = {selected: ''}


const reducer = (state, action) => {
   switch (action.type) {
      case 'TAB_SELECT':
         return {...state, selected: action.payloads}
      default:
         return state
   }
}