import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import TableSorting from './table/TableSorting';
import GlobalFilterTable from './table/GlobalFilterTable';
import PaginationTable from './table/PaginationTable';
import RowSelectionTable from './table/RowSelectionTable';
import ColumnOrdering from './table/ColumnOrdering';
import FacetedValues from './table/FacetedValues';
import ColHiding from './table/ColHiding';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <TableSorting /> */}
      {/* <GlobalFilterTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <ColumnOrdering /> */}
      {/* <FacetedValues /> */}
      <ColHiding />
    </div>
  );
}

export default App;
