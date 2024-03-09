import styles from "./SignUpPage.module.css";
import Input from "../../Components/Inputs/Input";
import Button from "../../Components/Buttons/Button";
import { useState } from "react";
import {
  loginWithGoogle,
  registerWithEmailAndPassword,
} from "../../controllers/auth";
import { useNavigate } from "react-router-dom";
import { createUser, isNewUser } from "../../controllers/users";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const isValid = () => {
    let valid = true;
    if (!username) {
      alert("El nombre de usuario no puede estar vacío");
      valid = false;
    }else if (!email) {
      alert("El correo electrónico no puede estar vacío");
      valid = false;
    } else if (!password) {
      alert("La contraseña no puede estar vacía");
      valid = false;
    } else if (!confirmPassword) {
      alert("La confirmación de contraseña no puede estar vacía");
      valid = false;
    } else if (password !== confirmPassword) { 
      alert("Las contraseñas no coinciden");
      valid = false;
    }
    return valid;
  };


  const handleSignUpWithEmailAndPassword = async () => {
    if (isValid() === false ){
      return;
    }
    const user = await registerWithEmailAndPassword(email, password);
    if (user) {
      const isNew = isNewUser(user.uid);
      if (isNew) {
        const data = {
          uid: user.uid,
          firstname: "",
          lastname: "",
          username: username,
          email: email,
          favoritegame: "",
          memberships: [],
        };

        await createUser(data);
      }

      alert("Registro exitoso:", user.email);
      navigate("/home");
    }
  };

  const handleSignUpWithGoogle = async () => {
    const user = await loginWithGoogle();
    if (user) {
        const isNew = isNewUser(user.uid);
      if (isNew) {
        let username = prompt("Ingresa tu nombre de usuario:");
        while (!username) {
          alert("El nombre de usuario no puede estar vacío");
          username = prompt("Ingresa tu nombre de usuario:");
        }
        const data = {
          uid: user.uid,
          firstname: user.displayName.split(" ")[0],
          lastname: user.displayName.split(" ")[1],
          username: username,
          email: user.email,
          favoritegame: "",
          memberships: [],
        };

        await createUser(data);
      } else {
        alert("Ya estabas registrado");
      }

      alert("Registro exitoso:", user.email);
      navigate("/home");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Sign Up</h1>
        <Input
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="E-Mail"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Contraseña"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirmar Contraseña"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className={styles.signup}>
          <Button display="Sign Up" action={handleSignUpWithEmailAndPassword} />
          <div onClick={handleSignUpWithGoogle} >
            <img src="./GoogleLogo.png" alt="Google Logo" />
          </div>
        </div>
        <a href="">¿Ya tienes una cuenta? ¡Ingresa aquí!</a>
      </div>
    </div>
  );
}
