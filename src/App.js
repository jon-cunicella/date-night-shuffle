import React from 'react';
import showAlert from './components/showAlert';
import '../public/stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="DaRealHeadah">Magic Date Ball</h1>
      </header>
      <div className="ball-outer">
        <div className="ball-inner" />
      </div>

      <button onClick={showAlert}>Shake It UP</button>
    </div>
  );
}

export default App;
