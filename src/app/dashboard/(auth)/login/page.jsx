'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [err, setErr] = useState('');
  const router = useRouter();
  const session = useSession();
  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (res.error) {
        setErr(res.error);
      } else {
        router?.push('/dashboard');
      }
    } catch (error) {
      setErr(error);
    }
  };
  return (
    <div className={styles.container}>
      <h1>User Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={styles.input}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          autoComplete='current-password'
          className={styles.input}
          required
        />
        <span className={styles.error}>{err}</span>
        <div className={styles.submitButton}>
          <button type='submit' name='submit' className={styles.button}>
            Login now
          </button>
        </div>
      </form>
      <div className={styles.gmail}>
        Or login with{' '}
        <button onClick={() => signIn('google')}>
          <FcGoogle width={28} height={28} /> Gmail
        </button>
      </div>
      <span>
        New here?{' '}
        <Link href='/dashboard/register' className={styles.link}>
          Register instead.
        </Link>
      </span>
    </div>
  );
};

export default Login;
