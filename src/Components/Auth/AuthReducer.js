const storageUser = localStorage.getItem('_my_auth_user')
const storageToken = localStorage.getItem('_my_auth_token')

const INITIAL_STATE = {user: {name: 'Nathanel Reges', email: 'nathanaelreges@gmail.com'}} //JSON.parse(storageUser), token: storageToken}


export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'TOKEN_VALIDATED':
         if(action.payload) {
            return {...state, validToken: true}
         }
         else {
            localStorage.removeItem('_my_auth_user', undefined)
            localStorage.removeItem('_my_auth_token', undefined)
            
            return {user: undefined, token: undefined, validToken: false}
         }

      case 'USER_FETCHED':
         const { name, email, token } = action.payload
         const user = { name, email }
         
         localStorage.setItem('_my_auth_user', JSON.stringify(user))
         localStorage.setItem('_my_auth_token', token)

         return {user, token, validToken: true}
      
      default:
         return state
      //
   }
}