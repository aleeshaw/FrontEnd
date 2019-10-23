import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import Dashboard from './components/Dashboard.js';

const Routes = () => {

  return (
    <>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Registration} />
      <Route path='/dashboard' component={Dashboard} />
    </>
  )
};

 export default Routes;
