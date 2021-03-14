/*import React, {useState} from "react";*/
//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
//import { ItemCount } from './components/ItemCount/ItemCount';


function App() {
	



  return (
    <div className="App">
		<NavBar />		
		<ItemListContainer greeting={'BIENVENIDO'}/>
		{/*<ItemCount stock={15} initial={1}/>*/}
    <br/>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
