// Must be included first (before React or any compoents that might include React).
import './setupDevToolsBackend';

import React from 'react';
import { unstable_createSyncRoot as createSyncRoot } from 'react-dom';
import { Router } from '@reach/router';
import Home from './content/Home';
import ROUTES from './routes';

import './index.css';

const root = createSyncRoot(document.getElementById('root'));
root.render(
  <Router>
    <Home path="/" />
    {Object.entries(ROUTES).map(([path, Component]) => (
      <Component key={path} path={path} />
    ))}
  </Router>
);
