import React from 'react';
import { Link } from "@reach/router";
import App from '../App';
import ROUTES from '../routes';

export default function Content() {
  return (
    <App title="React DevTools">
      <p>
        The right hand panel contains a fake web browser with the React DevTools extension connected to a small React app.
      </p>
      <p>
        Below is a series of exercises that use the example app to demonstrate the features of React DevTools.
      </p>
      <ul>
        {Object.entries(ROUTES).map(([path, Component]) => (
          <li key={path}>
            <Link to={path}>
              {Component.title}
            </Link>
          </li>
        ))}
      </ul>
    </App>
  );
}