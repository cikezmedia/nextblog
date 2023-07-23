import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = async ({ cat, id }) => {
  const res = await fetch(`${process.env.WEBSITE}/api/portfolio/${cat}/${id}`, {
    cache: 'no-store',
  });
  if (!res) {
    return notFound();
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const data = await getData(params);
  return {
    title: `Folio Digitals | ${data.title}`,
    description: data.desc,
  };
}

const Page = async ({ params }) => {
  const data = await getData(params);

  return (
    <div className={styles.container}>
      <div className={styles.imgCard}>
        <Image
          src={data.img}
          alt=''
          fill={true}
          priority
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
};

export default Page;
