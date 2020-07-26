import styles from './index.module.scss';

const OurSystem = ({data = []}) =>  (
    <>
        <section className={`${styles.section} ${styles["has-background-primary"]} `}>
            <div className={`${styles.container} `}>

                <div className={styles.header}>
                    <h1 className={` ${styles["has-text-white"]} ${styles["is-size-2"]}`}>
                        Our System
                    </h1>
                </div>

                <br/>

                {data.map(e=>
                    <div className={` ${styles.columns} ${styles["is-vcentered"]} `}>
                        <div className={` ${styles.column} ${styles["is-one-fifth-desktop"]} ${styles["is-full-mobile"]} ${styles["has-text-centered"]} `}>
                            <span className={` ${styles["has-text-light"]} ${styles["make-it-large"]} ${styles["is-family-secondary"]} `}>{e.number}</span>
                        </div>
                        <div className={` ${styles.column} ${styles["is-four-fifths-desktop"]} ${styles["is-full-mobile"]} `}>
                            <div className={styles.box}>
                                <h2 className={` ${styles["is-size-3"]} ${styles["is-family-secondary"]} ${styles["has-text-black"]} `}>{e.heading}</h2>
                                <br/>
                                <div>
                                    {
                                        e.post.map(i => 
                                                <h4 className={` ${styles["is-size-5"]} `}>{i}.</h4>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                        </div>
                    )}

                

            </div>
        </section>
    </>
)

export async function getStaticProps() {
    return {
      props: {
          data: [
              {
                  number: 1,
                  heading: "Governing Body",
                  post: [ "President", "Vice President for Internal Affairs", "Vice President for External Affairs" , "Vice President for Finances", "Vice President for Capacity Building"]
              },
              {
                number: 2,
                heading: "Councils",
                post: [ "Council Chair", "Vice Chair", "12 Members", "Local Officers"]
            },
            {
                number: 3,
                heading: "Team of Officials",
                post: [ "State Directors", "Deputy Directors", "Director of Public Relations and Communications", "Information Technology Officer", "Logistics Officer"]
            }
          ]
      },
    }
  }  

export default OurSystem;