import React from 'react';
import showAlert from './components/showAlert';

function App() {
  return (
    <div className="App">
      <header className="App-header" />

      <button onClick={showAlert}>Shake It UP</button>
    </div>
  );
}

export default App;
