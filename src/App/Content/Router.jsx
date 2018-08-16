import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import BillingCycles from '../../Components/BillingCycles'
import Dashboard from '../../Components/Dashboard'



const Router = props => (
   <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/billingcycles" component={BillingCycles} />
   </Switch>
)


export default Router