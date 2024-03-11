import  { useState } from "react";
import styles from "./LogInPage.module.css";
import Input from "../../Components/Inputs/Input";
import Button from "../../Components/Buttons/Button";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../../controllers/auth";
import { createUser, isNewUser } from "../../controllers/users";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  // Estado local para el correo electrónico y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValid = () => {
    let valid = true;
    if (!email) {
      alert("El correo electrónico no puede estar vacío");
      valid = false;
    } else if (!password) {
      alert("La contraseña no puede estar vacía");
      valid = false;
    }
    return valid;
  };

  // Función para manejar el inicio de sesión
  const handleLoginWithEmailAndPassword = async () => {
    if (isValid() === false) {
      return;
    }
    const user = await loginWithEmailAndPassword(email, password);
    if (user) {
      //alert("Inicio de sesión exitoso:", user.email);
      localStorage.setItem('1','si')
      navigate("/home");
    } else {
      alert("Error al iniciar sesión con Google");
    }
  };

  

  const handleLogInWithGoogle = async () => {
    const user = await loginWithGoogle();
    if (user) {
      const isNew = await isNewUser(user.uid);
      if (!isNew) {
        // alert("Inicio de sesión exitoso:", user.email);
        navigate("/home");
        localStorage.setItem('1','si')
        return;
      }
      const data = {
        uid: user.uid,
        firstname: user.displayName.split(" ")[0],
        lastname: user.displayName.split(" ")[1],
        email: user.email,
        username: user.email.split("@")[0],
        favoritegame: "",
        memberships: [],
      };
      await createUser(data);
      alert("Inicio de sesión exitoso:", user);
      navigate("/home");
    } else {
      alert("Error al iniciar sesión con Google");
    }
  };

  // Funciones para manejar los cambios en los campos de entrada
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          <div onClick={handleLogInWithGoogle}>
            <img src="./GoogleLogo.png" alt="Google Logo" />
          </div>
        </div>
        <a href="/signup">¿Aún no tienes cuenta? ¡Regístrate!</a>
      </div>
    </div>
  );
}
