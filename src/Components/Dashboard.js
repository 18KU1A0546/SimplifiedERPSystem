import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
  
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-summary">
        <div className="metric">
          <h2>Total Products</h2>
          <p>100</p>
          <p className="metric-label">Items</p>
        </div>
        <div className="metric">
          <h2>Total Orders</h2>
          <p>50</p>
          <p className="metric-label">Orders</p>
        </div>
        <div className="metric">
          <h2>Total Revenue</h2>
          <p>RS.500000</p>
          <p className="metric-label">Rupees</p>
        </div>
      </div>
      <div className="dashboard-actions">
        <Link to="/products" className="dashboard-action-button">Manage Products</Link>
        <Link to="/orders" className="dashboard-action-button">Manage Orders</Link>
      </div>
    </div>
  );
};

export default Dashboard;
