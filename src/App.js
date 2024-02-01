// /src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import UserProfilePage from './pages/userProfilePage';
// import HealthInsightsPage from './pages/HealthInsightsPage';
import InteractiveLearningPage from './pages/InteractiveLearningPage';
import HealthInsightsPage from './pages/HealthInsightsPage';
import RegistrationPage from './pages/RegistrationPage';
import BMICalculatorPage from './pages/BMICalculatorPage';
import './Style/main.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/bmi-calculator" component={BMICalculatorPage} /> {/* Add the new route */}
        <Route path="/user-profile" component={UserProfilePage} />
        <Route path="/health-insights" component={HealthInsightsPage} />
        <Route path="/interactive-learning" component={InteractiveLearningPage} />
        <Route path="/register" component={RegistrationPage} />
      </Switch>
    </Router>
  );
}

export default App;








