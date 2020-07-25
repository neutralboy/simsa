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
                        <span className={` ${styles['is-size-3']} ${styles['is-family-secondary']} ${styles['has-text-black']} `}>SIMSA.</span>
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
                            <Link href="/sexual-and-reproductive-health">
                                <a className={styles["navbar-item"]}>
                                    SEXUAL & REPRODUCTIVE HEALTH
                                </a>
                            </Link>
                            <Link href="/medical-education">
                                <a className={styles["navbar-item"]}>
                                    MEDICAL EDUCATION
                                </a>
                            </Link>
                            <Link href="/public-heath">
                                <a className={styles["navbar-item"]}>
                                    PUBLIC HEALTH
                                </a>
                            </Link>
                            <Link href="/human-rights-peace">
                                <a className={styles["navbar-item"]}>
                                    HUMAN RIGHTS & PEACE
                                </a>
                            </Link>
                            <Link href="/other-councils">
                                <a className={styles["navbar-item"]}>
                                    OTHER COUNCILS
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
                        <Link href="/join-us">
                            <a className={` ${styles.button} ${styles['has-background-primary']} ${styles["is-secondary"]} ${styles["has-text-white"]}  `}>Join us</a>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    </>
    )
}

export default Nav;