const INITIAL_STATE = {selected: 'list'}


export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'TAB_SELECT':
         return {...state, selected: action.payload}
      default:
         return state
   }
}

