import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const URL = 'http://localhost:3003/oapi/'


export const logout = () => {
   return {
      type: 'TOKEN_VALIDATED',
      payload: false
   }
}


export const login = (data) => {
   return submitAuth('login', data)
}



export const sign = (data) => {
   return submitAuth('sign', data)
}


export const validateToken = (data) => {
   return axios.post(URL + 'validateToken', {token: data}).then(res=>{
      return {
         type: 'TOKEN_VALIDATED',
         payload: res.data.valid
      }
   }).catch(err=>{
      toastr.error('ERRO:', "Autenticação não pode ser efetuada.")   
      return {
         type: 'TOKEN_VALIDATED',
         payload: false
      }
   })
}




function submitAuth (type, data) {
   return axios.post(URL + type, data).then(res=>{
      return {
         type: 'USER_FETCHED',
         payload: res.data
      }
   })
   .catch(err=>{
      err.response.data.errors.forEach(text => {
         toastr.error('ERRO:', text)
      })
      return {type: 'SKIP'}
   })
}


