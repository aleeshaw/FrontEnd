import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignOutButton from "./components/SignOutButton";
import Dashboard from "./components/Dashboard";
import Feed from "./components/Feed";

const App = () => {
  

    return (
      <div className="container">
        <SignOutButton />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/feed" component={Feed} />
        <Route
            exact
            path="/loginaftersignup"
            render={props => <Login register={true} />}
        />    
      </div> //container
    );
};

export default App;
