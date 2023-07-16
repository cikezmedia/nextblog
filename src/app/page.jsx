import Hero from 'public/hero.png';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/button/Button';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.firstItem}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the reans from the
          global tech industry.
        </p>
        <Button text='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.secondItem}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
}
