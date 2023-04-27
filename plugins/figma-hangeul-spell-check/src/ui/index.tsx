import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ContentProvider } from './context/ContentContext';
import { SpellCheckProvider } from './context/SpellCheckContext';
import { ToastProvider } from './context/ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ToastProvider>
      <ContentProvider>
        <SpellCheckProvider>
          <App />
        </SpellCheckProvider>
      </ContentProvider>
    </ToastProvider>
  </React.StrictMode>,
);
