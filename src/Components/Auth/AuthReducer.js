const storageUser = localStorage.getItem('_my_auth_user')
const storageToken = localStorage.getItem('_my_auth_token')

const INITIAL_STATE = {user: JSON.parse(storageUser), token: storageToken, tokenValid: undefined}


export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'TOKEN_VALIDATED':
         if(action.payload) {

            return {...state, tokenValid: true}
         }
         else {
            localStorage.removeItem('_my_auth_user', undefined)
            localStorage.removeItem('_my_auth_token', undefined)
            
            return {user: undefined, token: undefined, tokenValid: false}
         }

      case 'USER_FETCHED':
         const { name, email, token } = action.payload
         const user = { name, email }
         
         localStorage.setItem('_my_auth_user', JSON.stringify(user))
         localStorage.setItem('_my_auth_token', token)

         return {user, token, tokenValid: true}
      
      default:
         return state
      //
   }
}