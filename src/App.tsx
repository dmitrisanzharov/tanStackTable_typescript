import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import BasicTableCompleted from './table/BasicTableCompleted';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      <BasicTableCompleted />
    </div>
  );
}

export default App;
