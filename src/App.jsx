import React from 'react';
import Heading from './compo/HEAD.jsx';
import Leaderboard from './compo/Leaderboard.jsx';
import Table from './compo/table.jsx';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-8">
      <Heading />
      <div className="flex justify-between items-start w-full px-10 mt-10">
        
        <Table />
      </div>
    </div>
  );
}

export default App;