import React from 'react';
import './App.css';

// table components
import BasicTable2 from './table/BasicTable2';
import BasicTable from './table/BasicTable';
import MessAroundTable from './table/MessAroundTable';
import TableGroupCol from './table/TableGroupCol';
import TableHeaders from './table/TableHeaders';
import SortingTable from './table/SortingTable';
import GlobalFilterTable from './table/GlobalFilterTable';
import ColumnFilterTable from './table/ColumnFilterTable';
import ColumnFilterTable2 from './table/ColumnFilterTable2';
import PaginationTable from './table/PaginationTable';


function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      <PaginationTable />
      {/* <ColumnFilterTable2 /> */}
      {/* <GlobalFilterTable /> */}
      {/* <BasicTable2 /> */}
      {/* <BasicTable /> */}
      {/* <MessAroundTable /> */}
      {/* <TableGroupCol /> */}
      {/* <TableHeaders /> */}
      {/* <SortingTable /> */}
    </div>
  );
}

export default App;
