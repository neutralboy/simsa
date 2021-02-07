import React, { useState } from 'react';
import Link from "next/link";

import styles from './index.module.scss';

const Nav = () => {
    const [navState, setNavState] = useState(false)
    const handleClick = () => {
        setNavState(!navState)
    }
    const navClick = () => {
        setNavState(false);
    }
    return (
        <>
        <nav role="navigation" aria-label="main navigation" className={` ${styles.navbar} ${styles['is-fixed-top']} ${styles.navBorderBottom} `} >
            <div className={styles["navbar-brand"]}>
                <Link href="/">
                    <a className={styles["navbar-item"]}>
                        <img className={styles.logo} alt="SIMSA logo" src="https://res.cloudinary.com/poorna/image/upload/c_scale,w_50/v1595707612/simsa/IMG-20200725-WA0017.png" />
                        <span className={` ${styles['is-size-3']} ${styles['is-family-secondary']} ${styles['has-text-black']} `}>SIMSA</span>
                    </a>
                </Link>

                <a role="button" className={`${styles["navbar-burger"]} ${styles.burger} ${navState && styles['is-active']} ${styles['is-light']} `} aria-label="menu" aria-expanded="false" onClick={handleClick} >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div onClick={navClick} className={`${styles['navbar-menu']} ${navState && styles['is-active']} `}>
                <div className={`${styles['navbar-end']}  `}>

                    <div className={styles['navbar-item']}>
                        <Link href="/">
                            <a className={`${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                                <span >Home</span>
                            </a>
                        </Link>
                    </div>

                    <div className={`${styles['navbar-item']} ${styles['has-dropdown']} ${styles['is-hoverable']} ${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                        <a className={styles["navbar-link"]}>
                            Councils
                        </a>
                        <div className={styles["navbar-dropdown"]}>
                            <Link href="/council/sexual-and-reproductive-health">
                                <a className={styles["navbar-item"]}>
                                    Sexual & Reproductive Health
                                </a>
                            </Link>
                            <Link href="/council/medical-education">
                                <a className={styles["navbar-item"]}>
                                    Medical Education
                                </a>
                            </Link>
                            <Link href="/council/public-heath">
                                <a className={styles["navbar-item"]}>
                                    Public Health
                                </a>
                            </Link>
                            <Link href="/council/human-rights-peace">
                                <a className={styles["navbar-item"]}>
                                    Human Rights and Peace
                                </a>
                            </Link>
                            <Link href="/council/ethical-and-judicial">
                                <a className={styles["navbar-item"]}>
                                    Ethical and Judicial Affairs
                                </a>
                            </Link>
                            <Link href="/council/longrange-planning-development">
                                <a className={styles["navbar-item"]}>
                                    Long Range Planning and Development
                                </a>
                            </Link>
                            <Link href="/council/constitution-bylaws-legislation">
                                <a className={styles["navbar-item"]}>
                                    Constitution, Bylaws and Legislation
                                </a>
                            </Link>
                        </div>
                    </div>
                    

                    <div className={styles['navbar-item']}>
                        <Link href="/our-system">
                            <a className={`${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                                <span >Our System</span>
                            </a>
                        </Link>
                    </div>

                    <div className={styles['navbar-item']}>
                        <Link href="/publications">
                            <a className={`${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                                <span >Publications</span>
                            </a>
                        </Link>
                    </div>

                    <div className={styles['navbar-item']}>
                        <Link href="/collaborators">
                            <a className={`${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                                <span >Collaborators</span>
                            </a>
                        </Link>
                    </div>

                    <div className={styles['navbar-item']}>
                        <Link href="/events">
                            <a className={`${styles["is-family-secondary"]} ${styles['has-text-dark']} `}>
                                <span >Events</span>
                            </a>
                        </Link>
                    </div>

                    <div className={styles['navbar-item']}>
                        <Link href="/join-us">
                            <a className={` ${styles.button} ${styles['has-background-primary']} ${styles["is-secondary"]} ${styles["has-text-white"]}  `}>Join us</a>
                        </Link>
                    </div>

                    <div className={styles['navbar-item']}>
                        <a href="https://forms.gle/sbJa6161WYJAxJUA8">
                        <a className={` ${styles.button} ${styles['is-danger']} `}>Complaint Forum</a>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav;