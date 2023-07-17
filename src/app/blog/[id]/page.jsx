import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium,
          </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            necessitatibus odit officiis iste similique sint nobis distinctio
            quisquam, rerum corrupti doloribus dicta sit tenetur eaque accusamus
            voluptatum dolores amet officia?
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/15577641/pexels-photo-15577641/free-photo-of-sky-sunset-sunny-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17035861/pexels-photo-17035861/free-photo-of-leaves-of-hosta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore
          sit, perferendis culpa nam veritatis recusandae quam odit sapiente
          consequuntur. Architecto nobis amet inventore animi deserunt eveniet
          non recusandae deleniti, repellat quam sint ducimus dolore similique
          debitis nam fuga! Est quod hic iusto tempore assumenda
          <br />
          <br />
          dolorum architecto, quaerat, explicabo tenetur nemo aperiam odit
          laborum nihil nam veritatis voluptates ut aspernatur necessitatibus
          eius dolore perferendis esse. Vero facere, eligendi expedita odio eos
          ullam est voluptatum. Ullam, pariatur quibusdam! Officia numquam
          repudiandae reprehenderit, a id accusantium incidunt voluptatum,
          accusamus eligendi suscipit hic dicta. Rerum magni ut totam vero.
          Molestiae ipsa commodi praesentium?
          <br />
          <br />
          dolorum architecto, quaerat, explicabo tenetur nemo aperiam odit
          laborum nihil nam veritatis voluptates ut aspernatur necessitatibus
          eius dolore perferendis esse. Vero facere, eligendi expedita odio eos
          ullam est voluptatum. Ullam, pariatur quibusdam! Officia numquam
          repudiandae reprehenderit, a id accusantium incidunt voluptatum,
          accusamus eligendi suscipit hic dicta. Rerum magni ut totam vero.
          Molestiae ipsa commodi praesentium?
        </p>
      </div>
    </div>
  );
};

export default Blog;
