'use client';
import React from 'react';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  if (session.status === 'loading') {
    return;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.news}>
          <did className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                width={250}
                height={120}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>Title</h1>
              <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                labore.
              </p>
            </div>
          </did>
          <did className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                width={250}
                height={120}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>Title</h1>
              <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                labore.
              </p>
            </div>
          </did>
        </div>
        <form action='' method='post' className={styles.form}>
          <h2 className={styles.title}>Add new post</h2>
          <input type='text' placeholder='Post title' name='title' required />
          <input
            type='text'
            placeholder='Post description'
            name='desc'
            required
          />
          <input
            type='text'
            placeholder='Post image link'
            name='img'
            required
          />
          <textarea placeholder='Post content' name='content'></textarea>
          <button type='submit' className={styles.button} name='submit'>
            Add Post
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
