import styles from './Contact.module.css'
import {BiLogoGmail} from 'react-icons/bi'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
    return (
        <div className={styles.contact_container} id='contact'>
            <h2>Contact</h2>
            <div className={styles.contact_items}>
                <div className={styles.contact_item}>
                    <BiLogoGmail size={25}/>
                    <a href="mailto:stivenmg77@gmail.com">stivenmg77@gmail.com</a>
                </div>
                <div className={styles.contact_item}>
                    <FaLinkedin size={25}/>
                    <a href='https://www.linkedin.com/in/johan-mejia-frontend'>/johan-mejia-frontend</a>
                </div>
                <div className={styles.contact_item}>
                    <BsGithub size={25}/>
                    <a href='https://github.com/JohanMejia77'>/JohanMejia77</a>
                </div>
            </div>
        </div>
    )
}
export default Contact;