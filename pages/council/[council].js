import OpenGraph from '../../components/open-graph';
import {server} from '../../config';
import styles from './index.module.scss';

const Council = ({ data }) => (
    <>

    <OpenGraph title={"Council on "+data.title} url={"council/"+data.url} />

    <section className={styles.section}>
        <div className={styles.container}>

            <div className={`${styles.columns} ${styles["is-vcentered"]} `}>
                <div className={` ${styles.column} ${styles["is-three-quarters-desktop"]} ${styles["is-full-desktop"]} `}>
                    <div className={styles.header}>
                        <h1 className={styles["is-size-2"]}><span className={styles["council-on"]}>Council on</span>{data.title}</h1>
                    </div>
                    <h3 className={` ${styles["is-size-3"]} ${styles.subtitle} `}>{data.subtitle}</h3>
                </div>
                <div className={` ${styles.column} ${styles["is-one-quarter-desktop"]} ${styles["is-full-desktop"]} ${styles["has-text-left"]} `}>
                    <img src={data.image} alt={data.title} />
                </div>
            </div>
        
            <div className={styles.content}>
                <p className={styles["is-size-5"]}>
                    {data.text}
                </p>
            </div>

        </div>
    </section>
    </>
)

export async function getStaticProps(context) {
    console.log(context.params.council)
    const res = await fetch(`${server}/api/council?name=${context.params.council}`)
    const posts = await res.json()
    return {
      props: {
          data: posts
      },
    }
  }

  export async function getStaticPaths() {
    return {
        fallback: false,
      paths: [
        { params: { council: "sexual-and-reproductive-health" } },
        { params: { council: "medical-education" } },
        { params: { council: "public-heath" } },
        { params: { council: "human-rights-peace" } },
        { params: { council: "ethical-and-judicial" } },
        { params: { council: "longrange-planning-development" } },
        { params: { council: "constitution-bylaws-legislation" } }
      ]
    };
  }

export default Council;