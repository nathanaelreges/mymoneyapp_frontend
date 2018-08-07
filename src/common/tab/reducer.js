const INITIAL_STATE = {selected: 'list', showList: []}


export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'TAB_SELECT':
         return {...state, selected: action.payload}
      case 'TAB_SHOW':
         return {...state, showList: action.payload}
      default:
         return state
   }
}

