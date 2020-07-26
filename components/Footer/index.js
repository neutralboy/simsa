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
                </div>
            </div>



            
            <div className={` ${styles.column} ${styles['is-one-third-desktop']} ${styles['is-full-mobile']} `}>
                <h4 className={` ${styles['is-size-5']} ${styles['is-family-secondary']} `}>Councils</h4><br />
                <div>
                    <Link href="/council/sexual-and-reproductive-health">
                        <a>
                            Sexual & Reproductive Health
                        </a>
                    </Link><br/>
                    <Link href="/council/medical-education">
                        <a>
                            Medical Education
                        </a>
                    </Link><br/>
                    <Link href="/council/public-heath">
                        <a>
                            Public Health
                        </a>
                    </Link><br/>
                    <Link href="/council/human-rights-peace">
                        <a>
                            Human Rights and Peace
                        </a>
                    </Link><br/>
                    <Link href="/council/ethical-and-judicial">
                        <a>
                            Ethical and Judicial Affairs
                        </a>
                    </Link><br/>
                    <Link href="/council/longrange-planning-development">
                        <a>
                            Long Range Planning and Development
                        </a>
                    </Link><br/>
                    <Link href="/council/constitution-bylaws-legislation">
                        <a>
                            Constitution, Bylaws and Legislation
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