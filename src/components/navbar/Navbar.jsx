'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { signOut, useSession } from 'next-auth/react';

const links = [
  //{ id: 1, title: 'Home', url: '/' },
  //{ id: 2, title: 'Portfolio', url: '/portfolio' },
  // { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'About', url: '/about' },
  // { id: 5, title: 'Contact', url: '/contact' },
  { id: 6, title: 'Dashboard', url: '/dashboard' },
];
const Navbar = () => {
  const session = useSession();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Folio D.
      </Link>
      <div className={styles.links}>
        {theme === 'dark' ? (
          <BsSun
            size={20}
            cursor='pointer'
            className={styles.fade}
            onClick={() => setTheme('light')}
          />
        ) : (
          <BsMoon
            size={20}
            cursor='pointer'
            className={styles.fade}
            onClick={() => setTheme('dark')}
          />
        )}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button onClick={signOut} className={styles.logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
