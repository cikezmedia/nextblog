import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            culpa facilis laudantium quidem deserunt cupiditate exercitationem
            laboriosam dignissimos consequatur consectetur. Lorem ipsum dolor
            laboriosam dignissimos consequatur consectetur. Lorem ipsum dolor
            <br />
            <br />
            sit amet, consectetur adipisicing elit. Porro culpa facilis
            laudantium quidem deserunt cupiditate exercitationem laboriosam
            dignissimos consequatur consectetur Porro culpa facilis laudantium
            <br />
            <br />
            quidem deserunt cupiditate exercitationem Porro culpa facilis
            laudantium quidem deserunt cupiditate exercitationem laboriosam
            dignissimos consequatur consectetur.laboriosam dignissimos
            consequatur consectetur. Lorem ipsum dolor
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            culpa facilis laudantium quidem deserunt cupiditate exercitationem
            laboriosam dignissimos consequatur consectetur. Lorem ipsum dolor
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button text='Contact' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
