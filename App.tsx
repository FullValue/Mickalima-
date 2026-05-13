import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContent } from './AppContent';

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;