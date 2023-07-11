import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={styles.landing_container}>
            <h1>Full Stack Web Developer</h1>
                <p>PostgreSQL | Express | React | Node</p>
                <p>Motivated and self-taught Full Stack Web Developer with front-end (HTML, CSS, JavaScript, TypeScript, React, Redux Toolkit) and back-end (Node.js, Express.js, PostgreSQL, MongoDB, Sequelize ORM) skills. Familiar with SCRUM, GIT and GitHub. No work experience but quick learning ability and adaptability.
Focused on solving problems and creating quality applications. I have developed challenging and satisfying personal projects. Outstanding interpersonal skills and ability to work in a team. Communicative, organized and results oriented. English level B2.
Interested in joining a dynamic team to continue expanding knowledge and contributing to the development of innovative and high-quality solutions.</p>
                <img src="https://file.mockplus.com/image/2018/09/ab8ebe26-a88f-4c14-aafb-0a12f18eada2.jpg" alt="sotware development" />
        </div>
    )
}
export default Landing;