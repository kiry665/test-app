import React from 'react';
import styles from "../../styles/Header.module.css"
import { Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = ({toggleMenu}) => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/auth")
    }

    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <Button className={styles.leftButton} onClick={toggleMenu} variant="dark">
                    <GiHamburgerMenu/>
                </Button>
            </div>
            <div className={styles.right}>
                <Button className={styles.rightButton} onClick={handleLogin} variant="dark">Войти</Button>
            </div>
        </div>
    );
}

export default Header;