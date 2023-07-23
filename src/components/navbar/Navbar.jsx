'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { signOut, useSession } from 'next-auth/react';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Portfolio', url: '/portfolio' },
  { id: 3, title: 'Blog', url: '/blog' },
  { id: 4, title: 'About', url: '/about' },
  { id: 5, title: 'Contact', url: '/contact' },
  { id: 6, title: 'Account', url: '/dashboard' },
];
const Navbar = () => {
  const session = useSession();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div>
        <Link href='/' className={styles.logo}>
          Folio D.
        </Link>
      </div>
      <div className={styles.nav}>
        <HiMenuAlt3
          className={styles.icon}
          size={35}
          onClick={() => setShow((prev) => !prev)}
        />
        {show ? (
          <div className={styles.toggle}>
            <div className={styles.mobile}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setShow((prev) => !prev)}
                  className={styles.link}
                >
                  {link.title}
                </Link>
              ))}
              {session.status === 'authenticated' && (
                <button onClick={signOut} className={styles.logout}>
                  <FaPowerOff /> Logout
                </button>
              )}
              {theme === 'dark' ? (
                <BsSun
                  size={35}
                  cursor='pointer'
                  className={styles.fade}
                  onClick={() => setTheme('light')}
                />
              ) : (
                <BsMoon
                  size={35}
                  cursor='pointer'
                  className={styles.fade}
                  onClick={() => setTheme('dark')}
                />
              )}
            </div>
            <VscChromeClose
              className={styles.closeIcon}
              size={35}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button onClick={signOut} className={styles.logout}>
            <FaPowerOff /> Logout
          </button>
        )}
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
      </div>
    </div>
  );
};

export default Navbar;
