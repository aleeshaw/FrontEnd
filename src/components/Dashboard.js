import React from 'react';
import { Route } from 'react-router-dom';
import UserItems from './UserItems.js';
import Logout from './SignOutButton.js';

const Dashboard = () => {

  return (
    <>
    <UserItems />
    </>
  );
};

export default Dashboard;