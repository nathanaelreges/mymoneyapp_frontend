import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/billingcycles'

export const onLoad = () => {
   const request = axios.get(baseUrl + '/summary')

   return {
      type: 'SUMMARY_FETCHED',
      payload: request
   }
}