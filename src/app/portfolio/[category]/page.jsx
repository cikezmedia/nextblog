import React from 'react';
import styles from './page.module.css';
import Button from '@/button/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { items } from './data';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const getData = async (cat) => {
  const res = await fetch(`${process.env.WEBSITE}/api/portfolio/${cat}`, {
    cache: 'no-store',
  });
  if (!res) {
    return notFound();
  }
  return res.json();
};

export const metadata = {
  title: 'Folio Digitals | Our Portfolio',
  description: 'Your #1 digital folio management',
};

const Category = async ({ params }) => {
  const data = await getData(params.category);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link href='/portfolio' className={styles.link}>
          <BiArrowBack width={20} height={20} /> back
        </Link>
        <h1 className={styles.catTitle}>{params.category}</h1>
      </div>
      {data?.map((item) => (
        <div className={styles.item} key={item._id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button
              url={`/portfolio/${params.category}/${item._id}`}
              text='Learn More'
            />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.img} alt='' fill={true} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
