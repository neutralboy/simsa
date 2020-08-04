import styles from './index.module.scss';

import OpenGraph from '../../components/open-graph';

const Publications = ({ docs }) => (
    <section className={styles.section}>
    <OpenGraph title="Publications" url="publications" />
        <div className={styles.container}>

            <div className={styles.header}>
                <h1 className={styles["is-size-1"]}>Publications</h1>
            </div>

            <div className={`${styles["columns"]} ${styles["is-multiline"]} `}>
            {
                docs.map(e=>
                        <div key={Math.random()} className={` ${styles.column} ${styles["is-one-third-desktop"]} ${styles["is-full-mobile"]} `}>
                            <div className={styles.box}>
                                <h2 className={` ${styles["is-size-3"]} ${styles["has-text-black"]} ${styles["is-family-secondary"]} `}>{e.title}</h2>
                                <br/>
                                <h4 className={styles["is-size-5"]}>{e.subtitle}</h4>
                                <br/>
                                <a href={e.doc} className={` ${styles.button} ${styles["is-primary"]} ${styles["is-medium"]} ${styles["is-fullwidth"]} `}>
                                    Get the document
                                </a>
                            </div>
                        </div>
                    )
            }
               
            </div>

        </div>
    </section>
)

export async function getStaticProps() {
    let docs = [
        {
            title: "Myth Busters",
            subtitle: "Heath Awareness Campaign",
            doc: "https://res.cloudinary.com/poorna/image/upload/v1596116151/simsa/docs/MYTHBUSTERS-2.pdf"
        },
        {
            title: "Triage",
            subtitle: "Simple Triage and Rapid treatment works at the site of disaster",
            doc: "https://res.cloudinary.com/poorna/image/upload/v1596116153/simsa/docs/20200728_112729_0000.pdf"
        },
        {
            title: "Turn On",
            subtitle: "Understanding Porn and Pleasure Workshop",
            doc: "https://res.cloudinary.com/poorna/image/upload/v1596116160/simsa/docs/Turn_on_report.pdf"
        },
        {
            title: "Activity Report",
            subtitle: " Research Methodology July 2020",
            doc: "https://res.cloudinary.com/poorna/image/upload/v1596518706/simsa/docs/Copy_of_Copy_of_COVID-19-2.pdf"
        }
    ]
    return {
      props: {
          docs: docs
      },
    }
  }

export default Publications;