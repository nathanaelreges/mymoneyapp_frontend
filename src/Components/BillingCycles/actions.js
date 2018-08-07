import axios from 'axios'

const BaseURL = 'http://localhost:3003/api/billingcycles'


export const onLoad = () => (
   axios.get(BaseURL).then(res=>({
      type: "LIST_FETCHED",
      payload: res.data
   }))
)