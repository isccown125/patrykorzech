import React from 'react';
import styles from './styles.module.css';

type HeroBackgroundProps = {
  children: React.ReactNode;
};

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  return (
    <div className={styles['hero-layout']}>
      <div className={styles['hero-content']}>{children}</div>
    </div>
  );
};
