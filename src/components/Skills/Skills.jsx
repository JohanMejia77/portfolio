import styles from './Skills.module.css'
import express from '../../assets/pngwing.com.png'
import css from '../../assets/Copia de pngwing.com.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import node from '../../assets/node.png'
import postgre from '../../assets/postgre.png'
import git from '../../assets/git.png'

const Skills = () => {
    return (
        <div className={styles.skills_container}>
            <h2>Skills</h2>
            <div className={styles.skills_items}>
                <div className={styles.skills_item}>
                    <img src={express} alt="" />
                    <p>Express.js</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={css} alt="" />
                    <p>CSS</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={js} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={react} alt="" />
                    <p>React</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={redux} alt="" />
                    <p>Redux Toolkit</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={node} alt="" />
                    <p>Node.js</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={postgre} alt="" />
                    <p>PostgreSQL</p>
                </div>
                <div className={styles.skills_item}>
                    <img src={git} alt="" />
                    <p>GIT</p>
                </div>
            </div>
        </div>
    )
}
export default Skills;