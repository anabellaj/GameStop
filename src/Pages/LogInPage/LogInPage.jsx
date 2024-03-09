import React, { useEffect, useState } from 'react';
import styles from './LogInPage.module.css';
import Input from '../../Components/Inputs/Input';
import Button from '../../Components/Buttons/Button';
import { loginWithEmailAndPassword, loginWithGoogle } from '../../controllers/auth';
import { useUser } from '../../context/user';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {

    // Estado local para el correo electrónico y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Funciones para manejar los cambios en los campos de entrada
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Función para manejar el inicio de sesión
    const handleLoginWithEmailAndPassword = async () => {
        const user = await loginWithEmailAndPassword(email, password);
        if (user) {
            alert('Inicio de sesión exitoso:', user);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Log In</h1>
                <Input
                    placeholder="E-Mail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <Input
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className={styles.login}>
                    <Button display="Log In" action={handleLoginWithEmailAndPassword} />
                    <a href="">
                        <img src="./GoogleLogo.png" alt="Google Logo" />
                    </a>
                </div>
                <a href="">¿Aún no tienes cuenta? ¡Regístrate!</a>
            </div>
        </div>
    );
}
