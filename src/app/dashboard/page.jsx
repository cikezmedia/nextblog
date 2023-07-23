'use client';
import React from 'react';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import axios from 'axios';
import urlSlug, { LOWERCASE_TRANSFORMER } from 'url-slug';
import Link from 'next/link';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?email=${session?.data?.user?.email}`,
    fetcher
  );

  if (session.status === 'loading') {
    return;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    const email = session?.data?.user?.email;
    const name = session?.data?.user?.name;

    const slug = urlSlug(title, { transformer: LOWERCASE_TRANSFORMER });

    const options = {
      title,
      slug,
      desc,
      img,
      content,
      email,
      name,
    };

    try {
      const res = await axios.post(`/api/posts`, options);
      mutate();
    } catch (error) {
      throw new Error('Unable to add post');
    }
  };

  if (session.status === 'authenticated') {
    return (
      <>
        {session?.data?.user?.email === 'admin@example.com' ? (
          <div className={styles.container}>
            <div className={styles.news}>
              <h2 className={styles.title}>All Posts</h2>
              {isLoading
                ? 'loading posts...'
                : data?.map((post) => (
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.card}
                      key={post._id}
                    >
                      <div className={styles.imgContainer}>
                        <Image
                          src={post.img}
                          alt=''
                          width={250}
                          height={120}
                          className={styles.img}
                        />
                      </div>
                      <div className={styles.content}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.desc}>{post.desc}</p>
                      </div>
                      <div className={styles.del}>x</div>
                    </Link>
                  ))}
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.title}>Add new post</h2>
              <input
                type='text'
                placeholder='Post title'
                name='title'
                required
              />
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
              <hr className={styles.hr} />
            </form>
          </div>
        ) : (
          <h1 className={styles.warn}>Only Admin can manage posts</h1>
        )}
      </>
    );
  }
};

export default Dashboard;
