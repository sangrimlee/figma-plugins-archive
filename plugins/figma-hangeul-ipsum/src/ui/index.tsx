import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AppStateProvider } from './contexts/AppState';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
);
