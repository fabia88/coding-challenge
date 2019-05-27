import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {AutosuggestInput} from './components/AutosuggestInput';

function App() {
  return (
    <div>
      <NavBar />
      <AutosuggestInput />
    </div>
  );
}

export default App;
