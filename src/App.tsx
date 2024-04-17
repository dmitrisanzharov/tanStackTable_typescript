import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import GroupingTable from './table/GroupingTable';
import SortingTable from './table/SortingTable';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      {/* <GroupingTable /> */}
      <SortingTable />
    </div>
  );
}

export default App;
