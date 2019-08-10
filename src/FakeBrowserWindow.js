import React from 'react';
import IconButton from './IconButton';
import { usePrevAndNextRoutes } from './hooks';
import { navigate } from "@reach/router"

import './FakeBrowserWindow.css';

export default function FakeBrowserWindow({ children, url }) {
  const { nextLink, prevLink } = usePrevAndNextRoutes();

  return (
    <div className="Wrapper">
      <div className="BrowserWindow">
        <div className="BrowserRow">
          <div className="BrowserColumn BrowserColumnLeft">
            <IconButton
              className="BrowserButton"
              isDisabled={prevLink === null}
              onClick={() => navigate(prevLink)}
              type="left"
            />
            <IconButton
              className="BrowserButton"
              isDisabled={nextLink === null}
              onClick={() => navigate(nextLink)}
              type="right"
            />
          </div>
          <div className="BrowserColumn BrowserColumnMiddle">
            <div className="BrowserInput">{url}</div>
          </div>
          <div className="BrowserColumn BrowserColumnRight">
            <div className="BrowserMenuRight">
              <span className="BrowserBar" />
              <span className="BrowserBar" />
              <span className="BrowserBar" />
            </div>
          </div>
        </div>
        <div className="BrowserContent">
          {children}
        </div>
      </div>
    </div>
  );
}