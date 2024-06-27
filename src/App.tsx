import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import TableSorting from './table/TableSorting';
import GlobalFilterTable from './table/GlobalFilterTable';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <TableSorting /> */}
      <GlobalFilterTable />
    </div>
  );
}

export default App;
