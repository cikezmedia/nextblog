import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData({ slug }) {
  const res = await fetch(`${process.env.WEBSITE}/api/posts/${slug}`, {
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
    title: data[0]?.title,
    description: data[0]?.desc,
  };
}

const Blog = async ({ params }) => {
  const data = await getData(params);

  if (!data[0]?.title) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data[0]?.title}</h1>
          <p className={styles.desc}>{data[0].desc}</p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/15577641/pexels-photo-15577641/free-photo-of-sky-sunset-sunny-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data[0]?.name}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data[0]?.img}
            alt=''
            fill={true}
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data[0]?.content}</p>
      </div>
    </div>
  );
};

export default Blog;
