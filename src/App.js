import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import Portfolio from './components/Portfolio';

const store = configureStore({
  reducer: rootReducer
});

function App() {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );
}

export default App;