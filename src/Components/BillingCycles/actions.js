import axios from 'axios'
import { initialize as initForm } from 'redux-form'
import { toastr } from 'react-redux-toastr'

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




export const addCycle = data => {
   const request = axios.post(BaseURL, data)
   return handleResponse(request)
}

export const editCycle = data => {
   const request = axios.put(BaseURL + '/' + data._id, data)
   return handleResponse(request)
}

export const deleteCycle = data => {
   const request = axios.delete(BaseURL + '/' + data._id)
   return handleResponse(request)
}


const handleResponse = (request) => {
   return request.then(() => {
      toastr.success('Sucesso', 'Sua ação foi concluida.')
      return init()
   })
   .catch((err) =>{
      err.response.data.erros.forEach(text => {
         toastr.error(text)
      })
      return {type: 'SKIP'}
   })
}



const fetchList = () => (
   axios.get(BaseURL).then(res=>({
      type: "LIST_FETCHED",
      payload: res.data
   }))
)

