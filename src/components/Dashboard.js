import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserItems from './UserItems.js';
import '../UserItems.css';

const Dashboard = () => {
document.body.style.backgroundColor = '#cccccc';
  return (
    <>
    <Link to='/feed'><button>My Feed</button></Link>
    <UserItems />
    </>
  );
};

export default Dashboard;