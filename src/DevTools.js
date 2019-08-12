import React, { useLayoutEffect, useState } from 'react';
import {
  activate as activateBackend,
  initialize as initializeBackend,
} from 'react-devtools-inline/backend';
import { initialize as initializeFrontend } from 'react-devtools-inline/frontend';

export default function DevTools({ iframeRef, tabID }) {
  const [DevTools, setDevTools] = useState(null);

  useLayoutEffect(() => {
    const iframe = iframeRef.current;

    // This should be the iframe the backend hook has been installed in.
    const contentWindow = iframe.contentWindow;

    // Helps with positioning Overlay UI.
    contentWindow.__REACT_DEVTOOLS_TARGET_WINDOW__ = window;

    initializeBackend(contentWindow);

    // Reset preferences and history between tutorial steps,
    // so the tutorial can start from a known state and avoid edge cases.
    localStorage.removeItem('React::DevTools::componentFilters');
    localStorage.removeItem('React::DevTools::selectedSettingsTabID');

    // This returns a React component that can be rendered into your app.
    // <DevTools {...props} />
    const DevTools = initializeFrontend(contentWindow);

    // Schedule an update with React now that the DevTools UI is ready to be rendered.
    setDevTools(DevTools);

    // Let the backend know it's safe to activate.
    activateBackend(contentWindow);
  }, [iframeRef]);

  return DevTools !== null && <DevTools overrideTab={tabID} />;
}
