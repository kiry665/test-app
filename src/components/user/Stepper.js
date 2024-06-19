import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Stepper.module.css';

const Stepper = ({ stepCount, currentStep, stepLabels }) => {
  return (
    <ul className={styles.stepper}>
      {Array.from({ length: stepCount }, (_, index) => (
        <li key={index} className={styles.step}>
          {index < currentStep ? (
            <>
              <div className={`${styles.circle} ${styles.checked}`}>✓</div>
            </>
          ) : (
            <>
              {index === currentStep ? (
                <>
                  <div className={`${styles.circle} ${styles.checked}`}>{index + 1}</div>
                </>
              ) : (
                <>
                  <div className={styles.circle}>{index + 1}</div>
                </>
              )}
            </>
          )}
          {stepLabels && <div className={styles.label}>{stepLabels[index]}</div>}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
