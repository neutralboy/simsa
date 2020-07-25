import styles from './index.module.scss';

const JoinUs = () => (
    <>

    <section className={styles.section}>
        <div className={styles.container}>
        
            <div className={styles.header}>
                <h1 className={` ${styles["is-size-2"]} `}>
                    Join Us
                </h1>
            </div>
        
            <div className={styles.content}>
                <h3> Who can join? </h3>
                <p>
                    SIMSA welcomes all students with careers on the road to healthcare to expand their horizons and experience a multitude of opportunities to live their best student life. You can join us if you are:
                </p>
                <ul>
                    <li>Pre-medical Students</li>
                    <li>Health care Students</li>
                    <li>Post Graduate Heath care Students</li>
                    <li>Constituent Association members</li>
                </ul>
            </div>

        </div>
    </section>

    </>
)

export default JoinUs;