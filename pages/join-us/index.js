import {useState} from 'react';

import OpenGraph from '../../components/open-graph';
import styles from './index.module.scss';

const PaymentButton = ({ course }) => {
    
    
    if(course == "UG") {
        return (<div>
            <div className={`${styles.field} ${styles["has-addons"]} `}>
                <p className={styles.control}>
                    <a href="https://rzp.io/l/simsa-ug-membership" className={` ${styles.button} ${styles["is-medium"]} `}>
                        <span className={` ${styles.icon} ${styles["is-large"]} `}>
                            <img alt="razorpay" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_100/v1595928358/Razorpay-the-new-epayment-that-will-break-everything-in-2019.png"/>
                        </span>
                        <span className={styles["is-family-secondary"]}>
                            Become a member today
                        </span>
                    </a>
                </p>
            </div>
            <p>Click on the button above and complete the membership registration process.</p>
        </div>)
    }

    if(course == "PG") {
        return (<div>
            <div className={`${styles.field} ${styles["has-addons"]} `}>
                <p className={styles.control}>
                    <a href="https://rzp.io/l/pg-membership" className={` ${styles.button} ${styles["is-medium"]} `}>
                        <span className={` ${styles.icon} ${styles["is-large"]} `}>
                            <img alt="razorpay" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_100/v1595928358/Razorpay-the-new-epayment-that-will-break-everything-in-2019.png"/>
                        </span>
                        <span className={styles["is-family-secondary"]}>
                            Become a member today
                        </span>
                    </a>
                </p>
            </div>
            <p>Click on the button above and complete the membership registration process.</p>
        </div>)
    }

    if(course == "PM") {
        return (<div>
            <div className={`${styles.field} ${styles["has-addons"]} `}>
                <p className={styles.control}>
                    <a href="https://rzp.io/l/premed-membership" className={` ${styles.button} ${styles["is-medium"]} `}>
                        <span className={` ${styles.icon} ${styles["is-large"]} `}>
                            <img alt="razorpay" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_100/v1595928358/Razorpay-the-new-epayment-that-will-break-everything-in-2019.png"/>
                        </span>
                        <span className={styles["is-family-secondary"]}>
                            Become a member today
                        </span>
                    </a>
                </p>
            </div>
            <p>Click on the button above and complete the membership registration process.</p>
        </div>)
    }

    else{
        return <div />
    }

}

const JoinUs = () => {
    const [course, setCourse] = useState("");
    const selectCourse = event => {
        setCourse(event.target.value);
    }
    return (
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
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h3>Membership Fees</h3>
                            <br/>
                            <h5>Pre-Med Student: ₹100</h5>
                            <h5>UG Med Student: ₹200</h5>
                            <h5>PG Med Student: ₹500</h5>
                        </div>
                    </div>
<br/>
                <h3 className={styles["is-size-4"]}><b>How to join us?</b></h3><br/>
                    <div className={` ${styles.control} ${styles["is-expanded"]} `}>
                        <div className={`${styles.select} ${styles["is-medium"]} ${styles["is-fullwidth"]} `}>
                            <select onChange={selectCourse} >
                                <option value="" >Select your course of study</option>
                                <option value="UG">Under Graduate</option>
                                <option value="PG">Post Graduate</option>
                                <option value="PM">Pre Medical</option>
                            </select>
                        </div>
                    </div>
<br/>

                    <PaymentButton course={course} />

                    
                        <br/>

                        <div className={styles.content}>
                            <p>The Membership ID will be sent to you 48hrs after completing the process of registration.</p>
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
)}

export default JoinUs;