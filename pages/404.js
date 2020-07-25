import styles from '../main.scss';

const Custom404 = () => (
    <section className={styles.section}>
        <div className={` ${styles['has-text-centered']} ${styles.container}`}>
            <div>
                <img style={{ maxHeight: "25rem" }} src="https://res.cloudinary.com/guruu-in/image/upload/c_scale,q_auto:eco,w_564/v1589123178/lKJiT77_jgix4r.png" alt="404 No page found" /> 
            </div>
            <div className={styles.content}>
                <h2 className={styles['has-text-black']}>Whoops! A dog has eaten this page.</h2>
                <p>The page you're looking for does not exist</p>
            </div>
        </div>
    </section>
)

export default Custom404;