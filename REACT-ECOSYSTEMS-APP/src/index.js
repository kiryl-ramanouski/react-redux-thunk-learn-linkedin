import React from 'react';
import ReactDom from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from './store';

// Components
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
