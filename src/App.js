import React from 'react';
import logo from './logo.svg';
import { Button} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          Welcome to the DigiByte Assets Explorer
        </a>
        <Button href ='/blocks'>
          Blocks
        </Button>
      </header>
    </div>
  );
}

export default App;
