

// /src/pages/InteractiveLearningPage.js

import React from 'react';

import NavigationBar from '../components/NavigationBar';

const InteractiveLearningPage = () => {
  // Define different learning sections
  const learningSections = [
    { id: 2, label: 'Puzzles', path: '/interactive-learning/puzzles' },
    // Add more sections as needed
  ];

  return (
    <div className="interactive-learning-container">
      <h1>Interactive Learning</h1>
      {/* Display the navigation bar */}
      <NavigationBar sections={learningSections} />
      {/* Display the quiz component */}
    </div>
  );
}

export default InteractiveLearningPage;

