import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/button/Button';

export const metadata = {
  title: 'Folio Digitals | Contact Us.',
  description: 'Your #1 digital folio management',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/ico' },
    shortcut: { url: '/favicon.ico', type: 'image/ico' },
  },
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Let&apos;s Keep in Touch </h1>
        <p className={styles.headingDesc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, doloribus.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt=''
            width={400}
            height={400}
            className={styles.img}
            priority
          />
        </div>
        <form action='' method='post' className={styles.form}>
          <input type='text' placeholder='Full name' name='name' />
          <input type='email' placeholder='Email' name='email' />
          <textarea placeholder='Message' name='name'></textarea>
          <Button url='#' text='Send Message' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
