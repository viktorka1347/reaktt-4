import React from 'react';
import './App.css';
import ColorView from './task1/ColorView';
import Walks from './task2/Walks';


function App() {
  return (<React.Fragment>
    <div className="task-1">
      <ColorView /> 
    </div>
    <div className="task-2">
      <Walks /> 
    </div>
  </React.Fragment>);
}

export default App;