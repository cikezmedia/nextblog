import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Line from '@/line/Line';

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Blog Posts</h1>
        <Line />
      </div>

      <Link href='/testId' className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17530630/pexels-photo-17530630/free-photo-of-sea-city-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            width={400}
            height={250}
            className={styles.img}
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod hic enim, vitae adipisci placeat neque recusandae
            quaerat odio ipsa harum totam quibusdam natus possimus vero error
          </p>
        </div>
      </Link>
      <Link href='/testId' className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17530630/pexels-photo-17530630/free-photo-of-sea-city-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            width={400}
            height={250}
            className={styles.img}
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod hic enim, vitae adipisci placeat neque recusandae
            quaerat odio ipsa harum totam quibusdam natus possimus vero error
          </p>
        </div>
      </Link>
      <Link href='/testId' className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17530630/pexels-photo-17530630/free-photo-of-sea-city-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            width={400}
            height={250}
            priority={true}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod hic enim, vitae adipisci placeat neque recusandae
            quaerat odio ipsa harum totam quibusdam natus possimus vero error
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
