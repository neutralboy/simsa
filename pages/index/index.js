
import styles from './index.module.scss';

const Home = () => {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>

      <div className={` ${styles.columns} ${styles["is-vcentered"]} `}>
        <div className={` ${styles.column} ${styles["is-half-desktop"]} ${styles["is-full-mobile"]} `}>
          <img alt="SIMSA" src="https://res.cloudinary.com/poorna/image/upload/v1591896253/doctor/16.png" />
        </div>
        <div className={` ${styles.column} ${styles["is-half-desktop"]} ${styles["is-full-mobile"]} ${styles["has-text-centered"]} `}>
          <h1 className={` ${styles['is-size-1']} ${styles['is-family-secondary']} ${styles["has-text-black"]} `}>SIMSA</h1>
          <h3 className={` ${styles["is-size-4"]} `}> South Indian Medical Students Association </h3>
        </div>
      </div>

      </div>
    </section>

    <section className={` ${styles.section} ${styles["is-secondary"]} `}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles['is-size-2']}>Who we are ?</h2>
        </div>
        
        <div className={styles.columns}>
          <div className={` ${styles.column} ${styles["is-two-thirds-desktop"]} ${styles["is-full-mobile"]} ${styles.content} `}>
            <p className={` ${styles["has-text-black-ter"]}`}>
            South Indian Medical Students Association (SIMSA) is a consortium of, by and for medical students of South India.It was founded on 10th June, 2020 when a group of passionate medical students came together, understanding the need for more opportunities and exposure for South Indian medicos. SIMSA is recognized under the government of India and all healthcare students studying in any year of their degree are welcome to come forth and become a part of this organization, and be more.
            </p>
            <a className={` ${styles.button} ${styles["is-primary"]} ${styles["is-medium"]} ${styles["is-fullwidth"]} `} >Join Us</a>
          </div>
          <div className={` ${styles.column} ${styles["is-one-third-desktop"]} ${styles["is-full-mobile"]} `}>
            <img alt="together" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_469/v1595692410/simsa/photo-1582213782179-e0d53f98f2ca.png" />
          </div>
        </div>

      </div>
    </section>

    <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles["is-size-2"]}>Our Hierarchy</h2>
        </div>
        <div className={styles["has-text-centered"]}>
          <img src="https://res.cloudinary.com/poorna/image/upload/q_auto:eco/v1595693530/simsa/Screenshot_from_2020-07-25_21-41-02.png" />
        </div>
    </section>


    <section className={`${styles.section} ${styles["has-background-primary"]} `}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles["has-text-light"]}  `}>
          <p className={styles["is-size-4"]}>
          SIMSA welcomes all students with careers on the road to healthcare to expand their horizons and experience a multitude of opportunities to live their best student life.
          </p>
        </div>
        <a className={` ${styles.button} ${styles["is-secondary"]} ${styles["is-large"]} `}>Join Us Today</a>
      </div>
    </section>

    </>
  )
}

export default Home;