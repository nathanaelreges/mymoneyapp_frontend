import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import BillingCycles from '../../Components/BillingCycles'
import Dashboard from '../../Components/Dashboard'
import Auth from '../../Components/Auth'


const Router = props => (
   <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/billingcycles" component={BillingCycles} />
      <Route path="/login" component={Auth} />
   </Switch>
)


export default Router