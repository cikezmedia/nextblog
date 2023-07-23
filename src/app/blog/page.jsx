import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Line from '@/line/Line';
import { notFound } from 'next/navigation';

async function getData() {
  try {
    const res = await fetch(`${process.env.WEBSITE}/api/posts`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return notFound;
    }
    return res.json();
  } catch (error) {
    return notFound;
  }
}

export const metadata = {
  title: 'Folio Digitals | Our Blog',
  description: 'Your #1 digital folio management',
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Blog Posts</h1>
        <Line />
      </div>

      {data?.length > 0
        ? data?.map((item) => (
            <Link
              href={`/blog/${item.slug}`}
              className={styles.item}
              key={item._id}
            >
              <div className={styles.imgContainer}>
                <Image
                  src={item.img}
                  alt=''
                  width={400}
                  height={250}
                  className={styles.img}
                  priority={true}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </Link>
          ))
        : 'Unable to fetch blog posts'}
    </div>
  );
};

export default Blog;
