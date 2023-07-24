import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar_container}>
            <h2>Johan Mejia</h2>
            <div className={styles.navbar_items}>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}
export default NavBar;