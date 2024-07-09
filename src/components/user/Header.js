import React from 'react';
import styles from "../../styles/Header.module.css"
import { Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../AuthContext"; 

const Header = ({toggleMenu}) => {

    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleLoginLogout = () => {
        if (isAuthenticated) {
            logout();
        } else {
            navigate("/login");
        }
    }

    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <Button className={styles.leftButton} onClick={toggleMenu} variant="dark">
                    <GiHamburgerMenu/>
                </Button>
            </div>
            <div className={styles.right}>
                <Button className={styles.rightButton} onClick={handleLoginLogout} variant="dark">{isAuthenticated ? "Выйти" : "Войти"}</Button>
            </div>
        </div>
    );
}

export default Header;