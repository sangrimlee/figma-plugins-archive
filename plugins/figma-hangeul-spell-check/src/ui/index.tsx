import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ContentProvider } from './context/ContentContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>,
);
