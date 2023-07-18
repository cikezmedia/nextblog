import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Line from '@/line/Line';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Blog Posts</h1>
        <Line />
      </div>

      {data?.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.item} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
