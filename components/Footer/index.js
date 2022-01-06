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
                    <Link href="/our-system">
                        <a>
                            Our System
                        </a>
                    </Link><br />
                    <Link href="/join-us">
                        <a>
                            Join Us
                        </a>
                    </Link><br />
                    <Link href="/publications">
                        <a>
                            Publications
                        </a>
                    </Link><br />
                    <Link href="/collaborators">
                        <a>
                            Collaborators
                        </a>
                    </Link><br />
                    <Link href="/events">
                        <a>
                            <span >Events</span>
                        </a>
                    </Link><br/>
                    <a href="https://github.com/neutralboy/simsa">Github</a>
                    <div>
                        <a href="https://forms.gle/sbJa6161WYJAxJUA8">
                        <a className={` ${styles.button} ${styles['is-danger']} `}>Complaint Forum</a>
                        </a>
                    </div>
                </div>
            </div>



            
            <div className={` ${styles.column} ${styles['is-one-third-desktop']} ${styles['is-full-mobile']} `}>
                <div>
                    <Link href="/privacy_policy">
                        <a>
                            Privacy Policy
                        </a>
                    </Link><br/>
                    <Link href="/terms">
                        <a>
                            Terms
                        </a>
                    </Link><br/>
                    <Link href="/refund.html">
                        <a>
                            Refund Policy
                        </a>
                    </Link><br/>
                    <Link href="/DPP.html">
                        <a>
                            Data Protection
                        </a>
                    </Link><br/>
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
