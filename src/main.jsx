import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Manually set dark class on the body based on the time of day
// This is necessary as the search results sometimes overflow the min-h-screen
// showing the white background even when dark mode is active.
setDarkModeBasedOnTime();

function setDarkModeBasedOnTime() {
  const currentHour = new Date().getHours();

  // Assuming dark mode should be active between 8 PM and 6 AM
  const isNightTime = currentHour < 6 || currentHour >= 20;

  // Apply the 'dark' class to the 'html' tag if it's night time
  if (isNightTime) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}
