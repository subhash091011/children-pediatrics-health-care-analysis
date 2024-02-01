// /src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Child's Dashboard</h1>
      <p>Welcome to the interactive dashboard for children's health. Explore the exciting features and activities below:</p>

      <div className="dashboard-links">
        <Link to="/user-profile">UserProfile</Link>
        <Link to="/interactive-learning">Interactive Learning</Link>
        <Link to="/health-insights">Health Insights</Link>

        {/* Add a link for the BMI Calculator */}
        <Link to="/bmi-calculator">BMI Calculator</Link>
      </div>

      {/* Add more links for other sections */}
    </div>
  );
}

export default DashboardPage;
