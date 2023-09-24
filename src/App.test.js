import React from 'react';  
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { render } from '@testing-library/react';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

describe('App', () => {

  test('passes store prop', () => {
    const store = configureStore({
      reducer: rootReducer
    });
  });

});