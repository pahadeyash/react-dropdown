import React from 'react';
import './App.scss';
import Dropdown from './components/Dropdown/Dropdown';

const items = [
  {
    id: 1,
    value: 'Option 1' 
  },
  {
    id: 2,
    value: 'Option 2' 
  },
  {
    id: 3,
    value: 'Option 3' 
  },
  {
    id: 4,
    value: 'Option 4' 
  },
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dropdown items={items}/>
      </div>
    </div>
  );
}

export default App;
