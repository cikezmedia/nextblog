import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData({ id }) {
  const res = await fetch(`${process.env.WEBSITE}/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params);
  return {
    title: data.title,
    description: data.desc,
  };
}

const Blog = async ({ params }) => {
  const data = await getData(params);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/15577641/pexels-photo-15577641/free-photo-of-sky-sunset-sunny-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.img} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default Blog;
