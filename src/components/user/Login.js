import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from "../../styles/Login.module.css"
import Cookies from 'js-cookie';
import config from '../../config';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { auth } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, {
        login: login,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      });

      const token = response.data.token;
      const expires = new Date(response.data.expires)

      // Cookies.set('token', token, { expires: expires });
      auth(token, expires);
      Cookies.set('login', login, { expires: expires });
      

      // clearMessages();
      // setSuccessMessage('You are login')
      navigate("/")
      // handleLogin();
    } catch (error) {
      // clearMessages();
      // setErrorMessage('Login Failed')
    }
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmitLogin}>
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
        <Button className={styles.loginButton} type="submit">Войти</Button>
      </Form>
    </div>
    
  );
};

export default Login;
