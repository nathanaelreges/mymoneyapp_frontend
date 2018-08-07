import axios from 'axios'
import { reset as resetReduxForm } from 'redux-form'

import { TabActions } from '../../common/tab'

const BaseURL = 'http://localhost:3003/api/billingcycles'


export const onLoad = () => (
   fetchList()
)

export const onAdd = data => (
   axios.post(BaseURL, data)
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

function init () {
   return [
      TabActions.show('list', 'add'),
      TabActions.select('list'),
      fetchList()
   ]
}