import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserItems from './UserItems.js';
import UserForm from './UserForm.js';
import '../UserItems.css';

const Dashboard = () => {
document.body.style = 'backgound: red';
  return (
    <>
    <div className='dashpage'>
    <Link to='/feed'><button>My Feed</button></Link>
    <UserItems />
    </div>
    </>
  );
};

export default Dashboard;