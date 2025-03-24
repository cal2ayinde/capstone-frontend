


import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // Assuming your CSS file is in the 'src' folder
import App from './App.jsx'; // Import the main App component

// Create root and render the App within StrictMode
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);