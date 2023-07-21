import styles from './Projects.module.css'
import img1 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 5.51.00 p.m..png'
import img2 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 5.52.12 p.m..png'
import img3 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 6.07.56 p.m..png'
import img4 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 8.09.06 p.m..png'
import img5 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 8.53.13 p.m..png'
import img6 from '../../assets/Captura de pantalla 2023-07-20 a la(s) 8.58.59 p.m..png'

const Projects = () => {
    return (
        <div className={styles.projects_container}>
            <h2>Projects</h2>
            <div className={styles.projects_items}>
                <div className={styles.projects_item}>
                    <div className={styles.projects_item_info}>
                        <h3>Countries</h3>
                        <p>Website that allows the visualization of information from all the countries of the world as well as the creation of activities for them through a form. It has the search functions, filtering by continents, activities, ordering by name and population.</p>
                    </div>
                    <div className={styles.projects_item_img}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className={styles.projects_item}>
                    <div className={styles.projects_item_info}>
                        <h3>Nature Essence</h3>
                        <p>Website that exposes the sale of natural products. It has user roles such as customer, seller, and administrator. It has filters, search, login, password recovery, seller and administrator panel, user management, image upload, purchase and sales report, user CRUD, products and much more.</p>
                    </div>
                    <div className={styles.projects_item_img}>
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;