import OpenGraph from '../../components/open-graph';
import styles from './index.module.scss';

const JoinUs = () => (
    <>
    <OpenGraph title="Join us" url="join-us" />
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
<br/>
                    <div className={styles.content}>
                        <h2> How to join ? </h2>
                        <h3>1. Pay the membership fee in one of the following ways:</h3>
                        <h5>Account Number: 100007773110</h5>
                        <h5>IFSC Code: ESFB0005001</h5>
                        <h5>UPI ID: simsa@axisbank</h5>
                        <h5>Account Holder Name: SIMSA</h5>
                        <br/>

                        <h3>2. Fill the form below with a screenshot of Proof of Payment</h3>
                        <p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScDLp4FB9e_YsC4Lb7lfkllsh2iHEgIrEa8H4--J5iJaDIG6w/viewform" >Google Forms Link</a>
                        </p>
                        <br/>
                        
                        <h3>3. We'll reach out to you with Membership details over email.</h3>

                    </div>
                
                </div>
                <div className={` ${styles.column} ${styles["is-half-desktop"]} ${styles["is-full-mobile"]} ${styles["has-text-centered"]} `}>
                    <img alt="Join us at SIMSA" src="https://res.cloudinary.com/poorna/image/upload/v1595706915/simsa/undraw_medicine_b1ol.svg" />
                </div>
            </div>
            <br/>
            <div className={styles.content}>
                <h2>Reach Us.</h2>

                        <div className={styles["is-inline"]}>
                            <a href="https://www.instagram.com/simsa.si/?hl=en">
                                <span className={` ${styles.icon} ${styles["is-large"]} `}>
                                    <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"/>
                                    
                                </span>
                                <span className={styles["is-size-5"]}>@simsa.si</span>
                            </a>
                            <br/>
                            <a href="https://www.facebook.com/southindianmsa.2020/">
                                <span className={` ${styles.icon} ${styles["is-large"]} `}>
                                    <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                                    
                                </span>
                                <span className={styles["is-size-5"]}>@southindianmsa.2020</span>
                            </a>
                            <br/>
                            <a href="mailto:vpi@simsa.in">
                                <span className={` ${styles.icon} ${styles["is-large"]} `}>
                                    <img src="https://img.icons8.com/fluent/48/000000/gmail.png"/>
                                    
                                </span>
                                <span className={styles["is-size-5"]}>vpi@simsa.in</span>
                            </a>
                            <br/>
                            <a href="https://www.youtube.com/channel/UC8rCki2AHXpvfv6MbPoDSaw?view_as=subscriber">
                                <span className={` ${styles.icon} ${styles["is-large"]} `}>
                                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>

                                </span>
                                <span className={styles["is-size-5"]}>SIMSA</span>
                            </a>
                        </div>

            </div>
        </div>
    </section>

    </>
)

export default JoinUs;