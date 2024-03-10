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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const isValid = () => {
    let valid = true;
    if (!username) {
      alert("El nombre de usuario no puede estar vacío");
      valid = false;
    }else if(!firstname){
      alert("El nombre no puede estar vacío");
      valid = false;
    }else if(!lastname){
      alert("El apellido no puede estar vacío");
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
      const data = {
        uid: user.uid,
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        favoritegame: "",
        memberships: [],
      };

      await createUser(data);
      alert("Registro exitoso:", user.email);
      navigate("/home");
    }else{
      alert("Error al iniciar sesión con Correo y Contraseña");
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
        alert("Registro exitoso:", user.email);

      } else {
        alert("Ya estabas registrado");
      }

      navigate("/home");

    }else{
      alert("Error al iniciar sesión con Google");
    }
  };

  return (
    <div className={`${styles.container}`}>
  <div className={styles.form}>
    <h1 className="mt-5 pt-5" >Sign Up</h1>
    <div className={styles.formContent}>
      <div className={styles.formLeft}>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter your First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter your Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className={styles.formRight}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
    </div>
    <div className={styles.signup}>
      <Button display="Sign Up" action={handleSignUpWithEmailAndPassword} />
      <div onClick={handleSignUpWithGoogle}>
        <img src="./GoogleLogo.png" alt="Google Logo" />
      </div>
    </div>
    <a href="/login" className="pb-5 mb-2">¿Ya tienes una cuenta? ¡Ingresa aquí!</a>
  </div>
</div>
  );
}
