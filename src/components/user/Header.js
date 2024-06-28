import React from 'react';
import styles from "../../styles/Header.module.css"
import { Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({toggleMenu}) => {
    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <Button className={styles.leftButton} onClick={toggleMenu} variant="dark">
                    <GiHamburgerMenu className={styles.icon} />
                </Button>
            </div>
            <div className={styles.right}>
                <Button className={styles.rightButton} variant="dark">Выйти</Button>
            </div>
        </div>
    );
}

export default Header;