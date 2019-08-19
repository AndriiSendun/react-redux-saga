import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import Landing from './components/landing/landing';
import Hook from './components/hook/hook';
import FetchData from './components/fetchData/fetch-data';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Landing title='ReactApp' />
        <Hook />
        <FetchData />
      </Provider>
    </div>
  );
}

export default App;
