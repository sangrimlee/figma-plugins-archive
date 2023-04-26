import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ContentProvider } from './context/ContentContext';
import { SpellCheckProvider } from './context/SpellCheckContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ContentProvider>
      <SpellCheckProvider>
        <App />
      </SpellCheckProvider>
    </ContentProvider>
  </React.StrictMode>,
);
