import React from 'react';
import styles from './page.module.css';
import Line from '@/line/Line';

const Layout = ({ children }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Our Works</h1>
        <Line />
      </div>

      {children}
    </div>
  );
};

export default Layout;
