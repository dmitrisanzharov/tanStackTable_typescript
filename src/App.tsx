import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import BasicTableTests1 from './table/BasicTableTests1'; 

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      <BasicTableTests1 />
    </div>
  );
}

export default App;
