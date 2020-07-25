import styles from './index.module.scss';

const JoinUs = () => (
    <>

    <section className={styles.section}>
        <div className={styles.container}>
        
            <div className={styles.header}>
                <h1 className={` ${styles["is-size-1"]} `}>
                    Join Us
                </h1>
                <h5 className={`${styles["is-size-4"]} `}>START. BEING. MORE</h5>
            </div>
        
            <br/>

            <div className={` ${styles.columns} ${styles["is-vcentered"]} `}>
                <div className={` ${styles.column} ${styles["is-half-desktop"]} ${styles["is-full-mobile"]} `}>
                
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
                <div className={` ${styles.column} ${styles["is-half-desktop"]} ${styles["is-full-mobile"]} ${styles["has-text-centered"]} `}>
                    <img alt="Join us at SIMSA" src="https://res.cloudinary.com/poorna/image/upload/v1595706915/simsa/undraw_medicine_b1ol.svg" />
                </div>
            </div>
            <br/>
            <div className={styles.content}>
                <h3> How to join ? </h3>
                <p>
                    Here's the form to register. <a>Google Forms</a>
                </p>
            </div>

        </div>
    </section>

    </>
)

export default JoinUs;