import React from 'react';
import styles from './page.module.css';
import Button from '@/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Beautiful City</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus asperiores illo aspernatur enim iusto, doloribus quos
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
            <br />
            <br />
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
          </p>
          <Button url='#' text='Learn More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17530630/pexels-photo-17530630/free-photo-of-sea-city-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Artwork</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus asperiores illo aspernatur enim iusto, doloribus quos
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
            <br />
            <br />
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
          </p>
          <Button url='#' text='Learn More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17465236/pexels-photo-17465236/free-photo-of-summer-pattern-texture-abstract.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Beautiful Collection</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus asperiores illo aspernatur enim iusto, doloribus quos
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
            <br />
            <br />
            laudantium incidunt accusantium animi cumque dolorem expedita maxime
            mollitia aut voluptas, quam sapiente vitae?
          </p>
          <Button url='#' text='Learn More' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/15021300/pexels-photo-15021300/free-photo-of-post-letter-boxes-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
