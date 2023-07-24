import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={styles.landing_container}>
            <h1>Full Stack Web Developer</h1>
            <p className={styles.landing_skills}>PostgreSQL | Express | React | Node</p>
            <p>I am a motivated and self-taught full stack web developer with strong front-end and back-end skills. I am familiar with SCRUM, GIT and GitHub, and I have a quick learning ability and adaptability. I am focused on solving problems and creating quality applications. I have developed challenging and satisfying personal projects, and I have outstanding interpersonal skills and the ability to work in a team. I am communicative, organized and results oriented, and I am fluent in English. I am interested in joining a dynamic team to continue expanding my knowledge and contributing to the development of innovative and high-quality solutions.</p>
            <img src="https://file.mockplus.com/image/2018/09/ab8ebe26-a88f-4c14-aafb-0a12f18eada2.jpg" alt="sotware development" />
        </div>
    )
}
export default Landing;