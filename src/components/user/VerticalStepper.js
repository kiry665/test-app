import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles/VerticalStepper.module.css';

const VerticalStepper = ({ stepCount, currentStep, stepLabels }) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: stepCount }, (_, index) => (
        <div key={index} className={styles.step}>
          {index < currentStep ? (
            <>
              <div className={`${styles.circle} ${styles.checked}`}>✓</div>
              <div className={`${styles.line} ${styles.checked}`}></div>
            </>
          ) : (
            <>
              {index === currentStep ? (
                <>
                  <div className={`${styles.circle} ${styles.checked}`}>{index + 1}</div>
                  <div className={styles.line}></div>
                </>
              ) : (
                <>
                  <div className={styles.circle}>{index + 1}</div>
                  <div className={styles.line}></div>
                </>
              )}
            </>
          )}
          {stepLabels && <div className={styles.label}>{stepLabels[index]}</div>}
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
