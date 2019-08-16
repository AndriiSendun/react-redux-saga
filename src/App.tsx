import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import Landing from './components/landing';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Landing title='ReactApp' />
      </Provider>
    </div>
  );
}

export default App;
