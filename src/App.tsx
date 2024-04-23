import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import GroupingTable from './table/GroupingTable';
import SortingTable from './table/SortingTable';
import GlobalFilterTable from './table/GlobalFilterTable';
import ColumnFilteringTable from './table/ColumnFilteringTable';
import ColumnFilteringTable2 from './table/ColumnFilteringTable2';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <GroupingTable /> */}
      {/* <SortingTable /> */}
      {/* <GlobalFilterTable /> */}
      {/* <ColumnFilteringTable /> */}
      <ColumnFilteringTable2 />
    </div>
  );
}

export default App;
