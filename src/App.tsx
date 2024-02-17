import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/nav';
import Container from './component/container/container';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav/>
      </nav>
      <header className="App-header">
  
      </header>
      <section>
        <Container/>
      </section>
    </div>
  );
}

export default App;
