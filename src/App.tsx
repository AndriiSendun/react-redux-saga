import React from 'react';

import Landing from './components/landing';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Landing 
        title="Hello User"
        name="my Name"
       />
    </div>
  );
}

export default App;
