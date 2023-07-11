import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar_container}>
            <h2>Johan Mejia</h2>
            <div className={styles.navbar_items}>
                <a>About</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    )
}
export default NavBar;