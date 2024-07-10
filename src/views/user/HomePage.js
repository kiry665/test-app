import styles from '../../styles/HomePage.module.css'


const HomePage = () => {
    return(
        <div className={styles.container}>
            <label className={styles.h1}>ISAAC</label>
            <label className={styles.h2}>Информационная система расширенного контроля доступа</label>
        </div>
    );
}

export default HomePage;