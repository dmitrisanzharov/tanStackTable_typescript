import React from 'react';
import './App.css';

// table components
import BasicTable from './table/BasicTable';
import GroupingTable from './table/GroupingTable';

function App() {
  return (
    <div>
      <h1>Table should be below</h1>
      <hr />
      {/* <BasicTable /> */}
      <GroupingTable />
    </div>
  );
}

export default App;
