import React from 'react';
import logo from './gatito.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA ELISABELITA <b>CASTORCILLA</b>, VAMOS A POR UNA BIRRITA GUAPI!!!
        </p>
        <a
          className="App-link"
          href="https://www.paragatitos.com/wp-content/uploads/beb%C3%A9-gatito-768x402.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatitos!
        </a>
      </header>
    </div>
  );
}

export default App;
