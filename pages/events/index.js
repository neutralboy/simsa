import styles from './index.module.scss';
import OpenGraph from '../../components/open-graph';

const Events = ({ data }) => (
    <section className={`${styles.section} ${styles.topography} `}>
        <OpenGraph title="Events" url="events" />
        <div className={styles.container}>
        
            <div className={styles.header}>
                <h1 className={styles["is-size-1"]}>Events</h1>
            </div>

            <div>
                
                    {
                        data.map(e=>
                            <div className={styles.box}>
                                <h2 className={` ${styles["is-size-3"]} ${styles["event-title"]} `}>{e.title}</h2>
                                <div className={` ${styles.columns} ${styles["is-vcentered"]} `}>
                                    <div className={` ${styles.column} ${styles["is-one-third-desktop"]} ${styles["is-full-mobile"]} `}>
                                        <img src={e.image} alt={e.title} />
                                    </div>
                                    <div className={` ${styles.column} ${styles["is-two-thirds-desktop"]} ${styles["is-full-mobile"]} `}>
                                        <p>{e.description}</p>
                                        <br/>
                                        <div className={styles["has-text-right"]}>
                                            <h4 className={`${styles["is-size-4"]} ${styles["is-family-secondary"]} `}>{e.date}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                    }

                
            </div>
        
        </div>
    </section>
)

export async function getStaticProps() {
    return {
      props: {
          data: [
            {
                title: "General Conclave",
                description: `SIMSA General Conclave is the largest student-run conference in South India and brings together over 800+ medical students from across India. In its 1st year, Conclave will arrive in a selected city. Over the week, students will enjoy a rewarding academic and social program, enhanced by intervarsity competitions, field trips, workshops and a trade show. Conclave embodies the core values of SIMSA and continues to be the highlight of the Association’s calendar every year.Conclave aspires to host an event that connects, inspires, and empowers delegates by creating extraordinary experiences, and giving them new perspectives. Check out the website,Instagram handle and Facebook page!`,
                image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_400/v1596783915/simsa/charminar_2x.png",
                date: "Coming Soon"
            }
          ]
      },
    }
  }  


export default Events;