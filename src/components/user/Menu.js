import { Nav } from "react-bootstrap";
import styles from "../../styles/Menu.module.css"

const Menu = ( {isOpen} ) => {
    return (
        <div className={`${styles.verticalNavbar} ${isOpen ? styles.open : ''}`}>
        <Nav className="flex-column" bg-body-tertiary>
            <Nav.Item>
                <Nav.Link href="/" className={styles.navLink}>Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/check" className={styles.navLink}>Проверка доступа</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Доступ в ЗАТО</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Проверочные мероприятия</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Сотрудники на ППРЗО</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Автотранспорт на ППРЗО</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Материальные ценности</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Организации</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Реестр договоров</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className={styles.navLink}>Автотранспорт</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    );
};

export default Menu;