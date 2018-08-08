import axios from 'axios'
import { initialize as initForm } from 'redux-form'

import { TabActions } from '../../common/tab'

const BaseURL = 'http://localhost:3003/api/billingcycles'


export const init = () => ([
   TabActions.show('list', 'add'),
   TabActions.select('list'),
   fetchList(),
   initForm('billingCycles', {})
])


export const goEditCycle = data => ([   
   TabActions.show('edit'),
   TabActions.select('edit'),
   initForm('billingCycles', data)
])

export const goDeleteCycle = data => ([   
   TabActions.show('delete'),
   TabActions.select('delete'),
   initForm('billingCycles', data)
])




export const addCycle = data => (
   axios.post(BaseURL, data)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)

export const editCycle = data => (
   axios.put(BaseURL + '/' + data._id, data)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)

export const deleteCycle = data => (
   axios.delete(BaseURL + '/' + data._id)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)




const fetchList = () => (
   axios.get(BaseURL).then(res=>({
      type: "LIST_FETCHED",
      payload: res.data
   }))
)

