'use client';
import React, { useState } from 'react';
import styles from './post.module.css';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const options = {
      name,
      email,
      password,
    };
    try {
      const res = await axios.post('/api/auth/register', options);
      res.status === 201 && router.push('/dashboard/login');
      console.log(res);
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Username'
          className={styles.input}
          required
        />
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
          className={styles.input}
          required
        />
        {err && 'Something went wrong!'}
        <div className={styles.submitButton}>
          <button type='submit' name='submit' className={styles.button}>
            Register
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
        Already a member?{' '}
        <Link href='/dashboard/login' className={styles.link}>
          Login instead.
        </Link>
      </span>
    </div>
  );
};

export default Register;
