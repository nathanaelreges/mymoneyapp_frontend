import axios from 'axios'
import { initialize as initForm, arrayInsert, arrayRemove, change } from 'redux-form'
import { toastr } from 'react-redux-toastr'

import { TabActions } from '../../common/tab'

const BaseURL = 'http://localhost:3003/api/billingcycles'

const INITIAL_FORM_STATE = {credits: [{}], debits: [{}]}

export const init = () => ([
   TabActions.show('list', 'add'),
   TabActions.select('list'),
   fetchList(),
   initForm('billingCycles', INITIAL_FORM_STATE)
])



export const showEditCycle = data => {
   const credits = data.credits
   if(!credits || credits.length == 0) {
      data.credits = [{}]
   }
   const debits = data.debits
   if(!debits || debits.length == 0) {
      data.debits = [{}]
   }

   return [   
      TabActions.show('edit'),
      TabActions.select('edit'),
      initForm('billingCycles', data)
   ]
}

export const showDeleteCycle = data => ([   
   TabActions.show('delete'),
   TabActions.select('delete'),
   initForm('billingCycles', data)
])



export const createCycle = data => (submit('post', data))

export const updateCycle = data => (submit('put', data))

export const deleteCycle = data => (submit('delete', data))




export const ItemList = {
   addField (field, index) {
      return arrayInsert('billingCycles', field, index, {})
   },
   copyField (field, index, data) {
      return arrayInsert('billingCycles', field, index, data || {})
   },
   deleteField (list, field, index) {
      if(list.length > 1){
         return arrayRemove('billingCycles', field, index)
      }
      else{
         return change('billingCycles', field, [{}]) 
      }
   }
}


const submit = (method, data) => {
   const id = data._id? ('/' + data._id) : ''

   if(data){
      data.credits = filterList(data.credits)
      data.debits = filterList(data.debits)
   }
   console.log(data)

   return axios[method](BaseURL + id, data)
      .then(() => {
         toastr.success('Sucesso', 'Sua ação foi concluida.')
         return init()
      })
      .catch((err) =>{
         err.response.data.erros.forEach(text => {
            toastr.error('Erro', text)
         })
         return {type: 'SKIP'}
      })
   //
}

const fetchList = () => (
   axios.get(BaseURL).then(res=>({
      type: "LIST_FETCHED",
      payload: res.data
   }))
)

const filterList = (list) => {
   return list.reduce((acc, cur, index)=>{
      if(cur.name == undefined && cur.value == undefined || cur.name == "" && cur.value == ""){
         return acc
      }
      else {
         return acc.concat([cur])
      }
   }, [])
}
