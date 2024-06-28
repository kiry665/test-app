import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from "../../styles/Login.module.css"

const Login = () => {
  const [login, setLLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
        <Form.Group className={styles.login}>
            <Form.Label>Логин</Form.Label>
            <InputGroup>
                <Form.Control
                type='text'
                placeholder="Введите логин"
                value={login}
                onChange={(e) => setLLogin(e.target.value)}
                />
            </InputGroup>
        </Form.Group>

        <Form.Group className={styles.password} controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <InputGroup>
                <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={styles.showHideButton} variant="outline-secondary" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
            </InputGroup>
        </Form.Group>
        <Button className={styles.loginButton}>Войти</Button>
    </div>
    
  );
};

export default Login;
