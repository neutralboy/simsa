import OpenGraph from '../../components/open-graph';
import styles from './index.module.scss';

const Collaborators = ({ data }) => (
    <section className={`${styles.section} ${styles["is-secondary"]} `}>
        <OpenGraph title="Collaborators" url="collaborators" />
        <div className={styles.container}>
        
            <div className={styles.header}>
                <h1 className={styles["is-size-1"]}>
                    Collaborators
                </h1>
            </div>

            {
                data.map(e=>
                        <div key={Math.random()}>
                            <h2 className={` ${styles["is-size-3"]} ${styles["has-text-black"]} `}>
                                {e.title}
                            </h2>
                            <br/>
                            <div className={styles.box}>
                                <h3 className={` ${styles["is-family-secondary"]} ${styles["is-size-2"]}`}>{e.name}</h3>
                                <br/>
                                <div className={`${styles.columns} ${styles["is-vcentered"]} `}>
                                    <div className={` ${styles.column} ${styles["has-text-centered"]} ${styles["is-one-third-desktop"]} ${styles["is-full-mobile"]} `}>
                                        <img alt={e.name} src={e.image} />
                                    </div>
                                    <div className={` ${styles.column} ${styles["is-two-thirds-desktop"]} ${styles["is-full-mobile"]} `}>
                                        <p>
                                            {e.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
            }
        
        </div>
    </section>
)

export async function getStaticProps() {
    let data = [
        {
            title: "Research Partner",
            name: "MARCO POLO",
            desc: "MARCO POLO or Medical Analytics and Research Club of Osmania is a one of its kind Organisation focussed on igniting and rekindling the spark of research in undergraduate medical students. The belief in research at MARCO POLO is at a much broader sense encompassing all fields of science to better human health, rather than focussing only on the medical aspects of it. To date, they involve in article and case discussions to encourage thought processes in the members utilising various social media, organised MEDQuiz and currently are working on a collaboration project across fields of science kickstarting it with MEDTech 2020.",
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_250/v1596443945/simsa/logo.png"
        },
        {
            title: "Academy Partner",
            name: "Dr.Sajjan Academy",
            desc: `Being introduced to the medical fraternity for the past 15 years, I have been inspired by great purposes, extraordinary people and their thoughts. In this context of the immensely emerging economy and Healthcare, we have created a globally connected healthcare education system that will create a bright future for all.

            When it comes to studying or learning a skill, I always found that I remember and understand better when I teach to my friends. So a peer helping a peer is what makes the best way of learning. We have built a platform to help all students to learn and also create courses to help other students globally.
            
            Lets share our knowledge with the world and together let’s make the world a healthy place to live happily. Our passion for excellence, the solid foundation of knowledge, accountability, transparency and integrity in work will help to benefit humanity. We are optimistic about the future that holds for us`,
            image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_250/v1596443922/simsa/DR_SAJJAN_ACADEMY_LOGO.png"
        }
    ]
    return {
      props: {
          data
      },
    }
  }

export default Collaborators;