import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        &copy;2023 <span className={styles.company}>Folio Digitals Inc.</span> |
        All Rights Reserved
      </div>
      <div className={styles.social}>
        <Image
          src='/1.png'
          width={30}
          height={30}
          alt='facebook image'
          className={styles.icon}
        />
        <Image
          src='/2.png'
          width={30}
          height={30}
          alt='Instagram image'
          className={styles.icon}
        />
        <Image
          src='/3.png'
          width={30}
          height={30}
          alt='Twitter image'
          className={styles.icon}
        />
        <Image
          src='/4.png'
          width={30}
          height={30}
          alt='Youtube image'
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
