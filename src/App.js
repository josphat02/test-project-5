import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';
import './index.js'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>React Theme Switcher</h1>
        <p>This is a simple theme switcher app using React.</p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
