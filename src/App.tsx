import React, { createContext, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/nav';
import Test from './test/test';
import Test2 from './test/test2';
import Maincontainer from './component/mainContainer/mainContainer';

interface MyContextType{
  value:string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

function App() {
  const [value, setValue] = useState<string>('Hello from Context!');

  return (
    <MyContext.Provider value={{ value, setValue }}>
    <div className="App">
      <nav>
        <Nav/>
      </nav>
      <header className="App-header">
  
      </header>
      <section>
        {/* <Container/> */}
        {/* <Test/>
        <Test2/> */}
        <Maincontainer/>
      </section>
    </div>
    </MyContext.Provider>
  );
}

export default App;


