import React from 'react';

import './FakeBrowserWindow.css';

export default function FakeBrowserWindow({ children, url }) {
  return (
    <div className="Wrapper">
      <div className="BrowserWindow">
        <div className="BrowserRow">
          <div className="BrowserColumn BrowserColumnLeft">
            <span className="BrowserDot" style={{background: '#ED594A'}} />
            <span className="BrowserDot" style={{background: '#FDD800'}} />
            <span className="BrowserDot" style={{background: '#5AC05A'}} />
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