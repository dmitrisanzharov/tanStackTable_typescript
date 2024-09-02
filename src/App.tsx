import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import MessAroundTable from './table/MessAroundTable';
import TableGroupCol from './table/TableGroupCol';
import TableHeaders from './table/TableHeaders';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <MessAroundTable /> */}
      {/* <TableGroupCol /> */}
      <TableHeaders />
    </div>
  );
}

export default App;
