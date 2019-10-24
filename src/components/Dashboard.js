import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Dashboard.css';

const Dashboard = () => {
  return (
    <>
    <div className = 'dash-head'>
    <h1>African Marketplace Dashboard</h1>
    <Link to='/'>
      <Button>Sign Out</Button>
    </Link>
    </div>    
    </>
  )
};

export default Dashboard;