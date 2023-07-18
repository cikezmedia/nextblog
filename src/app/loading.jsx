import Image from 'next/image';
import styles from './page.module.css';
const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src='/loading.gif' alt='' width={30} height={30} />
    </div>
  );
};

export default Loading;
