import Link from 'next/link';

import styles from './index.module.scss';

const Footer = () => (
    <footer className={` ${styles.footer} ${styles['has-text-centered']}  `}>
        <div className={`${styles.columns} ${styles["is-vcentered"]} `}>
            <div className={` ${styles.column} ${styles['is-one-third-desktop']} ${styles['is-full-mobile']} `}>
            <h3 className={` ${styles['is-size-4']} ${styles['is-family-secondary']} `}>South Indian Medical Students Association</h3>
            </div>


            <div className={` ${styles.column} ${styles['is-one-third-desktop']} ${styles['is-full-mobile']} `}>
                <div>
                    <p>Our System</p>
                    <p>Join Us</p>
                </div>
            </div>



            
            <div className={` ${styles.column} ${styles['is-one-third-desktop']} ${styles['is-full-mobile']} `}>
                <h4 className={` ${styles['is-size-5']} ${styles['is-family-secondary']} `}>Councils</h4><br />
                <div>
                <Link href="/sexual-and-reproductive-health">
                    <a>
                        SEXUAL & REPRODUCTIVE HEALTH
                    </a>
                </Link><br />
                <Link href="/medical-education">
                    <a>
                        MEDICAL EDUCATION
                    </a>
                </Link><br />
                <Link href="/public-heath">
                    <a>
                        PUBLIC HEALTH
                    </a>
                </Link><br />
                <Link href="/human-rights-peace">
                    <a>
                        HUMAN RIGHTS & PEACE
                    </a>
                </Link><br/>
                <Link href="/other-councils">
                    <a>
                        OTHER COUNCILS
                    </a>
                </Link>
                </div>
            </div>


        </div>
        <div className={`${styles.copyright} ${styles['has-text-centered']} `}>
            <div className={styles.content}>
                <p>ALL RIGHTS RESERVED 2020-PRESENT | SIMSA</p>
            </div>
        </div>
    </footer>
)

export default Footer;