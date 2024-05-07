import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import GroupingTable from './table/GroupingTable';
import SortingTable from './table/SortingTable';
import GlobalFilterTable from './table/GlobalFilterTable';
import ColumnFilteringTable from './table/ColumnFilteringTable';
import ColumnFilteringTable2 from './table/ColumnFilteringTable2';
import PaginationTable from './table/PaginationTable';
import RowSelectionTable from './table/RowSelectionTable';
import FacetedValuesTable from './table/FacetedValuesTable';
import ColumnHidingTable from './table/ColumnHidingTable';

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
      {/* <ColumnFilteringTable2 /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <FacetedValuesTable /> */}
      <ColumnHidingTable />
    </div>
  );
}

export default App;
