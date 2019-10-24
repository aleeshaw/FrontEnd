import React, { useState, Fragment, Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/utilis/PrivateRoute";
import Signup from "./components/Signup";
import Auth from "./components/AuthService";
import SignOutButton from "./components/SignOutButton";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import ItemTable from "./tables/ItemTable";
import Dashboard from "./components/Dashboard";

const App = () => {
  

    return (
      <div className="container">
        <SignOutButton />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route
            exact
            path="/loginaftersignup"
            render={props => <Login register={true} />}
        />    
      </div> //container
    );
};

export default App;
