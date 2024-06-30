import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import TableSorting from './table/TableSorting';
import GlobalFilterTable from './table/GlobalFilterTable';
import PaginationTable from './table/PaginationTable';
import RowSelectionTable from './table/RowSelectionTable';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <TableSorting /> */}
      {/* <GlobalFilterTable /> */}
      {/* <PaginationTable /> */}
      <RowSelectionTable />
    </div>
  );
}

export default App;
