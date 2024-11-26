import React from 'react';
import styles from './styles.module.css';
import { clsx } from 'clsx';
type NavigationContainerProps = {
  children?: React.ReactNode;
};

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
  children,
}) => {
  return (
    <div className={clsx(styles['navigation'], styles['transparent'])}>
      {children}
    </div>
  );
};
