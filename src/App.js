import React from 'react';
import { Link } from '@reach/router';
import FakeBrowserWindow from './FakeBrowserWindow';
import { usePrevAndNextRoutes } from './hooks';

import styles from './App.module.css';

export default function App({ children, defaultTabID, iframeSource, title }) {
  const { nextLink, prevLink } = usePrevAndNextRoutes();

  return (
    <div className={styles.App}>
      <div className={styles.Left}>
        <div className={styles.LeftTop}>
          <h1 className={styles.LeftTopHeader}>{title}</h1>
        </div>
        {(nextLink !== null || prevLink !== null) && (
          <div className={styles.LeftMiddle}>
            {prevLink !== null ? (
              <Link className={styles.LeftMiddleLink} to={prevLink}>
                « Prev
              </Link>
            ) : (
              <span>« Prev</span>
            )}
            <Link className={styles.LeftMiddleLink} to="/">
              Home
            </Link>
            {nextLink !== null ? (
              <Link className={styles.LeftMiddleLink} to={nextLink}>
                Next »
              </Link>
            ) : (
              <span>Next »</span>
            )}
          </div>
        )}
        <div className={styles.LeftBottom}>{children}</div>
      </div>
      <div className={styles.Spacer} />
      <div className={styles.Right}>
        <FakeBrowserWindow
          defaultTabID={defaultTabID}
          iframeSource={iframeSource}
          title={title}
        />
      </div>
    </div>
  );
}
