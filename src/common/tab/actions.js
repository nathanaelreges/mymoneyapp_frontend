export const select = (target) => {
   return {
      type: 'TAB_SELECT',
      payload: target
   }
}


export const show = (...ids) => {

   console.log()

   return {
      type: 'TAB_SHOW',
      payload: ids.reduce((acc, cur) => {
         acc[cur] = true
         return acc
      },{})
   }
}