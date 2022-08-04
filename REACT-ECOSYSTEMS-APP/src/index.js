import React from 'react';
import ReactDom from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from './store';

// Redux-persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Components
import App from './App';

const store = configureStore();
const persistor = persistStore(store);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
