import axios from 'axios'
import toastr from 'react-redux-toastr'

const URL = 'http://localhost:3003/oapi/'


export function logout () {
   return {
      type: 'TOKEN_VALIDATED',
      payload: false
   }
}


export function login (data) {
   return submitAuth('sign', data)
}



export function sign (data) {
   return submitAuth('sign', data)
}


export function validateToken () {
   return axios.post(URL + 'validateToken', data).then(res=>{
      return {
         type: 'TOKEN_VALIDATED',
         payload: res.data
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
      if(res.data){
         return {
            type: 'USER_FETCHED',
            payload: res.data
         }
      }
      if(res.errors){
         res.errors.forEach(error => {
            toastr.error('ERRO:', error)   
         })
      }
   }).catch(err=>{
      toastr.error('ERRO:', "Autenticação não pode ser efetuada.")   
   })
}


