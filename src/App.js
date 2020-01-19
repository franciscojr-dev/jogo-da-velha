import React from 'react';
import { Provider } from 'react-redux';

import Screen from './components/Screen';
import store from './store';

import './App.css';

function App() {
  return (
    <div id="container">
      <Provider store={store}>
        <Screen />
      </Provider>
    </div>
  );
}

export default App;
