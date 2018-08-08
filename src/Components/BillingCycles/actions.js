import axios from 'axios'
import { initialize as initForm } from 'redux-form'


import { TabActions } from '../../common/tab'

const BaseURL = 'http://localhost:3003/api/billingcycles'


export const onListLoad = () => (
   fetchList()
)

export const init = () => (
   [
      TabActions.show('list', 'add'),
      TabActions.select('list'),
      fetchList(),
      initForm('billingCycles', {})
   ]
)


export const onListEdit = data => (
   [   
      TabActions.show('edit'),
      TabActions.select('edit'),
      initForm('billingCycles', data)
   ]
)

export const onListDelete = data => (
   [   
      TabActions.show('delete'),
      TabActions.select('delete'),
      initForm('billingCycles', data)
   ]
)




export const onAdd = data => (
   axios.post(BaseURL, data)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)

export const onEdit = data => (
   axios.put(BaseURL + '/' + data._id, data)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)

export const onDelete = data => (
   axios.delete(BaseURL + '/' + data._id)
      .then(init)
      .catch((err) =>{
         return {type: 'test'}
      })
   //
)




function fetchList () {
   return axios.get(BaseURL).then(res=>({
      type: "LIST_FETCHED",
      payload: res.data
   }))
}

