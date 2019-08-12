import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Guide.module.css';

export default function Guide({
  children,
  targetIDs = [],
  title = 'Show me how.',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(isOpen => !isOpen);
    setIndex(0);
  };

  const onComplete = useCallback(targetID => {
    if (targetID === targetIDs[index]) {
      setIndex(index + 1);
    }
  }, [index, targetIDs]);

  return (
    <details onToggle={handleToggle}>
      <summary>{title}</summary>
      {children}
      {isOpen && <Step onComplete={onComplete} targetID={targetIDs[index]} />}
    </details>
  );
}

function Step({ onComplete, targetID }) {
  const timeoutIDRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetID == null) {
      return;
    }

    const handleClick = () => {
      targetRef.current.removeEventListener('click', handleClick);
      targetRef.current.classList.remove(styles.Hint);

      onComplete(targetID);
    };

    const findTarget = () => {
      const match = targetID.match(/([^:]+):(.+)/);

      if (match != null) {
        const elements = document.querySelectorAll(`[data-tutorial-id="${match[1]}"]`);
        targetRef.current = elements[parseInt(match[2], 10)];
      } else {
        targetRef.current = document.querySelector(`[data-tutorial-id="${targetID}"]`);
      }

      if (targetRef.current != null) {
        targetRef.current.classList.add(styles.Hint);
        targetRef.current.addEventListener('click', handleClick);
      } else {
        timeoutIDRef.current = setTimeout(findTarget, 250);
      }
    };

    findTarget();

    // Auto-cleanup on unmount or target change.
    return () => {
      clearTimeout(timeoutIDRef.current);

      if (targetRef.current != null) {
        targetRef.current.removeEventListener('click', handleClick);
        targetRef.current.classList.remove(styles.Hint);
      }
    };
  }, [onComplete, targetID]);

  return null;
}